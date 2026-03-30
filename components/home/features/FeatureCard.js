const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="rounded-xl bg-secondary/70 border border-black/10 p-6 shadow-md hover:shadow-md transition-shadow z-10">
      <div className="h-16 w-16 bg-background rounded-sm shadow-md flex items-center justify-center text-primary mb-4">
        {icon}
      </div>

      <h2 className="text-lg font-semibold mb-2">{title}</h2>

      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
