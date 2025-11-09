import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import CategoryFilter from "@/components/CategoryFilter";
import ToolCard from "@/components/ToolCard";
import EmptyState from "@/components/EmptyState";

const mockTools = [
  {
    id: 1,
    name: "ChatGPT",
    description: "A powerful language model for conversation and text generation.",
    category: "Writing",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Midjourney",
    description: "Generate high-quality images from textual descriptions.",
    category: "Design",
    imageUrl: "https://images.unsplash.com/photo-1686191128892-34832e8f8b2e?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Notion AI",
    description: "Integrate AI assistance into your notes and documents.",
    category: "Productivity",
    imageUrl: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Figma AI",
    description: "A collaborative interface design tool with AI features.",
    category: "Design",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "GitHub Copilot",
    description: "Your AI pair programmer, helping you write code faster.",
    category: "Code",
    imageUrl: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=400&h=400&fit=crop",
  },
];

const Index = () => {
  const hasTools = mockTools.length > 0;

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header />
      
      <main className="container mx-auto flex-1 px-4 sm:px-6 lg:px-8 py-6">
        <CategoryFilter />
        
        <h2 className="text-foreground text-2xl font-bold leading-tight tracking-tight mb-4">
          My Saved Tools
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {hasTools ? (
            mockTools.map((tool) => (
              <ToolCard
                key={tool.id}
                name={tool.name}
                description={tool.description}
                category={tool.category}
                imageUrl={tool.imageUrl}
              />
            ))
          ) : (
            <EmptyState />
          )}
        </div>
      </main>
      
      {/* Floating Action Button - Mobile Only */}
      <div className="fixed bottom-6 right-6 z-20 sm:hidden">
        <Button 
          size="lg" 
          className="h-14 w-14 rounded-2xl shadow-lg p-0"
          aria-label="Add tool"
        >
          <Plus className="h-7 w-7" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
