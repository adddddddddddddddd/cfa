import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "./ui/card";

export default function SimulationCard() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Titre</CardTitle>
          <CardDescription>24/02/2024</CardDescription>
        </CardHeader>
        <CardContent>
          <img
            src="https://placehold.co/1600x1600"
            alt="Image of the"
            className="relative animate-float w-full max-w-lg mx-auto aspect-video  object-cover rounded-sm"
          />
        </CardContent>
        {/* <CardFooter>
          <p>Card Footer</p>
        </CardFooter> */}
      </Card>
    </div>
  );
}
