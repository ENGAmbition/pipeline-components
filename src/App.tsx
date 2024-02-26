"use client";

import { Button, Navbar } from "../lib/components";
import "./index.css";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen w-screen">
      <Button>Learn More</Button>
      <Navbar />
    </main>
  );
}
