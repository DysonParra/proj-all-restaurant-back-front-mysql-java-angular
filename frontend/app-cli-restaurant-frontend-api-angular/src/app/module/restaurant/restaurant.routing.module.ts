/*
 * @overview        {RestaurantRoutingModule}
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementation done.
 * @version 2.0     Documentation added.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChefViewComponent } from './view/chef-view/chef-view.component';
import { CustomerViewComponent } from './view/customer-view/customer-view.component';
import { IngredientViewComponent } from './view/ingredient-view/ingredient-view.component';
import { MealViewComponent } from './view/meal-view/meal-view.component';
import { OrderViewComponent } from './view/order-view/order-view.component';
import { ProviderViewComponent } from './view/provider-view/provider-view.component';
import { SupplierViewComponent } from './view/supplier-view/supplier-view.component';
import { WaiterViewComponent } from './view/waiter-view/waiter-view.component';

const routes: Routes = [
    {
        path: 'chef',
        component: ChefViewComponent
    },
    {
        path: 'customer',
        component: CustomerViewComponent
    },
    {
        path: 'ingredient',
        component: IngredientViewComponent
    },
    {
        path: 'meal',
        component: MealViewComponent
    },
    {
        path: 'order',
        component: OrderViewComponent
    },
    {
        path: 'provider',
        component: ProviderViewComponent
    },
    {
        path: 'supplier',
        component: SupplierViewComponent
    },
    {
        path: 'waiter',
        component: WaiterViewComponent
    },
];

/**
 * TODO: Description of {@code RestaurantRoutingModule}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RestaurantRoutingModule { }
