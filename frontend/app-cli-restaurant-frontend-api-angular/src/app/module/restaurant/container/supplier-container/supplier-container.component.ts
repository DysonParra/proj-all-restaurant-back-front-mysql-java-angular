/*
 * @fileoverview    {SupplierContainerComponent}
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
import { SupplierViewModel } from '../../model/supplier.model';
import { SupplierFacade } from '../../facade/supplier.facade';

/**
 * TODO: Description of {@code SupplierContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-supplier-container',
    templateUrl: './supplier-container.component.html',
    standalone: false,
    styleUrls: ['./supplier-container.component.css']
})
export class SupplierContainerComponent extends GenericContainerComponent<SupplierViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: SupplierViewModel,
        entityFacade: SupplierFacade) {
        super(entityInstance, entityFacade);
    }

}
