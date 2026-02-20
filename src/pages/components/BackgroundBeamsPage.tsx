import { BackgroundBeams } from "@/components/navyaui/BackgroundBeams";
import { PageHeader, FadeInSection, SlideInSection } from "@/components/PageAnimations";
import CodeBlock from "@/components/CodeBlock";

const SOURCE_CODE = `"use client";
import React from "react";

export const BackgroundBeams = ({
    className,
}: {
    className?: string;
}) => {
    const paths = [
        "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
        "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
        "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
        "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
        "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
        "M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835",
        "M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827",
        "M-331 -245C-331 -245 -263 160 201 287C665 414 733 819 733 819",
        "M-324 -253C-324 -253 -256 152 208 279C672 406 740 811 740 811",
        "M-317 -261C-317 -261 -249 144 215 271C679 398 747 803 747 803",
        "M-310 -269C-310 -269 -242 136 222 263C686 390 754 795 754 795",
        "M-303 -277C-303 -277 -235 128 229 255C693 382 761 787 761 787",
        "M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779",
        "M-289 -293C-289 -293 -221 112 243 239C707 366 775 771 775 771",
        "M-282 -301C-282 -301 -214 104 250 231C714 358 782 763 782 763",
        "M-275 -309C-275 -309 -207 96 257 223C721 350 789 755 789 755",
    ];

    return (
        <div
            className={\`absolute inset-0 z-0 flex items-center justify-center [mask-repeat:no-repeat] [mask-size:40px] \${className || ""}\`.trim()}
        >
            <svg
                className="pointer-events-none absolute z-0 h-full w-full"
                width="100%"
                height="100%"
                viewBox="0 0 696 316"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {paths.map((path, index) => (
                    <React.Fragment key={"beam-" + index}>
                        <path
                            d={path}
                            stroke={\`url(#linearGradient-\${index})\`}
                            strokeOpacity="0.4"
                            strokeWidth="0.5"
                        />
                        <defs>
                            <linearGradient
                                id={\`linearGradient-\${index}\`}
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#18CCFC" stopOpacity="0" />
                                <stop stopColor="#18CCFC" />
                                <stop offset="0.325" stopColor="#6344F5" />
                                <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
                                <animate
                                    attributeName="x1"
                                    from="-100%"
                                    to="200%"
                                    dur={\`\${3 + index * 0.5}s\`}
                                    repeatCount="indefinite"
                                />
                                <animate
                                    attributeName="x2"
                                    from="0%"
                                    to="300%"
                                    dur={\`\${3 + index * 0.5}s\`}
                                    repeatCount="indefinite"
                                />
                            </linearGradient>
                        </defs>
                    </React.Fragment>
                ))}
            </svg>
        </div>
    );
};
`;

export default function BackgroundBeamsPage() {
    return (
        <div className="max-w-4xl">
            <PageHeader title="Background Beams" description="Multiple animated SVG beams with gradient colors. Perfect for hero sections." />

            <FadeInSection className="mb-10">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-4">Preview</p>
                <div className="h-[20rem] sm:h-[30rem] md:h-[40rem] w-full rounded-2xl border border-border/20 bg-background relative flex flex-col items-center justify-center antialiased overflow-hidden">
                    <div className="max-w-2xl mx-auto p-4 relative z-10 text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold" style={{ background: "linear-gradient(180deg, hsl(var(--foreground)) 0%, hsl(var(--muted-foreground)) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>NavyaUI</h2>
                        <p className="text-muted-foreground max-w-lg mx-auto my-4 text-sm">Premium animated components built on shadcn/ui.</p>
                    </div>
                    <BackgroundBeams />
                </div>
            </FadeInSection>

            <SlideInSection direction="left" className="mb-8">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">Install using CLI</p>
                <CodeBlock code={`npx shadcn@latest add "https://navyaui.vercel.app/r/background-beams.json"`} language="bash" filename="Terminal" />
            </SlideInSection>

            <FadeInSection className="mb-10">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-6">Install Manually</p>
                <div className="space-y-6">
                    <div className="flex gap-4"><div className="flex flex-col items-center"><div className="flex items-center justify-center w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold shrink-0">1</div></div><div className="flex-1 min-w-0"><p className="text-sm font-medium text-foreground mb-1">Copy the source code</p><p className="text-xs text-muted-foreground mb-3">Paste into <code className="text-xs bg-secondary/60 px-1.5 py-0.5 rounded font-mono text-foreground">components/navyaui/BackgroundBeams.tsx</code></p><CodeBlock code={SOURCE_CODE} language="tsx" filename="components/navyaui/BackgroundBeams.tsx" collapsible defaultCollapsed /></div></div>
                </div>
            </FadeInSection>

            <SlideInSection direction="right" className="mb-10">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">Usage</p>
                <CodeBlock code={`import { BackgroundBeams } from "@/components/navyaui/BackgroundBeams"\n\nexport function HeroSection() {\n  return (\n    <div className="relative h-screen flex items-center justify-center">\n      <h1>Your Hero Content</h1>\n      <BackgroundBeams />\n    </div>\n  )\n}`} language="tsx" filename="Example.tsx" />
            </SlideInSection>

            <FadeInSection>
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-4">Props</p>
                <div className="rounded-xl border border-border/20 bg-[#1e1e1e] overflow-hidden overflow-x-auto">
                    <table className="w-full text-sm" style={{ color: "#d4d4d4" }}>
                        <thead><tr className="border-b border-[#2d2d2d]"><th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Prop</th><th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Type</th><th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Default</th><th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Description</th></tr></thead>
                        <tbody className="font-mono text-xs">
                            <tr><td className="px-4 py-3" style={{ color: "#9cdcfe" }}>className</td><td className="px-4 py-3" style={{ color: "#4ec9b0" }}>string</td><td className="px-4 py-3 text-[#555]">—</td><td className="px-4 py-3 font-sans text-[#808080]">Additional CSS classes for the container</td></tr>
                        </tbody>
                    </table>
                </div>
            </FadeInSection>
        </div>
    );
}
