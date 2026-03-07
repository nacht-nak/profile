export default function Certifications({ certifications, onSelectImage }: { certifications: any[], onSelectImage: (img: string) => void }) {
    return (
        <section id="certifications" className="relative z-10 py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-20">
                <h2 className="text-4xl font-extrabold text-[#011030] text-center mb-16">
                    Achievements & <span className="text-[#ff7700]">Certifications</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {certifications?.map((cert: any) => (
                        <div 
                            key={cert.id} 
                            onClick={() => cert.image && onSelectImage(cert.image)}
                            className="p-6 rounded-2xl border border-gray-100 bg-white cursor-pointer hover:shadow-xl transition-all"
                        >
                            <div className="font-bold text-[#011030] group-hover:text-[#ff7700]">{cert.title}</div>
                            <div className="text-gray-600 text-sm">{cert.institution}</div>
                            {cert.image && <div className="text-[10px] mt-2 text-[#ff7700]">View Certificate ↗</div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}