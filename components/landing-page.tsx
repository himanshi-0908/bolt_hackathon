"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Brain,
  Mic,
  Heart,
  Shield,
  Users,
  TrendingUp,
  Zap,
  CheckCircle,
  ArrowRight,
  Play,
  Award,
  Globe,
  Activity,
  Phone,
  Target,
  Sparkles,
  Video,
} from "lucide-react"

interface LandingPageProps {
  onEnterApp: () => void
}

const features = [
  {
    icon: Mic,
    title: "AI Voice Analysis",
    description: "Advanced emotion detection through voice patterns and speech analysis",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Heart,
    title: "Mood Tracking",
    description: "Intuitive daily mood logging with comprehensive emotional insights",
    color: "text-pink-600",
    bg: "bg-pink-50",
  },
  {
    icon: Activity,
    title: "Behavioral Monitoring",
    description: "Track sleep, activity, and digital wellness patterns automatically",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Shield,
    title: "Blockchain Privacy",
    description: "Your data is secured with blockchain technology and end-to-end encryption",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Phone,
    title: "Crisis Support",
    description: "24/7 emergency support with one-tap access to mental health resources",
    color: "text-red-600",
    bg: "bg-red-50",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "AI-powered insights predict mental health trends and provide early warnings",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
]

const advancedFeatures = [
  {
    icon: Brain,
    title: "AI Mental Health Coach",
    description: "Personalized AI companion that provides 24/7 support and guidance",
    badge: "NEW",
  },
  {
    icon: Video,
    title: "Crisis Support Integration",
    description: "Direct connection to mental health crisis resources and support",
    badge: "24/7",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with others on similar journeys in a safe, moderated environment",
    badge: "BETA",
  },
  {
    icon: Target,
    title: "Wellness Goals",
    description: "Set and track personalized mental health goals with gamification",
    badge: "NEW",
  },
  {
    icon: Sparkles,
    title: "Crisis Prediction",
    description: "Advanced algorithms detect early warning signs and prevent mental health crises",
    badge: "AI-POWERED",
  },
  {
    icon: Globe,
    title: "Multi-Platform Sync",
    description: "Seamlessly sync across all devices with real-time data synchronization",
    badge: "FREE",
  },
]

const pricingPlans = [
  {
    name: "Free",
    price: "Free Forever",
    description: "Complete mental health tracking and support",
    features: [
      "Daily mood tracking",
      "AI voice analysis",
      "Sleep and behavior monitoring",
      "Emergency support access",
      "Unlimited data history",
      "Crisis prediction alerts",
      "AI mental health coach",
      "Wellness goals tracking",
      "Complete privacy protection",
    ],
    cta: "Get Started Free",
    popular: true,
  },
]

const stats = [
  { number: "970M+", label: "People affected by mental health issues globally" },
  { number: "95%", label: "Accuracy in emotion detection" },
  { number: "24/7", label: "Crisis support availability" },
  { number: "100%", label: "Free and open access" },
]

export default function LandingPage({ onEnterApp }: LandingPageProps) {
  const [email, setEmail] = useState("")

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  MindGuard
                </h1>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
                How it Works
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="hidden md:inline-flex">
                Sign In
              </Button>
              <Button
                onClick={onEnterApp}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              >
                Try Demo
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 px-3 py-1">
                  <Sparkles className="h-3 w-3 mr-1" />
                  AI-Powered Mental Health
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Your Digital
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {" "}
                    Mental Health{" "}
                  </span>
                  Companion
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  MindGuard uses cutting-edge AI and blockchain technology to monitor, protect, and improve your mental
                  wellness with complete privacy and security.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={onEnterApp}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg"
                >
                  Start Your Journey
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg bg-transparent">
                  <Play className="h-5 w-5 mr-2" />
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Free to start</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Open source</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Privacy first</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800">Today's Wellness</h3>
                    <Badge className="bg-green-100 text-green-800">Excellent</Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <Heart className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-blue-800">8.5</div>
                      <div className="text-sm text-blue-600">Mood Score</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <Activity className="h-6 w-6 text-green-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-green-800">92%</div>
                      <div className="text-sm text-green-600">Wellness</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Stress Level</span>
                      <span className="text-green-600 font-medium">Low</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-1/4"></div>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600" onClick={onEnterApp}>
                    <Mic className="h-4 w-4 mr-2" />
                    Start Voice Check-in
                  </Button>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">
              <Brain className="h-3 w-3 mr-1" />
              Core Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Mental Health Monitoring
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform provides complete mental wellness tracking with privacy-first design and
              professional-grade insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className={`w-12 h-12 ${feature.bg} rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-800 mb-4">
              <Zap className="h-3 w-3 mr-1" />
              Advanced Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Next-Generation Mental Health Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge features powered by artificial intelligence and machine learning for unprecedented mental
              health insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advancedFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">{feature.badge}</Badge>
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 mb-4">
              <Target className="h-3 w-3 mr-1" />
              How It Works
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple Steps to Better Mental Health</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started with MindGuard in minutes and begin your journey to improved mental wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect & Setup</h3>
              <p className="text-gray-600">
                Create your account, connect your devices, and set up your privacy preferences with blockchain security.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Track & Monitor</h3>
              <p className="text-gray-600">
                Use voice analysis, mood tracking, and behavioral monitoring to build a comprehensive wellness profile.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Insights & Support</h3>
              <p className="text-gray-600">
                Receive AI-powered insights, personalized recommendations, and access professional support when needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 mb-4">
              <Award className="h-3 w-3 mr-1" />
              Pricing Plans
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Mental Health Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible plans designed to meet your needs, from personal wellness to professional healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg relative ${plan.popular ? "ring-2 ring-blue-500 scale-105" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-500 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-gray-900 mt-4">
                    {plan.price}
                    {plan.price !== "Free" && <span className="text-lg text-gray-600">/month</span>}
                  </div>
                  <CardDescription className="text-gray-600 mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-8 ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                        : ""
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                    onClick={onEnterApp}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Mental Health?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of users who have already started their journey to better mental wellness with MindGuard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex-1 max-w-md">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                />
              </div>
              <Button size="lg" onClick={onEnterApp} className="bg-white text-blue-600 hover:bg-gray-100 px-8">
                Get Started Free
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-4">No credit card required • 14-day free trial • Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">MindGuard</h3>
              </div>
              <p className="text-gray-400">Your trusted digital companion for mental health monitoring and support.</p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-gray-400">f</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-gray-400">t</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-gray-400">in</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Crisis Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 MindGuard. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
