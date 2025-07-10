/*
 * @overview        {CustomerContainerComponent}
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
import { CustomerViewModel } from '../../model/customer.model';
import { CustomerFacade } from '../../facade/customer.facade';

/**
 * TODO: Description of {@code CustomerContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-customer-container',
    templateUrl: './customer-container.component.html',
    standalone: false,
    styleUrls: ['./customer-container.component.css']
})
export class CustomerContainerComponent extends GenericContainerComponent<CustomerViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: CustomerViewModel,
        entityFacade: CustomerFacade) {
        super(entityInstance, entityFacade);
    }

}
