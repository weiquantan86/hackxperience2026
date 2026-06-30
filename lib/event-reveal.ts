/**
 * Landing-page reveal gate for tracks and judges.
 * Set NEXT_PUBLIC_REVEAL_TRACKS_AND_JUDGES=true in Vercel when ready to publish.
 * Defaults to hidden (unset or any value other than "true").
 */
export const REVEAL_TRACKS_AND_JUDGES =
  process.env.NEXT_PUBLIC_REVEAL_TRACKS_AND_JUDGES === "true";
