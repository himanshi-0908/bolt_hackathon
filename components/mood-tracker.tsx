"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Heart, Smile, Meh, Frown, Angry, Zap, Moon, Sun, Cloud, Save, TrendingUp } from "lucide-react"

const moodEmojis = [
  { icon: Angry, label: "Angry", value: 1, color: "text-red-500", bg: "bg-red-50 border-red-200" },
  { icon: Frown, label: "Sad", value: 2, color: "text-orange-500", bg: "bg-orange-50 border-orange-200" },
  { icon: Meh, label: "Neutral", value: 3, color: "text-yellow-500", bg: "bg-yellow-50 border-yellow-200" },
  { icon: Smile, label: "Happy", value: 4, color: "text-green-500", bg: "bg-green-50 border-green-200" },
  { icon: Heart, label: "Joyful", value: 5, color: "text-pink-500", bg: "bg-pink-50 border-pink-200" },
]

const energyLevels = [
  { icon: Moon, label: "Very Low", value: 1, color: "text-gray-500" },
  { icon: Cloud, label: "Low", value: 2, color: "text-blue-400" },
  { icon: Sun, label: "Moderate", value: 3, color: "text-yellow-500" },
  { icon: Zap, label: "High", value: 4, color: "text-orange-500" },
  { icon: Zap, label: "Very High", value: 5, color: "text-red-500" },
]

const recentEntries = [
  { date: "2024-01-15", mood: 4, energy: 3, stress: 2, note: "Had a great day at work, feeling accomplished!" },
  { date: "2024-01-14", mood: 3, energy: 2, stress: 4, note: "Feeling a bit overwhelmed with deadlines." },
  { date: "2024-01-13", mood: 5, energy: 4, stress: 1, note: "Weekend relaxation was exactly what I needed." },
  { date: "2024-01-12", mood: 2, energy: 2, stress: 5, note: "Difficult day, lots of challenges at work." },
]

export default function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState(null)
  const [selectedEnergy, setSelectedEnergy] = useState(null)
  const [stressLevel, setStressLevel] = useState([3])
  const [anxietyLevel, setAnxietyLevel] = useState([3])
  const [note, setNote] = useState("")
  const [savedEntry, setSavedEntry] = useState(false)

  const handleSaveEntry = () => {
    if (selectedMood && selectedEnergy) {
      setSavedEntry(true)
      setTimeout(() => setSavedEntry(false), 3000)
      // Reset form
      setSelectedMood(null)
      setSelectedEnergy(null)
      setStressLevel([3])
      setAnxietyLevel([3])
      setNote("")
    }
  }

  return (
    <div className="space-y-6">
      {/* Current Mood Entry */}
      <Card className="bg-gradient-to-br from-pink-50 to-purple-100 border-pink-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Heart className="h-5 w-5 text-pink-600" />
            <span>How are you feeling today?</span>
          </CardTitle>
          <CardDescription>
            Track your emotional state to better understand your mental wellness patterns
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Mood Selection */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-800">Overall Mood</h4>
            <div className="grid grid-cols-5 gap-3">
              {moodEmojis.map((mood) => {
                const IconComponent = mood.icon
                return (
                  <button
                    key={mood.value}
                    onClick={() => setSelectedMood(mood.value)}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                      selectedMood === mood.value
                        ? `${mood.bg} border-current scale-105 shadow-md`
                        : "bg-white border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <IconComponent
                      className={`h-8 w-8 mx-auto mb-2 ${selectedMood === mood.value ? mood.color : "text-gray-400"}`}
                    />
                    <p
                      className={`text-xs font-medium ${
                        selectedMood === mood.value ? "text-gray-800" : "text-gray-500"
                      }`}
                    >
                      {mood.label}
                    </p>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Energy Level */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-800">Energy Level</h4>
            <div className="grid grid-cols-5 gap-3">
              {energyLevels.map((energy) => {
                const IconComponent = energy.icon
                return (
                  <button
                    key={energy.value}
                    onClick={() => setSelectedEnergy(energy.value)}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                      selectedEnergy === energy.value
                        ? "bg-blue-50 border-blue-300 scale-105 shadow-md"
                        : "bg-white border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <IconComponent
                      className={`h-6 w-6 mx-auto mb-1 ${
                        selectedEnergy === energy.value ? energy.color : "text-gray-400"
                      }`}
                    />
                    <p
                      className={`text-xs font-medium ${
                        selectedEnergy === energy.value ? "text-gray-800" : "text-gray-500"
                      }`}
                    >
                      {energy.label}
                    </p>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Stress and Anxiety Sliders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-gray-800">Stress Level</h4>
                <Badge variant="outline">{stressLevel[0]}/10</Badge>
              </div>
              <Slider value={stressLevel} onValueChange={setStressLevel} max={10} min={1} step={1} className="w-full" />
              <div className="flex justify-between text-xs text-gray-500">
                <span>Very Low</span>
                <span>Very High</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-gray-800">Anxiety Level</h4>
                <Badge variant="outline">{anxietyLevel[0]}/10</Badge>
              </div>
              <Slider
                value={anxietyLevel}
                onValueChange={setAnxietyLevel}
                max={10}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>Very Low</span>
                <span>Very High</span>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-800">Additional Notes (Optional)</h4>
            <Textarea
              placeholder="What's on your mind? Share any thoughts, experiences, or factors affecting your mood today..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="min-h-[100px] resize-none"
            />
          </div>

          {/* Save Button */}
          <div className="flex justify-center">
            <Button
              onClick={handleSaveEntry}
              disabled={!selectedMood || !selectedEnergy}
              className="px-8 py-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
            >
              <Save className="h-4 w-4 mr-2" />
              {savedEntry ? "Entry Saved!" : "Save Mood Entry"}
            </Button>
          </div>

          {savedEntry && (
            <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-medium">✓ Your mood entry has been saved successfully!</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Recent Entries */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            <span>Recent Mood Entries</span>
          </CardTitle>
          <CardDescription>Your mood tracking history</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentEntries.map((entry, index) => {
              const moodEmoji = moodEmojis.find((m) => m.value === entry.mood)
              const energyIcon = energyLevels.find((e) => e.value === entry.energy)
              const MoodIcon = moodEmoji?.icon
              const EnergyIcon = energyIcon?.icon

              return (
                <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-4">
                      <div className="text-sm font-medium text-gray-600">
                        {new Date(entry.date).toLocaleDateString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center space-x-2">
                        {MoodIcon && <MoodIcon className={`h-5 w-5 ${moodEmoji.color}`} />}
                        <span className="text-sm font-medium">{moodEmoji?.label}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {EnergyIcon && <EnergyIcon className={`h-4 w-4 ${energyIcon.color}`} />}
                        <span className="text-sm text-gray-600">Energy: {entry.energy}/5</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Stress: {entry.stress}/10
                    </Badge>
                  </div>
                  {entry.note && <p className="text-sm text-gray-700 italic">"{entry.note}"</p>}
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Mood Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Mood Insights</CardTitle>
          <CardDescription>Patterns and trends in your emotional wellness</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Most Common Mood</h4>
              <div className="flex items-center space-x-2">
                <Smile className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">Happy (40%)</span>
              </div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">Average Energy</h4>
              <div className="flex items-center space-x-2">
                <Sun className="h-5 w-5 text-yellow-500" />
                <span className="text-sm font-medium">3.2/5 (Moderate)</span>
              </div>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-2">Stress Trend</h4>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">Improving</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
