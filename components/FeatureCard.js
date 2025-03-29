export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="rounded-lg border bg-background p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
