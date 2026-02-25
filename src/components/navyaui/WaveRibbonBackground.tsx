"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface WaveRibbonBackgroundProps {
    className?: string;
    lineCount?: number;
    speed?: number;
    strokeWidth?: number;
    darkColor?: string;
    lightColor?: string;
    backgroundColor?: string;
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const hexToRgb = (hex: string) => {
    const normalized = hex.replace("#", "");
    const full =
        normalized.length === 3
            ? normalized
                .split("")
                .map((char) => char + char)
                .join("")
            : normalized;

    const value = Number.parseInt(full, 16);
    return {
        r: (value >> 16) & 255,
        g: (value >> 8) & 255,
        b: value & 255,
    };
};

const blendHex = (startHex: string, endHex: string, ratio: number, alpha: number) => {
    const t = clamp(ratio, 0, 1);
    const start = hexToRgb(startHex);
    const end = hexToRgb(endHex);

    const r = Math.round(lerp(start.r, end.r, t));
    const g = Math.round(lerp(start.g, end.g, t));
    const b = Math.round(lerp(start.b, end.b, t));

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const WaveRibbonBackground = ({
    className,
    lineCount = 36,
    speed = 0.55,
    strokeWidth = 1.5,
    darkColor = "#caa0ff",
    lightColor = "#8fd6ff",
    backgroundColor = "#0f1228",
}: WaveRibbonBackgroundProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext("2d");
        if (!context) return;

        let animationFrame = 0;
        let width = 0;
        let height = 0;
        let dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));

        const resizeCanvas = () => {
            const rect = canvas.getBoundingClientRect();
            width = rect.width;
            height = rect.height;
            dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));

            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            context.setTransform(dpr, 0, 0, dpr, 0, 0);
            context.lineCap = "round";
            context.lineJoin = "round";
        };

        resizeCanvas();

        const observer = new ResizeObserver(() => resizeCanvas());
        observer.observe(canvas);

        const draw = (timestamp: number) => {
            const t = (timestamp / 1000) * speed;
            const safeCount = Math.max(8, lineCount);
            const centerY = height * 0.55;
            const spacing = Math.max(2.8, Math.min(4.8, height / (safeCount * 1.9)));
            const baseAmplitude = Math.max(14, Math.min(56, height * 0.12));
            const frequency = (Math.PI * 2) / Math.max(320, width * 0.72);
            const secondFrequency = frequency * 1.65;
            const lineLength = width + 100;
            const startX = -50;
            const step = Math.max(3.5, width / 160);

            context.fillStyle = backgroundColor;
            context.fillRect(0, 0, width, height);

            for (let index = 0; index < safeCount; index += 1) {
                const normalized = safeCount <= 1 ? 0.5 : index / (safeCount - 1);
                const centered = normalized - 0.5;
                const offsetY = centered * spacing * safeCount;
                const envelope = 1 - Math.min(1, Math.abs(centered) * 1.6);

                const primaryAmplitude = baseAmplitude * (0.35 + envelope * 0.7);
                const secondaryAmplitude = primaryAmplitude * 0.22;
                const linePhase = centered * 3.1;
                const wobble = Math.sin(t * 0.55 + centered * 5.4) * 5.5;
                const alpha = clamp(0.2 + envelope * 0.55, 0.15, 0.8);

                context.beginPath();
                for (let x = startX; x <= lineLength; x += step) {
                    const y =
                        centerY +
                        offsetY +
                        wobble +
                        Math.sin(x * frequency + t * 1.7 + linePhase) * primaryAmplitude +
                        Math.sin(x * secondFrequency - t * 1.15 + centered * 2.3) * secondaryAmplitude;

                    if (x === startX) {
                        context.moveTo(x, y);
                    } else {
                        context.lineTo(x, y);
                    }
                }

                context.strokeStyle = blendHex(darkColor, lightColor, normalized, alpha);
                context.lineWidth = strokeWidth;
                context.stroke();
            }

            animationFrame = window.requestAnimationFrame(draw);
        };

        animationFrame = window.requestAnimationFrame(draw);

        return () => {
            observer.disconnect();
            window.cancelAnimationFrame(animationFrame);
        };
    }, [backgroundColor, darkColor, lightColor, lineCount, speed, strokeWidth]);

    return <canvas ref={canvasRef} className={cn("absolute inset-0 h-full w-full", className)} aria-hidden="true" />;
};
