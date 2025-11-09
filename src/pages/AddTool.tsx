import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

const AddTool = () => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isManual, setIsManual] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    site: "",
    transcript: "",
    category: "Video Generation",
    pricing: "freemium" as "free" | "paid" | "freemium",
    platforms: [] as string[],
    modelType: "video" as string,
    bestFor: "",
  });

  const categories = [
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

  const handleFetchDetails = async () => {
    if (!url) return;
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setFormData({
        ...formData,
        name: "AI Video Generator",
        site: "https://aivideogen.com",
        transcript: "This is an AI-powered tool that generates video from text prompts. It's incredibly fast and produces high-quality results.",
      });
      setIsLoading(false);
    }, 2000);
  };

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
        setTagInput("");
      }
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag));
  };

  const handlePlatformToggle = (platform: string) => {
    setFormData({
      ...formData,
      platforms: formData.platforms.includes(platform)
        ? formData.platforms.filter(p => p !== platform)
        : [...formData.platforms, platform],
    });
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header />
      
      <main className="container mx-auto flex-1 px-4 sm:px-6 md:px-8 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col gap-8 rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
            {/* Header */}
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold leading-tight tracking-tight">Add a New AI Tool</h1>
              <p className="text-base text-muted-foreground">
                Paste a URL to auto-fill details, or add a tool manually.
              </p>
            </div>

            {/* URL Input */}
            {!isManual && (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
                  <Label className="flex flex-1 flex-col">
                    <span className="mb-1.5 text-sm font-medium">Tool URL (from YouTube, Reddit, Article, etc.)</span>
                    <div className="relative flex w-full items-center">
                      <span className="material-symbols-outlined pointer-events-none absolute left-3 text-muted-foreground">link</span>
                      <Input
                        className="h-12 pl-10 rounded-lg"
                        placeholder="https://example.com"
                        type="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                      />
                    </div>
                  </Label>
                  <Button 
                    onClick={handleFetchDetails}
                    disabled={!url || isLoading}
                    className="h-12 min-w-[8rem] rounded-lg"
                  >
                    {isLoading ? "Fetching..." : "Fetch Details"}
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  onClick={() => setIsManual(true)}
                  className="w-full justify-center sm:w-auto sm:justify-start"
                >
                  Add Manually Instead
                </Button>
              </div>
            )}

            {/* Loading State */}
            {isLoading && (
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-muted-foreground">Fetching details from URL...</p>
                  <p className="text-sm font-medium text-muted-foreground">30%</p>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-primary/20">
                  <div className="h-full rounded-full bg-primary transition-all" style={{ width: "30%" }}></div>
                </div>
              </div>
            )}

            {(isManual || formData.name) && (
              <>
                <div className="border-t border-border"></div>

                {/* Tool Details Form */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Title */}
                  <div className="sm:col-span-2">
                    <Label>
                      <span className="mb-1.5 text-sm font-medium block">Title</span>
                      <div className="relative flex w-full items-center">
                        <Input
                          className="h-12 rounded-lg"
                          placeholder="e.g., Awesome AI Tool"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        {formData.name && (
                          <span className="material-symbols-outlined absolute right-3 text-accent-orange">auto_awesome</span>
                        )}
                      </div>
                    </Label>
                  </div>

                  {/* Site */}
                  <div className="sm:col-span-2">
                    <Label>
                      <span className="mb-1.5 text-sm font-medium block">Site</span>
                      <div className="relative flex w-full items-center">
                        <Input
                          className="h-12 rounded-lg"
                          placeholder="e.g., https://awesometool.ai"
                          value={formData.site}
                          onChange={(e) => setFormData({ ...formData, site: e.target.value })}
                        />
                        {formData.site && (
                          <span className="material-symbols-outlined absolute right-3 text-accent-orange">auto_awesome</span>
                        )}
                      </div>
                    </Label>
                  </div>

                  {/* Transcript/Summary */}
                  <div className="sm:col-span-2">
                    <Label>
                      <span className="mb-1.5 text-sm font-medium block">Transcript / Summary</span>
                      <div className="relative w-full">
                        <Textarea
                          className="w-full rounded-lg min-h-[120px] resize-none"
                          placeholder="A brief description of the tool..."
                          value={formData.transcript}
                          onChange={(e) => setFormData({ ...formData, transcript: e.target.value })}
                        />
                        {formData.transcript && (
                          <span className="material-symbols-outlined absolute right-3 top-3 text-accent-orange">auto_awesome</span>
                        )}
                      </div>
                    </Label>
                  </div>

                  {/* Category */}
                  <div className="flex w-full flex-col">
                    <Label htmlFor="category-select" className="mb-1.5 text-sm font-medium">
                      Category
                    </Label>
                    <div className="relative">
                      <select
                        className="h-12 w-full appearance-none rounded-lg border border-input bg-background px-4 pr-10 focus:border-primary focus:ring-2 focus:ring-primary/30"
                        id="category-select"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      >
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                      <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                        expand_more
                      </span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex w-full flex-col">
                    <Label htmlFor="tags-input" className="mb-1.5 text-sm font-medium">
                      Tags
                    </Label>
                    <div className="flex min-h-[3rem] flex-wrap items-center gap-2 rounded-lg border border-input bg-background p-2 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/30">
                      {tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="rounded-full px-3 py-1 gap-1">
                          <span>{tag}</span>
                          <button
                            onClick={() => handleRemoveTag(tag)}
                            className="ml-1 hover:bg-muted rounded-full p-0.5"
                            aria-label={`Remove ${tag} tag`}
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                      <Input
                        className="min-w-[6rem] flex-1 border-none bg-transparent p-0 focus:ring-0"
                        id="tags-input"
                        placeholder="Add a tag..."
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        onKeyDown={handleAddTag}
                      />
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="sm:col-span-2">
                    <p className="mb-2 text-sm font-medium">Pricing</p>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {(["free", "freemium", "paid"] as const).map((price) => (
                        <Label
                          key={price}
                          className={`flex h-10 cursor-pointer items-center justify-center rounded-full border text-center text-sm font-medium transition-colors ${
                            formData.pricing === price
                              ? "border-primary bg-primary/20 text-primary"
                              : "border-input text-muted-foreground hover:bg-muted"
                          }`}
                        >
                          <input
                            className="sr-only"
                            name="pricing"
                            type="radio"
                            value={price}
                            checked={formData.pricing === price}
                            onChange={() => setFormData({ ...formData, pricing: price })}
                          />
                          {price.charAt(0).toUpperCase() + price.slice(1)}
                        </Label>
                      ))}
                    </div>
                  </div>

                  {/* Platforms */}
                  <div className="sm:col-span-2">
                    <p className="mb-2 text-sm font-medium">Platforms</p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-4">
                      {["Web", "iOS", "Android", "Desktop"].map((platform) => (
                        <Label key={platform} className="flex items-center gap-2 text-sm font-medium cursor-pointer">
                          <input
                            className="h-5 w-5 rounded border-input text-primary focus:ring-primary/30"
                            type="checkbox"
                            checked={formData.platforms.includes(platform.toLowerCase())}
                            onChange={() => handlePlatformToggle(platform.toLowerCase())}
                          />
                          {platform}
                        </Label>
                      ))}
                    </div>
                  </div>

                  {/* Model Type */}
                  <div className="sm:col-span-2">
                    <p className="mb-2 text-sm font-medium">Model Type</p>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {["llm", "image", "audio", "video"].map((type) => (
                        <Label
                          key={type}
                          className={`flex h-10 cursor-pointer items-center justify-center rounded-lg border text-center text-sm font-medium transition-colors ${
                            formData.modelType === type
                              ? "border-primary bg-primary/20 text-primary"
                              : "border-input text-muted-foreground hover:bg-muted"
                          }`}
                        >
                          <input
                            className="sr-only"
                            name="model"
                            type="radio"
                            value={type}
                            checked={formData.modelType === type}
                            onChange={() => setFormData({ ...formData, modelType: type })}
                          />
                          {type === "llm" ? "LLM" : type.charAt(0).toUpperCase() + type.slice(1)}
                        </Label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Bar */}
                <div className="flex flex-col-reverse items-center gap-3 border-t border-border pt-6 sm:flex-row sm:justify-end">
                  <Button asChild variant="outline" className="w-full sm:w-auto rounded-lg h-12">
                    <Link to="/">Cancel</Link>
                  </Button>
                  <Button className="w-full sm:w-auto rounded-lg h-12">
                    Save Tool
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddTool;

