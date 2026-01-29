"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Play,
  ExternalLink,
  TrendingUp,
  Users,
  Target,
  DollarSign,
  Check,
  Zap,
  Server,
} from "lucide-react";

// Importing components from your landing page structure
import Container from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/home/navbar/Navbar";
import CTA from "@/components/home/CTA";

// --- Helper Components for consistent design ---

const SectionHeader = ({ badge, title }) => (
  <div className="text-center space-y-2 mb-12">
    <Badge className="bg-secondary border border-black/50 text-black/50 px-3 py-1 rounded-xl">
      {badge}
    </Badge>
    <h2 className="text-2xl lg:text-4xl font-bold mt-2">{title}</h2>
  </div>
);

const VideoCard = ({ title, src }) => (
  <div className="bg-background border border-black/50 rounded-lg p-3 flex flex-col gap-3 shadow-sm hover:shadow-md transition-all">
    <div className="flex items-center gap-2 px-1">
      <div className="p-1.5 bg-red-100 rounded-full">
        <Play className="h-3 w-3 text-red-600 fill-red-600" />
      </div>
      <h3 className="font-semibold text-sm">{title}</h3>
    </div>
    <div className="aspect-video rounded-md overflow-hidden bg-black/5 border border-black/10">
      <iframe
        width="100%"
        height="100%"
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  </div>
);

const FounderCard = ({ name, role, img, linkedin }) => (
  <div className="group relative flex flex-col items-center p-6 bg-background rounded-lg border border-dashed border-black/50 hover:bg-secondary/40 transition-colors">
    <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-black/10 group-hover:border-black/30 transition-colors">
      <Image src={img} alt={name} fill className="object-cover" />
    </div>
    <h3 className="text-lg font-bold">{name}</h3>
    <p className="text-muted-foreground text-sm mb-4">{role}</p>
    <Link href={linkedin} target="_blank">
      <Button
        variant="outline"
        size="sm"
        className="gap-2 h-8 text-xs border-black/30"
      >
        Connect <ExternalLink className="h-3 w-3" />
      </Button>
    </Link>
  </div>
);

const PricingCard = ({ title, price, items, colorClass }) => (
  <div className="flex flex-col p-6 bg-background border border-black/50 rounded-lg h-full hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between mb-4 border-b border-dashed border-black/20 pb-4">
      <h3 className="font-bold text-lg">{title}</h3>
      <span className={`font-bold ${colorClass}`}>{price}</span>
    </div>
    <div className="space-y-3 flex-1">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-start gap-2 text-sm text-muted-foreground"
        >
          <Check className="h-4 w-4 mt-0.5 text-black shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  </div>
);

