import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

import { Button } from "../ui/button";

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

export default FounderCard;
