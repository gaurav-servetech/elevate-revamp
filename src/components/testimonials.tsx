import { useEffect, useRef, useState } from "react";
import elevateBadgeIcon from "../assets/testimonial/Group 84.svg";
import blogImage1 from "../assets/testimonial/Rectangle 90.svg";
import blogImage2 from "../assets/testimonial/Rectangle 90 (1).svg";
import blogImage3 from "../assets/testimonial/Rectangle 90 (2).svg";
import partner3i from "../assets/testimonial/3i-Infotech-Logo 1.svg";
import partnerGenai from "../assets/testimonial/genai_logo-main 1.svg";
import partnerTeksoft from "../assets/testimonial/image 10.svg";
import viewAllArrow from "../assets/nav/lets-connect.svg";
import arrowNext from "../assets/testimonial/storySection/Group 76.svg";
import arrowPrev from "../assets/testimonial/storySection/Group 77.svg";
import storyProfile1 from "../assets/testimonial/storySection/image 3.svg";
import infotrackLogo from "../assets/testimonial/storySection/image 4.svg";
import esiLogo from "../assets/testimonial/storySection/Mask group (2).svg";
import storyCardBg1 from "../assets/testimonial/storySection/Rectangle 87.svg";
import storyCardBg2 from "../assets/testimonial/storySection/Rectangle 88.svg";
import storyDiagonalBg from "../assets/testimonial/storySection/Vector 6903 (3).svg";
import quoteMark from "../assets/testimonial/storySection/”.svg";
import thirdCardLogo from "../assets/testimonial/3i-Infotech-Logo 1.svg";

const blogPosts = [
  {
    date: "2026-02-09",
    image: blogImage1,
    title: "Building a Foundation Model for Personalized Recommendations",
  },
  {
    date: "2026-03-10",
    image: blogImage2,
    title: "Transforming Real Estate Search with Knowledge Graphs: A Technical Deep Dive",
  },
  {
    date: "2025-10-13",
    image: blogImage3,
    title: "Structuring an Al Knowledge Assistant- And Why It Matters",
  },
];

const partners = [
  { name: "3i Infotech", logo: partner3i },
  { name: "GENAI Consulting", logo: partnerGenai },
  { name: "Teksoft Solutions", logo: partnerTeksoft },
];

const stories = [
  {
    cardBg: storyCardBg1,
    logo: esiLogo,
    logoClassName: "h-[34px] w-auto max-w-[150px] sm:h-[38px] sm:max-w-[170px]",
    profile: storyProfile1,
    quote:
      "Partnered with Elevate Trust for custom AI solutions and integration. The platform's adaptive learning and intelligent automation transformed our client success strategy and helped us deliver measurable ROI for enterprise customers.",
    name: "Amet Consec",
    title: "CEO at ESI ecom",
  },
  {
    cardBg: storyCardBg2,
    logo: infotrackLogo,
    logoClassName: "h-[34px] w-auto max-w-[160px] sm:h-[38px] sm:max-w-[180px]",
    profile: null,
    quote:
      "We have been incredibly impressed with the capabilities of this product. The adaptive learning algorithms and advanced automation significantly improved our operational efficiency and customer engagement across multiple channels.",
    name: "Amet Consec",
    title: "CEO at INFOTRACK",
  },
  {
    cardBg: "#F4F7FB",
    logo: thirdCardLogo,
    logoClassName: "h-11 w-11 sm:h-12 sm:w-12",
    profile: null,
    quote:
      "Elevate Trust helped us scale AI-driven workflows with confidence. Their team understood our domain quickly and delivered solutions that exceeded our expectations on timeline and quality.",
    name: "Amet Consec",
    title: "CEO at ESI ecom",
  },
];

