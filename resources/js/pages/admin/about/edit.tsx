import { Head, useForm } from '@inertiajs/react';
import { FormEvent } from 'react';
import { Save, Loader2, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Admin Dashboard', href: '/admin/dashboard' },
    { title: 'About Me', href: '/admin/about' },
];

export default function AboutEdit({ about }: { about: any }) {
    const { data, setData, put, processing, errors } = useForm({
        content: about?.content || '',
        resume_url: about?.resume_url || '',
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();
        put('/admin/about');
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="About Me Management" />
            <div className="flex flex-col gap-6 p-6 flex-1 max-w-2xl mx-auto w-full text-sidebar-foreground">
                <div className="flex items-center gap-4">
                    <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                        <Info size={24} className="text-blue-500" /> Manage About Section
                    </h2>
                </div>

                <div className="rounded-xl border bg-card shadow-sm p-6 overflow-hidden">
                    <form onSubmit={submit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="content">Bio / About Content</Label>
                            <Textarea
                                id="content"
                                value={data.content}
                                onChange={(e: any) => setData('content', e.target.value)}
                                placeholder="I am a passionate software engineer..."
                                className="min-h-[200px]"
                                aria-invalid={!!errors.content}
                            />
                            {errors.content && <p className="text-xs text-red-500">{errors.content}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="resume_url">Resume Link (URL)</Label>
                            <Input
                                id="resume_url"
                                type="url"
                                value={data.resume_url}
                                onChange={(e: any) => setData('resume_url', e.target.value)}
                                placeholder="https://..."
                                aria-invalid={!!errors.resume_url}
                            />
                            {errors.resume_url && <p className="text-xs text-red-500">{errors.resume_url}</p>}
                        </div>

                        <div className="flex pt-4 justify-end">
                            <Button type="submit" disabled={processing} className="flex gap-2 min-w-[150px]">
                                {processing ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
                                Save Changes
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
