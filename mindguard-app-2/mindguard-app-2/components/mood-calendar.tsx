"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Heart,
  Smile,
  Meh,
  Frown,
  Angry,
  TrendingUp,
  BarChart3,
} from "lucide-react"

const moodColors = {
  1: "bg-red-500",
  2: "bg-orange-500",
  3: "bg-yellow-500",
  4: "bg-green-500",
  5: "bg-pink-500",
}

const moodIcons = {
  1: Angry,
  2: Frown,
  3: Meh,
  4: Smile,
  5: Heart,
}

const moodLabels = {
  1: "Angry",
  2: "Sad",
  3: "Neutral",
  4: "Happy",
  5: "Joyful",
}

// Mock data for the calendar
const moodData = {
  "2024-01-01": { mood: 4, energy: 3, stress: 2, note: "New Year, new beginnings!" },
  "2024-01-02": { mood: 3, energy: 2, stress: 3, note: "Back to work blues" },
  "2024-01-03": { mood: 5, energy: 4, stress: 1, note: "Great day with friends" },
  "2024-01-04": { mood: 2, energy: 2, stress: 5, note: "Stressful day at work" },
  "2024-01-05": { mood: 4, energy: 3, stress: 2, note: "Feeling better" },
  "2024-01-08": { mood: 3, energy: 3, stress: 3, note: "Average Monday" },
  "2024-01-09": { mood: 4, energy: 4, stress: 2, note: "Productive day" },
  "2024-01-10": { mood: 5, energy: 5, stress: 1, note: "Amazing workout session" },
  "2024-01-11": { mood: 3, energy: 2, stress: 4, note: "Feeling overwhelmed" },
  "2024-01-12": { mood: 4, energy: 3, stress: 2, note: "Good progress on projects" },
  "2024-01-15": { mood: 5, energy: 4, stress: 1, note: "Weekend relaxation" },
  "2024-01-16": { mood: 4, energy: 3, stress: 2, note: "Peaceful Sunday" },
}

