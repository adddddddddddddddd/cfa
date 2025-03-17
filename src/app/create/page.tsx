"use client";
import React from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "../../components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { CircleCheck, Zap, Earth } from "lucide-react";
import { cn } from "../../lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const options = [
  {
    value: "CS",
    label: "Climate Simulation",
    description:
      "Have all the climate data and qualitative explanations about your epw file.",
    icon: <Earth className="mb-2.5 text-muted-foreground" />,
  },
  {
    value: "CFAS",
    label: "CFA Simulation",
    description:
      "Deepen the climate simulation by adding the types of buildings and their characteristics.",
    icon: <Zap className="mb-2.5 text-muted-foreground" />,
  },
];

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
    <div className="flex justify-center items-center h-svh">
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle>Create a Simulation</CardTitle>
          <CardDescription>Make your own simulation.</CardDescription>
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
                      <Input placeholder="CFA sim" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is the public display name of your simulation.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="projectName"
                render={({ field }) => (
                  <FormItem >
                    <FormLabel>EPW File</FormLabel>
                    <FormControl>
                      <Input
                        id="epwfile"
                        type="file"
                        className="mt-1 file:pt-0.5"
                      />
                    </FormControl>
                    <FormDescription>
                      Choose the EPW file you want informations about.
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
                      <RadioGroup.Root
                        defaultValue={options[0].value}
                        className="max-w-md w-full grid grid-cols-2 gap-4"
                      >
                        {options.map((option) => (
                          <RadioGroup.Item
                            key={option.value}
                            value={option.value}
                            className={cn(
                              "relative group ring-[1px] ring-border rounded py-2 px-3 text-start",
                              "data-[state=checked]:ring-2 data-[state=checked]:ring-blue-500"
                            )}
                          >
                            <CircleCheck className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 h-6 w-6 text-primary fill-blue-500 stroke-white group-data-[state=unchecked]:hidden" />

                            {option.icon}
                            <span className="font-semibold tracking-tight">
                              {option.label}
                            </span>
                            <p className="text-xs">{option.description}</p>
                          </RadioGroup.Item>
                        ))}
                      </RadioGroup.Root>
                    </FormControl>
                    {/* <FormDescription>
                      Choose whether you want a simple climate simulation or a
                      more complex CFA simulation.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button type="submit">Submit</Button>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