function StoriesOfImpact() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideOffset, setSlideOffset] = useState(0);
  const maxIndex = Math.max(0, stories.length - 2);

  const goPrev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const goNext = () => setActiveIndex((i) => Math.min(maxIndex, i + 1));

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateOffset = () => {
      const card = track.querySelector("article");
      if (!card) return;
      const gap = parseFloat(getComputedStyle(track).gap) || 24;
      setSlideOffset(activeIndex * (card.getBoundingClientRect().width + gap));
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, [activeIndex]);

  return (
    <section className="relative overflow-hidden bg-[#113D77] px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      <img
        src={storyDiagonalBg}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-[360px] w-auto opacity-100 sm:h-[440px] lg:h-[520px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] sm:text-xs">
            <span className="text-white">Client </span>
            <span className="text-[#A1B1CB]">Testimonials</span>
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-[42px]">
            Stories of Impact
          </h2>

          <a
            href="#"
            className="mt-5 inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#113D77] transition hover:bg-white/90"
          >
            View all
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#113D77]">
              <img src={viewAllArrow} alt="" aria-hidden className="h-3.5 w-3.5 brightness-0 invert" />
            </span>
          </a>
        </div>

        <div className="relative mt-10 lg:mt-12">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#1a4d8c]/45 backdrop-blur-[2px] sm:rounded-[40px] lg:rounded-[48px]">
            <div className="relative px-4 pb-7 pt-5 sm:px-6 sm:pb-8 sm:pt-6 lg:px-8 lg:pb-10 lg:pt-7">
              <div className="mb-4 flex items-center justify-between sm:mb-5">
                <button
                  type="button"
                  onClick={goPrev}
                  disabled={activeIndex === 0}
                  aria-label="Previous testimonial"
                  className="shrink-0 transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-35"
                >
                  <img src={arrowPrev} alt="" className="h-11 w-11 sm:h-12 sm:w-12" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  disabled={activeIndex >= maxIndex}
                  aria-label="Next testimonial"
                  className="shrink-0 transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-35"
                >
                  <img src={arrowNext} alt="" className="h-11 w-11 sm:h-12 sm:w-12" />
                </button>
              </div>

              <div className="overflow-hidden">
                <div
                  ref={trackRef}
                  className="flex gap-4 transition-transform duration-500 ease-out sm:gap-5 lg:gap-6"
                  style={{ transform: `translateX(-${slideOffset}px)` }}
                >
                  {stories.map((story, index) => (
                    <article
                      key={`story-${index}`}
                      className="relative flex w-[280px] shrink-0 flex-col overflow-hidden rounded-[30px] sm:w-[300px] lg:w-[320px]"
                      style={typeof story.cardBg === "string" ? { backgroundColor: story.cardBg } : undefined}
                    >
                      {typeof story.cardBg !== "string" && (
                        <img
                          src={story.cardBg}
                          alt=""
                          aria-hidden
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      )}

                      <div className="relative flex min-h-[360px] flex-col p-5 sm:min-h-[380px] sm:p-6">
                        <div className="flex items-start justify-between gap-3">
                          {story.logo ? (
                            <img
                              src={story.logo}
                              alt=""
                              className={`object-contain ${story.logoClassName}`}
                            />
                          ) : (
                            <span className="h-[34px] sm:h-[38px]" aria-hidden />
                          )}
                          {story.profile ? (
                            <img
                              src={story.profile}
                              alt=""
                              className="h-[60px] w-[60px] shrink-0 rounded-[14px] object-cover sm:h-[64px] sm:w-[64px]"
                            />
                          ) : (
                            <span className="h-[60px] w-[60px] shrink-0 sm:h-[64px] sm:w-[64px]" aria-hidden />
                          )}
                        </div>

                        <p className="mt-5 flex-1 text-[13px] leading-[1.65] text-[#272935]/90 sm:mt-6 sm:text-sm">
                          <span className="font-serif text-base text-[#272935]">&ldquo;</span>
                          {story.quote}
                        </p>

                        <div className="relative mt-5 flex items-end justify-between gap-3 sm:mt-6">
                          <div>
                            <p className="text-sm font-bold text-[#272935] sm:text-base">{story.name}</p>
                            <p className="mt-0.5 text-xs text-[#272935]/65 sm:text-sm">{story.title}</p>
                          </div>
                          <img
                            src={quoteMark}
                            alt=""
                            aria-hidden
                            className="h-14 w-auto shrink-0 opacity-[0.08] sm:h-16 lg:h-[72px]"
                          />
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Testimonials() {
  return (
    <>
      <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#2365AA] sm:text-sm">
                Client Testimonials
              </span>
            </div>

            <h2 className="text-3xl font-bold text-[#272935] sm:text-4xl lg:text-[42px]">Explore Blogs</h2>

            <a
              href="#"
              className="mt-5 inline-flex items-center gap-3 rounded-full bg-[#2365AA] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#1a5490]"
            >
              View All
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
                <img src={viewAllArrow} alt="" aria-hidden className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 divide-y divide-[#E5E7EB] lg:mt-14 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {blogPosts.map((post) => (
              <article key={post.title} className="px-0 py-8 first:pt-0 last:pb-0 lg:px-8 lg:py-0">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <img src={elevateBadgeIcon} alt="" aria-hidden className="h-9 w-9 shrink-0" />
                    <span className="text-sm font-semibold text-[#272935] sm:text-base">Elevate Trust AI</span>
                  </div>
                  <time className="shrink-0 text-xs text-[#272935]/60 sm:text-sm">{post.date}</time>
                </div>

                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>

                <h3 className="mt-5 text-base font-bold leading-snug text-[#272935] sm:text-lg lg:text-xl">
                  {post.title}
                </h3>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center lg:mt-20">
            <h2 className="text-5xl font-bold text-[#272935] sm:text-4xl lg:text-[52px]">Our Active Partners</h2>

            <div className="mt-10 flex flex-col items-center justify-center gap-10 sm:flex-row sm:gap-12 lg:mt-12 lg:gap-16">
              {partners.map((partner) => (
                <img
                  key={partner.name}
                  src={partner.logo}
                  alt={partner.name}
                  className="h-auto max-h-24 w-auto h-[200px] w-[300px] object-contain sm:max-h-28 sm:max-w-[220px]"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <StoriesOfImpact />
    </>
  );
}
