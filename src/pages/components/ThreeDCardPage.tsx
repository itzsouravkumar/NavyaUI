import { CardContainer, CardBody, CardItem } from "@/components/navyaui/ThreeDCard";
import { PageHeader, FadeInSection, SlideInSection } from "@/components/PageAnimations";
import CodeBlock from "@/components/CodeBlock";

const SOURCE_CODE = `"use client";
import React, { useRef, useState } from "react";

const MouseEnterContext = React.createContext<{
    isMouseEntered: boolean;
}>({ isMouseEntered: false });

export const CardContainer = ({
    children,
    className,
    containerClassName,
}: {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMouseEntered, setIsMouseEntered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 25;
        const y = (e.clientY - top - height / 2) / 25;
        containerRef.current.style.transform = \`rotateY(\${x}deg) rotateX(\${-y}deg)\`;
    };

    const handleMouseEnter = () => {
        setIsMouseEntered(true);
        if (!containerRef.current) return;
    };

    const handleMouseLeave = () => {
        if (!containerRef.current) return;
        setIsMouseEntered(false);
        containerRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
    };

    return (
        <MouseEnterContext.Provider value={{ isMouseEntered }}>
            <div
                className={\`flex items-center justify-center py-20 \${containerClassName || ""}\`.trim()}
                style={{ perspective: "1000px" }}
            >
                <div
                    ref={containerRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className={\`flex items-center justify-center relative transition-all duration-200 ease-linear \${className || ""}\`.trim()}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {children}
                </div>
            </div>
        </MouseEnterContext.Provider>
    );
};

export const CardBody = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={\`h-96 w-96 [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] \${className || ""}\`.trim()}
        >
            {children}
        </div>
    );
};

export const CardItem = ({
    as: Tag = "div",
    children,
    className,
    translateX = 0,
    translateY = 0,
    translateZ = 0,
    rotateX = 0,
    rotateY = 0,
    rotateZ = 0,
    ...rest
}: {
    as?: React.ElementType;
    children: React.ReactNode;
    className?: string;
    translateX?: number | string;
    translateY?: number | string;
    translateZ?: number | string;
    rotateX?: number | string;
    rotateY?: number | string;
    rotateZ?: number | string;
    [key: string]: unknown;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const { isMouseEntered } = React.useContext(MouseEnterContext);

    React.useEffect(() => {
        handleAnimations();
    }, [isMouseEntered]);

    const handleAnimations = () => {
        if (!ref.current) return;
        if (isMouseEntered) {
            ref.current.style.transform = \`translateX(\${translateX}px) translateY(\${translateY}px) translateZ(\${translateZ}px) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg) rotateZ(\${rotateZ}deg)\`;
        } else {
            ref.current.style.transform = "translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
        }
    };

    return (
        <Tag
            ref={ref}
            className={\`w-fit transition duration-200 ease-linear \${className || ""}\`.trim()}
            {...rest}
        >
            {children}
        </Tag>
    );
};`;

export default function ThreeDCardPage() {
  return (
    <div className="max-w-4xl">
      <PageHeader title="3D Card Effect" description="Hover over the card to see elements float in 3D space with perspective transforms." />

      <FadeInSection className="mb-10">
        <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-4">Preview</p>
        <div className="rounded-2xl border border-border/20 glass p-4">
          <CardContainer>
            <CardBody className="metal-card relative group/card border border-border/20 w-auto sm:w-[30rem] h-auto rounded-xl p-6">
              <CardItem translateZ="50" className="text-xl font-bold text-foreground">3D Hover Card</CardItem>
              <CardItem as="p" translateZ="60" className="text-muted-foreground text-sm max-w-sm mt-2">Hover to see depth layers elevate.</CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <div className="h-48 w-full rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #e8e8e8 0%, #999 30%, #333 70%, #111 100%)" }}>
                  <span className="text-white text-2xl font-bold drop-shadow-lg">NavyaUI</span>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </FadeInSection>

      <SlideInSection direction="left" className="mb-8">
        <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">Install using CLI</p>
        <CodeBlock code={`npx shadcn@latest add "https://navyaui.vercel.app/r/3d-card.json"`} language="bash" filename="Terminal" />
      </SlideInSection>

      <FadeInSection className="mb-10">
        <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-6">Install Manually</p>
        <div className="space-y-6">
          <div className="flex gap-4"><div className="flex flex-col items-center"><div className="flex items-center justify-center w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold shrink-0">1</div></div><div className="flex-1 min-w-0"><p className="text-sm font-medium text-foreground mb-1">Copy the source code</p><p className="text-xs text-muted-foreground mb-3">Paste into <code className="text-xs bg-secondary/60 px-1.5 py-0.5 rounded font-mono text-foreground">components/navyaui/ThreeDCard.tsx</code></p><CodeBlock code={SOURCE_CODE} language="tsx" filename="components/navyaui/ThreeDCard.tsx" collapsible defaultCollapsed /></div></div>
        </div>
      </FadeInSection>

      <SlideInSection direction="right" className="mb-10">
        <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">Usage</p>
        <CodeBlock code={`import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"\n\nexport function ThreeDCardDemo() {\n  return (\n    <CardContainer>\n      <CardBody>\n        <CardItem translateZ="50">\n          <h3>Title</h3>\n        </CardItem>\n        <CardItem translateZ="100">\n          <img src="/image.jpg" alt="Product" />\n        </CardItem>\n      </CardBody>\n    </CardContainer>\n  )\n}`} language="tsx" filename="Example.tsx" />
      </SlideInSection>

      <FadeInSection>
        <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-4">Props</p>
        <div className="rounded-xl border border-border/20 bg-[#1e1e1e] overflow-hidden overflow-x-auto">
          <table className="w-full text-sm" style={{ color: "#d4d4d4" }}>
            <thead><tr className="border-b border-[#2d2d2d]"><th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Component</th><th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Prop</th><th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Type</th><th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Description</th></tr></thead>
            <tbody className="font-mono text-xs">
              <tr className="border-b border-[#2d2d2d]"><td className="px-4 py-3" style={{ color: "#4ec9b0" }}>CardContainer</td><td className="px-4 py-3" style={{ color: "#9cdcfe" }}>containerClassName</td><td className="px-4 py-3" style={{ color: "#4ec9b0" }}>string</td><td className="px-4 py-3 font-sans text-[#808080]">Outer wrapper class</td></tr>
              <tr className="border-b border-[#2d2d2d]"><td className="px-4 py-3" style={{ color: "#4ec9b0" }}>CardBody</td><td className="px-4 py-3" style={{ color: "#9cdcfe" }}>className</td><td className="px-4 py-3" style={{ color: "#4ec9b0" }}>string</td><td className="px-4 py-3 font-sans text-[#808080]">Card body styles</td></tr>
              <tr className="border-b border-[#2d2d2d]"><td className="px-4 py-3" style={{ color: "#4ec9b0" }}>CardItem</td><td className="px-4 py-3" style={{ color: "#9cdcfe" }}>translateZ</td><td className="px-4 py-3" style={{ color: "#4ec9b0" }}>number | string</td><td className="px-4 py-3 font-sans text-[#808080]">Depth layer on hover</td></tr>
              <tr><td className="px-4 py-3" style={{ color: "#4ec9b0" }}>CardItem</td><td className="px-4 py-3" style={{ color: "#9cdcfe" }}>as</td><td className="px-4 py-3" style={{ color: "#4ec9b0" }}>ElementType</td><td className="px-4 py-3 font-sans text-[#808080]">Rendered HTML element</td></tr>
            </tbody>
          </table>
        </div>
      </FadeInSection>
    </div>
  );
}
