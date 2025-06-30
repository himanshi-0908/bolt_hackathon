"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Moon, Activity, Heart, Smartphone, TrendingUp, TrendingDown, Clock, Target, AlertCircle } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

const sleepData = [
  { day: "Mon", hours: 7.5, quality: 8, deepSleep: 2.1, remSleep: 1.8 },
  { day: "Tue", hours: 6.2, quality: 6, deepSleep: 1.5, remSleep: 1.2 },
  { day: "Wed", hours: 8.1, quality: 9, deepSleep: 2.4, remSleep: 2.1 },
  { day: "Thu", hours: 5.8, quality: 5, deepSleep: 1.2, remSleep: 1.0 },
  { day: "Fri", hours: 7.8, quality: 8, deepSleep: 2.2, remSleep: 1.9 },
  { day: "Sat", hours: 9.2, quality: 9, deepSleep: 2.8, remSleep: 2.3 },
  { day: "Sun", hours: 8.5, quality: 8, deepSleep: 2.5, remSleep: 2.0 },
]

const activityData = [
  { day: "Mon", steps: 8500, active: 45, calories: 320 },
  { day: "Tue", steps: 6200, active: 30, calories: 280 },
  { day: "Wed", steps: 12000, active: 65, calories: 450 },
  { day: "Thu", steps: 4500, active: 20, calories: 200 },
  { day: "Fri", steps: 9800, active: 55, calories: 380 },
  { day: "Sat", steps: 15000, active: 90, calories: 520 },
  { day: "Sun", steps: 11200, active: 70, calories: 420 },
]

const screenTimeData = [
  { category: "Social Media", hours: 2.5, color: "#EF4444" },
  { category: "Work/Productivity", hours: 6.2, color: "#3B82F6" },
  { category: "Entertainment", hours: 1.8, color: "#8B5CF6" },
  { category: "Health/Fitness", hours: 0.5, color: "#10B981" },
  { category: "Other", hours: 1.2, color: "#F59E0B" },
]

const habitData = [
  { name: "Water Intake", current: 6, target: 8, unit: "glasses", color: "#3B82F6" },
  { name: "Exercise", current: 4, target: 5, unit: "days/week", color: "#10B981" },
  { name: "Meditation", current: 3, target: 7, unit: "days/week", color: "#8B5CF6" },
  { name: "Sleep Quality", current: 7.2, target: 8, unit: "/10", color: "#F59E0B" },
]

