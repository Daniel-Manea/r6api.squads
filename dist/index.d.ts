import { IOptions as IFindByIdOptions } from './methods/findById';
import { IOptions as IGetRanksOptions } from './methods/getRanks';
import { IOptions as IGetStatsOptions } from './methods/getStats';
import { IOptions as IGetUserStatusOptions } from './methods/getUserStatus';
import { IOptions as IGetProfileApplicationsOptions } from './methods/getProfileApplications';
import { UUID, Platform, PlatformAll, PlatformAllExtended } from './typings';
export { default as fetch } from './fetch';
export * as typings from './typings';
export * as constants from './constants';
export * as utils from './utils';
declare type QueryUUID = UUID | UUID[];
declare type QueryString = string | string[];
export default class R6API {
    constructor(options: {
        email?: string;
        password?: string;
        ubiAppId?: string;
        authFileDirPath?: string;
        authFileName?: string;
        authFilePath?: string;
    });
    /** Find player by their username. */
    findByUsername: (platform: PlatformAll, query: QueryString) => Promise<{
        id: string;
        userId: string;
        idOnPlatform: string;
        platform: "uplay" | "psn" | "xbl" | "steam" | "epic" | "amazon";
        username: string;
        avatar: {
            146: string;
            256: string;
            500: string;
        };
    }[]>;
    /** Find player by their id. */
    findById: (platform: PlatformAllExtended, query: QueryUUID | QueryString, options?: IFindByIdOptions) => Promise<{
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
    /** Get playtime of a player. */
    getPlaytime: (platform: Platform, query: QueryUUID) => Promise<{
        id: string;
        pvp: {
            general: number;
            ranked: number;
            casual: number;
            custom: number;
            other: number;
        };
        pve: {
            general: number;
        };
    }[]>;
    /** Get level, xp and alpha pack drop chance of a player. */
    getProgression: (platform: Platform, query: QueryUUID) => Promise<{
        id: string;
        level: number;
        xp: number;
        lootboxProbability: {
            raw: number;
            percent: string;
        };
    }[]>;
    /** Get seasonal stats of a player. */
    getRanks: (platform: Platform, query: QueryUUID, options?: IGetRanksOptions) => Promise<import("./methods/getRanks").IGetRanks[]>;
    /** Get summary stats of a player. */
    getStats: (platform: Platform, query: QueryUUID, options?: IGetStatsOptions) => Promise<import("./methods/getStats").IGetStats[]>;
    /** Get Rainbow Six: Siege servers status. */
    getStatus: () => Promise<{
        appId: string;
        name: string;
        spaceId: string;
        mdm: string;
        category: "Instance";
        platform: "PC" | "PS5" | "PS4" | "XBOXONE" | "XBOX SERIES X";
        status: "Online" | "Interrupted" | "Degraded" | "Maintenance";
        maintenance: boolean | null;
        impactedFeatures: string[];
    }[]>;
    /** Get status of a player. */
    getUserStatus: (query: QueryUUID, options?: IGetUserStatusOptions) => Promise<{
        userId: string;
        status: import("./methods/getUserStatus").OnlineStatus;
        applications: {
            id: string;
            name: string | null;
            platform: string | null;
            profileId: string;
            createdAt: string;
            lastModifiedAt: string;
        }[];
        manuallySet: true | null;
    }[]>;
    /** Get information about applications of a player. */
    getProfileApplications: (query: QueryUUID, options?: IGetProfileApplicationsOptions) => Promise<{
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
    /** Get information about applications. */
    getApplications: (query: QueryUUID) => Promise<{
        id: string;
        name: string;
        platform: string;
        spaceId: string;
    }[]>;
    /** Validate username. */
    validateUsername: (username: string) => Promise<{
        valid: boolean;
        validationReports: {
            message: string;
            categories: string[] | null;
            severity: string | null;
            locale: string | null;
            errorCode: number;
            suggestions: string[] | null;
        }[];
    } | {
        valid: boolean;
        validationReports?: undefined;
    }>;
    /** Useful if you're familiar with Rainbow Six Siege's API; this method will make a request to a custom URL you would provide with the token in the header. */
    custom: <T>(url: string, params?: Partial<import("node-fetch").RequestInit> | undefined) => Promise<T>;
    /** Get Rainbow Six: Siege News. */
    getNews: (options?: import("./methods/getNews").IOptions | undefined) => Promise<{
        total: number;
        limit: number;
        categories: string;
        media: string; /** Find player by their id. */
        skip: number;
        startIndex: string | number;
        placement: [] | string[];
        tags: string[];
        items: {
            id: string;
            title: string;
            abstract: string | undefined;
            thumbnail: {
                url: string | null;
                description: string | null;
            };
            content: string;
            description: string | undefined;
            categories: string[];
            tag: string | undefined;
            placement: string[] | null | undefined;
            type: string;
            readTime: string | undefined;
            url: string;
            date: string;
        }[];
        raw?: import("./methods/getNews").IApiResponse | undefined;
    }>;
    /** Get Rainbow Six: Siege News by ID. */
    getNewsById: (id: string, options?: import("./methods/getNewsById").IOptions | undefined) => Promise<{
        message?: string | undefined;
        item?: {
            id: string;
            title: string;
            abstract: string | undefined;
            thumbnail: {
                url: string | null;
                description: string | null;
            };
            content: string;
            description: string | undefined;
            categories: string[];
            tag: string | undefined;
            placement: string[] | null | undefined;
            type: string;
            readTime: string | undefined;
            url: string;
            date: string;
        }[] | undefined;
        total: number;
        tags: string[];
        raw?: import("./methods/getNewsById").IApiResponse | undefined;
    }>;
    getAuth: () => Promise<import("./auth").IUbiAuth>;
    getTicket: () => Promise<string>;
    getToken: () => Promise<string>;
    setCredentials: (email: string, password: string) => void;
    setUbiAppId: (_ubiAppId: string) => void;
    setAuthFileDirPath: (path: string) => void;
    setAuthFileName: (name: string) => void;
    setAuthFilePath: (path: string) => void;
    getAuthFilePath: () => string;
}
//# sourceMappingURL=index.d.ts.map