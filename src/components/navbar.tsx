import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import elevateLogo from "../assets/nav/elevate-logo.svg";
import linkedinIcon from "../assets/nav/Linkedin-logo.svg";
import instagramIcon from "../assets/nav/Instagram-logo.svg";
import telegramIcon from "../assets/nav/Telegram-logo.svg";
import letsConnectIcon from "../assets/nav/lets-connect.svg";

const navLinks = [
  {
    label: "Our Solutions",
    href: "/solutions",
    dropdown: ["Digital Transformation", "Cloud Services", "Data Analytics"],
  },
  {
    label: "Technologies",
    href: "/technologies",
    dropdown: ["AI/ML", "Blockchain", "IoT"],
  },
  {
    label: "Industries",
    href: "/industries",
    dropdown: ["Finance", "Healthcare", "Retail"],
  },
  {
    label: "Resources",
    href: "/resources",
    dropdown: ["Blog", "Whitepapers", "Webinars"],
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setMobileDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const linkClass = (href: string) =>
    `block rounded-md px-3 py-2.5 text-[15px] font-medium transition-colors ${
      location.pathname === href
        ? "text-[#272935] bg-gray-50"
        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
    }`;

  return (
    <nav className="relative z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-[95vw] px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between sm:h-16">
          <div className="flex min-w-0 items-center gap-4 lg:gap-6">
            <Link to="/" className="shrink-0" onClick={() => setMobileOpen(false)}>
              <img
                src={elevateLogo}
                alt="Elevate Trust"
                className="h-8 w-auto sm:h-9 lg:h-[5.5vh]"
              />
            </Link>

            <div className="hidden items-center gap-0.55 lg:flex">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.href}
                    className={`flex items-center gap-1 rounded-md px-2 py-[0.3vh] text-[1.85vh] font-medium transition-colors ${
                      location.pathname === link.href
                        ? "text-[#272935]"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {link.label}
                    {link.dropdown && <ChevronDown className="h-3.5 w-3.5" />}
                  </Link>

                  {link.dropdown && activeDropdown === link.label && (
                    <div className="absolute left-0 top-full z-50 mt-1 w-56 rounded-lg border border-gray-100 bg-white py-2 shadow-lg">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item}
                          to={`${link.href}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden shrink-0 items-center gap-2 lg:flex lg:gap-2.5">
            <Link
              to="/about"
              className="whitespace-nowrap text-[13px] font-medium text-gray-600 transition-colors hover:text-gray-900 lg:text-[14px]"
            >
              About Us
            </Link>

            <div className="flex items-center gap-0.5">
              <a href="#" aria-label="Telegram" className="inline-flex p-0.5 text-gray-800 transition-colors hover:text-gray-600">
                <img src={telegramIcon} alt="" className="h-[18px] w-[18px] lg:h-5 lg:w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="inline-flex p-0.5 text-gray-800 transition-colors hover:text-gray-600">
                <img src={linkedinIcon} alt="" className="h-[18px] w-[18px] lg:h-5 lg:w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="inline-flex p-0.5 text-gray-800 transition-colors hover:text-gray-600">
                <img src={instagramIcon} alt="" className="h-[18px] w-[18px] lg:h-5 lg:w-5" />
              </a>
            </div>

            <button
              type="button"
              className="ml-0.5 inline-flex h-10 shrink-0 items-center gap-1 rounded-full bg-[#2365AA] py-0 pl-4 pr-1 text-[13px] font-medium leading-none text-white transition-colors hover:bg-[#1a5490]"
            >
              <span className="whitespace-nowrap">Let&apos;s Connect</span>
              <img src={letsConnectIcon} alt="" aria-hidden className="h-7 w-7 shrink-0" />
            </button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              className="hidden h-10 shrink-0 items-center gap-1 rounded-full bg-[#2365AA] py-0 pl-4 pr-1 text-[13px] font-medium leading-none text-white transition-colors hover:bg-[#1a5490] sm:inline-flex lg:hidden"
            >
              <span className="whitespace-nowrap">Let&apos;s Connect</span>
              <img src={letsConnectIcon} alt="" aria-hidden className="h-7 w-7 shrink-0" />
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 text-gray-700"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <div className="mx-auto max-h-[calc(100vh-3.5rem)] max-w-[95vw] overflow-y-auto px-4 py-4 sm:max-h-[calc(100vh-4rem)] sm:px-6">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.dropdown ? (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setMobileDropdown((current) =>
                            current === link.label ? null : link.label
                          )
                        }
                        className={`flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-[15px] font-medium ${
                          location.pathname === link.href
                            ? "text-[#272935] bg-gray-50"
                            : "text-gray-600"
                        }`}
                      >
                        {link.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            mobileDropdown === link.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {mobileDropdown === link.label && (
                        <div className="mb-2 ml-3 space-y-1 border-l border-gray-200 pl-3">
                          <Link to={link.href} className={linkClass(link.href)} onClick={() => setMobileOpen(false)}>
                            View all
                          </Link>
                          {link.dropdown.map((item) => (
                            <Link
                              key={item}
                              to={`${link.href}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                              className="block rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
                              onClick={() => setMobileOpen(false)}
                            >
                              {item}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className={linkClass(link.href)}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}

              <Link
                to="/about"
                className={linkClass("/about")}
                onClick={() => setMobileOpen(false)}
              >
                About Us
              </Link>
            </div>

            <div className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-5">
              <a href="#" aria-label="Telegram" className="rounded-md p-2 hover:bg-gray-50">
                <img src={telegramIcon} alt="" className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="rounded-md p-2 hover:bg-gray-50">
                <img src={linkedinIcon} alt="" className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="rounded-md p-2 hover:bg-gray-50">
                <img src={instagramIcon} alt="" className="h-5 w-5" />
              </a>
            </div>

            <button
              type="button"
              className="mt-5 flex h-12 w-full items-center gap-1 rounded-full bg-[#2365AA] py-0 pl-5 pr-1 text-sm font-medium text-white transition-colors hover:bg-[#1a5490]"
            >
              <span>Let's Connect</span>
              <img src={letsConnectIcon} alt="" aria-hidden className="h-7 w-7 shrink-0" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
