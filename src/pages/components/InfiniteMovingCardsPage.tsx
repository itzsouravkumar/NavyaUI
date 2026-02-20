import { InfiniteMovingCards } from "@/components/navyaui/InfiniteMovingCards";
import { PageHeader, FadeInSection, SlideInSection } from "@/components/PageAnimations";
import CodeBlock from "@/components/CodeBlock";

const testimonials = [
    { quote: "NavyaUI has completely transformed how we build UI.", name: "Sarah Chen", title: "Frontend Lead" },
    { quote: "The best component library I've used. Premium animations.", name: "Raj Patel", title: "CTO, StartupXYZ" },
    { quote: "Moving from plain shadcn to NavyaUI was effortless.", name: "Emily Rodriguez", title: "Designer" },
    { quote: "Our conversion rates increased 40%.", name: "Alex Kim", title: "Product Manager" },
];

const SOURCE_CODE = `"use client";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        quote: string;
        name: string;
        title: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);

    const [start, setStart] = useState(false);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty("--animation-direction", "forwards");
            } else {
                containerRef.current.style.setProperty("--animation-direction", "reverse");
            }
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className={\`scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] \${className || ""}\`.trim()}
        >
            <ul
                ref={scrollerRef}
                className={\`flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap \${start ? "animate-navyaui-scroll" : ""} \${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}\`.trim()}
            >
                {items.map((item, idx) => (
                    <li
                        className="w-[350px] max-w-full relative rounded-2xl border border-border flex-shrink-0 px-8 py-6 md:w-[450px] bg-card"
                        key={item.name + idx}
                    >
                        <blockquote>
                            <span className="relative z-20 text-sm leading-[1.6] text-foreground font-normal">
                                {item.quote}
                            </span>
                            <div className="relative z-20 mt-6 flex flex-row items-center">
                                <span className="flex flex-col gap-1">
                                    <span className="text-sm leading-[1.6] text-foreground font-normal">
                                        {item.name}
                                    </span>
                                    <span className="text-sm leading-[1.6] text-muted-foreground font-normal">
                                        {item.title}
                                    </span>
                                </span>
                            </div>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};
`;

export default function InfiniteMovingCardsPage() {
    return (
        <div className="max-w-4xl">
            <PageHeader title="Infinite Moving Cards" description="Auto-scrolling card carousel. Perfect for testimonials, logos, and social proof." />

            <FadeInSection className="mb-10">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-4">Preview</p>
                <div className="rounded-2xl border border-border/20 glass py-12 overflow-hidden">
                    <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
                </div>
            </FadeInSection>

            <SlideInSection direction="left" className="mb-8">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">Install using CLI</p>
                <CodeBlock code={`npx shadcn@latest add "https://navyaui.vercel.app/r/infinite-moving-cards.json"`} language="bash" filename="Terminal" />
            </SlideInSection>

            <FadeInSection className="mb-10">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-6">Install Manually</p>
                <div className="space-y-6">
                    <div className="flex gap-4"><div className="flex flex-col items-center"><div className="flex items-center justify-center w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold shrink-0">1</div><div className="w-px flex-1 bg-border/30 mt-2" /></div><div className="flex-1 min-w-0 pb-2"><p className="text-sm font-medium text-foreground mb-3">Install dependencies</p><CodeBlock code="" language="bash" filename="Terminal" /></div></div>
                    <div className="flex gap-4"><div className="flex flex-col items-center"><div className="flex items-center justify-center w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold shrink-0">1</div></div><div className="flex-1 min-w-0"><p className="text-sm font-medium text-foreground mb-1">Copy the source code</p><p className="text-xs text-muted-foreground mb-3">Paste into <code className="text-xs bg-secondary/60 px-1.5 py-0.5 rounded font-mono text-foreground">components/navyaui/InfiniteMovingCards.tsx</code></p><CodeBlock code={SOURCE_CODE} language="tsx" filename="components/navyaui/InfiniteMovingCards.tsx" collapsible defaultCollapsed /></div></div>
                </div>
            </FadeInSection>

            <SlideInSection direction="right" className="mb-10">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">Usage</p>
                <CodeBlock code={`import { InfiniteMovingCards } from "@/components/navyaui/InfiniteMovingCards"\n\nconst items = [\n  { quote: "Amazing!", name: "John", title: "CEO" },\n  { quote: "Best library.", name: "Jane", title: "CTO" },\n]\n\nexport function TestimonialsDemo() {\n  return (\n    <InfiniteMovingCards\n      items={items}\n      direction="left"\n      speed="normal"\n      pauseOnHover={true}\n    />\n  )\n}`} language="tsx" filename="Example.tsx" />
            </SlideInSection>

            <FadeInSection>
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-4">Props</p>
                <div className="rounded-xl border border-border/20 bg-[#1e1e1e] overflow-hidden overflow-x-auto">
                    <table className="w-full text-sm" style={{ color: "#d4d4d4" }}>
                        <thead><tr className="border-b border-[#2d2d2d]"><th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Prop</th><th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Type</th><th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Default</th><th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Description</th></tr></thead>
                        <tbody className="font-mono text-xs">
                            <tr className="border-b border-[#2d2d2d]"><td className="px-4 py-3" style={{ color: "#9cdcfe" }}>items</td><td className="px-4 py-3" style={{ color: "#4ec9b0" }}>{"{ quote, name, title }[]"}</td><td className="px-4 py-3 text-[#555]">—</td><td className="px-4 py-3 font-sans text-[#808080]">Array of card data</td></tr>
                            <tr className="border-b border-[#2d2d2d]"><td className="px-4 py-3" style={{ color: "#9cdcfe" }}>direction</td><td className="px-4 py-3" style={{ color: "#4ec9b0" }}>"left" | "right"</td><td className="px-4 py-3" style={{ color: "#ce9178" }}>"left"</td><td className="px-4 py-3 font-sans text-[#808080]">Scroll direction</td></tr>
                            <tr className="border-b border-[#2d2d2d]"><td className="px-4 py-3" style={{ color: "#9cdcfe" }}>speed</td><td className="px-4 py-3" style={{ color: "#4ec9b0" }}>"fast" | "normal" | "slow"</td><td className="px-4 py-3" style={{ color: "#ce9178" }}>"fast"</td><td className="px-4 py-3 font-sans text-[#808080]">Scroll speed</td></tr>
                            <tr><td className="px-4 py-3" style={{ color: "#9cdcfe" }}>pauseOnHover</td><td className="px-4 py-3" style={{ color: "#4ec9b0" }}>boolean</td><td className="px-4 py-3" style={{ color: "#569cd6" }}>true</td><td className="px-4 py-3 font-sans text-[#808080]">Pause animation on hover</td></tr>
                        </tbody>
                    </table>
                </div>
            </FadeInSection>
        </div>
    );
}
