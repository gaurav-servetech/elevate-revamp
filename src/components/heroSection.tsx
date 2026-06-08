import wordMap from "../assets/homepage-icons/wordmap.svg";
import userLoverIcon from "../assets/homepage-icons/userLover.svg";
import goldenStar from "../assets/homepage-icons/goldenStar.svg";
import groupImproveIcon from "../assets/homepage-icons/groupImproveIcon.svg";
import letsConnectIcon from "../assets/nav/lets-connect.svg";
import Tail from "../assets/homepage-icons/heroElevateTail.svg";
import heroElevate  from "../assets/homepage-icons/heroElevateRounded.svg";
import elevateStartingLogo from "../assets/homepage-icons/elevatestarting-logo.svg";

/** Figma 0→20% soft fade: transparent bottom blends into hero — no blue overlay */
const heroDecorSoftFade =
  "[mask-image:linear-gradient(to_top,transparent_0%,#000_20%)] [-webkit-mask-image:linear-gradient(to_top,transparent_0%,#000_10%)] [mask-size:100%_100%] [mask-repeat:no-repeat]";

function HeroDecorWithSoftFade({
  src,
  wrapperClassName,
}: {
  src: string;
  wrapperClassName: string;
}) {
  return (
    <div className={wrapperClassName}>
      <img
        src={src}
        alt=""
        aria-hidden
        className={`block h-auto w-full max-w-none blur-[4px] ${heroDecorSoftFade}`}
      />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#113D77]">
      {/* Background layers: world map + curve logo/tail + top-right decor */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src={wordMap}
          alt=""
          aria-hidden
          className="absolute bottom-0 left-0 w-[min(120%,900px)] max-w-none opacity-90 lg:w-[min(85vw,1100px)] xl:w-[min(85vw,880px)] xl:bottom-[-88px]"
        />
        <img
          src={Tail}
          alt=""
          aria-hidden
          className="absolute right-[-4%] top-[38%] z-[1] h-auto w-[min(72vw,620px)] max-w-none -translate-y-1/2 opacity-100 sm:right-[-2%] sm:w-[min(68vw,580px)] lg:right-0 lg:top-[42%] lg:w-[min(58vw,540px)] xl:right-[59.5%] xl:top-[46%] xl:w-[min(52vw,410px)] xl:rotate-[0.5deg]"
        />
        <HeroDecorWithSoftFade
          src={elevateStartingLogo}
          wrapperClassName="absolute right-0 top-0 w-[min(55vw,520px)] lg:w-[min(42vw,500px)] xl:w-[min(42vw,460px)] xl:top-[-36px]"
        />
        <HeroDecorWithSoftFade
          src={heroElevate}
          wrapperClassName="absolute right-1 top-0 w-[min(55vw,20px)] lg:w-[min(42vw,500px)] xl:w-[min(42vw,90px)] xl:top-92 xl:right-180"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 sm:pb-12 sm:pt-12 md:px-8 lg:px-10 lg:pb-8 lg:pt-12 ">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-8 xl:gap-12">
          {/* Left content */}
          <div className="max-w-xl lg:max-w-lg xl:max-w-[590px]    xl:px-14">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/[0.04] px-2.5 py-1 sm:gap-2 sm:px-3 sm:py-1.5 ">
              <img src={userLoverIcon} alt="" aria-hidden className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
              <span className="text-[9px] font-normal leading-none text-white sm:text-[10px] lg:text-[11px]">
                Building Stronger Customer Trust
              </span>
            </div>

            <p className="mt-5 text-base font-normal text-white sm:mt-6 sm:text-lg lg:mt-8 lg:text-[20px]">
              we are an
            </p>

            <h1 className="mt-0.5 text-[36px] font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-[42px] md:text-[48px] lg:text-[54px] xl:text-[88px] xl:leading-[0.9]">
              AI powered
              digital agency
            </h1>

            <p className="mt-4 max-w-[340px] text-[13px] leading-[1.55] text-[#A1B1CB] sm:mt-5 sm:text-sm lg:mt-6 lg:max-w-[380px] lg:text-[15px] lg:leading-[1.65] xl:text-[14px] xl:w-[230px]">
              Build scalable, fine-tuned local LLM solutions with a trusted AI/ML implementation
              partner.
            </p>

            <div className="mt-4 flex items-center gap-2 sm:mt-5 lg:mt-6">
              <img src={goldenStar} alt="" aria-hidden className="h-[14px] w-auto sm:h-[15px]" />
              <span className="text-xs font-normal text-white sm:text-[13px]">1000+ Customers</span>
            </div>

            <button
              type="button"
              className="mt-5 inline-flex h-10 items-center justify-between gap-2.5 rounded-full bg-[#2365AA] pl-4 pr-1.5 text-[11px] font-medium leading-none text-white transition hover:bg-[#1a5490] sm:mt-6 sm:pl-5 sm:text-xs lg:mt-7 xl:h-[50px] xl:w-[226px] xl:pl-5 xl:text-[12px]"
            >
              <span className="whitespace-nowrap pr-1">Consult our strategy team</span>
              <img src={letsConnectIcon} alt="" aria-hidden className="h-7 w-7 shrink-0 xl:h-8 xl:w-8" />
            </button>
          </div>

          {/* Right visual — full Figma card cluster + copy */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={groupImproveIcon}
              alt="We Create Future — Empowering Businesses with AI/ML Solutions"
              className="h-auto w-full max-w-[min(100%,560px)] lg:max-w-[min(100%,698px)] xl:max-w-[min(100%,550px)] xl:translate-y-[38px] xl:translate-x-[-46px] "
            />
          </div>
        </div>

        {/* Section handoff label */}
        <div className="mt-12 flex justify-center sm:mt-14 lg:mt-16 xl:mt-44">
          <p className="flex items-center gap-1 text-sm font-bold uppercase tracking-wide sm:text-base">
            <span className="text-white xl:text-[15px]">our</span>
            <span className="text-[#2365AA] xl:text-[15px]">customers</span>
          </p>
        </div>
      </div>
    </section>
  );
}
