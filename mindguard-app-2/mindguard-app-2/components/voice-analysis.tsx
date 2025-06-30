"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mic, Square, Brain, Heart, TrendingUp, Volume2 } from "lucide-react"

export default function VoiceAnalysis() {
  const [isRecording, setIsRecording] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [audioLevel, setAudioLevel] = useState(0)
  const [analysisResults, setAnalysisResults] = useState(null)
  const intervalRef = useRef(null)

  // Simulated voice analysis results
  const mockAnalysis = {
    emotion: "Calm",
    confidence: 87,
    stressLevel: 2.3,
    energyLevel: 7.2,
    speechRate: "Normal",
    toneVariation: "Stable",
    recommendations: [
      "Your voice indicates a calm and stable emotional state",
      "Consider maintaining current stress management practices",
      "Your speech patterns suggest good mental clarity",
    ],
    metrics: {
      pitch: 65,
      volume: 72,
      clarity: 89,
      pace: 78,
    },
  }

  useEffect(() => {
    if (isRecording) {
      intervalRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1)
        // Simulate audio level fluctuation
        setAudioLevel(Math.random() * 100)
      }, 100)
    } else {
      clearInterval(intervalRef.current)
    }

    return () => clearInterval(intervalRef.current)
  }, [isRecording])

  const startRecording = () => {
    setIsRecording(true)
    setRecordingTime(0)
    setAnalysisResults(null)
  }

  const stopRecording = () => {
    setIsRecording(false)
    setIsAnalyzing(true)

    // Simulate analysis delay
    setTimeout(() => {
      setIsAnalyzing(false)
      setAnalysisResults(mockAnalysis)
    }, 3000)
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="space-y-6">
      {/* Recording Interface */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="h-5 w-5 text-blue-600" />
            <span>AI Voice Analysis</span>
          </CardTitle>
          <CardDescription>
            Record your voice to analyze emotional state, stress levels, and mental wellness indicators
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Recording Controls */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <div
                className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isRecording
                    ? "bg-red-500 shadow-lg shadow-red-200 animate-pulse"
                    : "bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-200"
                }`}
              >
                <Button
                  size="lg"
                  variant="ghost"
                  className="w-full h-full rounded-full text-white hover:bg-transparent"
                  onClick={isRecording ? stopRecording : startRecording}
                  disabled={isAnalyzing}
                >
                  {isRecording ? <Square className="h-8 w-8" /> : <Mic className="h-8 w-8" />}
                </Button>
              </div>

              {/* Audio Level Visualization */}
              {isRecording && <div className="absolute -inset-4 rounded-full border-4 border-red-300 animate-ping" />}
            </div>

            <div className="text-center">
              <p className="text-lg font-semibold">
                {isRecording ? "Recording..." : isAnalyzing ? "Analyzing..." : "Tap to Start Recording"}
              </p>
              {isRecording && (
                <p className="text-sm text-gray-600 mt-1">Duration: {formatTime(Math.floor(recordingTime / 10))}</p>
              )}
            </div>

            {/* Audio Level Meter */}
            {isRecording && (
              <div className="w-full max-w-md space-y-2">
                <div className="flex items-center space-x-2">
                  <Volume2 className="h-4 w-4 text-gray-600" />
                  <Progress value={audioLevel} className="flex-1" />
                </div>
                <p className="text-xs text-center text-gray-500">Audio Level</p>
              </div>
            )}
          </div>

          {/* Analysis Progress */}
          {isAnalyzing && (
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <Brain className="h-5 w-5 text-blue-600 animate-pulse" />
                <span className="text-sm font-medium">AI is analyzing your voice...</span>
              </div>
              <Progress value={66} className="w-full" />
              <p className="text-xs text-center text-gray-500">
                Processing emotional indicators, stress patterns, and speech characteristics
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Analysis Results */}
      {analysisResults && (
        <div className="space-y-4">
          {/* Overall Results */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-pink-600" />
                <span>Analysis Results</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-2xl font-bold text-green-800">{analysisResults.emotion}</div>
                  <div className="text-sm text-green-600">Primary Emotion</div>
                  <Badge className="mt-2 bg-green-100 text-green-800">{analysisResults.confidence}% confidence</Badge>
                </div>

                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-2xl font-bold text-blue-800">{analysisResults.stressLevel}/10</div>
                  <div className="text-sm text-blue-600">Stress Level</div>
                  <Badge className="mt-2 bg-blue-100 text-blue-800">Low</Badge>
                </div>

                <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-2xl font-bold text-purple-800">{analysisResults.energyLevel}/10</div>
                  <div className="text-sm text-purple-600">Energy Level</div>
                  <Badge className="mt-2 bg-purple-100 text-purple-800">Good</Badge>
                </div>
              </div>

              {/* Voice Metrics */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800">Voice Characteristics</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Pitch</span>
                      <span>{analysisResults.metrics.pitch}%</span>
                    </div>
                    <Progress value={analysisResults.metrics.pitch} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Volume</span>
                      <span>{analysisResults.metrics.volume}%</span>
                    </div>
                    <Progress value={analysisResults.metrics.volume} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Clarity</span>
                      <span>{analysisResults.metrics.clarity}%</span>
                    </div>
                    <Progress value={analysisResults.metrics.clarity} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Pace</span>
                      <span>{analysisResults.metrics.pace}%</span>
                    </div>
                    <Progress value={analysisResults.metrics.pace} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <span>AI Recommendations</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {analysisResults.recommendations.map((rec, index) => (
                  <Alert key={index} className="border-green-200 bg-green-50">
                    <AlertDescription className="text-green-800">{rec}</AlertDescription>
                  </Alert>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Instructions */}
      <Card>
        <CardHeader>
          <CardTitle>How Voice Analysis Works</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">What We Analyze</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Emotional tone and sentiment</li>
                <li>• Speech rate and rhythm patterns</li>
                <li>• Voice pitch and volume variations</li>
                <li>• Stress indicators in speech</li>
                <li>• Energy levels and engagement</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Tips for Best Results</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Speak naturally for 30-60 seconds</li>
                <li>• Find a quiet environment</li>
                <li>• Share how you're feeling today</li>
                <li>• Describe recent experiences</li>
                <li>• Be authentic and honest</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
