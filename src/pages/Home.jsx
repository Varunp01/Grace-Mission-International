"use client"

import { useState } from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Testimonials from "../components/Testimonials"
import CallToAction from "../components/CallToAction"
import Footer from "../components/Footer"
import OurInitiatives from "../components/OurInitiatives"

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main className="flex-1">
        <Hero />
        <OurInitiatives></OurInitiatives>
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default Home
