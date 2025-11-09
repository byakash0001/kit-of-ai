import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Grid3x3, List, Plus } from "lucide-react";

const categories = ["All", "Writing", "Design", "Code", "Productivity"];

const CategoryFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-sm font-medium mr-2 text-foreground">Category:</p>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "secondary"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>
      
      <div className="flex items-center gap-2">
        <div className="hidden sm:flex items-center gap-1 rounded-full border border-border p-1">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-1.5 rounded-full transition-colors ${
              viewMode === "grid" 
                ? "bg-primary/10 text-primary" 
                : "text-muted-foreground hover:bg-surface-container"
            }`}
            aria-label="Grid View"
          >
            <Grid3x3 className="h-4 w-4" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-1.5 rounded-full transition-colors ${
              viewMode === "list" 
                ? "bg-primary/10 text-primary" 
                : "text-muted-foreground hover:bg-surface-container"
            }`}
            aria-label="List View"
          >
            <List className="h-4 w-4" />
          </button>
        </div>
        
        <Button className="hidden sm:flex rounded-full gap-2">
          <Plus className="h-4 w-4" />
          <span>Add Tool</span>
        </Button>
      </div>
    </div>
  );
};

export default CategoryFilter;
