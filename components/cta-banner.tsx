"use client"

interface CTABannerProps {
  title: string
  gradient?: string
}

export function CTABanner({ title, gradient = "from-navy-700 to-navy-900" }: CTABannerProps) {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-dark-900 to-dark-900/50">
      <div className="container mx-auto max-w-4xl">
        <div className={`relative bg-gradient-to-r ${gradient} rounded-2xl p-12 text-center overflow-hidden`}>
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-white rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-white rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-6">
              {title}
            </h3>
            <a href="https://wa.me/5521936182339?text=Quero%20Agentes%20Integrados" target="_blank" rel="noopener noreferrer" className="relative inline-block px-8 py-4 bg-gradient-to-r from-slate-100 to-slate-200 text-navy-900 rounded-full font-semibold transform transition-all hover:scale-105 hover:shadow-2xl overflow-hidden group">
              {/* Static border */}
              <div className="absolute inset-0 border border-white/30 rounded-full"></div>
              
              {/* Animated neon border effect */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-white to-transparent animate-border-slide-horizontal"></div>
                <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-white to-transparent animate-border-slide-vertical-delayed"></div>
                <div className="absolute bottom-0 right-0 h-[2px] w-full bg-gradient-to-l from-transparent via-white to-transparent animate-border-slide-horizontal-reverse"></div>
                <div className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-transparent via-white to-transparent animate-border-slide-vertical-reverse-delayed"></div>
              </div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-white/20 blur-xl rounded-full"></div>
              </div>
              
              <span className="relative z-10">Agendar demonstração gratuita →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}