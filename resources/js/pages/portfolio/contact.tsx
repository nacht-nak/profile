import PortfolioLayout from '@/layouts/portfolio-layout';
import { useForm, Link } from '@inertiajs/react';
import { Send } from 'lucide-react';

export default function Contact() {
    const contactForm = useForm({
        name: '',
        email: '',
        message: '',
    });

    const handleContactSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        contactForm.post('/message', {
            preserveScroll: true,
            onSuccess: () => contactForm.reset(),
        });
    };

    return (
        <PortfolioLayout title="Contact">
            <section id="contact" className="relative z-10 py-24 bg-gray-50 dark:bg-[#011030] text-[#011030] dark:text-white overflow-hidden min-h-[calc(100vh-80px)] transition-colors duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff7700]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="max-w-6xl mx-auto px-6 lg:px-20 relative z-20">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-5xl font-extrabold leading-tight transition-colors duration-300">
                                Let's{" "}
                                <Link href="/login">
                                    <span className="text-[#ff7700] cursor-pointer hover:underline decoration-2 underline-offset-4">
                                        Talk
                                    </span>
                                </Link>{" "}
                                about your next project
                            </h2>
                            <p className="text-lg text-gray-500 dark:text-gray-400 transition-colors">Feel free to reach out for collaborations or just a friendly hello.</p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-[#011030]/5 dark:bg-white/5 flex items-center justify-center text-[#ff7700] border border-[#011030]/10 dark:border-white/10 transition-colors"><Send size={20} /></div>
                                    <div>
                                        <div className="text-xs text-gray-500 uppercase font-black">Email Me</div>
                                        <div className="font-bold text-lg text-[#011030] dark:text-white transition-colors">welpanogaling12@gmail.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <form onSubmit={handleContactSubmit} className="bg-white dark:bg-white/5 p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-lg dark:shadow-none space-y-4 transition-colors duration-300">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        value={contactForm.data.name}
                                        onChange={e => contactForm.setData('name', e.target.value)}
                                        required
                                        className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-[#011030] dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-[#ff7700] dark:focus:border-[#ff7700] transition-colors"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        value={contactForm.data.email}
                                        onChange={e => contactForm.setData('email', e.target.value)}
                                        required
                                        className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-[#011030] dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-[#ff7700] dark:focus:border-[#ff7700] transition-colors"
                                    />
                                </div>
                                <textarea
                                    placeholder="Your Message"
                                    rows={5}
                                    value={contactForm.data.message}
                                    onChange={e => contactForm.setData('message', e.target.value)}
                                    required
                                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-[#011030] dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-[#ff7700] dark:focus:border-[#ff7700] transition-colors resize-none"
                                ></textarea>
                                <button
                                    type="submit"
                                    disabled={contactForm.processing}
                                    className="w-full bg-[#ff7700] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#e06900] transition-all shadow-xl shadow-[#ff7700]/20 flex items-center justify-center gap-2 disabled:opacity-50"
                                >
                                    {contactForm.processing ? 'Sending...' : 'Send Message'} <Send size={20} />
                                </button>
                                {contactForm.wasSuccessful && <p className="text-green-500 text-sm text-center">Message sent successfully!</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </PortfolioLayout>
    );
}
