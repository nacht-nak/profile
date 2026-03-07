import PortfolioLayout from '@/layouts/portfolio-layout';
import { motion } from 'framer-motion';
import { ArrowDownCircle, Linkedin, Github, Twitter, Send, Instagram } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';

const strings = ["Web Developer|", "Sotfware Engineer|", "Out of Stack Developer|"];

export default function Home() {
    const [typing, setTyping] = useState("");
    const [typeIndex, setTypeIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const currentString = strings[typeIndex];
            if (!isDeleting) {
                setTyping(currentString.substring(0, typing.length + 1));
                if (typing.length === currentString.length) setTimeout(() => setIsDeleting(true), 1500);
            } else {
                setTyping(currentString.substring(0, typing.length - 1));
                if (typing.length === 0) {
                    setIsDeleting(false);
                    setTypeIndex((typeIndex + 1) % strings.length);
                }
            }
        }, isDeleting ? 40 : 100);
        return () => clearTimeout(timeout);
    }, [typing, isDeleting, typeIndex]);

    return (
        <PortfolioLayout title="Home">
            <main className="relative z-10 w-full min-h-[calc(100vh-80px)] flex flex-col md:flex-row items-center justify-between px-6 lg:px-28 py-10 lg:py-0">
                {/* Left Side */}
                <div className="flex-1 space-y-3 z-10 mt-10 md:mt-0">
                    <motion.h1
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-[3.5rem] md:text-[5.5rem] font-extrabold leading-[1.05] tracking-tight text-[#011030] dark:text-white transition-colors duration-300"
                    >
                        Hi There,<br />
                        I'm Wel <span className="text-[#ff7700]">Bendanillo</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-2xl md:text-[2rem] font-bold mt-4 tracking-tight leading-snug dark:text-gray-300 transition-colors"
                    >
                        I Am Into <span className="text-[#9a0000] dark:text-[#ff4444] transition-colors">{typing}</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="pt-8"
                    >
                        <Link href="/about" className="inline-flex items-center gap-2 bg-[#020556] dark:bg-[#3b82f6] text-white px-8 py-3.5 rounded-full font-bold text-lg hover:bg-[#020336] dark:hover:bg-[#2563eb] transition-all custom-shadow group">
                            About Me
                            <ArrowDownCircle size={22} className="group-hover:translate-y-1 transition-transform" />
                        </Link>
                    </motion.div>

                    {/* Socials */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex flex-wrap items-center gap-4 mt-12 pt-4"
                    >
                        <a href="javascript:void(0)" className="w-[50px] h-[50px] bg-[#000000] dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center hover:-translate-y-1 transition-all shadow-lg"><Linkedin size={22} strokeWidth={2.5} /></a>
                        <a href="javascript:void(0)" className="w-[50px] h-[50px] bg-[#000000] dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center hover:-translate-y-1 transition-all shadow-lg"><Github size={22} strokeWidth={2.5} /></a>
                        <a href="javascript:void(0)" className="w-[50px] h-[50px] bg-[#000000] dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center hover:-translate-y-1 transition-all shadow-lg"><Twitter size={22} strokeWidth={2.5} /></a>
                        <a href="javascript:void(0)" className="w-[50px] h-[50px] bg-[#000000] dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center hover:-translate-y-1 transition-all shadow-lg"><Send size={20} strokeWidth={2.5} className="-ml-1" /></a>
                        <a href="javascript:void(0)" className="w-[50px] h-[50px] bg-[#000000] dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center hover:-translate-y-1 transition-all shadow-lg"><Instagram size={22} strokeWidth={2.5} /></a>
                        <a href="javascript:void(0)" className="w-[50px] h-[50px] bg-[#000000] dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center hover:-translate-y-1 transition-all shadow-lg text-[12px] font-black"><span className="leading-[1] italic">DEV</span></a>
                    </motion.div>
                </div>

                {/* Right Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex-1 flex justify-center md:justify-end mr-0 md:mr-10 xl:mr-16 items-center h-full pt-16 md:pt-0 pb-10"
                >
                    <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] flex items-center justify-center -mr-16 mt-6 group">
                        {/* Default Avatar */}
                        <img
                            src="/avatar.JPG"
                            alt="Developer Avatar"
                            className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-white dark:border-gray-800 
                   transition-opacity duration-500 group-hover:opacity-0"
                            style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}
                        />
                        {/* Hover Avatar */}
                        <img
                            src="/avatar1.JPG"
                            alt="Developer Avatar Hover"
                            className="absolute w-full h-full object-cover rounded-full shadow-2xl border-4 border-white dark:border-gray-800 
                   opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                            style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}
                        />
                    </div>
                </motion.div>
            </main>
        </PortfolioLayout>
    );
}
