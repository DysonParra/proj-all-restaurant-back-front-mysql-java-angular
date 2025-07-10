/*
 * @overview        {ProviderFacade}
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
import { ProviderViewModel } from '../model/provider.model';
import { ProviderState } from '../state/provider.state';
import { ProviderService } from '../service/provider.service';

/**
 * TODO: Description of {@code ProviderFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class ProviderFacade extends GenericFacade<ProviderViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: ProviderService,
        entityState: ProviderState) {
        super(entityService, entityState);
    }

}
