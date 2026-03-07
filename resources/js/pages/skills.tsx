import { motion } from 'framer-motion';
import { Cpu, Code, Database, Globe, Server, Smartphone, ShieldCheck, Monitor, Layers } from 'lucide-react';
import { LaravelIcon, ReactIcon, PhpIcon, JavascriptIcon, TailwindIcon, NodeIcon, VueIcon } from '@/components/brand-icons';

const iconMap: Record<string, any> = {
    cpu: Cpu,
    code: Code,
    database: Database,
    globe: Globe,
    server: Server,
    smartphone: Smartphone,
    shield: ShieldCheck,
    monitor: Monitor,
    layers: Layers,
    laravel: LaravelIcon,
    react: ReactIcon,
    "react.js": ReactIcon,
    php: PhpIcon,
    javascript: JavascriptIcon,
    js: JavascriptIcon,
    tailwind: TailwindIcon,
    "tailwind css": TailwindIcon,
    node: NodeIcon,
    "node.js": NodeIcon,
    vue: VueIcon,
    "vue.js": VueIcon,
};

type Skill = {
    id: number;
    name: string;
    category?: string;
    icon?: string;
    proficiency?: number;
};

export default function Skills({ skills }: { skills: Skill[] }) {
    return (
        <section id="skills" className="relative z-10 py-24 bg-transparent transition-colors duration-300">
            {/* Skills Section */}
            <div className="max-w-6xl mx-auto px-6 lg:px-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-[#011030] dark:text-white transition-colors duration-300">
                        Technical <span className="text-[#ff7700]">Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-[#ff7700] mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {skills?.length > 0 ? (
                        skills.map((skill: any) => {
                            const iconKey = (skill.icon || skill.name)?.toLowerCase();
                            const Icon = iconMap[iconKey] || Cpu;

                            return (
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    key={skill.id}
                                    className="bg-white dark:bg-[#0f172a] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center group hover:border-[#ff7700]/30 hover:shadow-xl hover:shadow-[#ff7700]/5 transition-all"
                                >
                                    <div className="w-12 h-12 bg-gray-50 dark:bg-[#1e293b] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#ff7700]/10 group-hover:text-[#ff7700] transition-colors relative overflow-hidden">
                                        {skill.image ? (
                                            <img
                                                src={`/storage/${skill.image}`}
                                                alt={skill.name}
                                                className="w-full h-full object-contain p-1"
                                            />
                                        ) : (
                                            <Icon size={24} className="text-[#011030] dark:text-gray-300 group-hover:text-[#ff7700] dark:group-hover:text-[#ff7700] transition-colors" />
                                        )}
                                    </div>

                                    <h3 className="font-bold text-gray-800 dark:text-gray-100 transition-colors duration-300">
                                        {skill.name}
                                    </h3>

                                    <div className="flex items-center justify-between w-full mt-1">
                                        <span className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-wider transition-colors">
                                            {skill.category || 'Skill'}
                                        </span>
                                        <span className="text-[10px] font-bold text-[#ff7700]">
                                            {skill.proficiency || 0}%
                                        </span>
                                    </div>

                                    <div className="w-full bg-gray-100 dark:bg-gray-800 h-1 rounded-full mt-3 transition-colors">
                                        <div
                                            className="bg-[#ff7700] h-full rounded-full transition-all duration-500"
                                            style={{ width: `${skill.proficiency || 0}%` }}
                                        ></div>
                                    </div>
                                </motion.div>
                            );
                        })
                    ) : (
                        <p className="col-span-full text-center text-gray-400 italic">
                            No skills listed yet.
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}