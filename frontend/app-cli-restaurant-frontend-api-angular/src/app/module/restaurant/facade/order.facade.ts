/*
 * @overview        {OrderFacade}
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
import { Injectable } from '@angular/core';
import { GenericFacade } from '@app/module/essential/facade/generic.facade';
import { OrderViewModel } from '../model/order.model';
import { OrderState } from '../state/order.state';
import { OrderService } from '../service/order.service';

/**
 * TODO: Description of {@code OrderFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class OrderFacade extends GenericFacade<OrderViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: OrderService,
        entityState: OrderState) {
        super(entityService, entityState);
    }

}
