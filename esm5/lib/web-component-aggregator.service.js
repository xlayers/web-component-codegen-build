/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FormatService } from '@xlayers/sketch-lib';
import { WebCodeGenService } from '@xlayers/web-codegen';
import * as i0 from "@angular/core";
import * as i1 from "@xlayers/sketch-lib";
import * as i2 from "@xlayers/web-codegen";
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
    /** @nocollapse */ WebComponentAggregatorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function WebComponentAggregatorService_Factory() { return new WebComponentAggregatorService(i0.ɵɵinject(i1.FormatService), i0.ɵɵinject(i2.WebCodeGenService)); }, token: WebComponentAggregatorService, providedIn: "root" });
    return WebComponentAggregatorService;
}());
export { WebComponentAggregatorService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLWNvbXBvbmVudC1hZ2dyZWdhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGxheWVycy93ZWItY29tcG9uZW50LWNvZGVnZW4vIiwic291cmNlcyI6WyJsaWIvd2ViLWNvbXBvbmVudC1hZ2dyZWdhdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0FBSXpEO0lBSUUsdUNBQ21CLGFBQTRCLEVBQzVCLGlCQUFvQztRQURwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQ3BELENBQUM7Ozs7Ozs7SUFFSixpREFBUzs7Ozs7O0lBQVQsVUFDRSxPQUFzQixFQUN0QixJQUFrQixFQUNsQixPQUEwQjs7WUFFcEIsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7O1lBQ3pELEtBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDOztZQUNoRSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUk7Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxRQUFRLEtBQUssTUFBTSxFQUF4QixDQUF3QixFQUFDOztZQUNuRCxHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUk7Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxRQUFRLEtBQUssS0FBSyxFQUF2QixDQUF1QixFQUFDO1FBQ3ZELE9BQU87WUFDTDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixLQUFLLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQztnQkFDaEUsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLEdBQUcsRUFBSyxPQUFPLENBQUMsWUFBWSxTQUFJLFFBQVEsUUFBSzthQUM5QztTQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7OztJQUVPLHVEQUFlOzs7Ozs7O0lBQXZCLFVBQXdCLElBQVksRUFBRSxJQUFZLEVBQUUsR0FBVzs7WUFDdkQsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzs7WUFDOUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztRQUN0RCxPQUFPLDRHQUlMLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDhCQUdoRCxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyw4QkFHM0MsU0FBUyxrWEFjRSxTQUFTLHdJQUlULFNBQVMsa0lBSVQsU0FBUyxzSkFJVCxTQUFTLCtGQUtKLFNBQVMsY0FBUyxTQUFTLE9BQUksQ0FBQztJQUMxRCxDQUFDOztnQkF6RUYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFQUSxhQUFhO2dCQUNiLGlCQUFpQjs7O3dDQUYxQjtDQWdGQyxBQTFFRCxJQTBFQztTQXZFWSw2QkFBNkI7Ozs7OztJQUV0QyxzREFBNkM7Ozs7O0lBQzdDLDBEQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybWF0U2VydmljZSB9IGZyb20gJ0B4bGF5ZXJzL3NrZXRjaC1saWInO1xyXG5pbXBvcnQgeyBXZWJDb2RlR2VuU2VydmljZSB9IGZyb20gJ0B4bGF5ZXJzL3dlYi1jb2RlZ2VuJztcclxuXHJcbnR5cGUgV2ViQ29kZUdlbk9wdGlvbnMgPSBhbnk7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXZWJDb21wb25lbnRBZ2dyZWdhdG9yU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZvcm1hdFNlcnZpY2U6IEZvcm1hdFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHdlYkNvZGVHZW5TZXJ2aWNlOiBXZWJDb2RlR2VuU2VydmljZVxyXG4gICkge31cclxuXHJcbiAgYWdncmVnYXRlKFxyXG4gICAgY3VycmVudDogU2tldGNoTVNMYXllcixcclxuICAgIGRhdGE6IFNrZXRjaE1TRGF0YSxcclxuICAgIG9wdGlvbnM6IFdlYkNvZGVHZW5PcHRpb25zXHJcbiAgKSB7XHJcbiAgICBjb25zdCBmaWxlTmFtZSA9IHRoaXMuZm9ybWF0U2VydmljZS5ub3JtYWxpemVOYW1lKGN1cnJlbnQubmFtZSk7XHJcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMud2ViQ29kZUdlblNlcnZpY2UuYWdncmVnYXRlKGN1cnJlbnQsIGRhdGEsIG9wdGlvbnMpO1xyXG4gICAgY29uc3QgaHRtbCA9IGZpbGVzLmZpbmQoZmlsZSA9PiBmaWxlLmxhbmd1YWdlID09PSAnaHRtbCcpO1xyXG4gICAgY29uc3QgY3NzID0gZmlsZXMuZmluZChmaWxlID0+IGZpbGUubGFuZ3VhZ2UgPT09ICdjc3MnKTtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIHtcclxuICAgICAgICBraW5kOiAnd2MnLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLnJlbmRlckNvbXBvbmVudChjdXJyZW50Lm5hbWUsIGh0bWwudmFsdWUsIGNzcy52YWx1ZSksXHJcbiAgICAgICAgbGFuZ3VhZ2U6ICdqYXZhc2NyaXB0JyxcclxuICAgICAgICB1cmk6IGAke29wdGlvbnMuY29tcG9uZW50RGlyfS8ke2ZpbGVOYW1lfS5qc2BcclxuICAgICAgfVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyQ29tcG9uZW50KG5hbWU6IHN0cmluZywgaHRtbDogc3RyaW5nLCBjc3M6IHN0cmluZykge1xyXG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5mb3JtYXRTZXJ2aWNlLmNsYXNzTmFtZShuYW1lKTtcclxuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLmZvcm1hdFNlcnZpY2Uubm9ybWFsaXplTmFtZShuYW1lKTtcclxuICAgIHJldHVybiBgXFxcclxuICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcclxuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IFxcYFxyXG4gICAgPHN0eWxlPlxyXG4gICAgJHt0aGlzLmZvcm1hdFNlcnZpY2UuaW5kZW50RmlsZSgzLCBjc3MpLmpvaW4oJ1xcbicpfVxyXG4gICAgPC9zdHlsZT5cclxuXHJcbiAgICAke3RoaXMuZm9ybWF0U2VydmljZS5pbmRlbnRGaWxlKDMsIGh0bWwpLmpvaW4oJ1xcbicpfVxyXG4gICAgXFxgO1xyXG5cclxuICAgIGNsYXNzICR7Y2xhc3NOYW1lfSBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICAgICAgc3RhdGljIGlzID0gJ3hseS1wYWdlMSc7XHJcblxyXG4gICAgICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgY29uc3Qgc2hhZG93RE9NID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XHJcbiAgICAgICAgc2hhZG93RE9NLmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29ubmVjdGVkQ2FsbGJhY2soKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiR7Y2xhc3NOYW1lfSBjdXN0b20gZWxlbWVudCBpcyBmaXJzdCBjb25uZWN0ZWQgdG8gdGhlIGRvY3VtZW50J3MgRE9NLlwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIke2NsYXNzTmFtZX0gY3VzdG9tIGVsZW1lbnQgaXMgZGlzY29ubmVjdGVkIGZyb20gdGhlIGRvY3VtZW50J3MgRE9NLlwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYWRvcHRlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiJHtjbGFzc05hbWV9IGN1c3RvbSBlbGVtZW50IGlzIG1vdmVkIHRvIGEgbmV3IGRvY3VtZW50LlwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiJHtjbGFzc05hbWV9IGN1c3RvbSBlbGVtZW50IGF0dHJpYnV0ZXMgY2hhbmdlZC5cIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCR7Y2xhc3NOYW1lfS5pcyAsICR7Y2xhc3NOYW1lfSk7YDtcclxuICB9XHJcbn1cclxuIl19