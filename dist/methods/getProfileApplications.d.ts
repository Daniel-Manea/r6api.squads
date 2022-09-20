import { UUID, IOptionsDocs } from '../typings';
export interface IUserApplications {
    profileId: UUID;
    appId: UUID;
    firstDatePlayed: string;
    lastDatePlayed: string;
    daysPlayed: number;
    sessionsPlayed: number;
}
export interface IApiResponse {
    applications: IUserApplications[];
}
export interface IOptions {
    fetchApplications: boolean;
}
export declare const optionsDocs: IOptionsDocs;
declare const _default: (ids: UUID[], options?: IOptions) => Promise<{
    id: string;
    applications: Omit<{
        id: string;
        name: string | null;
        platform: string | null;
        profileId: string;
        sessionsPlayed: number;
        daysPlayed: number;
        lastPlayedAt: string;
        firstPlayedAt: string;
    }, "profileId">[];
}[]>;
export default _default;
//# sourceMappingURL=getProfileApplications.d.ts.map