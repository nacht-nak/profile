import { Moon, Sun } from 'lucide-react';
import type { HTMLAttributes } from 'react';
import { useAppearance } from '@/hooks/use-appearance';
import { cn } from '@/lib/utils';

export default function AppearanceToggleTab({
    className = '',
    ...props
}: HTMLAttributes<HTMLButtonElement>) {
    const { appearance, updateAppearance } = useAppearance();

    const toggleTheme = () => {
        updateAppearance(appearance === 'dark' ? 'light' : 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                'flex items-center justify-center rounded-full p-2 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#ff7700]',
                'bg-neutral-100 text-neutral-600 hover:bg-neutral-200/80',
                'dark:bg-[#1e293b]/50 dark:text-neutral-300 dark:hover:bg-[#1e293b]',
                className
            )}
            title="Toggle Theme"
            aria-label="Toggle Theme"
            {...props}
        >
            {appearance === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
                <Moon className="h-5 w-5 text-[#011030]" />
            )}
        </button>
    );
}
