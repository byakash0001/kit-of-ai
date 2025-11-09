import { Badge } from "@/components/ui/badge";
import { Bookmark } from "lucide-react";

interface ToolCardProps {
  name: string;
  description: string;
  category: string;
  imageUrl: string;
}

const categoryColors: Record<string, string> = {
  Writing: "bg-accent-green/10 text-accent-green hover:bg-accent-green/20",
  Design: "bg-accent-orange/10 text-accent-orange hover:bg-accent-orange/20",
  Code: "bg-muted/50 text-muted-foreground hover:bg-muted",
  Productivity: "bg-primary/10 text-primary hover:bg-primary/20",
};

const ToolCard = ({ name, description, category, imageUrl }: ToolCardProps) => {
  return (
    <div className="flex flex-col gap-3 rounded-xl bg-card border border-border p-4 transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
      <div className="relative w-full aspect-square">
        <div 
          className="w-full h-full bg-center bg-no-repeat bg-cover rounded-lg"
          style={{ backgroundImage: `url("${imageUrl}")` }}
          role="img"
          aria-label={`${name} logo`}
        />
        <div className="absolute top-2 right-2 p-1.5 bg-background/70 backdrop-blur-sm rounded-full">
          <Bookmark className="h-4 w-4 text-primary fill-primary" />
        </div>
      </div>
      
      <div>
        <p className="text-card-foreground text-base font-semibold leading-normal line-clamp-1">
          {name}
        </p>
        <p className="text-muted-foreground text-sm font-normal leading-normal mt-1 line-clamp-2">
          {description}
        </p>
        <div className="mt-3">
          <Badge 
            variant="secondary" 
            className={`${categoryColors[category] || "bg-muted text-muted-foreground"} rounded-full`}
          >
            {category}
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
