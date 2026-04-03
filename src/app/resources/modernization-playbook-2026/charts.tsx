"use client";

import { useEffect, useRef } from "react";

const charts = [
  {
    "id": "budget_allocation",
    "type": "doughnut",
    "title": "Federal IT Budget Allocation (2025)",
    "labels": [
      "Operations & Maintenance",
      "Innovation / New Build"
    ],
    "datasets": [
      {
        "label": "Budget Allocation (%)",
        "data": [
          80,
          20
        ],
        "backgroundColor": [
          "#e11d48",
          "#2563eb"
        ]
      }
    ],
    "source_note": "U.S. Government Accountability Office (GAO), 2025 [2]"
  },
  {
    "id": "ai_productivity",
    "type": "bar",
    "title": "AI Task Efficacy: Greenfield vs. Legacy Brownfield",
    "labels": [
      "Greenfield Productivity Gain",
      "Brownfield Productivity Gain"
    ],
    "datasets": [
      {
        "label": "Productivity Impact (%)",
        "data": [
          35,
          5
        ],
        "backgroundColor": [
          "#10b981",
          "#f59e0b"
        ]
      }
    ],
    "source_note": "Stanford Productivity Telemetry Study, 2025 [8]"
  },
  {
    "id": "ai_perception_gap",
    "type": "bar",
    "title": "The AI Perception Gap in Complex Tasks",
    "labels": [
      "Actual Speed (Compared to Control)",
      "Perceived Speed by Developer"
    ],
    "datasets": [
      {
        "label": "Impact (%)",
        "data": [
          -19,
          20
        ],
        "backgroundColor": [
          "#ef4444",
          "#3b82f6"
        ]
      }
    ],
    "source_note": "METR Randomized Controlled Trial, 2025 [9]"
  },
  {
    "id": "pr_bottleneck",
    "type": "bar",
    "title": "AI Impact on Code Review Pipelines",
    "labels": [
      "Increase in PR Size",
      "Increase in Review Time"
    ],
    "datasets": [
      {
        "label": "Percentage Increase (%)",
        "data": [
          154,
          91
        ],
        "backgroundColor": [
          "#8b5cf6",
          "#f97316"
        ]
      }
    ],
    "source_note": "DORA / Faros AI Telemetry, 2025 [10]"
  }
];

export function ArticleCharts() {
  return (
    <div className="space-y-12 my-12">
      {charts.map((chart: any) => (
        <ChartBlock key={chart.id} config={chart} />
      ))}
    </div>
  );
}

function ChartBlock({ config }: { config: any }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let chartInstance: any = null;

    async function init() {
      const { Chart, registerables } = await import("chart.js");
      Chart.register(...registerables);

      if (canvasRef.current) {
        chartInstance = new Chart(canvasRef.current, {
          type: config.type || "bar",
          data: {
            labels: config.labels || [],
            datasets: config.datasets || [],
          },
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: config.title || "",
                font: { size: 16, weight: "normal" },
                color: "#0a1926",
              },
              legend: { display: (config.datasets?.length || 0) > 1 },
            },
            scales: config.type === "radar" || config.type === "doughnut" || config.type === "pie"
              ? {}
              : { y: { beginAtZero: true } },
          },
        });
      }
    }

    init();
    return () => { chartInstance?.destroy(); };
  }, [config]);

  return (
    <div className="bg-[#f5f5f5] rounded-xl p-6">
      <canvas ref={canvasRef} />
      {config.source_note && (
        <p className="text-[12px] text-[#333333]/50 mt-3 text-right">{config.source_note}</p>
      )}
    </div>
  );
}
