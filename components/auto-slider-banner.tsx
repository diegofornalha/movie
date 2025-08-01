"use client"

import { Button } from "@/components/ui/button"

export function AutoSliderBanner() {
  const handleShopClick = () => {
    const productSection = document.getElementById("product-section")
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/vídeo-lp.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30">
        {/* Additional gradient overlay for text area */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black/40" />
      </div>
      
      {/* Content container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white text-center mb-4 drop-shadow-2xl">
          Agentes Integrados
        </h1>
        <p className="text-xl text-gray-100 text-center mb-8 drop-shadow-lg">Seus Agentes Conectados</p>
        
        {/* Custom button with neon border animation */}
        <button 
          onClick={handleShopClick}
          className="relative px-8 py-4 text-lg font-semibold text-white bg-transparent overflow-hidden group rounded-full animate-shake"
        >
          {/* Button content */}
          <span className="relative z-10">AGENDAR DEMONSTRAÇÃO</span>
          
          {/* Static border */}
          <div className="absolute inset-0 border border-white/30 rounded-full"></div>
          
          {/* Animated neon border effect */}
          <div className="absolute inset-0">
            {/* Top border animation */}
            <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-white to-transparent animate-border-slide-horizontal"></div>
            
            {/* Right border animation */}
            <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-white to-transparent animate-border-slide-vertical-delayed"></div>
            
            {/* Bottom border animation */}
            <div className="absolute bottom-0 right-0 h-[2px] w-full bg-gradient-to-l from-transparent via-white to-transparent animate-border-slide-horizontal-reverse"></div>
            
            {/* Left border animation */}
            <div className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-transparent via-white to-transparent animate-border-slide-vertical-reverse-delayed"></div>
          </div>
          
          {/* Glow effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 bg-white/10 blur-xl"></div>
          </div>
        </button>
        
        {/* Scroll down arrow with 3 chevrons and traveling light */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer" onClick={handleShopClick}>
          <div className="relative">
            {/* Three chevron layers */}
            <div className="flex flex-col items-center space-y-[-8px]">
              <div className="relative overflow-hidden">
                <svg className="w-12 h-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                {/* Traveling light on first chevron */}
                <svg className="absolute inset-0 w-12 h-8" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" 
                    className="stroke-white animate-chevron-light" style={{strokeDasharray: '28', strokeDashoffset: '28'}} />
                </svg>
              </div>
              
              <div className="relative overflow-hidden">
                <svg className="w-12 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                {/* Traveling light on second chevron */}
                <svg className="absolute inset-0 w-12 h-8" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" 
                    className="stroke-white/80 animate-chevron-light" style={{strokeDasharray: '28', strokeDashoffset: '28', animationDelay: '0.5s'}} />
                </svg>
              </div>
              
              <div className="relative overflow-hidden">
                <svg className="w-12 h-8 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                {/* Traveling light on third chevron */}
                <svg className="absolute inset-0 w-12 h-8" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" 
                    className="stroke-white/60 animate-chevron-light" style={{strokeDasharray: '28', strokeDashoffset: '28', animationDelay: '1s'}} />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes border-slide-horizontal {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
          
          @keyframes border-slide-horizontal-reverse {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          
          @keyframes border-slide-vertical {
            0% {
              transform: translateY(-100%);
            }
            100% {
              transform: translateY(100%);
            }
          }
          
          @keyframes border-slide-vertical-reverse {
            0% {
              transform: translateY(100%);
            }
            100% {
              transform: translateY(-100%);
            }
          }
          
          .animate-border-slide-horizontal {
            animation: border-slide-horizontal 3s linear infinite;
          }
          
          .animate-border-slide-horizontal-reverse {
            animation: border-slide-horizontal-reverse 3s linear infinite;
            animation-delay: 1.5s;
          }
          
          .animate-border-slide-vertical-delayed {
            animation: border-slide-vertical 3s linear infinite;
            animation-delay: 0.75s;
          }
          
          .animate-border-slide-vertical-reverse-delayed {
            animation: border-slide-vertical-reverse 3s linear infinite;
            animation-delay: 2.25s;
          }
          
          @keyframes shake {
            0%, 100% {
              transform: translateX(0);
            }
            10%, 30%, 50%, 70%, 90% {
              transform: translateX(-2px);
            }
            20%, 40%, 60%, 80% {
              transform: translateX(2px);
            }
          }
          
          .animate-shake {
            animation: shake 2s ease-in-out infinite;
          }
          
          @keyframes chevron-light {
            0% {
              stroke-dashoffset: 28;
            }
            50% {
              stroke-dashoffset: 0;
            }
            100% {
              stroke-dashoffset: -28;
            }
          }
          
          .animate-chevron-light {
            animation: chevron-light 3s linear infinite;
          }
        `}</style>
      </div>
    </div>
  )
}