import About from "@/components/About";
import Emailer from "@/components/Emailer";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Info from "@/components/Info";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
// import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="w-full mx-auto px-6">
        <HeroSection />
        <About />
        <Services />
        <Team />
        <Testimonials />
        <Info />
        <Emailer />
        <Footer />
      </div>
    </main>
  );
}
