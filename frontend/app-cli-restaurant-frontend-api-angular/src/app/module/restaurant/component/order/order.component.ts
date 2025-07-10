/*
 * @overview        {OrderComponent}
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
import { GenericComponent } from '@app/module/essential/component/generic.component';
import { OrderViewModel } from '../../model/order.model';

/**
 * TODO: Description of {@code OrderComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    standalone: false,
    styleUrls: ['./order.component.css']
})
export class OrderComponent extends GenericComponent<OrderViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: OrderViewModel) {
        super(entityInstance);
    }

}
