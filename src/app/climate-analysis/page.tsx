"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ClimateAnalysisCard } from "@/components/climate-analysis-card";
import React from "react";


const climateAnalysisCardDescription = [
  {
    value: "heatmap",
    title: "Heatmap",
    description: "This is a heatmap plotting the temperature of your EPW file.",
    section:"Heatmap"
  },
  {
    value: "yearlyTemperature",
    title: "Yearly Temperature",
    description: "This is a temperature chart plotting the temperature of your EPW file during a year.",
    section:"Temperature"
  },
  {
    value: "monthlyAveragesTemperature",
    title: "Yearly Temperature with Montly Averages Temperatures",
    description: "This is a temperature chart plotting the temperature of your EPW file during a year alongside averages for the daily temperature every month.",
    section:"Temperature"

  },
  {
    value: "psychometric",
    title: "Psychometric Chart",
    description: "This is a psychometric chart plotting the temperature and the humidty of your EPW file during a year.",
    section:"Temperature"

  },
  {
    value: "monthlyCooling",
    title: "Monthly Heating and Cooling Chart",
    description: "This is a chart plotting the heating and the heating of your EPW file during a year.",
    section:"Heating"

  },
];

export default function ClimateAnalysis() {
  return (
    <div className="flex">
      <div>
        <SidebarProvider>
          <AppSidebar></AppSidebar>
        </SidebarProvider>
      </div>
      <div className="p-8 w-full">
        <section className="pb-4">
          <div className="flex flex-col p-8 space-y-4">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
              Climate Analysis
            </h1>
            <p className="max-w-2xl text-lg font-light text-foreground">
              Here are the results of the climate analysis of your EPW file.
            </p>
          </div>
        </section>
        <section className="pb-4 mb-4">
          <div className="flex flex-col px-8 space-y-4 ">
            <h1 className="text-xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
              Heatmaps
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {climateAnalysisCardDescription.filter(item => item.section === "Heatmap").map(item => (
                <ClimateAnalysisCard key={item.value} title={item.title} description={item.description}/>
            ))}
            </div>
          </div>
        </section>
        <section className="pb-4 mb-4">
          <div className="flex flex-col px-8 space-y-4 ">
            <h1 className="text-xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
              Temperature
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {climateAnalysisCardDescription.filter(item => item.section === "Temperature").map(item => (
                <ClimateAnalysisCard key={item.value} title={item.title} description={item.description}/>
            ))}
            </div>
          </div>
        </section>
        <section className="pb-4 mb-4">
          <div className="flex flex-col px-8 space-y-4 ">
            <h1 className="text-xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
              Heating
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {climateAnalysisCardDescription.filter(item => item.section === "Heating").map(item => (
                <ClimateAnalysisCard key={item.value} title={item.title} description={item.description}/>
            ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
