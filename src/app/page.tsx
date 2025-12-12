'use client'

import { useState, useEffect } from 'react'
import { 
  Sparkles, 
  Palette, 
  Zap, 
  Heart, 
  ChevronDown,
  ExternalLink,
  Star,
  Smartphone
} from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-macaron-pink via-macaron-lavender to-macaron-mint flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="font-display font-bold text-xl text-gray-800">Macaron</span>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href="/privacy" 
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Privacy
            </Link>
            <a 
              href="#download"
              className="btn-macaron bg-gradient-to-r from-macaron-pink via-macaron-lilac to-macaron-lavender text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all"
            >
              Get App
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Star className="w-4 h-4 text-macaron-coral fill-macaron-coral" />
            <span className="text-sm font-medium text-gray-700">Discover AI-powered tools</span>
          </div>

          {/* Main Heading */}
          <h1 
            className={`font-display text-5xl md:text-7xl font-extrabold mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="text-gray-900">Macaron</span>
            <br />
            <span className="gradient-text">AI Tools</span>
          </h1>

          {/* Slogan */}
          <p 
            className={`text-xl md:text-2xl text-gray-600 mb-8 font-medium transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Your pocket of AI inspirations ✨
          </p>

          {/* Description */}
          <p 
            className={`text-lg text-gray-500 max-w-2xl mx-auto mb-12 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            A delightful collection of AI-powered tools that makes your everyday life 
            sweeter. Discover, create, and get inspired—one bite at a time.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a 
              href="#download"
              className="btn-macaron group bg-gradient-to-r from-macaron-coral via-macaron-pink to-macaron-lilac text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
            >
              <Smartphone className="w-5 h-5" />
              Download Now
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#features"
              className="group px-8 py-4 rounded-2xl font-semibold text-gray-700 hover:text-gray-900 transition-all flex items-center gap-2"
            >
              Learn More
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div 
            className={`animate-bounce transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ChevronDown className="w-8 h-8 text-gray-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sweet Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to make your life more delightful with AI
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className={`feature-card glass-card rounded-3xl p-6 cursor-pointer`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div 
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${feature.bgColor}`}
                >
                  <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-macaron-lavender/10 to-transparent" />
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Beautifully Crafted
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A delightful experience designed with love and attention to detail
            </p>
          </div>

          {/* Phone Mockups */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {/* Left Phone */}
            <div className="phone-mockup w-[280px] transform md:-rotate-6 hover:rotate-0 transition-transform duration-500">
              <div className="phone-screen aspect-[9/19.5] bg-gradient-to-br from-macaron-cream to-macaron-rose flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-macaron-pink to-macaron-lilac flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-500 text-sm">Screenshot 1</p>
                  <p className="text-gray-400 text-xs mt-1">Replace with your app screenshot</p>
                </div>
              </div>
            </div>

            {/* Center Phone (Featured) */}
            <div className="phone-mockup w-[300px] md:w-[320px] transform scale-105 z-10 hover:scale-110 transition-transform duration-500">
              <div className="phone-screen aspect-[9/19.5] bg-gradient-to-br from-macaron-mint to-macaron-sky flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-macaron-coral to-macaron-pink flex items-center justify-center">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-gray-500 text-sm">Screenshot 2</p>
                  <p className="text-gray-400 text-xs mt-1">Replace with your app screenshot</p>
                </div>
              </div>
            </div>

            {/* Right Phone */}
            <div className="phone-mockup w-[280px] transform md:rotate-6 hover:rotate-0 transition-transform duration-500">
              <div className="phone-screen aspect-[9/19.5] bg-gradient-to-br from-macaron-lavender to-macaron-lilac flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-macaron-mint to-macaron-sage flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-500 text-sm">Screenshot 3</p>
                  <p className="text-gray-400 text-xs mt-1">Replace with your app screenshot</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-[32px] p-8 md:p-12 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-macaron-pink/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-macaron-mint/30 blur-3xl" />
            
            <div className="relative">
              <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-macaron-pink via-macaron-lavender to-macaron-mint flex items-center justify-center shadow-xl">
                <span className="text-white font-bold text-3xl">M</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to get started?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
                Download Macaron AI Tools now and discover a world of AI-powered inspirations at your fingertips.
              </p>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* Google Play Button */}
                <a 
                  href="#"
                  className="group flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl transition-all hover:shadow-lg"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">GET IT ON</div>
                    <div className="text-lg font-semibold -mt-1">Google Play</div>
                  </div>
                </a>

                {/* App Store Button (Coming Soon) */}
                <div className="flex items-center gap-3 bg-gray-200 text-gray-500 px-6 py-3 rounded-xl cursor-not-allowed">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">COMING SOON</div>
                    <div className="text-lg font-semibold -mt-1">App Store</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-macaron-pink via-macaron-lavender to-macaron-mint flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="font-display font-bold text-gray-800">Macaron AI Tools</span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">
                Privacy Policy
              </Link>
              <a href="mailto:gurujifinder0@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Macaron AI Tools. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

// Features data
const features = [
  {
    icon: Sparkles,
    title: 'AI Playbook',
    description: 'Discover a curated collection of AI tools that update dynamically with the latest inspirations.',
    bgColor: 'bg-gradient-to-br from-macaron-pink to-macaron-rose',
    iconColor: 'text-white',
  },
  {
    icon: Palette,
    title: 'Personalized',
    description: 'Each tool adapts to your preferences, creating a unique experience just for you.',
    bgColor: 'bg-gradient-to-br from-macaron-lavender to-macaron-lilac',
    iconColor: 'text-white',
  },
  {
    icon: Zap,
    title: 'Instant Magic',
    description: 'Get AI-powered results in seconds. No complex setup, just pure productivity.',
    bgColor: 'bg-gradient-to-br from-macaron-mint to-macaron-sage',
    iconColor: 'text-white',
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Beautifully designed with attention to every detail for a delightful experience.',
    bgColor: 'bg-gradient-to-br from-macaron-peach to-macaron-coral',
    iconColor: 'text-white',
  },
]

