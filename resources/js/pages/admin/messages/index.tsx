import { Head, router, useForm } from '@inertiajs/react';
import { useState } from 'react';
import { Mail, Trash2, Calendar, User, Send, X, Loader2, MessageSquareReply, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Admin Dashboard', href: '/admin/dashboard' },
    { title: 'Messages', href: '/admin/messages' },
];

export default function MessagesIndex({ messages }: { messages: any[] }) {
    const [replyingTo, setReplyingTo] = useState<number | null>(null);
    const [expandedThread, setExpandedThread] = useState<number | null>(null);
    const { data, setData, post, processing, reset, errors } = useForm({
        reply: '',
    });

    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this message?')) {
            router.delete(`/admin/messages/${id}`);
        }
    };

    const handleReply = (id: number) => {
        post(`/admin/messages/${id}/reply`, {
            onSuccess: () => {
                reset();
                setExpandedThread(id);
                // Keep reply open for continued conversation
            },
        });
    };

    const toggleThread = (id: number) => {
        setExpandedThread(expandedThread === id ? null : id);
    };

    const openReply = (id: number) => {
        setReplyingTo(replyingTo === id ? null : id);
        reset();
        setExpandedThread(id);
    };

    const cancelReply = () => {
        setReplyingTo(null);
        reset();
    };

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
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
                        messages.map((msg: any) => (
                            <div key={msg.id} className="rounded-xl border bg-card shadow-sm overflow-hidden transition-all">
                                {/* Message Header */}
                                <div className="p-5">
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2 font-bold text-lg">
                                                <User size={16} className="text-muted-foreground" />
                                                {msg.name}
                                            </div>
                                            <a href={`mailto:${msg.email}`} className="text-sm text-blue-600 hover:underline">
                                                {msg.email}
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                                <Calendar size={14} />
                                                {formatDate(msg.created_at)}
                                            </span>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() => handleDelete(msg.id)}
                                                className="h-8 w-8 text-red-600 border-red-200 hover:bg-red-50 dark:hover:bg-red-500/10"
                                            >
                                                <Trash2 size={14} />
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Client's original message */}
                                    <div className="flex gap-3 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-1">
                                            <User size={14} className="text-blue-500" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl rounded-tl-sm p-4 text-sm leading-relaxed whitespace-pre-wrap">
                                                {msg.message}
                                            </div>
                                            <span className="text-[11px] text-muted-foreground mt-1 block">
                                                {formatDate(msg.created_at)}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Conversation thread */}
                                    {msg.replies && msg.replies.length > 0 && (
                                        <>
                                            {/* Toggle thread button */}
                                            {msg.replies.length > 1 && expandedThread !== msg.id && (
                                                <button
                                                    onClick={() => toggleThread(msg.id)}
                                                    className="flex items-center gap-1 text-xs text-blue-500 hover:text-blue-600 mb-3 ml-11 font-medium"
                                                >
                                                    <ChevronDown size={14} />
                                                    Show {msg.replies.length} replies
                                                </button>
                                            )}

                                            {/* Show all replies or just the latest */}
                                            {(expandedThread === msg.id ? msg.replies : [msg.replies[msg.replies.length - 1]]).map((reply: any, idx: number) => (
                                                <div key={reply.id} className="flex gap-3 mb-3">
                                                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-1">
                                                        <Send size={12} className="text-emerald-500" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl rounded-tl-sm p-4 text-sm leading-relaxed whitespace-pre-wrap">
                                                            {reply.content}
                                                        </div>
                                                        <span className="text-[11px] text-muted-foreground mt-1 block">
                                                            You replied · {formatDate(reply.created_at)}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}

                                            {/* Collapse button */}
                                            {msg.replies.length > 1 && expandedThread === msg.id && (
                                                <button
                                                    onClick={() => toggleThread(msg.id)}
                                                    className="flex items-center gap-1 text-xs text-blue-500 hover:text-blue-600 mb-3 ml-11 font-medium"
                                                >
                                                    <ChevronUp size={14} />
                                                    Collapse replies
                                                </button>
                                            )}
                                        </>
                                    )}

                                    {/* Reply button */}
                                    {replyingTo !== msg.id && (
                                        <div className="flex justify-end mt-2">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => openReply(msg.id)}
                                                className="flex gap-1.5 text-blue-600 border-blue-200 hover:bg-blue-50 dark:hover:bg-blue-500/10"
                                            >
                                                <MessageSquareReply size={14} />
                                                {msg.replies && msg.replies.length > 0 ? 'Reply Again' : 'Reply'}
                                            </Button>
                                        </div>
                                    )}
                                </div>

                                {/* Reply form */}
                                {replyingTo === msg.id && (
                                    <div className="border-t bg-muted/20 p-4 space-y-3">
                                        <div className="flex items-center gap-2 text-sm font-semibold text-blue-600">
                                            <Send size={14} />
                                            Replying to {msg.name} ({msg.email})
                                        </div>
                                        <Textarea
                                            value={data.reply}
                                            onChange={(e: any) => setData('reply', e.target.value)}
                                            placeholder="Type your reply here... This will be sent as an email."
                                            className="min-h-[100px]"
                                            autoFocus
                                        />
                                        {errors.reply && <p className="text-xs text-red-500">{errors.reply}</p>}
                                        <div className="flex justify-end gap-2">
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="sm"
                                                onClick={cancelReply}
                                                disabled={processing}
                                                className="flex gap-1.5"
                                            >
                                                <X size={14} />
                                                Cancel
                                            </Button>
                                            <Button
                                                type="button"
                                                size="sm"
                                                onClick={() => handleReply(msg.id)}
                                                disabled={processing || !data.reply.trim()}
                                                className="flex gap-1.5 bg-blue-600 hover:bg-blue-700 text-white"
                                            >
                                                {processing ? (
                                                    <Loader2 size={14} className="animate-spin" />
                                                ) : (
                                                    <Send size={14} />
                                                )}
                                                Send Reply
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
