import { Ban, CheckCircle2, CirclePlay, CircleX } from "lucide-react";

type Props = {
    status: "running" | "completed" | "failed" | "canceled";
}

export const StatusManager = ({ status }: Props) => {
    switch (status) {
        case "running":
            return (
                <span className="flex items-center gap-2 text-yellow-600">
                    <CirclePlay />
                    Running
                </span>
            )
        case "completed":
            return (
                <span className="flex items-center gap-2 text-primary">
                    <CheckCircle2 />
                    Completed
                </span>
            )
        case "canceled":
            return (
                <span className="flex items-center gap-2 text-neutral-500">
                    <Ban />
                    Canceled
                </span>
            )
        case "failed":
            return (
                <span className="flex items-center gap-2 text-red-500">
                    <CircleX />
                    Failed
                </span>
            )
    }
}

