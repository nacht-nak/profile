import { Head, Link, useForm } from '@inertiajs/react';
import { FormEvent } from 'react';
import { ArrowLeft, Save, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Admin Dashboard', href: '/admin/dashboard' },
    { title: 'Projects Management', href: '/admin/projects' },
    { title: 'Add Project', href: '/admin/projects/create' },
];

export default function ProjectsCreate() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
        link: '',
        image: '',
        tech_stack: '',
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();
        post('/admin/projects');
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add Project" />
            <div className="flex flex-col gap-6 p-6 flex-1 max-w-2xl mx-auto w-full text-sidebar-foreground">
                <div className="flex items-center gap-4">
                    <Link href="/admin/projects">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <ArrowLeft size={16} />
                        </Button>
                    </Link>
                    <h2 className="text-2xl font-bold tracking-tight">Add New Project</h2>
                </div>

                <div className="rounded-xl border bg-card shadow-sm p-6 overflow-hidden">
                    <form onSubmit={submit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                value={data.title}
                                onChange={(e: any) => setData('title', e.target.value)}
                                placeholder="Awesome Project..."
                                aria-invalid={!!errors.title}
                            />
                            {errors.title && <p className="text-xs text-red-500">{errors.title}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                value={data.description}
                                onChange={(e: any) => setData('description', e.target.value)}
                                placeholder="Detailed description..."
                                className="min-h-[120px]"
                                aria-invalid={!!errors.description}
                            />
                            {errors.description && <p className="text-xs text-red-500">{errors.description}</p>}
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="tech_stack">Tech Stack</Label>
                                <Input
                                    id="tech_stack"
                                    value={data.tech_stack}
                                    onChange={(e: any) => setData('tech_stack', e.target.value)}
                                    placeholder="React, Laravel, Tailwind"
                                    aria-invalid={!!errors.tech_stack}
                                />
                                {errors.tech_stack && <p className="text-xs text-red-500">{errors.tech_stack}</p>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="link">Project Link (URL)</Label>
                                <Input
                                    id="link"
                                    type="url"
                                    value={data.link}
                                    onChange={(e: any) => setData('link', e.target.value)}
                                    placeholder="https://..."
                                    aria-invalid={!!errors.link}
                                />
                                {errors.link && <p className="text-xs text-red-500">{errors.link}</p>}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="image">Custom Image URL (Optional)</Label>
                            <Input
                                id="image"
                                value={data.image}
                                onChange={(e: any) => setData('image', e.target.value)}
                                placeholder="https://..."
                                aria-invalid={!!errors.image}
                            />
                            <p className="text-[10px] text-muted-foreground mt-1">
                                Tip: Leave this blank to automatically generate a screenshot from the Project Link!
                            </p>
                            {errors.image && <p className="text-xs text-red-500">{errors.image}</p>}
                        </div>

                        <div className="flex pt-4 justify-end gap-3">
                            <Link href="/admin/projects">
                                <Button type="button" variant="outline">Cancel</Button>
                            </Link>
                            <Button type="submit" disabled={processing} className="flex gap-2 min-w-[120px]">
                                {processing ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
                                Save Project
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
