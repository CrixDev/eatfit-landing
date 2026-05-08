import Header from "./components/Header";
import Hero from "./components/Hero";
import Productos from "./components/Productos";
import Features from "./components/Features";
import AppShowcase from "./components/AppShowcase";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Productos />
        <Features />
        <AppShowcase />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default Landing;
