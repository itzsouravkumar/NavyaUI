import { FluidSmokeBackground } from "../../components/navyaui/FluidSmokeBackground";
import CodeBlock from "../../components/CodeBlock";
import { PageHeader, FadeInSection, SlideInSection } from "../../components/PageAnimations";

const SOURCE_CODE = `"use client";
import React, { useEffect, useRef } from "react";
import WebGLFluid from "webgl-fluid";
import { cn } from "@/lib/utils";

interface FluidSmokeBackgroundProps {
  className?: string;
  config?: any;
}

export const FluidSmokeBackground: React.FC<FluidSmokeBackgroundProps> = ({ 
  className,
  config = {} 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const defaultConfig = {
        IMMEDIATE: true, 
        TRIGGER: "hover",
        SIM_RESOLUTION: 128,
        DYE_RESOLUTION: 1024,
        CAPTURE_RESOLUTION: 512,
        DENSITY_DISSIPATION: 3,
        VELOCITY_DISSIPATION: 2,
        PRESSURE: 0.8,
        PRESSURE_ITERATIONS: 20,
        CURL: 30,
        SPLAT_RADIUS: 0.25,
        SPLAT_FORCE: 6000,
        SHADING: true,
        COLORFUL: true,
        COLOR_UPDATE_SPEED: 10,
        PAUSED: false,
        BACK_COLOR: { r: 2, g: 2, b: 2 },
        TRANSPARENT: false,
        BLOOM: true,
        BLOOM_ITERATIONS: 8,
        BLOOM_RESOLUTION: 256,
        BLOOM_INTENSITY: 0.8,
        BLOOM_THRESHOLD: 0.6,
        BLOOM_SOFT_KNEE: 0.7,
        SUNRAYS: true,
        SUNRAYS_RESOLUTION: 196,
        SUNRAYS_WEIGHT: 1.0,
        ...config
    };

    WebGLFluid(canvasRef.current, defaultConfig);

  }, [config]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("w-full h-full block bg-[#020202]", className)}
      style={{
          width: "100%",
          height: "100%",
          touchAction: "none"
      }}
    />
  );
};
`;

const USAGE_CODE = `import { FluidSmokeBackground } from "@/components/navyaui/FluidSmokeBackground";

export function FluidSmokeBackgroundDemo() {
  return (
    <div className="h-[40rem] w-full rounded-2xl relative overflow-hidden flex items-center justify-center">
      <FluidSmokeBackground className="absolute inset-0" />
      <div className="relative z-10 flex flex-col items-center justify-center text-white pointer-events-none">
        <h1 className="text-4xl md:text-6xl font-black mb-4">
          Fluid Smoke
        </h1>
      </div>
    </div>
  );
}`;

export default function FluidSmokeBackgroundPage() {
  return (
    <div className="max-w-4xl">
      <PageHeader title="Fluid Smoke Background" description="A beautiful, multi-coloured smoke-like fluid simulation using WebGL. Interactive with cursor movement." />

      <FadeInSection className="mb-10">
        <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-4">Preview</p>
        <div className="rounded-2xl border border-border/20 glass p-4 lg:p-8">
          <div className="h-[40rem] w-full rounded-xl relative overflow-hidden flex items-center justify-center">
            <FluidSmokeBackground className="absolute inset-0" />
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none text-white select-none">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-['Poppins'] tracking-tight mb-4 drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                Navya UI
              </h1>
              <p className="text-lg md:text-xl font-medium tracking-wide drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
                Move your cursor to interact
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

      <SlideInSection direction="left" className="mb-8">
        <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">Install using CLI</p>
        <CodeBlock code={`npx @navyaui/cli add fluid-smoke-background`} language="bash" filename="Terminal" />
      </SlideInSection>

      <FadeInSection className="mb-10">
        <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-6">Install Manually</p>
        <div className="space-y-6">
          <div className="flex gap-4"><div className="flex flex-col items-center"><div className="flex items-center justify-center w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold shrink-0">1</div></div><div className="flex-1 min-w-0"><p className="text-sm font-medium text-foreground mb-1">Install dependencies</p><CodeBlock code="npm install webgl-fluid" language="bash" filename="Terminal" /></div></div>
          <div className="flex gap-4"><div className="flex flex-col items-center"><div className="flex items-center justify-center w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold shrink-0">2</div></div><div className="flex-1 min-w-0"><p className="text-sm font-medium text-foreground mb-1">Copy the source code</p><p className="text-xs text-muted-foreground mb-3">Paste into <code className="text-xs bg-secondary/60 px-1.5 py-0.5 rounded font-mono text-foreground">components/navyaui/FluidSmokeBackground.tsx</code></p><CodeBlock code={SOURCE_CODE} language="tsx" filename="components/navyaui/FluidSmokeBackground.tsx" collapsible defaultCollapsed /></div></div>
        </div>
      </FadeInSection>

      <SlideInSection direction="right" className="mb-10">
        <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">Usage</p>
        <CodeBlock code={USAGE_CODE} language="tsx" filename="Example.tsx" />
      </SlideInSection>

      <FadeInSection>
        <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-4">Props</p>
        <div className="rounded-xl border border-border/20 bg-[#1e1e1e] overflow-hidden overflow-x-auto">
          <table className="w-full text-sm" style={{ color: "#d4d4d4" }}>
            <thead><tr className="border-b border-[#2d2d2d]"><th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Prop</th><th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Type</th><th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Default</th><th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Description</th></tr></thead>
            <tbody className="font-mono text-xs">
              <tr className="border-b border-[#2d2d2d]"><td className="px-4 py-3" style={{ color: "#9cdcfe" }}>className</td><td className="px-4 py-3" style={{ color: "#4ec9b0" }}>string</td><td className="px-4 py-3 text-[#555]">—</td><td className="px-4 py-3 font-sans text-[#808080]">Optional CSS class for the canvas element</td></tr>
              <tr className="border-b border-[#2d2d2d]"><td className="px-4 py-3" style={{ color: "#9cdcfe" }}>config</td><td className="px-4 py-3" style={{ color: "#4ec9b0" }}>any</td><td className="px-4 py-3 text-[#555]">{ }</td><td className="px-4 py-3 font-sans text-[#808080]">Optional custom config for the fluid simulation</td></tr>
            </tbody>
          </table>
        </div>
      </FadeInSection>
    </div>
  );
}
