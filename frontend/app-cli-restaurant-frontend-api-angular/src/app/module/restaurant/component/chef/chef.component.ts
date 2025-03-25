/*
 * @fileoverview    {ChefComponent}
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
import { ChefViewModel } from '../../model/chef.model';

/**
 * TODO: Description of {@code ChefComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-chef',
    templateUrl: './chef.component.html',
    standalone: false,
    styleUrls: ['./chef.component.css']
})
export class ChefComponent extends GenericComponent<ChefViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ChefViewModel) {
        super(entityInstance);
    }

}
