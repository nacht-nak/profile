import PortfolioLayout from '@/layouts/portfolio-layout';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Certifications({ certifications }: any) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <PortfolioLayout title="Certifications">
            <section id="certifications" className="relative z-10 py-24 bg-transparent min-h-[calc(100vh-80px)] transition-colors duration-300">
                <div className="max-w-6xl mx-auto px-6 lg:px-20">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-extrabold text-[#011030] dark:text-white transition-colors duration-300">
                            Achievements & <span className="text-[#ff7700]">Certifications</span>
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 mt-2 transition-colors">Professional recognition and specialized training. Click to view.</p>
                    </div>

                    {/* Grid of certifications */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {certifications?.length > 0 ? (
                            certifications.map((cert: any) => (
                                <div
                                    key={cert.id}
                                    onClick={() => cert.image && setSelectedImage(cert.image)}
                                    className="group p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0f172a] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer relative overflow-hidden duration-300"
                                >
                                    <div className="font-bold text-[#011030] dark:text-white mb-2 text-lg group-hover:text-[#ff7700] transition-colors">{cert.title}</div>
                                    <div className="text-gray-600 dark:text-gray-300 font-semibold mb-1 transition-colors">{cert.institution}</div>
                                    <time className="block font-mono text-xs text-[#ff7700] uppercase tracking-wider mb-2">
                                        {cert.start_date} - {cert.end_date || 'Present'}
                                    </time>
                                    <div className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 transition-colors">{cert.description}</div>

                                    {cert.image && (
                                        <div className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest flex items-center gap-1 group-hover:text-[#ff7700] transition-colors">
                                            View Certificate ↗
                                        </div>
                                    )}
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-400 dark:text-gray-500 italic col-span-full transition-colors">Certifications coming soon.</p>
                        )}
                    </div>
                </div>

                {/* Full Screen Image Modal */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#011030]/95 backdrop-blur-md p-4 cursor-zoom-out"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative max-w-5xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute -top-12 right-0 text-white hover:text-[#ff7700] flex items-center gap-2 font-bold"
                            >
                                CLOSE ✕
                            </button>
                            <img
                                src={selectedImage}
                                alt="Certificate"
                                className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-2xl border border-white/10"
                            />
                        </motion.div>
                    </div>
                )}
            </section>
        </PortfolioLayout>
    );
}
