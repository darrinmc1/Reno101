import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ResourceCard } from "@/components/ResourceCard";
import { ResourceFilter } from "@/components/ResourceFilter";
import { ResourceList } from "@/components/ResourceList";

export default function ResearchPage() {
  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Research & Insights</h1>
      <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
        Gain a competitive edge with our curated collection of research papers, market analyses,
        and expert reports. Understand the latest trends, cost breakdowns, and future outlooks
        in the home renovation industry. Make smarter decisions with data-driven insights.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold mb-4">Filter Research</h2>
          <ResourceFilter />
        </div>
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Featured Research</h2>
          <ResourceList />
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Explore Our Resources</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Beyond research, we offer a wealth of practical guides, how-to articles, and
          expert tips to help you navigate your renovation journey with confidence.
        </p>
        <Button asChild size="lg" variant="outline">
          <Link href="/resources">View All Resources</Link>
        </Button>
      </div>
    </main>
  );
}
