export interface OkooConfig {
    languages: {
        [key: string]: string[];
    };
    config?: {
        baseDir?: string;
    }
    ignore?: string[];
}
