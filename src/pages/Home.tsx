import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FlipWords } from "@/components/navyaui/FlipWords";
import { ArrowRight, Sparkles, Zap, Box, MousePointer2, Type, Stars, Navigation, LayoutGrid } from "lucide-react";
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
];

// Reusable scroll-reveal wrapper
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
        <div className="max-w-5xl mx-auto">
            {/* ─── Hero with parallax fade ─── */}
            <motion.div
                ref={heroRef}
                style={{ y: heroY, opacity: heroOpacity }}
                className="py-10 sm:py-16 md:py-24"
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
                    className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.2] overflow-visible"
                >
                    <span className="text-foreground block">Make your websites</span>
                    <span className="text-foreground block mt-2">
                        look{" "}
                        <FlipWords words={["10x better", "stunning", "premium", "alive"]} />
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
                >
                    Copy paste the most trending animated components and use them in your
                    websites without having to worry about styling and animations.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-8 flex gap-3"
                >
                    <Link to="/components/spotlight-card">
                        <button
                            className="h-10 sm:h-11 px-5 sm:px-6 rounded-xl text-xs sm:text-sm font-medium inline-flex items-center gap-2 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                            style={{
                                background: "linear-gradient(135deg, #e8e8e8 0%, #999 30%, #333 70%, #111 100%)",
                                color: "#fff",
                                boxShadow: "0 2px 15px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.2)",
                            }}
                        >
                            Browse Components
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </Link>
                </motion.div>
            </motion.div>

            {/* ─── Featured Bento Grid ─── */}
            <ScrollReveal direction="scale">
                <div className="mb-16">
                    <div className="flex items-center gap-2 mb-6">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 32 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="h-px bg-gradient-to-r from-foreground/50 to-transparent"
                        />
                        <h2 className="text-lg font-semibold text-foreground">Featured</h2>
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
            <div className="mb-12 sm:mb-20">
                <ScrollReveal>
                    <div className="flex items-center gap-2 mb-6">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 32 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="h-px bg-gradient-to-r from-foreground/50 to-transparent"
                        />
                        <h2 className="text-lg font-semibold text-foreground">All Components</h2>
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
                <div className="mb-12 sm:mb-20">
                    <div className="flex items-center gap-2 mb-4">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 32 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="h-px bg-gradient-to-r from-foreground/50 to-transparent"
                        />
                        <h2 className="text-lg font-semibold text-foreground">Quick Start</h2>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">
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
