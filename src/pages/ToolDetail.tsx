import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const mockTool = {
  id: "1",
  name: "Nova AI",
  site: "nova-ai.com",
  url: "https://nova-ai.com",
  category: "Video Generation",
  pricing: "freemium" as const,
  platforms: ["Web", "macOS", "Windows"],
  modelType: "Proprietary (incl. GPT-4, Stable Diffusion)",
  sourceType: "Curated",
  bestFor: "Creating marketing clips",
  shortSummary: "AI-powered video generation for creating compelling marketing clips from simple text prompts.",
  overview: "Nova AI is a cutting-edge platform designed to revolutionize video creation for marketers, content creators, and small businesses. By leveraging advanced artificial intelligence, Nova AI transforms simple text prompts into dynamic, high-quality video clips suitable for a wide range of applications, from social media campaigns to product demonstrations.\n\nThe tool simplifies the entire video production process. Users can input a script, a blog post URL, or just a few keywords, and Nova's AI will generate a corresponding video complete with relevant stock footage, background music, voiceovers, and animated text. This enables users to produce professional-grade content in minutes, without needing any technical expertise in video editing.",
  tags: ["Video Generation", "Marketing", "Social Media", "Automation"],
  transcript: "Transcript data is not available for this tool at the moment. This section will contain the full text from the source material when available, providing deeper insights into the tool's features and use cases as discussed by experts or in demonstration videos.",
  detectedTools: [],
};

const ToolDetail = () => {
  const { id } = useParams();

  return (
    <div className="relative flex w-full flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-border bg-card/80 backdrop-blur-sm px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="icon" className="rounded-full">
            <Link to="/">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-lg font-bold leading-tight">{mockTool.name}</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="icon" className="rounded-full">
            <Link to="/search">
              <span className="material-symbols-outlined">search</span>
            </Link>
          </Button>
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9" 
            style={{ backgroundImage: 'url("https://api.dicebear.com/7.x/avataaars/svg?seed=User")' }}
            aria-label="User avatar"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Sidebar */}
          <aside className="lg:col-span-1 flex flex-col gap-6">
            {/* Tool Card */}
            <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-4xl">movie</span>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl font-bold tracking-tight">{mockTool.name}</h2>
                  <p className="text-muted-foreground text-sm">by Stellar Works</p>
                </div>
              </div>
              <p className="text-base text-muted-foreground">{mockTool.shortSummary}</p>
              <Button asChild className="w-full rounded-lg gap-2.5">
                <a href={mockTool.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  <span>Visit Website</span>
                </a>
              </Button>
            </div>

            {/* Quick Info */}
            <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-bold">Quick Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-muted-foreground mt-0.5">category</span>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Category</p>
                    <p className="font-semibold">{mockTool.category}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-muted-foreground mt-0.5">thumb_up</span>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Best For</p>
                    <p className="font-semibold">{mockTool.bestFor}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-muted-foreground mt-0.5">sell</span>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Pricing</p>
                    <p className="font-semibold capitalize">{mockTool.pricing}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Tags */}
            <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-bold">Tags</h3>
              <div className="flex gap-2 flex-wrap">
                {mockTool.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="rounded-full px-3 py-1 cursor-pointer hover:bg-primary/10 transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </aside>

          {/* Right Column - Main Content */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Overview */}
            <section>
              <h3 className="text-xl font-bold mb-4">Overview</h3>
              <div className="prose prose-base dark:prose-invert max-w-none text-muted-foreground space-y-4 whitespace-pre-line">
                {mockTool.overview}
              </div>
            </section>

            <div className="border-t border-border"></div>

            {/* Details */}
            <section>
              <h3 className="text-xl font-bold mb-4">Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                <div className="flex flex-col">
                  <p className="text-sm font-medium text-muted-foreground">URL</p>
                  <a className="font-semibold text-primary hover:underline" href={mockTool.url} target="_blank" rel="noopener noreferrer">
                    {mockTool.site}
                  </a>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-medium text-muted-foreground">Platforms</p>
                  <p className="font-semibold">{mockTool.platforms.join(", ")}</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-medium text-muted-foreground">Model Type</p>
                  <p className="font-semibold">{mockTool.modelType}</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-medium text-muted-foreground">Source Type</p>
                  <p className="font-semibold">{mockTool.sourceType}</p>
                </div>
              </div>
            </section>

            <div className="border-t border-border"></div>

            {/* Accordions */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="transcript">
                <AccordionTrigger>
                  <h3 className="text-xl font-bold">Transcript</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground">
                    {mockTool.transcript}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="detected-tools">
                <AccordionTrigger>
                  <h3 className="text-xl font-bold">Detected Tools</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground">
                    {mockTool.detectedTools.length === 0 ? (
                      <p>No other tools were detected in the source material for {mockTool.name}. When other tools are mentioned or used in conjunction, they will be listed here to help you discover related software and build your ideal tech stack.</p>
                    ) : (
                      <ul>
                        {mockTool.detectedTools.map((tool) => (
                          <li key={tool}>{tool}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ToolDetail;

