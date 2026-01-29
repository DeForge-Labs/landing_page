import React from "react";
import { Check, Target } from "lucide-react";

import { Badge } from "../ui/badge";
import Container from "../ui/container";

const OurVision = () => {
  return (
    <section className="border-b border-dashed bg-background border-black/50">
      <Container className="py-16 md:py-24 px-4 sm:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <Badge className="bg-secondary border border-black/50 text-black/50 px-3 py-1 rounded-xl mb-4">
              Our Vision
            </Badge>

            <h2 className="text-3xl font-bold mb-6">Why we started</h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The idea originated from our own frustrations. Tools like n8n
                and Langflow are powerful, but the learning curve is steep. We
                found ourselves watching hour-long tutorials just to connect a
                database.
              </p>

              <p>
                We realized that while primitive nodes offer granularity, most
                users just want a result. Instead of 10 nodes to build a
                Knowledge Base, we built one.
              </p>

              <p className="font-medium text-black">
                Imagine n8n or Langflow, but 10x more user-friendly. No hunting
                for API keys, no complex database setups.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-linear-to-r from-blue-100 to-purple-100 rounded-xl opacity-50 -z-10 blur-xl" />

            <div className="bg-background border border-black/50 p-8 rounded-xl shadow-sm">
              <Target className="w-10 h-10 mb-4 text-purple-600" />

              <h3 className="text-xl font-bold mb-2">The Deforge Difference</h3>

              <p className="text-sm text-muted-foreground mb-4">
                Compared to our competitors, we handle the infrastructure. We
                provide the hosting, the API connections, and the database
                management so you can focus purely on logic.
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
  );
};

export default OurVision;
