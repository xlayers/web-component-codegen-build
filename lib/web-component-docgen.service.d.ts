/// <reference types="sketchapp" />
export declare class WebComponentDocGenService {
    aggregate(data: SketchMSData): {
        uri: string;
        value: string;
        language: string;
        kind: string;
    }[];
    private renderReadme;
}
