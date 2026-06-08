import { useEffect, useRef, useState } from "react";
import { getLandscapeVisibleCount } from "../lib/breakpoints";
import impect1 from "../assets/impect/Impect1.svg";
import impect2 from "../assets/impect/Impect2.svg";
import impect3 from "../assets/impect/impect3.svg";
import readMoreDarkArrow from "../assets/impect/readMoreDarkGrayUpArrow.svg";
import frame6 from "../assets/impect/AiLandscape/Frame (6).svg";
import frame7 from "../assets/impect/AiLandscape/Frame (7).svg";
import frame8 from "../assets/impect/AiLandscape/Frame (8).svg";
import frame9 from "../assets/impect/AiLandscape/Frame (9).svg";
import frame10 from "../assets/impect/AiLandscape/Frame (10).svg";
import arrowLeft from "../assets/impect/AiLandscape/arrowLeft.svg";
import arrowRight from "../assets/impect/AiLandscape/arrowRight.svg";
import whiteCheck from "../assets/impect/AiLandscape/whiteRightClick.svg";
import darkCheck from "../assets/impect/AiLandscape/darkGrayRightClick.svg";

const impactCards = [
  {
    illustration: impect1,
    content: (
      <>
        Global delivery presence with engineering centers in the{" "}
        <span className="font-bold text-[#2365AA]">Pune</span> and{" "}
        <span className="font-bold text-[#2365AA]">Dubai</span>.
      </>
    ),
  },
  {
    illustration: impect2,
    content: (
      <>
        Serving customer in{" "}
        <span className="font-bold text-[#2365AA]">NZ, Canada, Dubai and UK</span>.
      </>
    ),
  },
  {
    illustration: impect3,
    content: (
      <>
        Hold patent and research papers in{" "}
        <span className="font-bold text-[#2365AA]">Generative AI</span> and{" "}
        <span className="font-bold text-[#2365AA]">Video analytics</span>.
      </>
    ),
  },
];

type LandscapeCardData = {
  title: string;
  items: string[];
  variant: "blue" | "light";
  illustration?: string;
  stagger?: "up" | "down";
};

const landscapeCards: LandscapeCardData[] = [
  {
    title: "Survival Analysis",
    variant: "blue",
    items: ["Survival Analysis model", "Prediction model"],
    illustration: frame6,
    stagger: "down",
  },
  {
    title: "Gen AI Matching Engine",
    variant: "light",
    items: [
      "Content Recommendation",
      "Course Recommendation",
      "Job title vs Resume Matching",
    ],
    illustration: frame7,
    stagger: "up",
  },
  {
    title: "Agentic Bot",
    variant: "blue",
    items: [
      "Multi-Agent Healthcare",
      "Multi-Agent Ed Tech bot",
      "Virtual agent for Game industry",
    ],
    illustration: frame8,
    stagger: "down",
  },
  {
    title: "Digitization of Content",
    variant: "light",
    items: [
      "Text & Image Extraction (OCR)",
      "Text to Speech",
      "Speech to Text",
      "Translation",
    ],
    illustration: frame9,
    stagger: "up",
  },
  {
    title: "Audio & Video Analytics",
    variant: "blue",
    items: [
      "Deepfake Detection",
      "Driver behaviour Detection",
      "Converting camera into AI Edge",
      "Live Polls over Video E-proctoring",
    ],
    illustration: frame10,
    stagger: "down",
  },
  {
    title: "Content Generation",
    variant: "light",
    items: [
      "Summary Creation",
      "Keyword Extraction",
      "Content Curation",
      "Quiz and Assessment",
    ],
    stagger: "up",
  },
];

function ImpactReadMoreButton() {
  return (
    <a
      href="#"
      className="mt-8 inline-flex cursor-pointer items-center gap-3 rounded-full bg-white py-2 pl-5 pr-2 transition hover:bg-white/95 sm:mt-10 sm:pl-6 lg:mt-10"
    >
      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#272935] sm:text-[11px]">
        READ MORE
      </span>
      <img src={readMoreDarkArrow} alt="" aria-hidden className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" />
    </a>
  );
}

