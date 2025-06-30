"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Target,
  Trophy,
  Calendar,
  TrendingUp,
  Star,
  Plus,
  CheckCircle,
  Clock,
  Flame,
  Award,
  Zap,
  Heart,
  Brain,
  Activity,
} from "lucide-react"

const currentGoals = [
  {
    id: 1,
    title: "Daily Mood Check-in",
    description: "Track your mood every day for better self-awareness",
    category: "Mood Tracking",
    progress: 85,
    target: 30,
    current: 25,
    unit: "days",
    streak: 7,
    difficulty: "Easy",
    points: 50,
    icon: Heart,
    color: "text-pink-600",
    bg: "bg-pink-50",
    deadline: "2024-02-15",
  },
  {
    id: 2,
    title: "Meditation Practice",
    description: "Meditate for 10 minutes daily to reduce stress",
    category: "Mindfulness",
    progress: 60,
    target: 21,
    current: 12,
    unit: "sessions",
    streak: 3,
    difficulty: "Medium",
    points: 100,
    icon: Brain,
    color: "text-purple-600",
    bg: "bg-purple-50",
    deadline: "2024-02-10",
  },
  {
    id: 3,
    title: "Sleep 8 Hours",
    description: "Maintain consistent 8-hour sleep schedule",
    category: "Sleep Health",
    progress: 40,
    target: 14,
    current: 6,
    unit: "nights",
    streak: 2,
    difficulty: "Hard",
    points: 150,
    icon: Activity,
    color: "text-blue-600",
    bg: "bg-blue-50",
    deadline: "2024-02-20",
  },
]

const achievements = [
  {
    title: "First Week Complete",
    description: "Completed your first week of mood tracking",
    icon: Trophy,
    date: "2024-01-08",
    points: 100,
  },
  {
    title: "Stress Warrior",
    description: "Maintained low stress levels for 5 consecutive days",
    icon: Award,
    date: "2024-01-12",
    points: 150,
  },
  {
    title: "Early Bird",
    description: "Woke up before 7 AM for 7 days straight",
    icon: Star,
    date: "2024-01-10",
    points: 75,
  },
]

const goalTemplates = [
  {
    title: "Anxiety Management",
    description: "Practice breathing exercises daily",
    category: "Stress Relief",
    difficulty: "Medium",
    duration: "21 days",
    points: 200,
  },
  {
    title: "Social Connection",
    description: "Reach out to friends or family weekly",
    category: "Relationships",
    difficulty: "Easy",
    duration: "30 days",
    points: 100,
  },
  {
    title: "Physical Activity",
    description: "Exercise for 30 minutes, 3 times per week",
    category: "Physical Health",
    difficulty: "Hard",
    duration: "28 days",
    points: 250,
  },
]

