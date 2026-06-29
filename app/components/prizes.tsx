import React from "react";
import { HACKATHON_PRIZES, PRIZE_POOL_TOTAL } from "@/lib/hackathon-prizes";

const RED = "#c00000";
const DARK_BG = "#1d1c17";
const CREAM_BG = "#f2ede5";
const CREAM_CARD = "#e7e2da";
const WHITE = "#ffffff";
const TEXT_DIM = "rgba(255, 255, 255, 0.7)";

const Prizes: React.FC = () => {
  const official = HACKATHON_PRIZES.filter((p) => !p.informal);
  const informal = HACKATHON_PRIZES.filter((p) => p.informal);

  return (
    <section
      id="prizes"
      className="py-24 px-6 max-w-7xl mx-auto font-sans scroll-mt-11"
      style={{ fontFamily: "Montserrat", backgroundColor: CREAM_BG }}
    >
      <div className="mb-10 md:mb-14">
        <div
          className="inline-block px-3 py-1.5 font-mono uppercase text-[10px] md:text-xs tracking-widest font-bold mb-5"
          style={{ backgroundColor: RED, color: WHITE }}
        >
          // PRIZE POOL
        </div>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-4"
          style={{ color: DARK_BG }}
        >
          WIN BIG. BUILD BOLD.
        </h2>
        <p className="text-base sm:text-lg opacity-80 font-medium max-w-3xl" style={{ color: DARK_BG }}>
          Over <strong>{PRIZE_POOL_TOTAL}</strong> in track prizes, sponsor awards, and community votes — across Care Forward, Friction To Flow, and special categories.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10">
        {official.map((award) => (
          <div
            key={award.id}
            className="p-6 md:p-8"
            style={{
              backgroundColor: DARK_BG,
              color: WHITE,
              boxShadow: `8px 8px 0px 0px ${RED}`,
            }}
          >
            <div className="flex items-start gap-3 mb-4">
              <span className="text-xl md:text-2xl" aria-hidden>
                {award.emoji}
              </span>
              <div>
                <h3 className="text-lg md:text-xl font-black uppercase tracking-tight leading-tight">
                  {award.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed" style={{ color: TEXT_DIM }}>
                  {award.summary}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-5">
              {award.tiers.map((tier) => (
                <div
                  key={tier.label}
                  className="px-4 py-3 border border-white/15 min-w-[120px]"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
                >
                  <div className="font-mono text-[10px] uppercase tracking-widest" style={{ color: RED }}>
                    {tier.label}
                  </div>
                  <div className="text-2xl md:text-3xl font-black mt-1">{tier.amount}</div>
                  {tier.note ? (
                    <div className="mt-1 text-[10px] sm:text-xs leading-relaxed opacity-70">{tier.note}</div>
                  ) : null}
                </div>
              ))}
            </div>

            <ul className="space-y-1.5 text-[11px] sm:text-xs leading-relaxed" style={{ color: TEXT_DIM }}>
              {award.criteria.map((item) => (
                <li key={item} className="flex gap-2">
                  <span style={{ color: RED }} aria-hidden>
                    ›
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {informal.length > 0 ? (
        <div
          className="p-5 md:p-6 border-2 font-mono text-[11px] sm:text-xs"
          style={{ borderColor: DARK_BG, backgroundColor: CREAM_CARD, color: DARK_BG }}
        >
          <div className="font-bold tracking-widest uppercase mb-2" style={{ color: RED }}>
            // INFORMAL AWARDS
          </div>
          {informal.map((award) => (
            <div key={award.id} className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span>
                {award.emoji} {award.title}
              </span>
              <span className="font-bold">{award.tiers[0]?.amount}</span>
              <span className="opacity-70">— {award.summary}</span>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
};

export default Prizes;
