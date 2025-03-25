/*
 * @fileoverview    {MealContainerComponent}
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
import { MealViewModel } from '../../model/meal.model';
import { MealFacade } from '../../facade/meal.facade';

/**
 * TODO: Description of {@code MealContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-meal-container',
    templateUrl: './meal-container.component.html',
    standalone: false,
    styleUrls: ['./meal-container.component.css']
})
export class MealContainerComponent extends GenericContainerComponent<MealViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: MealViewModel,
        entityFacade: MealFacade) {
        super(entityInstance, entityFacade);
    }

}
