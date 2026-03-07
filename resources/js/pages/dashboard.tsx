import { Head, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem, User } from '@/types';
import {
    FolderKanban,
    Lightbulb,
    Award,
    Briefcase,
    MessageSquare,
    ExternalLink,
    Mail,
    Clock,
    ChevronRight,
} from 'lucide-react';
import * as routes from '@/routes';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: routes.dashboard(),
    },
];

interface Stats {
    projects: number;
    skills: number;
    certifications: number;
    experiences: number;
    messages: number;
}

interface Message {
    id: number;
    name: string;
    email: string;
    message: string;
    created_at: string;
}

interface Project {
    id: number;
    title: string;
    description: string;
    tech_stack: string;
    image: string | null;
}

interface Props {
    stats: Stats;
    recentMessages: Message[];
    recentProjects: Project[];
}

function timeAgo(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    if (seconds < 60) return `${seconds}s ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
}

const statCards = [
    {
        key: 'projects' as keyof Stats,
        label: 'Projects',
        icon: FolderKanban,
        gradient: 'from-violet-500 to-purple-600',
        bg: 'bg-violet-50 dark:bg-violet-950/20',
        text: 'text-violet-600 dark:text-violet-400',
        href: '/admin/projects',
    },
    {
        key: 'skills' as keyof Stats,
        label: 'Skills',
        icon: Lightbulb,
        gradient: 'from-amber-400 to-orange-500',
        bg: 'bg-amber-50 dark:bg-amber-950/20',
        text: 'text-amber-600 dark:text-amber-400',
        href: '/admin/skills',
    },
    {
        key: 'certifications' as keyof Stats,
        label: 'Certifications',
        icon: Award,
        gradient: 'from-emerald-400 to-teal-500',
        bg: 'bg-emerald-50 dark:bg-emerald-950/20',
        text: 'text-emerald-600 dark:text-emerald-400',
        href: '/admin/certifications',
    },

    {
        key: 'messages' as keyof Stats,
        label: 'Messages',
        icon: MessageSquare,
        gradient: 'from-rose-400 to-pink-600',
        bg: 'bg-rose-50 dark:bg-rose-950/20',
        text: 'text-rose-600 dark:text-rose-400',
        href: '/admin/messages',
    },
];

export default function Dashboard({ stats, recentMessages, recentProjects }: Props) {
    const { auth } = usePage().props as unknown as { auth: { user: User } };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 p-4 md:p-6">

                {/* Welcome Banner */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-6 text-white shadow-lg">
                    <div className="absolute -right-10 -top-10 size-40 rounded-full bg-white/10 blur-2xl" />
                    <div className="absolute -bottom-10 -left-10 size-40 rounded-full bg-white/10 blur-2xl" />
                    <div className="relative z-10">
                        <p className="text-sm font-medium uppercase tracking-widest text-white/70">Master of Peace</p>
                        <h1 className="mt-1 text-2xl font-bold md:text-3xl">Welcome back, {auth.user.name} 👋</h1>
                        <p className="mt-2 text-white/80">Here's an overview of your portfolio content.</p>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {statCards.slice(0, 4).map(({ key, label, icon: Icon, gradient, bg, text, href }) => (
                        <a
                            key={key}
                            href={href}
                            className={`group flex flex-col gap-3 rounded-2xl ${bg} p-5 shadow-sm border border-transparent hover:border-current/10 transition-all hover:-translate-y-1 hover:shadow-md`}
                        >
                            <div className={`flex size-11 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-sm`}>
                                <Icon size={22} />
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-foreground">{stats[key]}</p>
                                <p className={`text-sm font-medium ${text}`}>{label}</p>
                            </div>
                            <div className={`flex items-center gap-1 text-xs ${text} opacity-0 group-hover:opacity-100 transition-opacity`}>
                                <span>View all</span>
                                <ChevronRight size={12} />
                            </div>
                        </a>
                    ))}
                </div>

                {/* Bottom Grid: Recent Projects + Recent Messages */}
                <div className="grid gap-6 md:grid-cols-2">

                    {/* Recent Projects */}
                    <div className="flex flex-col gap-4 rounded-2xl border border-sidebar-border/50 bg-card p-5 shadow-sm dark:border-sidebar-border">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <FolderKanban size={18} className="text-violet-500" />
                                <h2 className="font-semibold text-foreground">Recent Projects</h2>
                            </div>
                            <a href="/admin/projects" className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
                                View all <ExternalLink size={12} />
                            </a>
                        </div>

                        {recentProjects.length === 0 ? (
                            <div className="flex flex-col items-center justify-center gap-2 py-10 text-muted-foreground">
                                <FolderKanban size={36} className="opacity-30" />
                                <p className="text-sm">No projects yet</p>
                                <a href="/admin/projects/create" className="text-xs font-medium text-violet-500 hover:underline">
                                    Add your first project →
                                </a>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-3">
                                {recentProjects.map((project) => {
                                    const techs = project.tech_stack
                                        ? project.tech_stack.split(',').map((t) => t.trim()).filter(Boolean)
                                        : [];
                                    return (
                                        <div
                                            key={project.id}
                                            className="flex items-start gap-3 rounded-xl border border-sidebar-border/40 bg-muted/30 p-3 hover:bg-muted/60 transition-colors dark:border-sidebar-border/20"
                                        >
                                            {project.image ? (
                                                <img
                                                    src={`/storage/${project.image}`}
                                                    alt={project.title}
                                                    className="size-12 rounded-lg object-cover shrink-0"
                                                />
                                            ) : (
                                                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-violet-100 dark:bg-violet-950/30">
                                                    <FolderKanban size={20} className="text-violet-500" />
                                                </div>
                                            )}
                                            <div className="min-w-0 flex-1">
                                                <p className="truncate font-medium text-foreground">{project.title}</p>
                                                <p className="mt-0.5 truncate text-xs text-muted-foreground">{project.description}</p>
                                                {techs.length > 0 && (
                                                    <div className="mt-1.5 flex flex-wrap gap-1">
                                                        {techs.slice(0, 3).map((tech) => (
                                                            <span key={tech} className="rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-medium text-violet-700 dark:bg-violet-950/40 dark:text-violet-300">
                                                                {tech}
                                                            </span>
                                                        ))}
                                                        {techs.length > 3 && (
                                                            <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">
                                                                +{techs.length - 3}
                                                            </span>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Recent Messages */}
                    <div className="flex flex-col gap-4 rounded-2xl border border-sidebar-border/50 bg-card p-5 shadow-sm dark:border-sidebar-border">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <MessageSquare size={18} className="text-rose-500" />
                                <h2 className="font-semibold text-foreground">Recent Messages</h2>
                            </div>
                            <a href="/admin/messages" className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
                                View all <ExternalLink size={12} />
                            </a>
                        </div>

                        {recentMessages.length === 0 ? (
                            <div className="flex flex-col items-center justify-center gap-2 py-10 text-muted-foreground">
                                <MessageSquare size={36} className="opacity-30" />
                                <p className="text-sm">No messages yet</p>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-3">
                                {recentMessages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className="flex flex-col gap-1 rounded-xl border border-sidebar-border/40 bg-muted/30 p-3 hover:bg-muted/60 transition-colors dark:border-sidebar-border/20"
                                    >
                                        <div className="flex items-center justify-between gap-2">
                                            <div className="flex items-center gap-2 min-w-0">
                                                <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600 dark:bg-rose-950/30 dark:text-rose-400">
                                                    <span className="text-xs font-bold">{msg.name.charAt(0).toUpperCase()}</span>
                                                </div>
                                                <span className="truncate font-medium text-sm text-foreground">{msg.name}</span>
                                            </div>
                                            <div className="flex items-center gap-1 shrink-0 text-[10px] text-muted-foreground">
                                                <Clock size={10} />
                                                {timeAgo(msg.created_at)}
                                            </div>
                                        </div>
                                        <p className="line-clamp-2 text-xs text-muted-foreground pl-9">{msg.message}</p>
                                        <div className="flex items-center gap-1 pl-9 text-[10px] text-muted-foreground">
                                            <Mail size={10} />
                                            {msg.email}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </AppLayout>
    );
}
