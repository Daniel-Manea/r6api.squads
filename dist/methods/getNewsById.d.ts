import { IOptionsDocs } from '../typings';
export interface INewsItem {
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
    index: number;
    prevNode: {
        buttonType: string;
        trackingLocation: string;
        trackingCategoryValue: string;
        trackingValue: string;
        buttonUrl: string;
    };
    nextNode: {
        buttonType: string;
        trackingLocation: string;
        trackingCategoryValue: string;
        trackingValue: string;
        buttonUrl: string;
    };
}
export interface IApiResponse {
    total: number;
    tags: string[];
    items?: INewsItem[];
    message?: string;
}
export interface IOptions {
    raw?: boolean;
    locale?: string;
    fallbackLocale?: string;
}
export declare const optionsDocs: IOptionsDocs;
declare const _default: (id: string, options?: IOptions) => Promise<{
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
    raw?: IApiResponse | undefined;
}>;
export default _default;
//# sourceMappingURL=getNewsById.d.ts.map