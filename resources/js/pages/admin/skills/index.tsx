import { Head, Link, router } from '@inertiajs/react';
import { Plus, Pencil, Trash2, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Admin Dashboard', href: '/admin/dashboard' },
    { title: 'Skills Management', href: '/admin/skills' },
];

export default function SkillsIndex({ skills }: { skills: any[] }) {
    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this skill?')) {
            router.delete(`/admin/skills/${id}`);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Skills Management" />
            <div className="flex flex-col gap-6 p-6 flex-1 text-sidebar-foreground">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                        <Cpu size={24} className="text-blue-500" /> Skills
                    </h2>
                    <Link href="/admin/skills/create">
                        <Button className="flex items-center gap-2">
                            <Plus size={16} /> Add Skill
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {skills.length === 0 ? (
                        <div className="col-span-full text-center py-12 border rounded-xl bg-card text-muted-foreground">
                            No skills found. Start by adding one!
                        </div>
                    ) : (
                        skills.map((skill: any) => (
                            <div key={skill.id} className="p-5 rounded-xl border bg-card shadow-sm flex items-center justify-between hover:border-blue-200 transition-colors">
                                <div className="space-y-1">
                                    <h4 className="font-bold text-lg">{skill.name}</h4>
                                    <div className="flex items-center gap-2">
                                        <Badge variant="outline">{skill.category || 'General'}</Badge>
                                        <span className="text-xs text-muted-foreground">{skill.proficiency}% Proficiency</span>
                                    </div>
                                    <div className="w-full bg-muted h-1 rounded-full mt-2 overflow-hidden">
                                        <div className="bg-blue-500 h-full rounded-full transition-all duration-1000" style={{ width: `${skill.proficiency || 0}%` }}></div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Link href={`/admin/skills/${skill.id}/edit`}>
                                        <Button variant="outline" size="icon" className="h-8 w-8 text-blue-600 border-blue-200">
                                            <Pencil size={14} />
                                        </Button>
                                    </Link>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() => handleDelete(skill.id)}
                                        className="h-8 w-8 text-red-600 border-red-200"
                                    >
                                        <Trash2 size={14} />
                                    </Button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
