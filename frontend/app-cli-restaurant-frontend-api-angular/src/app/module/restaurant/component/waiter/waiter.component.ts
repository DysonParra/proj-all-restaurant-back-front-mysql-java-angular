/*
 * @overview        {WaiterComponent}
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
import { WaiterViewModel } from '../../model/waiter.model';

/**
 * TODO: Description of {@code WaiterComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-waiter',
    templateUrl: './waiter.component.html',
    standalone: false,
    styleUrls: ['./waiter.component.css']
})
export class WaiterComponent extends GenericComponent<WaiterViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: WaiterViewModel) {
        super(entityInstance);
    }

}
