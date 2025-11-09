import { Search, Plus, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-full bg-card/80 dark:bg-card/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <span className="material-symbols-outlined text-primary text-3xl">
              widgets
            </span>
            <h1 className="text-xl font-bold text-foreground">ToolNest</h1>
          </Link>
          
          {/* Search Bar - Prominent */}
          <div className="flex-1 max-w-2xl px-4 lg:px-8">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                className="w-full rounded-full border-0 bg-surface-container dark:bg-surface-container py-2.5 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:ring-inset transition-all text-sm"
                placeholder="Search for AI tools..."
                type="search"
                aria-label="Search for AI tools"
              />
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Add Tool Button - Desktop */}
            <Button 
              asChild
              className="hidden sm:flex rounded-full gap-2"
              size="sm"
            >
              <Link to="/add-tool">
                <Plus className="h-4 w-4" />
                <span>Add Tool</span>
              </Link>
            </Button>
            
            {/* Chat Button - Desktop */}
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="hidden sm:flex rounded-full"
              aria-label="Open chat"
            >
              <Link to="/chat">
                <MessageCircle className="h-5 w-5" />
              </Link>
            </Button>
            
            {/* Profile Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-border hover:ring-primary transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  style={{ backgroundImage: 'url("https://api.dicebear.com/7.x/avataaars/svg?seed=User")' }}
                  aria-label="User profile menu"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/collections">Collections</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
