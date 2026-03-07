import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import AppLogoIcon from '@/components/app-logo-icon';
import { home } from '@/routes';
import type { AuthLayoutProps } from '@/types';

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: AuthLayoutProps) {
    return (
        <div className="relative min-h-svh flex flex-col items-center justify-center bg-background overflow-hidden px-6 py-12 md:p-10">
            {/* Background elements for premium feel */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-10 w-full max-w-md"
            >
                <div className="flex flex-col gap-8 bg-card/10 backdrop-blur-sm p-8 rounded-3xl border border-border/50 shadow-2xl">
                    <div className="flex flex-col items-center gap-6">
                        <Link
                            href={home()}
                            className="flex flex-col items-center gap-3 group"
                        >
                            <motion.div
                                whileHover={{ rotate: 15, scale: 1.1 }}
                                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/20"
                            >
                                <AppLogoIcon className="size-8 fill-white" />
                            </motion.div>
                            <span className="sr-only">{title}</span>
                        </Link>

                        <div className="space-y-2 text-center">
                            <h1 className="text-2xl font-bold tracking-tight text-foreground">{title}</h1>
                            <p className="text-sm text-muted-foreground max-w-[280px]">
                                {description}
                            </p>
                        </div>
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

