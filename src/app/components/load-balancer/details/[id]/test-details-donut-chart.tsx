"use client"

import * as React from "react"
import { Label, Pie, PieChart } from "recharts"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { status: "passed", tests: 275, fill: "#111" },
    { status: "failed", tests: 200, fill: "#f00" },
]

const chartConfig = {
    tests: {
        label: "tests",
    },
    passed: {
        label: "Passed",
        color: "#111",
    },
    failed: {
        label: "Failed",
        color: "#f00",
    },
} satisfies ChartConfig

export function TestDetailsDonutChart() {
    const totalTests = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.tests, 0)
    }, [])

    return (
        <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square h-[200px]"
        >
            <PieChart>
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                    data={chartData}
                    dataKey="tests"
                    nameKey="status"
                    innerRadius={60}
                    strokeWidth={5}
                >
                    <Label
                        content={({ viewBox }) => {
                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                return (
                                    <text
                                        x={viewBox.cx}
                                        y={viewBox.cy}
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                    >
                                        <tspan
                                            x={viewBox.cx}
                                            y={viewBox.cy}
                                            className="fill-foreground text-3xl font-bold"
                                        >
                                            {totalTests.toLocaleString()}
                                        </tspan>
                                        <tspan
                                            x={viewBox.cx}
                                            y={(viewBox.cy || 0) + 24}
                                            className="fill-muted-foreground"
                                        >
                                            Tests
                                        </tspan>
                                    </text>
                                )
                            }
                        }}
                    />
                </Pie>
            </PieChart>
        </ChartContainer>

    )
}
