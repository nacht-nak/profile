export type User = {
    id: number;
    name: string;
    username?: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    phone?: string;
    profile_picture?: string;
    is_admin?: boolean;
    two_factor_enabled?: boolean;
    created_at: string;
    updated_at: string;
};

export type Auth = {
    user: User;
};

export type TwoFactorSetupData = {
    svg: string;
    url: string;
};

export type TwoFactorSecretKey = {
    secretKey: string;
};
