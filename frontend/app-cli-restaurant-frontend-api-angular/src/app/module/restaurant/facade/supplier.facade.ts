/*
 * @fileoverview    {SupplierFacade}
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
import { SupplierViewModel } from '../model/supplier.model';
import { SupplierState } from '../state/supplier.state';
import { SupplierService } from '../service/supplier.service';

/**
 * TODO: Description of {@code SupplierFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class SupplierFacade extends GenericFacade<SupplierViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: SupplierService,
        entityState: SupplierState) {
        super(entityService, entityState);
    }

}
