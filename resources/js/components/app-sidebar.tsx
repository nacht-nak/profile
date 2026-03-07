import { Link, usePage } from '@inertiajs/react';
import { BookOpen, FolderGit2, LayoutGrid, Users, Info, Cpu, Trophy, Briefcase, Mail } from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import type { NavItem, User } from '@/types';



const adminNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },

    {
        title: 'Projects',
        href: '/admin/projects',
        icon: FolderGit2,
    },
    {
        title: 'Skills',
        href: '/admin/skills',
        icon: Cpu,
    },
    {
        title: 'Certifications',
        href: '/admin/certifications',
        icon: Trophy,
    },

    {
        title: 'About Me',
        href: '/admin/about',
        icon: Info,
    },
    {
        title: 'Messages',
        href: '/admin/messages',
        icon: Mail,
    },
];

const footerNavItems: NavItem[] = [

];

export function AppSidebar() {
    const { auth } = usePage().props as { auth: { user: User } };

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                {auth.user?.is_admin ? (
                    <div className="mt-2 mb-2 px-4 text-xs font-semibold uppercase text-muted-foreground">Dashboard</div>
                ) : null}
                {auth.user?.is_admin ? <NavMain items={adminNavItems} /> : null}
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
