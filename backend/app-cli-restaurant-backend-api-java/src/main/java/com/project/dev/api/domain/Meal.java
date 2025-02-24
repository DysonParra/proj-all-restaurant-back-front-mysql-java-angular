/*
 * @fileoverview    {Meal}
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
 * TODO: Description of {@code Meal}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Entity
@Table(name = "\"Meal\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Meal implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intMealId;
    @Column(length = 45)
    private String strName;
    @Column(precision = 12, scale = 0)
    private Float fltPrice;
    @JoinColumn(name = "intChefId", referencedColumnName = "intChefId")
    private Long intChefId;

}
