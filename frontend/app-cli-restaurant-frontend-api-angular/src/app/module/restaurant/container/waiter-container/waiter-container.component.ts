/*
 * @fileoverview    {WaiterContainerComponent}
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
import { WaiterViewModel } from '../../model/waiter.model';
import { WaiterFacade } from '../../facade/waiter.facade';

/**
 * TODO: Description of {@code WaiterContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-waiter-container',
    templateUrl: './waiter-container.component.html',
    standalone: false,
    styleUrls: ['./waiter-container.component.css']
})
export class WaiterContainerComponent extends GenericContainerComponent<WaiterViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: WaiterViewModel,
        entityFacade: WaiterFacade) {
        super(entityInstance, entityFacade);
    }

}
