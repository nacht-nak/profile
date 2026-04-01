import PortfolioLayout from '@/layouts/portfolio-layout';
import { FileText } from 'lucide-react';

export default function About({ about }: any) {
    return (
        <PortfolioLayout title="About Me">
            <section id="about" className="relative z-10 py-24 bg-transparent min-h-[calc(100vh-80px)] transition-colors duration-300">
                <div className="max-w-6xl mx-auto px-6 lg:px-20">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/3 relative">
                            <div className="w-full aspect-square rounded-2xl bg-[#011030] dark:bg-[#1e293b] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                                <img src="/avatar1.JPG" alt="About Me" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" />
                            </div>
                        </div>
                        <div className="md:w-2/3 space-y-6">
                            <h2 className="text-4xl font-extrabold text-[#011030] dark:text-white transition-colors duration-300">About <span className="text-[#ff7700]">Me</span></h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line transition-colors duration-300">
                                {about?.content || "Passionate software engineer dedicated to building high-quality web applications. I love solving complex problems and creating seamless user experiences."}
                            </p>
                            {about?.resume_download_url && (
                                <a
                                    href={about.resume_download_url}
                                    download
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff7700] text-white font-bold rounded-xl hover:bg-[#e56a00] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                                >
                                    <FileText size={18} />
                                    Download My Resume
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </PortfolioLayout>
    );
}