// --- Main Page Component ---

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background text-black font-sans">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="border-b border-dashed border-black/50 relative overflow-hidden">
          <Container
            className="py-20 flex flex-col items-center text-center gap-8 px-4! sm:px-20!"
            showGlow={true}
          >
            <a
              href="https://www.producthunt.com/products/deforge-open-beta?embed=true&utm_source=badge-top-post-badge&utm_medium=badge&utm_source=badge-deforge"
              target="_blank"
              className="hover:opacity-80 transition-opacity hover:-translate-y-1 duration-300"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=1007944&theme=dark&period=daily&t=1756041023938"
                alt="Deforge - Canva for AI Agents | Product Hunt"
                style={{ width: "250px", height: "54px" }}
              />
            </a>

            <div className="space-y-4 max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                About Deforge
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Build AI Agents Visually, No Code Required.
              </p>
            </div>
          </Container>
        </section>

        {/* Vision & Problem Section (Restored to your preference) */}
        <section className="border-b border-dashed border-black/50">
          <Container className="py-16 md:py-24 px-4 sm:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <Badge className="bg-secondary border border-black/50 text-black/50 px-3 py-1 rounded-xl mb-4">
                  Our Vision
                </Badge>
                <h2 className="text-3xl font-bold mb-6">Why we started</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    The idea originated from our own frustrations. Tools like
                    n8n and Langflow are powerful, but the learning curve is
                    steep. We found ourselves watching hour-long tutorials just
                    to connect a database.
                  </p>
                  <p>
                    We realized that while primitive nodes offer granularity,
                    most users just want a result. Instead of 10 nodes to build
                    a Knowledge Base, we built one.
                  </p>
                  <p className="font-medium text-black">
                    Imagine n8n or Langflow, but 10x more user-friendly. No
                    hunting for API keys, no complex database setups.
                  </p>
                </div>
              </div>

              <div className="relative">
                {/* Visual decoration to match landing page style */}
                <div className="absolute -inset-4 bg-linear-to-r from-blue-100 to-purple-100 rounded-xl opacity-50 -z-10 blur-xl"></div>
                <div className="bg-background border border-black/50 p-8 rounded-xl shadow-sm">
                  <Target className="w-10 h-10 mb-4 text-purple-600" />
                  <h3 className="text-xl font-bold mb-2">
                    The Deforge Difference
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Compared to our competitors, we handle the infrastructure.
                    We provide the hosting, the API connections, and the
                    database management so you can focus purely on logic.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-600" />{" "}
                      <span>No-Code Visual Builder</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-600" />{" "}
                      <span>Managed Infrastructure</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-600" />{" "}
                      <span>Instant Form Deployment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Media Section */}
        <section className="border-b border-dashed border-black/50">
          <Container className="py-16 md:py-24 px-4! sm:px-20!">
            <SectionHeader badge="Media" title="See Deforge in Action" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <VideoCard
                title="Founders Video"
                src="https://www.youtube.com/embed/8NQVkZJtLxk"
              />
              <VideoCard
                title="Demo"
                src="https://www.youtube.com/embed/VnQLhlbCj-g"
              />
              <VideoCard
                title="Product Reveal"
                src="https://www.youtube.com/embed/lDc1p_yoWmQ"
              />
            </div>
          </Container>
        </section>

        {/* Impact Stats */}
        <section className="border-b border-dashed border-black/50 bg-secondary/30">
          <Container className="py-16 px-4! sm:px-20!" showGlow={false}>
            <SectionHeader badge="Growth" title="Our Impact" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center justify-center p-8 bg-background border border-black/50 rounded-xl text-center gap-2 shadow-sm">
                <div className="p-3 rounded-full bg-green-100 mb-2">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-4xl font-bold">2400+</h3>
                <p className="text-muted-foreground">
                  Unique visitors on launch day
                </p>
              </div>

              <div className="flex flex-col items-center justify-center p-8 bg-background border border-black/50 rounded-xl text-center gap-2 shadow-sm">
                <div className="p-3 rounded-full bg-blue-100 mb-2">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-4xl font-bold">240+</h3>
                <p className="text-muted-foreground">Sign ups on launch</p>
              </div>
            </div>
          </Container>
        </section>

        {/* Founders Section */}
        <section className="border-b border-dashed border-black/50">
          <Container className="py-16 md:py-24 px-4! sm:px-20!">
            <SectionHeader badge="Team" title="Meet Our Founders" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <FounderCard
                name="Anoy Roy Chowdhury"
                role="CEO"
                img="/pfp/anoy.jpeg"
                linkedin="https://www.linkedin.com/in/anoyroyc3545/"
              />
              <FounderCard
                name="Shamba Chowdhury"
                role="CTO"
                img="/pfp/shamba.jpeg"
                linkedin="https://www.linkedin.com/in/shambac/"
              />
              <FounderCard
                name="Gautam Raj"
                role="CMO"
                img="/pfp/gautam.jpeg"
                linkedin="https://www.linkedin.com/in/-gautam-raj/"
              />
            </div>
          </Container>
        </section>

        {/* Pricing Section */}
        <section className="border-b border-dashed border-black/50">
          <Container className="py-16 md:py-24 px-4! sm:px-20!">
            <SectionHeader badge="Pricing" title="Our Pricing Strategy" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <PricingCard
                title="Subscription Plans"
                price="Monthly"
                colorClass="text-black"
                items={[
                  "Free Plan: $0/month",
                  "Pro Plan: $29/month",
                  "Enterprise Plan: Custom",
                ]}
              />

              <PricingCard
                title="Credit System"
                price="Top-ups"
                colorClass="text-blue-600"
                items={[
                  "500 Credits: $3",
                  "1,000 Credits: $5",
                  "2,000 Credits: $8",
                  "Free plan includes 500 credits",
                  "Pro plan includes 10,000 credits",
                ]}
              />
            </div>
          </Container>
        </section>

        {/* Pre-CTA Replacement */}
        <section className="bg-linear-to-t from-[#ebe4ff] to-background">
          <Container
            className="flex flex-col gap-8 py-12 sm:py-20! px-4! items-center text-center"
            showGlow={false}
          >
            <div className="p-4 bg-black shadow-lg shadow-[#8754ff] w-fit rounded-3xl opacity-80">
              <Image
                src="/logo/logo-white.svg"
                alt="Deforge"
                width={50}
                height={50}
              />
            </div>
            <div>
              <h2 className="text-2xl lg:text-4xl font-bold mt-2">
                Ready to Build Your AI Agent?
              </h2>
              <p className="text-muted-foreground text-sm max-w-2xl mx-auto mt-2">
                Join us to build powerful AI agents without writing a single
                line of code.
              </p>
            </div>
            <Link href="https://deforge.io">
              <Button
                size="lg"
                className="w-40 py-4 gap-2 text-background bg-black/80"
              >
                Get Started Today
              </Button>
            </Link>
          </Container>
        </section>
      </main>

      <CTA />
    </div>
  );
}
