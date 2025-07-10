/*
 * @overview        {CustomerFacade}
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
import { CustomerViewModel } from '../model/customer.model';
import { CustomerState } from '../state/customer.state';
import { CustomerService } from '../service/customer.service';

/**
 * TODO: Description of {@code CustomerFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class CustomerFacade extends GenericFacade<CustomerViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: CustomerService,
        entityState: CustomerState) {
        super(entityService, entityState);
    }

}
