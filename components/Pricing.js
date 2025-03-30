import { Button } from "@heroui/react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for beginners and hobbyists",
    features: [
      "Up to 3 AI agents",
      "Basic node components",
      "1,000 monthly executions",
      "Community support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For professionals and small teams",
    features: [
      "Unlimited AI agents",
      "All node components",
      "50,000 monthly executions",
      "Priority support",
      "Custom branding",
      "API access",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with advanced needs",
    features: [
      "Unlimited everything",
      "Dedicated support",
      "Custom integrations",
      "On-premise deployment",
      "SLA guarantees",
      "Team collaboration",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <div id="pricing" className="container py-12 space-y-12 md:space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Simple, Transparent Pricing
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
          Choose the plan that's right for you
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`rounded-lg border ${
              plan.popular
                ? "border-primary shadow-lg"
                : "bg-background shadow-sm"
            } p-6 md:p-8 relative`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-bl-lg rounded-tr-lg">
                Will be Popular
              </div>
            )}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl md:text-4xl font-extrabold">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="ml-1 text-muted-foreground">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-3">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-muted-foreground">
          All plans will include a 14-day free trial. No credit card required.
        </p>
      </div>
    </div>
  );
}
