import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Save, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Admin Dashboard', href: '/admin/dashboard' },
    { title: 'Experience Management', href: '/admin/experiences' },
    { title: 'Edit Experience', href: '#' },
];

export default function ExperienceEdit({ experience }: { experience: any }) {
    const { data, setData, put, processing, errors } = useForm({
        company: experience.company || '',
        position: experience.position || '',
        start_date: experience.start_date || '',
        end_date: experience.end_date || '',
        description: experience.description || '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        put(`/admin/experiences/${experience.id}`);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit ${experience.company}`} />
            <div className="flex flex-col gap-6 p-6 flex-1 max-w-2xl mx-auto w-full text-sidebar-foreground">
                <div className="flex items-center gap-4">
                    <Link href="/admin/experiences">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <ArrowLeft size={16} />
                        </Button>
                    </Link>
                    <h2 className="text-2xl font-bold tracking-tight">Edit Experience</h2>
                </div>

                <div className="rounded-xl border bg-card shadow-sm p-6 overflow-hidden">
                    <form onSubmit={submit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="company">Company</Label>
                            <Input
                                id="company"
                                value={data.company}
                                onChange={(e) => setData('company', e.target.value)}
                                placeholder="Tech Solutions Inc."
                                aria-invalid={!!errors.company}
                            />
                            {errors.company && <p className="text-xs text-red-500">{errors.company}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="position">Position</Label>
                            <Input
                                id="position"
                                value={data.position}
                                onChange={(e) => setData('position', e.target.value)}
                                placeholder="Senior Frontend Developer"
                                aria-invalid={!!errors.position}
                            />
                            {errors.position && <p className="text-xs text-red-500">{errors.position}</p>}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="start_date">Start Date</Label>
                                <Input
                                    id="start_date"
                                    value={data.start_date}
                                    onChange={(e) => setData('start_date', e.target.value)}
                                    placeholder="Jan 2021"
                                    aria-invalid={!!errors.start_date}
                                />
                                {errors.start_date && <p className="text-xs text-red-500">{errors.start_date}</p>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="end_date">End Date</Label>
                                <Input
                                    id="end_date"
                                    value={data.end_date}
                                    onChange={(e) => setData('end_date', e.target.value)}
                                    placeholder="Present (leave blank)"
                                    aria-invalid={!!errors.end_date}
                                />
                                {errors.end_date && <p className="text-xs text-red-500">{errors.end_date}</p>}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Description (optional)</Label>
                            <Textarea
                                id="description"
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                placeholder="Describe your responsibilities and achievements..."
                                rows={5}
                                aria-invalid={!!errors.description}
                            />
                            {errors.description && <p className="text-xs text-red-500">{errors.description}</p>}
                        </div>

                        <div className="flex pt-4 justify-end gap-3">
                            <Link href="/admin/experiences">
                                <Button type="button" variant="outline">Cancel</Button>
                            </Link>
                            <Button type="submit" disabled={processing} className="flex gap-2 min-w-[120px]">
                                {processing ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
                                Update Experience
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
