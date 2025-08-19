export default function AgentHeader() {
  return (
    <section className="py-16 md:py-20 bg-black/5">
      <div className="container text-center space-y-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
          Deforge <span className="text-black">Agents</span>
        </h1>
        <p className="text-black/60 text-lg max-w-2xl mx-auto">
          Deploy pre-built AI agents to automate your workflows in seconds by
          simply filling <span className="text-black font-bold">forms</span>.
          From customer support to content creation, find the perfect agent for
          your needs.
        </p>
      </div>
    </section>
  );
}
