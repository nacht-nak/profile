import { Form, Head } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';
import { login } from '@/routes';
import { store } from '@/routes/register';

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut" as const,
            staggerChildren: 0.08,
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function Register() {
    return (
        <AuthLayout
            title="Create an account"
            description="Enter your details below to create your account"
        >
            <Head title="Register" />
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <Form
                    {...store.form()}
                    resetOnSuccess={['password', 'password_confirmation']}
                    disableWhileProcessing
                    className="flex flex-col gap-6"
                >
                    {({ processing, errors }) => (
                        <>
                            <div className="grid gap-5">
                                <motion.div className="grid gap-2" variants={itemVariants}>
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="name"
                                        name="name"
                                        placeholder="Full name"
                                        className="transition-all duration-200 focus:scale-[1.01]"
                                    />
                                    <AnimatePresence>
                                        {errors.name && (
                                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                                                <InputError message={errors.name} />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>

                                <motion.div className="grid gap-2" variants={itemVariants}>
                                    <Label htmlFor="username">Username</Label>
                                    <Input
                                        id="username"
                                        type="text"
                                        required
                                        tabIndex={1}
                                        autoComplete="username"
                                        name="username"
                                        placeholder="Username"
                                        className="transition-all duration-200 focus:scale-[1.01]"
                                    />
                                    <AnimatePresence>
                                        {errors.username && (
                                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                                                <InputError message={errors.username} />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>

                                <motion.div className="grid gap-2" variants={itemVariants}>
                                    <Label htmlFor="email">Email address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        required
                                        tabIndex={2}
                                        autoComplete="email"
                                        name="email"
                                        placeholder="email@example.com"
                                        className="transition-all duration-200 focus:scale-[1.01]"
                                    />
                                    <AnimatePresence>
                                        {errors.email && (
                                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                                                <InputError message={errors.email} />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>

                                <motion.div className="grid gap-2" variants={itemVariants}>
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        required
                                        tabIndex={3}
                                        autoComplete="new-password"
                                        name="password"
                                        placeholder="Password"
                                        className="transition-all duration-200 focus:scale-[1.01]"
                                    />
                                    <AnimatePresence>
                                        {errors.password && (
                                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                                                <InputError message={errors.password} />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>

                                <motion.div className="grid gap-2" variants={itemVariants}>
                                    <Label htmlFor="password_confirmation">
                                        Confirm password
                                    </Label>
                                    <Input
                                        id="password_confirmation"
                                        type="password"
                                        required
                                        tabIndex={4}
                                        autoComplete="new-password"
                                        name="password_confirmation"
                                        placeholder="Confirm password"
                                        className="transition-all duration-200 focus:scale-[1.01]"
                                    />
                                    <AnimatePresence>
                                        {errors.password_confirmation && (
                                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                                                <InputError message={errors.password_confirmation} />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                                        <Button
                                            type="submit"
                                            className="mt-2 w-full py-6 text-base font-semibold shadow-lg shadow-primary/20 cursor-pointer"
                                            tabIndex={5}
                                            data-test="register-user-button"
                                            disabled={processing}
                                        >
                                            {processing && <Spinner className="mr-2 h-4 w-4" />}
                                            {processing ? 'Creating account...' : 'Create account'}
                                        </Button>
                                    </motion.div>
                                </motion.div>
                            </div>

                            <motion.div
                                variants={itemVariants}
                                className="text-center text-sm text-muted-foreground pt-2"
                            >
                                Already have an account?{' '}
                                <TextLink
                                    href={login()}
                                    tabIndex={6}
                                    className="font-medium text-primary hover:underline underline-offset-4"
                                >
                                    Log in
                                </TextLink>
                            </motion.div>
                        </>
                    )}
                </Form>
            </motion.div>
        </AuthLayout>
    );
}