function ImpactProgressBar({ activeIndex, total }: { activeIndex: number; total: number }) {
  const segment = 100 / total;
  return (
    <div className="relative mt-8 h-px w-full bg-white/30 md:mt-10 lg:mt-10">
      <div
        className="absolute -top-px h-[3px] bg-white transition-all duration-300"
        style={{
          width: `${segment}%`,
          left: `${activeIndex * segment}%`,
        }}
      />
    </div>
  );
}

export function WorkThatProvesImpact() {
  const activeIndex = 0;

  return (
    <section className="overflow-hidden bg-[#113D77] px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:flex-row lg:items-start lg:gap-14">
          <div className="shrink-0 lg:w-[32%]">
            <h2 className="text-[28px] font-bold leading-[1.1] text-white sm:text-[36px] md:text-[40px] lg:text-[56px] lg:leading-[1.08]">
              Work that
              <br />
              proves
              <br />
              our impact
            </h2>
            <ImpactReadMoreButton />
          </div>

          <div className="min-w-0 flex-1">
            <div className="-mx-4 flex gap-4 overflow-x-auto scroll-smooth px-4 pb-2 snap-x snap-mandatory sm:-mx-6 sm:gap-5 sm:px-6 md:mx-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 md:pb-0 md:snap-none lg:gap-6">
              {impactCards.map((card, index) => (
                <article
                  key={index}
                  className="relative flex w-[min(82vw,280px)] shrink-0 snap-center flex-col overflow-hidden rounded-[20px] bg-white px-5 pb-3 pt-6 sm:w-[min(78vw,300px)] sm:rounded-[22px] sm:px-6 sm:pb-4 sm:pt-7 md:w-auto md:shrink md:snap-align-none md:min-h-[280px] md:rounded-[24px] lg:min-h-[340px] lg:rounded-[28px] lg:px-7 lg:pb-4 lg:pt-8"
                >
                  <p className="relative z-10 max-w-[88%] text-[14px] font-medium leading-[1.55] text-[#272935] sm:text-[15px] md:text-[15px] lg:text-[17px]">
                    {card.content}
                  </p>
                  <img
                    src={card.illustration}
                    alt=""
                    aria-hidden
                    className="pointer-events-none absolute bottom-0 right-0 z-10 h-[105px] w-auto sm:h-[120px] md:h-[125px] lg:h-[155px]"
                  />
                </article>
              ))}
            </div>
            <ImpactProgressBar activeIndex={activeIndex} total={impactCards.length} />
          </div>
        </div>
      </div>
    </section>
  );
}

function LandscapeCard({
  card,
  className = "",
}: {
  card: LandscapeCardData;
  className?: string;
}) {
  const isBlue = card.variant === "blue";

  return (
    <article
      data-landscape-card
      className={`relative flex shrink-0 snap-center flex-col overflow-hidden rounded-[22px] px-5 pb-5 pt-6 sm:rounded-[24px] sm:px-6 sm:pb-6 sm:pt-7 md:rounded-[26px] md:px-7 md:pb-6 md:pt-8 lg:rounded-[28px] ${
        isBlue ? "bg-[#2365AA] text-white" : "bg-[#F0F3F7] text-[#272935]"
      } ${card.stagger === "up" ? "lg:mt-8" : ""} ${className}`}
    >
      <h3 className="text-base font-bold leading-tight sm:text-lg md:text-xl lg:text-xl">
        {card.title}
      </h3>
      <ul className="mt-4 flex flex-1 flex-col gap-2.5 sm:mt-5 sm:gap-3 md:mt-6 md:gap-3.5">
        {card.items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 sm:gap-3">
            <img
              src={isBlue ? whiteCheck : darkCheck}
              alt=""
              aria-hidden
              className="mt-0.5 h-3.5 w-[18px] shrink-0"
            />
            <span className="text-[12px] leading-snug sm:text-[13px] md:text-sm lg:text-sm">
              {item}
            </span>
          </li>
        ))}
      </ul>
      {card.illustration ? (
        <div className="mt-5 flex items-end justify-center sm:mt-6 md:mt-8">
          <img
            src={card.illustration}
            alt=""
            aria-hidden
            className="h-auto w-full max-w-[170px] object-contain sm:max-w-[190px] md:max-w-[210px] lg:max-w-[240px]"
          />
        </div>
      ) : (
        <div className="mt-5 h-20 sm:mt-6 md:mt-8 md:h-24" aria-hidden />
      )}
    </article>
  );
}

