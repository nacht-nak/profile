import { Head, router } from '@inertiajs/react';
import { Mail, Trash2, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Admin Dashboard', href: '/admin/dashboard' },
    { title: 'Messages', href: '/admin/messages' },
];

export default function MessagesIndex({ messages }: { messages: any[] }) {
    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this message?')) {
            router.delete(`/admin/messages/${id}`);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Messages" />
            <div className="flex flex-col gap-6 p-6 flex-1 text-sidebar-foreground">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                        <Mail size={24} className="text-blue-500" /> Messages
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {messages.length === 0 ? (
                        <div className="text-center py-12 border rounded-xl bg-card text-muted-foreground italic">
                            No messages received yet.
                        </div>
                    ) : (
                        messages.map((message: any) => (
                            <div key={message.id} className="p-6 rounded-xl border bg-card shadow-sm hover:border-blue-200 transition-colors">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 font-bold text-lg">
                                            <User size={16} className="text-muted-foreground" />
                                            {message.name}
                                        </div>
                                        <div className="text-sm text-blue-600 hover:underline">
                                            <a href={`mailto:${message.email}`}>{message.email}</a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                            <Calendar size={14} />
                                            {new Date(message.created_at).toLocaleDateString()}
                                        </div>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() => handleDelete(message.id)}
                                            className="h-8 w-8 text-red-600 border-red-200 hover:bg-red-50"
                                        >
                                            <Trash2 size={14} />
                                        </Button>
                                    </div>
                                </div>
                                <div className="p-4 bg-muted/30 rounded-lg text-sm leading-relaxed border italic whitespace-pre-wrap">
                                    {message.message}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
