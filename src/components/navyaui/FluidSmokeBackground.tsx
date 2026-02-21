"use client";
import React, { useEffect, useRef } from "react";
import WebGLFluid from "webgl-fluid";
import { cn } from "@/lib/utils";

interface FluidSmokeBackgroundProps {
    className?: string;
    config?: any;
}

export const FluidSmokeBackground: React.FC<FluidSmokeBackgroundProps> = ({
    className,
    config = {}
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDark, setIsDark] = React.useState(() => {
        if (typeof window !== "undefined") {
            return document.documentElement.classList.contains("dark");
        }
        return true;
    });

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setIsDark(document.documentElement.classList.contains("dark"));
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!canvasRef.current) return;

        // Default configuration for a "smoke-like" fluid appearance
        const defaultConfig = {
            IMMEDIATE: true,
            TRIGGER: "hover",
            SIM_RESOLUTION: 128,
            DYE_RESOLUTION: 1024,
            CAPTURE_RESOLUTION: 512,
            DENSITY_DISSIPATION: 3,
            VELOCITY_DISSIPATION: 2,
            PRESSURE: 0.8,
            PRESSURE_ITERATIONS: 20,
            CURL: 30,
            SPLAT_RADIUS: 0.25,
            SPLAT_FORCE: 6000,
            SHADING: true,
            COLORFUL: true,
            COLOR_UPDATE_SPEED: 10,
            PAUSED: false,
            BACK_COLOR: isDark ? { r: 2, g: 2, b: 2 } : { r: 250, g: 250, b: 250 },
            TRANSPARENT: !isDark,
            BLOOM: true,
            BLOOM_ITERATIONS: 8,
            BLOOM_RESOLUTION: 256,
            BLOOM_INTENSITY: isDark ? 0.8 : 0.1,
            BLOOM_THRESHOLD: isDark ? 0.6 : 0.9,
            BLOOM_SOFT_KNEE: 0.7,
            SUNRAYS: true,
            SUNRAYS_RESOLUTION: 196,
            SUNRAYS_WEIGHT: isDark ? 1.0 : 0.4,
            ...config
        };

        WebGLFluid(canvasRef.current, defaultConfig);

        // Provide a small initial splat of color so the screen isn't completely black on load
        const event = new MouseEvent("mousemove", {
            clientX: window.innerWidth / 2,
            clientY: window.innerHeight / 2
        });
        canvasRef.current.dispatchEvent(event);

    }, [config, isDark]);

    return (
        <canvas
            ref={canvasRef}
            className={cn("w-full h-full block dark:bg-[#020202] bg-zinc-50", className)}
            style={{
                width: "100%",
                height: "100%",
                touchAction: "none"
            }}
        />
    );
};
