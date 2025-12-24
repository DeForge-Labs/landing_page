import Container from "../ui/container";
import { ProcessorCore } from "./enterprise/ProcessorCore";
import { Badge } from "../ui/badge";
import { Check } from "lucide-react";
import { Button } from "../ui/button";

export default function Enterprise() {
  return (
    <section id="enterprise" className="border-b border-dashed border-black/50">
      <Container className="py-12! sm:p-20! p-4 flex flex-col" showGlow={false}>
        <div className="flex lg:flex-row flex-col justify-center items-center gap-16">
          <ProcessorCore />

          <div className="flex flex-col gap-2 max-w-lg lg:items-start items-center">
            <Badge className="bg-secondary border mb-2 border-black/50 text-black/50 px-3 py-1 w-fit rounded-xl">
              Enterprise
            </Badge>

            <h2 className="text-2xl lg:text-4xl font-bold text-center lg:text-left">
              Deforge for Enterprise
            </h2>

            <p className="text-muted-foreground text-sm max-w-2xl mx-auto mb-3 text-center lg:text-left">
              Integrate Deforge with your existing tools and workflows to build
              custom AI agents that fit your specific needs. Full Hosting,
              Custom Domains, and more. Deploy Deforge on-premises or in the
              cloud.
            </p>

            <div className=" flex-col space-y-1 hidden lg:flex">
              {[
                "Customizable Branding",
                "Dedicated Support",
                "Custom Domains",
                "Custom Nodes",
                "Full Control",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-center lg:text-left"
                >
                  <Check className="w-4 h-4 mr-1" />
                  <p className="text-muted-foreground text-sm">{item}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-2 lg:hidden">
              {[
                "Customizable Branding",
                "Dedicated Support",
                "Custom Domains",
                "Custom Nodes",
                "Full Control",
              ].map((item) => (
                <Badge
                  key={item}
                  className="bg-secondary border border-black/50 text-black/50 px-3 py-1 w-fit rounded-xl"
                >
                  {item}
                </Badge>
              ))}
            </div>

            <Button
              size="lg"
              className="w-40 py-4 gap-2 text-background bg-black/80 mt-5"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
