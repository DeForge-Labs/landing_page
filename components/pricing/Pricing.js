import {
  BicepsFlexed,
  Check,
  FlaskConical,
  Hammer,
  Users2,
} from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for beginners and hobbyists",
    features: ["Up to 3 AI agents", "500 credits", "Forum support"],
    cta: "Get Started",
    popular: false,
    icon: FlaskConical,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month*",
    description: "For professionals and small teams",
    features: ["Up to 20 AI agents", "10,000 credits", "Priority support"],
    cta: "Start Free Trial",
    popular: true,
    icon: Hammer,
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    description: "For organizations with advanced needs",
    features: ["Unlimited AI agents", "Unlimited credits", "Priority support"],
    cta: "Contact Sales",
    popular: false,
    icon: Users2,
  },
];

export default function PricingSection() {
  return (
    <div id="pricing" className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`rounded-lg border border-black/50 relative min-h-[400px] overflow-hidden ${
              plan.popular
                ? "border-primary shadow-lg"
                : "bg-background shadow-sm"
            } p-6 md:p-8 relative`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-bl-lg rounded-tr-lg">
                Popular
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

            <div className="absolute -bottom-10 -right-10 opacity-5">
              <plan.icon className="h-60 w-60 text-black" />
            </div>
          </div>
        ))}

        <div
          className={`rounded-lg border border-black/50 relative min-h-[400px] overflow-hidden bg-background shadow-sm p-6 md:p-8 relative`}
        >
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Flexible</h3>
              <span className="text-3xl md:text-3xl font-extrabold">
                Pay As You Go
              </span>
              <p className="mt-2 text-muted-foreground">
                Buy credits as per your needs and pay only for what you use
              </p>
            </div>

            <ul className="space-y-3">
              {[
                "No credit limit",
                "No hidden fees",
                "Pay only for what you use",
              ].map((feature, j) => (
                <li key={j} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="absolute -bottom-10 -right-10 opacity-5">
            <BicepsFlexed className="h-60 w-60 text-black" />
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-muted-foreground">
          *Plans are subject to change. Stay tuned for more updates.
        </p>
      </div>
    </div>
  );
}
