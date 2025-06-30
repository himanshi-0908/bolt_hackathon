"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Brain, Send, Lightbulb, Heart, Target, Sparkles, Clock, Mic, Video, BookOpen } from "lucide-react"

const aiPersonalities = [
  {
    name: "Dr. Emma",
    role: "Cognitive Behavioral Therapist",
    avatar: "👩‍⚕️",
    specialty: "Anxiety & Depression",
    description: "Specializes in CBT techniques and mindfulness practices",
  },
  {
    name: "Coach Alex",
    role: "Wellness Coach",
    avatar: "🧑‍💼",
    specialty: "Lifestyle & Habits",
    description: "Focuses on building healthy routines and goal achievement",
  },
  {
    name: "Maya",
    role: "Mindfulness Guide",
    avatar: "🧘‍♀️",
    specialty: "Meditation & Stress",
    description: "Expert in meditation, breathing exercises, and stress relief",
  },
]

const suggestedTopics = [
  { icon: Heart, text: "I'm feeling anxious today", category: "Emotional Support" },
  { icon: Target, text: "Help me set wellness goals", category: "Goal Setting" },
  { icon: Brain, text: "Explain my mood patterns", category: "Insights" },
  { icon: Lightbulb, text: "Suggest coping strategies", category: "Techniques" },
]

const chatHistory = [
  {
    type: "ai",
    message:
      "Hello! I'm Dr. Emma, your AI mental health coach. I've reviewed your recent mood data and noticed some patterns. How are you feeling today?",
    timestamp: "2 minutes ago",
    suggestions: ["I'm feeling stressed", "Tell me about my patterns", "I need coping strategies"],
  },
  {
    type: "user",
    message: "I've been feeling overwhelmed with work lately. My stress levels have been high.",
    timestamp: "1 minute ago",
  },
  {
    type: "ai",
    message:
      "I understand that work stress can be overwhelming. Based on your data, I see your stress levels peaked on Tuesday and Thursday. Let's work on some strategies to help you manage this. Would you like to try a quick breathing exercise, or shall we discuss time management techniques?",
    timestamp: "30 seconds ago",
    suggestions: ["Breathing exercise", "Time management tips", "Schedule a break"],
  },
]

const insights = [
  {
    title: "Stress Pattern Detected",
    description: "Your stress levels tend to spike on Tuesdays and Thursdays around 2 PM",
    action: "Schedule short breaks during these times",
    priority: "high",
  },
  {
    title: "Sleep Impact on Mood",
    description: "Your mood scores are 23% higher after getting 7+ hours of sleep",
    action: "Maintain consistent sleep schedule",
    priority: "medium",
  },
  {
    title: "Voice Analysis Insight",
    description: "Your voice shows signs of fatigue in the afternoons",
    action: "Consider afternoon energy-boosting activities",
    priority: "low",
  },
]

const exercises = [
  {
    title: "4-7-8 Breathing",
    duration: "5 minutes",
    description: "Reduce anxiety with this proven breathing technique",
    icon: Heart,
  },
  {
    title: "Progressive Muscle Relaxation",
    duration: "10 minutes",
    description: "Release physical tension throughout your body",
    icon: Target,
  },
  {
    title: "Mindful Meditation",
    duration: "15 minutes",
    description: "Center yourself with guided mindfulness practice",
    icon: Brain,
  },
]

