"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

export const TextGenerateEffect = ({
    words,
    className,
    filter = true,
    duration = 0.5,
}: {
    words: string;
    className?: string;
    filter?: boolean;
    duration?: number;
}) => {
    const [scope, animate] = useAnimate();
    const wordsArray = words.split(" ");

    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
                filter: filter ? "blur(0px)" : "none",
            },
            {
                duration: duration,
                delay: stagger(0.2),
            }
        );
    }, [scope, animate, filter, duration]);

    return (
        <div className={`font-bold ${className || ""}`.trim()}>
            <div className="mt-4">
                <div className="text-foreground text-2xl leading-snug tracking-wide" ref={scope}>
                    {wordsArray.map((word, idx) => (
                        <motion.span
                            key={word + idx}
                            className="opacity-0"
                            style={{
                                filter: filter ? "blur(10px)" : "none",
                            }}
                        >
                            {word}{" "}
                        </motion.span>
                    ))}
                </div>
            </div>
        </div>
    );
};
