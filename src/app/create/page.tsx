"use client"
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
 
import { z } from "zod"
 
const formSchema = z.object({
  epwfile: z.string().min(2).max(50),
})

export default function Create() {
  return (
    <div className="flex flex-col w-full h-svh justify-center items-center">
      <div>
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
          Enter your EPW file
        </h1>
        <p className="max-w-2xl text-lg font-light text-foreground">
          Upload your EPW file to start creating your simulation.
        </p>
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="picture">EPW File</Label>
        <Input id="picture" type="file" />
      </div>
    </div>
  );
}
