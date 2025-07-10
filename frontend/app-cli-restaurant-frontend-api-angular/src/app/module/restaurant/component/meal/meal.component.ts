/*
 * @overview        {MealComponent}
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
import { MealViewModel } from '../../model/meal.model';

/**
 * TODO: Description of {@code MealComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-meal',
    templateUrl: './meal.component.html',
    standalone: false,
    styleUrls: ['./meal.component.css']
})
export class MealComponent extends GenericComponent<MealViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: MealViewModel) {
        super(entityInstance);
    }

}
