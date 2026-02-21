"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThreeDExpandableButtonProps {
    icon?: LucideIcon;
    text?: string;
    onClick?: () => void;
    className?: string;
    buttonColor?: string;
    shadowColor?: string;
}

export const ThreeDExpandableButton = ({
    icon: Icon = Home,
    text = "Home",
    onClick,
    className,
    buttonColor = "from-neutral-700 to-neutral-800",
    shadowColor = "#171717",
}: ThreeDExpandableButtonProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    return (
        <div className="relative flex items-center justify-center p-8">
            <motion.button
                className={cn(
                    "relative flex items-center justify-center p-4 rounded-full outline-none h-16 origin-center group",
                    `bg-gradient-to-b ${buttonColor} text-white border border-white/10`,
                    className
                )}
                style={{
                    boxShadow: isPressed
                        ? `inset 0px 2px 2px rgba(255,255,255,0.2), inset 0px -2px 2px rgba(0,0,0,0.5), 0px 0px 0px ${shadowColor}, 0px 4px 5px rgba(0,0,0,0.4)`
                        : isHovered
                            ? `inset 0px 2px 2px rgba(255,255,255,0.2), inset 0px -2px 2px rgba(0,0,0,0.5), 0px 6px 0px ${shadowColor}, 0px 10px 15px rgba(0,0,0,0.4)`
                            : `inset 0px 2px 2px rgba(255,255,255,0.2), inset 0px -2px 2px rgba(0,0,0,0.5), 0px 8px 0px ${shadowColor}, 0px 12px 20px rgba(0,0,0,0.4)`,
                    transform: isPressed
                        ? "translateY(8px)"
                        : isHovered
                            ? "translateY(2px)"
                            : "translateY(0px)",
                }}
                initial={false}
                animate={{
                    boxShadow: isPressed
                        ? `inset 0px 2px 2px rgba(255,255,255,0.2), inset 0px -2px 2px rgba(0,0,0,0.5), 0px 0px 0px ${shadowColor}, 0px 4px 5px rgba(0,0,0,0.4)`
                        : isHovered
                            ? `inset 0px 2px 2px rgba(255,255,255,0.2), inset 0px -2px 2px rgba(0,0,0,0.5), 0px 6px 0px ${shadowColor}, 0px 10px 15px rgba(0,0,0,0.4)`
                            : `inset 0px 2px 2px rgba(255,255,255,0.2), inset 0px -2px 2px rgba(0,0,0,0.5), 0px 8px 0px ${shadowColor}, 0px 12px 20px rgba(0,0,0,0.4)`,
                    y: isPressed ? 8 : isHovered ? 2 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                    setIsHovered(false);
                    setIsPressed(false);
                }}
                onMouseDown={() => setIsPressed(true)}
                onMouseUp={() => setIsPressed(false)}
                onFocus={() => setIsHovered(true)}
                onBlur={() => {
                    setIsHovered(false);
                    setIsPressed(false);
                }}
                onClick={onClick}
                layout
            >
                <motion.div layout className="flex items-center justify-center relative z-10">
                    <Icon className="w-6 h-6 shrink-0 drop-shadow-md text-white/90 group-hover:text-white transition-colors" />

                    <AnimatePresence initial={false}>
                        {isHovered && (
                            <motion.div
                                initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                                animate={{ width: "auto", opacity: 1, marginLeft: 8 }}
                                exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                className="overflow-hidden whitespace-nowrap flex items-center"
                            >
                                <span className="font-semibold tracking-wide drop-shadow-md pr-2 text-white">
                                    {text}
                                </span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Glossy top reflection layer for extra 3D feel */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
            </motion.button>
        </div>
    );
};
