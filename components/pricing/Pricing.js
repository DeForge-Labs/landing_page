"use client";

import {
  BicepsFlexed,
  Check,
  Building2,
  Star,
  UsersRound,
  BriefcaseBusiness,
  Factory,
} from "lucide-react";
import Container from "../ui/container";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { useState } from "react";
import { Zap } from "lucide-react";
import FeatureCard from "../home/features/FeatureCard";
import Image from "next/image";

export default function PricingSection() {
  const [tab, setTab] = useState("year");

  const enterprisePlans = [
    {
      name: "Tier 1",
      price: 299,
      description: "Scalable automation for growing teams.",
      icon: BriefcaseBusiness,
      color: "from-emerald-300",
      features: [
        "2 CPU Cores",
        "8 GB RAM",
        "100 GB NVMe disk space",
        "8 TB Bandwidth",
        "60,000 Credits included",
        "5 Custom nodes included",
        "Extra nodes at $9.99",
        "Dedicated Support",
        "Custom SLA, SSO",
        "Custom Domain",
      ],
    },
    {
      name: "Tier 2",
      price: 499,
      description: "Advanced operations for high-demand agencies.",
      icon: Building2,
      color: "from-purple-300",
      popular: true,
      features: [
        "4 CPU Cores",
        "16 GB RAM",
        "200 GB NVMe disk space",
        "16 TB Bandwidth",
        "130,000 Credits included",
        "10 Custom nodes included",
        "Extra nodes at $9.99",
        "Dedicated Support",
        "Custom SLA, SSO",
        "Custom Domain",
      ],
    },
    {
      name: "Tier 3",
      price: 599,
      description: "The ultimate power for enterprise-grade agents.",
      icon: Factory,
      color: "from-blue-300",
      features: [
        "8 CPU Cores",
        "32 GB RAM",
        "400 GB NVMe disk space",
        "32 TB Bandwidth",
        "200,000 Credits included",
        "20 Custom nodes included",
        "Extra nodes at $9.99",
        "Dedicated Support",
        "Custom SLA, SSO",
        "Custom Domain",
      ],
    },
  ];

  return (
    <div className="">
      <Container
        id="pricing"
        className="py-20 md:py-16 !px-4 sm:!px-20 gap-16 flex flex-col"
      >
        <div className="text-center space-y-2">
          <div className="flex justify-between lg:flex-row flex-col gap-5 mt-10">
            <h1 className="text-4xl font-bold tracking-tighter">
              Flexible Plans <br />
              for
              <span className="italic font-light"> every need</span>
            </h1>
            <div className="flex flex-col gap-4 items-center lg:items-start">
              <p className="text-black/60 text-sm max-w-lg lg:text-left text-center">
                Affordable and transparent pricing for individuals, teams, and
                businesses. Find the right plan for your needs.
              </p>
              <Tabs
                value={tab}
                onValueChange={setTab}
                className="border border-black/50 w-fit rounded-lg pb-0.5"
              >
                <TabsList className="[&>span]:bg-black/10">
                  <TabsTrigger value="month" className="text-xs text-black/80">
                    Monthly
                  </TabsTrigger>
                  <TabsTrigger value="year" className="text-xs text-black/80">
                    Yearly (15% Off)
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <div
            className={`rounded-md relative min-h-[400px] lg:mb-0 mb-3 overflow-hidden border border-black/50 bg-background shadow-xl p-6 md:p-8`}
          >
            <div className="flex flex-col gap-4">
              <div className="h-32 w-full z-10 flex justify-end">
                <Star className="h-44 w-44 text-background" />
              </div>

              <div className="w-full h-40 absolute top-0 left-0 bg-gradient-to-b from-blue-300 to-background"></div>

              <div className="z-20">
                <h3 className="text-xl font-semibold mb-1">Basic</h3>
                <p className=" text-muted-foreground text-xs">
                  Ideal for Individuals who want to try out Deforge
                </p>
              </div>

              <div className="flex items-end">
                <p className="text-5xl font-semibold">$0</p>
                <p className="text-muted-foreground text-sm mb-1">/month</p>
              </div>

              <Button
                className="w-full py-3 border border-black/50"
                variant={"outline"}
                onClick={() => {
                  window.open("https://app.deforge.io", "_blank");
                }}
              >
                Get Started
              </Button>

              <ul className="space-y-2 text-sm opacity-50">
                {[
                  "500 Credits One Time",
                  "3 Apps",
                  "Forum Support",
                  "Access to all features",
                ].map((feature, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className={`rounded-md relative min-h-[400px] overflow-hidden bg-background border border-black/50 shadow-lg scale-105 shadow-purple-300 p-6 md:p-8`}
          >
            <div className="flex flex-col gap-4">
              <div className="h-32 w-full z-10 flex justify-end">
                <BicepsFlexed className="h-44 w-44 text-background" />
              </div>

              <div className="w-full h-40 absolute top-0 left-0 bg-gradient-to-b from-purple-300 to-background">
                <Badge className="bg-secondary border border-black/50 text-black/50 px-3 py-1 mt-5 ml-5 rounded-xl">
                  Most Popular
                </Badge>
              </div>

              <div className="z-20">
                <h3 className="text-xl font-semibold mb-1">Pro</h3>
                <p className=" text-muted-foreground text-xs">
                  For those who want to unleash the power of Deforge
                </p>
              </div>

              <div className="flex items-end">
                <p className="text-5xl font-semibold">
                  {tab === "month" ? "$29" : "$290"}
                </p>
                <p className="text-muted-foreground text-sm mb-1">
                  {tab === "month" ? "/month" : "/year"}
                </p>
              </div>

              <Button
                className="w-full py-3"
                onClick={() => {
                  window.open("https://app.deforge.io", "_blank");
                }}
              >
                Get Started
              </Button>

              <ul className="space-y-2 text-sm opacity-50">
                {[
                  "10000 Credits",
                  "Unlimited Apps",
                  "Priority Support",
                  "Access to all features",
                ].map((feature, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className={`rounded-md relative min-h-[400px] lg:mb-0 mt-3 overflow-hidden border border-black/50 bg-background shadow-xl p-6 md:p-8`}
          >
            <div className="flex flex-col gap-4">
              <div className="h-32 w-full z-10 flex justify-end">
                <UsersRound className="h-44 w-44 text-background" />
              </div>

              <div className="w-full h-40 absolute top-0 left-0 bg-gradient-to-b from-red-300 to-background"></div>

              <div className="z-20">
                <h3 className="text-xl font-semibold mb-1">Pay as you Go</h3>
                <p className=" text-muted-foreground text-xs">
                  Pay for what you use, no hidden fees
                </p>
              </div>

              <div className="flex items-end">
                <p className="text-5xl font-semibold">Flexible </p>
                <p className="text-muted-foreground text-sm mb-1 ml-1">
                  Pricing
                </p>
              </div>

              <Button
                className="w-full py-3 border border-black/50"
                variant={"outline"}
                onClick={() => {
                  window.open("https://app.deforge.io", "_blank");
                }}
              >
                Get Started
              </Button>

              <ul className="space-y-2 text-sm opacity-50">
                {[
                  "Pay for what you use",
                  "No hidden fees",
                  "Access to all features",
                ].map((feature, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center space-y-2">
          <div className="flex justify-between lg:flex-row flex-col gap-5 mt-10">
            <h1 className="text-4xl font-bold tracking-tighter lg:text-left text-center">
              Enterprise <br />
              <span className="italic font-light">managed plans</span>
            </h1>
            <div className="flex flex-col gap-4 items-center lg:items-start">
              <p className="text-black/60 text-sm max-w-lg lg:text-left text-center">
                High-end flexible workspaces for businesses requiring dedicated
                infrastructure and custom AI node capabilities.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {enterprisePlans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-md relative min-h-[450px] overflow-hidden border border-black/50 bg-background shadow-xl p-6 md:p-8 ${
                plan.popular
                  ? "scale-105 shadow-purple-200 z-10"
                  : "mt-3 lg:mt-0"
              }`}
            >
              <div className="flex flex-col gap-4">
                <div className="h-32 w-full z-10 flex justify-end">
                  <plan.icon className="h-44 w-44 text-background/50" />
                </div>

                <div
                  className={`w-full h-40 absolute top-0 left-0 bg-gradient-to-b ${plan.color} to-background`}
                >
                  {plan.popular && (
                    <Badge className="bg-secondary border border-black/50 text-black/50 px-3 py-1 mt-5 ml-5 rounded-xl">
                      Most Popular
                    </Badge>
                  )}
                </div>

                <div className="z-20">
                  <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
                  <p className="text-muted-foreground text-xs">
                    {plan.description}
                  </p>
                </div>

                <div className="flex items-end z-20">
                  <p className="text-5xl font-semibold">${plan.price}</p>
                  <p className="text-muted-foreground text-sm mb-1">/month</p>
                </div>

                <Button
                  className="w-full py-3 z-20"
                  variant={plan.popular ? "default" : "outline"}
                >
                  Contact Sales
                </Button>

                <ul className="space-y-2 text-sm opacity-70 z-20">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter">
              Why Choose <span className="italic font-light">Deforge?</span>
            </h2>
            <p className="text-black/60 text-sm mt-2">
              How we stack up against the technical and enterprise alternatives.
            </p>
          </div>

          <div className="overflow-x-auto border border-black/50 rounded-xl bg-background shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-black/5 border-b border-black/50">
                  <th className="p-4 md:p-6 font-semibold text-sm">Feature</th>
                  <th className="p-4 md:p-6 font-bold text-sm bg-purple-50/50 flex items-center gap-2">
                    <Image
                      priority
                      width={20}
                      height={20}
                      alt="Deforge Logo"
                      src="/logo/logo-black.svg"
                    />
                    <span className="font-bold inline-block text-xl text-black">
                      Deforge
                    </span>
                  </th>
                  <th className="p-4 md:p-6 font-semibold text-sm opacity-60">
                    n8n / Langflow
                  </th>
                  <th className="p-4 md:p-6 font-semibold text-sm opacity-60 text-right">
                    Enterprise Tools
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  {
                    label: "Target User",
                    deforge: "Non-Technical / Ops",
                    comp1: "Developers",
                    comp2: "IT Teams",
                  },
                  {
                    label: "Learning Curve",
                    deforge: "Minutes (No-Code)",
                    comp1: "Days (Logic-Heavy)",
                    comp2: "Weeks",
                  },
                  {
                    label: "Deployment",
                    deforge: "One-Click Chat/Form",
                    comp1: "Self-hosting / API",
                    comp2: "Custom Dev",
                  },
                  {
                    label: "Workflow Sharing",
                    deforge: "Instant Web Forms",
                    comp1: "Complex API / Webhooks",
                    comp2: "Custom Portal Dev",
                  },
                  {
                    label: "Interface",
                    deforge: "Canva-like Visual",
                    comp1: "Technical Nodes",
                    comp2: "Complex UI",
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-black/10 last:border-0 hover:bg-black/[0.02] transition-colors"
                  >
                    <td className="p-4 md:p-6 font-medium">{row.label}</td>
                    <td className="p-4 md:p-6 font-bold text-purple-700 bg-purple-50/30">
                      <div className="flex items-center gap-2">
                        <Zap className="h-3 w-3 fill-purple-700" />
                        {row.deforge}
                      </div>
                    </td>
                    <td className="p-4 md:p-6 opacity-70">{row.comp1}</td>
                    <td className="p-4 md:p-6 opacity-70 text-right">
                      {row.comp2}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
            <div className="space-y-2">
              <FeatureCard
                icon={
                  <Image
                    src="/icons/CarBoost.png"
                    width={50}
                    height={50}
                    alt="Speed"
                  />
                }
                title="Speed to Value"
                description="Turn complex workflows into shareable forms instantly. No API hunting required."
              />
            </div>
            <div className="space-y-2">
              <FeatureCard
                icon={
                  <Image
                    src="/icons/RobotHand.png"
                    width={50}
                    height={50}
                    alt="Robot"
                  />
                }
                title="Multi-Model Native"
                description="Seamlessly switch between GPT-4o, Claude, and Llama through one visual interface."
              />
            </div>
            <div className="space-y-2">
              <FeatureCard
                icon={
                  <Image
                    src="/icons/Company.png"
                    width={50}
                    height={50}
                    alt="Enterprise"
                  />
                }
                title="Enterprise Ready"
                description="Dedicated infrastructure with custom SLAs and SSO for high-demand operations."
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
