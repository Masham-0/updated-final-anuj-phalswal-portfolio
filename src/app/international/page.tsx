import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Globe, MapPin, Users, Briefcase, GraduationCap, Trophy, MessageSquare } from 'lucide-react'
import Image from 'next/image'

const representations = [
  {
    title: "India–Russia Youth Forums",
    icon: Globe,
    role: "Delegate",
    description: "Active participation in India-Russia youth cooperation initiatives, fostering bilateral relationships and cultural exchange between young leaders of both nations.",
    focus: ["Youth entrepreneurship", "Cross-cultural dialogue", "Bilateral cooperation"]
  },
  {
    title: "International Business Week, Ufa (Russia)",
    icon: Briefcase,
    role: "Speaker",
    description: "Delivered insights on youth leadership and international collaboration at prestigious business forums in Russia, connecting young professionals across borders.",
    focus: ["Business cooperation", "Trade partnerships", "Professional networking"]
  },
  {
    title: "Russia–India Youth Dialogue",
    icon: MessageSquare,
    role: "Participant",
    description: "Engaged in strategic dialogues addressing youth challenges and opportunities in both nations, contributing to policy discussions and collaborative frameworks.",
    focus: ["Policy dialogue", "Youth perspectives", "Strategic partnership"]
  },
  {
    title: "World Youth Festival",
    icon: Trophy,
    role: "Delegate",
    description: "Represented Indian youth on global platforms, sharing experiences and insights about youth empowerment, sustainable development, and international cooperation.",
    focus: ["Global youth issues", "SDG advocacy", "Cross-border collaboration"]
  },
  {
    title: "Indo Russia Uzbekistan Belt Wrestling Championship",
    icon: Users,
    role: "Contributor",
    description: "Promoted sports diplomacy and cultural exchange through international sports events, fostering people-to-people connections across nations.",
    focus: ["Sports diplomacy", "Cultural exchange", "Youth engagement"]
  }
]

const focusAreas = [
  {
    icon: Briefcase,
    title: "Youth Entrepreneurship",
    description: "Empowering young entrepreneurs through cross-border collaboration and knowledge exchange"
  },
  {
    icon: Globe,
    title: "Business & Trade Cooperation",
    description: "Facilitating international trade partnerships and business networking opportunities"
  },
  {
    icon: Trophy,
    title: "Critical Minerals & Industry",
    description: "Promoting collaboration in critical minerals and industrial development"
  },
  {
    icon: GraduationCap,
    title: "Education Exchange",
    description: "Supporting student exchange programs and educational partnerships"
  },
  {
    icon: MessageSquare,
    title: "Multipolar World Dialogue",
    description: "Contributing to discussions on multipolarity and youth cooperation in global affairs"
  },
  {
    icon: Users,
    title: "Sports & Cultural Exchange",
    description: "Fostering people-to-people connections through sports and cultural programs"
  }
]

export default function InternationalPage() {
  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">International Representation</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building bridges across borders and representing Indian youth on global platforms
          </p>
        </div>

        {/* Overview Banner */}
        <div className="max-w-5xl mx-auto mb-12">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Globe className="h-6 w-6 text-primary" />
                Global Representation & Diplomacy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg leading-relaxed">
                As an active international youth representative, I contribute to India-Russia youth cooperation, 
                representing Indian youth at global forums, dialogues, and business delegations. My work focuses 
                on bridging industry, youth, policy, and sustainable development, aligning with the UN Sustainable 
                Development Goals (SDGs).
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Representations Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Key Engagements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {representations.map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <Badge variant="secondary">{item.role}</Badge>
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <div>
                      <p className="text-xs font-semibold mb-2 text-muted-foreground">Key Focus:</p>
                      <div className="flex flex-wrap gap-1">
                        {item.focus.map((focus, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {focus}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">International Moments</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src="/upload/Pasted image.png"
                alt="International Event"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src="/upload/Pasted image (2).png"
                alt="Global Representation"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src="/upload/GSR_7862.JPG"
                alt="Youth Forum"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src="/upload/Copy of IMG-20251217-WA0168.jpg"
                alt="International Award"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Focus Areas */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Strategic Focus Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {focusAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-2">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{area.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-center">Global Impact Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <MapPin className="h-8 w-8 mx-auto mb-2 opacity-80" />
                  <p className="text-3xl font-bold mb-1">10+</p>
                  <p className="text-sm opacity-90">Countries Engaged</p>
                </div>
                <div className="text-center">
                  <Globe className="h-8 w-8 mx-auto mb-2 opacity-80" />
                  <p className="text-3xl font-bold mb-1">5+</p>
                  <p className="text-sm opacity-90">Global Forums</p>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 mx-auto mb-2 opacity-80" />
                  <p className="text-3xl font-bold mb-1">1000s</p>
                  <p className="text-sm opacity-90">Youth Connected</p>
                </div>
                <div className="text-center">
                  <MessageSquare className="h-8 w-8 mx-auto mb-2 opacity-80" />
                  <p className="text-3xl font-bold mb-1">20+</p>
                  <p className="text-sm opacity-90">Speaking Engagements</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Closing Statement */}
        <div className="mt-12 max-w-4xl mx-auto text-center">
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through active international representation, I strive to build bridges between cultures, 
                foster youth cooperation, and contribute to global dialogues on sustainable development, 
                multipolarity, and collaborative growth. The future is shaped by the connections we build today.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