export default function BehaviorMonitoring() {
  const avgSleep = sleepData.reduce((sum, day) => sum + day.hours, 0) / sleepData.length
  const avgSteps = Math.round(activityData.reduce((sum, day) => sum + day.steps, 0) / activityData.length)
  const totalScreenTime = screenTimeData.reduce((sum, item) => sum + item.hours, 0)

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-700">Average Sleep</CardTitle>
            <Moon className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-800">{avgSleep.toFixed(1)}h</div>
            <div className="flex items-center space-x-2 mt-2">
              {avgSleep >= 7 ? (
                <TrendingUp className="h-3 w-3 text-green-600" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-600" />
              )}
              <p className={`text-xs ${avgSleep >= 7 ? "text-green-600" : "text-red-600"}`}>
                {avgSleep >= 7 ? "Good" : "Below recommended"}
              </p>
            </div>
            <Progress value={(avgSleep / 9) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Daily Steps</CardTitle>
            <Activity className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-800">{avgSteps.toLocaleString()}</div>
            <div className="flex items-center space-x-2 mt-2">
              {avgSteps >= 8000 ? (
                <TrendingUp className="h-3 w-3 text-green-600" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-600" />
              )}
              <p className={`text-xs ${avgSteps >= 8000 ? "text-green-600" : "text-red-600"}`}>
                {avgSteps >= 8000 ? "Active" : "Below target"}
              </p>
            </div>
            <Progress value={(avgSteps / 12000) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">Screen Time</CardTitle>
            <Smartphone className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-800">{totalScreenTime.toFixed(1)}h</div>
            <div className="flex items-center space-x-2 mt-2">
              {totalScreenTime <= 8 ? (
                <TrendingUp className="h-3 w-3 text-green-600" />
              ) : (
                <AlertCircle className="h-3 w-3 text-orange-600" />
              )}
              <p className={`text-xs ${totalScreenTime <= 8 ? "text-green-600" : "text-orange-600"}`}>
                {totalScreenTime <= 8 ? "Balanced" : "High usage"}
              </p>
            </div>
            <Progress value={(totalScreenTime / 12) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-orange-700">Wellness Score</CardTitle>
            <Heart className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-800">74%</div>
            <div className="flex items-center space-x-2 mt-2">
              <TrendingUp className="h-3 w-3 text-green-600" />
              <p className="text-xs text-green-600">+3% this week</p>
            </div>
            <Progress value={74} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Sleep Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Moon className="h-5 w-5 text-purple-600" />
            <span>Sleep Pattern Analysis</span>
          </CardTitle>
          <CardDescription>Track your sleep duration and quality over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-4">Sleep Duration & Quality</h4>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={sleepData}>
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
                  <Line type="monotone" dataKey="hours" stroke="#8B5CF6" strokeWidth={3} name="Hours" />
                  <Line type="monotone" dataKey="quality" stroke="#3B82F6" strokeWidth={2} name="Quality" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Sleep Insights</h4>
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-purple-800">Average Sleep</span>
                    <span className="text-sm text-purple-600">{avgSleep.toFixed(1)} hours</span>
                  </div>
                  <Progress value={(avgSleep / 9) * 100} className="h-2" />
                </div>

                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-blue-800">Sleep Consistency</span>
                    <Badge className="bg-blue-100 text-blue-800">Good</Badge>
                  </div>
                  <p className="text-xs text-blue-600">Regular bedtime pattern detected</p>
                </div>

                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-green-800">Best Sleep Day</span>
                    <span className="text-sm text-green-600">Saturday (9.2h)</span>
                  </div>
                  <p className="text-xs text-green-600">Quality score: 9/10</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Activity Tracking */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="h-5 w-5 text-green-600" />
            <span>Physical Activity</span>
          </CardTitle>
          <CardDescription>Monitor your daily movement and exercise patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={activityData}>
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
              <Bar dataKey="steps" fill="#10B981" radius={[4, 4, 0, 0]} name="Steps" />
            </BarChart>
          </ResponsiveContainer>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="text-lg font-bold text-green-800">{avgSteps.toLocaleString()}</div>
              <div className="text-sm text-green-600">Avg Daily Steps</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-lg font-bold text-blue-800">
                {Math.round(activityData.reduce((sum, day) => sum + day.active, 0) / activityData.length)} min
              </div>
              <div className="text-sm text-blue-600">Avg Active Time</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
              <div className="text-lg font-bold text-orange-800">
                {Math.round(activityData.reduce((sum, day) => sum + day.calories, 0) / activityData.length)}
              </div>
              <div className="text-sm text-orange-600">Avg Calories Burned</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Screen Time Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Smartphone className="h-5 w-5 text-blue-600" />
            <span>Digital Wellness</span>
          </CardTitle>
          <CardDescription>Understanding your screen time and digital habits</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-4">Screen Time Breakdown</h4>
              <div className="space-y-3">
                {screenTimeData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="font-medium">{item.category}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{item.hours}h</div>
                      <div className="text-xs text-gray-500">{Math.round((item.hours / totalScreenTime) * 100)}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Digital Health Tips</h4>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center space-x-2 mb-1">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-800">Screen Time Goal</span>
                  </div>
                  <p className="text-xs text-blue-600">Try to keep total screen time under 8 hours daily</p>
                </div>

                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-2 mb-1">
                    <Target className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-green-800">Productive Usage</span>
                  </div>
                  <p className="text-xs text-green-600">
                    {Math.round(
                      (screenTimeData.find((item) => item.category === "Work/Productivity")?.hours / totalScreenTime) *
                        100,
                    )}
                    % of your screen time is productive
                  </p>
                </div>

                <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="flex items-center space-x-2 mb-1">
                    <AlertCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm font-medium text-orange-800">Social Media</span>
                  </div>
                  <p className="text-xs text-orange-600">
                    Consider reducing social media usage for better mental health
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Habit Tracking */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5 text-indigo-600" />
            <span>Habit Tracking</span>
          </CardTitle>
          <CardDescription>Monitor your progress towards healthy lifestyle goals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {habitData.map((habit, index) => {
              const progress = (habit.current / habit.target) * 100
              return (
                <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-800">{habit.name}</h4>
                    <Badge variant={progress >= 80 ? "default" : progress >= 60 ? "secondary" : "destructive"}>
                      {progress >= 80 ? "On Track" : progress >= 60 ? "Good" : "Needs Work"}
                    </Badge>
                  </div>

                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">
                      {habit.current} / {habit.target} {habit.unit}
                    </span>
                    <span className="text-sm font-medium" style={{ color: habit.color }}>
                      {Math.round(progress)}%
                    </span>
                  </div>

                  <Progress value={progress} className="h-2" />
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
