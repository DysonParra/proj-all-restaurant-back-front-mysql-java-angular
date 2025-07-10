/*
 * @overview        {IngredientFacade}
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
import { IngredientViewModel } from '../model/ingredient.model';
import { IngredientState } from '../state/ingredient.state';
import { IngredientService } from '../service/ingredient.service';

/**
 * TODO: Description of {@code IngredientFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class IngredientFacade extends GenericFacade<IngredientViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: IngredientService,
        entityState: IngredientState) {
        super(entityService, entityState);
    }

}
