import { MeteorBackground } from "@/components/navyaui/MeteorBackground";
import { PageHeader, FadeInSection, SlideInSection } from "@/components/PageAnimations";
import CodeBlock from "@/components/CodeBlock";

const SOURCE_CODE = `"use client";
import React, { useEffect, useState } from "react";

export const MeteorBackground = ({
    number = 20,
    className = "",
}: {
    number?: number;
    className?: string;
}) => {
    const [meteorStyles, setMeteorStyles] = useState<Array<{top: number, left: string, animationDelay: string, animationDuration: string}>>([]);

    useEffect(() => {
        const styles = new Array(number).fill(true).map(() => ({
            top: 0,
            left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
        }));
        setMeteorStyles(styles);
    }, [number]);

    return (
        <>
            {meteorStyles.map((style, idx) => (
                <span
                    key={"meteor" + idx}
                    className={\`animate-navyaui-meteor absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent \${className}\`.trim()}
                    style={style}
                />
            ))}
        </>
    );
};`;

export default function MeteorsPage() {
    return (
        <div className="max-w-4xl">
            <PageHeader title="Meteors" description="Animated shooting star particles for card and hero backgrounds." />

            <FadeInSection className="mb-10">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-4">Preview</p>
                <div className="flex flex-col gap-4">
                    <div className="relative overflow-hidden rounded-2xl border border-border/20 metal-card p-8">
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-foreground mb-2">Card with Meteors</h3>
                            <p className="text-sm text-muted-foreground">Adds a dynamic, space-like feel to any container.</p>
                            <button className="mt-4 rounded-xl border border-border/30 px-4 py-1.5 text-sm font-medium text-foreground hover:bg-secondary/60 transition-colors">Explore →</button>
                        </div>
                        <MeteorBackground number={20} />
                    </div>
                </div>
            </FadeInSection>

            <SlideInSection direction="left" className="mb-8">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">Install using CLI</p>
                <CodeBlock code={`npx shadcn@latest add "https://navyaui.vercel.app/r/meteor-background.json"`} language="bash" filename="Terminal" />
            </SlideInSection>

            <FadeInSection className="mb-10">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-6">Install Manually</p>
                <div className="space-y-6">
                    <div className="flex gap-4"><div className="flex flex-col items-center"><div className="flex items-center justify-center w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold shrink-0">1</div><div className="w-px flex-1 bg-border/30 mt-2" /></div><div className="flex-1 min-w-0 pb-2"><p className="text-sm font-medium text-foreground mb-3">Tailwind Configuration</p><p className="text-xs text-muted-foreground mb-3">Add this animation to your <code className="text-xs bg-secondary/60 px-1.5 py-0.5 rounded font-mono text-foreground">tailwind.config.js</code></p><CodeBlock code={`module.exports = {
  theme: {
    extend: {
      animation: {
        "navyaui-meteor": "navyaui-meteor 5s linear infinite",
      },
      keyframes: {
        "navyaui-meteor": {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": { transform: "rotate(215deg) translateX(-500px)", opacity: 0 },
        },
      }
    }
  }
}`} language="js" filename="tailwind.config.js" /></div></div>
                    <div className="flex gap-4"><div className="flex flex-col items-center"><div className="flex items-center justify-center w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold shrink-0">2</div></div><div className="flex-1 min-w-0"><p className="text-sm font-medium text-foreground mb-1">Copy the source code</p><p className="text-xs text-muted-foreground mb-3">Paste into <code className="text-xs bg-secondary/60 px-1.5 py-0.5 rounded font-mono text-foreground">components/navyaui/MeteorBackground.tsx</code></p><CodeBlock code={SOURCE_CODE} language="tsx" filename="components/navyaui/MeteorBackground.tsx" collapsible defaultCollapsed /></div></div>
                </div>
            </FadeInSection>

            <SlideInSection direction="right" className="mb-10">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">Usage</p>
                <CodeBlock code={`import { MeteorBackground } from "@/components/navyaui/MeteorBackground"\n\nexport function MeteorsDemo() {\n  return (\n    <div className="relative overflow-hidden rounded-xl p-6">\n      <h3>Feature Title</h3>\n      <p>Card content</p>\n      <MeteorBackground number={20} />\n    </div>\n  )\n}`} language="tsx" filename="Example.tsx" />
            </SlideInSection>

            <FadeInSection>
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-4">Props</p>
                <div className="rounded-xl border border-border/20 bg-[#1e1e1e] overflow-hidden overflow-x-auto">
                    <table className="w-full text-sm" style={{ color: "#d4d4d4" }}>
                        <thead><tr className="border-b border-[#2d2d2d]"><th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Prop</th><th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Type</th><th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Default</th><th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Description</th></tr></thead>
                        <tbody className="font-mono text-xs">
                            <tr className="border-b border-[#2d2d2d]"><td className="px-4 py-3" style={{ color: "#9cdcfe" }}>number</td><td className="px-4 py-3" style={{ color: "#4ec9b0" }}>number</td><td className="px-4 py-3" style={{ color: "#b5cea8" }}>20</td><td className="px-4 py-3 font-sans text-[#808080]">Number of meteor particles</td></tr>
                            <tr><td className="px-4 py-3" style={{ color: "#9cdcfe" }}>className</td><td className="px-4 py-3" style={{ color: "#4ec9b0" }}>string</td><td className="px-4 py-3 text-[#555]">—</td><td className="px-4 py-3 font-sans text-[#808080]">Additional CSS classes for each meteor</td></tr>
                        </tbody>
                    </table>
                </div>
            </FadeInSection>
        </div>
    );
}
