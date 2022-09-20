import { Platform, UUID, WeaponTypeId, WeaponName, OperatorName, StatsCategoryName, IOptionsDocs } from '../typings';
export interface IApiResponse {
    results: {
        [id: string]: {
            [id: string]: number;
        };
    };
}
export interface IGeneral {
    bulletsFired: number;
    bulletsConnected: number;
    kills: number;
    deaths: number;
    kd: number;
    assists: number;
    headshots: number;
    meleeKills: number;
    penetrationKills: number;
    blindKills: number;
    revives: number;
    wins: number;
    losses: number;
    winRate: string;
    matches: number;
    playtime: number;
    gadgetsDestroyed: number;
    rappelBreaches: number;
    barricadesDeployed: number;
    reinforcementsDeployed: number;
    suicides: number;
    distanceTravelled: number;
    xp: number;
}
export interface IGeneralpvp extends IGeneral {
    dbno: number;
    dbnoAssists: number;
}
export interface IQueuepvpbase {
    name: string;
    kills: number;
    deaths: number;
    kd: number;
    wins: number;
    losses: number;
    winRate: string;
    matches: number;
    playtime: number;
}
export interface IQueuespvp {
    ranked: IQueuepvpbase;
    casual: IQueuepvpbase;
    custom: {
        name: string;
        playtime: number;
    };
}
export interface IQueuepvebase {
    name: string;
    bestScore: number;
}
export interface IQueuespve {
    local: {
        normal: IQueuepvebase;
        hard: IQueuepvebase;
        realistic: IQueuepvebase;
    };
    coop: {
        normal: IQueuepvebase;
        hard: IQueuepvebase;
        realistic: IQueuepvebase;
    };
}
export interface IModepvpbase {
    name: string;
    wins: number;
    losses: number;
    winRate: string;
    matches: number;
    bestScore: number;
    playtime: number;
}
export interface IModepvpsecurearea extends IModepvpbase {
    secured: number;
    defended: number;
    contested: number;
}
export interface IModepvphostage extends IModepvpbase {
    hostageRescued: number;
    hostageDefended: number;
}
export interface IModespvp {
    bomb: IModepvpbase;
    secureArea: IModepvpsecurearea;
    hostage: IModepvphostage;
}
export interface IModespvebase {
    name: string;
    wins: number;
    losses: number;
    winRate: string;
    matches: number;
    bestScore: number;
}
export interface IModespve {
    disarmBomb: IModespvebase;
    elimination: IModespvebase;
    protectHostage: IModespvebase;
    extractHostage: IModespvebase;
}
export interface IOperatorStats {
    name: string;
    role: string;
    unit: string;
    icon: string;
    kills: number;
    deaths: number;
    kd: number;
    wins: number;
    losses: number;
    winRate: string;
    matches: number;
    headshots: number;
    meleeKills: number;
    xp: number;
    playtime: number;
    uniqueAbility: {
        name: string;
        icon: string;
        stats: {
            name: string;
            value: number;
        }[] | null;
    } | null;
}
export interface IOperatorStatspvp extends IOperatorStats {
    dbno: number;
}
export interface IWeaponStats {
    name: string;
    icon: string;
    kills: number;
    deaths: number;
    kd: number;
    headshots: number;
    bulletsFired: number;
    bulletsConnected: number;
    timesChosen: number;
}
export interface IWeaponCategory {
    general: {
        name: string;
        kills: number;
        deaths: number;
        kd: number;
        headshots: number;
        bulletsFired: number;
        bulletsConnected: number;
        timesChosen: number;
    };
    list: Record<WeaponName, IWeaponStats>;
}
export interface IGetStats {
    id: UUID;
    raw?: any;
    pvp: {
        general: IGeneralpvp;
        operators: Record<OperatorName, IOperatorStatspvp>;
        weapons: Record<WeaponTypeId, IWeaponCategory>;
        queues: IQueuespvp;
        modes: IModespvp;
    };
    pve: {
        general: IGeneral;
        operators: Record<OperatorName, IOperatorStats>;
        weapons: Record<WeaponTypeId, IWeaponCategory>;
        queues: IQueuespve;
        modes: IModespve;
    };
}
export interface IOptions {
    raw?: boolean;
    categories?: StatsCategoryName[];
}
export declare const optionsDocs: IOptionsDocs;
declare const _default: (platform: Platform, ids: UUID[], options?: IOptions) => Promise<IGetStats[]>;
export default _default;
//# sourceMappingURL=getStats.d.ts.map