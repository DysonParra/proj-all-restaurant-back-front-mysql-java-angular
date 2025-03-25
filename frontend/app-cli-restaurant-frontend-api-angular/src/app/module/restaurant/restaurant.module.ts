/*
 * @fileoverview    {RestaurantModule}
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
import { CommonModule } from '@angular/common';

import {
    DxBoxModule,
    DxSelectBoxModule,
    DxFormModule,
    DxButtonModule,
    DxDataGridModule,
    DxSchedulerModule,
    DxCalendarModule,
    DxDrawerModule,
    DxListModule,
    DxContextMenuModule,
    DxDateBoxModule,
    DxRadioGroupModule,
    DxPopupModule,
    DxTextBoxModule,
    DxTemplateModule,
    DxHtmlEditorModule,
    DxDropDownBoxModule,
    DxDropDownButtonModule,
    DxToolbarModule,
    DxCheckBoxModule,
    DxValidatorModule,
    DxScrollViewModule,
    DxLoadPanelModule
} from 'devextreme-angular';

import { ChefFacade } from './facade/chef.facade';
import { ChefService } from './service/chef.service';
import { ChefComponent } from './component/chef/chef.component';
import { ChefContainerComponent } from './container/chef-container/chef-container.component';
import { ChefViewComponent } from './view/chef-view/chef-view.component';
import { CustomerFacade } from './facade/customer.facade';
import { CustomerService } from './service/customer.service';
import { CustomerComponent } from './component/customer/customer.component';
import { CustomerContainerComponent } from './container/customer-container/customer-container.component';
import { CustomerViewComponent } from './view/customer-view/customer-view.component';
import { IngredientFacade } from './facade/ingredient.facade';
import { IngredientService } from './service/ingredient.service';
import { IngredientComponent } from './component/ingredient/ingredient.component';
import { IngredientContainerComponent } from './container/ingredient-container/ingredient-container.component';
import { IngredientViewComponent } from './view/ingredient-view/ingredient-view.component';
import { MealFacade } from './facade/meal.facade';
import { MealService } from './service/meal.service';
import { MealComponent } from './component/meal/meal.component';
import { MealContainerComponent } from './container/meal-container/meal-container.component';
import { MealViewComponent } from './view/meal-view/meal-view.component';
import { OrderFacade } from './facade/order.facade';
import { OrderService } from './service/order.service';
import { OrderComponent } from './component/order/order.component';
import { OrderContainerComponent } from './container/order-container/order-container.component';
import { OrderViewComponent } from './view/order-view/order-view.component';
import { ProviderFacade } from './facade/provider.facade';
import { ProviderService } from './service/provider.service';
import { ProviderComponent } from './component/provider/provider.component';
import { ProviderContainerComponent } from './container/provider-container/provider-container.component';
import { ProviderViewComponent } from './view/provider-view/provider-view.component';
import { SupplierFacade } from './facade/supplier.facade';
import { SupplierService } from './service/supplier.service';
import { SupplierComponent } from './component/supplier/supplier.component';
import { SupplierContainerComponent } from './container/supplier-container/supplier-container.component';
import { SupplierViewComponent } from './view/supplier-view/supplier-view.component';
import { WaiterFacade } from './facade/waiter.facade';
import { WaiterService } from './service/waiter.service';
import { WaiterComponent } from './component/waiter/waiter.component';
import { WaiterContainerComponent } from './container/waiter-container/waiter-container.component';
import { WaiterViewComponent } from './view/waiter-view/waiter-view.component';

import { SharedModule } from '@app/module/shared/shared.module';
import { RestaurantRoutingModule } from '@app/module/restaurant/restaurant.routing.module';

/**
 * TODO: Description of {@code RestaurantModule}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@NgModule({
    declarations: [
        ChefComponent,
        ChefContainerComponent,
        ChefViewComponent,        CustomerComponent,
        CustomerContainerComponent,
        CustomerViewComponent,        IngredientComponent,
        IngredientContainerComponent,
        IngredientViewComponent,        MealComponent,
        MealContainerComponent,
        MealViewComponent,        OrderComponent,
        OrderContainerComponent,
        OrderViewComponent,        ProviderComponent,
        ProviderContainerComponent,
        ProviderViewComponent,        SupplierComponent,
        SupplierContainerComponent,
        SupplierViewComponent,        WaiterComponent,
        WaiterContainerComponent,
        WaiterViewComponent,
    ],
    imports: [
        // ng modules
        CommonModule,
        DxBoxModule,
        DxButtonModule,
        DxCalendarModule,
        DxCheckBoxModule,
        DxContextMenuModule,
        DxDataGridModule,
        DxDateBoxModule,
        DxDrawerModule,
        DxDropDownBoxModule,
        DxDropDownButtonModule,
        DxFormModule,
        DxHtmlEditorModule,
        DxListModule,
        DxLoadPanelModule,
        DxPopupModule,
        DxRadioGroupModule,
        DxSchedulerModule,
        DxScrollViewModule,
        DxSelectBoxModule,
        DxTemplateModule,
        DxTextBoxModule,
        DxToolbarModule,
        DxValidatorModule,

        // Own modules
        RestaurantRoutingModule,
        SharedModule
    ],
    exports: [
        ChefViewComponent,        CustomerViewComponent,        IngredientViewComponent,        MealViewComponent,        OrderViewComponent,        ProviderViewComponent,        SupplierViewComponent,        WaiterViewComponent,
    ],
    providers: [
        ChefFacade,
        ChefService,        CustomerFacade,
        CustomerService,        IngredientFacade,
        IngredientService,        MealFacade,
        MealService,        OrderFacade,
        OrderService,        ProviderFacade,
        ProviderService,        SupplierFacade,
        SupplierService,        WaiterFacade,
        WaiterService,
    ]
})
export class RestaurantModule { }
