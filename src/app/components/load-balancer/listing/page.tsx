"use client";

import MainLayout from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import { Blend, Eye, MoveLeft, RefreshCcw } from "lucide-react";
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

const LoadBalancerListing = () => {
    const router = useRouter();

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
                <Breadcrumb className="mt-12">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Components</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="font-semibold text-lg">Load Balancers</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <Table className="mt-4">
                    <TableCaption>A list of your recent Load Balancers test cases.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[50px]"></TableHead>
                            <TableHead className="w-[200px]">Load Balancer</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Test Type</TableHead>
                            <TableHead className="text-right"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium"><Checkbox /></TableCell>
                            <TableCell className="font-medium">LB001</TableCell>
                            <TableCell><StatusManager status="completed" /></TableCell>
                            {/* Throughput / Round Robin / Latency */}
                            <TableCell>Throughput</TableCell>
                            <TableCell className="text-right">
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Link className="hover:underline flex justify-end" href="/">
                                                <span className="sr-only">View more</span>
                                                <Eye className="transition-all hover:text-primary" />
                                            </Link>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>View More</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </section>
        </MainLayout>
    )
}

export default LoadBalancerListing;