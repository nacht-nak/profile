import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Projects({ projects }: { projects: any[] }) {
    return (
        <section id="work" className="relative z-10 py-24 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-6 lg:px-20">
                <div className="mb-16">
                    <h2 className="text-4xl font-extrabold text-[#011030]">Recent <span className="text-[#ff7700]">Projects</span></h2>
                    <p className="text-gray-500 mt-2">A showcase of my latest work.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects?.map((project: any) => (
                        <motion.div whileHover={{ y: -8 }} key={project.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group">
                            {/* ... (Keep your existing image/tech stack logic here) ... */}
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-[#011030]">{project.title}</h3>
                                <p className="text-gray-500 text-sm mb-6">{project.description}</p>
                                {project.link && (
                                    <a href={project.link} className="text-[#ff7700] font-bold flex items-center gap-2">
                                        View Project <Send size={14} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}