import { useState } from "react";
import { Check, Copy, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

/*
  VS Code Dark+ inspired colors:
  - Blue (#569cd6)     → keywords: import, export, const, let, return, etc.
  - Light Blue (#9cdcfe) → variables, params
  - Yellow (#dcdcaa)    → function names, method calls
  - Green (#6a9955)     → comments
  - Orange (#ce9178)    → strings
  - Light Green (#b5cea8) → numbers
  - Teal (#4ec9b0)      → types, interfaces, components
  - Purple (#c586c0)    → control flow: if, else, from, as
  - White (#d4d4d4)     → default text
  - Gray (#808080)      → punctuation like brackets
*/

function highlightCode(code: string): string {
    const lines = code.split("\n");
    return lines
        .map((line) => {
            let l = line
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");

            // Full-line comments
            const trimmed = l.trim();
            if (trimmed.startsWith("//") || trimmed.startsWith("{/*")) {
                return `<span style="color:#6a9955">${l}</span>`;
            }

            // Strings → orange — extract to placeholders
            const strings: string[] = [];
            l = l.replace(/(&#39;[^&#]*?&#39;|'[^']*?'|`[^`]*?`|&quot;[^&]*?&quot;|"[^"]*?")/g, (m) => {
                strings.push(m);
                return `__S${strings.length - 1}__`;
            });

            // Keywords → blue
            l = l.replace(
                /\b(import|export|const|let|var|function|return|default|new|typeof|void|async|await|class|extends|implements|static|get|set)\b/g,
                '<span style="color:#569cd6">$1</span>'
            );

            // Control flow → purple
            l = l.replace(
                /\b(if|else|from|as|for|while|do|switch|case|break|continue|try|catch|finally|throw)\b/g,
                '<span style="color:#c586c0">$1</span>'
            );

            // Types/interfaces → teal
            l = l.replace(
                /\b(React|string|number|boolean|any|unknown|void|null|undefined|HTMLDivElement|HTMLButtonElement|MouseEvent|ReactNode|ElementType|MotionProps)\b/g,
                '<span style="color:#4ec9b0">$1</span>'
            );

            // JSX component tags → teal
            l = l.replace(
                /(&lt;\/?)((?:motion\.)?[A-Z][\w.]*)/g,
                '$1<span style="color:#4ec9b0">$2</span>'
            );

            // HTML tags → blue
            l = l.replace(
                /(&lt;\/?)((?:div|span|button|input|h[1-6]|p|a|img|code|pre|table|thead|tbody|tr|th|td))\b/g,
                '$1<span style="color:#569cd6">$2</span>'
            );

            // JSX attribute names → light blue
            l = l.replace(
                /\b([a-zA-Z][\w]*)(?==(?:"|{|\(|&quot;))/g,
                '<span style="color:#9cdcfe">$1</span>'
            );

            // Function calls → yellow
            l = l.replace(
                /\b([a-z][\w]*)\s*(?=\()/g,
                '<span style="color:#dcdcaa">$1</span>'
            );

            // Numbers → light green
            l = l.replace(
                /(?<![a-zA-Z_\-#&])(\d+\.?\d*)(?![a-zA-Z_\-#&;])/g,
                '<span style="color:#b5cea8">$1</span>'
            );

            // true/false → blue
            l = l.replace(
                /\b(true|false)\b/g,
                '<span style="color:#569cd6">$1</span>'
            );

            // Restore strings → orange
            l = l.replace(/__S(\d+)__/g, (_, i) => {
                return `<span style="color:#ce9178">${strings[Number(i)]}</span>`;
            });

            return l;
        })
        .join("\n");
}

export default function CodeBlock({
    code,
    language = "tsx",
    filename,
    collapsible = false,
    defaultCollapsed = true,
}: {
    code: string;
    language?: string;
    filename?: string;
    collapsible?: boolean;
    defaultCollapsed?: boolean;
}) {
    const [copied, setCopied] = useState(false);
    const [collapsed, setCollapsed] = useState(collapsible ? defaultCollapsed : false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const lineCount = code.split("\n").length;

    return (
        <div className="rounded-xl border border-border/20 bg-[#1e1e1e] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-[#2d2d2d] bg-[#252526]">
                <div className="flex items-center gap-2">
                    {filename && (
                        <span className="text-xs text-[#808080] font-mono">{filename}</span>
                    )}
                    {!filename && (
                        <span className="text-[10px] text-[#808080] uppercase tracking-widest font-semibold">{language}</span>
                    )}
                    <span className="text-[10px] text-[#555] font-mono">{lineCount} lines</span>
                </div>
                <div className="flex items-center gap-1">
                    {collapsible && (
                        <button
                            onClick={() => setCollapsed(!collapsed)}
                            className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs text-[#808080] hover:text-[#d4d4d4] hover:bg-[#2d2d2d] transition-colors"
                        >
                            {collapsed ? (
                                <><ChevronDown className="w-3.5 h-3.5" /> Expand</>
                            ) : (
                                <><ChevronUp className="w-3.5 h-3.5" /> Collapse</>
                            )}
                        </button>
                    )}
                    <button
                        onClick={handleCopy}
                        className={cn(
                            "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-all duration-200",
                            copied
                                ? "bg-emerald-500/10 text-emerald-400"
                                : "text-[#808080] hover:text-[#d4d4d4] hover:bg-[#2d2d2d]"
                        )}
                    >
                        {copied ? <><Check className="w-3.5 h-3.5" /> Copied!</> : <><Copy className="w-3.5 h-3.5" /> Copy</>}
                    </button>
                </div>
            </div>

            {/* Code */}
            {!collapsed && (
                <div className="p-4 overflow-x-auto">
                    <pre className="text-[11px] sm:text-[13px] font-mono leading-[1.6]" style={{ color: "#d4d4d4" }}>
                        <code dangerouslySetInnerHTML={{ __html: highlightCode(code) }} />
                    </pre>
                </div>
            )}
            {collapsed && (
                <div className="px-4 py-3 text-xs text-[#555] font-mono">
                    {lineCount} lines · Click expand to view
                </div>
            )}
        </div>
    );
}
