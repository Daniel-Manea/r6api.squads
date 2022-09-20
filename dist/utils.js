"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStatsCategoryName = exports.isWeaponName = exports.isWeaponTypeId = exports.isWeaponTypeIndex = exports.isOperatorName = exports.isRankIdV5 = exports.isRankIdV4 = exports.isRankIdV3 = exports.isRankIdV2 = exports.isRankIdV1 = exports.isOldSeasonId = exports.isSeasonIdExtended = exports.isBoardId = exports.isSeasonId = exports.isRegionId = exports.isPlatformAllExtended = exports.isPlatformAll = exports.isPlatform = exports.getURL = exports.groupBy = exports.getBaseMmrFromRankId = exports.getRankIdFromMmr = exports.getRanksFromSeasonId = exports.getRankIconFromRankId = exports.getRankNameFromRankId = exports.getWinRate = exports.getKD = exports.getNewsURL = exports.getCDNURL = exports.getAvatars = exports.getAvatarURL = void 0;
const constants_1 = require("./constants");
const getAvatarURL = (id, size = 256) => `${constants_1.AVATARS_URL}/${id}/default_${size === 500 ? 'tall' : `${size}_${size}`}.png`;
exports.getAvatarURL = getAvatarURL;
const getAvatars = (id) => ({
    146: (0, exports.getAvatarURL)(id, 146), 256: (0, exports.getAvatarURL)(id, 256), 500: (0, exports.getAvatarURL)(id, 500)
});
exports.getAvatars = getAvatars;
const getCDNURL = (id, format = 'png') => `${constants_1.CDN_URL}/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/${id}.${format}`;
exports.getCDNURL = getCDNURL;
const getNewsURL = (language, type, id) => type === 'news'
    ? `https://www.ubisoft.com/${language}/game/rainbow-six/siege/news-updates${id}`
    : `https://www.youtube.com/watch?v=${id}`;
exports.getNewsURL = getNewsURL;
const getKD = ({ kills, deaths }) => Number(((kills || 0) / (deaths || 1)).toFixed(2));
exports.getKD = getKD;
const getWinRate = ({ wins, losses }) => ((wins || 0) / ((wins || 0) + (losses || 0) || 1) * 100).toFixed(2) + '%';
exports.getWinRate = getWinRate;
const getRankNameFromRankId = (rankId, seasonId) => (seasonId >= 23
    ? constants_1.RANKS_V5[rankId]
    : seasonId >= 15
        ? constants_1.RANKS_V4[rankId]
        : constants_1.RANKS_V3[rankId])
    .name;
exports.getRankNameFromRankId = getRankNameFromRankId;
const getRankIconFromRankId = (rankId, seasonId) => `${constants_1.GITHUB_ASSETS_URL}/ranks/v${seasonId <= 13
    ? '3'
    : seasonId === 14
        ? [17, 18, 19, 20].includes(rankId)
            ? '3.1'
            : '3'
        : seasonId >= 15 && seasonId <= 22
            ? [1, 6, 11, 23].includes(rankId)
                ? '4'
                : [19, 20, 21, 22].includes(rankId)
                    ? '3.1'
                    : '3'
            : [22, 23, 24].includes(rankId)
                ? '5'
                : [1, 6, 11, 25].includes(rankId)
                    ? '4'
                    : [19, 20, 21].includes(rankId)
                        ? '3.1'
                        : '3'}/${encodeURIComponent((0, exports.getRankNameFromRankId)(rankId, seasonId))}.png`;
exports.getRankIconFromRankId = getRankIconFromRankId;
const getRanksFromSeasonId = (seasonId) => seasonId >= 5 && seasonId <= 14
    ? constants_1.RANKS_V3
    : seasonId >= 15 && seasonId <= 22
        ? constants_1.RANKS_V4
        : constants_1.RANKS_V5;
