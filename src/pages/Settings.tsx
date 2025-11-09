import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header />
      
      <main className="container mx-auto flex-1 px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Button asChild variant="ghost" size="icon" className="rounded-full">
              <Link to="/">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <h1 className="text-3xl font-bold">Settings</h1>
          </div>

          <div className="flex flex-col gap-6">
            {/* Account Section */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-xl font-bold mb-4">Account</h2>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-16" 
                  style={{ backgroundImage: 'url("https://api.dicebear.com/7.x/avataaars/svg?seed=User")' }}
                  aria-label="User avatar"
                />
                <div>
                  <p className="font-semibold">User Name</p>
                  <p className="text-sm text-muted-foreground">user@example.com</p>
                </div>
              </div>
              <Button variant="outline" className="rounded-lg">
                Sign in with Google
              </Button>
            </div>

            {/* Theme Section */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-xl font-bold mb-4">Theme</h2>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <Label htmlFor="dark-mode">Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">Toggle dark mode theme</p>
                </div>
                <Switch id="dark-mode" />
              </div>
            </div>

            {/* Extension/Bookmarklet Section */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-xl font-bold mb-4">Browser Extension / Bookmarklet</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Install our browser extension or bookmarklet to quickly add tools from any webpage.
              </p>
              <Accordion type="single" collapsible>
                <AccordionItem value="extension">
                  <AccordionTrigger>Install Extension</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>1. Click the extension icon in your browser</p>
                      <p>2. Follow the installation instructions</p>
                      <p>3. Start adding tools from any webpage!</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="bookmarklet">
                  <AccordionTrigger>Install Bookmarklet</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>1. Drag the bookmarklet button to your bookmarks bar</p>
                      <p>2. Click it on any webpage to add the tool</p>
                      <Button variant="outline" className="mt-4">
                        Install Bookmarklet
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Data Section */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-xl font-bold mb-4">Data</h2>
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Export Data</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Download all your data in JSON format.
                  </p>
                  <Button variant="outline" className="rounded-lg">
                    Export My Data
                  </Button>
                </div>
                <div className="border-t border-border pt-4">
                  <h3 className="font-semibold mb-2 text-destructive">Delete Account</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Permanently delete your account and all associated data.
                  </p>
                  <Button variant="destructive" className="rounded-lg">
                    Delete Account
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;

