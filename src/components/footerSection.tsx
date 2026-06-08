import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import elevateFooterLogo from "../assets/footer/elevatelogo.svg";
import facebookLogo from "../assets/footer/FacebookLogo.svg";
import youtubeLogo from "../assets/footer/YoutubeLogo.svg";
import linkedinLogo from "../assets/footer/LinkedinLogo.svg";
import instagramLogo from "../assets/footer/InstagramLogo.svg";
import tiktokLogo from "../assets/footer/TiktokLogo.svg";
import xLogo from "../assets/footer/xlogo.svg";
import worldMapBackground from "../assets/footer/worldmapfooter.svg";
import elevateFooterServiceLogo from "../assets/footer/elevateservicelogo.svg";
import maskGroup from "../assets/footer/Mask-group.svg";
import paperplanefooter from "../assets/footer/PaperPlaneTilt.svg";
import phoneIcon from "../assets/footer/Phone.svg";
import envelopeIcon from "../assets/footer/EnvelopeSimple.svg";
import mapPinIcon from "../assets/footer/MapPin.svg";

const contactItems = [
  { icon: phoneIcon, label: "+91-9243322064", href: "tel:+919243322064" },
  { icon: envelopeIcon, label: "info@elevatetrust.ai", href: "mailto:info@elevatetrust.ai" },
  { icon: mapPinIcon, label: "Pimple Saudagar, Pune Maharashtra" },
];

const services = [
  "Overview",
  "AI/ML Solution",
  "Generative AI",
  "Video Analytics",
  "Cloud Deployment",
];

const otherServices = [
  "UI/UX Design Content",
  "Web Design & Development",
  "Mobile App Development",
  "Custom Software Development",
  "Ecommerce Development",
  "Digital Marketing Services",
  "ERP Solutions",
];

const aboutCompany = ["Overview", "Blog", "Career", "Contact Us"];

const socialLinks = [
  { label: "YouTube", icon: youtubeLogo, href: "#" },
  { label: "Facebook", icon: facebookLogo, href: "#" },
  { label: "LinkedIn", icon: linkedinLogo, href: "#" },
  { label: "Instagram", icon: instagramLogo, href: "#" },
  { label: "TikTok", icon: tiktokLogo, href: "#" },
  { label: "X", icon: xLogo, href: "#" },
];

