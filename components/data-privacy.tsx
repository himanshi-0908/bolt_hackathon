"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Shield,
  Lock,
  Users,
  EyeOff,
  Key,
  Database,
  Share2,
  CheckCircle,
  Settings,
  Download,
  Trash2,
} from "lucide-react"

const authorizedUsers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Primary Therapist",
    email: "s.johnson@mentalhealth.com",
    permissions: ["View mood data", "View voice analysis", "View behavioral patterns"],
    lastAccess: "2024-01-15",
    status: "active",
  },
  {
    name: "Mom (Emergency Contact)",
    role: "Family Member",
    email: "mom@family.com",
    permissions: ["View emergency alerts only"],
    lastAccess: "Never",
    status: "pending",
  },
  {
    name: "University Counseling Center",
    role: "Support Service",
    email: "counseling@university.edu",
    permissions: ["View mood trends", "View crisis indicators"],
    lastAccess: "2024-01-12",
    status: "active",
  },
]

const dataCategories = [
  {
    name: "Voice Analysis Data",
    description: "Emotional tone, stress indicators, speech patterns",
    encrypted: true,
    shared: false,
    retention: "90 days",
  },
  {
    name: "Mood Tracking",
    description: "Daily mood entries, emotional patterns, notes",
    encrypted: true,
    shared: true,
    retention: "1 year",
  },
  {
    name: "Behavioral Data",
    description: "Sleep patterns, activity levels, screen time",
    encrypted: true,
    shared: false,
    retention: "6 months",
  },
  {
    name: "Emergency Contacts",
    description: "Trusted contacts and crisis intervention data",
    encrypted: true,
    shared: true,
    retention: "Permanent",
  },
]

