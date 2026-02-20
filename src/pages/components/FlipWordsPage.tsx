import { FlipWords } from "@/components/navyaui/FlipWords";
import { PageHeader, FadeInSection, SlideInSection } from "@/components/PageAnimations";
import CodeBlock from "@/components/CodeBlock";

const SOURCE_CODE = `"use client";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const FlipWords = ({
    words,
    duration = 3000,
    className,
}: {
    words: string[];
    duration?: number;
    className?: string;
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const startAnimation = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(true);
    }, [words.length]);

    useEffect(() => {
        if (!isAnimating) {
            const timer = setTimeout(startAnimation, duration);
            return () => clearTimeout(timer);
        }
    }, [isAnimating, duration, startAnimation]);

    return (
        <span className="inline-block relative" style={{ minWidth: "120px" }}>
            <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
                <motion.span
                    key={words[currentIndex]}
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        duration: 0.4,
                    }}
                    className={\`inline-block whitespace-nowrap \${className || ""}\`.trim()}
                >
                    {words[currentIndex]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};
`;

export default function FlipWordsPage() {
    return (
        <div className="max-w-4xl">
            <PageHeader title="Flip Words" description="Cycles through a list of words with spring animation and smooth blur transitions." />

            <FadeInSection className="mb-10">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-4">Preview</p>
                <div className="rounded-2xl border border-border/20 glass p-12">
                    <div className="text-4xl font-bold text-center text-foreground">Build <FlipWords words={["beautiful", "modern", "stunning", "elegant"]} /> websites</div>
                </div>
            </FadeInSection>

            <SlideInSection direction="left" className="mb-8">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">Install using CLI</p>
                <CodeBlock code={`npx shadcn@latest add "https://navyaui.vercel.app/r/flip-words.json"`} language="bash" filename="Terminal" />
            </SlideInSection>

            <FadeInSection className="mb-10">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-6">Install Manually</p>
                <div className="space-y-6">
                    <div className="flex gap-4"><div className="flex flex-col items-center"><div className="flex items-center justify-center w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold shrink-0">1</div><div className="w-px flex-1 bg-border/30 mt-2" /></div><div className="flex-1 min-w-0 pb-2"><p className="text-sm font-medium text-foreground mb-3">Install dependencies</p><CodeBlock code="npm install framer-motion" language="bash" filename="Terminal" /></div></div>
                    <div className="flex gap-4"><div className="flex flex-col items-center"><div className="flex items-center justify-center w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold shrink-0">2</div></div><div className="flex-1 min-w-0"><p className="text-sm font-medium text-foreground mb-1">Copy the source code</p><p className="text-xs text-muted-foreground mb-3">Paste into <code className="text-xs bg-secondary/60 px-1.5 py-0.5 rounded font-mono text-foreground">components/navyaui/FlipWords.tsx</code></p><CodeBlock code={SOURCE_CODE} language="tsx" filename="components/navyaui/FlipWords.tsx" collapsible defaultCollapsed /></div></div>
                </div>
            </FadeInSection>

            <SlideInSection direction="right" className="mb-10">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">Usage</p>
                <CodeBlock code={`import { FlipWords } from "@/components/navyaui/FlipWords"\n\nexport function FlipWordsDemo() {\n  return (\n    <h1>\n      Build <FlipWords words={["beautiful", "modern", "stunning"]} duration={3000} /> websites\n    </h1>\n  )\n}`} language="tsx" filename="Example.tsx" />
            </SlideInSection>

            <FadeInSection>
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-4">Props</p>
                <div className="rounded-xl border border-border/20 bg-[#1e1e1e] overflow-hidden overflow-x-auto">
                    <table className="w-full text-sm" style={{ color: "#d4d4d4" }}>
                        <thead><tr className="border-b border-[#2d2d2d]"><th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Prop</th><th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Type</th><th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Default</th><th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Description</th></tr></thead>
                        <tbody className="font-mono text-xs">
                            <tr className="border-b border-[#2d2d2d]"><td className="px-4 py-3" style={{ color: "#9cdcfe" }}>words</td><td className="px-4 py-3" style={{ color: "#4ec9b0" }}>string[]</td><td className="px-4 py-3 text-[#555]">—</td><td className="px-4 py-3 font-sans text-[#808080]">Array of words to cycle through</td></tr>
                            <tr className="border-b border-[#2d2d2d]"><td className="px-4 py-3" style={{ color: "#9cdcfe" }}>duration</td><td className="px-4 py-3" style={{ color: "#4ec9b0" }}>number</td><td className="px-4 py-3" style={{ color: "#b5cea8" }}>3000</td><td className="px-4 py-3 font-sans text-[#808080]">Time between word changes (ms)</td></tr>
                            <tr><td className="px-4 py-3" style={{ color: "#9cdcfe" }}>className</td><td className="px-4 py-3" style={{ color: "#4ec9b0" }}>string</td><td className="px-4 py-3 text-[#555]">—</td><td className="px-4 py-3 font-sans text-[#808080]">Additional CSS classes</td></tr>
                        </tbody>
                    </table>
                </div>
            </FadeInSection>
        </div>
    );
}
