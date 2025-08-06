import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import VideoSection from "@/components/sections/VideoSection";
import PricingSection from "@/components/sections/PricingSection";
import Statistics from "@/components/sections/Statistics";
import PlatformIcons from "@/components/sections/PlatformIcons";
import SocialProof from "@/components/sections/SocialProof";
import FinalCTA from "@/components/sections/FinalCTA";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* HEADLINE */}
        <section id="hero">
          <Hero />
        </section>
        
        {/* FUNCIONAMENTO */}
        <section id="video">
          <VideoSection />
        </section>
        
        {/* PLANOS */}
        <section id="pricing">
          <PricingSection />
        </section>
        
        {/* NUMEROS */}
        <section id="stats">
          <Statistics />
        </section>
        
        <PlatformIcons />
        
        <section id="testimonials">
          <SocialProof />
        </section>
        
        {/* ULTIMO CTA */}
        <FinalCTA />
        
        {/* FAQ */}
        <section id="faq">
          <FAQSection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
