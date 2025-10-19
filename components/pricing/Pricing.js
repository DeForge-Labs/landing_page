"use client";

import {
  BicepsFlexed,
  Check,
  FlaskConical,
  Hammer,
  HandCoins,
  Star,
  UsersRound,
} from "lucide-react";
import Container from "../ui/container";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { useState } from "react";

export default function PricingSection() {
  const [tab, setTab] = useState("month");
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
                  <TabsTrigger value="month" className="text-xs">
                    Monthly
                  </TabsTrigger>
                  <TabsTrigger value="year" className="text-xs">
                    Yearly
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

              <Button className="w-full py-3">Get Started</Button>

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
            className={`rounded-md relative min-h-[400px] overflow-hidden bg-background border border-black/50 shadow-lg scale-105 shadow-[#8754ff] p-6 md:p-8`}
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

              <Button className="w-full py-3">Get Started</Button>

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

              <div className="w-full h-40 absolute top-0 left-0 bg-gradient-to-b from-green-300 to-background"></div>

              <div className="z-20">
                <h3 className="text-xl font-semibold mb-1">Enterprise</h3>
                <p className=" text-muted-foreground text-xs">
                  Designed for Unique Use Cases
                </p>
              </div>

              <div className="flex items-end">
                <p className="text-5xl font-semibold">$99</p>
                <p className="text-muted-foreground text-sm mb-1">/month</p>
              </div>

              <Button className="w-full py-3">Contact Us</Button>

              <ul className="space-y-2 text-sm opacity-50">
                {[
                  "Unlimited Credits",
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
            className={`rounded-md relative min-h-[200px] border border-black/50 mt-5 hidden lg:block col-span-3 overflow-hidden bg-background shadow-xl p-6 md:p-8`}
          >
            <div className="flex gap-4">
              <div className="h-full w-64 z-10 flex justify-end">
                <HandCoins className="h-44 w-44 text-background" />
              </div>

              <div className="w-64 h-full absolute top-0 left-0 bg-gradient-to-r from-red-300 to-background"></div>

              <div className="flex gap-4 items-center justify-between w-full z-10">
                <div className="flex flex-col gap-4">
                  <div className="z-20">
                    <h3 className="text-xl font-semibold mb-1">
                      Pay As You Go
                    </h3>
                    <p className=" text-muted-foreground text-xs">
                      Pay for what you use, no hidden fees
                    </p>
                  </div>

                  <div className="flex items-end">
                    <p className="text-5xl font-semibold">$~</p>
                    <p className="text-muted-foreground text-sm mb-1">/∞</p>
                  </div>

                  <Button className="w-full py-3">Get Started</Button>
                </div>

                <ul className="space-y-2 text-sm opacity-50 mr-10">
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

          <div
            className={`rounded-md relative min-h-[400px] overflow-hidden border lg:hidden block border-black/50 bg-background shadow-xl p-6 md:p-8`}
          >
            <div className="flex flex-col gap-4">
              <div className="h-32 w-full z-10 flex justify-end">
                <HandCoins className="h-44 w-44 text-background" />
              </div>

              <div className="w-full h-40 absolute top-0 left-0 bg-gradient-to-b from-red-300 to-background"></div>

              <div className="z-20">
                <h3 className="text-xl font-semibold mb-1">Pay As You Go</h3>
                <p className=" text-muted-foreground text-xs">
                  Pay for what you use, no hidden fees
                </p>
              </div>

              <div className="flex items-end">
                <p className="text-5xl font-semibold">$~</p>
                <p className="text-muted-foreground text-sm mb-1">/∞</p>
              </div>

              <Button className="w-full py-3">Get Started</Button>

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
      </Container>
    </div>
  );
}
