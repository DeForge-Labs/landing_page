import FlowContainer from "./FlowContainer";

export default function Editor() {
  return (
    <section id="use-cases" className="pt-4 mb-5">
      <div className="container">
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Intuitive AI Agent Builder
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            Build your AI agent with Deforge's intuitive builder. Drag and drop
            components to create a custom workflow for your AI agent.
          </p>
        </div>

        <div className="container sm:px-[32px] px-0">
          <div className="relative w-full lg:h-[600px] sm:h-[400px] h-[300px] rounded-lg xl:mt-0 lg:mt-4 md:mt-2 mt-4 p-2 md:p-4 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full z-50"></div>
            <FlowContainer />
          </div>
        </div>
      </div>
    </section>
  );
}
