import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Save, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Admin Dashboard', href: '/admin/dashboard' },
    { title: 'Skills Management', href: '/admin/skills' },
    { title: 'Edit Skill', href: '#' },
];

export default function SkillsEdit({ skill }: { skill: any }) {
    const { data, setData, post, processing, errors } = useForm({
        name: skill.name || '',
        category: skill.category || 'Frontend',
        icon: skill.icon || '',
        image: null as File | null,
        proficiency: skill.proficiency || 80,
        _method: 'put', // Using POST with _method put for multipart uploads
    });

    const [preview, setPreview] = React.useState<string | null>(skill.image ? `/storage/${skill.image}` : null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData('image', file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(`/admin/skills/${skill.id}`);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit ${skill.name}`} />
            <div className="flex flex-col gap-6 p-6 flex-1 max-w-xl mx-auto w-full text-sidebar-foreground">
                <div className="flex items-center gap-4">
                    <Link href="/admin/skills">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <ArrowLeft size={16} />
                        </Button>
                    </Link>
                    <h2 className="text-2xl font-bold tracking-tight">Edit Skill</h2>
                </div>

                <div className="rounded-xl border bg-card shadow-sm p-6 overflow-hidden">
                    <form onSubmit={submit} className="space-y-6">
                        <div className="space-y-2">
                            <Label>Skill Logo (Optional Replace)</Label>
                            <div className="flex items-center gap-4">
                                {preview && (
                                    <div className="w-16 h-16 rounded-xl border overflow-hidden bg-gray-50 flex items-center justify-center">
                                        <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                                    </div>
                                )}
                                <Input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="flex-1"
                                />
                            </div>
                            <p className="text-[10px] text-gray-500 italic">Overrides icon key if uploaded.</p>
                            {errors.image && <p className="text-xs text-red-500">{errors.image}</p>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Skill Name</Label>
                                <Input
                                    id="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    placeholder="React, Python, AWS..."
                                    aria-invalid={!!errors.name}
                                />
                                {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="icon">Icon Key (Optional)</Label>
                                <Input
                                    id="icon"
                                    value={data.icon}
                                    onChange={(e) => setData('icon', e.target.value)}
                                    placeholder="laravel, react, tailwind..."
                                    aria-invalid={!!errors.icon}
                                />
                                <p className="text-[10px] text-gray-500 italic">Lucide or Brand icon keys.</p>
                                {errors.icon && <p className="text-xs text-red-500">{errors.icon}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="category">Category</Label>
                                <Select value={data.category} onValueChange={(val) => setData('category', val)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Frontend">Frontend</SelectItem>
                                        <SelectItem value="Backend">Backend</SelectItem>
                                        <SelectItem value="Design">Design</SelectItem>
                                        <SelectItem value="DevOps">DevOps</SelectItem>
                                        <SelectItem value="Language">Language</SelectItem>
                                        <SelectItem value="Other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                                {errors.category && <p className="text-xs text-red-500">{errors.category}</p>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="proficiency">Proficiency (%)</Label>
                                <Input
                                    id="proficiency"
                                    type="number"
                                    min="0"
                                    max="100"
                                    value={data.proficiency}
                                    onChange={(e) => setData('proficiency', parseInt(e.target.value))}
                                    aria-invalid={!!errors.proficiency}
                                />
                                {errors.proficiency && <p className="text-xs text-red-500">{errors.proficiency}</p>}
                            </div>
                        </div>

                        <div className="flex pt-4 justify-end gap-3">
                            <Link href="/admin/skills">
                                <Button type="button" variant="outline">Cancel</Button>
                            </Link>
                            <Button type="submit" disabled={processing} className="flex gap-2 min-w-[120px]">
                                {processing ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
                                Update Skill
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
