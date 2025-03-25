/*
 * @fileoverview    {ChefContainerComponent}
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
import { ChefViewModel } from '../../model/chef.model';
import { ChefFacade } from '../../facade/chef.facade';

/**
 * TODO: Description of {@code ChefContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-chef-container',
    templateUrl: './chef-container.component.html',
    standalone: false,
    styleUrls: ['./chef-container.component.css']
})
export class ChefContainerComponent extends GenericContainerComponent<ChefViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ChefViewModel,
        entityFacade: ChefFacade) {
        super(entityInstance, entityFacade);
    }

}
