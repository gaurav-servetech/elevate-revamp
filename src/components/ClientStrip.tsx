import { useEffect, useRef, useState } from "react";
import arupaLogo from "../assets/client-strip/Arupa.svg";
import cl1Logo from "../assets/client-strip/CL1.svg";
import complyCoreLogo from "../assets/client-strip/ComplyCore.svg";
import qjumpersLogo from "../assets/client-strip/Qjumpers.svg";
import travellersLogo from "../assets/client-strip/travellers.svg";
import { Card } from "../components/ui/card";
import frame1 from "../assets/client-strip/serviceSectionIcon/Frame1.svg";
import frame2 from "../assets/client-strip/serviceSectionIcon/Frame2.svg";
import frame3 from "../assets/client-strip/serviceSectionIcon/frame3.svg";
import frame4 from "../assets/client-strip/serviceSectionIcon/Frame4.svg";
import frame6 from "../assets/client-strip/serviceSectionIcon/Frame6.svg";
import readMoreArrow from "../assets/nav/lets-connect.svg";
import { AILandscape, WorkThatProvesImpact } from "./ImpactSections";

/** Add new logos here after exporting to `src/assets/client-strip/` */
const clientLogos = [
  { name: "CL1", src: cl1Logo },
  { name: "Arupa AI", src: arupaLogo },
  { name: "Happy Feet Travellers", src: travellersLogo },
  { name: "ComplyCore", src: complyCoreLogo },
  { name: "Qjumpers", src: qjumpersLogo },
];

const committedStats = [
  { label: "AI ML Delivery", value: "30+" },
  { label: "Satisfied Clients", value: "20+" },
  { label: "AI/ML Deliver Experience", value: "13+" },
  { label: "Talent Retention Rate", value: "90+", showArrow: true },
];

const MARQUEE_SET_COUNT = 4;

function ClientLogoMarquee() {
  const [ready, setReady] = useState(false);
  const setRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setEl = setRef.current;
    const track = trackRef.current;
    if (!setEl || !track) return;

    const measure = () => {
      const width = setEl.offsetWidth;
      if (width <= 0) return;
      track.style.setProperty("--scroll-width", `${width}px`);
      setReady(true);
    };

    const images = Array.from(setEl.querySelectorAll("img"));
    const onImageReady = () => {
      if (images.every((img) => img.complete)) measure();
    };

    images.forEach((img) => {
      if (img.complete) return;
      img.addEventListener("load", onImageReady);
      img.addEventListener("error", onImageReady);
    });

    measure();
    onImageReady();

    const observer = new ResizeObserver(measure);
    observer.observe(setEl);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
      images.forEach((img) => {
        img.removeEventListener("load", onImageReady);
        img.removeEventListener("error", onImageReady);
      });
    };
  }, []);

  const renderLogos = (setIndex: number) =>
    clientLogos.map((client) => (
      <div
        key={`set-${setIndex}-${client.name}`}
        className="flex h-14 shrink-0 items-center justify-center px-8 sm:h-16 sm:px-10 lg:px-12"
      >
        <img
          src={client.src}
          alt={setIndex === 0 ? client.name : ""}
          aria-hidden={setIndex > 0 || undefined}
          className="max-h-10 w-auto max-w-[180px] object-contain sm:max-h-11"
          draggable={false}
        />
      </div>
    ));

  return (
    <section
      className="client-strip relative overflow-hidden bg-white py-6"
      aria-label="Our customers"
    >
      <div
        ref={trackRef}
        className={`client-strip__track${ready ? " client-strip__track--ready" : ""}`}
      >
        {Array.from({ length: MARQUEE_SET_COUNT }, (_, setIndex) => (
          <div
            key={`marquee-set-${setIndex}`}
            ref={setIndex === 0 ? setRef : undefined}
            className="flex shrink-0 items-center"
            aria-hidden={setIndex > 0 || undefined}
          >
            {renderLogos(setIndex)}
          </div>
        ))}
      </div>
    </section>
  );
}

