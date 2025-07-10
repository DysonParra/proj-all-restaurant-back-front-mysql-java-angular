/*
 * @overview        {ChefFacade}
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
import { ChefViewModel } from '../model/chef.model';
import { ChefState } from '../state/chef.state';
import { ChefService } from '../service/chef.service';

/**
 * TODO: Description of {@code ChefFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class ChefFacade extends GenericFacade<ChefViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: ChefService,
        entityState: ChefState) {
        super(entityService, entityState);
    }

}
