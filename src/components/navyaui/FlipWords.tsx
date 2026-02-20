"use client";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const FlipWords = ({
    words,
    duration = 3000,
    className,
}: {
    words: string[];
    duration?: number;
    className?: string;
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const startAnimation = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(true);
    }, [words.length]);

    useEffect(() => {
        if (!isAnimating) {
            const timer = setTimeout(startAnimation, duration);
            return () => clearTimeout(timer);
        }
    }, [isAnimating, duration, startAnimation]);

    return (
        <span className="inline-block relative" style={{ minWidth: "120px" }}>
            <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
                <motion.span
                    key={words[currentIndex]}
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        duration: 0.4,
                    }}
                    className={`inline-block whitespace-nowrap ${className || ""}`.trim()}
                >
                    {words[currentIndex]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};
