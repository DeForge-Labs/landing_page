import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Chip, Button } from "@heroui/react";
import { Bot, Zap } from "lucide-react";

export function TemplateCard({ template }) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-200 border border-black/50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2 mb-2">
            <Chip
              variant="secondary"
              className="text-xs bg-green-100 rounded-lg"
            >
              {template.category}
            </Chip>
          </div>
        </div>
        <CardTitle className="text-lg leading-tight">{template.name}</CardTitle>
        <CardDescription className="text-sm leading-relaxed">
          {template.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col gap-4">
        <div className="flex flex-wrap gap-1">
          {template.tags.map((tag) => (
            <Chip
              key={tag}
              variant="outline"
              className="text-xs bg-black/5 rounded-lg capitalize"
            >
              {tag}
            </Chip>
          ))}
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Zap className="h-3 w-3" />
            <span className="font-medium">Components</span>
          </div>
          <div className="text-xs text-muted-foreground flex flex-wrap gap-1">
            {template.nodes.map((node, index) => {
              return (
                <Chip
                  key={index}
                  variant="outline"
                  className="text-xs bg-black/5 rounded-lg capitalize"
                >
                  {node}
                </Chip>
              );
            })}
          </div>
        </div>

        <div className="mt-auto">
          <Button className="w-full py-5" size="sm">
            Use Agent
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
