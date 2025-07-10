/*
 * @overview        {IngredientContainerComponent}
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
import { IngredientViewModel } from '../../model/ingredient.model';
import { IngredientFacade } from '../../facade/ingredient.facade';

/**
 * TODO: Description of {@code IngredientContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-ingredient-container',
    templateUrl: './ingredient-container.component.html',
    standalone: false,
    styleUrls: ['./ingredient-container.component.css']
})
export class IngredientContainerComponent extends GenericContainerComponent<IngredientViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: IngredientViewModel,
        entityFacade: IngredientFacade) {
        super(entityInstance, entityFacade);
    }

}
