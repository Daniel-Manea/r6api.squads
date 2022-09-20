import { IOptionsDocs } from '../typings';
export interface INewsItems {
    id: string;
    tag?: string;
    categories: string[];
    placement?: string[] | null;
    type: string;
    date: string;
    title: string;
    abstract?: string;
    content: string;
    trackingPageValue: string;
    readTime?: string;
    authors?: null;
    featuredThumbnail?: {
        url: string | null;
        description: string | null;
    };
    thumbnail: {
        url: string | null;
        description: string | null;
    };
    description?: string;
    button: {
        commonTranslationId: string;
        buttonType: string;
        buttonUrl: string;
        trackingCategoryValue: string;
        trackingValue: string;
    };
}
export interface IApiResponse {
    total: number;
    tags: string[];
    mediaFilter: string;
    categoriesFilter: string;
    placementFilter: string[] | [];
    limit: number;
    startIndex: number | string;
    skip: number;
    items: INewsItems[];
}
export interface IOptions {
    raw?: boolean;
    category?: 'all' | 'game-updates' | 'patch-notes' | 'community' | 'store' | 'esports';
    media?: 'all' | 'news' | 'videos';
    placement?: string;
    limit?: number;
    skip?: number;
    startIndex?: number;
    locale?: string;
    fallbackLocale?: string;
}
export declare const optionsDocs: IOptionsDocs;
declare const _default: (options?: IOptions) => Promise<{
    total: number;
    limit: number;
    categories: string;
    media: string;
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
    raw?: IApiResponse | undefined;
}>;
export default _default;
//# sourceMappingURL=getNews.d.ts.map