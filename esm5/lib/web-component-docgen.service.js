/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
    /** @nocollapse */ WebComponentDocGenService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function WebComponentDocGenService_Factory() { return new WebComponentDocGenService(); }, token: WebComponentDocGenService, providedIn: "root" });
    return WebComponentDocGenService;
}());
export { WebComponentDocGenService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLWNvbXBvbmVudC1kb2NnZW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4bGF5ZXJzL3dlYi1jb21wb25lbnQtY29kZWdlbi8iLCJzb3VyY2VzIjpbImxpYi93ZWItY29tcG9uZW50LWRvY2dlbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQztJQUFBO0tBZ0RDOzs7OztJQTVDQyw2Q0FBUzs7OztJQUFULFVBQVUsSUFBa0I7UUFDMUIsT0FBTztZQUNMO2dCQUNFLEdBQUcsRUFBRSxXQUFXO2dCQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDdkMsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLElBQUksRUFBRSxNQUFNO2FBQ2I7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sZ0RBQVk7Ozs7O0lBQXBCLFVBQXFCLElBQVk7UUFDL0IsT0FBTyx1QkFDUyxJQUFJLHVqQ0E2QjZHLENBQUM7SUFDcEksQ0FBQzs7Z0JBL0NGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OztvQ0FKRDtDQWtEQyxBQWhERCxJQWdEQztTQTdDWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXZWJDb21wb25lbnREb2NHZW5TZXJ2aWNlIHtcclxuICBhZ2dyZWdhdGUoZGF0YTogU2tldGNoTVNEYXRhKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7XHJcbiAgICAgICAgdXJpOiAnUkVBRE1FLm1kJyxcclxuICAgICAgICB2YWx1ZTogdGhpcy5yZW5kZXJSZWFkbWUoZGF0YS5tZXRhLmFwcCksXHJcbiAgICAgICAgbGFuZ3VhZ2U6ICdtYXJrZG93bicsXHJcbiAgICAgICAga2luZDogJ3RleHQnXHJcbiAgICAgIH1cclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlclJlYWRtZShuYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBgXFxcclxuIyMgSG93IHRvIHVzZSB0aGUgJHtuYW1lfSBXZWIgQ29tcG9uZW50c1xyXG5cclxuVGhpcyBpbXBsZW1lbnRhdGlvbiBleHBvcnQgdGhlIGFzc2V0cyBhcyBzaW5nbGUgZmlsZSB3ZWIgY29tcG9uZW50IHRoYXQgY2FuIGJlIGNvbnN1bWVkIGluIHRoZSBmb2xsb3dpbmcgd2F5czpcclxuXHJcblxcYFxcYFxcYGh0bWxcclxuICAvLyBpbmRleC5odG1sXHJcbiAgPHNjcmlwdCBzcmM9XCIuL215LWNvbXBvbmVudC5qc1wiPjwvc2NyaXB0PlxyXG4gIDxteS1jb21wb25lbnQ+PC9teS1jb21wb25lbnQ+XHJcblxcYFxcYFxcYFxyXG5cclxuPiBOZWVkZWQgcG9seWZpbGxzIGFyZSBpbXBvcnRlZCBpbnNpZGUgdGhlIG15LWNvbXBvbmVudCwgaW4gbW9zdCBjYXNlcyB5b3UgY2FuIGltcG9ydCBpdCBnbG9iYWxseSBvciB1c2UgZGlmZmVyZW50IHN0cmF0ZWd5LiBGb3IgZXhhbXBsZTpcclxuXHJcblxcYFxcYFxcYGh0bWxcclxuICAvL2luZGV4Lmh0bWxcclxuICA8IS0tIExvYWQgcG9seWZpbGxzOyBub3RlIHRoYXQgXCJsb2FkZXJcIiB3aWxsIGxvYWQgdGhlc2UgYXN5bmMgLS0+XHJcbiAgPHNjcmlwdCBzcmM9XCJub2RlX21vZHVsZXMvQHdlYmNvbXBvbmVudHMvd2ViY29tcG9uZW50c2pzL3dlYmNvbXBvbmVudHMtbG9hZGVyLmpzXCIgZGVmZXI+PC9zY3JpcHQ+XHJcblxyXG4gIDwhLS0gTG9hZCBhIGN1c3RvbSBlbGVtZW50IGRlZmluaXRpb25zIGluIFxcJ3dhaXRGb3JcXCcgYW5kIHJldHVybiBhIHByb21pc2UgLS0+XHJcbiAgPHNjcmlwdCB0eXBlPVwibW9kdWxlXCI+XHJcbiAgICBXZWJDb21wb25lbnRzLndhaXRGb3IoKCkgPT4ge1xyXG4gICAgLy8gWW91IHNob3VsZCByZW1vdmUgcmVkdW5kYW50IHBvbHlmaWxscyBpbXBvcnQgZnJvbSBteS1jb21wb25lbnRcclxuICAgIHJldHVybiBpbXBvcnQoXFwnLi9teS1jb21wb25lbnQuanNcXCcpO1xyXG4gICAgfSk7XHJcbiAgPC9zY3JpcHQ+XHJcblxyXG4gIDwhLS0gVXNlIHRoZSBjdXN0b20gZWxlbWVudCAtLT5cclxuICA8bXktY29tcG9uZW50PjwvbXktY29tcG9uZW50PlxyXG5cXGBcXGBcXGBcclxuXHJcbj4gIEZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IFt3ZWIgY29tcG9uZW50cyBhbmQgYnJvd3NlciBzdXBwb3J0XShodHRwczovL2dpdGh1Yi5jb20vV2ViQ29tcG9uZW50cy93ZWJjb21wb25lbnRzanMjYnJvd3Nlci1zdXBwb3J0KWA7XHJcbiAgfVxyXG59XHJcbiJdfQ==