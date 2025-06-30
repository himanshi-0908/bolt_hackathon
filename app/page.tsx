"use client"

import { useState } from "react"
import LandingPage from "@/components/landing-page"
import MindGuardApp from "@/components/mindguard-app"

export default function HomePage() {
  const [showApp, setShowApp] = useState(false)

  if (showApp) {
    return <MindGuardApp onBackToLanding={() => setShowApp(false)} />
  }

  return <LandingPage onEnterApp={() => setShowApp(true)} />
}
