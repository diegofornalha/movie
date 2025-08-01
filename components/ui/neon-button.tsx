"use client"

import { ButtonHTMLAttributes, FC } from "react"
import { cn } from "@/lib/utils"

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  neonColor?: "navy" | "slate" | "blue" | "dark"
}

export const NeonButton: FC<NeonButtonProps> = ({ 
  children, 
  className, 
  neonColor = "navy",
  ...props 
}) => {
  const neonColorClasses = {
    navy: {
      bg: "bg-gradient-to-r from-navy-700 to-navy-900",
      hover: "hover:from-navy-600 hover:to-navy-800",
      shadow: "shadow-lg hover:shadow-navy-700/30",
      border: "border-navy-600/30",
      neon: "via-navy-500"
    },
    slate: {
      bg: "bg-gradient-to-r from-slate-600 to-slate-800",
      hover: "hover:from-slate-500 hover:to-slate-700",
      shadow: "shadow-lg hover:shadow-slate-600/30",
      border: "border-slate-500/30",
      neon: "via-slate-400"
    },
    blue: {
      bg: "bg-gradient-to-r from-blue-600 to-blue-800",
      hover: "hover:from-blue-500 hover:to-blue-700",
      shadow: "shadow-lg hover:shadow-blue-600/30",
      border: "border-blue-500/30",
      neon: "via-blue-400"
    },
    dark: {
      bg: "bg-gradient-to-r from-dark-700 to-dark-900",
      hover: "hover:from-dark-600 hover:to-dark-800",
      shadow: "shadow-lg hover:shadow-dark-700/30",
      border: "border-white/30",
      neon: "via-white"
    }
  }

  const colors = neonColorClasses[neonColor]

  return (
    <button 
      className={cn(
        "relative overflow-hidden group rounded-full transform transition-all hover:scale-105",
        colors.bg,
        colors.hover,
        colors.shadow,
        "text-white font-semibold",
        className
      )}
      {...props}
    >
      {/* Button content */}
      <span className="relative z-10 block px-8 py-4">{children}</span>
      
      {/* Static border */}
      <div className={cn("absolute inset-0 border rounded-full", colors.border)}></div>
      
      {/* Animated neon border effect */}
      <div className="absolute inset-0">
        {/* Top border animation */}
        <div className={cn(
          "absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent to-transparent animate-border-slide-horizontal",
          colors.neon
        )}></div>
        
        {/* Right border animation */}
        <div className={cn(
          "absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent to-transparent animate-border-slide-vertical-delayed",
          colors.neon
        )}></div>
        
        {/* Bottom border animation */}
        <div className={cn(
          "absolute bottom-0 right-0 h-[2px] w-full bg-gradient-to-l from-transparent to-transparent animate-border-slide-horizontal-reverse",
          colors.neon
        )}></div>
        
        {/* Left border animation */}
        <div className={cn(
          "absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-transparent to-transparent animate-border-slide-vertical-reverse-delayed",
          colors.neon
        )}></div>
      </div>
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className={cn("absolute inset-0 blur-xl", colors.bg.replace("bg-gradient-to-r", "bg-gradient-to-br"), "opacity-30")}></div>
      </div>
    </button>
  )
}