exports.getRanksFromSeasonId = getRanksFromSeasonId;
const getRankIdFromMmr = (seasonId, mmr, matches) => {
    var _a, _b, _c, _d;
    const ranks = (0, exports.getRanksFromSeasonId)(seasonId);
    const rankId = (_a = [...ranks].find(rank => {
        const [min, max] = rank.range;
        if (!min || !max)
            return 0;
        return min <= mmr && mmr <= max;
    })) === null || _a === void 0 ? void 0 : _a.id;
    // Requirements: ≥10 matches to get a rank, ≥100 matches to get a Champions rank
    return (matches > 10
        ? seasonId >= 15 && seasonId <= 22
            ? rankId === 23 && matches < 100 ? (_b = ranks.slice(-2)[0]) === null || _b === void 0 ? void 0 : _b.id : rankId
            : rankId === 25 && matches < 100 ? (_c = ranks.slice(-2)[0]) === null || _c === void 0 ? void 0 : _c.id : rankId
        : (_d = ranks.slice(0)[0]) === null || _d === void 0 ? void 0 : _d.id);
};
exports.getRankIdFromMmr = getRankIdFromMmr;
const getBaseMmrFromRankId = (seasonId, rankId) => {
    var _a;
    const ranks = (0, exports.getRanksFromSeasonId)(seasonId);
    return rankId === 0 ? 0 : (_a = [...ranks].find(rank => rank.id === rankId)) === null || _a === void 0 ? void 0 : _a.range[0];
};
exports.getBaseMmrFromRankId = getBaseMmrFromRankId;
const groupBy = (array, key, removeKey) => Object.fromEntries(array.reduce((acc, cur) => {
    const groupKey = cur[key];
    const { [key]: _, ...restCur } = cur;
    return acc.set(groupKey, [...(acc.get(groupKey) || []), removeKey ? restCur : cur]);
}, new Map()));
exports.groupBy = groupBy;
const getUbiServicesURL = (version, pathname, search) => `${constants_1.UBISERVICES_URL}/v${version}/${pathname}${search ? `?${search}` : ''}`;
const getUbiServicesPlatformURL = (platform, pathname, search) => `${constants_1.UBISERVICES_URL}/v1/spaces/${constants_1.SPACE_IDS[platform]}/sandboxes/${constants_1.SANDBOXES[platform]}` +
    `/${pathname}${search ? `?${search}` : ''}`;
