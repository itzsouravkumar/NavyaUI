import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FlipWords } from "@/components/navyaui/FlipWords";
import { ArrowRight, Sparkles, Zap, Box, MousePointer2, Type, Stars, Navigation, LayoutGrid, Droplets } from "lucide-react";
import CodeBlock from "@/components/CodeBlock";

const featured = [
    {
        name: "Spotlight Card",
        href: "/components/spotlight-card",
        desc: "Radial gradient follows your cursor for a premium card hover",
        icon: <MousePointer2 className="w-5 h-5" />,
        span: "md:col-span-2 md:row-span-2",
    },
    {
        name: "3D Card",
        href: "/components/3d-card",
        desc: "Perspective tilt with depth layers",
        icon: <Box className="w-5 h-5" />,
        span: "",
    },
    {
        name: "Moving Border",
        href: "/components/moving-border",
        desc: "Animated orbiting glow border",
        icon: <Sparkles className="w-5 h-5" />,
        span: "",
    },
    {
        name: "Flip Words",
        href: "/components/flip-words",
        desc: "Spring-animated word cycling",
        icon: <Type className="w-5 h-5" />,
        span: "",
    },
    {
        name: "Background Beams",
        href: "/components/background-beams",
        desc: "SVG path animated beams",
        icon: <Zap className="w-5 h-5" />,
        span: "",
    },
];

const allComponents = [
    { name: "Spotlight Card", href: "/components/spotlight-card", desc: "Cursor-tracking gradient", icon: <MousePointer2 className="w-4 h-4" /> },
    { name: "Moving Border", href: "/components/moving-border", desc: "Orbiting glow border", icon: <Sparkles className="w-4 h-4" /> },
    { name: "Flip Words", href: "/components/flip-words", desc: "Spring word cycling", icon: <Type className="w-4 h-4" /> },
    { name: "Text Generate", href: "/components/text-generate-effect", desc: "Staggered blur reveal", icon: <Type className="w-4 h-4" /> },
    { name: "3D Card", href: "/components/3d-card", desc: "Perspective hover tilt", icon: <Box className="w-4 h-4" /> },
    { name: "Background Beams", href: "/components/background-beams", desc: "SVG beam animations", icon: <Zap className="w-4 h-4" /> },
    { name: "Meteors", href: "/components/meteors", desc: "Shooting star particles", icon: <Stars className="w-4 h-4" /> },
    { name: "Infinite Cards", href: "/components/infinite-moving-cards", desc: "Auto-scroll carousel", icon: <LayoutGrid className="w-4 h-4" /> },
    { name: "Floating Dock", href: "/components/floating-dock", desc: "macOS-style dock", icon: <Navigation className="w-4 h-4" /> },
    { name: "Wave Ribbon Background", href: "/components/wave-ribbon-background", desc: "Smooth synced wave ribbons", icon: <Zap className="w-4 h-4" /> },
    { name: "Liquid Glass Button", href: "/components/liquid-glass-button", desc: "Pure fluid glass CTA", icon: <Droplets className="w-4 h-4" /> },
];

