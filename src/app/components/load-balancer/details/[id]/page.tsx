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
import { TestDetailsDonutChart } from "./test-details-donut-chart";

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
                <div className="flex items-center justify-between">
                    <h1 className="mt-12 text-2xl font-medium">Load Balancer ID <span>{id}</span></h1>
                    <div>
                        <Button variant={"default"}>Run</Button>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-4">
                    <article className="flex flex-col gap-4 rounded-md border col-span-1">
                        <div className="flex items-center bg-muted rounded-t-sm">
                            <TestDetailsDonutChart />
                            <div className="pr-6 flex flex-col gap-2">
                                <h2 className="text-lg">Current Success Rating</h2>
                                <p className="text-neutral-500">Current Success Rating shows the percentage of passed vs. failed tests, helping you assess infrastructure reliability at a glance.</p>
                            </div>
                        </div>
                        <div className="p-6 flex gap-10">
                            <div className="flex items-end gap-2">
                                <div className="bg-[#111] border rounded-md h-full w-4"></div>
                                <h2 className="text-4xl font-semibold">57,89%</h2>
                                <span className="text-neutral-500">Passed</span>
                            </div>
                            <div className="flex items-end gap-2">
                                <div className="bg-[#f00] rounded-md h-full w-4"></div>
                                <h2 className="text-4xl font-semibold">42,11%</h2>
                                <span className="text-neutral-500">Failed</span>
                            </div>
                        </div>
                    </article>
                    <article className="grid grid-cols-3 gap-4 col-span-1">
                        <div>
                            <h2 className="font-semibold">Creation Time</h2>
                            <span className="text-neutral-500">23/07/2006 06:00:00</span>
                        </div>
                        <div>
                            <h2 className="font-semibold">Last Activity</h2>
                            <span className="text-neutral-500">13/02/2025 16:59:10</span>
                        </div>
                        <div>
                            <h2 className="font-semibold">Current Status</h2>
                            <span className="text-neutral-500"><StatusManager status="running" /></span>
                        </div>
                    </article>
                </div>
            </section>
        </MainLayout>
    )
}

export default LoadBalanceraDynamicDetails;