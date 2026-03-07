import { Head, Link, usePage } from '@inertiajs/react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState, useMemo } from 'react';
import { Hexagon, Github, Linkedin, Twitter } from 'lucide-react';
import { dashboard, home, about, skills, certifications, projects, contact } from '@/routes';
import AppearanceToggleTab from '@/components/appearance-tabs';

export default function PortfolioLayout({ children, title }: { children: React.ReactNode, title?: string }) {
    const { auth } = usePage().props as any;
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = useMemo(() => ({
        background: { color: { value: "transparent" } },
        fpsLimit: 120,
        interactivity: { events: { onHover: { enable: true, mode: "grab" } }, modes: { grab: { distance: 160, links: { opacity: 0.6 } } } },
        particles: {
            color: { value: "#888888" },
            links: { color: "#bbbbbb", distance: 160, enable: true, opacity: 0.45, width: 1 },
            move: { enable: true, speed: 1.5 },
            number: { density: { enable: true, width: 800, height: 800 }, value: 70 },
            opacity: { value: 0.4 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2.5 } },
        },
        detectRetina: true,
    }), []);

    const currentRoute = window.location.pathname;

    const navLinks = [
        { name: 'Home', href: home().url },
        { name: 'About', href: about().url },
        { name: 'Skills', href: skills().url },
        { name: 'Certifications', href: certifications().url },
        { name: 'Projects', href: projects().url },
        { name: 'Contact', href: contact().url },
    ];

    return (
        <div className="font-poppins relative min-h-screen text-[#011030] dark:text-gray-100 overflow-x-hidden bg-white dark:bg-[#060b19] selection:bg-[#ff7700] selection:text-white transition-colors duration-300">
            <Head>
                <title>{title ? `${title} | Wel` : 'Wel'}</title>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
                <style>{`
                    body { font-family: 'Poppins', sans-serif; }
                    .custom-shadow { box-shadow: 0 4px 15px rgba(1, 4, 85, 0.4); }
                    .dark .custom-shadow { box-shadow: 0 4px 15px rgba(255, 119, 0, 0.2); }
                `}</style>
            </Head>

            {init && <Particles id="tsparticles" className="absolute inset-0 z-0 opacity-70 dark:opacity-30 border-b border-gray-100 dark:border-gray-800" options={options} />}

            {/* Navbar */}
            <header className="relative z-50 w-full h-20 flex items-center justify-between px-6 lg:px-20 border-b border-gray-100 dark:border-gray-800 bg-white/90 dark:bg-[#060b19]/90 backdrop-blur-sm sticky top-0 transition-colors duration-300">
                <Link href="/" className="flex items-center gap-2 group cursor-pointer">
                    <Hexagon size={24} fill="#011030" className="text-[#011030] dark:text-gray-100 dark:fill-gray-100 group-hover:rotate-90 transition-transform duration-500" />
                    <span className="font-bold text-xl tracking-tight text-[#011030] dark:text-white">MyProfile</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8 font-semibold text-[15px] tracking-wide text-gray-700 dark:text-gray-300 font-poppins">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`${currentRoute === link.href
                                ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                                : "hover:text-blue-600 dark:hover:text-blue-400"
                                } pb-1.5 transition-colors`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <AppearanceToggleTab className="hidden lg:flex" />
                    {auth.user && (
                        <Link
                            href={dashboard()}
                            className="text-[13px] font-bold text-white bg-[#011030] dark:bg-white dark:text-[#011030] px-5 py-2.5 rounded hover:bg-black dark:hover:bg-gray-200 transition-colors"
                        >
                            Dashboard
                        </Link>
                    )}
                </div>
            </header>

            <main className="relative z-10 w-full transition-colors duration-300">
                {children}
            </main>

            {/* Simple Footer */}
            <footer className="relative z-10 py-12 bg-[#011030] dark:bg-black text-white transition-colors duration-300">
                <div className="max-w-6xl mx-auto px-6 lg:px-20">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-2">
                            <Hexagon size={24} fill="#ff7700" className="text-[#ff7700]" />
                            <span className="font-bold text-xl tracking-tight">MyProfile</span>
                        </div>
                        <p className="text-gray-500 text-sm">© 2026 Wel Panogaling. All rights reserved.</p>
                        <div className="flex gap-4">
                            <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
                            <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                            <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
