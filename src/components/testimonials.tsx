import { useEffect, useRef, useState } from "react";
import { getStoriesVisibleCount } from "../lib/breakpoints";
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
// import storyDiagonalBg from "../assets/testimonial/storySection/Vector 6903 (3).svg";
import quoteMark from "../assets/testimonial/storySection/”.svg";
import thirdCardLogo from "../assets/testimonial/3i-Infotech-Logo 1.svg";
import VisionIcon from "../assets/testimonial/withUs/vision.svg";
import expertiseIcon from "../assets/testimonial/withUs/expertise.svg";
import blueTikIcon from "../assets/testimonial/withUs/blueTik.svg";
import wordmap from "../assets/footer/worldmapfooter.svg";
import elevateLogoRounded from "../assets/testimonial/withUs/elevateLogoRounded.svg";
import CommanTail from "../assets/testimonial/withUs/CommonTail.svg";
import { Card } from "./ui/card";
import LatestWorks from "./FAQ";
import BlueTikIcon from "../assets/testimonial/withUs/blueTik.svg";
import flyLimitsImage from "../assets/testimonial/FlyBG.svg";
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
  const [maxIndex, setMaxIndex] = useState(Math.max(0, stories.length - 1));

  const goPrev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const goNext = () => setActiveIndex((i) => Math.min(maxIndex, i + 1));

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateOffset = () => {
      const card = track.querySelector("article");
      if (!card) return;
      const gap = parseFloat(getComputedStyle(track).gap) || 24;
      const visible = getStoriesVisibleCount(window.innerWidth);
      setMaxIndex(Math.max(0, stories.length - visible));
      setSlideOffset(activeIndex * (card.getBoundingClientRect().width + gap));
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, [activeIndex]);

  useEffect(() => {
    setActiveIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  return (
    <section className="relative overflow-hidden bg-[#113D77] px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-10 lg:py-20">
      <img
        src={''}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-[280px] w-auto opacity-100 sm:h-[360px] md:h-[440px] lg:h-[520px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] sm:text-xs">
            <span className="text-white">Client </span>
            <span className="text-[#A1B1CB]">Testimonials</span>
          </p>

          <h2 className="mt-3 text-[26px] font-bold text-white sm:text-3xl md:text-4xl lg:text-[42px]">
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

        <div className="relative mt-8 sm:mt-10 md:mt-11 lg:mt-12">
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#1a4d8c]/45 backdrop-blur-[2px] sm:rounded-[36px] md:rounded-[40px] lg:rounded-[48px]">
            <div className="relative px-4 pb-6 pt-4 sm:px-6 sm:pb-7 sm:pt-5 md:px-6 md:pb-8 md:pt-6 lg:px-8 lg:pb-10 lg:pt-7">
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
                  className="flex gap-4 scroll-smooth transition-transform duration-500 ease-out sm:gap-5 md:gap-5 lg:gap-6"
                  style={{ transform: `translateX(-${slideOffset}px)` }}
                >
                  {stories.map((story, index) => (
                    <article
                      key={`story-${index}`}
                      className="relative flex w-[min(82vw,280px)] shrink-0 flex-col overflow-hidden rounded-[26px] sm:w-[300px] sm:rounded-[28px] md:w-[300px] md:rounded-[30px] lg:w-[320px]"
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

function WithUsReadMoreButton() {
  return (
    <a
      href="#"
      className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-[#272935] transition hover:bg-white/90 sm:mt-6 sm:px-5 sm:py-2.5 sm:text-sm"
    >
      Read More
      <img src={blueTikIcon} alt="" aria-hidden className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" />
    </a>
  );
}

function WithUs() {
  return (
    <section className="flex flex-col items-center bg-white px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-10 lg:py-20">
      <div className="flex flex-col items-center gap-3 text-center sm:gap-4">
        <p className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.12em] sm:text-xs">
          <span className="text-[#272935]">Our Creative</span>
          <span className="text-[#2365AA]">Journey</span>
        </p>
        <h2 className="text-[24px] font-bold leading-[1.2] tracking-[-0.02em] text-[#272935] sm:text-[28px] md:text-3xl lg:text-[42px]">
          Why Partner With Us
        </h2>
      </div>

      <div className="mx-auto mt-8 grid w-full max-w-7xl grid-cols-1 gap-5 p-2 sm:mt-10 sm:gap-6 sm:p-4 md:mt-12 md:grid-cols-2 md:gap-5">
        <Card className="relative min-h-[240px] w-full overflow-hidden rounded-[24px] rounded-tl-[56px] border-none bg-[#113D77] p-0 shadow-none sm:min-h-[280px] sm:rounded-[28px] sm:rounded-tl-[72px] md:min-h-[300px] lg:min-h-[420px] lg:rounded-[32px] lg:rounded-tl-[110px]">
          <img
            src={wordmap}
            alt=""
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[75%] w-[90%] -translate-x-1/2 -translate-y-1/2 rotate-[14deg] object-contain opacity-[0.9] lg:block"
          />
          <img
            src={CommanTail}
            alt=""
            aria-hidden
            className="pointer-events-none absolute bottom-8 left-0 hidden w-[40%] rotate-[8deg] opacity-90 lg:bottom-[40vh] lg:left-[-1vw] lg:block lg:w-auto"
          />
          <img
            src={elevateLogoRounded}
            alt=""
            aria-hidden
            className="pointer-events-none absolute bottom-10 left-[20%] hidden h-[3.5rem] w-[10rem] rounded-[80px] opacity-10 blur-[2px] [mask-image:linear-gradient(to_right,black_100%,transparent_0%)] lg:bottom-[36.5vh] lg:left-[25vw] lg:block lg:h-[4.2rem] lg:w-[12rem]"
          />

          <div className="relative z-10 flex h-full min-h-[240px] flex-col p-5 sm:min-h-[280px] sm:p-6 md:min-h-[300px] md:p-7 lg:min-h-[420px] lg:p-10">
            <div className="max-w-[58%] sm:max-w-[55%] lg:max-w-[52%]">
              <h3 className="text-xl font-bold text-white sm:text-2xl lg:text-[32px]">Our Vision</h3>
              <p className="mt-3 text-xs leading-relaxed text-white/95 sm:mt-4 sm:text-sm lg:text-[15px] lg:leading-6">
                Be the top AI/ML implementation & consulting partner which operates in an ethically upright
                manner to grow an organization and win the business.
              </p>
              <WithUsReadMoreButton />
            </div>
          </div>

          <img
            src={VisionIcon}
            alt=""
            aria-hidden
            className="pointer-events-none absolute bottom-0 right-0 z-10 w-[38%] max-w-[200px] min-w-[90px] sm:w-[36%] sm:max-w-[180px] lg:max-w-[201px]"
          />
        </Card>

        <Card className="relative min-h-[240px] w-full overflow-hidden rounded-[24px] rounded-br-[48px] border-none bg-[#EFF7FC] p-0 shadow-none sm:min-h-[280px] sm:rounded-[28px] sm:rounded-br-[56px] md:min-h-[300px] lg:min-h-[420px] lg:rounded-[32px] lg:rounded-br-[110px]">
          <div className="relative z-10 flex h-full min-h-[240px] flex-col p-5 sm:min-h-[280px] sm:p-6 md:min-h-[300px] md:p-7 lg:min-h-[420px] lg:p-10">
            <div className="max-w-[58%] sm:max-w-[55%] lg:max-w-[52%]">
              <h3 className="text-xl font-bold text-[#272935] sm:text-2xl lg:text-[32px]">Expertise</h3>
              <p className="mt-3 text-xs leading-relaxed text-[#272935]/90 sm:mt-4 sm:text-sm lg:text-[15px] lg:leading-6">
                Delivering machine learning, Generative AI and agentic-based solutions. Our core team consists
                of experts who can fast-track machine learning, Deep Learning, Generative AI and agentic-based
                solutions.
              </p>
              <WithUsReadMoreButton />
            </div>
          </div>

          <img
            src={expertiseIcon}
            alt=""
            aria-hidden
            className="pointer-events-none absolute bottom-0 right-0 z-10 w-[40%] max-w-[227px] min-w-[95px] sm:w-[38%] sm:max-w-[210px] lg:max-w-[227px]"
          />
        </Card>
      </div>
    </section>
  );
}

function FlyLimitsSection() {
  return (
    <section className="bg-white sm:px-6 sm:py-14 md:px-8 md:py-16 ">
      <div className="mx-auto max-w-7xl w-full h-full object-cover">
        <img src={flyLimitsImage} alt="" aria-hidden className=" shrink-0  xl:w-[120vw] xl:h-full object-cover" />
      </div>
      <div>
        <h1>Fly Beyond Limits with AI.</h1>
        <button> 
          <span>Let’s Get Started</span>
          <img src={BlueTikIcon} alt="" aria-hidden className="h-7 w-7 shrink-0 xl:h-7 xl:w-7" />
        </button>
        <p>Get in touch with us today for a personalized quote on our AI/ML development services. Our team is here to provide tailored solutions that drive success and accelerate your business growth.</p>
      </div>
    </section>
  ); 
}

export default function Testimonials() {
  return (
    <>
      <LatestWorks />
      <WithUs />
      <StoriesOfImpact />

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-1">
              <span className="text-[10px] xl:text-[15px] font-semibold uppercase tracking-[0.01em] text-black sm:text-sm">
                Client 
              </span>
              <span className="text-[10px] xl:text-[15px] font-semibold uppercase tracking-[0.01em] text-[#2365AA] sm:text-sm">
                Testimonials
              </span>
            </div>

            <h2 className="text-[26px] font-bold  text-[#272935] tracking-[0.1px] sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[52px]">Explore Blogs</h2>

            <a
              href="#"
              className="mt-5 inline-flex h-10 w-[118px] shrink-0 items-center justify-between rounded-full bg-[#2365AA] py-0 pl-4 pr-1 text-sm font-medium leading-none text-white transition hover:bg-[#1a5490] xl:h-[40px] xl:w-[100px] xl:pl-3.5 xl:text-[10px]"
            >
              <span className="whitespace-nowrap text-[10px] xl:text-[10px] font-regular ">View All</span>
              <img src={viewAllArrow} alt="" aria-hidden className="h-7 w-7 shrink-0 xl:h-7 xl:w-7" />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 divide-y divide-[#E5E7EB] sm:mt-12 md:mt-12 lg:mt-14 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {blogPosts.map((post) => (
              <article key={post.title} className="px-0 py-8 first:pt-0 last:pb-0 lg:px-8 lg:py-0">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <img src={elevateBadgeIcon} alt="" aria-hidden className="h-9 w-9 shrink-0" />
                    <span className="text-sm font-medium text-black sm:text-base xl:text-[20px]">Elevate Trust AI</span>
                  </div>
                  <time className="shrink-0 text-xs text-black sm:text-sm xl:text-[22px]">{post.date}</time>
                </div>

                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>

                <h3 className="mt-5 text-base font-regular leading-snug text-[#272935] sm:text-lg lg:text-xl">
                  {post.title}
                </h3>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center lg:mt-20">
            <h2 className="text-[28px] font-bold text-[#272935] sm:text-3xl md:text-4xl lg:text-[52px]">Our Active Partners</h2>

            <div className="mt-10 flex flex-col items-center justify-center gap-12 sm:flex-row sm:gap-16 lg:mt-14 lg:gap-20">
              {partners.map((partner) => (
                <img
                  key={partner.name}
                  src={partner.logo}
                  alt={partner.name}
                  className="h-auto max-h-28 w-auto max-w-[260px] object-contain sm:max-h-32 sm:max-w-[300px] lg:max-h-40 lg:max-w-[340px]"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}
