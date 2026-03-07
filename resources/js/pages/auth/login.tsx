import { Form, Head, usePage } from '@inertiajs/react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';
import AppLogoIcon from '@/components/app-logo-icon';
import { home } from '@/routes';
import { Link } from '@inertiajs/react';

type Props = {
    status?: string;
    canResetPassword: boolean;
    canRegister: boolean;
};

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
};

const imageVariants: Variants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 1.5, ease: "easeOut" }
    }
};

export default function Login({
    status,
    canResetPassword,
    canRegister,
}: Props) {
    const { name } = usePage().props;

    return (
        <div className="relative min-h-screen grid lg:grid-cols-2 overflow-hidden bg-background">
            <Head title="Log in" />

            {/* Left Side: Visual/Image */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={imageVariants}
                className="relative hidden lg:flex flex-col items-center justify-center overflow-hidden"
            >
                <div className="absolute inset-0 z-0">
                    <img
                        src="/avatar.jpg"
                        alt="Background"
                        className="h-full w-full object-cover grayscale-[20%] brightness-[0.7] contrast-[1.1]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-black/60" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="relative z-10 text-white p-12 text-center"
                >

                    <h2 className="text-4xl font-bold tracking-tight mb-4">Welcome back Master</h2>
                    <p className="text-lg text-white/70 max-w-md mx-auto leading-relaxed">
                        Experience the next generation of portfolio management with our streamlined platform.
                    </p>
                </motion.div>

                {/* Decorative floating elements */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
                />
            </motion.div>

            {/* Right Side: Form */}
            <div className="flex items-center justify-center p-8 sm:p-12">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="w-full max-w-[400px] space-y-8"
                >
                    <div className="flex flex-col space-y-2 lg:text-left text-center">
                        <motion.h1 variants={itemVariants} className="text-3xl font-bold tracking-tight">
                            Sign in
                        </motion.h1>
                        <motion.p variants={itemVariants} className="text-muted-foreground leading-relaxed">
                            Enter your credentials to access your account dashboard.
                        </motion.p>
                    </div>

                    <Form
                        {...store.form()}
                        resetOnSuccess={['password']}
                        className="space-y-6"
                    >
                        {({ processing, errors }) => (
                            <div className="space-y-5">
                                <motion.div variants={itemVariants} className="space-y-2">
                                    <Label htmlFor="username" className="text-sm font-medium">Username</Label>
                                    <Input
                                        id="username"
                                        type="text"
                                        name="username"
                                        required
                                        autoFocus
                                        placeholder="Enter your username"
                                        className="h-12 bg-muted/30 border-muted focus:ring-primary/20 transition-all duration-300"
                                    />
                                    <AnimatePresence>
                                        {errors.username && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                            >
                                                <InputError message={errors.username} />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>

                                <motion.div variants={itemVariants} className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="password">Password</Label>
                                        {canResetPassword && (
                                            <TextLink
                                                href={request()}
                                                className="text-xs text-primary hover:underline"
                                            >
                                                Forgot password?
                                            </TextLink>
                                        )}
                                    </div>
                                    <Input
                                        id="password"
                                        type="password"
                                        name="password"
                                        required
                                        placeholder="Enter your password"
                                        className="h-12 bg-muted/30 border-muted focus:ring-primary/20 transition-all duration-300"
                                    />
                                    <AnimatePresence>
                                        {errors.password && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                            >
                                                <InputError message={errors.password} />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>

                                <motion.div variants={itemVariants} className="flex items-center space-x-2">
                                    <Checkbox id="remember" name="remember" className="rounded-md" />
                                    <Label htmlFor="remember" className="text-sm cursor-pointer select-none text-muted-foreground">
                                        Keep me signed in
                                    </Label>
                                </motion.div>

                                <motion.div variants={itemVariants} className="pt-2">
                                    <Button
                                        type="submit"
                                        className="w-full h-12 text-base font-semibold transition-all duration-300 active:scale-95 shadow-lg shadow-primary/20"
                                        disabled={processing}
                                    >
                                        {processing ? (
                                            <>
                                                <Spinner className="mr-2 h-4 w-4" />
                                                Verifying...
                                            </>
                                        ) : (
                                            'Sign In'
                                        )}
                                    </Button>
                                </motion.div>

                                {canRegister && (
                                    <motion.p
                                        variants={itemVariants}
                                        className="text-center text-sm text-muted-foreground"
                                    >
                                       
                                       <TextLink
                                    href="/"
                                       className="font-semibold text-primary underline-offset-4 hover:underline"
                                >
                                    Back to Website
                                </TextLink>
                                    </motion.p>
                                )}
                            </div>
                        )}
                    </Form>

                    <AnimatePresence>
                        {status && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center text-sm font-medium text-emerald-600 dark:text-emerald-400"
                            >
                                {status}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Background elements for mobile */}
            <div className="absolute inset-0 -z-10 lg:hidden pointer-events-none opacity-30">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px]" />
            </div>
        </div>
    );
}
