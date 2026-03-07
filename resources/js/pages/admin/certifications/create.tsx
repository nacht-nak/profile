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
    { title: 'Certifications', href: '/admin/certifications' },
    { title: 'Add Certification', href: '/admin/certifications/create' },
];

export default function CertificationCreate() {
    const { data, setData, post, processing, errors } = useForm({
        institution: '',
        title: '',
        image: null as File | null,
        start_date: '',
        end_date: '',
        description: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/admin/certifications');
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add Certification" />
            <div className="flex flex-col gap-6 p-6 flex-1 max-w-2xl mx-auto w-full text-sidebar-foreground">
                <div className="flex items-center gap-4">
                    <Link href="/admin/certifications">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <ArrowLeft size={16} />
                        </Button>
                    </Link>
                    <h2 className="text-2xl font-bold tracking-tight">Add Certification / Achievement</h2>
                </div>

                <div className="rounded-xl border bg-card shadow-sm p-6 overflow-hidden">
                    <form onSubmit={submit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="title">Certification Title / Achievement Name</Label>
                            <Input
                                id="title"
                                value={data.title}
                                onChange={(e) => setData('title', e.target.value)}
                                placeholder="Full-Stack Web Development Boot Camp"
                                aria-invalid={!!errors.title}
                                required
                            />
                            {errors.title && <p className="text-xs text-red-500">{errors.title}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="institution">Issuing Institution / Organization</Label>
                            <Input
                                id="institution"
                                value={data.institution}
                                onChange={(e) => setData('institution', e.target.value)}
                                placeholder="Coursera, Udemy, or University"
                                aria-invalid={!!errors.institution}
                                required
                            />
                            {errors.institution && <p className="text-xs text-red-500">{errors.institution}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="image">Certification Image / Badge (Optional)</Label>
                            <div className="flex items-center gap-4">
                                <Input
                                    id="image"
                                    type="file"
                                    onChange={(e) => setData('image', e.target.files ? e.target.files[0] : null)}
                                    className="cursor-pointer"
                                />
                            </div>
                            {errors.image && <p className="text-xs text-red-500">{errors.image}</p>}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="start_date">Issue Date / Start Date</Label>
                                <Input
                                    id="start_date"
                                    value={data.start_date}
                                    onChange={(e) => setData('start_date', e.target.value)}
                                    placeholder="June 2023"
                                    aria-invalid={!!errors.start_date}
                                    required
                                />
                                {errors.start_date && <p className="text-xs text-red-500">{errors.start_date}</p>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="end_date">Expiry Date / End Date (Optional)</Label>
                                <Input
                                    id="end_date"
                                    value={data.end_date}
                                    onChange={(e) => setData('end_date', e.target.value)}
                                    placeholder="May 2026 (leave blank for Permanent)"
                                    aria-invalid={!!errors.end_date}
                                />
                                {errors.end_date && <p className="text-xs text-red-500">{errors.end_date}</p>}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Description / Learnings</Label>
                            <Textarea
                                id="description"
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                placeholder="Key achievements or skills learned..."
                                rows={4}
                                aria-invalid={!!errors.description}
                            />
                            {errors.description && <p className="text-xs text-red-500">{errors.description}</p>}
                        </div>

                        <div className="flex pt-4 justify-end gap-3">
                            <Link href="/admin/certifications">
                                <Button type="button" variant="outline">Cancel</Button>
                            </Link>
                            <Button type="submit" disabled={processing} className="flex gap-2 min-w-[120px] bg-[#ff7700] hover:bg-[#e06900]">
                                {processing ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
                                Save Achievement
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
