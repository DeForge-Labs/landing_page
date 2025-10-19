import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export function TemplateCard({ template }) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-200 border border-black/50">
      <CardHeader className="pb-3">
        <div className="flex flex-col gap-2">
          {template.icon && (
            <div
              className="h-20 w-20 border border-black/20 rounded-xl shadow-lg flex items-center justify-center text-primary mb-4"
              style={{ backgroundColor: template.iconColor }}
            >
              {template.icon}
            </div>
          )}

          <div className="flex items-center gap-2 mb-2">
            <Badge
              variant="secondary"
              className="text-xs bg-green-100 rounded-lg p-1 px-2"
            >
              {template.category}
            </Badge>
          </div>
        </div>
        <CardTitle className="text-md leading-tight">{template.name}</CardTitle>
        <CardDescription className="text-xs leading-relaxed">
          {template.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col gap-4">
        <div className="flex flex-wrap gap-1">
          {template.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="text-xs bg-black/5 rounded-lg capitalize p-1 px-2"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-auto">
          <Button
            className="w-full py-2 border border-black/50"
            variant="outline"
            size="sm"
            onPress={() => window.open(template.link, "_blank")}
          >
            Use Agent
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
