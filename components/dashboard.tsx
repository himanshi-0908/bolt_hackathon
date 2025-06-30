"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Activity, Heart, Brain, Moon, Zap } from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const moodData = [
  { day: "Mon", mood: 7, stress: 3, energy: 8 },
  { day: "Tue", mood: 6, stress: 5, energy: 6 },
  { day: "Wed", mood: 8, stress: 2, energy: 9 },
  { day: "Thu", mood: 5, stress: 7, energy: 4 },
  { day: "Fri", mood: 9, stress: 1, energy: 10 },
  { day: "Sat", mood: 8, stress: 2, energy: 8 },
  { day: "Sun", mood: 7, stress: 3, energy: 7 },
]

const sleepData = [
  { day: "Mon", hours: 7.5, quality: 8 },
  { day: "Tue", hours: 6.2, quality: 6 },
  { day: "Wed", hours: 8.1, quality: 9 },
  { day: "Thu", hours: 5.8, quality: 5 },
  { day: "Fri", hours: 7.8, quality: 8 },
  { day: "Sat", hours: 9.2, quality: 9 },
  { day: "Sun", hours: 8.5, quality: 8 },
]

const emotionDistribution = [
  { name: "Happy", value: 35, color: "#10B981" },
  { name: "Calm", value: 25, color: "#3B82F6" },
  { name: "Anxious", value: 20, color: "#F59E0B" },
  { name: "Sad", value: 12, color: "#EF4444" },
  { name: "Excited", value: 8, color: "#8B5CF6" },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">Overall Wellness</CardTitle>
            <Brain className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-800">72%</div>
            <div className="flex items-center space-x-2 mt-2">
              <TrendingUp className="h-3 w-3 text-green-600" />
              <p className="text-xs text-green-600">+5% from last week</p>
            </div>
            <Progress value={72} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Mood Score</CardTitle>
            <Heart className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-800">7.2/10</div>
            <div className="flex items-center space-x-2 mt-2">
              <TrendingUp className="h-3 w-3 text-green-600" />
              <p className="text-xs text-green-600">Stable</p>
            </div>
            <Badge variant="secondary" className="mt-2 bg-green-100 text-green-800">
              Good
            </Badge>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-700">Sleep Quality</CardTitle>
            <Moon className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-800">7.6h</div>
            <div className="flex items-center space-x-2 mt-2">
              <TrendingDown className="h-3 w-3 text-red-600" />
              <p className="text-xs text-red-600">-0.5h from target</p>
            </div>
            <Badge variant="secondary" className="mt-2 bg-purple-100 text-purple-800">
              Fair
            </Badge>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-orange-700">Stress Level</CardTitle>
            <Zap className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-800">3.2/10</div>
            <div className="flex items-center space-x-2 mt-2">
              <TrendingDown className="h-3 w-3 text-green-600" />
              <p className="text-xs text-green-600">Improving</p>
            </div>
            <Badge variant="secondary" className="mt-2 bg-orange-100 text-orange-800">
              Low
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Mood Trends */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-blue-600" />
              <span>Weekly Mood Trends</span>
            </CardTitle>
            <CardDescription>Your mood, stress, and energy levels over the past week</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={moodData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="day" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="mood"
                  stroke="#3B82F6"
                  strokeWidth={3}
                  dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="stress"
                  stroke="#EF4444"
                  strokeWidth={2}
                  dot={{ fill: "#EF4444", strokeWidth: 2, r: 3 }}
                />
                <Line
                  type="monotone"
                  dataKey="energy"
                  stroke="#10B981"
                  strokeWidth={2}
                  dot={{ fill: "#10B981", strokeWidth: 2, r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Sleep Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Moon className="h-5 w-5 text-purple-600" />
              <span>Sleep Analysis</span>
            </CardTitle>
            <CardDescription>Sleep duration and quality tracking</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={sleepData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="day" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="hours" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Emotion Distribution */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Heart className="h-5 w-5 text-pink-600" />
            <span>Emotion Distribution</span>
          </CardTitle>
          <CardDescription>Breakdown of your emotional states this week</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
            <div className="w-full lg:w-1/2">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={emotionDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {emotionDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full lg:w-1/2 space-y-3">
              {emotionDistribution.map((emotion, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: emotion.color }} />
                    <span className="font-medium">{emotion.name}</span>
                  </div>
                  <span className="text-gray-600">{emotion.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Take immediate steps to improve your mental wellness</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Record Voice Check-in</h4>
              <p className="text-sm text-blue-600 mb-3">Share how you're feeling through voice analysis</p>
              <Badge className="bg-blue-100 text-blue-800">2 min</Badge>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">Breathing Exercise</h4>
              <p className="text-sm text-green-600 mb-3">Guided breathing to reduce stress and anxiety</p>
              <Badge className="bg-green-100 text-green-800">5 min</Badge>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-2">Connect with Support</h4>
              <p className="text-sm text-purple-600 mb-3">Reach out to your trusted contacts or professionals</p>
              <Badge className="bg-purple-100 text-purple-800">Available 24/7</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
