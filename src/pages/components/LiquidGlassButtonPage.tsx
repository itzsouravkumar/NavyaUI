import { LiquidGlassButton } from "@/components/navyaui/LiquidGlassButton";
import { PageHeader, FadeInSection, SlideInSection } from "@/components/PageAnimations";
import CodeBlock from "@/components/CodeBlock";

const USAGE_CODE = `import { LiquidGlassButton } from "@/components/navyaui/LiquidGlassButton";

export function HeroCTA() {
  return (
    <div className="flex items-center justify-center">
      <LiquidGlassButton>Get Started</LiquidGlassButton>
    </div>
  );
}`;

export default function LiquidGlassButtonPage() {
    return (
        <div className="max-w-4xl">
            <PageHeader
                title="Liquid Glass Button"
                description="Pure liquid glass style button with smooth floating highlights and responsive fluid reflections."
            />

            <FadeInSection className="mb-10">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-4">Preview</p>
                <div className="relative min-h-[320px] w-full overflow-hidden rounded-2xl border border-border/20 glass flex flex-col items-center justify-center gap-6 bg-secondary/20">
                    <LiquidGlassButton>Continue</LiquidGlassButton>
                    <LiquidGlassButton className="px-10 py-4 text-base">Launch Experience</LiquidGlassButton>
                </div>
            </FadeInSection>

            <SlideInSection direction="left" className="mb-8">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">Install using CLI</p>
                <CodeBlock code={`npx shadcn@latest add "https://navyaui.vercel.app/r/liquid-glass-button.json"`} language="bash" filename="Terminal" />
            </SlideInSection>

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
                            <tr className="border-b border-[#2d2d2d]"><td className="px-4 py-3" style={{ color: "#9cdcfe" }}>children</td><td className="px-4 py-3" style={{ color: "#4ec9b0" }}>ReactNode</td><td className="px-4 py-3 text-[#555]">"Get Started"</td><td className="px-4 py-3 font-sans text-[#808080]">Button content</td></tr>
                            <tr className="border-b border-[#2d2d2d]"><td className="px-4 py-3" style={{ color: "#9cdcfe" }}>className</td><td className="px-4 py-3" style={{ color: "#4ec9b0" }}>string</td><td className="px-4 py-3 text-[#555]">—</td><td className="px-4 py-3 font-sans text-[#808080]">Additional styling classes</td></tr>
                            <tr><td className="px-4 py-3" style={{ color: "#9cdcfe" }}>...button props</td><td className="px-4 py-3" style={{ color: "#4ec9b0" }}>ButtonHTMLAttributes</td><td className="px-4 py-3 text-[#555]">—</td><td className="px-4 py-3 font-sans text-[#808080]">Native button props like onClick, disabled, type</td></tr>
                        </tbody>
                    </table>
                </div>
            </FadeInSection>
        </div>
    );
}
