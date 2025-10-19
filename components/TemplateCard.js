import { cn } from "@/lib/utils";

export default function TemplateCard({
  icon,
  title,
  description,
  className,
  embedded = false,
}) {
  return (
    <div
      className={cn(
        "rounded-xl bg-secondary p-6 shadow-md hover:shadow-md transition-shadow relative z-10 ",
        className
      )}
    >
      {embedded && (
        <div className="h-20 w-20 bg-background rounded-sm shadow-md flex items-center justify-center text-primary mb-4">
          {icon}
        </div>
      )}
      {!embedded && icon}

      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}
