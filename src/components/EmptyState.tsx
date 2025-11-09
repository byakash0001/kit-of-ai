import { Button } from "@/components/ui/button";
import { SearchX, PlusCircle } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="col-span-full flex flex-col items-center justify-center rounded-xl bg-surface-container/50 border-2 border-dashed border-border p-8 min-h-[400px]">
      <SearchX className="h-16 w-16 text-muted-foreground mb-4" />
      <h3 className="text-xl font-semibold text-foreground">No Tools Found</h3>
      <p className="text-muted-foreground mt-2 text-center max-w-sm">
        Your library is currently empty. Start by adding your favorite AI tools to build your personal collection.
      </p>
      <Button className="mt-6 rounded-full gap-2" size="lg">
        <PlusCircle className="h-5 w-5" />
        <span>Add Your First Tool</span>
      </Button>
    </div>
  );
};

export default EmptyState;
