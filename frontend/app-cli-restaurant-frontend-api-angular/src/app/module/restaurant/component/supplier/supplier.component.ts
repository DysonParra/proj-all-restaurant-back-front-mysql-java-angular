/*
 * @overview        {SupplierComponent}
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
import { SupplierViewModel } from '../../model/supplier.model';

/**
 * TODO: Description of {@code SupplierComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-supplier',
    templateUrl: './supplier.component.html',
    standalone: false,
    styleUrls: ['./supplier.component.css']
})
export class SupplierComponent extends GenericComponent<SupplierViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: SupplierViewModel) {
        super(entityInstance);
    }

}
