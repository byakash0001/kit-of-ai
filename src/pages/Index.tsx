import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import CategoryFilter from "@/components/CategoryFilter";
import ToolCard from "@/components/ToolCard";
import EmptyState from "@/components/EmptyState";

const mockTools = [
  {
    id: "1",
    name: "Runway",
    url: "https://runwayml.com",
    site: "runwayml.com",
    category: "Video Generation",
    pricing: "freemium" as const,
    shortSummary: "Quick VFX/video generation",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop",
  },
  {
    id: "2",
    name: "Midjourney",
    url: "https://midjourney.com",
    site: "midjourney.com",
    category: "Image Generation",
    pricing: "paid" as const,
    shortSummary: "Stylized images",
    imageUrl: "https://images.unsplash.com/photo-1686191128892-34832e8f8b2e?w=400&h=400&fit=crop",
  },
  {
    id: "3",
    name: "Notion AI",
    url: "https://notion.so",
    site: "notion.so",
    category: "Productivity",
    pricing: "paid" as const,
    shortSummary: "Workspace AI",
    imageUrl: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=400&fit=crop",
  },
  {
    id: "4",
    name: "ElevenLabs",
    url: "https://elevenlabs.io",
    site: "elevenlabs.io",
    category: "Audio/Voice",
    pricing: "freemium" as const,
    shortSummary: "Voice cloning",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop",
  },
  {
    id: "5",
    name: "Claude",
    url: "https://claude.ai",
    site: "claude.ai",
    category: "Writing",
    pricing: "freemium" as const,
    shortSummary: "Reasoning/writing",
    imageUrl: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=400&h=400&fit=crop",
  },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [activeTab, setActiveTab] = useState("all");

  const filteredTools = selectedCategory === "All" 
    ? mockTools 
    : mockTools.filter(tool => tool.category === selectedCategory);

  const hasTools = filteredTools.length > 0;

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header />
      
      <main className="container mx-auto flex-1 px-4 sm:px-6 lg:px-8 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex items-center justify-between mb-6">
            <TabsList className="grid w-fit grid-cols-2">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="collections">Collections</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-6">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
            />
            
            <h2 className="text-foreground text-2xl font-bold leading-tight tracking-tight mb-4">
              My Saved Tools
            </h2>
            
            <div className={`grid gap-6 ${
              viewMode === "grid" 
                ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5" 
                : "grid-cols-1"
            }`}>
              {hasTools ? (
                filteredTools.map((tool) => (
                  <ToolCard
                    key={tool.id}
                    id={tool.id}
                    name={tool.name}
                    url={tool.url}
                    site={tool.site}
                    category={tool.category}
                    pricing={tool.pricing}
                    shortSummary={tool.shortSummary}
                    imageUrl={tool.imageUrl}
                  />
                ))
              ) : (
                <div className="col-span-full">
                  <EmptyState />
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="collections" className="mt-6">
            <div className="flex flex-col items-center justify-center rounded-xl bg-surface-container/50 border-2 border-dashed border-border p-12 min-h-[400px]">
              <span className="material-symbols-outlined text-5xl text-muted-foreground mb-4">
                folder
              </span>
              <h3 className="text-xl font-semibold text-foreground mb-2">No Collections Yet</h3>
              <p className="text-muted-foreground text-center max-w-sm mb-6">
                Create collections to organize your tools into groups.
              </p>
              <Button asChild className="rounded-full gap-2">
                <Link to="/collections">
                  <Plus className="h-4 w-4" />
                  <span>Create Collection</span>
                </Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      {/* Floating Action Button - Mobile Only */}
      <div className="fixed bottom-6 right-6 z-20 sm:hidden">
        <Button 
          asChild
          size="lg" 
          className="h-14 w-14 rounded-2xl shadow-lg p-0"
          aria-label="Add tool"
        >
          <Link to="/add-tool">
            <Plus className="h-7 w-7" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
