"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  MessageCircle,
  Heart,
  Shield,
  Users,
  Clock,
  MapPin,
  AlertTriangle,
  Headphones,
  Video,
  Mail,
  ExternalLink,
} from "lucide-react"

const emergencyContacts = [
  {
    name: "National Suicide Prevention Lifeline",
    number: "988",
    description: "24/7 crisis support for suicidal thoughts",
    type: "crisis",
    availability: "24/7",
  },
  {
    name: "Crisis Text Line",
    number: "Text HOME to 741741",
    description: "Free, 24/7 crisis support via text",
    type: "text",
    availability: "24/7",
  },
  {
    name: "SAMHSA National Helpline",
    number: "1-800-662-4357",
    description: "Treatment referral and information service",
    type: "support",
    availability: "24/7",
  },
  {
    name: "National Domestic Violence Hotline",
    number: "1-800-799-7233",
    description: "Support for domestic violence situations",
    type: "crisis",
    availability: "24/7",
  },
]

const localResources = [
  {
    name: "Community Mental Health Center",
    address: "123 Wellness Ave, Your City",
    phone: "(555) 123-4567",
    services: ["Counseling", "Group Therapy", "Crisis Intervention"],
    hours: "Mon-Fri 8AM-6PM",
  },
  {
    name: "University Counseling Services",
    address: "456 Campus Dr, Your City",
    phone: "(555) 987-6543",
    services: ["Student Counseling", "Peer Support", "Workshops"],
    hours: "Mon-Fri 9AM-5PM",
  },
  {
    name: "Emergency Room - General Hospital",
    address: "789 Medical Blvd, Your City",
    phone: "(555) 911-0000",
    services: ["24/7 Emergency Care", "Psychiatric Emergency"],
    hours: "24/7",
  },
]

const trustedContacts = [
  { name: "Mom", phone: "(555) 123-0001", relationship: "Family", available: true },
  { name: "Dr. Sarah Johnson", phone: "(555) 456-0002", relationship: "Therapist", available: false },
  { name: "Best Friend Alex", phone: "(555) 789-0003", relationship: "Friend", available: true },
  { name: "Brother Mike", phone: "(555) 321-0004", relationship: "Family", available: true },
]

const copingStrategies = [
  {
    title: "Deep Breathing Exercise",
    description: "4-7-8 breathing technique to reduce anxiety",
    duration: "5 minutes",
    icon: Heart,
  },
  {
    title: "Grounding Technique",
    description: "5-4-3-2-1 sensory grounding method",
    duration: "3 minutes",
    icon: Shield,
  },
  {
    title: "Progressive Muscle Relaxation",
    description: "Systematic tension and release of muscle groups",
    duration: "10 minutes",
    icon: Users,
  },
  {
    title: "Mindful Meditation",
    description: "Guided meditation for emotional regulation",
    duration: "15 minutes",
    icon: Heart,
  },
]

