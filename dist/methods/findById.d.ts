import { PlatformAllExtended, UUID, IOptionsDocs } from '../typings';
export interface IProfile {
    profileId: UUID;
    userId: UUID;
    idOnPlatform: UUID | string;
    platformType: PlatformAllExtended;
    nameOnPlatform: string;
}
export interface IApiResponse {
    profiles: IProfile[];
}
export interface IOptions {
    isUserId?: boolean;
}
export declare const optionsDocs: IOptionsDocs;
declare const _default: (platform: PlatformAllExtended, ids: UUID[] | string[], options?: IOptions) => Promise<{
    id: string;
    userId: string;
    idOnPlatform: string;
    platform: PlatformAllExtended;
    username: string;
    avatar: {
        146: string;
        256: string;
        500: string;
    };
}[]>;
export default _default;
//# sourceMappingURL=findById.d.ts.map