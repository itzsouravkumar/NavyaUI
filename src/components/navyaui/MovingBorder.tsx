"use client";
import React from "react";
import { motion } from "framer-motion";

export const MovingBorder = ({
    children,
    duration = 2000,
    className,
    containerClassName,
    borderRadius = "9999px",
    as: Component = "button",
    ...otherProps
}: {
    children: React.ReactNode;
    duration?: number;
    className?: string;
    containerClassName?: string;
    borderRadius?: string;
    as?: React.ElementType;
    [key: string]: unknown;
}) => {
    return (
        <Component
            className={`relative inline-flex h-12 overflow-hidden p-[1px] focus:outline-none ${containerClassName || ""}`.trim()}
            style={{ borderRadius }}
            {...otherProps}
        >
            {/* Spinning gradient border */}
            <span className="absolute inset-[-1000%]">
                <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: duration / 1000, repeat: Infinity, ease: "linear" }}
                    className="block h-full w-full"
                    style={{
                        background: "conic-gradient(from 0deg, transparent 0%, #ffffff 10%, transparent 20%)",
                    }}
                />
            </span>

            {/* Inner content */}
            <span
                className={`relative inline-flex h-full w-full items-center justify-center gap-2 rounded-full bg-background px-6 py-2 text-sm font-medium text-foreground backdrop-blur-xl ${className || ""}`.trim()}
                style={{ borderRadius: `calc(${borderRadius} - 1px)` }}
            >
                {children}
            </span>
        </Component>
    );
};
