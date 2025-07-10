/*
 * @overview        {MealFacade}
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
import { MealViewModel } from '../model/meal.model';
import { MealState } from '../state/meal.state';
import { MealService } from '../service/meal.service';

/**
 * TODO: Description of {@code MealFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class MealFacade extends GenericFacade<MealViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: MealService,
        entityState: MealState) {
        super(entityService, entityState);
    }

}
