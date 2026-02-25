import { useEffect, useRef, useCallback } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { Moon, Sun, Menu, X, Search, Command, Github, Heart } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const components = [
    { name: "Spotlight Card", href: "/components/spotlight-card", tag: "Cards" },
    { name: "3D Card", href: "/components/3d-card", tag: "Cards" },
    { name: "Moving Border", href: "/components/moving-border", tag: "Effects" },
    { name: "Meteors", href: "/components/meteors", tag: "Effects" },
    { name: "Flip Words", href: "/components/flip-words", tag: "Text" },
    { name: "Text Generate Effect", href: "/components/text-generate-effect", tag: "Text" },
    { name: "Background Beams", href: "/components/background-beams", tag: "Backgrounds" },
    { name: "Fluid Smoke Background", href: "/components/fluid-smoke-background", tag: "Backgrounds" },
    { name: "Wave Ribbon Background", href: "/components/wave-ribbon-background", tag: "Backgrounds" },
    { name: "Infinite Moving Cards", href: "/components/infinite-moving-cards", tag: "Layout" },
    { name: "Floating Dock", href: "/components/floating-dock", tag: "Navigation" },
    { name: "3D Expandable Button", href: "/components/3d-expandable-button", tag: "Buttons" },
    { name: "Liquid Glass Button", href: "/components/liquid-glass-button", tag: "Buttons" },
];

