"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LiquidGlassButtonProps extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration"
> {
    className?: string;
    children?: React.ReactNode;
}

export const LiquidGlassButton = ({
    className,
    children = "Get Started",
    disabled,
    ...props
}: LiquidGlassButtonProps) => {
    const [pointer, setPointer] = useState({ x: 50, y: 50 });

    const handlePointerMove = (event: React.MouseEvent<HTMLButtonElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        setPointer({ x, y });
    };

    return (
        <motion.button
            type="button"
            disabled={disabled}
            onMouseMove={handlePointerMove}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-3",
                "border border-white/70 dark:border-white/30",
                "backdrop-blur-2xl text-sky-950 dark:text-white font-semibold tracking-wide",
                "shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-8px_20px_rgba(28,89,130,0.2),0_14px_35px_-18px_rgba(7,64,102,0.42),0_0_0_1px_rgba(173,236,255,0.45)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-14px_30px_rgba(2,20,42,0.62),0_24px_42px_-18px_rgba(0,0,0,0.95),0_10px_18px_-10px_rgba(12,92,160,0.72),0_0_0_1px_rgba(173,236,255,0.24)]",
                "transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-0.5",
                "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
                className,
            )}
            style={{
                background:
                    "linear-gradient(160deg, rgba(237,252,255,0.86) 0%, rgba(189,233,252,0.74) 28%, rgba(123,202,239,0.72) 66%, rgba(86,174,222,0.76) 100%)",
            }}
            {...props}
        >
            <span
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(255,255,255,0.65), rgba(255,255,255,0.18) 38%, rgba(255,255,255,0.05) 55%, rgba(255,255,255,0.12) 100%)",
                }}
            />

            <span
                className="pointer-events-none absolute left-[10%] top-[21%] h-[30%] w-[45%] rounded-full opacity-80 blur-[0.9px]"
                style={{
                    background:
                        "linear-gradient(90deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.12) 100%)",
                }}
            />

            <span
                className="pointer-events-none absolute right-[12%] bottom-[16%] h-[26%] w-[36%] rounded-full opacity-45 blur-[1px]"
                style={{
                    background:
                        "linear-gradient(90deg, rgba(188,236,255,0.18) 0%, rgba(205,244,255,0.62) 50%, rgba(188,236,255,0.18) 100%)",
                }}
            />

            <span
                className="pointer-events-none absolute -inset-10 opacity-80"
                style={{
                    background:
                        "radial-gradient(42% 56% at 24% 30%, rgba(255,255,255,0.9), transparent 70%), radial-gradient(48% 62% at 78% 70%, rgba(141,228,255,0.5), transparent 75%)",
                }}
            />

            <span
                className="pointer-events-none absolute inset-0 opacity-80"
                style={{
                    background: `radial-gradient(170px circle at ${pointer.x}% ${pointer.y}%, rgba(225,251,255,0.75), transparent 70%)`,
                }}
            />

            <span className="pointer-events-none absolute -right-20 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full bg-cyan-100/40 blur-2xl" />

            <span className="pointer-events-none absolute inset-[1px] rounded-full border border-white/60 opacity-70" />
            <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-cyan-100/55 ring-inset" />
            <span className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_16px_30px_rgba(255,255,255,0.22),inset_0_-14px_24px_rgba(10,68,115,0.4)]" />
            <span className="pointer-events-none absolute left-3 right-3 top-1.5 h-[34%] rounded-full bg-white/35 blur-[1.5px]" />
            <span className="pointer-events-none absolute -bottom-6 left-8 right-8 h-8 rounded-full bg-black/35 blur-md hidden dark:block" />

            <span className="relative z-10 drop-shadow-[0_1px_4px_rgba(8,38,78,0.35)]">{children}</span>
        </motion.button>
    );
};