function FooterList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-1 sm:mt-6 lg:mt-8 lg:space-y-[0.2px]">
      {items.map((item) => (
        <li key={item} className="flex items-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 py-0.5 text-[11px] text-white hover:text-white sm:text-[10px]"
          >
            <img src={elevateFooterServiceLogo} alt="" aria-hidden className="h-2 w-2 shrink-0" />
            <span>{item}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function FooterColumn({
  title,
  children,
  defaultOpen = false,
  titleClassName = "",
}: {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  titleClassName?: string;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-white/10 py-4 last:border-b-0 lg:border-0 lg:py-0">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between text-left lg:pointer-events-none lg:cursor-default"
        aria-expanded={open}
      >
        <h3
          className={`text-base font-semibold uppercase tracking-normal sm:text-lg lg:text-[20px] ${titleClassName}`}
        >
          {title}
        </h3>
        <ChevronDown
          className={`h-5 w-5 shrink-0 transition-transform lg:hidden ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div className={`${open ? "block" : "hidden"} lg:block`}>{children}</div>
    </div>
  );
}

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-[#113D77] px-4 pb-6 pt-10 text-white sm:px-6 sm:pb-8 sm:pt-12 md:px-8 md:pt-14 lg:px-14 lg:pb-8 lg:pt-14">
      {/* World map — decoration only; change translate-y-* to move image up/down without shifting content */}
      <img
        src={worldMapBackground}
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 z-0 w-full max-w-[min(100%,640px)] -translate-x-1/2 translate-y-8 opacity-35 sm:max-w-[720px] sm:translate-y-10 sm:opacity-40 md:max-w-[900px] md:opacity-50 lg:w-[1280px] lg:max-w-none lg:translate-y-0.5 lg:opacity-90"
      />

      <div className="relative z-10 mx-auto max-w-7xl lg:max-w-9xl">
        <div className="grid grid-cols-1 gap-6 pb-4 sm:gap-10 sm:pb-6 md:grid-cols-2 md:gap-12 lg:grid-cols-4 lg:gap-8 lg:pb-8">
          <div className="flex flex-col border-b border-white/10 pb-6 md:col-span-2 md:border-0 md:pb-0 lg:col-span-1 lg:pb-0">
            <img
              src={elevateFooterLogo}
              alt="Elevate Trust logo"
              className="h-auto w-40 sm:w-44 lg:w-50"
            />
            <p className="mt-5 max-w-full text-[11px] leading-[1.6] text-white/50 sm:mt-6 sm:text-[10px] sm:leading-[16px] lg:mt-10 lg:w-[270px] lg:text-[10px] lg:text-white/40">
              We partner with innovators to develop state-of-the-art AI solutions designed to drive
              strategic business outcomes. Our expertise covers a wide range of industries, tackling
              complex challenges with AI algorithms specifically tailored for both structured and
              unstructured data.
            </p>
          </div>

          <FooterColumn  title="Services" defaultOpen>
            <FooterList  items={services} />
          </FooterColumn>

          <FooterColumn title="Other Services">
            <FooterList items={otherServices} />
          </FooterColumn>

          <FooterColumn title="About Company" titleClassName="lg:text-[22px]">
            <FooterList items={aboutCompany} />
          </FooterColumn>
        </div>

        <hr className="mt-16 border-white/10 opacity-100 sm:mt-20 lg:mt-16" />

        {/* Bottom block: Contact / Partners / Newsletter */}
        <div className="relative pt-12 sm:pt-16 lg:pt-20">

        <div className="relative grid grid-cols-1 items-start gap-10 sm:gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-4 lg:gap-10">
          <div className="border-b border-white/10 pb-6 md:border-0 md:pb-0">
            <h3 className="text-base font-semibold uppercase sm:text-lg lg:text-[20px]">Contact</h3>
            <div className="mt-4 space-y-1 sm:mt-6 sm:space-y-1.5 lg:mt-10">
              {contactItems.map((item) => {
                const row = (
                  <>
                    <img
                      src={item.icon}
                      alt=""
                      aria-hidden
                      className="h-4 w-4 shrink-0 sm:h-[18px] sm:w-[18px]"
                    />
                    <span className="text-xs leading-snug text-white/85 sm:text-[13px]">
                      {item.label}
                    </span>
                  </>
                );

                return item.href ? (
                  <a key={item.label} href={item.href} className="flex items-center gap-2">
                    {row}
                  </a>
                ) : (
                  <div key={item.label} className="flex items-center gap-2">
                    {row}
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-1 sm:mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="rounded-md p-1.5 transition hover:bg-white/10"
                >
                  <img src={social.icon} alt="" aria-hidden className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="border-b border-white/10 pb-6 md:border-0 md:pb-0">
            <h3 className="text-base font-semibold uppercase sm:text-lg lg:text-[20px]">Partners</h3>
            <img
              src={maskGroup}
              alt="Partner logos"
              className="mt-4 h-auto w-full max-w-[200px] sm:mt-6 sm:max-w-[230px] lg:mt-10"
            />
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-base font-semibold uppercase sm:text-lg lg:text-[20px]">Newsletter</h3>
            <form className="mt-4 w-full max-w-full sm:mt-6 lg:mt-10 lg:max-w-[350px]">
              <div className="flex h-11 items-center rounded-full border border-white/40 bg-white/10 p-1.5 backdrop-blur-sm">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full min-w-0 bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/65 focus:outline-none sm:px-4"
                />
                <button
                  type="submit"
                  className="h-8 w-8 shrink-0 rounded-full bg-white p-2 text-[#113D77] transition hover:bg-[#dce9f8]"
                  aria-label="Submit newsletter email"
                >
                  <img src={paperplanefooter} alt="" className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-2 text-[10px] tracking-tight text-white/40 sm:text-[9px] lg:text-white/25">
                Subscribe to our newsletter
              </p>
            </form>
          </div>
        </div>

        <div className="relative mt-10 flex justify-end border-t border-white/10 pt-4 sm:mt-12 sm:pt-10 lg:mt-[-35px] lg:border-0 lg:pt-6">
          <div className="text-[10px] text-white/85 sm:text-[9.5px] lg:text-right">
            <a href="#" className="hover:text-white">
              Terms and condition
            </a>
            <span className="mx-1.5 opacity-50">|</span>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <p className="mt-2 text-[10px] text-white/85 sm:mt-1 sm:text-[9.5px]">
              © 2026 Elevate Trust. All rights reserved.
            </p>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