function AiProgressBar({ activeIndex, total }: { activeIndex: number; total: number }) {
  const segment = 100 / total;
  return (
    <div className="relative mx-3 h-px min-w-[140px] flex-1 max-w-[520px] bg-[#D9D9D9] sm:mx-4 md:mx-6">
      <div
        className="absolute -top-[1.5px] h-[4px] bg-[#2365AA] transition-all duration-300"
        style={{
          width: `${segment}%`,
          left: `${activeIndex * segment}%`,
        }}
      />
    </div>
  );
}

export function AILandscape() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideOffset, setSlideOffset] = useState(0);
  const [maxIndex, setMaxIndex] = useState(Math.max(0, landscapeCards.length - 1));

  const goPrev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const goNext = () => setActiveIndex((i) => Math.min(maxIndex, i + 1));

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateOffset = () => {
      const card = track.querySelector("[data-landscape-card]") as HTMLElement | null;
      if (!card) return;
      const gap = parseFloat(getComputedStyle(track).gap) || 20;
      const visible = getLandscapeVisibleCount(window.innerWidth);
      setMaxIndex(Math.max(0, landscapeCards.length - visible));
      setSlideOffset(activeIndex * (card.offsetWidth + gap));
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, [activeIndex]);

  useEffect(() => {
    setActiveIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  return (
    <section className="overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#272935] sm:text-[10px] md:text-[11px]">
            Smart Solutions for a{" "}
            <span className="text-[#2365AA]">Smarter Tomorrow</span>
          </p>
          <h2 className="mt-3 text-[26px] font-bold text-[#272935] sm:mt-4 sm:text-[32px] md:text-[36px] lg:text-[44px]">
            Our AI Landscape
          </h2>
        </div>

        <div className="relative mt-10 sm:mt-11 md:mt-12 lg:mt-14">
          <div className="-mx-4 overflow-hidden px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0">
            <div
              ref={trackRef}
              className="flex snap-x snap-mandatory items-end gap-4 scroll-smooth transition-transform duration-500 ease-out sm:gap-5 md:gap-6 lg:gap-7"
              style={{ transform: `translateX(-${slideOffset}px)` }}
            >
              {landscapeCards.map((card) => (
                <LandscapeCard
                  key={card.title}
                  card={card}
                  className="w-[min(76vw,268px)] min-h-[340px] sm:w-[280px] sm:min-h-[360px] md:w-[300px] md:min-h-[400px] lg:w-[320px] lg:min-h-[440px]"
                />
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center sm:mt-10 md:mt-12">
            <button
              type="button"
              onClick={goPrev}
              disabled={activeIndex === 0}
              aria-label="Previous slide"
              className="shrink-0 cursor-pointer transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-35"
            >
              <img src={arrowLeft} alt="" className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14" />
            </button>

            <AiProgressBar activeIndex={activeIndex} total={landscapeCards.length} />

            <button
              type="button"
              onClick={goNext}
              disabled={activeIndex >= maxIndex}
              aria-label="Next slide"
              className="shrink-0 cursor-pointer transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-35"
            >
              <img src={arrowRight} alt="" className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