export default function EmergencySupport() {
  const [activeStrategy, setActiveStrategy] = useState(null)
  const [emergencyMode, setEmergencyMode] = useState(false)

  const handleEmergencyCall = (number) => {
    // In a real app, this would initiate a call
    window.open(`tel:${number}`, "_self")
  }

  const handleEmergencyText = () => {
    // In a real app, this would open the messaging app
    window.open("sms:741741?body=HOME", "_self")
  }

  return (
    <div className="space-y-6">
      {/* Emergency Alert */}
      <Alert className="border-red-200 bg-red-50">
        <AlertTriangle className="h-4 w-4 text-red-600" />
        <AlertDescription className="text-red-800">
          <strong>If you're having thoughts of self-harm or suicide, please reach out for help immediately.</strong>
          <br />
          Call 988 (Suicide & Crisis Lifeline) or text HOME to 741741 for immediate support.
        </AlertDescription>
      </Alert>

      {/* Quick Emergency Actions */}
      <Card className="bg-gradient-to-br from-red-50 to-pink-100 border-red-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-red-800">
            <Phone className="h-5 w-5" />
            <span>Emergency Support</span>
          </CardTitle>
          <CardDescription className="text-red-700">
            Immediate help is available 24/7. You are not alone.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              size="lg"
              className="h-16 bg-red-600 hover:bg-red-700 text-white"
              onClick={() => handleEmergencyCall("988")}
            >
              <Phone className="h-6 w-6 mr-3" />
              <div className="text-left">
                <div className="font-bold">Call 988</div>
                <div className="text-sm opacity-90">Suicide & Crisis Lifeline</div>
              </div>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-16 border-red-300 text-red-700 hover:bg-red-50 bg-transparent"
              onClick={handleEmergencyText}
            >
              <MessageCircle className="h-6 w-6 mr-3" />
              <div className="text-left">
                <div className="font-bold">Text HOME to 741741</div>
                <div className="text-sm opacity-75">Crisis Text Line</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Crisis Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-blue-600" />
            <span>Crisis Resources</span>
          </CardTitle>
          <CardDescription>Professional crisis support services available 24/7</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-800">{contact.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{contact.description}</p>
                  </div>
                  <Badge
                    className={`${
                      contact.type === "crisis"
                        ? "bg-red-100 text-red-800"
                        : contact.type === "text"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-green-100 text-green-800"
                    }`}
                  >
                    {contact.availability}
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {contact.type === "text" ? (
                      <MessageCircle className="h-4 w-4 text-blue-600" />
                    ) : (
                      <Phone className="h-4 w-4 text-green-600" />
                    )}
                    <span className="font-mono text-sm">{contact.number}</span>
                  </div>

                  <Button
                    size="sm"
                    onClick={() =>
                      contact.type === "text" ? handleEmergencyText() : handleEmergencyCall(contact.number)
                    }
                  >
                    {contact.type === "text" ? "Text Now" : "Call Now"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Local Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-green-600" />
            <span>Local Mental Health Resources</span>
          </CardTitle>
          <CardDescription>Professional mental health services in your area</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {localResources.map((resource, index) => (
              <div key={index} className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-green-800">{resource.name}</h4>
                    <p className="text-sm text-green-600 mb-1">{resource.address}</p>
                    <p className="text-sm text-green-600">{resource.phone}</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">{resource.hours}</Badge>
                </div>

                <div className="flex flex-wrap gap-2">
                  {resource.services.map((service, serviceIndex) => (
                    <Badge key={serviceIndex} variant="outline" className="text-xs">
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Trusted Contacts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-purple-600" />
            <span>Your Support Network</span>
          </CardTitle>
          <CardDescription>Reach out to people who care about you</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trustedContacts.map((contact, index) => (
              <div key={index} className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h4 className="font-semibold text-purple-800">{contact.name}</h4>
                    <p className="text-sm text-purple-600">{contact.relationship}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${contact.available ? "bg-green-500" : "bg-gray-400"}`} />
                    <span className="text-xs text-gray-600">{contact.available ? "Available" : "Busy"}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" onClick={() => handleEmergencyCall(contact.phone)}>
                    <Phone className="h-3 w-3 mr-1" />
                    Call
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => window.open(`sms:${contact.phone}`, "_self")}>
                    <MessageCircle className="h-3 w-3 mr-1" />
                    Text
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Immediate Coping Strategies */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Heart className="h-5 w-5 text-pink-600" />
            <span>Immediate Coping Strategies</span>
          </CardTitle>
          <CardDescription>Quick techniques to help manage difficult emotions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {copingStrategies.map((strategy, index) => {
              const IconComponent = strategy.icon
              return (
                <div key={index} className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-start space-x-3 mb-3">
                    <IconComponent className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-blue-800">{strategy.title}</h4>
                      <p className="text-sm text-blue-600 mb-2">{strategy.description}</p>
                      <Badge className="bg-blue-100 text-blue-800 text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        {strategy.duration}
                      </Badge>
                    </div>
                  </div>

                  <Button size="sm" className="w-full" onClick={() => setActiveStrategy(index)}>
                    Start Exercise
                  </Button>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Online Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <ExternalLink className="h-5 w-5 text-indigo-600" />
            <span>Online Mental Health Resources</span>
          </CardTitle>
          <CardDescription>Additional support and information available online</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
              <div className="flex items-center space-x-2 mb-2">
                <Video className="h-4 w-4 text-indigo-600" />
                <h4 className="font-semibold text-indigo-800">BetterHelp</h4>
              </div>
              <p className="text-sm text-indigo-600 mb-3">Online therapy and counseling services</p>
              <Button size="sm" variant="outline" className="w-full bg-transparent">
                Visit Website
              </Button>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center space-x-2 mb-2">
                <Headphones className="h-4 w-4 text-green-600" />
                <h4 className="font-semibold text-green-800">Headspace</h4>
              </div>
              <p className="text-sm text-green-600 mb-3">Meditation and mindfulness app</p>
              <Button size="sm" variant="outline" className="w-full bg-transparent">
                Download App
              </Button>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-center space-x-2 mb-2">
                <Mail className="h-4 w-4 text-purple-600" />
                <h4 className="font-semibold text-purple-800">7 Cups</h4>
              </div>
              <p className="text-sm text-purple-600 mb-3">Free emotional support and counseling</p>
              <Button size="sm" variant="outline" className="w-full bg-transparent">
                Get Support
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
