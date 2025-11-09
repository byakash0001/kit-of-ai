import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import ToolCard from "@/components/ToolCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const mockTools = [
  {
    id: "1",
    name: "Midjourney",
    url: "https://midjourney.com",
    site: "midjourney.com",
    category: "Image Generation",
    pricing: "paid" as const,
    shortSummary: "An independent research lab exploring new mediums of thought and expanding the imaginative powers of the human species.",
  },
  {
    id: "2",
    name: "Notion AI",
    url: "https://notion.so",
    site: "notion.so",
    category: "Productivity",
    pricing: "freemium" as const,
    shortSummary: "Access the limitless power of AI, right inside Notion. Work faster. Write better. Think bigger. All in your connected workspace.",
  },
  {
    id: "3",
    name: "Vercel",
    url: "https://vercel.com",
    site: "vercel.com",
    category: "Coding/Dev",
    pricing: "free" as const,
    shortSummary: "The platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.",
  },
];

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [pricing, setPricing] = useState<string>("all");

  const categories = [
    "Image Generation",
    "Text & Writing",
    "Video & Animation",
    "Code & Development",
  ];

  const toggleCategory = (category: string) => {
    setSelectedCategories(
      selectedCategories.includes(category)
        ? selectedCategories.filter((c) => c !== category)
        : [...selectedCategories, category]
    );
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header />
      
      <main className="w-full grow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Left Sidebar: Filters */}
            <aside className="lg:col-span-3">
              <div className="sticky top-24 rounded-xl border border-border bg-card p-4">
                <div className="flex items-center justify-between pb-4">
                  <h2 className="text-lg font-bold">Filters</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSelectedCategories([]);
                      setPricing("all");
                    }}
                  >
                    Clear All
                  </Button>
                </div>

                <Accordion type="multiple" className="w-full">
                  <AccordionItem value="category">
                    <AccordionTrigger>Category</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        {categories.map((category) => (
                          <label key={category} className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              className="h-4 w-4 rounded border-input text-primary focus:ring-primary/50"
                              checked={selectedCategories.includes(category)}
                              onChange={() => toggleCategory(category)}
                            />
                            <span className="text-sm text-muted-foreground">{category}</span>
                          </label>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="pricing">
                    <AccordionTrigger>Pricing Model</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        {["all", "free", "freemium", "paid"].map((price) => (
                          <label key={price} className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="radio"
                              name="pricing"
                              className="h-4 w-4 border-input text-primary focus:ring-primary/50"
                              checked={pricing === price}
                              onChange={() => setPricing(price)}
                            />
                            <span className="text-sm text-muted-foreground capitalize">{price}</span>
                          </label>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </aside>

            {/* Right Column: Search and Results */}
            <div className="lg:col-span-9">
              <h1 className="text-4xl font-black tracking-tight mb-6">Advanced Search</h1>

              {/* Search Bar */}
              <div className="py-6">
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-2xl">
                    search
                  </span>
                  <Input
                    className="h-14 pl-12 pr-4 rounded-xl text-base"
                    placeholder="Search tools by name or keyword..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Results Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6">
                <p className="text-sm text-muted-foreground">
                  Showing <span className="font-semibold text-foreground">{mockTools.length}</span> of{" "}
                  <span className="font-semibold text-foreground">150</span> tools
                </p>
                <div className="flex items-center gap-2">
                  <label className="text-sm text-muted-foreground" htmlFor="sort">
                    Sort by:
                  </label>
                  <select
                    className="rounded-lg border border-input bg-background text-sm px-3 py-2 focus:border-primary focus:ring-primary/50"
                    id="sort"
                  >
                    <option>Date Added</option>
                    <option>Name (A-Z)</option>
                    <option>Name (Z-A)</option>
                  </select>
                </div>
              </div>

              {/* Tool Card Grid */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {mockTools.map((tool) => (
                  <ToolCard
                    key={tool.id}
                    id={tool.id}
                    name={tool.name}
                    url={tool.url}
                    site={tool.site}
                    category={tool.category}
                    pricing={tool.pricing}
                    shortSummary={tool.shortSummary}
                  />
                ))}
              </div>

              {mockTools.length === 0 && (
                <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-card text-center p-12 min-h-[400px]">
                  <span className="material-symbols-outlined text-5xl text-muted-foreground mb-4">
                    search_off
                  </span>
                  <h3 className="mt-4 text-lg font-bold">No Tools Found</h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-xs">
                    Try adjusting your filters or clearing them to see all available tools in your library.
                  </p>
                  <Button className="mt-6 rounded-lg" onClick={() => {
                    setSelectedCategories([]);
                    setPricing("all");
                    setSearchQuery("");
                  }}>
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Search;

