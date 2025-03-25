/*
 * @fileoverview    {OrderContainerComponent}
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
import { Component } from '@angular/core';
import { GenericContainerComponent } from '@app/module/essential/container/generic-container.component';
import { OrderViewModel } from '../../model/order.model';
import { OrderFacade } from '../../facade/order.facade';

/**
 * TODO: Description of {@code OrderContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-order-container',
    templateUrl: './order-container.component.html',
    standalone: false,
    styleUrls: ['./order-container.component.css']
})
export class OrderContainerComponent extends GenericContainerComponent<OrderViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: OrderViewModel,
        entityFacade: OrderFacade) {
        super(entityInstance, entityFacade);
    }

}
