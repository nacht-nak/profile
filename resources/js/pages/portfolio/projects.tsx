import PortfolioLayout from '@/layouts/portfolio-layout';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Projects({ projects }: any) {
    return (
        <PortfolioLayout title="Projects">
            <section id="work" className="relative z-10 py-24 bg-transparent min-h-[calc(100vh-80px)] transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-6 lg:px-20">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <h2 className="text-4xl font-extrabold text-[#011030] dark:text-white transition-colors duration-300">Recent <span className="text-[#ff7700]">Projects</span></h2>
                            <p className="text-gray-500 dark:text-gray-400 mt-2 transition-colors">A showcase of my latest work and technical expertise.</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects?.length > 0 ? projects.map((project: any) => (
                            <motion.div
                                whileHover={{ y: -8 }}
                                key={project.id}
                                className="bg-white dark:bg-[#0f172a] rounded-3xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all group duration-300"
                            >
                                <div className="aspect-video bg-[#011030] relative overflow-hidden">
                                    {project.image ? (
                                        <img src={project.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={project.title} />
                                    ) : project.link ? (
                                        <img
                                            src={`https://s0.wp.com/mshots/v1/${encodeURIComponent(project.link)}?w=800&h=450`}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            alt={project.title}
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-white/20 font-black text-4xl">PROJ</div>';
                                            }}
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-white/20 font-black text-4xl">PROJ</div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#011030] to-transparent opacity-60 pointer-events-none"></div>
                                </div>
                                <div className="p-8 transition-colors duration-300">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech_stack?.split(',').map((tech: string) => (
                                            <span key={tech} className="text-[10px] uppercase font-bold tracking-widest bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 transition-colors">{tech.trim()}</span>
                                        ))}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#011030] dark:text-white mb-2 transition-colors">{project.title}</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-3 mb-6 leading-relaxed transition-colors">{project.description}</p>
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#ff7700] text-sm font-bold uppercase tracking-widest hover:gap-3 transition-all">
                                            View Project <Send size={14} />
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        )) : (
                            <p className="col-span-full text-center text-gray-400 italic py-12">Projects are being polished. Check back soon!</p>
                        )}
                    </div>
                </div>
            </section>
        </PortfolioLayout>
    );
}
