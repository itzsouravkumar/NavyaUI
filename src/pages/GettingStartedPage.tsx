import { PageHeader, FadeInSection, SlideInSection } from "@/components/PageAnimations";
import CodeBlock from "@/components/CodeBlock";
import { motion } from "framer-motion";
import { Terminal, Settings, Puzzle, Sparkles } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: <Settings className="w-5 h-5" />,
        title: "Configuration",
        description: "Add the NavyaUI registry to your project's components.json file.",
    },
    {
        number: "02",
        icon: <Terminal className="w-5 h-5" />,
        title: "Initialization",
        description: "Initialize shadcn in your project using the CLI.",
    },
    {
        number: "03",
        icon: <Puzzle className="w-5 h-5" />,
        title: "AI Setup (Optional)",
        description: "Configure MCP for your AI assistant (e.g., Cursor, Copilot).",
    },
];

export default function GettingStartedPage() {
    return (
        <div className="max-w-4xl">
            <PageHeader
                title="Getting Started"
                description="Set up NavyaUI in your project in under 2 minutes. Works with shadcn/ui, Framer Motion, and optionally with your favourite AI assistant."
            />

            {/* Steps overview */}
            <FadeInSection className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="rounded-xl border border-border/20 metal-card p-5 relative overflow-hidden"
                        >
                            <span className="absolute top-3 right-3 text-4xl font-black text-foreground/[0.03] select-none">{step.number}</span>
                            <div className="p-2 rounded-lg bg-secondary/50 text-muted-foreground w-fit mb-3">
                                {step.icon}
                            </div>
                            <h3 className="font-semibold text-foreground text-sm">{step.title}</h3>
                            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </FadeInSection>

            {/* Step 1: Configuration */}
            <FadeInSection className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-foreground text-background text-xs font-bold">1</div>
                    <h2 className="text-xl font-bold text-foreground">Configuration</h2>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                    Add the NavyaUI registry to your project's <code className="text-xs bg-secondary/60 px-1.5 py-0.5 rounded font-mono text-foreground">components.json</code> file.
                </p>
                <CodeBlock
                    code={`{
  "registries": {
    "@navya": "https://navyaui.vercel.app/r/{name}.json"
  }
}`}
                    language="json"
                    filename="components.json"
                />
            </FadeInSection>

            {/* Step 2: Initialization */}
            <SlideInSection direction="left" className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-foreground text-background text-xs font-bold">2</div>
                    <h2 className="text-xl font-bold text-foreground">Initialization</h2>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                    Initialize shadcn in your project (required once):
                </p>
                <CodeBlock
                    code="npx shadcn@latest init"
                    language="bash"
                    filename="Terminal"
                />
            </SlideInSection>

            {/* Step 3: Client Setup */}
            <SlideInSection direction="right" className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-foreground text-background text-xs font-bold">3</div>
                    <h2 className="text-xl font-bold text-foreground">AI Client Setup (Optional)</h2>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                    Configure MCP for your AI assistant (optional):
                </p>
                <CodeBlock
                    code="npx shadcn@latest mcp init --client cursor"
                    language="bash"
                    filename="Terminal"
                />
            </SlideInSection>

            {/* Step 4: Add components */}
            <FadeInSection className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-foreground text-background text-xs font-bold">4</div>
                    <h2 className="text-xl font-bold text-foreground">Add Components</h2>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                    Now you can add any NavyaUI component to your project:
                </p>
                <div className="space-y-3">
                    <CodeBlock
                        code="npx shadcn@latest add @navya/spotlight-card"
                        language="bash"
                        filename="Terminal"
                    />
                    <CodeBlock
                        code="npx shadcn@latest add @navya/moving-border @navya/flip-words @navya/meteor-background"
                        language="bash"
                        filename="Terminal — add multiple"
                    />
                </div>
            </FadeInSection>

            {/* Step 5: Use */}
            <SlideInSection direction="left" className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-foreground text-background text-xs font-bold">5</div>
                    <h2 className="text-xl font-bold text-foreground">Use in Your Code</h2>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                    Import and use the components in your React files:
                </p>
                <CodeBlock
                    code={`import { SpotlightCard } from 'navyaui'
import { FlipWords } from 'navyaui'
import { MovingBorder } from 'navyaui'

export default function Hero() {
  return (
    <SpotlightCard>
      <h1>
        Build <FlipWords words={["stunning", "premium", "alive"]} /> websites
      </h1>
      <MovingBorder as="button">
        Get Started →
      </MovingBorder>
    </SpotlightCard>
  )
}`}
                    language="tsx"
                    filename="Hero.tsx"
                />
            </SlideInSection>

            {/* Available components */}
            <FadeInSection className="mb-16">
                <div className="rounded-2xl border border-border/20 glass p-8">
                    <div className="flex items-center gap-2 mb-5">
                        <Sparkles className="w-4 h-4 text-muted-foreground" />
                        <h3 className="font-semibold text-foreground">Available Components</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            "spotlight-card",
                            "moving-border",
                            "flip-words",
                            "text-generate-effect",
                            "3d-card",
                            "background-beams",
                            "meteor-background",
                            "infinite-moving-cards",
                            "floating-dock",
                            "liquid-glass-button",
                        ].map((name, idx) => (
                            <motion.div
                                key={name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.04, duration: 0.3 }}
                                className="rounded-lg bg-secondary/30 border border-border/10 px-3 py-2 truncate"
                            >
                                <code className="text-xs font-mono text-foreground">@navya/{name}</code>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </FadeInSection>
        </div>
    );
}
