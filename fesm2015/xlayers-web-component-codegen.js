import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { FormatService, SymbolService, ImageService, LayerService } from '@xlayers/sketch-lib';
import { WebCodeGenService, WebCodeGenModule } from '@xlayers/web-codegen';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WebComponentDocGenService {
    /**
     * @param {?} data
     * @return {?}
     */
    aggregate(data) {
        return [
            {
                uri: 'README.md',
                value: this.renderReadme(data.meta.app),
                language: 'markdown',
                kind: 'text'
            }
        ];
    }
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    renderReadme(name) {
        return `\
## How to use the ${name} Web Components

This implementation export the assets as single file web component that can be consumed in the following ways:

\`\`\`html
  // index.html
  <script src="./my-component.js"></script>
  <my-component></my-component>
\`\`\`

> Needed polyfills are imported inside the my-component, in most cases you can import it globally or use different strategy. For example:

\`\`\`html
  //index.html
  <!-- Load polyfills; note that "loader" will load these async -->
  <script src="node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js" defer></script>

  <!-- Load a custom element definitions in \'waitFor\' and return a promise -->
  <script type="module">
    WebComponents.waitFor(() => {
    // You should remove redundant polyfills import from my-component
    return import(\'./my-component.js\');
    });
  </script>

  <!-- Use the custom element -->
  <my-component></my-component>
\`\`\`

>  For more information about [web components and browser support](https://github.com/WebComponents/webcomponentsjs#browser-support)`;
    }
}
WebComponentDocGenService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ WebComponentDocGenService.ngInjectableDef = ɵɵdefineInjectable({ factory: function WebComponentDocGenService_Factory() { return new WebComponentDocGenService(); }, token: WebComponentDocGenService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WebComponentAggregatorService {
    /**
     * @param {?} formatService
     * @param {?} webCodeGenService
     */
    constructor(formatService, webCodeGenService) {
        this.formatService = formatService;
        this.webCodeGenService = webCodeGenService;
    }
    /**
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    aggregate(current, data, options) {
        /** @type {?} */
        const fileName = this.formatService.normalizeName(current.name);
        /** @type {?} */
        const files = this.webCodeGenService.aggregate(current, data, options);
        /** @type {?} */
        const html = files.find((/**
         * @param {?} file
         * @return {?}
         */
        file => file.language === 'html'));
        /** @type {?} */
        const css = files.find((/**
         * @param {?} file
         * @return {?}
         */
        file => file.language === 'css'));
        return [
            {
                kind: 'wc',
                value: this.renderComponent(current.name, html.value, css.value),
                language: 'javascript',
                uri: `${options.componentDir}/${fileName}.js`
            }
        ];
    }
    /**
     * @private
     * @param {?} name
     * @param {?} html
     * @param {?} css
     * @return {?}
     */
    renderComponent(name, html, css) {
        /** @type {?} */
        const className = this.formatService.className(name);
        /** @type {?} */
        const tagName = this.formatService.normalizeName(name);
        return `\
    const template = document.createElement('template');
    template.innerHTML = \`
    <style>
    ${this.formatService.indentFile(3, css).join('\n')}
    </style>

    ${this.formatService.indentFile(3, html).join('\n')}
    \`;

    class ${className} extends HTMLElement {
      static is = 'xly-page1';

      static get observedAttributes() {
        return [];
      }

      constructor() {
        super();
        const shadowDOM = this.attachShadow({ mode: 'open' });
        shadowDOM.appendChild(template.content.cloneNode(true));
      }

      connectedCallback(){
        console.log("${className} custom element is first connected to the document's DOM.");
      }

      disconnectedCallback() {
        console.log("${className} custom element is disconnected from the document's DOM.");
      }

      adoptedCallback() {
        console.log("${className} custom element is moved to a new document.");
      }

      attributeChangedCallback(name, oldValue, newValue) {
        console.log("${className} custom element attributes changed.");
      }

    }

    customElements.define(${className}.is , ${className});`;
    }
}
WebComponentAggregatorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
WebComponentAggregatorService.ctorParameters = () => [
    { type: FormatService },
    { type: WebCodeGenService }
];
/** @nocollapse */ WebComponentAggregatorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function WebComponentAggregatorService_Factory() { return new WebComponentAggregatorService(ɵɵinject(FormatService), ɵɵinject(WebCodeGenService)); }, token: WebComponentAggregatorService, providedIn: "root" });
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
class WebComponentCodeGenService {
    /**
     * @param {?} symbolService
     * @param {?} imageService
     * @param {?} webCodeGen
     * @param {?} webComponentAggretatorService
     * @param {?} layerService
     */
    constructor(symbolService, imageService, webCodeGen, webComponentAggretatorService, layerService) {
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
    compute(current, data, options) {
        this.webCodeGen.compute(current, data, this.compileOptions(options));
    }
    /**
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    aggregate(data, options) {
        return data.pages.flatMap((/**
         * @param {?} page
         * @return {?}
         */
        page => this.visit(page, data, this.compileOptions(options))));
    }
    /**
     * @param {?} current
     * @return {?}
     */
    identify(current) {
        return this.webCodeGen.identify(current);
    }
    /**
     * @param {?} current
     * @return {?}
     */
    context(current) {
        return this.webCodeGen.context(current);
    }
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    visit(current, data, options) {
        return this.visitContent(current, data, options).concat(this.webComponentAggretatorService.aggregate(current, data, options));
    }
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    visitContent(current, data, options) {
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
    }
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    visitLayer(current, data, options) {
        return this.layerService
            .lookup(current)
            .flatMap((/**
         * @param {?} layer
         * @return {?}
         */
        layer => this.visitContent(layer, data, options)));
    }
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    visitSymbolMaster(current, data, options) {
        /** @type {?} */
        const symbolMaster = this.symbolService.lookup(current, data);
        if (symbolMaster) {
            return this.visit(symbolMaster, data, options);
        }
        return [];
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    compileOptions(options) {
        return Object.assign({ textTagName: 'span', bitmapTagName: 'img', blockTagName: 'div', xmlPrefix: 'xly-', cssPrefix: 'xly_', componentDir: 'components', assetDir: 'assets' }, options);
    }
}
WebComponentCodeGenService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
WebComponentCodeGenService.ctorParameters = () => [
    { type: SymbolService },
    { type: ImageService },
    { type: WebCodeGenService },
    { type: WebComponentAggregatorService },
    { type: LayerService }
];
/** @nocollapse */ WebComponentCodeGenService.ngInjectableDef = ɵɵdefineInjectable({ factory: function WebComponentCodeGenService_Factory() { return new WebComponentCodeGenService(ɵɵinject(SymbolService), ɵɵinject(ImageService), ɵɵinject(WebCodeGenService), ɵɵinject(WebComponentAggregatorService), ɵɵinject(LayerService)); }, token: WebComponentCodeGenService, providedIn: "root" });
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
class WebComponentCodeGenModule {
}
WebComponentCodeGenModule.decorators = [
    { type: NgModule, args: [{
                imports: [WebCodeGenModule]
            },] }
];

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
