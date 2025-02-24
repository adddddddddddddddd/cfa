import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import  SimulationCard  from "@/components/SimulationCard";
let username = "Côme";

export default function Home() {
  return (
    <div>
      <div className="flex">
        <div>
          <SidebarProvider>
            <AppSidebar></AppSidebar>
          </SidebarProvider>
        </div>
        <div className="p-4 w-full">
          <section className="border-grid pb-4">
            <div className="flex flex-col p-8 space-y-4">
              <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
                Bienvenue {username} 👋
              </h1>
              <p className="max-w-2xl text-lg font-light text-foreground">
                Ici sont regroupées tes simulations et celles de la communauté.
              </p>
            </div>
          </section>
          <section className="border-grid pb-4 mb-4 ">
            <div className="flex flex-col px-8 space-y-4 ">
              <h1 className="text-xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
                Mes simulations
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <SimulationCard></SimulationCard>
                <SimulationCard></SimulationCard>
                <SimulationCard></SimulationCard>


              </div>
            </div>
          </section>
          <section className="border-grid pb-4 mb-4 ">
            <div className="flex flex-col px-8 space-y-4 ">
              <h1 className="text-xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
                Simulations de la communauté
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <SimulationCard></SimulationCard>
                <SimulationCard></SimulationCard>
                <SimulationCard></SimulationCard>
                <SimulationCard></SimulationCard>
                <SimulationCard></SimulationCard>
                <SimulationCard></SimulationCard>


              </div>
            </div>
          </section>
          <section>
            
          </section>
        </div>
      </div>
    </div>
  );
}
