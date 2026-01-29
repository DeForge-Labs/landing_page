import React from "react";
import { Check } from "lucide-react";

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

export default PricingCard;
