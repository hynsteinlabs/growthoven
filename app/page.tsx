import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import CTABanner from "./components/CTABanner";
import Testimonials from "./components/Testimonials";
import Results from "./components/Results";
import FAQ from "./components/FAQ";
import Expertise from "./components/Expertise";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <Pricing />
        <CTABanner />
        <Testimonials />
        <Results />
        <FAQ />
        <Expertise />
        <About />
      </main>
      <Footer />
    </>
  );
}
