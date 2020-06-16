import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { __assign } from 'tslib';
import { FormatService, SymbolService, ImageService, LayerService } from '@xlayers/sketch-lib';
import { WebCodeGenService, WebCodeGenModule } from '@xlayers/web-codegen';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var WebComponentDocGenService = /** @class */ (function () {
    function WebComponentDocGenService() {
    }
    /**
     * @param {?} data
     * @return {?}
     */
    WebComponentDocGenService.prototype.aggregate = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return [
            {
                uri: 'README.md',
                value: this.renderReadme(data.meta.app),
                language: 'markdown',
                kind: 'text'
            }
        ];
    };
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    WebComponentDocGenService.prototype.renderReadme = /**
     * @private
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return "## How to use the " + name + " Web Components\n\nThis implementation export the assets as single file web component that can be consumed in the following ways:\n\n```html\n  // index.html\n  <script src=\"./my-component.js\"></script>\n  <my-component></my-component>\n```\n\n> Needed polyfills are imported inside the my-component, in most cases you can import it globally or use different strategy. For example:\n\n```html\n  //index.html\n  <!-- Load polyfills; note that \"loader\" will load these async -->\n  <script src=\"node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js\" defer></script>\n\n  <!-- Load a custom element definitions in 'waitFor' and return a promise -->\n  <script type=\"module\">\n    WebComponents.waitFor(() => {\n    // You should remove redundant polyfills import from my-component\n    return import('./my-component.js');\n    });\n  </script>\n\n  <!-- Use the custom element -->\n  <my-component></my-component>\n```\n\n>  For more information about [web components and browser support](https://github.com/WebComponents/webcomponentsjs#browser-support)";
    };
    WebComponentDocGenService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ WebComponentDocGenService.ngInjectableDef = ɵɵdefineInjectable({ factory: function WebComponentDocGenService_Factory() { return new WebComponentDocGenService(); }, token: WebComponentDocGenService, providedIn: "root" });
    return WebComponentDocGenService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var WebComponentAggregatorService = /** @class */ (function () {
    function WebComponentAggregatorService(formatService, webCodeGenService) {
        this.formatService = formatService;
        this.webCodeGenService = webCodeGenService;
    }
    /**
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    WebComponentAggregatorService.prototype.aggregate = /**
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (current, data, options) {
        /** @type {?} */
        var fileName = this.formatService.normalizeName(current.name);
        /** @type {?} */
        var files = this.webCodeGenService.aggregate(current, data, options);
        /** @type {?} */
        var html = files.find((/**
         * @param {?} file
         * @return {?}
         */
        function (file) { return file.language === 'html'; }));
        /** @type {?} */
        var css = files.find((/**
         * @param {?} file
         * @return {?}
         */
        function (file) { return file.language === 'css'; }));
        return [
            {
                kind: 'wc',
                value: this.renderComponent(current.name, html.value, css.value),
                language: 'javascript',
                uri: options.componentDir + "/" + fileName + ".js"
            }
        ];
    };
    /**
     * @private
     * @param {?} name
     * @param {?} html
     * @param {?} css
     * @return {?}
     */
    WebComponentAggregatorService.prototype.renderComponent = /**
     * @private
     * @param {?} name
     * @param {?} html
     * @param {?} css
     * @return {?}
     */
    function (name, html, css) {
        /** @type {?} */
        var className = this.formatService.className(name);
        /** @type {?} */
        var tagName = this.formatService.normalizeName(name);
        return "    const template = document.createElement('template');\n    template.innerHTML = `\n    <style>\n    " + this.formatService.indentFile(3, css).join('\n') + "\n    </style>\n\n    " + this.formatService.indentFile(3, html).join('\n') + "\n    `;\n\n    class " + className + " extends HTMLElement {\n      static is = 'xly-page1';\n\n      static get observedAttributes() {\n        return [];\n      }\n\n      constructor() {\n        super();\n        const shadowDOM = this.attachShadow({ mode: 'open' });\n        shadowDOM.appendChild(template.content.cloneNode(true));\n      }\n\n      connectedCallback(){\n        console.log(\"" + className + " custom element is first connected to the document's DOM.\");\n      }\n\n      disconnectedCallback() {\n        console.log(\"" + className + " custom element is disconnected from the document's DOM.\");\n      }\n\n      adoptedCallback() {\n        console.log(\"" + className + " custom element is moved to a new document.\");\n      }\n\n      attributeChangedCallback(name, oldValue, newValue) {\n        console.log(\"" + className + " custom element attributes changed.\");\n      }\n\n    }\n\n    customElements.define(" + className + ".is , " + className + ");";
    };
    WebComponentAggregatorService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    WebComponentAggregatorService.ctorParameters = function () { return [
        { type: FormatService },
        { type: WebCodeGenService }
    ]; };
    /** @nocollapse */ WebComponentAggregatorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function WebComponentAggregatorService_Factory() { return new WebComponentAggregatorService(ɵɵinject(FormatService), ɵɵinject(WebCodeGenService)); }, token: WebComponentAggregatorService, providedIn: "root" });
    return WebComponentAggregatorService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    WebComponentAggregatorService.prototype.formatService;
    /**
     * @type {?}
     * @private
     */
    WebComponentAggregatorService.prototype.webCodeGenService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var WebComponentCodeGenService = /** @class */ (function () {
    function WebComponentCodeGenService(symbolService, imageService, webCodeGen, webComponentAggretatorService, layerService) {
        this.symbolService = symbolService;
        this.imageService = imageService;
        this.webCodeGen = webCodeGen;
        this.webComponentAggretatorService = webComponentAggretatorService;
        this.layerService = layerService;
    }
    /**
     * @param {?} current
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    WebComponentCodeGenService.prototype.compute = /**
     * @param {?} current
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    function (current, data, options) {
        this.webCodeGen.compute(current, data, this.compileOptions(options));
    };
    /**
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    WebComponentCodeGenService.prototype.aggregate = /**
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    function (data, options) {
        var _this = this;
        return data.pages.flatMap((/**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            return _this.visit(page, data, _this.compileOptions(options));
        }));
    };
    /**
     * @param {?} current
     * @return {?}
     */
    WebComponentCodeGenService.prototype.identify = /**
     * @param {?} current
     * @return {?}
     */
    function (current) {
        return this.webCodeGen.identify(current);
    };
    /**
     * @param {?} current
     * @return {?}
     */
    WebComponentCodeGenService.prototype.context = /**
     * @param {?} current
     * @return {?}
     */
    function (current) {
        return this.webCodeGen.context(current);
    };
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    WebComponentCodeGenService.prototype.visit = /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    function (current, data, options) {
        return this.visitContent(current, data, options).concat(this.webComponentAggretatorService.aggregate(current, data, options));
    };
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    WebComponentCodeGenService.prototype.visitContent = /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (current, data, options) {
        if (this.layerService.identify(current)) {
            return this.visitLayer(current, data, options);
        }
        else if (this.symbolService.identify(current)) {
            return this.visitSymbolMaster(current, data, options);
        }
        else if (this.imageService.identify(current)) {
            return this.imageService.aggregate(current, data, options);
        }
        return [];
    };
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    WebComponentCodeGenService.prototype.visitLayer = /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (current, data, options) {
        var _this = this;
        return this.layerService
            .lookup(current)
            .flatMap((/**
         * @param {?} layer
         * @return {?}
         */
        function (layer) { return _this.visitContent(layer, data, options); }));
    };
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    WebComponentCodeGenService.prototype.visitSymbolMaster = /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (current, data, options) {
        /** @type {?} */
        var symbolMaster = this.symbolService.lookup(current, data);
        if (symbolMaster) {
            return this.visit(symbolMaster, data, options);
        }
        return [];
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    WebComponentCodeGenService.prototype.compileOptions = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return __assign({ textTagName: 'span', bitmapTagName: 'img', blockTagName: 'div', xmlPrefix: 'xly-', cssPrefix: 'xly_', componentDir: 'components', assetDir: 'assets' }, options);
    };
    WebComponentCodeGenService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    WebComponentCodeGenService.ctorParameters = function () { return [
        { type: SymbolService },
        { type: ImageService },
        { type: WebCodeGenService },
        { type: WebComponentAggregatorService },
        { type: LayerService }
    ]; };
    /** @nocollapse */ WebComponentCodeGenService.ngInjectableDef = ɵɵdefineInjectable({ factory: function WebComponentCodeGenService_Factory() { return new WebComponentCodeGenService(ɵɵinject(SymbolService), ɵɵinject(ImageService), ɵɵinject(WebCodeGenService), ɵɵinject(WebComponentAggregatorService), ɵɵinject(LayerService)); }, token: WebComponentCodeGenService, providedIn: "root" });
    return WebComponentCodeGenService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    WebComponentCodeGenService.prototype.symbolService;
    /**
     * @type {?}
     * @private
     */
    WebComponentCodeGenService.prototype.imageService;
    /**
     * @type {?}
     * @private
     */
    WebComponentCodeGenService.prototype.webCodeGen;
    /**
     * @type {?}
     * @private
     */
    WebComponentCodeGenService.prototype.webComponentAggretatorService;
    /**
     * @type {?}
     * @private
     */
    WebComponentCodeGenService.prototype.layerService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var WebComponentCodeGenModule = /** @class */ (function () {
    function WebComponentCodeGenModule() {
    }
    WebComponentCodeGenModule.decorators = [
        { type: NgModule, args: [{
                    imports: [WebCodeGenModule]
                },] }
    ];
    return WebComponentCodeGenModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { WebComponentCodeGenModule, WebComponentCodeGenService, WebComponentDocGenService, WebComponentAggregatorService as ɵa };
//# sourceMappingURL=xlayers-web-component-codegen.js.map
