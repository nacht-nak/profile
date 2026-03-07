import { Head, Link, router } from '@inertiajs/react';
import { Plus, Pencil, Trash2, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Admin Dashboard', href: '/admin/dashboard' },
    { title: 'Certifications', href: '/admin/certifications' },
];

export default function CertificationIndex({ certifications }: { certifications: any[] }) {
    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this certification?')) {
            router.delete(`/admin/certifications/${id}`);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Certifications Management" />
            <div className="flex flex-col gap-6 p-6 flex-1 text-sidebar-foreground">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                        <Trophy size={24} className="text-[#ff7700]" /> Certifications & Achievements
                    </h2>
                    <Link href="/admin/certifications/create">
                        <Button className="flex items-center gap-2 bg-[#ff7700] hover:bg-[#e06900]">
                            <Plus size={16} /> Add New
                        </Button>
                    </Link>
                </div>

                <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-muted text-muted-foreground border-b text-xs uppercase px-4 h-12">
                                <tr>
                                    <th className="px-6 py-3 font-medium text-sidebar-foreground">Preview</th>
                                    <th className="px-6 py-3 font-medium text-sidebar-foreground">Title</th>
                                    <th className="px-6 py-3 font-medium text-sidebar-foreground">Institution</th>
                                    <th className="px-6 py-3 font-medium text-sidebar-foreground">Date</th>
                                    <th className="px-6 py-3 font-medium text-right text-sidebar-foreground">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {certifications.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} className="text-center py-8 text-muted-foreground">
                                            No certifications found.
                                        </td>
                                    </tr>
                                ) : (
                                    certifications.map((item: any) => (
                                        <tr key={item.id} className="border-b last:border-0 hover:bg-muted/50 transition-colors">
                                            <td className="px-6 py-4">
                                                {item.image ? (
                                                    <img src={item.image} className="w-12 h-12 object-cover rounded-lg border border-border" alt="" />
                                                ) : (
                                                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-[10px] text-muted-foreground uppercase font-black">No Pic</div>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-sidebar-foreground">
                                                {item.title}
                                            </td>
                                            <td className="px-6 py-4 text-muted-foreground">
                                                {item.institution}
                                            </td>
                                            <td className="px-6 py-4 text-muted-foreground">
                                                {item.start_date} - {item.end_date || 'Present'}
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <Link href={`/admin/certifications/${item.id}/edit`}>
                                                        <Button variant="outline" size="icon" className="h-8 w-8 text-blue-600 border-blue-200">
                                                            <Pencil size={14} />
                                                        </Button>
                                                    </Link>
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        onClick={() => handleDelete(item.id)}
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
