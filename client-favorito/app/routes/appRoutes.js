"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var favoritos_list_components_1 = require("../components/favoritos-list-components");
var favorito_detail_components_1 = require("../components/favorito-detail-components");
var appRoutes = [
    { path: '', component: favoritos_list_components_1.FavoritosListComponents },
    { path: 'marcador/:id', component: favorito_detail_components_1.FavoritoDetailComponents },
    // la ruta ** va al final de todas las rutas ya que esta indica url no existente.
    { path: '**', component: favoritos_list_components_1.FavoritosListComponents }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=appRoutes.js.map