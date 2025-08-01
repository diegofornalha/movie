import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import { SplashScreen } from "@/components/splash-screen"
import { CustomCursor } from "@/components/custom-cursor"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Agentes Integrados - Funcionários de IA para sua empresa",
  description: "Automatize processos, atenda clientes 24/7 e aumente a produtividade com funcionários de IA inteligentes",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-dark-900 text-gray-100`} suppressHydrationWarning>
        <SplashScreen />
        {children}
        <footer className="w-full py-6 px-4 bg-dark-600 text-gray-400">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Agentes Integrados. Todos os direitos reservados.</p>
          </div>
        </footer>
        <CustomCursor />
      </body>
    </html>
  )
}
