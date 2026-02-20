import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { PageHeader, FadeInSection, SlideInSection } from "@/components/PageAnimations";
import CodeBlock from "@/components/CodeBlock";

const SOURCE_CODE = `"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
    words,
    className,
    filter = true,
    duration = 0.5,
}: {
    words: string;
    className?: string;
    filter?: boolean;
    duration?: number;
}) => {
    const [scope, animate] = useAnimate();
    const wordsArray = words.split(" ");

    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
                filter: filter ? "blur(0px)" : "none",
            },
            {
                duration: duration,
                delay: stagger(0.2),
            }
        );
    }, [scope, animate, filter, duration]);

    return (
        <div className={cn("font-bold", className)}>
            <div className="mt-4">
                <div className="text-foreground text-2xl leading-snug tracking-wide" ref={scope}>
                    {wordsArray.map((word, idx) => (
                        <motion.span
                            key={word + idx}
                            className="opacity-0"
                            style={{ filter: filter ? "blur(10px)" : "none" }}
                        >
                            {word}{" "}
                        </motion.span>
                    ))}
                </div>
            </div>
        </div>
    );
};`;

export default function TextGeneratePage() {
    return (
        <div className="max-w-4xl">
            <PageHeader title="Text Generate Effect" description="Text appears word by word with a blur-to-sharp staggered animation." />

            <FadeInSection className="mb-10">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-4">Preview</p>
                <div className="rounded-2xl border border-border/20 glass p-12">
                    <TextGenerateEffect words="NavyaUI is a premium animated component library built on shadcn/ui and Framer Motion for modern React applications." />
                </div>
            </FadeInSection>

            <SlideInSection direction="left" className="mb-8">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">Install using CLI</p>
                <CodeBlock code={`npx shadcn@latest add "https://navyaui.vercel.app/r/text-generate-effect.json"`} language="bash" filename="Terminal" />
            </SlideInSection>

            <FadeInSection className="mb-10">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-6">Install Manually</p>
                <div className="space-y-6">
                    <div className="flex gap-4"><div className="flex flex-col items-center"><div className="flex items-center justify-center w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold shrink-0">1</div><div className="w-px flex-1 bg-border/30 mt-2" /></div><div className="flex-1 min-w-0 pb-2"><p className="text-sm font-medium text-foreground mb-3">Install dependencies</p><CodeBlock code="npm install framer-motion clsx tailwind-merge" language="bash" filename="Terminal" /></div></div>
                    <div className="flex gap-4"><div className="flex flex-col items-center"><div className="flex items-center justify-center w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold shrink-0">2</div><div className="w-px flex-1 bg-border/30 mt-2" /></div><div className="flex-1 min-w-0 pb-2"><p className="text-sm font-medium text-foreground mb-3">Add util file</p><CodeBlock code={`import { ClassValue, clsx } from "clsx";\nimport { twMerge } from "tailwind-merge";\n\nexport function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs));\n}`} language="tsx" filename="lib/utils.ts" /></div></div>
                    <div className="flex gap-4"><div className="flex flex-col items-center"><div className="flex items-center justify-center w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold shrink-0">3</div></div><div className="flex-1 min-w-0"><p className="text-sm font-medium text-foreground mb-1">Copy the source code</p><p className="text-xs text-muted-foreground mb-3">Paste into <code className="text-xs bg-secondary/60 px-1.5 py-0.5 rounded font-mono text-foreground">components/ui/text-generate-effect.tsx</code></p><CodeBlock code={SOURCE_CODE} language="tsx" filename="components/ui/text-generate-effect.tsx" collapsible defaultCollapsed /></div></div>
                </div>
            </FadeInSection>

            <SlideInSection direction="right" className="mb-10">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">Usage</p>
                <CodeBlock code={`import { TextGenerateEffect } from "@/components/ui/text-generate-effect"\n\nexport function TextGenerateDemo() {\n  return (\n    <TextGenerateEffect\n      words="Your text appears word by word with a blur animation."\n      duration={0.5}\n      filter={true}\n    />\n  )\n}`} language="tsx" filename="Example.tsx" />
            </SlideInSection>

            <FadeInSection>
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-4">Props</p>
                <div className="rounded-xl border border-border/20 bg-[#1e1e1e] overflow-hidden overflow-x-auto">
                    <table className="w-full text-sm" style={{ color: "#d4d4d4" }}>
                        <thead><tr className="border-b border-[#2d2d2d]"><th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Prop</th><th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Type</th><th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Default</th><th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Description</th></tr></thead>
                        <tbody className="font-mono text-xs">
                            <tr className="border-b border-[#2d2d2d]"><td className="px-4 py-3" style={{ color: "#9cdcfe" }}>words</td><td className="px-4 py-3" style={{ color: "#4ec9b0" }}>string</td><td className="px-4 py-3 text-[#555]">—</td><td className="px-4 py-3 font-sans text-[#808080]">Text to animate word by word</td></tr>
                            <tr className="border-b border-[#2d2d2d]"><td className="px-4 py-3" style={{ color: "#9cdcfe" }}>duration</td><td className="px-4 py-3" style={{ color: "#4ec9b0" }}>number</td><td className="px-4 py-3" style={{ color: "#b5cea8" }}>0.5</td><td className="px-4 py-3 font-sans text-[#808080]">Animation duration per word</td></tr>
                            <tr className="border-b border-[#2d2d2d]"><td className="px-4 py-3" style={{ color: "#9cdcfe" }}>filter</td><td className="px-4 py-3" style={{ color: "#4ec9b0" }}>boolean</td><td className="px-4 py-3" style={{ color: "#569cd6" }}>true</td><td className="px-4 py-3 font-sans text-[#808080]">Enable blur filter animation</td></tr>
                            <tr><td className="px-4 py-3" style={{ color: "#9cdcfe" }}>className</td><td className="px-4 py-3" style={{ color: "#4ec9b0" }}>string</td><td className="px-4 py-3 text-[#555]">—</td><td className="px-4 py-3 font-sans text-[#808080]">Additional CSS classes</td></tr>
                        </tbody>
                    </table>
                </div>
            </FadeInSection>
        </div>
    );
}
