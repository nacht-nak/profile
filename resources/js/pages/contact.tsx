import { Link } from '@inertiajs/react';
import { Send, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact({ contactForm, onSubmit }: { contactForm: any, onSubmit: (e: React.FormEvent) => void }) {
    return (
        <section id="contact" className="relative z-10 py-24 bg-[#011030] text-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-20">
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="lg:w-1/2">
                        <h2 className="text-5xl font-extrabold">Let's <Link href="/login"><span className="text-[#ff7700]">Talk</span></Link></h2>
                        {/* ... existing contact info ... */}
                    </div>
                    <div className="lg:w-1/2">
                        <form onSubmit={onSubmit} className="space-y-4">
                            <input 
                                value={contactForm.data.name} 
                                onChange={e => contactForm.setData('name', e.target.value)} 
                                placeholder="Full Name" 
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4"
                            />
                            {/* ... Repeat for email and message ... */}
                            <button type="submit" disabled={contactForm.processing} className="w-full bg-[#ff7700] py-4 rounded-xl font-bold">
                                {contactForm.processing ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}