export default function MoodCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 0, 1)) // January 2024
  const [selectedDate, setSelectedDate] = useState(null)

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const formatDateKey = (year, month, day) => {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
  }

  const navigateMonth = (direction) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      newDate.setMonth(prev.getMonth() + direction)
      return newDate
    })
    setSelectedDate(null)
  }

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate)
    const firstDay = getFirstDayOfMonth(currentDate)
    const days = []

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-12"></div>)
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateKey = formatDateKey(currentDate.getFullYear(), currentDate.getMonth(), day)
      const dayData = moodData[dateKey]
      const isSelected = selectedDate === dateKey
      const MoodIcon = dayData ? moodIcons[dayData.mood] : null

      days.push(
        <button
          key={day}
          onClick={() => setSelectedDate(dateKey)}
          className={`h-12 w-full rounded-lg border-2 transition-all duration-200 relative ${
            isSelected
              ? "border-blue-500 bg-blue-50 scale-105"
              : dayData
                ? "border-gray-200 hover:border-gray-300 hover:scale-105"
                : "border-gray-100 hover:border-gray-200"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <span className={`text-sm font-medium ${isSelected ? "text-blue-700" : "text-gray-700"}`}>{day}</span>
            {dayData && MoodIcon && <div className={`w-2 h-2 rounded-full mt-1 ${moodColors[dayData.mood]}`} />}
          </div>
        </button>,
      )
    }

    return days
  }

  const selectedDayData = selectedDate ? moodData[selectedDate] : null
  const SelectedMoodIcon = selectedDayData ? moodIcons[selectedDayData.mood] : null

  // Calculate monthly statistics
  const monthlyEntries = Object.entries(moodData).filter(([date]) => {
    const entryDate = new Date(date)
    return entryDate.getMonth() === currentDate.getMonth() && entryDate.getFullYear() === currentDate.getFullYear()
  })

  const avgMood =
    monthlyEntries.length > 0
      ? (monthlyEntries.reduce((sum, [, data]) => sum + data.mood, 0) / monthlyEntries.length).toFixed(1)
      : 0

  const avgStress =
    monthlyEntries.length > 0
      ? (monthlyEntries.reduce((sum, [, data]) => sum + data.stress, 0) / monthlyEntries.length).toFixed(1)
      : 0

  return (
    <div className="space-y-6">
      {/* Calendar Header */}
      <Card className="bg-gradient-to-br from-purple-50 to-pink-100 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CalendarIcon className="h-5 w-5 text-purple-600" />
            <span>Mood Calendar</span>
          </CardTitle>
          <CardDescription>
            Visualize your emotional patterns and track your mental wellness journey over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-6">
            <Button variant="outline" size="sm" onClick={() => navigateMonth(-1)}>
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <h3 className="text-xl font-semibold text-gray-800">
              {currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </h3>

            <Button variant="outline" size="sm" onClick={() => navigateMonth(1)}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Calendar Grid */}
          <div className="space-y-4">
            {/* Day Headers */}
            <div className="grid grid-cols-7 gap-2 mb-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-2">{renderCalendar()}</div>
          </div>

          {/* Legend */}
          <div className="mt-6 p-4 bg-white/60 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-800 mb-3">Mood Legend</h4>
            <div className="flex flex-wrap gap-3">
              {Object.entries(moodLabels).map(([value, label]) => {
                const IconComponent = moodIcons[value]
                return (
                  <div key={value} className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${moodColors[value]}`} />
                    <span className="text-sm text-gray-600">{label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Selected Day Details */}
      {selectedDayData && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-pink-600" />
              <span>
                {new Date(selectedDate).toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="text-center p-4 bg-pink-50 rounded-lg border border-pink-200">
                <div className="flex items-center justify-center mb-2">
                  {SelectedMoodIcon && <SelectedMoodIcon className="h-6 w-6 text-pink-600" />}
                </div>
                <div className="text-lg font-bold text-pink-800">{moodLabels[selectedDayData.mood]}</div>
                <div className="text-sm text-pink-600">Mood</div>
              </div>

              <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-lg font-bold text-blue-800">{selectedDayData.energy}/5</div>
                <div className="text-sm text-blue-600">Energy Level</div>
              </div>

              <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="text-lg font-bold text-orange-800">{selectedDayData.stress}/10</div>
                <div className="text-sm text-orange-600">Stress Level</div>
              </div>
            </div>

            {selectedDayData.note && (
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2">Notes</h4>
                <p className="text-gray-700 italic">"{selectedDayData.note}"</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Monthly Statistics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-5 w-5 text-blue-600" />
            <span>Monthly Overview</span>
          </CardTitle>
          <CardDescription>
            {currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })} statistics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="text-2xl font-bold text-green-800">{monthlyEntries.length}</div>
              <div className="text-sm text-green-600">Days Tracked</div>
            </div>

            <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-2xl font-bold text-blue-800">{avgMood}/5</div>
              <div className="text-sm text-blue-600">Average Mood</div>
            </div>

            <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="text-2xl font-bold text-purple-800">{avgStress}/10</div>
              <div className="text-sm text-purple-600">Average Stress</div>
            </div>

            <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
              <div className="text-2xl font-bold text-orange-800">
                {monthlyEntries.length > 0
                  ? Math.round((monthlyEntries.length / getDaysInMonth(currentDate)) * 100)
                  : 0}
                %
              </div>
              <div className="text-sm text-orange-600">Completion Rate</div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <h4 className="font-semibold text-blue-800">Monthly Insights</h4>
            </div>
            <p className="text-blue-700 text-sm">
              {monthlyEntries.length > 15
                ? "Great consistency! You're building a strong habit of mood tracking."
                : monthlyEntries.length > 10
                  ? "Good progress! Try to track your mood more regularly for better insights."
                  : "Consider tracking your mood daily to identify patterns and improve your mental wellness."}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
