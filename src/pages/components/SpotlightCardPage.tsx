import { SpotlightCard } from "@/components/navyaui/SpotlightCard";
import { PageHeader, FadeInSection, SlideInSection } from "@/components/PageAnimations";
import CodeBlock from "@/components/CodeBlock";

const SOURCE_CODE = `"use client";
import React, { useRef, useState } from "react";

export const SpotlightCard = ({
    children,
    className,
    spotlightColor = "rgba(120, 119, 198, 0.15)",
}: {
    children: React.ReactNode;
    className?: string;
    spotlightColor?: string;
}) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            className={\`relative overflow-hidden rounded-xl border border-border bg-card p-8 \${className || ""}\`.trim()}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500"
                style={{
                    opacity,
                    background: \`radial-gradient(600px circle at \${position.x}px \${position.y}px, \${spotlightColor}, transparent 40%)\`,
                }}
            />
            {children}
        </div>
    );
};
`;

export default function SpotlightCardPage() {
    return (
        <div className="max-w-4xl">
            <PageHeader
                title="Spotlight Card"
                description="A card with a spotlight effect — a radial gradient follows your cursor on hover, perfect for feature cards."
            />

            {/* Preview */}
            <FadeInSection className="mb-10">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-4">Preview</p>
                <div className="rounded-2xl border border-border/20 glass p-4 sm:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <SpotlightCard className="metal-card">
                            <h3 className="text-lg font-semibold text-foreground mb-2">Feature One</h3>
                            <p className="text-sm text-muted-foreground">Hover to see the spotlight follow your cursor.</p>
                        </SpotlightCard>
                        <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.06)" className="metal-card">
                            <h3 className="text-lg font-semibold text-foreground mb-2">Feature Two</h3>
                            <p className="text-sm text-muted-foreground">White spotlight for a clean monochrome look.</p>
                        </SpotlightCard>
                    </div>
                </div>
            </FadeInSection>

            {/* Install CLI */}
            <SlideInSection direction="left" className="mb-8">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">Install using CLI</p>
                <CodeBlock
                    code={`npx shadcn@latest add "https://navyaui.vercel.app/r/spotlight-card.json"`}
                    language="bash"
                    filename="Terminal"
                />
            </SlideInSection>

            {/* Manual Install */}
            <FadeInSection className="mb-10">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-6">Install Manually</p>

                <div className="space-y-6">
                    {/* Step 1 */}
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold shrink-0">1</div>
                            <div className="w-px flex-1 bg-border/30 mt-2" />
                        </div>
                        <div className="flex-1 min-w-0 pb-2">
                            <p className="text-sm font-medium text-foreground mb-3">Install dependencies</p>
                            <CodeBlock code="npm install framer-motion " language="bash" filename="Terminal" />
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold shrink-0">2</div>
                            <div className="w-px flex-1 bg-border/30 mt-2" />
                        </div>
                        <div className="flex-1 min-w-0 pb-2">
                            <p className="text-sm font-medium text-foreground mb-3">Add util file</p>
                            <CodeBlock
                                code={`import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`}
                                language="tsx"
                                filename="lib/utils.ts"
                            />
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold shrink-0">2</div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground mb-1">Copy the source code</p>
                            <p className="text-xs text-muted-foreground mb-3">
                                Copy the code below and paste it into <code className="text-xs bg-secondary/60 px-1.5 py-0.5 rounded font-mono text-foreground">components/navyaui/SpotlightCard.tsx</code>
                            </p>
                            <CodeBlock code={SOURCE_CODE} language="tsx" filename="components/navyaui/SpotlightCard.tsx" collapsible defaultCollapsed />
                        </div>
                    </div>
                </div>
            </FadeInSection>

            {/* Usage */}
            <SlideInSection direction="right" className="mb-10">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">Usage</p>
                <CodeBlock
                    code={`import { SpotlightCard } from "@/components/navyaui/SpotlightCard"

export function SpotlightCardDemo() {
  return (
    <SpotlightCard spotlightColor="rgba(255,255,255,0.08)">
      <h3>Your content here</h3>
      <p>Card content with spotlight hover effect</p>
    </SpotlightCard>
  )
}`}
                    language="tsx"
                    filename="Example.tsx"
                />
            </SlideInSection>

            {/* Props */}
            <FadeInSection>
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-4">Props</p>
                <div className="rounded-xl border border-border/20 bg-[#1e1e1e] overflow-hidden overflow-x-auto">
                    <table className="w-full text-sm" style={{ color: "#d4d4d4" }}>
                        <thead>
                            <tr className="border-b border-[#2d2d2d]">
                                <th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Prop Name</th>
                                <th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Type</th>
                                <th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Default</th>
                                <th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Description</th>
                            </tr>
                        </thead>
                        <tbody className="font-mono text-xs">
                            <tr className="border-b border-[#2d2d2d]">
                                <td className="px-4 py-3" style={{ color: "#9cdcfe" }}>children</td>
                                <td className="px-4 py-3" style={{ color: "#4ec9b0" }}>React.ReactNode</td>
                                <td className="px-4 py-3 text-[#555]">—</td>
                                <td className="px-4 py-3 font-sans text-[#808080]">Content rendered inside the card</td>
                            </tr>
                            <tr className="border-b border-[#2d2d2d]">
                                <td className="px-4 py-3" style={{ color: "#9cdcfe" }}>className</td>
                                <td className="px-4 py-3" style={{ color: "#4ec9b0" }}>string</td>
                                <td className="px-4 py-3 text-[#555]">—</td>
                                <td className="px-4 py-3 font-sans text-[#808080]">Additional CSS classes</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3" style={{ color: "#9cdcfe" }}>spotlightColor</td>
                                <td className="px-4 py-3" style={{ color: "#4ec9b0" }}>string</td>
                                <td className="px-4 py-3" style={{ color: "#ce9178" }}>"rgba(120,119,198,0.15)"</td>
                                <td className="px-4 py-3 font-sans text-[#808080]">Color of the spotlight gradient</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </FadeInSection>
        </div>
    );
}
