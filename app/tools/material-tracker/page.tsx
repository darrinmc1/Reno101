"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpDown, Bell, ExternalLink, Filter, Search, Sparkles, Star } from "lucide-react"
import Link from "next/link"

export default function MaterialTrackerPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("all")
  const [sortBy, setSortBy] = useState("price-low")
  const [location, setLocation] = useState("97201")

  const materials = [
    {
      id: 1,
      name: "Quartz Countertop",
      description: "Premium quartz countertop, white with gray veining",
      category: "countertops",
      unit: "per sq ft",
      stores: [
        { name: "Home Depot", price: 65.99, inStock: true, distance: 3.2 },
        { name: "Lowe's", price: 68.5, inStock: true, distance: 5.1 },
        { name: "Stone Warehouse", price: 59.99, inStock: true, distance: 7.8 },
        { name: "Countertop Specialists", price: 72.0, inStock: true, distance: 4.3 },
      ],
    },
    {
      id: 2,
      name: "Hardwood Flooring - Oak",
      description: "Solid oak hardwood flooring, medium brown finish",
      category: "flooring",
      unit: "per sq ft",
      stores: [
        { name: "Home Depot", price: 7.99, inStock: true, distance: 3.2 },
        { name: "Lowe's", price: 8.25, inStock: true, distance: 5.1 },
        { name: "Flooring Outlet", price: 6.75, inStock: true, distance: 9.4 },
        { name: "Lumber Liquidators", price: 7.5, inStock: true, distance: 6.7 },
      ],
    },
    {
      id: 3,
      name: "Subway Tile - White",
      description: "Classic white ceramic subway tile, 3x6 inch",
      category: "tile",
      unit: "per sq ft",
      stores: [
        { name: "Home Depot", price: 5.99, inStock: true, distance: 3.2 },
        { name: "Lowe's", price: 6.25, inStock: true, distance: 5.1 },
        { name: "Tile Shop", price: 7.5, inStock: true, distance: 4.8 },
        { name: "Floor & Decor", price: 5.49, inStock: true, distance: 8.3 },
      ],
    },
    {
      id: 4,
      name: "Kitchen Cabinet - Shaker Style",
      description: "White shaker style kitchen base cabinet, 36 inch",
      category: "cabinets",
      unit: "each",
      stores: [
        { name: "Home Depot", price: 299.99, inStock: true, distance: 3.2 },
        { name: "Lowe's", price: 325.0, inStock: false, distance: 5.1 },
        { name: "Cabinet Warehouse", price: 275.5, inStock: true, distance: 12.4 },
        { name: "Kitchen Specialists", price: 349.99, inStock: true, distance: 7.2 },
      ],
    },
    {
      id: 5,
      name: "Interior Paint - Premium",
      description: "Premium interior paint, eggshell finish, 1 gallon",
      category: "paint",
      unit: "per gallon",
      stores: [
        { name: "Home Depot", price: 45.99, inStock: true, distance: 3.2 },
        { name: "Lowe's", price: 42.75, inStock: true, distance: 5.1 },
        { name: "Sherwin Williams", price: 54.99, inStock: true, distance: 2.8 },
        { name: "Benjamin Moore", price: 59.99, inStock: true, distance: 4.5 },
      ],
    },
    {
      id: 6,
      name: "Vinyl Plank Flooring",
      description: "Waterproof luxury vinyl plank flooring, wood look",
      category: "flooring",
      unit: "per sq ft",
      stores: [
        { name: "Home Depot", price: 3.99, inStock: true, distance: 3.2 },
        { name: "Lowe's", price: 4.25, inStock: true, distance: 5.1 },
        { name: "Flooring Outlet", price: 3.5, inStock: true, distance: 9.4 },
        { name: "Floor & Decor", price: 3.75, inStock: true, distance: 8.3 },
      ],
    },
  ]

  const filteredMaterials = materials.filter((material) => {
    const matchesSearch =
      material.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      material.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = category === "all" || material.category === category
    return matchesSearch && matchesCategory
  })

  const sortedMaterials = [...filteredMaterials].sort((a, b) => {
    if (sortBy === "price-low") {
      return Math.min(...a.stores.map((s) => s.price)) - Math.min(...b.stores.map((s) => s.price))
    }
    if (sortBy === "price-high") {
      return Math.max(...b.stores.map((s) => s.price)) - Math.max(...a.stores.map((s) => s.price))
    }
    if (sortBy === "name-asc") {
      return a.name.localeCompare(b.name)
    }
    if (sortBy === "name-desc") {
      return b.name.localeCompare(a.name)
    }
    return 0
  })

  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 rounded-[2rem] border border-primary/15 bg-[linear-gradient(135deg,rgba(255,242,222,0.95),rgba(225,241,232,0.9))] p-8 shadow-sm">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/75 px-3 py-1 text-sm text-primary">
            <Sparkles className="h-4 w-4" />
            Material Tracker
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight">Compare Material Prices Before the Quote Starts Free-Styling</h1>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Search common renovation materials, compare store pricing, and spot the difference between a fair deal and
            a line item that looks personally offended by your budget.
          </p>
        </div>

        <div className="mb-8">
          <Card className="border-primary/15 shadow-sm">
            <CardHeader>
              <CardTitle>Search Materials</CardTitle>
              <CardDescription>
                Find and compare renovation prices in your area before the shopping list becomes a small emergency.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search materials, finishes, or products..."
                    className="rounded-2xl bg-white/80 pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <div className="w-44">
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger className="rounded-2xl bg-white/80">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="countertops">Countertops</SelectItem>
                        <SelectItem value="flooring">Flooring</SelectItem>
                        <SelectItem value="tile">Tile</SelectItem>
                        <SelectItem value="cabinets">Cabinets</SelectItem>
                        <SelectItem value="paint">Paint</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button variant="outline" size="icon" className="rounded-2xl bg-white/80">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <div className="flex items-center gap-2">
                  <Label htmlFor="location" className="whitespace-nowrap">
                    ZIP Code:
                  </Label>
                  <Input
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-28 rounded-2xl bg-white/80"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Label htmlFor="sort" className="whitespace-nowrap">
                    Sort by:
                  </Label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger id="sort" className="w-48 rounded-2xl bg-white/80">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="name-asc">Name: A to Z</SelectItem>
                      <SelectItem value="name-desc">Name: Z to A</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {sortedMaterials.length > 0 ? (
            sortedMaterials.map((material) => (
              <Card key={material.id} className="overflow-hidden border-primary/10 shadow-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-1 text-sm font-medium text-primary">
                        {material.category.charAt(0).toUpperCase() + material.category.slice(1)}
                      </div>
                      <CardTitle>{material.name}</CardTitle>
                      <CardDescription className="mt-1">{material.description}</CardDescription>
                    </div>
                    <Button variant="ghost" size="icon" className="rounded-full bg-muted/60">
                      <Star className="h-5 w-5" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pb-0">
                  <Tabs defaultValue="prices">
                    <TabsList className="mb-4 bg-secondary/80">
                      <TabsTrigger value="prices">Prices</TabsTrigger>
                      <TabsTrigger value="history">Price History</TabsTrigger>
                      <TabsTrigger value="alerts">Set Alerts</TabsTrigger>
                    </TabsList>
                    <TabsContent value="prices" className="space-y-0">
                      <div className="overflow-hidden rounded-2xl border bg-white">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-secondary/70">
                              <th className="p-3 text-left font-medium">Store</th>
                              <th className="p-3 text-left font-medium">Price ({material.unit})</th>
                              <th className="p-3 text-left font-medium">Availability</th>
                              <th className="p-3 text-left font-medium">Distance</th>
                              <th className="p-3 text-left font-medium"></th>
                            </tr>
                          </thead>
                          <tbody>
                            {material.stores
                              .sort((a, b) => a.price - b.price)
                              .map((store, index) => (
                                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-muted/25"}>
                                  <td className="p-3">{store.name}</td>
                                  <td className="p-3 font-medium text-foreground">${store.price.toFixed(2)}</td>
                                  <td className="p-3">
                                    <span
                                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                                        store.inStock ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                                      }`}
                                    >
                                      {store.inStock ? "In Stock" : "Out of Stock"}
                                    </span>
                                  </td>
                                  <td className="p-3">{store.distance} miles</td>
                                  <td className="p-3">
                                    <Button variant="ghost" size="sm" className="h-8 gap-1 rounded-full">
                                      Visit <ExternalLink className="h-3 w-3" />
                                    </Button>
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                    </TabsContent>
                    <TabsContent value="history">
                      <div className="flex items-center justify-center p-8 text-center">
                        <div>
                          <p className="mb-4 text-muted-foreground">
                            Price history is for Premium subscribers, because apparently spreadsheets can also have a
                            luxury tier.
                          </p>
                          <Link href="/pricing">
                            <Button variant="outline" className="rounded-full">Upgrade to Premium</Button>
                          </Link>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="alerts">
                      <div className="flex items-center justify-center p-8 text-center">
                        <div>
                          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                            <Bell className="h-6 w-6 text-primary" />
                          </div>
                          <p className="mb-4 text-muted-foreground">
                            Price alerts are available for Standard and Premium plans, which is helpful when tapware
                            keeps behaving like crypto.
                          </p>
                          <Link href="/pricing">
                            <Button variant="outline" className="rounded-full">Upgrade Your Plan</Button>
                          </Link>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter className="pb-4 pt-4">
                  <div className="flex w-full items-center justify-between gap-4">
                    <div className="text-sm text-muted-foreground">Last updated: April 3, 2025</div>
                    <Button variant="outline" size="sm" className="gap-1 rounded-full">
                      <ArrowUpDown className="mr-1 h-3 w-3" />
                      Compare Similar Items
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="py-12 text-center">
              <p className="text-muted-foreground">No materials found matching your search criteria.</p>
              <Button
                variant="outline"
                className="mt-4 rounded-full"
                onClick={() => {
                  setSearchTerm("")
                  setCategory("all")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
