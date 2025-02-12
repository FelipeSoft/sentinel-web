"use client";

import MainLayout from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import { Blend, ChevronLeft, ChevronRight, Eye, FilterIcon, MoveLeft, RefreshCcw, Search } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
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

const LoadBalanceraDynamicDetails = () => {
    const router = useRouter();
    const params = useParams();
    const { id } = params;

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
                            <Link href="/" className="hover:underline">Warnings: 0</Link>
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
                        <Button variant={"default"}>Edit</Button>
                        <Button variant={"outline"}>Delete</Button>
                    </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                    <Label htmlFor="search" className="w-full flex items-center gap-2 border rounded-sm">
                        <Search className="ml-2" />
                        <Input id="search" className="w-full border-none" placeholder="Find your Load Balancers by name or tag and press Enter" />
                    </Label>
                </div>
                <div>Load Balancer details: {id}</div>
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

export default LoadBalanceraDynamicDetails;