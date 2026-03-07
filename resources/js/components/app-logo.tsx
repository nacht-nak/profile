export default function AppLogo() {
    return (
        <div className="flex items-center gap-2">
            <img 
                src="/wel.png" 
                alt="Logo"
                className="
                    w-6 h-6
                    sm:w-7 sm:h-7
                    md:w-8 md:h-8
                    lg:w-9 lg:h-9
                    object-contain
                "
            />

            <div className="grid flex-1 text-left text-sm">
                <span className="truncate leading-tight font-semibold text-xs sm:text-sm md:text-base">
                    MyProfile
                </span>
            </div>
        </div>
    );
}