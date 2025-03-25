/*
 * @fileoverview    {WaiterFacade}
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
import { WaiterViewModel } from '../model/waiter.model';
import { WaiterState } from '../state/waiter.state';
import { WaiterService } from '../service/waiter.service';

/**
 * TODO: Description of {@code WaiterFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class WaiterFacade extends GenericFacade<WaiterViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: WaiterService,
        entityState: WaiterState) {
        super(entityService, entityState);
    }

}
