import { UUID, Platform, PlatformAll, PlatformAllExtended, RegionId, SeasonId, SeasonIdExtended, RankIdV3, RankIdV4, RankIdV5, BoardId } from './typings';
export declare const getAvatarURL: (id: UUID, size?: number) => string;
export declare const getAvatars: (id: UUID) => {
    146: string;
    256: string;
    500: string;
};
export declare const getCDNURL: (id: UUID, format?: string) => string;
export declare const getNewsURL: (language: string, type: string, id: string) => string;
export declare const getKD: ({ kills, deaths }: {
    kills?: number | undefined;
    deaths?: number | undefined;
}) => number;
export declare const getWinRate: ({ wins, losses }: {
    wins?: number | undefined;
    losses?: number | undefined;
}) => string;
export declare const getRankNameFromRankId: (rankId: RankIdV3 | RankIdV4 | RankIdV5, seasonId: SeasonId) => "Unranked" | "Copper 1" | "Copper 2" | "Copper 3" | "Copper 4" | "Bronze 1" | "Bronze 2" | "Bronze 3" | "Bronze 4" | "Silver 1" | "Silver 2" | "Silver 3" | "Silver 4" | "Gold 1" | "Gold 2" | "Gold 3" | "Gold 4" | "Platinum 1" | "Platinum 2" | "Platinum 3" | "Diamond" | "Copper 5" | "Bronze 5" | "Silver 5" | "Champions" | "Diamond 3" | "Diamond 2" | "Diamond 1";
export declare const getRankIconFromRankId: (rankId: RankIdV3 | RankIdV4 | RankIdV5, seasonId: SeasonId) => string;
export declare const getRanksFromSeasonId: (seasonId: SeasonId) => readonly [{
    readonly name: "Unranked";
    readonly id: 0;
    readonly range: readonly [null, null];
}, {
    readonly name: "Copper 4";
    readonly id: 1;
    readonly range: readonly [number, 1399];
}, {
    readonly name: "Copper 3";
    readonly id: 2;
    readonly range: readonly [1400, 1499];
}, {
    readonly name: "Copper 2";
    readonly id: 3;
    readonly range: readonly [1500, 1599];
}, {
    readonly name: "Copper 1";
    readonly id: 4;
    readonly range: readonly [1600, 1699];
}, {
    readonly name: "Bronze 4";
    readonly id: 5;
    readonly range: readonly [1700, 1799];
}, {
    readonly name: "Bronze 3";
    readonly id: 6;
    readonly range: readonly [1800, 1899];
}, {
    readonly name: "Bronze 2";
    readonly id: 7;
    readonly range: readonly [1900, 1999];
}, {
    readonly name: "Bronze 1";
    readonly id: 8;
    readonly range: readonly [2000, 2099];
}, {
    readonly name: "Silver 4";
    readonly id: 9;
    readonly range: readonly [2100, 2199];
}, {
    readonly name: "Silver 3";
    readonly id: 10;
    readonly range: readonly [2200, 2299];
}, {
    readonly name: "Silver 2";
    readonly id: 11;
    readonly range: readonly [2300, 2399];
}, {
    readonly name: "Silver 1";
    readonly id: 12;
    readonly range: readonly [2400, 2499];
}, {
    readonly name: "Gold 4";
    readonly id: 13;
    readonly range: readonly [2500, 2699];
}, {
    readonly name: "Gold 3";
    readonly id: 14;
    readonly range: readonly [2700, 2899];
}, {
    readonly name: "Gold 2";
    readonly id: 15;
    readonly range: readonly [2900, 3099];
}, {
    readonly name: "Gold 1";
    readonly id: 16;
    readonly range: readonly [3100, 3299];
}, {
    readonly name: "Platinum 3";
    readonly id: 17;
    readonly range: readonly [3300, 3699];
}, {
    readonly name: "Platinum 2";
    readonly id: 18;
    readonly range: readonly [3700, 4099];
}, {
    readonly name: "Platinum 1";
    readonly id: 19;
    readonly range: readonly [4100, 4499];
}, {
    readonly name: "Diamond";
    readonly id: 20;
    readonly range: readonly [4500, number];
}] | readonly [{
    readonly name: "Unranked";
    readonly id: 0;
    readonly range: readonly [null, null];
}, {
    readonly name: "Copper 5";
    readonly id: 1;
    readonly range: readonly [number, 1199];
}, {
    readonly name: "Copper 4";
    readonly id: 2;
    readonly range: readonly [1200, 1299];
}, {
    readonly name: "Copper 3";
    readonly id: 3;
    readonly range: readonly [1300, 1399];
}, {
    readonly name: "Copper 2";
    readonly id: 4;
    readonly range: readonly [1400, 1499];
}, {
    readonly name: "Copper 1";
    readonly id: 5;
    readonly range: readonly [1500, 1599];
}, {
    readonly name: "Bronze 5";
    readonly id: 6;
    readonly range: readonly [1600, 1699];
}, {
    readonly name: "Bronze 4";
    readonly id: 7;
    readonly range: readonly [1700, 1799];
}, {
    readonly name: "Bronze 3";
    readonly id: 8;
    readonly range: readonly [1800, 1899];
}, {
    readonly name: "Bronze 2";
    readonly id: 9;
    readonly range: readonly [1900, 1999];
}, {
    readonly name: "Bronze 1";
    readonly id: 10;
    readonly range: readonly [2000, 2099];
}, {
    readonly name: "Silver 5";
    readonly id: 11;
    readonly range: readonly [2100, 2199];
}, {
    readonly name: "Silver 4";
    readonly id: 12;
    readonly range: readonly [2200, 2299];
}, {
    readonly name: "Silver 3";
    readonly id: 13;
    readonly range: readonly [2300, 2399];
}, {
    readonly name: "Silver 2";
    readonly id: 14;
    readonly range: readonly [2400, 2499];
}, {
    readonly name: "Silver 1";
    readonly id: 15;
    readonly range: readonly [2500, 2599];
}, {
    readonly name: "Gold 3";
    readonly id: 16;
    readonly range: readonly [2600, 2799];
}, {
    readonly name: "Gold 2";
    readonly id: 17;
    readonly range: readonly [2800, 2999];
}, {
    readonly name: "Gold 1";
    readonly id: 18;
    readonly range: readonly [3000, 3199];
}, {
    readonly name: "Platinum 3";
    readonly id: 19;
    readonly range: readonly [3200, 3599];
}, {
    readonly name: "Platinum 2";
    readonly id: 20;
    readonly range: readonly [3600, 3999];
}, {
    readonly name: "Platinum 1";
    readonly id: 21;
    readonly range: readonly [4000, 4399];
}, {
    readonly name: "Diamond";
    readonly id: 22;
    readonly range: readonly [4400, 4999];
}, {
    readonly name: "Champions";
    readonly id: 23;
    readonly range: readonly [5000, number];
}] | readonly [{
    readonly name: "Unranked";
    readonly id: 0;
    readonly range: readonly [null, null];
}, {
    readonly name: "Copper 5";
    readonly id: 1;
    readonly range: readonly [number, 1199];
}, {
    readonly name: "Copper 4";
    readonly id: 2;
    readonly range: readonly [1200, 1299];
}, {
    readonly name: "Copper 3";
    readonly id: 3;
    readonly range: readonly [1300, 1399];
}, {
    readonly name: "Copper 2";
    readonly id: 4;
    readonly range: readonly [1400, 1499];
}, {
    readonly name: "Copper 1";
    readonly id: 5;
    readonly range: readonly [1500, 1599];
}, {
    readonly name: "Bronze 5";
    readonly id: 6;
    readonly range: readonly [1600, 1699];
}, {
    readonly name: "Bronze 4";
    readonly id: 7;
    readonly range: readonly [1700, 1799];
}, {
    readonly name: "Bronze 3";
    readonly id: 8;
    readonly range: readonly [1800, 1899];
}, {
    readonly name: "Bronze 2";
    readonly id: 9;
    readonly range: readonly [1900, 1999];
}, {
    readonly name: "Bronze 1";
    readonly id: 10;
    readonly range: readonly [2000, 2099];
}, {
    readonly name: "Silver 5";
    readonly id: 11;
    readonly range: readonly [2100, 2199];
}, {
    readonly name: "Silver 4";
    readonly id: 12;
    readonly range: readonly [2200, 2299];
}, {
    readonly name: "Silver 3";
    readonly id: 13;
    readonly range: readonly [2300, 2399];
}, {
    readonly name: "Silver 2";
    readonly id: 14;
    readonly range: readonly [2400, 2499];
}, {
    readonly name: "Silver 1";
    readonly id: 15;
    readonly range: readonly [2500, 2599];
}, {
    readonly name: "Gold 3";
    readonly id: 16;
    readonly range: readonly [2600, 2799];
}, {
    readonly name: "Gold 2";
    readonly id: 17;
    readonly range: readonly [2800, 2999];
}, {
    readonly name: "Gold 1";
    readonly id: 18;
    readonly range: readonly [3000, 3199];
}, {
    readonly name: "Platinum 3";
    readonly id: 19;
    readonly range: readonly [3200, 3499];
}, {
    readonly name: "Platinum 2";
    readonly id: 20;
    readonly range: readonly [3500, 3799];
}, {
    readonly name: "Platinum 1";
    readonly id: 21;
    readonly range: readonly [3800, 4099];
}, {
    readonly name: "Diamond 3";
    readonly id: 22;
    readonly range: readonly [4100, 4399];
}, {
    readonly name: "Diamond 2";
    readonly id: 23;
    readonly range: readonly [4400, 4699];
}, {
    readonly name: "Diamond 1";
    readonly id: 24;
    readonly range: readonly [4700, 4999];
}, {
    readonly name: "Champions";
    readonly id: 25;
    readonly range: readonly [5000, number];
}];
export declare const getRankIdFromMmr: (seasonId: SeasonId, mmr: number, matches: number) => 0 | 2 | 3 | 6 | 12 | 15 | 16 | 1 | 4 | 5 | 7 | 8 | 9 | 10 | 11 | 13 | 14 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25;
export declare const getBaseMmrFromRankId: (seasonId: SeasonId, rankId: RankIdV3 | RankIdV4 | RankIdV5) => number;
export declare const groupBy: <T, K extends keyof T, B extends boolean>(array: T[], key: K, removeKey: B) => B extends true ? Record<string, Omit<T, K>[]> : Record<string, T[]>;
export declare const getURL: {
    LOGIN: () => string;
    BYUSERNAME: (platform: PlatformAll, usernames: string[]) => string;
    BYUSERID: (ids: UUID[]) => string;
    BYPROFILEID: (ids: UUID[]) => string;
    BYIDONPLATFORM: (platform: PlatformAll, ids: UUID[]) => string;
    PLAYTIME: (platform: Platform, ids: UUID[]) => string;
    PROGRESS: (platform: Platform, ids: UUID[]) => string;
    RANKS: (platform: Platform, ids: UUID[], season: SeasonIdExtended, region: RegionId, board: BoardId) => string;
    STATS: (platform: Platform, ids: UUID[], stats: string) => string;
    STATUS: () => string;
    ONLINESTATUS: (ids: UUID[]) => string;
    APPLICATIONS: (applicationIds: UUID[]) => string;
    PROFILEAPPLICATIONS: (ids: UUID[]) => string;
    VALIDATEUSERNAME: (userId: UUID) => string;
    NEWS: (category: string, media: string, placement: string, locale: string, fallbackLocale: string, limit: number, skip: number, startIndex: number | null) => string;
    NEWSBYID: (id: string, locale: string, fallbackLocale: string) => string;
};
export declare const isPlatform: (value: string) => value is "uplay" | "psn" | "xbl";
export declare const isPlatformAll: (value: string) => value is "uplay" | "psn" | "xbl" | "steam" | "epic" | "amazon";
export declare const isPlatformAllExtended: (value: string) => value is PlatformAllExtended;
export declare const isRegionId: (value: string) => value is "emea" | "ncsa" | "apac";
export declare const isSeasonId: (value: number) => value is 6 | 12 | 15 | 16 | 7 | 8 | 9 | 10 | 11 | 13 | 14 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27;
export declare const isBoardId: (value: string) => value is "pvp_ranked" | "pvp_newcomer" | "pvp_casual" | "pvp_event";
export declare const isSeasonIdExtended: (value: number) => value is SeasonIdExtended;
export declare const isOldSeasonId: (value: number) => value is 2 | 3 | 1 | 4 | 5;
export declare const isRankIdV1: (value: number) => value is 0 | 2 | 3 | 6 | 12 | 15 | 16 | 1 | 4 | 5 | 7 | 8 | 9 | 10 | 11 | 13 | 14 | 17 | 18 | 19 | 20;
export declare const isRankIdV2: (value: number) => value is 0 | 2 | 3 | 6 | 12 | 15 | 16 | 1 | 4 | 5 | 7 | 8 | 9 | 10 | 11 | 13 | 14 | 17 | 18 | 19 | 20;
export declare const isRankIdV3: (value: number) => value is 0 | 2 | 3 | 6 | 12 | 15 | 16 | 1 | 4 | 5 | 7 | 8 | 9 | 10 | 11 | 13 | 14 | 17 | 18 | 19 | 20;
export declare const isRankIdV4: (value: number) => value is 0 | 2 | 3 | 6 | 12 | 15 | 16 | 1 | 4 | 5 | 7 | 8 | 9 | 10 | 11 | 13 | 14 | 17 | 18 | 19 | 20 | 21 | 22 | 23;
export declare const isRankIdV5: (value: number) => value is 0 | 2 | 3 | 6 | 12 | 15 | 16 | 1 | 4 | 5 | 7 | 8 | 9 | 10 | 11 | 13 | 14 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25;
export declare const isOperatorName: (value: string) => value is "recruit_sas" | "recruit_fbi" | "recruit_gign" | "recruit_spetsnaz" | "recruit_gsg9" | "smoke" | "mute" | "sledge" | "thatcher" | "castle" | "pulse" | "ash" | "thermite" | "doc" | "rook" | "twitch" | "montagne" | "kapkan" | "tachanka" | "glaz" | "fuze" | "jager" | "bandit" | "blitz" | "iq" | "frost" | "buck" | "valkyrie" | "blackbeard" | "caveira" | "capitao" | "echo" | "hibana" | "mira" | "jackal" | "lesion" | "ying" | "ela" | "zofia" | "vigil" | "dokkaebi" | "lion" | "finka" | "maestro" | "alibi" | "clash" | "maverick" | "kaid" | "nomad" | "mozzie" | "gridlock" | "warden" | "nokk" | "goyo" | "amaru" | "wamai" | "kali" | "oryx" | "iana" | "melusi" | "ace" | "zero" | "aruni" | "flores" | "thunderbird" | "osa" | "thorn" | "azami" | "sens" | "grim";
export declare const isWeaponTypeIndex: (value: string) => value is "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "B";
export declare const isWeaponTypeId: (value: string) => value is "assault" | "smg" | "lmg" | "marksman" | "pistol" | "shotgun" | "mp" | "shield" | "launcher" | "utility";
export declare const isWeaponName: (value: string) => value is "417" | "l85a2" | "ar33" | "g36c" | "r4-c" | "556xi" | "f2" | "ak-12" | "aug_a2" | "552_commando" | "416-c_carbine" | "c8-sfw" | "mk17_cqb" | "para-308" | "type-89" | "c7e" | "m762" | "v308" | "spear_.308" | "ar-15.50" | "m4" | "ak-74m" | "arx200" | "f90" | "commando_9" | "sc3000k" | "fmg-9" | "mp5k" | "ump45" | "mp5" | "p90" | "9x19vsn" | "mp7" | "9mm_c1" | "mpx" | "m12" | "mp5sd" | "pdw9" | "vector_.45_acp" | "t-5_smg" | "scorpion_evo_3_a1" | "k1a" | "mx4_storm" | "aug_a3" | "p10_roni" | "6p41" | "g8a1" | "m249" | "t-95_lsw" | "lmg-e" | "alda_5.56" | "m249_saw" | "dp27" | "ots-03" | "camrs" | "sr-25" | "mk_14_ebr" | "csrx_300" | "p226_mk_25" | "m45_meusoc" | "5.7_usg" | "p9" | "lfp586" | "gsh-18" | "pmm" | "p12" | "mk1_9mm" | "d-50" | "prb92" | "p229" | "usp40" | "q-929" | "rg15" | "bailiff_410" | "keratos_.357" | "1911_tacops" | "p-10c" | ".44_mag_semi-auto" | "sdp_9mm" | "m590a1" | "m1014" | "sg-cqb" | "sasg-12" | "m870" | "super_90" | "spas-12" | "spas-15" | "supernova" | "ita12l" | "ita12s" | "six12" | "six12_sd" | "fo-12" | "bosg.12.2" | "acs12" | "tcsg12" | "super_shorty" | "smg-11" | "bearing_9" | "c75_auto" | "smg-12" | "spsmg9";
export declare const isStatsCategoryName: (value: string) => value is "pvp" | "pve" | "general" | "generalpvp" | "generalpve" | "operators" | "operatorspvp" | "operatorspve" | "weapons" | "weaponspvp" | "weaponspve" | "queues" | "queuespvp" | "queuespve" | "modes" | "modespvp" | "modespve" | "ranked" | "casual" | "custom" | "local" | "coop" | "normal" | "hard" | "realistic" | "normallocal" | "hardlocal" | "realisticlocal" | "normalcoop" | "hardcoop" | "realisticcoop" | "bomb" | "secureArea" | "hostage" | "elimination" | "disarmBomb" | "protectHostage" | "extractHostage";
//# sourceMappingURL=utils.d.ts.map