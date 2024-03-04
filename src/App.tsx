"use client";

import { Button, GradientText, Navbar } from "../lib/components";
import "./index.css";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-center">
      <Button>Learn More</Button>
      <Button as="link" href="/test">
        Learn More (Link)
      </Button>

      <Button variant="outlined">Learn More</Button>
      <Navbar />

      <GradientText>Gradient Text</GradientText>
    </main>
  );
}
