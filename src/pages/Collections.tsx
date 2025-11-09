import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { Plus, Folder, MoreVertical, Edit, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mockCollections = [
  {
    id: "1",
    name: "My First Collection",
    toolCount: 5,
    description: "Tools I use regularly",
  },
  {
    id: "2",
    name: "Video Tools",
    toolCount: 3,
    description: "All my video generation tools",
  },
];

const Collections = () => {
  const [collections] = useState(mockCollections);

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header />
      
      <main className="container mx-auto flex-1 px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Collections</h1>
          <Button className="rounded-full gap-2">
            <Plus className="h-4 w-4" />
            <span>Create Collection</span>
          </Button>
        </div>

        {collections.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-xl bg-surface-container/50 border-2 border-dashed border-border p-12 min-h-[400px]">
            <Folder className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No Collections Yet</h3>
            <p className="text-muted-foreground text-center max-w-sm mb-6">
              Create collections to organize your tools into groups.
            </p>
            <Button className="rounded-full gap-2">
              <Plus className="h-4 w-4" />
              <span>Create Collection</span>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {collections.map((collection) => (
              <Link
                key={collection.id}
                to={`/collection/${collection.id}`}
                className="flex flex-col gap-3 rounded-xl bg-card border border-border p-4 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Folder className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-bold text-lg">{collection.name}</h3>
                      <p className="text-muted-foreground text-sm">{collection.toolCount} tools</p>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild onClick={(e) => e.preventDefault()}>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Rename
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                {collection.description && (
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {collection.description}
                  </p>
                )}
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Collections;

