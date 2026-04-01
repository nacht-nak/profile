import { Head, useForm, router } from '@inertiajs/react';
import { FormEvent, useRef, useState } from 'react';
import { Save, Loader2, Info, Upload, FileText, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Admin Dashboard', href: '/admin/dashboard' },
    { title: 'About Me', href: '/admin/about' },
];

export default function AboutEdit({ about }: { about: any }) {
    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const [removeFile, setRemoveFile] = useState(false);
    const [processing, setProcessing] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const { data, setData, errors } = useForm({
        content: about?.content || '',
    });

    const hasExistingFile = about?.resume_file && !removeFile;

    const submit = (e: FormEvent) => {
        e.preventDefault();
        setProcessing(true);

        const formData = new FormData();
        formData.append('content', data.content);

        if (resumeFile) {
            formData.append('resume_file', resumeFile);
        }
        if (removeFile) {
            formData.append('remove_resume_file', '1');
        }

        router.post('/admin/about', formData, {
            forceFormData: true,
            onFinish: () => setProcessing(false),
        });
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setResumeFile(file);
            setRemoveFile(false);
        }
    };

    const handleRemoveFile = () => {
        setResumeFile(null);
        setRemoveFile(true);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const handleCancelNewFile = () => {
        setResumeFile(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
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
                        {/* Bio Content */}
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

                        {/* Resume File Upload */}
                        <div className="space-y-3">
                            <Label>Resume File</Label>
                            <p className="text-xs text-muted-foreground">
                                Upload your resume as PDF, DOC, DOCX, or TXT (max 10MB). Visitors can download it from your About page.
                            </p>

                            {/* Current file */}
                            {hasExistingFile && !resumeFile && (
                                <div className="flex items-center gap-3 p-3 rounded-lg border bg-emerald-500/10 border-emerald-500/30">
                                    <FileText size={20} className="text-emerald-500 shrink-0" />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium truncate">
                                            {about.resume_original_name || 'resume file'}
                                        </p>
                                        <p className="text-xs text-muted-foreground">Currently uploaded</p>
                                    </div>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        onClick={handleRemoveFile}
                                        className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-500/10 shrink-0"
                                    >
                                        <X size={16} />
                                    </Button>
                                </div>
                            )}

                            {/* New file selected */}
                            {resumeFile && (
                                <div className="flex items-center gap-3 p-3 rounded-lg border bg-blue-500/10 border-blue-500/30">
                                    <Upload size={20} className="text-blue-500 shrink-0" />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium truncate">{resumeFile.name}</p>
                                        <p className="text-xs text-muted-foreground">
                                            {(resumeFile.size / 1024 / 1024).toFixed(2)} MB — Ready to upload
                                        </p>
                                    </div>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        onClick={handleCancelNewFile}
                                        className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-500/10 shrink-0"
                                    >
                                        <X size={16} />
                                    </Button>
                                </div>
                            )}

                            {/* Removed notice */}
                            {removeFile && !resumeFile && (
                                <div className="flex items-center gap-3 p-3 rounded-lg border bg-yellow-500/10 border-yellow-500/30">
                                    <X size={20} className="text-yellow-500 shrink-0" />
                                    <p className="text-sm text-yellow-600 dark:text-yellow-400">
                                        Resume file will be removed on save.
                                    </p>
                                </div>
                            )}

                            {/* File input */}
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept=".pdf,.doc,.docx,.txt"
                                onChange={handleFileSelect}
                                className="hidden"
                                id="resume_file_input"
                            />
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => fileInputRef.current?.click()}
                                className="flex gap-2"
                            >
                                <Upload size={16} />
                                {hasExistingFile || resumeFile ? 'Replace File' : 'Choose File'}
                            </Button>
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
