import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PlusCircle } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="col-span-full flex flex-col items-center justify-center rounded-xl bg-surface-container/50 dark:bg-surface-container/50 border-2 border-dashed border-border p-8 min-h-[400px]">
      <span className="material-symbols-outlined text-5xl text-muted-foreground mb-4">
        search_off
      </span>
      <h3 className="text-xl font-semibold text-foreground mb-2">No Tools Found</h3>
      <p className="text-muted-foreground text-center max-w-sm mb-6">
        Your library is currently empty. Start by adding your favorite AI tools to build your personal collection.
      </p>
      <Button asChild className="rounded-full gap-2" size="lg">
        <Link to="/add-tool">
          <PlusCircle className="h-5 w-5" />
          <span>Add Your First Tool</span>
        </Link>
      </Button>
    </div>
  );
};

export default EmptyState;
