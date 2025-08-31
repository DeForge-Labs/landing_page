export default function PricingHeader() {
  return (
    <section className="py-16 md:py-20 bg-black/5">
      <div className="container text-center space-y-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
          Deforge <span className="text-black">Plans</span>
        </h1>
        <p className="text-black/60 text-lg max-w-2xl mx-auto">
          Transparent pricing for AI agents. No hidden fees or surprises. All
          the features you need, at a price you can afford.
        </p>
      </div>
    </section>
  );
}
