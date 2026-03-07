import type { SVGAttributes } from 'react';

interface BrandIconProps extends SVGAttributes<SVGElement> {
    size?: number | string;
}

export const LaravelIcon = ({ size = 24, className, ...props }: BrandIconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
    >
        <path d="M23.351 19.34L13.1.52C12.75 0 12.1-.2 11.55.12L1.13 6.09C.58 6.41.25 7 .25 7.63v12.06c0 .64.33 1.23.88 1.55l10.42 5.97c.55.32 1.2.32 1.75 0l10.42-5.97c.55-.32.88-.91.88-1.55V7.63c0-.64-.33-1.23-.88-1.55l-1.42-.81c-.55-.32-1.2-.32-1.75 0l-1.42.81c-.55.32-.88.91-.88 1.55V19.34c0 .64.33 1.23.88 1.55l1.42.81c.55.32 1.2.32 1.75 0l1.42-.81c.55-.32.88-.91.88-1.55zM12 21.05V3.12l8.8 5.04v5.33l-2.6-1.49v-3.84c0-.64-.33-1.23-.88-1.55l-1.42-.81c-.55-.32-1.2-.32-1.75 0l-1.42.81c-.55.32-.88.91-.88 1.55v11.16c0 .64.33 1.23.88 1.55l1.42.81c.55.32 1.2.32 1.75 0l1.42-.81c.55-.32.88-.91.88-1.55v-3.84l2.6 1.49v5.33l-8.8 5.04z" />
    </svg>
);

export const ReactIcon = ({ size = 24, className, ...props }: BrandIconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="-11.5 -10.23174 23 20.46348"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
    >
        <circle cx="0" cy="0" r="2.05" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
    </svg>
);

export const PhpIcon = ({ size = 24, className, ...props }: BrandIconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
    >
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.118 7.647h1.529l-1.176 8.706h-1.529L17.118 7.647zm-5.118 0h1.529l-.588 4.353h1.176l.588-4.353h1.529l-.588 4.353c0 .883-.717 1.6-1.6 1.6H13.6l.588-4.353h-1.529l-.588 4.353h1.529l-1.176 8.706H10.8l1.176-8.706h-1.529L12 7.647zM6.882 7.647h1.529L7.235 16.353H5.706L6.882 7.647z" />
    </svg>
);

export const JavascriptIcon = ({ size = 24, className, ...props }: BrandIconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
    >
        <path d="M0 0h24v24H0V0zm22.034 18.268c-.153-1.19-.714-2.143-2.176-2.738-1.464-.595-3.047-.119-3.476 1.13-.153.476-.06.774.153.952.413.357 1.144.254 1.765.179.774-.095 1.488-.024 1.555.774.067.857-.655 1.365-1.555 1.365-.774 0-1.488-.333-1.667-1.071l-1.936.953c.412 1.452 1.664 2.119 3.601 2.119 2.508 0 3.733-1.167 3.733-3.671zm-9.043.61c.068-.857-.655-1.365-1.555-1.365-.774 0-1.488.333-1.667 1.071l-1.936.953c.412 1.452 1.664 2.119 3.601 2.119 2.508 0 3.733-1.167 3.733-3.671 0-1.19-.714-2.143-2.176-2.738-1.464-.595-3.047-.119-3.476 1.13-.153.476-.06.774.153.952.413.357 1.144.254 1.765.179.774-.095 1.488-.024 1.555.774z" />
    </svg>
);

export const TailwindIcon = ({ size = 24, className, ...props }: BrandIconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
    >
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C13.672,10.63,14.733,11.7,17.2,11.7c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C15.529,5.87,14.469,4.8,12.001,4.8z M6.001,11.7c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C7.672,17.53,8.733,18.6,11.2,18.6c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C9.529,12.77,8.469,11.7,6.001,11.7z" />
    </svg>
);

export const NodeIcon = ({ size = 24, className, ...props }: BrandIconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
    >
        <path d="M11.96 0L1.4 6.08v11.83l10.56 6.09 10.56-6.09V6.08L11.96 0zM10.8 17.15c-.2 0-.37-.08-.47-.24l-3.26-4.9c-.19-.28-.12-.66.16-.85.28-.19.66-.12.85.16l2.76 4.15V7.47c0-.33.27-.61.6-.61s.61.27.61.6v9.08c0,.33-.27.61-.61.61h-.64zm5.08-1.92l-3.21 1.85c-.29.17-.66.07-.82-.22-.17-.29-.07-.66.22-.82l2.61-1.5V9.45l-2.61-1.5c-.29-.17-.39-.54-.22-.82.17-.29.54-.39.82-.22l3.21 1.85c.16.09.26.26.26.44v5.33c0 .18-.1.35-.26.44z" />
    </svg>
);

export const VueIcon = ({ size = 24, className, ...props }: BrandIconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
    >
        <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.95,5.07,3H9.94L12,6.58,14.06,3h4.87Z" />
    </svg>
);
