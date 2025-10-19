export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="rounded-xl bg-secondary p-6 shadow-md hover:shadow-md transition-shadow z-10">
      <div className="h-16 w-16 bg-background rounded-sm shadow-md flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}
