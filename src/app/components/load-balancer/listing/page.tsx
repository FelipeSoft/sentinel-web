"use client";

import MainLayout from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import { Blend, ChevronLeft, ChevronRight, Download, Eye, FilterIcon, MoveLeft, RefreshCcw, Search, Terminal } from "lucide-react";
import { useRouter } from "next/navigation";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { StatusManager } from "@/components/status-manager";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"

const LoadBalancerListing = () => {
    const router = useRouter();
    // if a checkbox inside the list is checked, show more buttons like the 'Run' or other one...

    return (
        <MainLayout>
            <section>
                <nav className="flex items-center justify-between">
                    <button className="flex items-center gap-2" onClick={() => router.back()}>
                        <MoveLeft className="text-primary" />
                        Go Back
                    </button>
                    <div className="flex items-center gap-12 text-neutral-500">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <Blend />
                                <h3>Incidents</h3>
                            </div>
                            <Link href="/" className="hover:underline">Passed: 0</Link>
                            <Link href="/" className="hover:underline">Failed: 0</Link>
                        </div>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant={"ghost"}>
                                        <span className="sr-only">Reload Resources</span>
                                        <RefreshCcw />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Reload Resources</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </nav>
                <div className="mt-12 mb-6 flex items-center justify-between">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="font-semibold text-lg">Load Balancers</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <div className="flex items-center gap-4">
                        <Button variant={"default"}><Terminal />Run</Button>
                        <Button variant={"outline"}><FilterIcon />Advanced Filter</Button>
                        <Button variant={"outline"}><Download />Export</Button>
                    </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                    <Label htmlFor="search" className="w-full flex items-center gap-2 border rounded-sm">
                        <Search className="ml-2" />
                        <Input id="search" className="w-full border-none" placeholder="Find your Load Balancers by name or tag and press Enter" />
                    </Label>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[50px]"></TableHead>
                            <TableHead className="w-[200px]">Load Balancer</TableHead>
                            <TableHead className="w-[200px]">Tag</TableHead>
                            <TableHead className="w-[200px]">Category</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Test Type</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium"><Checkbox /></TableCell>
                            <TableCell className="font-medium">
                                <Link className="text-primary underline" href="/components/load-balancer/details/1">
                                    LB001
                                </Link>
                            </TableCell>
                            <TableCell className="font-medium">BRAZIL_LB</TableCell>

                            {/* Development / Testing / Production / Staging */}
                            <TableCell className="font-medium">Production</TableCell>
                            <TableCell><StatusManager status="completed" /></TableCell>

                            {/* Throughput / Round Robin / Latency */}
                            <TableCell>Throughput</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium"><Checkbox /></TableCell>
                            <TableCell className="font-medium">
                                <Link className="text-primary underline" href="/components/load-balancer/details/2">
                                    LB002
                                </Link>
                            </TableCell>
                            <TableCell className="font-medium">BRAZIL_LB</TableCell>

                            {/* Development / Testing / Production / Staging */}
                            <TableCell className="font-medium">Production</TableCell>
                            <TableCell><StatusManager status="running" /></TableCell>

                            {/* Throughput / Round Robin / Latency */}
                            <TableCell>Throughput</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <nav className="bg-muted p-2 flex items-center justify-between">
                    <span className="text-sm text-neutral-500">2 results found</span>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <Label htmlFor="rows">Rows</Label>
                                <Input value={1} className="w-[80px]" id="rows" type="number" />
                            </div>
                            <div className="flex items-center gap-2">
                                <Label htmlFor="rows">Page</Label>
                                <Input value={1} className="w-[80px]" id="rows" type="number" />
                                of 10
                            </div>
                        </div>
                        <div>
                            <Button variant={"ghost"}>
                                <span className="sr-only">Previous</span>
                                <ChevronLeft />
                            </Button>
                            <Button variant={"ghost"}>
                                <span className="sr-only">Next</span>
                                <ChevronRight />
                            </Button>
                        </div>
                    </div>
                </nav>
            </section>
        </MainLayout>
    )
}

export default LoadBalancerListing;