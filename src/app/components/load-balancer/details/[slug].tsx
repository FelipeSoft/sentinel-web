"use client";

import MainLayout from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import { Blend, MoveLeft } from "lucide-react";
import { useRouter } from "next/router";

const LoadBalancer = () => {
    const router = useRouter();

    return (
        <MainLayout>
            <section>
                <nav className="flex items-center justify-between">
                    <button className="flex items-center gap-2" onClick={() => router.back()}>
                        <MoveLeft className="text-primary" />
                        Go Back
                    </button>
                    <div className="flex items-center gap-6 text-neutral-500">
                        <div className="flex items-center gap-2">
                            <Blend />
                            <h3>Incidents</h3>
                        </div>
                        <h3>Issues: 0</h3>
                        <h3>Resolved: 0</h3>
                    </div>
                </nav>
            </section>
        </MainLayout>
    )
}

export default LoadBalancer;