export default function DataPrivacy() {
  const [privacySettings, setPrivacySettings] = useState({
    shareWithTherapist: true,
    shareWithFamily: false,
    anonymousAnalytics: true,
    emergencySharing: true,
    dataRetention: true,
  })

  const [walletConnected, setWalletConnected] = useState(false)
  const [blockchainAddress] = useState("0x742d35Cc6634C0532925a3b8D4C9db4C4C4b3f8e")

  const handleSettingChange = (setting, value) => {
    setPrivacySettings((prev) => ({
      ...prev,
      [setting]: value,
    }))
  }

  const connectWallet = () => {
    // Simulate MetaMask connection
    setWalletConnected(true)
  }

  const revokeAccess = (userIndex) => {
    // In a real app, this would revoke blockchain permissions
    console.log(`Revoking access for user ${userIndex}`)
  }

  return (
    <div className="space-y-6">
      {/* Privacy Overview */}
      <Card className="bg-gradient-to-br from-green-50 to-blue-100 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-green-600" />
            <span>Data Privacy & Security</span>
          </CardTitle>
          <CardDescription>
            Your mental health data is protected with end-to-end encryption and blockchain-based access control
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
              <Lock className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-green-800">End-to-End Encrypted</h4>
              <p className="text-sm text-green-600">All data encrypted before storage</p>
            </div>

            <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
              <Key className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-blue-800">Blockchain Secured</h4>
              <p className="text-sm text-blue-600">Access controlled by smart contracts</p>
            </div>

            <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
              <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-semibold text-purple-800">You Control Access</h4>
              <p className="text-sm text-purple-600">Only you decide who sees your data</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Blockchain Wallet Connection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Key className="h-5 w-5 text-blue-600" />
            <span>Blockchain Identity</span>
          </CardTitle>
          <CardDescription>Connect your wallet to enable secure, decentralized access control</CardDescription>
        </CardHeader>
        <CardContent>
          {!walletConnected ? (
            <div className="text-center py-8">
              <div className="mb-4">
                <Key className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Connect Your Wallet</h3>
                <p className="text-gray-600 mb-6">
                  Connect MetaMask or another Web3 wallet to enable blockchain-based access control
                </p>
              </div>
              <Button onClick={connectWallet} className="bg-blue-600 hover:bg-blue-700">
                <Key className="h-4 w-4 mr-2" />
                Connect MetaMask
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <Alert className="border-green-200 bg-green-50">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                  <strong>Wallet Connected Successfully!</strong>
                  <br />
                  Your data access is now secured by blockchain smart contracts.
                </AlertDescription>
              </Alert>

              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-800">Connected Wallet</h4>
                    <p className="text-sm text-gray-600 font-mono">{blockchainAddress}</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Connected</Badge>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Authorized Users */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-purple-600" />
            <span>Authorized Access</span>
          </CardTitle>
          <CardDescription>
            Manage who can access your mental health data through blockchain verification
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {authorizedUsers.map((user, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-800">{user.name}</h4>
                    <p className="text-sm text-gray-600">{user.role}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge
                      className={`${
                        user.status === "active"
                          ? "bg-green-100 text-green-800"
                          : user.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {user.status}
                    </Badge>
                    <Button size="sm" variant="outline" onClick={() => revokeAccess(index)}>
                      <Trash2 className="h-3 w-3 mr-1" />
                      Revoke
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <div>
                    <h5 className="text-sm font-medium text-gray-700">Permissions:</h5>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {user.permissions.map((permission, permIndex) => (
                        <Badge key={permIndex} variant="outline" className="text-xs">
                          {permission}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="text-xs text-gray-500">Last access: {user.lastAccess}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Button variant="outline">
              <Users className="h-4 w-4 mr-2" />
              Add New Authorized User
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Privacy Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="h-5 w-5 text-gray-600" />
            <span>Privacy Settings</span>
          </CardTitle>
          <CardDescription>Control how your data is shared and used</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-800">Share with Therapist</h4>
                <p className="text-sm text-gray-600">Allow your therapist to view mood and behavioral data</p>
              </div>
              <Switch
                checked={privacySettings.shareWithTherapist}
                onCheckedChange={(value) => handleSettingChange("shareWithTherapist", value)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-800">Family Emergency Access</h4>
                <p className="text-sm text-gray-600">Allow family members to access data during emergencies</p>
              </div>
              <Switch
                checked={privacySettings.shareWithFamily}
                onCheckedChange={(value) => handleSettingChange("shareWithFamily", value)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-800">Anonymous Analytics</h4>
                <p className="text-sm text-gray-600">Help improve MindGuard with anonymized usage data</p>
              </div>
              <Switch
                checked={privacySettings.anonymousAnalytics}
                onCheckedChange={(value) => handleSettingChange("anonymousAnalytics", value)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-800">Emergency Data Sharing</h4>
                <p className="text-sm text-gray-600">Automatically share crisis indicators with emergency contacts</p>
              </div>
              <Switch
                checked={privacySettings.emergencySharing}
                onCheckedChange={(value) => handleSettingChange("emergencySharing", value)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-800">Extended Data Retention</h4>
                <p className="text-sm text-gray-600">Keep historical data longer for better trend analysis</p>
              </div>
              <Switch
                checked={privacySettings.dataRetention}
                onCheckedChange={(value) => handleSettingChange("dataRetention", value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Database className="h-5 w-5 text-indigo-600" />
            <span>Data Categories</span>
          </CardTitle>
          <CardDescription>Overview of data types collected and their security status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {dataCategories.map((category, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-800">{category.name}</h4>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </div>
                  <div className="flex space-x-2">
                    {category.encrypted && (
                      <Badge className="bg-green-100 text-green-800">
                        <Lock className="h-3 w-3 mr-1" />
                        Encrypted
                      </Badge>
                    )}
                    {category.shared ? (
                      <Badge className="bg-blue-100 text-blue-800">
                        <Share2 className="h-3 w-3 mr-1" />
                        Shared
                      </Badge>
                    ) : (
                      <Badge className="bg-gray-100 text-gray-800">
                        <EyeOff className="h-3 w-3 mr-1" />
                        Private
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="text-xs text-gray-500">Retention period: {category.retention}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Data Export & Deletion */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Download className="h-5 w-5 text-blue-600" />
            <span>Data Rights</span>
          </CardTitle>
          <CardDescription>Export or delete your personal data</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Export Your Data</h4>
              <p className="text-sm text-blue-600 mb-4">
                Download a complete copy of all your mental health data in a portable format
              </p>
              <Button variant="outline" className="w-full bg-transparent">
                <Download className="h-4 w-4 mr-2" />
                Request Data Export
              </Button>
            </div>

            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-800 mb-2">Delete Your Data</h4>
              <p className="text-sm text-red-600 mb-4">
                Permanently delete all your data from MindGuard. This action cannot be undone.
              </p>
              <Button variant="outline" className="w-full border-red-300 text-red-700 hover:bg-red-100 bg-transparent">
                <Trash2 className="h-4 w-4 mr-2" />
                Request Data Deletion
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security Notice */}
      <Alert className="border-blue-200 bg-blue-50">
        <Shield className="h-4 w-4 text-blue-600" />
        <AlertDescription className="text-blue-800">
          <strong>Your Privacy is Our Priority</strong>
          <br />
          MindGuard uses advanced encryption and blockchain technology to ensure your mental health data remains private
          and secure. You maintain complete control over who can access your information.
        </AlertDescription>
      </Alert>
    </div>
  )
}
