import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-full bg-card/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-primary text-3xl">
              widgets
            </span>
            <h1 className="text-xl font-bold text-foreground">AI Library</h1>
          </div>
          
          <div className="flex-1 px-4 lg:px-16">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                className="w-full rounded-full border-0 bg-surface-container py-2 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:ring-inset transition-all"
                placeholder="Search for AI tools..."
                type="search"
              />
            </div>
          </div>
          
          <div className="flex items-center">
            <div 
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-border"
              style={{ backgroundImage: 'url("https://api.dicebear.com/7.x/avataaars/svg?seed=User")' }}
              role="img"
              aria-label="User profile avatar"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
