(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@xlayers/sketch-lib'), require('@xlayers/web-codegen')) :
    typeof define === 'function' && define.amd ? define('@xlayers/web-component-codegen', ['exports', '@angular/core', '@xlayers/sketch-lib', '@xlayers/web-codegen'], factory) :
    (global = global || self, factory((global.xlayers = global.xlayers || {}, global.xlayers['web-component-codegen'] = {}), global.ng.core, global.sketchLib, global.webCodegen));
}(this, (function (exports, core, sketchLib, webCodegen) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ WebComponentDocGenService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function WebComponentDocGenService_Factory() { return new WebComponentDocGenService(); }, token: WebComponentDocGenService, providedIn: "root" });
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        WebComponentAggregatorService.ctorParameters = function () { return [
            { type: sketchLib.FormatService },
            { type: webCodegen.WebCodeGenService }
        ]; };
        /** @nocollapse */ WebComponentAggregatorService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function WebComponentAggregatorService_Factory() { return new WebComponentAggregatorService(core.ɵɵinject(sketchLib.FormatService), core.ɵɵinject(webCodegen.WebCodeGenService)); }, token: WebComponentAggregatorService, providedIn: "root" });
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        WebComponentCodeGenService.ctorParameters = function () { return [
            { type: sketchLib.SymbolService },
            { type: sketchLib.ImageService },
            { type: webCodegen.WebCodeGenService },
            { type: WebComponentAggregatorService },
            { type: sketchLib.LayerService }
        ]; };
        /** @nocollapse */ WebComponentCodeGenService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function WebComponentCodeGenService_Factory() { return new WebComponentCodeGenService(core.ɵɵinject(sketchLib.SymbolService), core.ɵɵinject(sketchLib.ImageService), core.ɵɵinject(webCodegen.WebCodeGenService), core.ɵɵinject(WebComponentAggregatorService), core.ɵɵinject(sketchLib.LayerService)); }, token: WebComponentCodeGenService, providedIn: "root" });
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
            { type: core.NgModule, args: [{
                        imports: [webCodegen.WebCodeGenModule]
                    },] }
        ];
        return WebComponentCodeGenModule;
    }());

    exports.WebComponentCodeGenModule = WebComponentCodeGenModule;
    exports.WebComponentCodeGenService = WebComponentCodeGenService;
    exports.WebComponentDocGenService = WebComponentDocGenService;
    exports.ɵa = WebComponentAggregatorService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=xlayers-web-component-codegen.umd.js.map