function CommittedArea() {
  return (
    <section className="relative overflow-hidden bg-[#113D77] px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-12 lg:py-16">
      <div
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-[38%] bg-gradient-to-l from-[#0c3268]/90 to-transparent lg:block"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Mobile/tablet: stacked | lg+: text left + 4 cards in one row */}
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:flex-row lg:items-center lg:gap-10">
          <div className="md:max-w-[480px] lg:max-w-[300px] lg:shrink-0">
            <h2 className="text-[24px] font-bold leading-[1.2] text-white sm:text-[28px] md:text-[30px] lg:text-[21.2px] lg:leading-[1.18]">
              We Are Committed To Providing Superior Solutions With Our AI/ML Expertise
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#A1B1CB] sm:mt-4 sm:text-[15px] md:mt-5 lg:text-[14px] lg:leading-4">
              We offer AI/ML solution development and cloud & on-premise deployment across industries.
              We have expertise in ML, DL, Gen AI, Federated learning, and agentic flow secure & scalable
              implementations.
            </p>
          </div>

          {/* sm/md: 2x2 grid | lg+: single row of 4 cards */}
          <div className="grid flex-1 grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:grid-cols-4 lg:gap-5">
            {committedStats.map((stat) => (
              <div
                key={stat.label}
                className="relative flex min-h-[120px] flex-col rounded-2xl bg-white px-3 py-3 sm:min-h-[135px] sm:rounded-3xl sm:px-4 sm:py-4 md:min-h-[155px] md:px-5 md:py-5 lg:min-h-[210px] lg:px-4 lg:py-5"
              >
                <p className="text-[10px] font-medium leading-snug text-[#272935] sm:text-[11px] md:text-xs lg:text-[15px]">
                  {stat.label}
                </p>
                <div className="my-2 h-px w-full bg-black/30 sm:my-2.5 md:my-3" />
                <p className="mt-auto text-2xl font-normal tracking-wide text-[#113D77] sm:text-3xl md:text-4xl lg:text-[50px]">
                  {stat.value}
                </p>
                {stat.showArrow && (
                  <button
                    type="button"
                    className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#113D77] text-white transition hover:bg-[#1a4d8f] sm:bottom-4 sm:right-4 sm:h-9 sm:w-9"
                    aria-label="Learn more"
                  >
                    <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 17L17 7M17 7H7M17 7V17"
                      />
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Ourservices() {
  return (
  <section className="relative flex flex-col items-center overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-10 lg:py-20" aria-label="Our services">
    <div className="mx-auto w-full max-w-7xl text-center">
      <h2 className="flex justify-center gap-0.5 text-base font-semibold tracking-wide sm:text-[17px] lg:text-[16px]">
        <span className="text-[#272935]">OUR</span>
        <span className="text-[#2365AA]">SERVICES</span>
      </h2>
      <h1 className="mx-auto mt-4 max-w-3xl text-[22px] font-bold leading-[1.2] tracking-[-0.02em] text-black sm:mt-5 sm:text-[28px] md:mt-6 md:max-w-4xl md:text-[32px] lg:mt-8 lg:max-w-3xl lg:text-[56px]  lg:leading-[1.12]">
        AI Solutions for Automation, Growth, and Innovation
      </h1>
    </div>
    <div className="mx-auto mt-10 grid w-full max-w-7xl grid-cols-1 justify-items-center gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 md:mt-16 md:gap-7 lg:mt-20 lg:grid-cols-4 lg:gap-10">
      <Card className="card h-auto min-h-[220px] w-full max-w-[350px] rounded-tl-[80px] border-none bg-[#EFF7FC] sm:min-h-[240px] sm:rounded-tl-[120px] lg:h-[270px] lg:w-[350px] lg:rounded-tl-[150px]">
        <img src={frame1} className="w-[88px] h-[67px] mx-auto mt-0.2 mr-5" alt="Our Services" />
        <div className="flex flex-col mt-[-15px] ml-6 ">
        <h4 className="w-auto text-2xl font-bold leading-[1.2] tracking-[0.2px] text-[#272935] sm:text-3xl lg:text-[30px]">IOT Solutions</h4>
        <p className="text-[#848B9B] w-[250px] tracking-tight mt-[10px] text-[16px]">ML/DL, Video Analytics, Audio Analytics and Federated Learning.</p>
        </div>
      </Card>
      <Card className="card h-auto min-h-[220px] w-full max-w-[350px] border-none bg-[#2365AA] sm:min-h-[240px] lg:h-[270px] lg:w-[350px]">
        <img src={frame2} className="w-[200px] h-[210px] mx-auto mt-[-26px] mr-[-1px] rounded-bl-[150px]" alt="Our Services" />
        <div className="flex flex-col mt-[-50px] ml-6 ">
        <h3 className="mt-[-60px] w-auto max-w-[200px] text-2xl font-semibold leading-[1.2] tracking-[0.2px] text-white sm:mt-[-70px] sm:text-3xl lg:mt-[-80px] lg:text-[28px]">Agentic AI Solutions</h3>
        <p className="text-white w-[250px] tracking-tight mt-[10px] text-[16px]">ML/DL, Video Analytics, Audio Analytics and Federated Learning.</p>
        </div>
      </Card>
      <Card className="card h-auto min-h-[220px] w-full max-w-[350px] border-none bg-[#EFF7FC] sm:min-h-[240px] lg:h-[270px] lg:w-[350px]">
        <img src={frame3} className="w-[91px] h-[89px] mx-auto mt-0.2 mr-5" alt="Our Services" />
        <div className="flex flex-col mt-[-15px] ml-6 ">
        <h4 className="w-auto text-2xl font-bold leading-[1.2] tracking-[0.2px] text-[#272935] sm:text-3xl lg:text-[30px]">Video Analytics</h4>
        <p className="text-[#848B9B] w-[250px] tracking-tight mt-[10px] text-[16px]">ML/DL, Video Analytics, Audio Analytics and Federated Learning.</p>
        </div>
      </Card>
      <Card className="card h-auto min-h-[220px] w-full max-w-[350px] rounded-br-[80px] border-none bg-[#EFF7FC] sm:min-h-[240px] sm:rounded-br-[120px] lg:h-[270px] lg:w-[350px] lg:rounded-br-[150px]">
        <img src={frame4} className="w-[121px] h-[94px] mx-auto mt-0.2 mr-5" alt="Our Services" />
        <div className="flex flex-col mt-[-15px] ml-6 ">
        <h4 className="w-auto text-2xl font-bold leading-[1.2] tracking-[0.2px] text-[#272935] sm:text-3xl lg:text-[30px]">Cloud Deployment</h4>
        <p className="text-[#848B9B] w-[250px] tracking-tight mt-[10px] text-[16px]">ML/DL, Video Analytics, Audio Analytics and Federated Learning.</p>
        </div>
      </Card>   
    </div>
    <div className="relative mx-auto mt-12 w-full max-w-7xl sm:mt-16 md:mt-20 lg:mt-20 lg:pb-8">
      <img
        src={""}
        className="pointer-events-none absolute left-0 top-1/2 z-0 hidden -translate-y-1/2 opacity-90 lg:block lg:w-[min(36vw,500px)] lg:max-w-[500px]"
        alt=""
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-[min(100%,1100px)] px-0 sm:max-w-[640px] md:max-w-[820px] lg:max-w-[1100px]">
        <img
          src={frame6}
          alt=""
          aria-hidden
          className="block h-auto w-full max-w-full"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-[7%] pb-[10%] pt-[16%] text-center sm:px-[8%] sm:pb-[11%] sm:pt-[17%] md:px-[9%] lg:px-[10%] lg:pb-[12%] lg:pt-[18%]">
          <h2 className="w-full max-w-[95%] text-[18px] font-bold leading-[1.25] tracking-[-0.02em] text-black sm:max-w-[90%] sm:text-[22px] md:text-[26px] lg:max-w-[85%] lg:text-[36px] lg:leading-[1.2]">
            Innovative Generative AI Solutions for Business Transformation
          </h2>
          <p className="mt-3 w-full max-w-[95%] text-[12px] leading-relaxed text-[#272935]/90 sm:mt-4 sm:max-w-[88%] sm:text-[13px] md:mt-5 md:text-[14px] lg:mt-6 lg:max-w-[82%] lg:text-[13.5px] lg:leading-[1.65]">
            We witness the evolution of Generative AI starting with TFIDF, advancing through word2vec and
            transformers, and then moving on to early large language models (LLMs) like BERT and T5. This
            progression includes the OpenAI GPT models, Google Gemini, OLAMA, and the implementation of
            Agentic flow. Since the beginning, we have provided value starting from fine-tuned on-premise
            Named Entity Recognition (NER) models to the current state-of-the-art Agentic implementation by
            building a generic agentic framework.
          </p>
          <button
            type="button"
            className="mt-4 inline-flex shrink-0 items-center gap-2 rounded-full bg-[#2365AA] px-5 py-2.5 text-[10px] font-semibold uppercase text-white sm:mt-5 sm:px-6 sm:py-3 sm:text-[11px] lg:mt-6 lg:text-xs"
          >
            <span>read more</span>
            <img src={readMoreArrow} className="h-4 w-4 brightness-0 invert" alt="" aria-hidden />
          </button>
        </div>
      </div>
    </div>
    
    
  </section>
)
};

export default function ClientStrip() {
  return (
    <>
      <ClientLogoMarquee />

      <CommittedArea />
      <Ourservices />
      <WorkThatProvesImpact />
      <AILandscape />
    </>
  );
}
