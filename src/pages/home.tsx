// pages/home.tsx
import HeroSection from "../components/heroSection";
import ClientStrip from "../components/ClientStrip";
import Testimonials from "../components/testimonials";
import FooterSection from "../components/footerSection";

export default function Home() {
  return (
    <main className="min-h-[calc(200vh-4rem)] bg-[#113D77]">
      <HeroSection />
      <ClientStrip />
      <Testimonials />
      <FooterSection />
    </main>
  );
}
