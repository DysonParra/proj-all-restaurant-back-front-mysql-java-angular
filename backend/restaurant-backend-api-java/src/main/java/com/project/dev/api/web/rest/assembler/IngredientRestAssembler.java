/*
 * @fileoverview    {IngredientRestAssembler}
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

import com.project.dev.api.dto.IngredientDTO;
import com.project.dev.api.web.rest.IngredientRest;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

/**
 * TODO: Definición de {@code IngredientRestAssembler}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Component
public class IngredientRestAssembler implements RepresentationModelAssembler<IngredientDTO, EntityModel<IngredientDTO>> {

    /**
     * Convierte un DTO en un modelo.
     *
     * @param entityDTO DTO a convertir.
     * @return el modelo correspondiente al DTO:
     */
    @Override
    public EntityModel<IngredientDTO> toModel(IngredientDTO entityDTO) {
        return new EntityModel<>(entityDTO,
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(IngredientRest.class).getEntity(String.valueOf(entityDTO.getIntIngredientId()))).withSelfRel(),
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(IngredientRest.class).getAllEntities()).withRel("Ingredient"));
    }
}
