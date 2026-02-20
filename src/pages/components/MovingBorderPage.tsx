import { MovingBorder } from "@/components/ui/moving-border";
import { PageHeader, FadeInSection, SlideInSection } from "@/components/PageAnimations";
import CodeBlock from "@/components/CodeBlock";

const SOURCE_CODE = `"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const MovingBorder = ({
    children,
    duration = 2000,
    className,
    containerClassName,
    borderRadius = "9999px",
    as: Component = "button",
    ...otherProps
}: {
    children: React.ReactNode;
    duration?: number;
    className?: string;
    containerClassName?: string;
    borderRadius?: string;
    as?: React.ElementType;
    [key: string]: unknown;
}) => {
    return (
        <Component
            className={cn(
                "relative inline-flex h-12 overflow-hidden p-[1px] focus:outline-none",
                containerClassName
            )}
            style={{ borderRadius }}
            {...otherProps}
        >
            {/* Spinning gradient border */}
            <span className="absolute inset-[-1000%]">
                <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: duration / 1000, repeat: Infinity, ease: "linear" }}
                    className="block h-full w-full"
                    style={{
                        background: "conic-gradient(from 0deg, transparent 0%, #ffffff 10%, transparent 20%)",
                    }}
                />
            </span>

            {/* Inner content */}
            <span
                className={cn(
                    "relative inline-flex h-full w-full items-center justify-center gap-2 rounded-full bg-background px-6 py-2 text-sm font-medium text-foreground backdrop-blur-xl",
                    className
                )}
                style={{ borderRadius: \`calc(\${borderRadius} - 1px)\` }}
            >
                {children}
            </span>
        </Component>
    );
};`;

export default function MovingBorderPage() {
    return (
        <div className="max-w-4xl">
            <PageHeader title="Moving Border" description="A border that orbits around the container with a glowing conic gradient. Great for premium CTAs and cards." />

            <FadeInSection className="mb-10">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-4">Preview</p>
                <div className="rounded-2xl border border-border/20 glass p-12 flex flex-col items-center gap-8">
                    <MovingBorder duration={3000}>Get Started →</MovingBorder>
                    <MovingBorder as="div" containerClassName="h-auto w-auto" className="px-8 py-6" borderRadius="16px" duration={4000}>
                        <div className="text-center">
                            <h3 className="text-lg font-semibold text-foreground">Card with Moving Border</h3>
                            <p className="text-sm text-muted-foreground mt-2">The conic gradient orbits around this container.</p>
                        </div>
                    </MovingBorder>
                </div>
            </FadeInSection>

            <SlideInSection direction="left" className="mb-8">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">Install using CLI</p>
                <CodeBlock code={`npx shadcn@latest add "https://navyaui.vercel.app/r/moving-border.json"`} language="bash" filename="Terminal" />
            </SlideInSection>

            <FadeInSection className="mb-10">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-6">Install Manually</p>
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center"><div className="flex items-center justify-center w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold shrink-0">1</div><div className="w-px flex-1 bg-border/30 mt-2" /></div>
                        <div className="flex-1 pb-2">
                            <p className="text-sm font-medium text-foreground mb-3">Install dependencies</p>
                            <CodeBlock code="npm install framer-motion clsx tailwind-merge" language="bash" filename="Terminal" />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center"><div className="flex items-center justify-center w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold shrink-0">2</div><div className="w-px flex-1 bg-border/30 mt-2" /></div>
                        <div className="flex-1 pb-2">
                            <p className="text-sm font-medium text-foreground mb-3">Add util file</p>
                            <CodeBlock code={`import { ClassValue, clsx } from "clsx";\nimport { twMerge } from "tailwind-merge";\n\nexport function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs));\n}`} language="tsx" filename="lib/utils.ts" />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center"><div className="flex items-center justify-center w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold shrink-0">3</div></div>
                        <div className="flex-1">
                            <p className="text-sm font-medium text-foreground mb-1">Copy the source code</p>
                            <p className="text-xs text-muted-foreground mb-3">Paste into <code className="text-xs bg-secondary/60 px-1.5 py-0.5 rounded font-mono text-foreground">components/ui/moving-border.tsx</code></p>
                            <CodeBlock code={SOURCE_CODE} language="tsx" filename="components/ui/moving-border.tsx" collapsible defaultCollapsed />
                        </div>
                    </div>
                </div>
            </FadeInSection>

            <SlideInSection direction="right" className="mb-10">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">Usage</p>
                <CodeBlock code={`import { MovingBorder } from "@/components/ui/moving-border"\n\nexport function MovingBorderDemo() {\n  return (\n    <MovingBorder duration={3000}>\n      Get Started →\n    </MovingBorder>\n  )\n}`} language="tsx" filename="Example.tsx" />
            </SlideInSection>

            <FadeInSection>
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-4">Props</p>
                <div className="rounded-xl border border-border/20 bg-[#1e1e1e] overflow-hidden">
                    <table className="w-full text-sm" style={{ color: "#d4d4d4" }}>
                        <thead><tr className="border-b border-[#2d2d2d]"><th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Prop</th><th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Type</th><th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Default</th><th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Description</th></tr></thead>
                        <tbody className="font-mono text-xs">
                            <tr className="border-b border-[#2d2d2d]"><td className="px-4 py-3" style={{ color: "#9cdcfe" }}>children</td><td className="px-4 py-3" style={{ color: "#4ec9b0" }}>ReactNode</td><td className="px-4 py-3 text-[#555]">—</td><td className="px-4 py-3 font-sans text-[#808080]">Button/card content</td></tr>
                            <tr className="border-b border-[#2d2d2d]"><td className="px-4 py-3" style={{ color: "#9cdcfe" }}>duration</td><td className="px-4 py-3" style={{ color: "#4ec9b0" }}>number</td><td className="px-4 py-3" style={{ color: "#b5cea8" }}>2000</td><td className="px-4 py-3 font-sans text-[#808080]">Rotation duration in ms</td></tr>
                            <tr className="border-b border-[#2d2d2d]"><td className="px-4 py-3" style={{ color: "#9cdcfe" }}>borderRadius</td><td className="px-4 py-3" style={{ color: "#4ec9b0" }}>string</td><td className="px-4 py-3" style={{ color: "#ce9178" }}>"9999px"</td><td className="px-4 py-3 font-sans text-[#808080]">Border radius of container</td></tr>
                            <tr><td className="px-4 py-3" style={{ color: "#9cdcfe" }}>as</td><td className="px-4 py-3" style={{ color: "#4ec9b0" }}>ElementType</td><td className="px-4 py-3" style={{ color: "#ce9178" }}>"button"</td><td className="px-4 py-3 font-sans text-[#808080]">Rendered HTML element</td></tr>
                        </tbody>
                    </table>
                </div>
            </FadeInSection>
        </div>
    );
}
