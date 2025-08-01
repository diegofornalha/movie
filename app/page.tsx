import { AutoSliderBanner } from "@/components/auto-slider-banner"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Full-screen Auto-sliding Banner */}
      <AutoSliderBanner />
    </main>
  )
}