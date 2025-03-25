/*
 * @fileoverview    {CustomerComponent}
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
import { CustomerViewModel } from '../../model/customer.model';

/**
 * TODO: Description of {@code CustomerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    standalone: false,
    styleUrls: ['./customer.component.css']
})
export class CustomerComponent extends GenericComponent<CustomerViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: CustomerViewModel) {
        super(entityInstance);
    }

}
