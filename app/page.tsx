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
      <CTABanner title="Pronto para revolucionar seu atendimento?" gradient="from-navy-700 to-navy-900" />

      {/* Integrations Section */}
      <IntegrationsSection />

      {/* Roles Section */}
      <RolesSection />

      {/* Second CTA */}
      <CTABanner title="Transforme sua equipe com IA hoje mesmo" gradient="from-navy-600 to-navy-800" />

      {/* Skills Section */}
      <SkillsSection />

      {/* Acceleration Program Section */}
      <AccelerationSection />

      {/* Third CTA */}
      <CTABanner title="Comece agora e veja resultados em 7 dias" gradient="from-navy-800 to-black" />

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-navy-900 to-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-6">
            Não perca mais tempo com tarefas repetitivas
          </h2>
          <p className="text-xl text-slate-500 mb-8">
            Junte-se a mais de 1500 empresas que já automatizaram seus processos
          </p>
          <a
            href="https://wa.me/5521936182339?text=Quero%20Agentes%20Integrados"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block px-10 py-5 text-xl font-semibold text-white bg-gradient-to-r from-navy-700 to-navy-900 rounded-full overflow-hidden group transform transition-all hover:scale-105 animate-pulse shadow-xl hover:shadow-navy-700/30 hover:from-navy-600 hover:to-navy-800"
          >
            {/* Static border */}
            <div className="absolute inset-0 border border-navy-600/30 rounded-full"></div>

            {/* Animated neon border effect */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-navy-500 to-transparent animate-border-slide-horizontal"></div>
              <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-navy-500 to-transparent animate-border-slide-vertical-delayed"></div>
              <div className="absolute bottom-0 right-0 h-[2px] w-full bg-gradient-to-l from-transparent via-navy-500 to-transparent animate-border-slide-horizontal-reverse"></div>
              <div className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-transparent via-navy-500 to-transparent animate-border-slide-vertical-reverse-delayed"></div>
            </div>

            {/* Glow effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-navy-600/20 blur-xl rounded-full"></div>
            </div>

            <span className="relative z-10">Começar agora - 7 dias grátis →</span>
            <div className="absolute inset-0 bg-gradient-to-r from-navy-600 to-navy-800 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
        </div>
      </section>
    </main>
  )
}
