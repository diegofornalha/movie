"use client"

interface CTABannerProps {
  title: string
  gradient?: string
}

export function CTABanner({ title, gradient = "from-purple-600 to-blue-600" }: CTABannerProps) {
  return (
    <section className="py-16 px-4 bg-dark-900">
      <div className="container mx-auto max-w-4xl">
        <div className={`relative bg-gradient-to-r ${gradient} rounded-2xl p-12 text-center overflow-hidden`}>
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-white rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-white rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {title}
            </h3>
            <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold transform transition-all hover:scale-105 hover:shadow-2xl">
              Agendar demonstração gratuita →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}