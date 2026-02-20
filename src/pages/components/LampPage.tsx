import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";

export default function LampPage() {
    return (
        <div className="max-w-4xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-foreground mb-2">Lamp Effect</h1>
                <p className="text-muted-foreground">A lamp-style conic gradient effect that expands on scroll. Great for section headers.</p>
            </div>

            <div className="rounded-2xl border border-border/40 overflow-hidden mb-8">
                <LampContainer>
                    <motion.h1
                        initial={{ opacity: 0.5, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                        className="mt-8 py-4 text-center text-4xl font-medium tracking-tight md:text-7xl"
                        style={{
                            background: "linear-gradient(180deg, hsl(var(--foreground)) 0%, hsl(var(--muted-foreground)) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Build lamps <br /> the right way
                    </motion.h1>
                </LampContainer>
            </div>

            <div className="rounded-2xl border border-border/40 glass p-8">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-4">Usage</p>
                <div className="rounded-xl bg-background/80 border border-border/30 p-4">
                    <pre className="text-sm font-mono text-foreground overflow-x-auto whitespace-pre">{`import { LampContainer } from "@/components/ui/lamp";

<LampContainer>
  <h1>Your section title</h1>
</LampContainer>`}</pre>
                </div>
            </div>
        </div>
    );
}