export default function WellnessGoals() {
  const [showCreateGoal, setShowCreateGoal] = useState(false)
  const [newGoal, setNewGoal] = useState({
    title: "",
    description: "",
    target: "",
    duration: "",
  })

  const totalPoints =
    currentGoals.reduce((sum, goal) => sum + goal.points, 0) +
    achievements.reduce((sum, achievement) => sum + achievement.points, 0)

  const handleCreateGoal = () => {
    // In a real app, this would save the goal
    setShowCreateGoal(false)
    setNewGoal({ title: "", description: "", target: "", duration: "" })
  }

  return (
    <div className="space-y-6">
      {/* Overview */}
      <Card className="bg-gradient-to-br from-green-50 to-blue-100 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5 text-green-600" />
            <span>Wellness Goals Dashboard</span>
          </CardTitle>
          <CardDescription>
            Track your mental health goals and celebrate your progress with gamified achievements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
              <Trophy className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-800">{totalPoints}</div>
              <div className="text-sm text-green-600">Total Points</div>
            </div>

            <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
              <Flame className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-800">7</div>
              <div className="text-sm text-blue-600">Day Streak</div>
            </div>

            <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
              <CheckCircle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-800">{currentGoals.length}</div>
              <div className="text-sm text-purple-600">Active Goals</div>
            </div>

            <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
              <Star className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-orange-800">{achievements.length}</div>
              <div className="text-sm text-orange-600">Achievements</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Active Goals */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Active Goals</h2>
        <Button onClick={() => setShowCreateGoal(true)} className="bg-gradient-to-r from-green-500 to-blue-600">
          <Plus className="h-4 w-4 mr-2" />
          Create Goal
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentGoals.map((goal) => {
          const IconComponent = goal.icon
          return (
            <Card key={goal.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 ${goal.bg} rounded-lg flex items-center justify-center`}>
                    <IconComponent className={`h-6 w-6 ${goal.color}`} />
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    <Badge
                      className={`${
                        goal.difficulty === "Easy"
                          ? "bg-green-100 text-green-800"
                          : goal.difficulty === "Medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {goal.difficulty}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Flame className="h-3 w-3 text-orange-500" />
                      <span className="text-xs text-gray-600">{goal.streak} day streak</span>
                    </div>
                  </div>
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">{goal.title}</CardTitle>
                <CardDescription className="text-gray-600">{goal.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium">
                      {goal.current}/{goal.target} {goal.unit}
                    </span>
                  </div>
                  <Progress value={goal.progress} className="h-2" />
                  <div className="text-xs text-gray-500">{goal.progress}% complete</div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Due: {goal.deadline}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Zap className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-medium text-yellow-600">{goal.points} pts</span>
                  </div>
                </div>

                <Button className="w-full bg-transparent" variant="outline">
                  Update Progress
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Create Goal Modal */}
      {showCreateGoal && (
        <Card className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Create New Goal</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Goal Title</label>
                <Input
                  placeholder="e.g., Daily Meditation"
                  value={newGoal.title}
                  onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <Textarea
                  placeholder="Describe your goal..."
                  value={newGoal.description}
                  onChange={(e) => setNewGoal({ ...newGoal, description: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Target</label>
                  <Input
                    placeholder="e.g., 21 days"
                    value={newGoal.target}
                    onChange={(e) => setNewGoal({ ...newGoal, target: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                  <Input
                    placeholder="e.g., 30 days"
                    value={newGoal.duration}
                    onChange={(e) => setNewGoal({ ...newGoal, duration: e.target.value })}
                  />
                </div>
              </div>
            </div>
            <div className="flex space-x-3 mt-6">
              <Button onClick={handleCreateGoal} className="flex-1">
                Create Goal
              </Button>
              <Button variant="outline" onClick={() => setShowCreateGoal(false)} className="flex-1">
                Cancel
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Goal Templates */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="h-5 w-5 text-yellow-600" />
            <span>Goal Templates</span>
          </CardTitle>
          <CardDescription>Quick start with pre-designed wellness goals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {goalTemplates.map((template, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-gray-800">{template.title}</h4>
                  <Badge
                    className={`text-xs ${
                      template.difficulty === "Easy"
                        ? "bg-green-100 text-green-800"
                        : template.difficulty === "Medium"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    {template.difficulty}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{template.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Zap className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-medium text-yellow-600">{template.points} pts</span>
                  </div>
                </div>
                <Button size="sm" className="w-full bg-transparent" variant="outline">
                  Use Template
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Award className="h-5 w-5 text-gold-600" />
            <span>Recent Achievements</span>
          </CardTitle>
          <CardDescription>Celebrate your mental health milestones</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">{achievement.title}</h4>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                    <p className="text-xs text-gray-500">Earned on {achievement.date}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Zap className="h-4 w-4 text-yellow-500" />
                    <span className="font-medium text-yellow-600">+{achievement.points}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Progress Analytics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            <span>Progress Analytics</span>
          </CardTitle>
          <CardDescription>Track your goal completion trends over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-800">This Week's Performance</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Goals Completed</span>
                  <span className="font-medium">3/5</span>
                </div>
                <Progress value={60} className="h-2" />

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Streak Maintained</span>
                  <span className="font-medium">7 days</span>
                </div>
                <Progress value={100} className="h-2" />

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Points Earned</span>
                  <span className="font-medium">325 pts</span>
                </div>
                <Progress value={81} className="h-2" />
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-800">Motivation Boost</h4>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-blue-800">You're doing great!</span>
                </div>
                <p className="text-sm text-blue-600">
                  You've maintained a 7-day streak and completed 60% of your weekly goals. Keep up the excellent work!
                </p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-green-800">Next Milestone</span>
                </div>
                <p className="text-sm text-green-600">
                  Complete 2 more daily check-ins to unlock the "Consistency Champion" achievement!
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