export default function AICoach() {
  const [selectedCoach, setSelectedCoach] = useState(aiPersonalities[0])
  const [message, setMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = () => {
    if (message.trim()) {
      setIsTyping(true)
      // Simulate AI response delay
      setTimeout(() => {
        setIsTyping(false)
      }, 2000)
      setMessage("")
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setMessage(suggestion)
  }

  return (
    <div className="space-y-6">
      {/* AI Coach Selection */}
      <Card className="bg-gradient-to-br from-purple-50 to-pink-100 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="h-5 w-5 text-purple-600" />
            <span>AI Mental Health Coach</span>
            <Badge className="bg-purple-100 text-purple-800">24/7 Available</Badge>
          </CardTitle>
          <CardDescription>
            Get personalized support from AI coaches trained in various mental health specialties
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {aiPersonalities.map((coach, index) => (
              <div
                key={index}
                onClick={() => setSelectedCoach(coach)}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                  selectedCoach.name === coach.name
                    ? "border-purple-300 bg-purple-50 scale-105"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">{coach.avatar}</div>
                  <h4 className="font-semibold text-gray-800">{coach.name}</h4>
                  <p className="text-sm text-gray-600 mb-1">{coach.role}</p>
                  <Badge variant="outline" className="text-xs mb-2">
                    {coach.specialty}
                  </Badge>
                  <p className="text-xs text-gray-500">{coach.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat Interface */}
        <div className="lg:col-span-2">
          <Card className="h-[600px] flex flex-col">
            <CardHeader className="flex-shrink-0">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">{selectedCoach.avatar}</div>
                <div>
                  <CardTitle className="text-lg">{selectedCoach.name}</CardTitle>
                  <CardDescription>{selectedCoach.role}</CardDescription>
                </div>
                <div className="ml-auto flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Video className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Mic className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col">
              <ScrollArea className="flex-1 pr-4">
                <div className="space-y-4">
                  {chatHistory.map((chat, index) => (
                    <div key={index} className={`flex ${chat.type === "user" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[80%] ${chat.type === "user" ? "order-2" : "order-1"}`}>
                        <div
                          className={`p-3 rounded-lg ${
                            chat.type === "user" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          <p className="text-sm">{chat.message}</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-1 px-3">{chat.timestamp}</p>

                        {chat.suggestions && (
                          <div className="flex flex-wrap gap-2 mt-2 px-3">
                            {chat.suggestions.map((suggestion, suggestionIndex) => (
                              <Button
                                key={suggestionIndex}
                                size="sm"
                                variant="outline"
                                className="text-xs bg-transparent"
                                onClick={() => handleSuggestionClick(suggestion)}
                              >
                                {suggestion}
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>

                      <Avatar className={`w-8 h-8 ${chat.type === "user" ? "order-1 ml-2" : "order-2 mr-2"}`}>
                        <AvatarFallback>{chat.type === "user" ? "You" : selectedCoach.avatar}</AvatarFallback>
                      </Avatar>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-center space-x-2">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback>{selectedCoach.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="bg-gray-100 p-3 rounded-lg">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>

              <div className="flex-shrink-0 mt-4">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} disabled={!message.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  {suggestedTopics.map((topic, index) => {
                    const IconComponent = topic.icon
                    return (
                      <Button
                        key={index}
                        size="sm"
                        variant="outline"
                        className="text-xs bg-transparent"
                        onClick={() => handleSuggestionClick(topic.text)}
                      >
                        <IconComponent className="h-3 w-3 mr-1" />
                        {topic.text}
                      </Button>
                    )
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* AI Insights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-yellow-600" />
                <span>AI Insights</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {insights.map((insight, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-sm text-gray-800">{insight.title}</h4>
                      <Badge
                        className={`text-xs ${
                          insight.priority === "high"
                            ? "bg-red-100 text-red-800"
                            : insight.priority === "medium"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-green-100 text-green-800"
                        }`}
                      >
                        {insight.priority}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">{insight.description}</p>
                    <p className="text-xs text-blue-600 font-medium">{insight.action}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Exercises */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-pink-600" />
                <span>Quick Exercises</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {exercises.map((exercise, index) => {
                  const IconComponent = exercise.icon
                  return (
                    <div key={index} className="p-3 bg-pink-50 rounded-lg border border-pink-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <IconComponent className="h-4 w-4 text-pink-600" />
                        <h4 className="font-semibold text-sm text-pink-800">{exercise.title}</h4>
                        <Badge className="bg-pink-100 text-pink-800 text-xs ml-auto">
                          <Clock className="h-3 w-3 mr-1" />
                          {exercise.duration}
                        </Badge>
                      </div>
                      <p className="text-xs text-pink-600 mb-2">{exercise.description}</p>
                      <Button size="sm" className="w-full bg-pink-500 hover:bg-pink-600">
                        Start Exercise
                      </Button>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Learning Resources */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <span>Learning</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-sm text-blue-800 mb-1">Understanding Anxiety</h4>
                  <p className="text-xs text-blue-600 mb-2">Learn about anxiety triggers and management</p>
                  <Button size="sm" variant="outline" className="w-full bg-transparent">
                    Read Article
                  </Button>
                </div>

                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-sm text-green-800 mb-1">Sleep Hygiene Tips</h4>
                  <p className="text-xs text-green-600 mb-2">Improve your sleep quality naturally</p>
                  <Button size="sm" variant="outline" className="w-full bg-transparent">
                    Watch Video
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
