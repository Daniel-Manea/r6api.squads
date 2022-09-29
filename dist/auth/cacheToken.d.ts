export declare const Token: () => Promise<{
    AuthToken: string;
    Expiration: number | undefined;
}>;
