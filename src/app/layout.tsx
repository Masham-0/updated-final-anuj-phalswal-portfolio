import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anuj | Engineer | Youth Leader | International Delegate | Sustainable Development Advocate",
  description: "Official portfolio of Anuj Phalswal - Assistant Manager at Hindustan Zinc Ltd, National Awardee, National Youth Icon (NSS), International Youth Delegate, and Sustainable Development Advocate with proven industrial and social impact.",
  keywords: [
    "Anuj Phalswal",
    "Indian Youth Leader",
    "Assistant Manager Mining Engineering",
    "Shaft Hoisting Expert",
    "Hindustan Zinc Ltd Engineer",
    "Youth Empowerment Leader India",
    "International Youth Forum Speaker",
    "World Youth Festival Delegate",
    "NSS National Youth Icon",
    "Sustainable Development Projects India",
    "India Russia Youth Cooperation",
    "President's Awardee"
  ],
  authors: [{ name: "Masham", url: "mailto:mohd.masham@gmail.com" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Anuj | Engineer | Youth Leader | International Delegate",
    description: "Official portfolio of Anuj - Engineer, National Awardee, and International Youth Delegate driving sustainable development through technology and leadership.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anuj Phalswal - Engineer & Youth Leader",
    description: "National Awardee and International Youth Delegate driving sustainable development through technology and leadership.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navigation />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
