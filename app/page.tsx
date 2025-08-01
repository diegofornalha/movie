import { AutoSliderBanner } from "@/components/auto-slider-banner"
import { HeroSection } from "@/components/hero-section"
import { BenefitsSection } from "@/components/benefits-section"
import { StatsSection } from "@/components/stats-section"
import { IntegrationsSection } from "@/components/integrations-section"
import { RolesSection } from "@/components/roles-section"
import { SkillsSection } from "@/components/skills-section"
import { AccelerationSection } from "@/components/acceleration-section"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CTABanner } from "@/components/cta-banner"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Full-screen Auto-sliding Banner */}
      <AutoSliderBanner />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Benefits Section */}
      <BenefitsSection />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* First CTA */}
      <CTABanner 
        title="Pronto para revolucionar seu atendimento?"
        gradient="from-purple-600 to-pink-600"
      />
      
      {/* Integrations Section */}
      <IntegrationsSection />
      
      {/* Roles Section */}
      <RolesSection />
      
      {/* Second CTA */}
      <CTABanner 
        title="Transforme sua equipe com IA hoje mesmo"
        gradient="from-blue-600 to-cyan-600"
      />
      
      {/* Skills Section */}
      <SkillsSection />
      
      {/* Acceleration Program Section */}
      <AccelerationSection />
      
      {/* Third CTA */}
      <CTABanner 
        title="Comece agora e veja resultados em 7 dias"
        gradient="from-green-600 to-emerald-600"
      />
      
      {/* Pricing Section */}
      <PricingSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-dark-900 to-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Não perca mais tempo com tarefas repetitivas
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Junte-se a mais de 1500 empresas que já automatizaram seus processos
          </p>
          <button className="relative px-10 py-5 text-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full overflow-hidden group transform transition-all hover:scale-105 animate-pulse">
            <span className="relative z-10">Começar agora - 7 dias grátis →</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </section>
    </main>
  )
}