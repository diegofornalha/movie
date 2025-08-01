"use client"

import { useEffect, useRef, useState } from "react"

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      number: 1500,
      suffix: "+",
      label: "Clientes Ativos",
      description: "Empresas utilizando nossa plataforma",
      color: "from-purple-400 to-purple-600"
    },
    {
      number: 25000,
      suffix: "",
      label: "Automações Criadas",
      description: "Fluxos de trabalho automatizados",
      color: "from-blue-400 to-blue-600"
    },
    {
      number: 75,
      suffix: "%",
      label: "Economia de Tempo",
      description: "Redução média em tarefas manuais",
      color: "from-green-400 to-green-600"
    },
    {
      number: 98,
      suffix: "%",
      label: "Taxa de Satisfação",
      description: "Clientes satisfeitos com o serviço",
      color: "from-orange-400 to-orange-600"
    }
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-dark-800 to-dark-900">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Nossos Números
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Resultados que falam por si
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              {...stat}
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16">
          <button className="relative px-8 py-4 text-lg font-semibold text-white bg-transparent overflow-hidden group rounded-full border-2 border-white/30 hover:border-white/60 transition-all">
            <span className="relative z-10">Comece sua transformação digital →</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </div>
    </section>
  )
}

function StatCard({ 
  number, 
  suffix, 
  label, 
  description, 
  color, 
  isVisible, 
  delay 
}: {
  number: number
  suffix: string
  label: string
  description: string
  color: string
  isVisible: boolean
  delay: number
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = number / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= number) {
        setCount(number)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, number])

  return (
    <div
      className={`relative transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative bg-dark-700/50 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 hover:border-white/30 transition-all group">
        {/* Gradient number */}
        <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent mb-2`}>
          {count.toLocaleString()}{suffix}
        </div>
        
        {/* Label */}
        <h3 className="text-xl font-semibold text-white mb-2">{label}</h3>
        
        {/* Description */}
        <p className="text-gray-400 text-sm">{description}</p>
        
        {/* Hover glow */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity`}></div>
      </div>
    </div>
  )
}