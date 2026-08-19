import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ResourceCard } from "@/components/ResourceCard";
import { ResourceFilter } from "@/components/ResourceFilter";
import { ResourceList } from "@/components/ResourceList";

export default function ResourcesPage() {
  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Reno101 Resources</h1>
      <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
        Dive deep into the world of home renovation with our comprehensive collection of guides,
        tips, and expert advice. Whether you're planning a small update or a major overhaul,
        our resources are designed to empower you every step of the way.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <ResourceFilter />
        </div>
        <div className="md:col-span-2">
          <ResourceList />
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Explore Our Research & Insights</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Stay ahead of the curve with our in-depth research, market trends, and data-driven
          insights into the home renovation industry. Understand the latest developments and make
          informed decisions for your projects.
        </p>
        <Button asChild size="lg">
          <Link href="/research">Discover Research</Link>
        </Button>
      </div>
    </main>
  );
}
