"use client"

export function HeroSection() {
  return (
    <section id="hero-section" className="relative py-20 px-4 bg-gradient-to-b from-dark-900 to-dark-800 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Já pensou em ter um{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              funcionário de IA?
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Funcionários de IA são como ter um "ChatGPT" da sua empresa. 
            Eles entendem e respondem aos clientes, executam tarefas e 
            trabalham 24/7 para o seu negócio.
          </p>
          
          <div className="pt-8">
            <button className="relative px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full overflow-hidden group transform transition-all hover:scale-105">
              <span className="relative z-10">Criar funcionário IA →</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-full">
                <div className="absolute inset-0 rounded-full border-2 border-white/20"></div>
                <div className="absolute inset-0 rounded-full border-2 border-white/40 animate-ping"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}