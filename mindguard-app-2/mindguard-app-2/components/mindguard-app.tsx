"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Brain,
  Mic,
  Heart,
  Calendar,
  Shield,
  Phone,
  Activity,
  Moon,
  AlertTriangle,
  Settings,
  ArrowLeft,
} from "lucide-react"
import VoiceAnalysis from "@/components/voice-analysis"
import MoodTracker from "@/components/mood-tracker"
import Dashboard from "@/components/dashboard"
import MoodCalendar from "@/components/mood-calendar"
import EmergencySupport from "@/components/emergency-support"
import DataPrivacy from "@/components/data-privacy"
import BehaviorMonitoring from "@/components/behavior-monitoring"
import AICoach from "@/components/ai-coach"
import WellnessGoals from "@/components/wellness-goals"

interface MindGuardAppProps {
  onBackToLanding: () => void
}

export default function MindGuardApp({ onBackToLanding }: MindGuardAppProps) {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [overallWellness, setOverallWellness] = useState(72)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" onClick={onBackToLanding}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    MindGuard
                  </h1>
                  <p className="text-sm text-gray-600">Your Mental Wellness Companion</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-700">Wellness Score</p>
                  <p className="text-lg font-bold text-blue-600">{overallWellness}%</p>
                </div>
                <Progress value={overallWellness} className="w-20" />
              </div>

              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-9 bg-white/60 backdrop-blur-sm">
            <TabsTrigger value="dashboard" className="flex items-center space-x-2">
              <Activity className="h-4 w-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="voice" className="flex items-center space-x-2">
              <Mic className="h-4 w-4" />
              <span className="hidden sm:inline">Voice</span>
            </TabsTrigger>
            <TabsTrigger value="mood" className="flex items-center space-x-2">
              <Heart className="h-4 w-4" />
              <span className="hidden sm:inline">Mood</span>
            </TabsTrigger>
            <TabsTrigger value="calendar" className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">Calendar</span>
            </TabsTrigger>
            <TabsTrigger value="behavior" className="flex items-center space-x-2">
              <Moon className="h-4 w-4" />
              <span className="hidden sm:inline">Behavior</span>
            </TabsTrigger>
            <TabsTrigger value="ai-coach" className="flex items-center space-x-2">
              <Brain className="h-4 w-4" />
              <span className="hidden sm:inline">AI Coach</span>
            </TabsTrigger>
            <TabsTrigger value="goals" className="flex items-center space-x-2">
              <Activity className="h-4 w-4" />
              <span className="hidden sm:inline">Goals</span>
            </TabsTrigger>
            <TabsTrigger value="emergency" className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Emergency</span>
            </TabsTrigger>
            <TabsTrigger value="privacy" className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">Privacy</span>
            </TabsTrigger>
          </TabsList>

          {/* Alert for wellness score */}
          {overallWellness < 60 && (
            <Alert className="border-amber-200 bg-amber-50">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              <AlertDescription className="text-amber-800">
                Your wellness score is below average. Consider reaching out to a mental health professional or using our
                emergency support resources.
              </AlertDescription>
            </Alert>
          )}

          <TabsContent value="dashboard" className="space-y-6">
            <Dashboard />
          </TabsContent>

          <TabsContent value="voice" className="space-y-6">
            <VoiceAnalysis />
          </TabsContent>

          <TabsContent value="mood" className="space-y-6">
            <MoodTracker />
          </TabsContent>

          <TabsContent value="calendar" className="space-y-6">
            <MoodCalendar />
          </TabsContent>

          <TabsContent value="behavior" className="space-y-6">
            <BehaviorMonitoring />
          </TabsContent>

          <TabsContent value="ai-coach" className="space-y-6">
            <AICoach />
          </TabsContent>

          <TabsContent value="goals" className="space-y-6">
            <WellnessGoals />
          </TabsContent>

          <TabsContent value="emergency" className="space-y-6">
            <EmergencySupport />
          </TabsContent>

          <TabsContent value="privacy" className="space-y-6">
            <DataPrivacy />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
