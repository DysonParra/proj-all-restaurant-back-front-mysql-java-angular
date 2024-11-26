/*
 * @fileoverview    {Provider}
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
package com.project.dev.api.domain;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * TODO: Description of {@code Provider}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Entity
@Table(name = "\"Provider\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Provider implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intProviderId;
    @JoinColumn(name = "intIngredientId", referencedColumnName = "intIngredientId")
    private Long intIngredientId;
    @JoinColumn(name = "intSupplierId", referencedColumnName = "intSupplierId")
    private Long intSupplierId;

}