function ScrollReveal({
    children,
    className,
    delay = 0,
    direction = "up",
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "left" | "right" | "scale";
}) {
    const initial =
        direction === "up"
            ? { opacity: 0, y: 40, filter: "blur(8px)" }
            : direction === "left"
                ? { opacity: 0, x: -40, filter: "blur(6px)" }
                : direction === "right"
                    ? { opacity: 0, x: 40, filter: "blur(6px)" }
                    : { opacity: 0, scale: 0.92, filter: "blur(10px)" };

    const animate =
        direction === "up"
            ? { opacity: 1, y: 0, filter: "blur(0px)" }
            : direction === "left" || direction === "right"
                ? { opacity: 1, x: 0, filter: "blur(0px)" }
                : { opacity: 1, scale: 1, filter: "blur(0px)" };

    return (
        <motion.div
            initial={initial}
            whileInView={animate}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
                duration: 0.7,
                delay,
                ease: [0.25, 0.4, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default function Home() {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

    return (
        <div className="w-full relative">
            {/* Absolute premium background glow for home page */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 dark:bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-500/10 dark:bg-purple-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />

            {/* ─── Hero with parallax fade ─── */}
            <motion.div
                ref={heroRef}
                style={{ y: heroY, opacity: heroOpacity }}
                className="py-16 sm:py-24 md:py-32 flex flex-col items-center justify-center text-center"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/40 bg-secondary/30 text-[10px] sm:text-xs text-muted-foreground mb-6 sm:mb-8 flex-wrap">
                        <Sparkles className="w-3 h-3 shrink-0" />
                        <span>Free to use · Built on shadcn/ui · Framer Motion</span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.2] max-w-4xl"
                >
                    <span className="text-foreground block mb-1">Make your websites look</span>
                    <span className="text-foreground block h-[1.3em]">
                        <FlipWords words={["10x better", "stunning", "premium", "alive"]} />
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-medium"
                >
                    Copy paste the most trending animated components and use them in your
                    websites without having to worry about styling and animations.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-10 flex flex-wrap items-center justify-center gap-4"
                >
                    <Link to="/components/spotlight-card">
                        <button
                            className="h-12 sm:h-14 px-8 sm:px-10 rounded-2xl text-sm sm:text-base font-semibold inline-flex items-center gap-2 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                            style={{
                                background: "linear-gradient(135deg, #e8e8e8 0%, #999 30%, #333 70%, #111 100%)",
                                color: "#fff",
                                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.2), 0 0 20px 0 rgba(255,255,255,0.1)",
                            }}
                        >
                            Browse Components
                            <ArrowRight className="w-5 h-5 ml-1" />
                        </button>
                    </Link>
                    <Link to="/getting-started">
                        <button className="h-12 sm:h-14 px-8 sm:px-10 rounded-2xl text-sm sm:text-base font-semibold inline-flex items-center gap-2 border border-border/40 bg-secondary/45 text-foreground hover:bg-secondary/70 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]">
                            Get Started
                            <ArrowRight className="w-5 h-5 ml-1" />
                        </button>
                    </Link>
                </motion.div>
            </motion.div>

            {/* ─── Featured Bento Grid ─── */}
            <ScrollReveal direction="scale">
                <div className="mb-20 max-w-5xl mx-auto">
                    <div className="flex flex-col items-center justify-center text-center gap-2 mb-10">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 48 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="h-1 rounded-full bg-foreground mb-2"
                        />
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Featured Masterpieces</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-2xl overflow-hidden border border-border/20 bg-border/10">
                        {featured.map((card, idx) => (
                            <ScrollReveal key={card.href} delay={0.08 * idx} direction="up" className={card.span}>
                                <Link to={card.href} className="block h-full">
                                    <div className="group relative h-full metal-card p-6 hover:bg-secondary/30 transition-all duration-300">
                                        <div className="flex items-start justify-between">
                                            <motion.div
                                                whileHover={{ rotate: 8, scale: 1.1 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                                className="p-2.5 rounded-xl glass text-muted-foreground group-hover:text-foreground transition-colors"
                                            >
                                                {card.icon}
                                            </motion.div>
                                            <ArrowRight className="w-4 h-4 text-muted-foreground/0 group-hover:text-foreground transition-all duration-300 group-hover:translate-x-1" />
                                        </div>
                                        <h3 className="mt-4 font-semibold text-foreground">{card.name}</h3>
                                        <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                                    </div>
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </ScrollReveal>

            {/* ─── All Components ─── */}
            <div className="mb-16 sm:mb-24 max-w-5xl mx-auto">
                <ScrollReveal>
                    <div className="flex flex-col items-center justify-center text-center gap-2 mb-10">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 48 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="h-1 rounded-full bg-foreground mb-2"
                        />
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">All Components</h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {allComponents.map((card, idx) => (
                        <ScrollReveal
                            key={card.href}
                            delay={0.05 * idx}
                            direction={idx % 3 === 0 ? "left" : idx % 3 === 2 ? "right" : "up"}
                        >
                            <Link to={card.href}>
                                <motion.div
                                    whileHover={{ y: -3, scale: 1.01 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                    className="group rounded-xl border border-border/20 metal-card p-5 hover:border-border/40 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-1.5 rounded-lg bg-secondary/50 text-muted-foreground group-hover:text-foreground transition-colors">
                                            {card.icon}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-medium text-sm text-foreground truncate">{card.name}</h3>
                                            <p className="text-xs text-muted-foreground truncate">{card.desc}</p>
                                        </div>
                                        <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/0 group-hover:text-foreground transition-all duration-200 shrink-0" />
                                    </div>
                                </motion.div>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>
            </div>

            {/* ─── Quick Start ─── */}
            <ScrollReveal direction="scale">
                <div className="mb-16 sm:mb-24 max-w-3xl mx-auto">
                    <div className="flex flex-col items-center justify-center text-center gap-2 mb-6">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 48 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="h-1 rounded-full bg-foreground mb-2"
                        />
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Quick Start</h2>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6 text-center">
                        Install NavyaUI and start using premium animated components in your React project.
                    </p>
                    <div className="space-y-4">
                        <ScrollReveal delay={0.1} direction="left">
                            <CodeBlock code="npm install navyaui" language="bash" filename="Terminal" />
                        </ScrollReveal>
                        <ScrollReveal delay={0.25} direction="right">
                            <CodeBlock
                                code={`import { SpotlightCard, FlipWords, MovingBorder } from 'navyaui'

export default function App() {
  return (
    <SpotlightCard>
      <h1>Hello NavyaUI</h1>
    </SpotlightCard>
  )
}`}
                                language="tsx"
                                filename="App.tsx"
                            />
                        </ScrollReveal>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    );
}
