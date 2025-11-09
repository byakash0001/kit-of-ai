import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Onboarding = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="absolute top-0 left-0 right-0 z-10 p-4 md:px-10 md:py-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold">ToolNest</h2>
        </div>
      </header>

      <main className="flex-grow grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="hidden lg:flex items-center justify-center p-8 bg-primary/10 dark:bg-primary/20">
          <img 
            className="object-cover w-full h-full max-h-[80vh] rounded-xl" 
            alt="Abstract vibrant blue and purple waves representing artificial intelligence and data flow." 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=800&fit=crop"
          />
        </div>

        <div className="flex items-center justify-center w-full p-6 sm:p-8">
          <div className="max-w-md w-full flex flex-col gap-8">
            <div className="flex flex-col gap-3 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-black tracking-tight">
                Your Personal AI Toolkit, Amplified
              </h1>
              <p className="text-base text-muted-foreground">
                A central library to save your favorite AI tools from anywhere. Get smart, personalized recommendations to supercharge your creative and academic projects.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
                <span className="material-symbols-outlined text-primary mt-1">bookmark</span>
                <div>
                  <h3 className="font-bold">Centralize Your Tools</h3>
                  <p className="text-sm text-muted-foreground">Save and organize AI tools from any source.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
                <span className="material-symbols-outlined text-primary mt-1">smart_toy</span>
                <div>
                  <h3 className="font-bold">Get Smart Recommendations</h3>
                  <p className="text-sm text-muted-foreground">Our AI chat suggests the perfect tool for your task.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
                <span className="material-symbols-outlined text-primary mt-1">rocket_launch</span>
                <div>
                  <h3 className="font-bold">Accelerate Your Workflow</h3>
                  <p className="text-sm text-muted-foreground">Spend less time searching and more time creating.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Button asChild className="w-full rounded-full h-12" size="lg">
                <Link to="/auth/google">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25C22.56 11.45 22.49 10.68 22.36 9.92H11.5V14.29H17.84C17.58 15.77 16.79 17.06 15.55 17.91V20.44H19.31C21.45 18.51 22.56 15.66 22.56 12.25Z"></path>
                    <path d="M11.5 23C14.47 23 16.96 22.01 18.8 20.44L15.55 17.91C14.59 18.58 13.17 19.01 11.5 19.01C8.78 19.01 6.45 17.15 5.59 14.7H1.72V17.22C3.59 20.73 7.27 23 11.5 23Z"></path>
                    <path d="M5.59 14.7C5.37 14.07 5.25 13.4 5.25 12.72C5.25 12.03 5.37 11.37 5.59 10.73V8.21H1.72C0.96 9.72 0.5 11.39 0.5 13.22C0.5 15.05 0.96 16.72 1.72 18.24L5.59 14.7Z"></path>
                    <path d="M11.5 5.98C13.06 5.98 14.53 6.52 15.63 7.56L18.88 4.31C16.96 2.59 14.47 1.5 11.5 1.5C7.27 1.5 3.59 3.77 1.72 7.28L5.59 9.81C6.45 7.35 8.78 5.98 11.5 5.98Z"></path>
                  </svg>
                  <span>Sign in with Google</span>
                </Link>
              </Button>

              <Button asChild variant="outline" className="w-full rounded-full h-12" size="lg">
                <Link to="/">Continue as Guest</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full text-center p-6 bg-card border-t border-border">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm text-muted-foreground">
          <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
          <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
          <span>© 2024 ToolNest. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default Onboarding;

