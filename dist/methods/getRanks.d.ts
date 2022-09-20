import { Platform, UUID, SeasonId, SeasonIdExtended, RankIdV3, RankIdV4, RankIdV5, RegionId, BoardId, IOptionsDocs } from '../typings';
export interface IRank {
    max_mmr: number;
    skill_mean: number;
    deaths: number;
    profile_id: string;
    next_rank_mmr: number;
    rank: RankIdV3 | RankIdV4 | RankIdV5;
    max_rank: RankIdV3 | RankIdV4 | RankIdV5;
    board_id: BoardId;
    skill_stdev: number;
    kills: number;
    last_match_skill_stdev_change: number;
    past_seasons_wins: number;
    update_time: string;
    last_match_mmr_change: number;
    abandons: number;
    season: SeasonId;
    past_seasons_losses: number;
    top_rank_position: number;
    last_match_skill_mean_change: number;
    mmr: number;
    previous_rank_mmr: number;
    last_match_result: 0 | 1 | 2 | 3;
    past_seasons_abandons: number;
    wins: number;
    region: RegionId;
    losses: number;
}
export interface IApiResponse {
    players: Record<string, IRank>;
}
export declare type IBoards = Record<BoardId, {
    boardId: BoardId;
    boardName: string;
    skillMean: number;
    skillStdev: number;
    current: {
        id: number;
        name: string;
        mmr: number;
        icon: string;
    };
    max: {
        id: number;
        name: string;
        mmr: number;
        icon: string;
    };
    lastMatch: {
        result: string;
        mmrChange: number;
        skillMeanChange: number;
        skillStdevChange: number;
    };
    pastSeasons: {
        wins: number;
        losses: number;
        winRate: string;
        matches: number;
        abandons: number;
    };
    previousMmr: number;
    nextMmr: number;
    topRankPosition: number;
    kills: number;
    deaths: number;
    kd: number;
    wins: number;
    losses: number;
    winRate: string;
    matches: number;
    abandons: number;
    updateTime: string;
}>;
export declare type IRegions = Record<RegionId, {
    regionId: RegionId;
    regionName: string;
    boards: IBoards;
}>;
export declare type ISeasons = Record<SeasonId, {
    seasonId: SeasonId;
    seasonName?: string;
    seasonColor?: `#${string}`;
    seasonImage?: string;
    seasonReleaseDate?: string;
    regions: IRegions;
}>;
export interface IGetRanks {
    id: UUID;
    seasons: ISeasons;
}
export interface IOptions {
    seasonIds?: SeasonIdExtended | SeasonIdExtended[] | 'all';
    regionIds?: RegionId | RegionId[] | 'all';
    boardIds?: BoardId | BoardId[] | 'all';
}
export declare const optionsDocs: IOptionsDocs;
declare const _default: (platform: Platform, ids: UUID[], options?: IOptions) => Promise<IGetRanks[]>;
export default _default;
//# sourceMappingURL=getRanks.d.ts.map