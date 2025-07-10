/*
 * @overview        {ProviderContainerComponent}
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
import { ProviderViewModel } from '../../model/provider.model';
import { ProviderFacade } from '../../facade/provider.facade';

/**
 * TODO: Description of {@code ProviderContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-provider-container',
    templateUrl: './provider-container.component.html',
    standalone: false,
    styleUrls: ['./provider-container.component.css']
})
export class ProviderContainerComponent extends GenericContainerComponent<ProviderViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ProviderViewModel,
        entityFacade: ProviderFacade) {
        super(entityInstance, entityFacade);
    }

}
