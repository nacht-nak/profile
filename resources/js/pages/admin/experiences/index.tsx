import { Head, Link, router } from '@inertiajs/react';
import { Plus, Pencil, Trash2, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Admin Dashboard', href: '/admin/dashboard' },
    { title: 'Experience Management', href: '/admin/experiences' },
];

export default function ExperienceIndex({ experiences }: { experiences: any[] }) {
    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this experience entry?')) {
            router.delete(`/admin/experiences/${id}`);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Experience Management" />
            <div className="flex flex-col gap-6 p-6 flex-1 text-sidebar-foreground">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                        <Briefcase size={24} className="text-blue-500" /> Experiences
                    </h2>
                    <Link href="/admin/experiences/create">
                        <Button className="flex items-center gap-2">
                            <Plus size={16} /> Add Experience
                        </Button>
                    </Link>
                </div>

                <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-muted text-muted-foreground border-b text-xs uppercase px-4 h-12">
                                <tr>
                                    <th className="px-6 py-3 font-medium">Company</th>
                                    <th className="px-6 py-3 font-medium">Position</th>
                                    <th className="px-6 py-3 font-medium">Period</th>
                                    <th className="px-6 py-3 font-medium text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {experiences.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} className="text-center py-8 text-muted-foreground">
                                            No experience entries found.
                                        </td>
                                    </tr>
                                ) : (
                                    experiences.map((experience: any) => (
                                        <tr key={experience.id} className="border-b last:border-0 hover:bg-muted/50 transition-colors">
                                            <td className="px-6 py-4 font-medium">
                                                {experience.company}
                                            </td>
                                            <td className="px-6 py-4 text-muted-foreground">
                                                {experience.position}
                                            </td>
                                            <td className="px-6 py-4 text-muted-foreground">
                                                {experience.start_date} - {experience.end_date || 'Present'}
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <Link href={`/admin/experiences/${experience.id}/edit`}>
                                                        <Button variant="outline" size="icon" className="h-8 w-8 text-blue-600 border-blue-200">
                                                            <Pencil size={14} />
                                                        </Button>
                                                    </Link>
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        onClick={() => handleDelete(experience.id)}
                                                        className="h-8 w-8 text-red-600 border-red-200"
                                                    >
                                                        <Trash2 size={14} />
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
