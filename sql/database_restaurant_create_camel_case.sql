DROP DATABASE IF EXISTS restaurant;
CREATE DATABASE IF NOT EXISTS restaurant;
USE restaurant;

CREATE TABLE IF NOT EXISTS `Chef` (
    `chefId`                            BIGINT              NOT NULL,
    `chefName`                          VARCHAR(45)             NULL DEFAULT NULL,
    `salary`                            FLOAT                   NULL DEFAULT NULL,
    PRIMARY KEY (
        `chefId` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Meal` (
    `mealId`                            BIGINT              NOT NULL,
    `name`                              VARCHAR(45)             NULL DEFAULT NULL,
    `price`                             FLOAT                   NULL DEFAULT NULL,
    `chefId`                            BIGINT                  NULL DEFAULT NULL,
    PRIMARY KEY (
        `mealId` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Order` (
    `orderId`                           BIGINT              NOT NULL,
    `customerId`                        BIGINT                  NULL DEFAULT NULL,
    `mealId`                            BIGINT                  NULL DEFAULT NULL,
    PRIMARY KEY (
        `orderId` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Supplier` (
    `supplierId`                        BIGINT              NOT NULL,
    `supplierCity`                      VARCHAR(45)             NULL DEFAULT NULL,
    `supplierName`                      TEXT(100)               NULL DEFAULT NULL,
    `phone`                             INT(12)                 NULL DEFAULT NULL,
    `chefId`                            BIGINT                  NULL DEFAULT NULL,
    PRIMARY KEY (
        `supplierId` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Waiter` (
    `waiterId`                          BIGINT              NOT NULL,
    `waiterName`                        VARCHAR(45)             NULL DEFAULT NULL,
    `salary`                            FLOAT                   NULL DEFAULT NULL,
    `phone`                             INT(12)                 NULL DEFAULT NULL,
    PRIMARY KEY (
        `waiterId` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Customer` (
    `customerId`                        BIGINT              NOT NULL,
    `customerName`                      VARCHAR(45)             NULL DEFAULT NULL,
    `address`                           VARCHAR(45)             NULL DEFAULT NULL,
    `phone`                             INT(12)                 NULL DEFAULT NULL,
    `waiterId`                          BIGINT                  NULL DEFAULT NULL,
    PRIMARY KEY (
        `customerId` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Ingredient` (
    `ingredientId`                      BIGINT              NOT NULL,
    `ingredientName`                    VARCHAR(45)             NULL DEFAULT NULL,
    `description`                       VARCHAR(45)             NULL DEFAULT NULL,
    `mealId`                            BIGINT                  NULL DEFAULT NULL,
    PRIMARY KEY (
        `ingredientId` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Provider` (
    `providerId`                        BIGINT              NOT NULL,
    `supplierId`                        BIGINT                  NULL DEFAULT NULL,
    `ingredientId`                      BIGINT                  NULL DEFAULT NULL,
    PRIMARY KEY (
        `providerId` ASC
    )
);

-- ---------------------------- --
-- --------FOREIGN KEYS-------- --
-- ---------------------------- --

ALTER TABLE `Meal`
    ADD INDEX `fkMealChefIdIdx` (`chefId` ASC),
    ADD CONSTRAINT `fkMealChefId`
        FOREIGN KEY (`chefId`)
        REFERENCES `Chef` (`chefId`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `Supplier`
    ADD INDEX `fkSupplierChefIdIdx` (`chefId` ASC),
    ADD CONSTRAINT `fkSupplierChefId`
        FOREIGN KEY (`chefId`)
        REFERENCES `Chef` (`chefId`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `Customer`
    ADD INDEX `fkCustomerWaiterIdIdx` (`waiterId` ASC),
    ADD CONSTRAINT `fkCustomerWaiterId`
        FOREIGN KEY (`waiterId`)
        REFERENCES `Waiter` (`waiterId`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `Ingredient`
    ADD INDEX `fkIngredientMealIdIdx` (`mealId` ASC),
    ADD CONSTRAINT `fkIngredientMealId`
        FOREIGN KEY (`mealId`)
        REFERENCES `Meal` (`mealId`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `Order`
    ADD INDEX `fkOrderCustomerIdIdx` (`customerId` ASC),
    ADD CONSTRAINT `fkOrderCustomerId`
        FOREIGN KEY (`customerId`)
        REFERENCES `Customer` (`customerId`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD INDEX `fkOrderMealIdIdx` (`mealId` ASC),
    ADD CONSTRAINT `fkOrderMealId`
        FOREIGN KEY (`mealId`)
        REFERENCES `Meal` (`mealId`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `Provider`
    ADD INDEX `fkProviderSupplierIdIdx` (`supplierId` ASC),
    ADD CONSTRAINT `fkProviderSupplierId`
        FOREIGN KEY (`supplierId`)
        REFERENCES `Supplier` (`supplierId`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD INDEX `fkProviderIngredientIdIdx` (`ingredientId` ASC),
    ADD CONSTRAINT `fkProviderIngredientId`
        FOREIGN KEY (`ingredientId`)
        REFERENCES `Ingredient` (`ingredientId`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

