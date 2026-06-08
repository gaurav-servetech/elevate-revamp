import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import faqBarChartPerson from "../assets/FAQ/FAQBarchatPerson.svg";
import worldMapFaq from "../assets/footer/worldmapfooter.svg";
import readMoreDarkArrow from "../assets/impect/readMoreDarkGrayUpArrow.svg";
// import storyDiagonalBg from "../assets/testimonial/storySection/Vector 6903 (3).svg";

type WorkItem = {
  id: string;
  title: string;
  currentSituation?: string;
  technologies?: string[];
  solution?: string;
  results?: string;
};

const latestWorks: WorkItem[] = [
  {
    id: "001",
    title: "Recommendation/Matching",
    currentSituation:
      "HR teams and recruiters spend significant time manually reviewing resumes and job descriptions. The process is slow, inconsistent across reviewers, and difficult to scale when hiring volume increases across multiple regions.",
    technologies: ["Figma", "AI ML", "Generative AI", "Python", "Grok", "Open AI"],
    solution:
      "We built an AI matching engine that compares job titles, skills, and resume content using semantic similarity and structured scoring. The system ranks candidates and surfaces explainable match reasons for recruiters.",
    results:
      "Reduced manual screening effort, improved consistency in shortlisting, and minimized bias by applying the same evaluation criteria across every applicant profile.",
  },
  {
    id: "002",
    title: "Customer Support AI Agent",
    currentSituation:
      "Support teams handled repetitive queries across channels, leading to longer response times and inconsistent answers during peak hours.",
    technologies: ["Generative AI", "Python", "Open AI", "Figma"],
    solution:
      "Deployed a multi-intent conversational agent integrated with knowledge bases and escalation workflows for complex tickets.",
    results:
      "Faster first-response times and higher customer satisfaction on routine inquiries.",
  },
  {
    id: "003",
    title: "Real Time Video Analytics",
    currentSituation:
      "Operations needed live insights from camera feeds without sending all raw video to the cloud.",
    technologies: ["AI ML", "Python", "Video Analytics"],
    solution:
      "Edge-ready pipelines for detection, alerting, and dashboard summaries from live streams.",
    results:
      "Lower latency alerts and reduced bandwidth costs for monitoring use cases.",
  },
  {
    id: "004",
    title: "Contract Management",
    currentSituation:
      "Legal teams reviewed large volumes of contracts manually, increasing turnaround time and risk of missed clauses.",
    technologies: ["Generative AI", "Python", "AI ML"],
    solution:
      "Automated clause extraction, risk highlighting, and searchable contract repositories.",
    results:
      "Shorter review cycles and improved auditability across contract portfolios.",
  },
  {
    id: "005",
    title: "Ed Tech",
    currentSituation:
      "Learners needed personalized content paths based on skill level, goals, and prior assessment performance.",
    technologies: ["Generative AI", "AI ML", "Figma", "Python"],
    solution:
      "Adaptive recommendation flows for courses, quizzes, and study plans tied to learner progress data.",
    results:
      "Higher engagement and improved completion rates across learning modules.",
  },
];

