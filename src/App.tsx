"use client";

import { Navbar } from "../lib/components";
import Card from "../lib/components/Card";
import { BrainIcon, DNAIcon, PeerHelpIcon } from "../lib/components/Icons";
import "./index.css";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-center gap-10">
      <Navbar />

      <div className="flex flex-wrap items-center justify-center gap-7">
        <Card
          title="Card Title"
          content="Card Content"
          icon={<BrainIcon />}
          buttonText="Click Me"
        />
        <Card
          title="Card Title"
          content="Card Content"
          icon={<DNAIcon />}
          buttonText="Click Me"
        />
        <Card
          title="Card Title"
          content="Card Content"
          icon={<PeerHelpIcon />}
          buttonText="Click Me"
        />
      </div>
    </main>
  );
}
