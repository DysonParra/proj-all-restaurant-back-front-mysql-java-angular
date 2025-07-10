/*
 * @overview        {IngredientComponent}
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
import { IngredientViewModel } from '../../model/ingredient.model';

/**
 * TODO: Description of {@code IngredientComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-ingredient',
    templateUrl: './ingredient.component.html',
    standalone: false,
    styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent extends GenericComponent<IngredientViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: IngredientViewModel) {
        super(entityInstance);
    }

}
