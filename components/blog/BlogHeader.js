export default function BlogHeader() {
  return (
    <section className="py-16 md:py-20 bg-black/5">
      <div className="container text-center space-y-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
          Deforge <span className="text-black">Blog</span>
        </h1>
        <p className="text-black/60 text-lg max-w-2xl mx-auto">
          Insights, tutorials, and updates about the future of no-code AI agent
          development
        </p>
      </div>
    </section>
  );
}
