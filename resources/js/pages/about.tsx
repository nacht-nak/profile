import { ArrowDownCircle } from 'lucide-react';

interface AboutProps {
    about: {
        content?: string;
        resume_url?: string;
    };
}

export default function About({ about }: AboutProps) {
    return (
        <section id="about" className="relative z-10 py-24 bg-gray-50/50">
            <div className="max-w-6xl mx-auto px-6 lg:px-20">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Image Side */}
                    <div className="md:w-1/3 relative">
                        <div className="w-full aspect-square rounded-2xl bg-[#011030] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                            <img 
                                src="/avatar1.JPG" 
                                alt="About Me" 
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" 
                            />
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="md:w-2/3 space-y-6">
                        <h2 className="text-4xl font-extrabold text-[#011030]">
                            About <span className="text-[#ff7700]">Me</span>
                        </h2>
                        
                        <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                            {about?.content || 
                                "Passionate software engineer dedicated to building high-quality web applications. I love solving complex problems and creating seamless user experiences."
                            }
                        </p>

                        {about?.resume_url && (
                            <a 
                                href={about.resume_url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center gap-2 text-[#ff7700] font-bold hover:underline"
                            >
                                Download My Resume <ArrowDownCircle size={18} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}