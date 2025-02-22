
import { SidebarProvider } from "@/components/ui/sidebar";
import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-quran-light">
        <Sidebar />
        <main className="flex-1 p-6 transition-all duration-300 ease-in-out animate-fadeIn">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
