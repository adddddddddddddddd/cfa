"use client";
import { SidebarProvider } from "../components/ui/sidebar";
import { AppSidebar } from "../components/app-sidebar";
import SimulationCard from "../components/SimulationCard";
import { Button } from "../components/ui/button";
import { Plus } from "lucide-react";
import { Come } from "../components/côme"
import { useAuth } from "../context/AuthContext";



export default function Home() {
  const { user } = useAuth();
  const username = "Côme";
  return (
      <div>
        {/* <Come></Come> */}
        <div className="flex">
        <div>
          <SidebarProvider>
            <AppSidebar></AppSidebar>
          </SidebarProvider>
        </div>
        <div className="p-8 w-full">
          <section className="border-grid pb-4">
            <div className="flex flex-col p-8 space-y-4">
              <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
                Welcome {user?.email} 👋
              </h1>
              <p className="max-w-2xl text-lg font-light text-foreground">
                Here are your simulations and the simulations of the CFA community.
              </p>
            </div>
          </section>
          <section className="border-grid pb-4 mb-4 ">
            <div className="flex flex-col px-8 space-y-4 ">
              <h1 className="text-xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
                My simulations
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
                <SimulationCard></SimulationCard>
                <SimulationCard></SimulationCard>
                <SimulationCard></SimulationCard>
                <SimulationCard></SimulationCard>
                <SimulationCard></SimulationCard>
                <SimulationCard></SimulationCard>

              </div>
            </div>
          </section>
          <section className="flex flex-col items-center justify-center p-8 space-y-4 border-grid">
          <h1 className="text-xl font-bold leading-tight tracking-tighter md:text-xl justify-center items-center lg:leading-[1.1]">
                You did not find what you were looking for? Create your own simulation!
              </h1>
              <div className="flex"> <Button><Plus/> Create Simulation</Button></div>
          </section>
        </div>
      </div>
      </div>

  );
}
