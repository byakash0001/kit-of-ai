import { Badge } from "@/components/ui/badge";
import { Bookmark, MoreVertical, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface ToolCardProps {
  id: string;
  name: string;
  url: string;
  site?: string;
  category: string;
  pricing?: "free" | "paid" | "freemium";
  shortSummary?: string;
  imageUrl?: string;
}

const categoryColors: Record<string, string> = {
  "Video Generation": "bg-primary/10 text-primary dark:bg-primary/20",
  "Image Generation": "bg-accent-orange/10 text-accent-orange dark:bg-accent-orange/20",
  "Audio/Voice": "bg-accent-green/10 text-accent-green dark:bg-accent-green/20",
  "Coding/Dev": "bg-muted text-muted-foreground",
  "Research": "bg-primary/10 text-primary dark:bg-primary/20",
  "Productivity": "bg-primary/10 text-primary dark:bg-primary/20",
  "Writing": "bg-accent-green/10 text-accent-green dark:bg-accent-green/20",
  "Presentation": "bg-accent-orange/10 text-accent-orange dark:bg-accent-orange/20",
  "Agents": "bg-primary/10 text-primary dark:bg-primary/20",
  "Automation": "bg-primary/10 text-primary dark:bg-primary/20",
  "Other": "bg-muted text-muted-foreground",
};

const pricingLabels: Record<string, string> = {
  free: "Free",
  paid: "Paid",
  freemium: "Freemium",
};

const ToolCard = ({ id, name, url, site, category, pricing, shortSummary, imageUrl }: ToolCardProps) => {
  const getDomain = () => {
    if (site) return site;
    if (!url) return "";
    try {
      return new URL(url).hostname.replace("www.", "");
    } catch {
      return url;
    }
  };
  const domain = getDomain();
  
  return (
    <div className="group flex flex-col gap-3 rounded-xl bg-card border border-border p-4 transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="relative w-full aspect-square">
        {imageUrl ? (
          <div 
            className="w-full h-full bg-center bg-no-repeat bg-cover rounded-lg"
            style={{ backgroundImage: `url("${imageUrl}")` }}
            role="img"
            aria-label={`${name} logo`}
          />
        ) : (
          <div className="w-full h-full bg-surface-container dark:bg-surface-container rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-4xl text-muted-foreground">widgets</span>
          </div>
        )}
        <div className="absolute top-2 right-2 flex gap-1">
          <div className="p-1.5 bg-background/80 dark:bg-background/80 backdrop-blur-sm rounded-full">
            <Bookmark className="h-4 w-4 text-primary fill-primary" />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 p-1.5 bg-background/80 dark:bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="More options"
              >
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link to={`/tool/${id}`}>View Details</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Add to Collection</DropdownMenuItem>
              <DropdownMenuItem>Compare</DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  Open Site
                  <ExternalLink className="ml-2 h-3 w-3" />
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      <div className="flex flex-col gap-2">
        <Link to={`/tool/${id}`} className="hover:underline">
          <p className="text-card-foreground text-base font-semibold leading-normal line-clamp-1">
            {name}
          </p>
        </Link>
        <p className="text-muted-foreground text-xs font-normal leading-normal">
          {domain}
        </p>
        {shortSummary && (
          <p className="text-muted-foreground text-sm font-normal leading-normal line-clamp-2">
            {shortSummary}
          </p>
        )}
        <div className="flex flex-wrap gap-2 mt-1">
          <Badge 
            variant="secondary" 
            className={`${categoryColors[category] || "bg-muted text-muted-foreground"} rounded-full text-xs`}
          >
            {category}
          </Badge>
          {pricing && (
            <Badge 
              variant="outline" 
              className="rounded-full text-xs"
            >
              {pricingLabels[pricing]}
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
