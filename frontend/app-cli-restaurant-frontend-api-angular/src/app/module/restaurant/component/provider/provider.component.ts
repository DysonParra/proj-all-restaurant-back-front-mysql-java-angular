/*
 * @fileoverview    {ProviderComponent}
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
import { ProviderViewModel } from '../../model/provider.model';

/**
 * TODO: Description of {@code ProviderComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-provider',
    templateUrl: './provider.component.html',
    standalone: false,
    styleUrls: ['./provider.component.css']
})
export class ProviderComponent extends GenericComponent<ProviderViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ProviderViewModel) {
        super(entityInstance);
    }

}
