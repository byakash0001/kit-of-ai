import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Send } from "lucide-react";

const mockChatHistory = [
  {
    id: "1",
    query: "Tools for image generation",
    active: true,
  },
  {
    id: "2",
    query: "Video editing tools",
    active: false,
  },
  {
    id: "3",
    query: "Free writing assistants",
    active: false,
  },
  {
    id: "4",
    query: "Best AI for coding",
    active: false,
  },
];

const mockRecommendations = [
  {
    id: "1",
    name: "Midjourney",
    rationale: "Best for high-quality, artistic image generation.",
    category: "Image Generation",
    pricing: "Subscription",
    platform: "Web/Discord",
    rank: 1,
  },
  {
    id: "2",
    name: "DALL-E 3",
    rationale: "Excellent for creative flexibility and integration with ChatGPT.",
    category: "Image Generation",
    pricing: "Freemium",
    platform: "Web",
    rank: 2,
  },
  {
    id: "3",
    name: "Canva AI",
    rationale: "Great for beginners and quick social media graphics.",
    category: "Design Suite",
    pricing: "Freemium",
    platform: "Web/App",
    rank: 3,
  },
];

const Chat = () => {
  const [message, setMessage] = useState("");
  const [activeChat, setActiveChat] = useState("1");

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <aside className="hidden md:flex h-full w-64 flex-col bg-surface-container dark:bg-surface-container p-4 border-r border-border">
        <div className="flex flex-col gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" 
              style={{ backgroundImage: 'url("https://api.dicebear.com/7.x/avataaars/svg?seed=User")' }}
              aria-label="User avatar"
            />
            <div className="flex flex-col">
              <h1 className="text-base font-medium">ToolNest</h1>
              <p className="text-muted-foreground text-sm">Solo Creator Plan</p>
            </div>
          </div>
          <Button className="w-full rounded-full gap-2">
            <span className="material-symbols-outlined text-lg">add</span>
            <span>New Chat</span>
          </Button>
        </div>

        <div className="flex flex-col gap-2 flex-1 overflow-y-auto">
          {mockChatHistory.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setActiveChat(chat.id)}
              className={`flex items-center gap-3 px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                chat.active
                  ? "bg-primary/20 text-primary"
                  : "text-muted-foreground hover:bg-surface-container"
              }`}
            >
              <span className="material-symbols-outlined text-lg">chat_bubble</span>
              <span className="truncate text-left">{chat.query}</span>
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-1 mt-4">
          <button className="flex items-center gap-3 px-3 py-2 cursor-pointer rounded-full text-muted-foreground hover:bg-surface-container text-sm font-medium">
            <span className="material-symbols-outlined text-lg">settings</span>
            <span>Settings</span>
          </button>
          <button className="flex items-center gap-3 px-3 py-2 cursor-pointer rounded-full text-muted-foreground hover:bg-surface-container text-sm font-medium">
            <span className="material-symbols-outlined text-lg">logout</span>
            <span>Log out</span>
          </button>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex flex-1 flex-col">
        <header className="flex h-16 shrink-0 items-center border-b border-border px-6">
          <h2 className="text-lg font-medium">Tools for image generation</h2>
        </header>

        <div className="flex flex-1 flex-col overflow-y-auto p-6">
          <div className="flex-1"></div>

          {/* Conversation */}
          <div className="flex flex-col gap-6">
            {/* User Message */}
            <div className="flex items-end gap-3 justify-end">
              <div className="flex flex-1 flex-col gap-1 items-end max-w-xl">
                <p className="text-muted-foreground text-[13px] font-normal">You</p>
                <p className="text-base font-normal flex max-w-xl rounded-xl rounded-br-none px-4 py-3 bg-primary/20 text-primary">
                  I need a tool to generate images for my blog posts
                </p>
              </div>
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0" 
                style={{ backgroundImage: 'url("https://api.dicebear.com/7.x/avataaars/svg?seed=User")' }}
                aria-label="User avatar"
              />
            </div>

            {/* AI Response */}
            <div className="flex gap-3">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 shrink-0" 
                style={{ backgroundImage: 'url("https://api.dicebear.com/7.x/bottts/svg?seed=Gemini")' }}
                aria-label="AI bot avatar"
              />
              <div className="flex flex-1 flex-col items-stretch gap-4">
                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-base font-bold">Gemini</p>
                    <p className="text-muted-foreground text-sm font-normal">Just now</p>
                  </div>
                  <p className="text-base font-normal">
                    Here are the top 3 tools from your library for image generation:
                  </p>
                </div>

                {/* Recommendation Cards */}
                <div className="flex flex-col gap-4">
                  {mockRecommendations.map((rec) => (
                    <div key={rec.id} className="flex flex-col rounded-xl bg-surface-container dark:bg-surface-container p-4">
                      <div className="flex w-full flex-col gap-3">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-muted-foreground text-sm font-normal">#{rec.rank}</p>
                            <p className="text-lg font-bold">{rec.name}</p>
                          </div>
                          <Button asChild className="rounded-full h-10 px-6">
                            <Link to={`/tool/${rec.id}`}>View Tool</Link>
                          </Button>
                        </div>
                        <p className="text-muted-foreground text-base font-normal">{rec.rationale}</p>
                        <div className="flex gap-2 flex-wrap">
                          <Badge variant="secondary" className="rounded-lg px-3 py-1">
                            {rec.category}
                          </Badge>
                          <Badge variant="secondary" className="rounded-lg px-3 py-1">
                            {rec.pricing}
                          </Badge>
                          <Badge variant="secondary" className="rounded-lg px-3 py-1">
                            {rec.platform}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-6 pt-4 border-t border-border">
          <div className="relative">
            <Input
              className="w-full h-14 rounded-full border-border pl-6 pr-16"
              placeholder="Ask about AI tools in your library..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && message.trim()) {
                  // Handle send
                  setMessage("");
                }
              }}
            />
            <Button
              size="icon"
              className="absolute right-2 top-2 h-10 w-10 rounded-full"
              disabled={!message.trim()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Recommendations are based on tools in your saved library only.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Chat;

