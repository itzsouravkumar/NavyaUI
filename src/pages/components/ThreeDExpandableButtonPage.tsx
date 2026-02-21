import React from "react";
import { PageHeader, FadeInSection, SlideInSection } from "@/components/PageAnimations";
import CodeBlock from "@/components/CodeBlock";
import { ThreeDExpandableButton } from "@/components/navyaui/ThreeDExpandableButton";
import { Home, Settings, User } from "lucide-react";

export default function ThreeDExpandableButtonPage() {
    return (
        <div className="max-w-4xl">
            {/* Header */}
            <PageHeader
                title="3D Expandable Button"
                description="A highly interactive, completely 3D beveled button that begins as an icon and expands on hover."
            />

            {/* Preview Section */}
            <FadeInSection className="mb-10">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-4">Preview</p>
                <div className="relative min-h-[300px] w-full overflow-hidden rounded-2xl border border-border/20 glass flex flex-col items-center justify-center gap-8">
                    <div className="flex gap-4 items-center justify-center p-8 w-full bg-secondary/10">
                        <ThreeDExpandableButton
                            icon={Home}
                            text="Home"
                            buttonColor="from-neutral-700 to-neutral-800"
                            shadowColor="#171717"
                        />
                        <ThreeDExpandableButton
                            icon={User}
                            text="Profile"
                            buttonColor="from-blue-600 to-blue-800"
                            shadowColor="#1e3a8a"
                        />
                        <ThreeDExpandableButton
                            icon={Settings}
                            text="Settings"
                            buttonColor="from-emerald-600 to-emerald-800"
                            shadowColor="#064e3b"
                        />
                    </div>
                </div>
            </FadeInSection>

            {/* Content Details */}
            <SlideInSection direction="left" className="mb-8">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">Install using CLI</p>
                <CodeBlock code={`npx shadcn@latest add "https://navyaui.vercel.app/r/three-dexpandable-button.json"`} language="bash" filename="Terminal" />
            </SlideInSection>

            <FadeInSection className="mb-10">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-6">Install Manually</p>
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold shrink-0">1</div>
                            <div className="w-px flex-1 bg-border/30 mt-2" />
                        </div>
                        <div className="flex-1 min-w-0 pb-2">
                            <p className="text-sm font-medium text-foreground mb-3">Install dependencies</p>
                            <CodeBlock code="npm install framer-motion lucide-react" language="bash" filename="Terminal" />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold shrink-0">2</div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground mb-1">Copy the source code</p>
                            <p className="text-xs text-muted-foreground mb-3">Paste into <code className="text-xs bg-secondary/60 px-1.5 py-0.5 rounded font-mono text-foreground">components/navyaui/ThreeDExpandableButton.tsx</code></p>
                            <CodeBlock
                                code={`"use client";\n\nimport React, { useState } from "react";\nimport { motion, AnimatePresence } from "framer-motion";\nimport { Home, type LucideIcon } from "lucide-react";\nimport { cn } from "@/lib/utils";\n\ninterface ThreeDExpandableButtonProps {\n  icon?: LucideIcon;\n  text?: string;\n  onClick?: () => void;\n  className?: string;\n  buttonColor?: string;\n  shadowColor?: string;\n}\n\nexport const ThreeDExpandableButton = ({\n  icon: Icon = Home,\n  text = "Home",\n  onClick,\n  className,\n  buttonColor = "from-neutral-700 to-neutral-800",\n  shadowColor = "#171717",\n}: ThreeDExpandableButtonProps) => {\n  const [isHovered, setIsHovered] = useState(false);\n  const [isPressed, setIsPressed] = useState(false);\n\n  return (\n    <div className="relative flex items-center justify-center p-8">\n      <motion.button\n        className={cn(\n          "relative flex items-center justify-center p-4 rounded-full outline-none h-16 origin-center group",\n          \`bg-gradient-to-b \${buttonColor} text-white border border-white/10\`,\n          className\n        )}\n        style={{\n          boxShadow: isPressed\n            ? \`inset 0px 2px 2px rgba(255,255,255,0.2), inset 0px -2px 2px rgba(0,0,0,0.5), 0px 0px 0px \${shadowColor}, 0px 4px 5px rgba(0,0,0,0.4)\`\n            : isHovered\n            ? \`inset 0px 2px 2px rgba(255,255,255,0.2), inset 0px -2px 2px rgba(0,0,0,0.5), 0px 6px 0px \${shadowColor}, 0px 10px 15px rgba(0,0,0,0.4)\`\n            : \`inset 0px 2px 2px rgba(255,255,255,0.2), inset 0px -2px 2px rgba(0,0,0,0.5), 0px 8px 0px \${shadowColor}, 0px 12px 20px rgba(0,0,0,0.4)\`,\n          transform: isPressed\n            ? "translateY(8px)"\n            : isHovered\n            ? "translateY(2px)"\n            : "translateY(0px)",\n        }}\n        initial={false}\n        animate={{\n          boxShadow: isPressed\n            ? \`inset 0px 2px 2px rgba(255,255,255,0.2), inset 0px -2px 2px rgba(0,0,0,0.5), 0px 0px 0px \${shadowColor}, 0px 4px 5px rgba(0,0,0,0.4)\`\n            : isHovered\n            ? \`inset 0px 2px 2px rgba(255,255,255,0.2), inset 0px -2px 2px rgba(0,0,0,0.5), 0px 6px 0px \${shadowColor}, 0px 10px 15px rgba(0,0,0,0.4)\`\n            : \`inset 0px 2px 2px rgba(255,255,255,0.2), inset 0px -2px 2px rgba(0,0,0,0.5), 0px 8px 0px \${shadowColor}, 0px 12px 20px rgba(0,0,0,0.4)\`,\n          y: isPressed ? 8 : isHovered ? 2 : 0,\n        }}\n        transition={{\n          type: "spring",\n          stiffness: 400,\n          damping: 30,\n        }}\n        onMouseEnter={() => setIsHovered(true)}\n        onMouseLeave={() => {\n          setIsHovered(false);\n          setIsPressed(false);\n        }}\n        onMouseDown={() => setIsPressed(true)}\n        onMouseUp={() => setIsPressed(false)}\n        onFocus={() => setIsHovered(true)}\n        onBlur={() => {\n          setIsHovered(false);\n          setIsPressed(false);\n        }}\n        onClick={onClick}\n        layout\n      >\n        <motion.div layout className="flex items-center justify-center relative z-10">\n          <Icon className="w-6 h-6 shrink-0 drop-shadow-md text-white/90 group-hover:text-white transition-colors" />\n          \n          <AnimatePresence initial={false}>\n            {isHovered && (\n              <motion.div\n                initial={{ width: 0, opacity: 0, marginLeft: 0 }}\n                animate={{ width: "auto", opacity: 1, marginLeft: 8 }}\n                exit={{ width: 0, opacity: 0, marginLeft: 0 }}\n                transition={{ type: "spring", stiffness: 400, damping: 30 }}\n                className="overflow-hidden whitespace-nowrap flex items-center"\n              >\n                <span className="font-semibold tracking-wide drop-shadow-md pr-2 text-white">\n                  {text}\n                </span>\n              </motion.div>\n            )}\n          </AnimatePresence>\n        </motion.div>\n\n        {/* Glossy top reflection layer for extra 3D feel */}\n        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />\n      </motion.button>\n    </div>\n  );\n};`}
                                language="tsx"
                                filename="components/navyaui/ThreeDExpandableButton.tsx"
                                collapsible
                                defaultCollapsed
                            />
                        </div>
                    </div>
                </div>
            </FadeInSection>

            <SlideInSection direction="right" className="mb-10">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">Usage</p>
                <CodeBlock
                    code={`import { ThreeDExpandableButton } from "@/components/navyaui/ThreeDExpandableButton";\nimport { Home, User, Settings } from "lucide-react";\n\nexport function Example() {\n  return (\n    <div className="flex gap-4">\n      <ThreeDExpandableButton icon={Home} text="Home" />\n      <ThreeDExpandableButton icon={User} text="Profile" buttonColor="from-blue-600 to-blue-800" shadowColor="#1e3a8a" />\n      <ThreeDExpandableButton icon={Settings} text="Settings" />\n    </div>\n  );\n}`}
                    language="tsx"
                    filename="Example.tsx"
                />
            </SlideInSection>

            <FadeInSection>
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-4">Props</p>
                <div className="rounded-xl border border-border/20 bg-[#1e1e1e] overflow-hidden overflow-x-auto">
                    <table className="w-full text-sm" style={{ color: "#d4d4d4" }}>
                        <thead>
                            <tr className="border-b border-[#2d2d2d]">
                                <th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Prop</th>
                                <th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Type</th>
                                <th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Default</th>
                                <th className="text-left px-4 py-3 font-medium text-[#808080] text-xs">Description</th>
                            </tr>
                        </thead>
                        <tbody className="font-mono text-xs">
                            <tr className="border-b border-[#2d2d2d]">
                                <td className="px-4 py-3" style={{ color: "#9cdcfe" }}>icon</td>
                                <td className="px-4 py-3" style={{ color: "#4ec9b0" }}>LucideIcon</td>
                                <td className="px-4 py-3 text-[#555]">Home</td>
                                <td className="px-4 py-3 font-sans text-[#808080]">Icon component from lucide-react</td>
                            </tr>
                            <tr className="border-b border-[#2d2d2d]">
                                <td className="px-4 py-3" style={{ color: "#9cdcfe" }}>text</td>
                                <td className="px-4 py-3" style={{ color: "#4ec9b0" }}>string</td>
                                <td className="px-4 py-3 text-[#555]">"Home"</td>
                                <td className="px-4 py-3 font-sans text-[#808080]">Text shown when hovered</td>
                            </tr>
                            <tr className="border-b border-[#2d2d2d]">
                                <td className="px-4 py-3" style={{ color: "#9cdcfe" }}>buttonColor</td>
                                <td className="px-4 py-3" style={{ color: "#4ec9b0" }}>string</td>
                                <td className="px-4 py-3 text-[#555]">"from-neutral-700 to-neutral-800"</td>
                                <td className="px-4 py-3 font-sans text-[#808080]">Tailwind gradient classes</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3" style={{ color: "#9cdcfe" }}>shadowColor</td>
                                <td className="px-4 py-3" style={{ color: "#4ec9b0" }}>string</td>
                                <td className="px-4 py-3 text-[#555]">"#171717"</td>
                                <td className="px-4 py-3 font-sans text-[#808080]">Hex color code for the 3D bottom shadow profile</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </FadeInSection>
        </div>
    );
}
