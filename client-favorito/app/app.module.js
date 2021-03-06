"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var appRoutes_1 = require("./routes/appRoutes");
var app_component_1 = require("./app.component");
var favoritos_list_components_1 = require("./components/favoritos-list-components");
var favorito_detail_components_1 = require("./components/favorito-detail-components");
var favorito_add_components_1 = require("./components/favorito-add-components");
var favorito_edit_components_1 = require("./components/favorito-edit-components");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            appRoutes_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            favoritos_list_components_1.FavoritosListComponents,
            favorito_detail_components_1.FavoritoDetailComponents,
            favorito_add_components_1.FavoritoAddComponents,
            favorito_edit_components_1.FavoritoEditComponents
        ],
        providers: [
            appRoutes_1.appRoutingProviders
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map