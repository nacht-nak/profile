import { Head, Link, router } from '@inertiajs/react';
import { Plus, Pencil, Trash2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Admin Dashboard', href: '/admin/dashboard' },
    { title: 'Projects Management', href: '/admin/projects' },
];

export default function ProjectsIndex({ projects }: { projects: any[] }) {
    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this project?')) {
            router.delete(`/admin/projects/${id}`);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Projects Management" />
            <div className="flex flex-col gap-6 p-6 flex-1 text-sidebar-foreground">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
                    <Link href="/admin/projects/create">
                        <Button className="flex items-center gap-2">
                            <Plus size={16} /> Add Project
                        </Button>
                    </Link>
                </div>

                <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-muted text-muted-foreground border-b text-xs uppercase px-4 h-12">
                                <tr>
                                    <th className="px-6 py-3 font-medium">Image</th>
                                    <th className="px-6 py-3 font-medium">Title</th>
                                    <th className="px-6 py-3 font-medium">Tech Stack</th>
                                    <th className="px-6 py-3 font-medium">Link</th>
                                    <th className="px-6 py-3 font-medium text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projects.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="text-center py-8 text-muted-foreground">
                                            No projects found.
                                        </td>
                                    </tr>
                                ) : (
                                    projects.map((project: any) => (
                                        <tr key={project.id} className="border-b last:border-0 hover:bg-muted/50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="w-16 h-10 rounded-md bg-[#011030] overflow-hidden flex items-center justify-center">
                                                    {project.image ? (
                                                        <img src={project.image} className="w-full h-full object-cover" />
                                                    ) : project.link ? (
                                                        <img
                                                            src={`https://s0.wp.com/mshots/v1/${encodeURIComponent(project.link)}?w=200`}
                                                            className="w-full h-full object-cover"
                                                            onError={(e) => {
                                                                (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="text-[8px] text-white/20">PROJ</span>';
                                                            }}
                                                        />
                                                    ) : (
                                                        <span className="text-[8px] text-white/20">PROJ</span>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 font-medium">
                                                {project.title}
                                            </td>
                                            <td className="px-6 py-4 text-muted-foreground">
                                                {project.tech_stack || 'N/A'}
                                            </td>
                                            <td className="px-6 py-4 text-muted-foreground">
                                                {project.link ? (
                                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-600 hover:underline">
                                                        Visit <ExternalLink size={12} />
                                                    </a>
                                                ) : 'N/A'}
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <Link href={`/admin/projects/${project.id}/edit`}>
                                                        <Button variant="outline" size="icon" className="h-8 w-8 text-blue-600 border-blue-200">
                                                            <Pencil size={14} />
                                                        </Button>
                                                    </Link>
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        onClick={() => handleDelete(project.id)}
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
