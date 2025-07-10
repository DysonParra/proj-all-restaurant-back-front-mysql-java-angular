/*
 * @overview        {ProviderService}
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
import { GenericService } from '@app/module/essential/service/generic.service';
import { ProviderViewModel } from '../model/provider.model';

/**
 * TODO: Description of {@code ProviderService}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class ProviderService extends GenericService<ProviderViewModel> {

    //public apiUrl: string = `${this.apiServer.rules}/api/v1/provider/`;
    public apiUrl: string = `http://127.0.0.1:8080/api/v1/provider`;
    public dtoList: string = `providerDTOList`;

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ProviderViewModel) {
        super(entityInstance);
    }

}
