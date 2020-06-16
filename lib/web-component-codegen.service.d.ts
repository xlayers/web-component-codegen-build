/// <reference types="sketchapp" />
import { ImageService, SymbolService, LayerService } from '@xlayers/sketch-lib';
import { WebCodeGenService } from '@xlayers/web-codegen';
import { WebComponentAggregatorService } from './web-component-aggregator.service';
declare type WebCodeGenOptions = any;
export declare class WebComponentCodeGenService {
    private readonly symbolService;
    private readonly imageService;
    private readonly webCodeGen;
    private readonly webComponentAggretatorService;
    private readonly layerService;
    constructor(symbolService: SymbolService, imageService: ImageService, webCodeGen: WebCodeGenService, webComponentAggretatorService: WebComponentAggregatorService, layerService: LayerService);
    compute(current: SketchMSLayer, data: SketchMSData, options?: WebCodeGenOptions): void;
    aggregate(data: SketchMSData, options?: WebCodeGenOptions): any[];
    identify(current: SketchMSLayer): boolean;
    context(current: SketchMSLayer): any;
    private visit;
    private visitContent;
    private visitLayer;
    private visitSymbolMaster;
    private compileOptions;
}
export {};