exports.getURL = {
    LOGIN: () => getUbiServicesURL(3, 'profiles/sessions'),
    BYUSERNAME: (platform, usernames) => getUbiServicesURL(3, 'profiles', `platformType=${platform}&namesOnPlatform=${usernames}`),
    BYUSERID: (ids) => getUbiServicesURL(3, 'profiles', `userIds=${ids.join(',')}`),
    BYPROFILEID: (ids) => getUbiServicesURL(3, 'profiles', `profileIds=${ids.join(',')}`),
    BYIDONPLATFORM: (platform, ids) => getUbiServicesURL(3, 'profiles', `platformType=${platform}&idsOnPlatform=${ids.join(',')}`),
    PLAYTIME: (platform, ids) => getUbiServicesPlatformURL(platform, 'playerstats2/statistics', `populations=${ids.join(',')}&statistics=generalpvp_timeplayed,generalpve_timeplayed` +
        ',rankedpvp_timeplayed,casualpvp_timeplayed,custompvp_timeplayed'),
    PROGRESS: (platform, ids) => getUbiServicesPlatformURL(platform, 'r6playerprofile/playerprofile/progressions', `profile_ids=${ids.join(',')}`),
    RANKS: (platform, ids, season, region, board) => getUbiServicesPlatformURL(platform, 'r6karma/players', `board_id=${board}&profile_ids=${ids}&region_id=${region}&season_id=${season}`),
    STATS: (platform, ids, stats) => getUbiServicesPlatformURL(platform, 'playerstats2/statistics', `populations=${ids.join(',')}&statistics=${stats}`),
    STATUS: () => `${constants_1.STATUS_URL}/v1/instances`,
    ONLINESTATUS: (ids) => getUbiServicesURL(1, 'users/onlineStatuses', `UserIds=${ids.join(',')}`),
    APPLICATIONS: (applicationIds) => getUbiServicesURL(1, 'applications', `applicationIds=${applicationIds.join(',')}`),
    PROFILEAPPLICATIONS: (ids) => getUbiServicesURL(1, 'profiles/applications', `profileIds=${ids.join(',')}&limit=10000`),
    VALIDATEUSERNAME: (userId) => getUbiServicesURL(3, `profiles/${userId}/validateUpdate`),
    NEWS: (category, media, placement, locale, fallbackLocale, limit, skip, startIndex) => `${constants_1.UBI_URL}/api/v1/items` +
        `?categoriesFilter=${category}&mediaFilter=${media}&placementFilter=${placement}` +
        `&locale=${locale}&fallbackLocale=${fallbackLocale}` +
        `&limit=${limit}&skip=${skip}&startIndex=${startIndex}` +
        '&tags=BR-rainbow-six%20GA-siege',
    NEWSBYID: (id, locale, fallbackLocale) => `${constants_1.UBI_URL}/api/v1/items/${id}` +
        `?entryId=${id}&locale=${locale}&fallbackLocale=${fallbackLocale}` +
        '&tags=BR-rainbow-six%20GA-siege'
};
const isPlatform = (value) => constants_1.PLATFORMS.map(platform => platform.toString()).includes(value);
exports.isPlatform = isPlatform;
const isPlatformAll = (value) => constants_1.PLATFORMSALL.map(platform => platform.toString()).includes(value);
exports.isPlatformAll = isPlatformAll;
const isPlatformAllExtended = (value) => [...constants_1.PLATFORMSALL.map(platform => platform.toString()), 'all'].includes(value);
exports.isPlatformAllExtended = isPlatformAllExtended;
const isRegionId = (value) => Object.keys(constants_1.REGIONS).includes(value);
exports.isRegionId = isRegionId;
const isSeasonId = (value) => Object.keys(constants_1.SEASONS).map(season => Number(season)).includes(value);
exports.isSeasonId = isSeasonId;
const isBoardId = (value) => Object.keys(constants_1.BOARDS).includes(value);
exports.isBoardId = isBoardId;
const isSeasonIdExtended = (value) => Object.keys(constants_1.SEASONS).map(season => Number(season)).includes(value);
exports.isSeasonIdExtended = isSeasonIdExtended;
const isOldSeasonId = (value) => Object.keys(constants_1.OLD_SEASONS).map(season => Number(season)).includes(value);
exports.isOldSeasonId = isOldSeasonId;
const isRankIdV1 = (value) => Object.keys(constants_1.RANKS_V1).map(rank => Number(rank)).includes(value);
exports.isRankIdV1 = isRankIdV1;
const isRankIdV2 = (value) => Object.keys(constants_1.RANKS_V2).map(rank => Number(rank)).includes(value);
exports.isRankIdV2 = isRankIdV2;
const isRankIdV3 = (value) => Object.keys(constants_1.RANKS_V3).map(rank => Number(rank)).includes(value);
exports.isRankIdV3 = isRankIdV3;
const isRankIdV4 = (value) => Object.keys(constants_1.RANKS_V4).map(rank => Number(rank)).includes(value);
exports.isRankIdV4 = isRankIdV4;
const isRankIdV5 = (value) => Object.keys(constants_1.RANKS_V5).map(rank => Number(rank)).includes(value);
exports.isRankIdV5 = isRankIdV5;
const isOperatorName = (value) => Object.keys(constants_1.OPERATORS).includes(value);
exports.isOperatorName = isOperatorName;
const isWeaponTypeIndex = (value) => Object.keys(constants_1.WEAPONTYPES).includes(value);
exports.isWeaponTypeIndex = isWeaponTypeIndex;
const isWeaponTypeId = (value) => Object.values(constants_1.WEAPONTYPES).map(weapontype => weapontype.id).includes(value);
exports.isWeaponTypeId = isWeaponTypeId;
const isWeaponName = (value) => Object.keys(constants_1.WEAPONS).includes(value);
exports.isWeaponName = isWeaponName;
const isStatsCategoryName = (value) => Object.keys(constants_1.STATS_CATEGORIES).includes(value);
exports.isStatsCategoryName = isStatsCategoryName;
//# sourceMappingURL=utils.js.map