import "server-only";

import { supabaseServer } from "@/lib/supabase-server";
import type { PortalRole, PortalUserId } from "./session";

type UserRoleRow = {
  role: string;
};

function normalizeRole(value: unknown): PortalRole | null {
  if (typeof value !== "string") return null;
  const role = value.trim().toLowerCase();
  if (role === "admin" || role === "judge") return role;
  return null;
}

function toDatabaseRoleId(userRoleId: PortalUserId): string | number {
  if (typeof userRoleId === "number") return userRoleId;

  const trimmed = userRoleId.trim();
  if (/^\d+$/.test(trimmed)) {
    const asNumber = Number(trimmed);
    if (Number.isSafeInteger(asNumber)) return asNumber;
  }

  return trimmed;
}

export async function verifyRoleMapping({
  userRoleId,
  expectedRole,
}: {
  userRoleId: PortalUserId;
  expectedRole: PortalRole;
}) {
  const { data, error } = await supabaseServer
    .from("user_roles")
    .select("role")
    .eq("id", toDatabaseRoleId(userRoleId))
    .maybeSingle<UserRoleRow>();

  if (error) {
    return { ok: false as const, status: 500 as const, error: error.message };
  }

  if (!data || normalizeRole(data.role) !== expectedRole) {
    return { ok: false as const, status: 403 as const, error: "Unauthorized role for this portal." };
  }

  return { ok: true as const };
}
