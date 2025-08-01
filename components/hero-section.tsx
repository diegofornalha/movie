"use client"

export function HeroSection() {
  return (
    <section id="hero-section" className="relative py-20 px-4 bg-gradient-to-b from-dark-900 to-dark-800 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-navy-600 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Já pensou em ter um{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-600 to-navy-800">
              funcionário de IA?
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Funcionários de IA são como ter um "ChatGPT" da sua empresa. 
            Eles entendem e respondem aos clientes, executam tarefas e 
            trabalham 24/7 para o seu negócio.
          </p>
          
          <div className="pt-8">
            <button className="relative px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-navy-700 to-navy-900 rounded-full overflow-hidden group transform transition-all hover:scale-105 shadow-lg hover:shadow-navy-700/30 hover:from-navy-600 hover:to-navy-800">
              <span className="relative z-10">Criar funcionário IA →</span>
              <div className="absolute inset-0 bg-gradient-to-r from-navy-600 to-navy-800 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
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
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}