function WorkAccordionPanel({ work }: { work: WorkItem }) {
  return (
    <div className="pt-6 sm:pt-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <div className="rounded-2xl bg-white p-5 sm:p-6 lg:rounded-3xl lg:p-7">
            <h4 className="text-base font-bold text-[#272935] sm:text-lg">Current Situation</h4>
            <p className="mt-3 text-[13px] leading-relaxed text-[#272935]/85 sm:text-sm">
              {work.currentSituation}
            </p>
          </div>
          <img
            src={faqBarChartPerson}
            alt=""
            aria-hidden
            className="mx-auto mt-6 h-auto w-[min(100%,200px)] lg:mx-0 lg:mt-8 lg:w-[216px]"
          />
        </div>

        <div className="lg:col-span-7">
          <h4 className="text-sm font-semibold text-white sm:text-base">Technology/Tools Used</h4>
          <div className="mt-4 flex flex-wrap gap-2 sm:gap-2.5">
            {work.technologies?.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/35 bg-[#0f3568] px-3 py-1.5 text-[11px] text-white sm:text-xs"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/30 bg-white/10 p-5 backdrop-blur-sm sm:p-6">
              <h4 className="text-sm font-bold text-white sm:text-base">Solution for Situation</h4>
              <p className="mt-3 text-[12px] leading-relaxed text-white/90 sm:text-[13px]">
                {work.solution}
              </p>
            </div>
            <div className="rounded-2xl border border-white/30 bg-white/10 p-5 backdrop-blur-sm sm:p-6">
              <h4 className="text-sm font-bold text-white sm:text-base">Results</h4>
              <p className="mt-3 text-[12px] leading-relaxed text-white/90 sm:text-[13px]">
                {work.results}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const DEFAULT_OPEN_ID = latestWorks[0]?.id ?? "001";

export default function LatestWorks() {
  const [openId, setOpenId] = useState<string | null>(DEFAULT_OPEN_ID);

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="relative overflow-hidden bg-[#113D77] px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10 lg:py-20">
      <img
        src={worldMapFaq}
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-[-8%] left-[-12%] z-0 w-[min(110vw,920px)] max-w-none opacity-[0.14] sm:bottom-[-6%] sm:left-[-10%] sm:opacity-[0.16] lg:bottom-[-5%] lg:left-[-8%] lg:w-[1280px] lg:opacity-[0.18]"
      />
      <img
        src={''}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-[200px] w-auto opacity-80 sm:h-[260px] lg:h-[320px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] sm:text-[11px]">
            <span className="text-[#A1B1CB]">Our Creative </span>
            <span className="text-[#2365AA]">Journey</span>
          </p>
          <h2 className="mt-3 text-[32px] font-bold text-white sm:text-[40px] lg:text-[48px]">
            Latest Works
          </h2>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 transition hover:bg-white/95 sm:mt-8"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#272935]">
              View all case studies
            </span>
            <img src={readMoreDarkArrow} alt="" aria-hidden className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" />
          </a>
        </div>

        <div className="relative z-10 mt-10 w-full sm:mt-12 lg:mt-14">
          {latestWorks.map((work) => {
            const isOpen = openId === work.id;

            return (
              <div key={work.id} className="w-full">
                <div
                  className="grid w-full grid-cols-[minmax(3.5rem,auto)_1fr_auto] items-center gap-x-4 py-5 sm:grid-cols-[minmax(4rem,auto)_1fr_auto] sm:gap-x-5 sm:py-6 md:gap-x-6 md:py-7 lg:grid-cols-[minmax(4.5rem,auto)_1fr_auto] lg:gap-x-8 lg:py-8"
                >
                  <span className="text-sm font-medium text-[#A1B1CB] sm:text-base lg:text-lg">
                    / {work.id}
                  </span>

                  <span className="h-px w-full min-w-0 bg-white/25" aria-hidden />

                  <div className="flex shrink-0 items-center gap-2 pl-2 sm:gap-2.5 sm:pl-3 lg:gap-3">
                    <span className="whitespace-nowrap text-lg font-medium text-white sm:text-xl md:text-2xl lg:text-[28px]">
                      {work.title}
                    </span>
                    <button
                      type="button"
                      onClick={() => toggle(work.id)}
                      aria-expanded={isOpen}
                      aria-label={`${isOpen ? "Collapse" : "Expand"} ${work.title}`}
                      className="shrink-0 cursor-pointer p-1 text-white transition-opacity hover:opacity-80"
                    >
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" aria-hidden />
                      ) : (
                        <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" aria-hidden />
                      )}
                    </button>
                  </div>
                </div>

                {isOpen && work.currentSituation && (
                  <div className="w-full pb-6 sm:pb-8 lg:pb-10">
                    <WorkAccordionPanel work={work} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
