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
export class WebComponentAggregatorService {
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
/** @nocollapse */ WebComponentAggregatorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function WebComponentAggregatorService_Factory() { return new WebComponentAggregatorService(i0.ɵɵinject(i1.FormatService), i0.ɵɵinject(i2.WebCodeGenService)); }, token: WebComponentAggregatorService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLWNvbXBvbmVudC1hZ2dyZWdhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGxheWVycy93ZWItY29tcG9uZW50LWNvZGVnZW4vIiwic291cmNlcyI6WyJsaWIvd2ViLWNvbXBvbmVudC1hZ2dyZWdhdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0FBT3pELE1BQU0sT0FBTyw2QkFBNkI7Ozs7O0lBQ3hDLFlBQ21CLGFBQTRCLEVBQzVCLGlCQUFvQztRQURwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQ3BELENBQUM7Ozs7Ozs7SUFFSixTQUFTLENBQ1AsT0FBc0IsRUFDdEIsSUFBa0IsRUFDbEIsT0FBMEI7O2NBRXBCLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDOztjQUN6RCxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQzs7Y0FDaEUsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLE1BQU0sRUFBQzs7Y0FDbkQsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLEtBQUssRUFBQztRQUN2RCxPQUFPO1lBQ0w7Z0JBQ0UsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsS0FBSyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hFLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixHQUFHLEVBQUUsR0FBRyxPQUFPLENBQUMsWUFBWSxJQUFJLFFBQVEsS0FBSzthQUM5QztTQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7OztJQUVPLGVBQWUsQ0FBQyxJQUFZLEVBQUUsSUFBWSxFQUFFLEdBQVc7O2NBQ3ZELFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7O2NBQzlDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDdEQsT0FBTzs7OztNQUlMLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDOzs7TUFHaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7OztZQUczQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozt1QkFjRSxTQUFTOzs7O3VCQUlULFNBQVM7Ozs7dUJBSVQsU0FBUzs7Ozt1QkFJVCxTQUFTOzs7Ozs0QkFLSixTQUFTLFNBQVMsU0FBUyxJQUFJLENBQUM7SUFDMUQsQ0FBQzs7O1lBekVGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVBRLGFBQWE7WUFDYixpQkFBaUI7Ozs7Ozs7O0lBU3RCLHNEQUE2Qzs7Ozs7SUFDN0MsMERBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtYXRTZXJ2aWNlIH0gZnJvbSAnQHhsYXllcnMvc2tldGNoLWxpYic7XHJcbmltcG9ydCB7IFdlYkNvZGVHZW5TZXJ2aWNlIH0gZnJvbSAnQHhsYXllcnMvd2ViLWNvZGVnZW4nO1xyXG5cclxudHlwZSBXZWJDb2RlR2VuT3B0aW9ucyA9IGFueTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFdlYkNvbXBvbmVudEFnZ3JlZ2F0b3JTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0U2VydmljZTogRm9ybWF0U2VydmljZSxcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgd2ViQ29kZUdlblNlcnZpY2U6IFdlYkNvZGVHZW5TZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBhZ2dyZWdhdGUoXHJcbiAgICBjdXJyZW50OiBTa2V0Y2hNU0xheWVyLFxyXG4gICAgZGF0YTogU2tldGNoTVNEYXRhLFxyXG4gICAgb3B0aW9uczogV2ViQ29kZUdlbk9wdGlvbnNcclxuICApIHtcclxuICAgIGNvbnN0IGZpbGVOYW1lID0gdGhpcy5mb3JtYXRTZXJ2aWNlLm5vcm1hbGl6ZU5hbWUoY3VycmVudC5uYW1lKTtcclxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy53ZWJDb2RlR2VuU2VydmljZS5hZ2dyZWdhdGUoY3VycmVudCwgZGF0YSwgb3B0aW9ucyk7XHJcbiAgICBjb25zdCBodG1sID0gZmlsZXMuZmluZChmaWxlID0+IGZpbGUubGFuZ3VhZ2UgPT09ICdodG1sJyk7XHJcbiAgICBjb25zdCBjc3MgPSBmaWxlcy5maW5kKGZpbGUgPT4gZmlsZS5sYW5ndWFnZSA9PT0gJ2NzcycpO1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAge1xyXG4gICAgICAgIGtpbmQ6ICd3YycsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyQ29tcG9uZW50KGN1cnJlbnQubmFtZSwgaHRtbC52YWx1ZSwgY3NzLnZhbHVlKSxcclxuICAgICAgICBsYW5ndWFnZTogJ2phdmFzY3JpcHQnLFxyXG4gICAgICAgIHVyaTogYCR7b3B0aW9ucy5jb21wb25lbnREaXJ9LyR7ZmlsZU5hbWV9LmpzYFxyXG4gICAgICB9XHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJDb21wb25lbnQobmFtZTogc3RyaW5nLCBodG1sOiBzdHJpbmcsIGNzczogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmZvcm1hdFNlcnZpY2UuY2xhc3NOYW1lKG5hbWUpO1xyXG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMuZm9ybWF0U2VydmljZS5ub3JtYWxpemVOYW1lKG5hbWUpO1xyXG4gICAgcmV0dXJuIGBcXFxyXG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xyXG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gXFxgXHJcbiAgICA8c3R5bGU+XHJcbiAgICAke3RoaXMuZm9ybWF0U2VydmljZS5pbmRlbnRGaWxlKDMsIGNzcykuam9pbignXFxuJyl9XHJcbiAgICA8L3N0eWxlPlxyXG5cclxuICAgICR7dGhpcy5mb3JtYXRTZXJ2aWNlLmluZGVudEZpbGUoMywgaHRtbCkuam9pbignXFxuJyl9XHJcbiAgICBcXGA7XHJcblxyXG4gICAgY2xhc3MgJHtjbGFzc05hbWV9IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgICBzdGF0aWMgaXMgPSAneGx5LXBhZ2UxJztcclxuXHJcbiAgICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBjb25zdCBzaGFkb3dET00gPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcclxuICAgICAgICBzaGFkb3dET00uYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25uZWN0ZWRDYWxsYmFjaygpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiJHtjbGFzc05hbWV9IGN1c3RvbSBlbGVtZW50IGlzIGZpcnN0IGNvbm5lY3RlZCB0byB0aGUgZG9jdW1lbnQncyBET00uXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiR7Y2xhc3NOYW1lfSBjdXN0b20gZWxlbWVudCBpcyBkaXNjb25uZWN0ZWQgZnJvbSB0aGUgZG9jdW1lbnQncyBET00uXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhZG9wdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIke2NsYXNzTmFtZX0gY3VzdG9tIGVsZW1lbnQgaXMgbW92ZWQgdG8gYSBuZXcgZG9jdW1lbnQuXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIke2NsYXNzTmFtZX0gY3VzdG9tIGVsZW1lbnQgYXR0cmlidXRlcyBjaGFuZ2VkLlwiKTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJHtjbGFzc05hbWV9LmlzICwgJHtjbGFzc05hbWV9KTtgO1xyXG4gIH1cclxufVxyXG4iXX0=