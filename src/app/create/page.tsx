"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function Create() {
  //comportement
  // const formSchema = z.object({
  //   epwfile: z.string().min(2).max(50),
  // });
  const formSchema = z.object({
    projectName: z.string().min(2).max(50),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectName: "",
    },
  });
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  //render
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Simulation</CardTitle>
        <CardDescription>
          Make your own climate simulation.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="projectName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Name</FormLabel>
                  <FormControl>
                    <Input placeholder="CFA Simulation" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is the public display name of your project.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="projectName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type of simulation</FormLabel>
                  <FormControl>
                    <Input placeholder="CFA Simulation" {...field} />
                  </FormControl>
                  <FormDescription>
                    Choose whether you want a simple climate simulation or a more complex CFA simulation.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button type="submit">Submit</Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
      
    </Card>
  );
}

