import { WaveRibbonBackground } from "@/components/navyaui/WaveRibbonBackground";
import { PageHeader, FadeInSection, SlideInSection } from "@/components/PageAnimations";
import CodeBlock from "@/components/CodeBlock";
import { useEffect, useState } from "react";

const USAGE_CODE = `import { WaveRibbonBackground } from "@/components/navyaui/WaveRibbonBackground";

export function HeroSection() {
  return (
    <div className="relative h-[28rem] w-full overflow-hidden rounded-2xl">
      <WaveRibbonBackground />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h2 className="text-3xl font-bold text-white">Synchronized Wave Background</h2>
      </div>
    </div>
  );
}`;

export default function WaveRibbonBackgroundPage() {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window === "undefined") return true;
        return document.documentElement.classList.contains("dark");
    });

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setIsDark(document.documentElement.classList.contains("dark"));
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="max-w-4xl">
            <PageHeader
                title="Wave Ribbon Background"
                description="Smooth synchronized wave ribbons with a premium neon gradient look."
            />

            <FadeInSection className="mb-10">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-4">Preview</p>
                <div className="h-[22rem] sm:h-[28rem] w-full rounded-2xl border border-border/20 bg-background relative overflow-hidden">
                    <WaveRibbonBackground
                        darkColor={isDark ? "#caa0ff" : "#8b5cf6"}
                        lightColor={isDark ? "#8fd6ff" : "#2563eb"}
                        backgroundColor={isDark ? "#0f1228" : "#f8fafc"}
                    />
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: isDark
                                ? "linear-gradient(to bottom, rgba(0,0,0,0.2), transparent, rgba(0,0,0,0.3))"
                                : "linear-gradient(to bottom, rgba(255,255,255,0.35), transparent, rgba(255,255,255,0.45))",
                        }}
                    />
                    <div className="relative z-10 h-full flex items-center justify-center pointer-events-none">
                        <h2 className="text-xl sm:text-3xl font-bold text-center px-4 text-foreground" style={{ color: isDark ? "rgba(255,255,255,0.9)" : undefined }}>
                            Navya UI's Wave Ribbon Background
                        </h2>
                    </div>
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
                        <thead>
                            <tr className="border-b border-[#2d2d2d]">
                                <th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Prop</th>
                                <th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Type</th>
                                <th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Default</th>
                                <th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Description</th>
                            </tr>
                        </thead>
                        <tbody className="font-mono text-xs">
                            <tr className="border-b border-[#2d2d2d]"><td className="px-4 py-3" style={{ color: "#9cdcfe" }}>lineCount</td><td className="px-4 py-3" style={{ color: "#4ec9b0" }}>number</td><td className="px-4 py-3" style={{ color: "#b5cea8" }}>36</td><td className="px-4 py-3 font-sans text-[#808080]">Number of wave lines rendered</td></tr>
                            <tr className="border-b border-[#2d2d2d]"><td className="px-4 py-3" style={{ color: "#9cdcfe" }}>speed</td><td className="px-4 py-3" style={{ color: "#4ec9b0" }}>number</td><td className="px-4 py-3" style={{ color: "#b5cea8" }}>0.55</td><td className="px-4 py-3 font-sans text-[#808080]">Overall animation speed multiplier</td></tr>
                            <tr className="border-b border-[#2d2d2d]"><td className="px-4 py-3" style={{ color: "#9cdcfe" }}>strokeWidth</td><td className="px-4 py-3" style={{ color: "#4ec9b0" }}>number</td><td className="px-4 py-3" style={{ color: "#b5cea8" }}>1.5</td><td className="px-4 py-3 font-sans text-[#808080]">Width of each line</td></tr>
                            <tr><td className="px-4 py-3" style={{ color: "#9cdcfe" }}>darkColor / lightColor / backgroundColor</td><td className="px-4 py-3" style={{ color: "#4ec9b0" }}>string</td><td className="px-4 py-3 text-[#555]">preset hex values</td><td className="px-4 py-3 font-sans text-[#808080]">Custom colors for the ribbon gradient and background</td></tr>
                        </tbody>
                    </table>
                </div>
            </FadeInSection>
        </div>
    );
}
