"use client";

import MainLayout from "@/components/layouts/main-layout";
import { Cable, DatabaseZap, Move3D, Split, Telescope } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const utilLinks = {
    components: [
        {
            title: "Load Balancer",
            subtitle: "Incoming requests across multiple servers",
            icon: <Split className="text-primary" />,
            href: "/components/load-balancer/listing",
        },
        {
            title: "Circuit Breaker",
            subtitle: "Preventing failures in microservices",
            icon: <Cable className="text-primary" />,
            href: "/",
        },
        {
            title: "Distributed Cache",
            subtitle: "Response times by caching frequent data",
            icon: <DatabaseZap className="text-primary" />,
            href: "/",
        },
        {
            title: "Rate Limiter",
            subtitle: "Management for request rate per IP",
            icon: <Move3D className="text-primary" />,
            href: "/",
        },
        {
            title: "Service Discovery",
            subtitle: "Track and manage available microservices",
            icon: <Telescope className="text-primary" />,
            href: "/",
        },
    ]
}
const Home = () => {
    const [lastActivity, setLastActivity] = useState([]);

    return (
        <MainLayout>
            <section className="grid grid-cols-3 mt-4 gap-8">
                <article className="col-span-1 border-r pr-4">
                    <h2 className="text-neutral-500 text-sm mb-2">Quick Access</h2>
                    <ul className="flex flex-col gap-2">
                        {utilLinks.components.map((utilLink) => {
                            return (
                                <li className="group">
                                    <Link href={utilLink.href} className="flex gap-4 p-4 rounded-md group-hover:bg-primary/10 transition-all">
                                        <div className="rounded-md bg-primary/20 w-14 h-14 flex items-center justify-center">
                                            {utilLink.icon}
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <h3 className="group-hover:text-primary transition-all">{utilLink.title}</h3>
                                            <p className="text-sm text-neutral-500">{utilLink.subtitle}</p>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="border-r"></div>
                </article>
                <article className="col-span-2">
                    <h2 className="text-neutral-500 text-sm mb-2">Last Activity</h2>
                    <div className="flex flex-col gap-4">
                        <ul className="flex flex-col gap-2">
                            <li className="group">
                                <Link href={"/"} className="flex gap-4 p-4 rounded-md group-hover:bg-primary/10 transition-all">
                                    <div className="text-primary rounded-md bg-primary/20 w-14 h-14 flex items-center justify-center">
                                        #1
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <h3 className="group-hover:text-primary transition-all">Test Case Project</h3>
                                        <p className="text-sm text-neutral-500">Simple description for the First Test Case Project</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </article>
            </section>
        </MainLayout>
    )
}

export default Home;
