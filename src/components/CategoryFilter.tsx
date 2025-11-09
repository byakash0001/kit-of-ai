import { Button } from "@/components/ui/button";
import { Grid3x3, List } from "lucide-react";

const categories = [
  "All",
  "Video Generation",
  "Image Generation",
  "Audio/Voice",
  "Coding/Dev",
  "Research",
  "Productivity",
  "Writing",
  "Presentation",
  "Agents",
  "Automation",
  "Other",
];

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  viewMode?: "grid" | "list";
  onViewModeChange?: (mode: "grid" | "list") => void;
}

const CategoryFilter = ({ 
  selectedCategory, 
  onCategoryChange,
  viewMode = "grid",
  onViewModeChange 
}: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-sm font-medium mr-2 text-foreground">Category:</p>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange(category)}
            className="rounded-full h-8"
          >
            {category}
          </Button>
        ))}
      </div>
      
      {onViewModeChange && (
        <div className="hidden sm:flex items-center gap-1 rounded-full border border-border p-1">
          <button
            onClick={() => onViewModeChange("grid")}
            className={`p-1.5 rounded-full transition-colors ${
              viewMode === "grid" 
                ? "bg-primary/10 text-primary" 
                : "text-muted-foreground hover:bg-surface-container"
            }`}
            aria-label="Grid View"
            aria-pressed={viewMode === "grid"}
          >
            <Grid3x3 className="h-4 w-4" />
          </button>
          <button
            onClick={() => onViewModeChange("list")}
            className={`p-1.5 rounded-full transition-colors ${
              viewMode === "list" 
                ? "bg-primary/10 text-primary" 
                : "text-muted-foreground hover:bg-surface-container"
            }`}
            aria-label="List View"
            aria-pressed={viewMode === "list"}
          >
            <List className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;
