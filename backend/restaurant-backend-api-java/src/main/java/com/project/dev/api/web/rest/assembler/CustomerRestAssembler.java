/*
 * @fileoverview    {CustomerRestAssembler}
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
package com.project.dev.api.web.rest.assembler;

import com.project.dev.api.dto.CustomerDTO;
import com.project.dev.api.web.rest.CustomerRest;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

/**
 * TODO: Definición de {@code CustomerRestAssembler}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Component
public class CustomerRestAssembler implements RepresentationModelAssembler<CustomerDTO, EntityModel<CustomerDTO>> {

    /**
     * Convierte un DTO en un modelo.
     *
     * @param entityDTO DTO a convertir.
     * @return el modelo correspondiente al DTO:
     */
    @Override
    public EntityModel<CustomerDTO> toModel(CustomerDTO entityDTO) {
        return new EntityModel<>(entityDTO,
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(CustomerRest.class).getEntity(String.valueOf(entityDTO.getIntCustomerId()))).withSelfRel(),
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(CustomerRest.class).getAllEntities()).withRel("Customer"));
    }
}