export default function Layout({
    theme,
    toggleTheme,
}: {
    theme: string;
    toggleTheme: () => void;
}) {
    const location = useLocation();
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [navSearchOpen, setNavSearchOpen] = useState(false);
    const navSearchRef = useRef<HTMLInputElement>(null);
    const spotlightRef = useRef<HTMLDivElement>(null);

    // Cursor spotlight
    useEffect(() => {
        const move = (e: MouseEvent) => {
            if (spotlightRef.current) {
                spotlightRef.current.style.left = e.clientX + "px";
                spotlightRef.current.style.top = e.clientY + "px";
            }
        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    // ⌘K shortcut
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                navSearchRef.current?.focus();
                setNavSearchOpen(true);
            }
            if (e.key === "Escape") {
                setNavSearchOpen(false);
                setSearchQuery("");
                navSearchRef.current?.blur();
            }
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);

    // Close search on navigate
    useEffect(() => {
        setNavSearchOpen(false);
        setSearchQuery("");
    }, [location.pathname]);

    const filteredComponents = components.filter((c) =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleNavSearch = useCallback((value: string) => {
        setSearchQuery(value);
        setNavSearchOpen(value.length > 0);
    }, []);

    const handleResultClick = (href: string) => {
        navigate(href);
        setNavSearchOpen(false);
        setSearchQuery("");
    };

    const categories = ["Buttons", "Cards", "Text", "Effects", "Backgrounds", "Layout", "Navigation"];

    return (
        <div className="min-h-screen bg-background text-foreground font-['Poppins']">
            {theme === "dark" && (
                <div ref={spotlightRef} id="cursor-spotlight" className="hidden md:block" />
            )}

            {/* ─── Navbar ─── */}
            <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/70 backdrop-blur-2xl">
                <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-10">
                    {/* Left: logo */}
                    <div className="flex items-center gap-5">
                        <Link to="/" className="flex items-center gap-2.5 group">
                            <div
                                className="relative w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center shadow-lg shadow-black/10 dark:shadow-white/5 group-hover:shadow-black/15 dark:group-hover:shadow-white/10 transition-shadow duration-300"
                                style={{ background: "linear-gradient(135deg, #e8e8e8 0%, #999 30%, #333 70%, #111 100%)" }}
                            >
                                <span className="text-[13px] font-black text-white drop-shadow-sm">N</span>
                            </div>
                            <span className="text-lg font-bold tracking-tight text-foreground">
                                NavyaUI
                            </span>
                        </Link>
                    </div>

                    {/* Center: Search */}
                    <div className="hidden lg:flex flex-1 items-center justify-center">
                        <div className="relative">
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />
                            <input
                                ref={navSearchRef}
                                type="text"
                                placeholder="Search components..."
                                value={searchQuery}
                                onChange={(e) => handleNavSearch(e.target.value)}
                                onFocus={() => { if (searchQuery.length > 0) setNavSearchOpen(true); }}
                                className="h-10 w-[24rem] rounded-xl border border-border/60 bg-secondary/40 pl-10 pr-14 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-white/10 focus:bg-secondary/60 transition-all duration-300"
                            />
                            <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none inline-flex items-center gap-0.5 rounded-md border border-border/60 bg-muted/50 px-1.5 py-0.5">
                                <Command className="h-3 w-3 text-muted-foreground" />
                                <span className="text-[10px] font-medium text-muted-foreground">K</span>
                            </div>

                            {/* Search dropdown */}
                            {navSearchOpen && filteredComponents.length > 0 && (
                                <div className="absolute top-12 left-0 w-full rounded-xl border border-border/30 bg-popover shadow-2xl shadow-black/30 overflow-hidden z-50">
                                    {filteredComponents.map((comp) => (
                                        <button
                                            key={comp.href}
                                            onClick={() => handleResultClick(comp.href)}
                                            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left hover:bg-secondary/60 transition-colors"
                                        >
                                            <Search className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                                            <span className="text-foreground font-medium">{comp.name}</span>
                                            <span className="ml-auto text-[11px] text-muted-foreground">{comp.tag}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                            {navSearchOpen && searchQuery.length > 0 && filteredComponents.length === 0 && (
                                <div className="absolute top-12 left-0 w-full rounded-xl border border-border/30 bg-popover shadow-2xl shadow-black/30 overflow-hidden z-50 p-4 text-center text-sm text-muted-foreground">
                                    No components found
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right: theme + actions */}
                    <div className="flex items-center gap-3">
                        <a
                            href="https://github.com/itzsouravkumar/NavyaUI"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:inline-flex items-center justify-center rounded-xl w-10 h-10 hover:bg-secondary/80 transition-all duration-200 border border-border/50"
                            aria-label="GitHub"
                        >
                            <Github className="h-4 w-4 text-foreground" />
                        </a>

                        <button
                            onClick={toggleTheme}
                            className="inline-flex items-center justify-center rounded-xl w-10 h-10 hover:bg-secondary/80 transition-all duration-200 border border-border/50"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? <Sun className="h-4 w-4 text-foreground" /> : <Moon className="h-4 w-4 text-foreground" />}
                        </button>
                        <button
                            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile overlay backdrop */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
                    onClick={() => setMobileOpen(false)}
                />
            )}

            <div className={cn("mx-auto flex", location.pathname === "/" ? "max-w-7xl justify-center" : "max-w-screen-2xl")}>
                {/* ─── Sidebar ─── */}
                {location.pathname !== "/" && (
                    <aside
                        className={cn(
                            "fixed lg:sticky top-16 z-40 h-[calc(100vh-4rem)] w-64 shrink-0 overflow-y-auto border-r border-border/30 bg-background/95 backdrop-blur-xl transition-transform duration-300 ease-in-out lg:translate-x-0",
                            mobileOpen ? "translate-x-0" : "-translate-x-full"
                        )}
                    >
                        <div className="p-4 pt-3">
                            {/* Sidebar filter */}
                            <div className="relative mb-3">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                                <input
                                    type="text"
                                    placeholder="Filter..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="h-8 w-full rounded-lg border border-border/50 bg-secondary/40 pl-8 pr-3 text-[13px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-white/10 transition-all"
                                />
                            </div>

                            {/* Getting Started */}
                            <div className="mb-2">
                                <p className="mb-0.5 text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.15em]">
                                    Getting Started
                                </p>
                                <div className="flex flex-col gap-0 border-l border-border/40 ml-0.5 pl-3">
                                    <Link
                                        to="/"
                                        onClick={() => setMobileOpen(false)}
                                        className={cn(
                                            "rounded-md px-2 py-1 text-[13px] transition-all duration-200",
                                            location.pathname === "/"
                                                ? "bg-secondary/80 text-foreground font-medium"
                                                : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
                                        )}
                                    >
                                        Introduction
                                    </Link>
                                    <Link
                                        to="/getting-started"
                                        onClick={() => setMobileOpen(false)}
                                        className={cn(
                                            "rounded-md px-2 py-1 text-[13px] transition-all duration-200",
                                            location.pathname === "/getting-started"
                                                ? "bg-secondary/80 text-foreground font-medium"
                                                : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
                                        )}
                                    >
                                        Configuration
                                    </Link>
                                </div>
                            </div>

                            {/* Component categories */}
                            {categories.map((category) => {
                                const items = filteredComponents.filter((c) => c.tag === category);
                                if (items.length === 0) return null;
                                return (
                                    <div key={category} className="mb-2">
                                        <p className="mb-0.5 text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.15em]">
                                            {category}
                                        </p>
                                        <div className="flex flex-col gap-0 border-l border-border/40 ml-0.5 pl-3">
                                            {items.map((comp) => (
                                                <Link
                                                    key={comp.href}
                                                    to={comp.href}
                                                    onClick={() => setMobileOpen(false)}
                                                    className={cn(
                                                        "rounded-md px-2 py-1 text-[13px] transition-all duration-200",
                                                        location.pathname === comp.href
                                                            ? "bg-secondary/80 text-foreground font-medium"
                                                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
                                                    )}
                                                >
                                                    {comp.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </aside>
                )}

                {/* ─── Main content ─── */}
                <main className="flex-1 min-w-0 px-4 sm:px-6 md:px-12 py-6 sm:py-10">
                    <Outlet />

                    {/* ─── Footer ─── */}
                    <footer className="mt-12 sm:mt-20 border-t border-border/20 pt-6 sm:pt-8 pb-8 sm:pb-12">
                        <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
                            <span>Made with</span>
                            <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-500 fill-red-500" />
                            <span>by</span>
                            <a href="https://sour4v.tech/" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:underline underline-offset-4 transition-colors">
                                Sourav
                            </a>
                        </div>
                    </footer>
                </main>
            </div>
        </div >
    );
}
