import { Badge } from "../../ui/badge";
import Container from "../../ui/container";

import FlowContainer from "./FlowContainer";

export default function Editor() {
  return (
    <section
      id="use-cases"
      className="border-b border-dashed border-black/50 hidden sm:block"
    >
      <Container className="pt-20 pb-5 px-0!">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#DFE0E8_1.2px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
        <div className="text-center space-y-2">
          <Badge className="bg-secondary border border-black/50 text-black/50 px-3 py-1 rounded-xl">
            How it Works
          </Badge>

          <h2 className="text-2xl lg:text-4xl font-bold mt-2">
            Save Time and Effort
          </h2>

          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            Simply type what capabilities you want your agent to have and let
            Deforge build it for you. Deployment is as simple as a click of a
            button.
          </p>
        </div>

        <div className="container px-0!">
          <div className="relative w-full lg:h-[600px] sm:h-[400px] h-[300px] rounded-lg xl:mt-0 lg:mt-4 md:mt-2 mt-4 p-2 sm:py-4 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full z-50"></div>
            <FlowContainer />
          </div>
        </div>
      </Container>
    </section>
  );
}
