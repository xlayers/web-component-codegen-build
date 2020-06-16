/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class WebComponentDocGenService {
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
/** @nocollapse */ WebComponentDocGenService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function WebComponentDocGenService_Factory() { return new WebComponentDocGenService(); }, token: WebComponentDocGenService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLWNvbXBvbmVudC1kb2NnZW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4bGF5ZXJzL3dlYi1jb21wb25lbnQtY29kZWdlbi8iLCJzb3VyY2VzIjpbImxpYi93ZWItY29tcG9uZW50LWRvY2dlbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNLE9BQU8seUJBQXlCOzs7OztJQUNwQyxTQUFTLENBQUMsSUFBa0I7UUFDMUIsT0FBTztZQUNMO2dCQUNFLEdBQUcsRUFBRSxXQUFXO2dCQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDdkMsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLElBQUksRUFBRSxNQUFNO2FBQ2I7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sWUFBWSxDQUFDLElBQVk7UUFDL0IsT0FBTztvQkFDUyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxSUE2QjZHLENBQUM7SUFDcEksQ0FBQzs7O1lBL0NGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFdlYkNvbXBvbmVudERvY0dlblNlcnZpY2Uge1xyXG4gIGFnZ3JlZ2F0ZShkYXRhOiBTa2V0Y2hNU0RhdGEpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIHtcclxuICAgICAgICB1cmk6ICdSRUFETUUubWQnLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLnJlbmRlclJlYWRtZShkYXRhLm1ldGEuYXBwKSxcclxuICAgICAgICBsYW5ndWFnZTogJ21hcmtkb3duJyxcclxuICAgICAgICBraW5kOiAndGV4dCdcclxuICAgICAgfVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyUmVhZG1lKG5hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGBcXFxyXG4jIyBIb3cgdG8gdXNlIHRoZSAke25hbWV9IFdlYiBDb21wb25lbnRzXHJcblxyXG5UaGlzIGltcGxlbWVudGF0aW9uIGV4cG9ydCB0aGUgYXNzZXRzIGFzIHNpbmdsZSBmaWxlIHdlYiBjb21wb25lbnQgdGhhdCBjYW4gYmUgY29uc3VtZWQgaW4gdGhlIGZvbGxvd2luZyB3YXlzOlxyXG5cclxuXFxgXFxgXFxgaHRtbFxyXG4gIC8vIGluZGV4Lmh0bWxcclxuICA8c2NyaXB0IHNyYz1cIi4vbXktY29tcG9uZW50LmpzXCI+PC9zY3JpcHQ+XHJcbiAgPG15LWNvbXBvbmVudD48L215LWNvbXBvbmVudD5cclxuXFxgXFxgXFxgXHJcblxyXG4+IE5lZWRlZCBwb2x5ZmlsbHMgYXJlIGltcG9ydGVkIGluc2lkZSB0aGUgbXktY29tcG9uZW50LCBpbiBtb3N0IGNhc2VzIHlvdSBjYW4gaW1wb3J0IGl0IGdsb2JhbGx5IG9yIHVzZSBkaWZmZXJlbnQgc3RyYXRlZ3kuIEZvciBleGFtcGxlOlxyXG5cclxuXFxgXFxgXFxgaHRtbFxyXG4gIC8vaW5kZXguaHRtbFxyXG4gIDwhLS0gTG9hZCBwb2x5ZmlsbHM7IG5vdGUgdGhhdCBcImxvYWRlclwiIHdpbGwgbG9hZCB0aGVzZSBhc3luYyAtLT5cclxuICA8c2NyaXB0IHNyYz1cIm5vZGVfbW9kdWxlcy9Ad2ViY29tcG9uZW50cy93ZWJjb21wb25lbnRzanMvd2ViY29tcG9uZW50cy1sb2FkZXIuanNcIiBkZWZlcj48L3NjcmlwdD5cclxuXHJcbiAgPCEtLSBMb2FkIGEgY3VzdG9tIGVsZW1lbnQgZGVmaW5pdGlvbnMgaW4gXFwnd2FpdEZvclxcJyBhbmQgcmV0dXJuIGEgcHJvbWlzZSAtLT5cclxuICA8c2NyaXB0IHR5cGU9XCJtb2R1bGVcIj5cclxuICAgIFdlYkNvbXBvbmVudHMud2FpdEZvcigoKSA9PiB7XHJcbiAgICAvLyBZb3Ugc2hvdWxkIHJlbW92ZSByZWR1bmRhbnQgcG9seWZpbGxzIGltcG9ydCBmcm9tIG15LWNvbXBvbmVudFxyXG4gICAgcmV0dXJuIGltcG9ydChcXCcuL215LWNvbXBvbmVudC5qc1xcJyk7XHJcbiAgICB9KTtcclxuICA8L3NjcmlwdD5cclxuXHJcbiAgPCEtLSBVc2UgdGhlIGN1c3RvbSBlbGVtZW50IC0tPlxyXG4gIDxteS1jb21wb25lbnQ+PC9teS1jb21wb25lbnQ+XHJcblxcYFxcYFxcYFxyXG5cclxuPiAgRm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgW3dlYiBjb21wb25lbnRzIGFuZCBicm93c2VyIHN1cHBvcnRdKGh0dHBzOi8vZ2l0aHViLmNvbS9XZWJDb21wb25lbnRzL3dlYmNvbXBvbmVudHNqcyNicm93c2VyLXN1cHBvcnQpYDtcclxuICB9XHJcbn1cclxuIl19