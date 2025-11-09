import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { ArrowLeft, X } from "lucide-react";

const mockTools = [
  {
    id: "1",
    name: "Runway",
    site: "runwayml.com",
    url: "https://runwayml.com",
    category: "Video Generation",
    pricing: "freemium",
    platforms: ["Web"],
    modelType: "Video",
    bestFor: "Quick VFX/video generation",
    shortSummary: "Quick VFX/video generation",
  },
  {
    id: "2",
    name: "Midjourney",
    site: "midjourney.com",
    url: "https://midjourney.com",
    category: "Image Generation",
    pricing: "paid",
    platforms: ["Web"],
    modelType: "Image",
    bestFor: "Stylized images",
    shortSummary: "Stylized images",
  },
  {
    id: "3",
    name: "ElevenLabs",
    site: "elevenlabs.io",
    url: "https://elevenlabs.io",
    category: "Audio/Voice",
    pricing: "freemium",
    platforms: ["Web"],
    modelType: "Audio",
    bestFor: "Voice cloning",
    shortSummary: "Voice cloning",
  },
];

const Compare = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header />
      
      <main className="container mx-auto flex-1 px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-4 mb-6">
          <Button asChild variant="ghost" size="icon" className="rounded-full">
            <Link to="/">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Compare Tools</h1>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 font-semibold">Feature</th>
                {mockTools.map((tool) => (
                  <th key={tool.id} className="text-left p-4 font-semibold min-w-[250px]">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-lg">{tool.name}</h3>
                        <a href={tool.url} className="text-primary text-sm hover:underline" target="_blank" rel="noopener noreferrer">
                          {tool.site}
                        </a>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-4 font-medium text-muted-foreground">Best For</td>
                {mockTools.map((tool) => (
                  <td key={tool.id} className="p-4">{tool.bestFor}</td>
                ))}
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-medium text-muted-foreground">Pricing</td>
                {mockTools.map((tool) => (
                  <td key={tool.id} className="p-4">
                    <Badge variant="outline" className="rounded-full capitalize">
                      {tool.pricing}
                    </Badge>
                  </td>
                ))}
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-medium text-muted-foreground">Platforms</td>
                {mockTools.map((tool) => (
                  <td key={tool.id} className="p-4">{tool.platforms.join(", ")}</td>
                ))}
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-medium text-muted-foreground">Model Type</td>
                {mockTools.map((tool) => (
                  <td key={tool.id} className="p-4">{tool.modelType}</td>
                ))}
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-medium text-muted-foreground">Category</td>
                {mockTools.map((tool) => (
                  <td key={tool.id} className="p-4">
                    <Badge variant="secondary" className="rounded-full">
                      {tool.category}
                    </Badge>
                  </td>
                ))}
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-medium text-muted-foreground">Summary</td>
                {mockTools.map((tool) => (
                  <td key={tool.id} className="p-4">{tool.shortSummary}</td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-medium text-muted-foreground">Actions</td>
                {mockTools.map((tool) => (
                  <td key={tool.id} className="p-4">
                    <div className="flex gap-2">
                      <Button asChild variant="outline" size="sm" className="rounded-lg">
                        <Link to={`/tool/${tool.id}`}>View Details</Link>
                      </Button>
                      <Button variant="outline" size="sm" className="rounded-lg">
                        Add to Collection
                      </Button>
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground">
            You can compare up to 3 tools side-by-side. Select tools from your library to add them to the comparison.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Compare;

