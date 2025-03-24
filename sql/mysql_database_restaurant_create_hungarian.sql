DROP DATABASE IF EXISTS `restaurant`;
CREATE DATABASE IF NOT EXISTS `restaurant`;
USE `restaurant`;

CREATE TABLE IF NOT EXISTS `chef` (
    `intChefId`                         BIGINT              NOT NULL,
    `strChefName`                       VARCHAR(45)             NULL DEFAULT NULL,
    `fltSalary`                         FLOAT                   NULL DEFAULT NULL,
    PRIMARY KEY (`intChefId` ASC)
);

CREATE TABLE IF NOT EXISTS `meal` (
    `intMealId`                         BIGINT              NOT NULL,
    `strName`                           VARCHAR(45)             NULL DEFAULT NULL,
    `fltPrice`                          FLOAT                   NULL DEFAULT NULL,
    `intChefId`                         BIGINT                  NULL DEFAULT NULL,
    PRIMARY KEY (`intMealId` ASC)
);

CREATE TABLE IF NOT EXISTS `order` (
    `intOrderId`                        BIGINT              NOT NULL,
    `intCustomerId`                     BIGINT                  NULL DEFAULT NULL,
    `intMealId`                         BIGINT                  NULL DEFAULT NULL,
    PRIMARY KEY (`intOrderId` ASC)
);

CREATE TABLE IF NOT EXISTS `supplier` (
    `intSupplierId`                     BIGINT              NOT NULL,
    `strSupplierCity`                   VARCHAR(45)             NULL DEFAULT NULL,
    `txtSupplierName`                   TEXT(100)               NULL DEFAULT NULL,
    `intPhone`                          INT(12)                 NULL DEFAULT NULL,
    `intChefId`                         BIGINT                  NULL DEFAULT NULL,
    PRIMARY KEY (`intSupplierId` ASC)
);

CREATE TABLE IF NOT EXISTS `waiter` (
    `intWaiterId`                       BIGINT              NOT NULL,
    `strWaiterName`                     VARCHAR(45)             NULL DEFAULT NULL,
    `fltSalary`                         FLOAT                   NULL DEFAULT NULL,
    `intPhone`                          INT(12)                 NULL DEFAULT NULL,
    PRIMARY KEY (`intWaiterId` ASC)
);

CREATE TABLE IF NOT EXISTS `customer` (
    `intCustomerId`                     BIGINT              NOT NULL,
    `strCustomerName`                   VARCHAR(45)             NULL DEFAULT NULL,
    `strAddress`                        VARCHAR(45)             NULL DEFAULT NULL,
    `intPhone`                          INT(12)                 NULL DEFAULT NULL,
    `intWaiterId`                       BIGINT                  NULL DEFAULT NULL,
    PRIMARY KEY (`intCustomerId` ASC)
);

CREATE TABLE IF NOT EXISTS `ingredient` (
    `intIngredientId`                   BIGINT              NOT NULL,
    `strIngredientName`                 VARCHAR(45)             NULL DEFAULT NULL,
    `strDescription`                    VARCHAR(45)             NULL DEFAULT NULL,
    `intMealId`                         BIGINT                  NULL DEFAULT NULL,
    PRIMARY KEY (`intIngredientId` ASC)
);

CREATE TABLE IF NOT EXISTS `provider` (
    `intProviderId`                     BIGINT              NOT NULL,
    `intSupplierId`                     BIGINT                  NULL DEFAULT NULL,
    `intIngredientId`                   BIGINT                  NULL DEFAULT NULL,
    PRIMARY KEY (`intProviderId` ASC)
);

-- ---------------------------- --
-- --------FOREIGN KEYS-------- --
-- ---------------------------- --

ALTER TABLE `Meal`
    ADD INDEX `fkMealChefIdIdx` (`intChefId` ASC),
    ADD CONSTRAINT `fkMealChefId`
        FOREIGN KEY (`intChefId`)
        REFERENCES `Chef` (`intChefId`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `Supplier`
    ADD INDEX `fkSupplierChefIdIdx` (`intChefId` ASC),
    ADD CONSTRAINT `fkSupplierChefId`
        FOREIGN KEY (`intChefId`)
        REFERENCES `Chef` (`intChefId`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `Customer`
    ADD INDEX `fkCustomerWaiterIdIdx` (`intWaiterId` ASC),
    ADD CONSTRAINT `fkCustomerWaiterId`
        FOREIGN KEY (`intWaiterId`)
        REFERENCES `Waiter` (`intWaiterId`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `Ingredient`
    ADD INDEX `fkIngredientMealIdIdx` (`intMealId` ASC),
    ADD CONSTRAINT `fkIngredientMealId`
        FOREIGN KEY (`intMealId`)
        REFERENCES `Meal` (`intMealId`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `Order`
    ADD INDEX `fkOrderCustomerIdIdx` (`intCustomerId` ASC),
    ADD CONSTRAINT `fkOrderCustomerId`
        FOREIGN KEY (`intCustomerId`)
        REFERENCES `Customer` (`intCustomerId`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD INDEX `fkOrderMealIdIdx` (`intMealId` ASC),
    ADD CONSTRAINT `fkOrderMealId`
        FOREIGN KEY (`intMealId`)
        REFERENCES `Meal` (`intMealId`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `Provider`
    ADD INDEX `fkProviderSupplierIdIdx` (`intSupplierId` ASC),
    ADD CONSTRAINT `fkProviderSupplierId`
        FOREIGN KEY (`intSupplierId`)
        REFERENCES `Supplier` (`intSupplierId`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD INDEX `fkProviderIngredientIdIdx` (`intIngredientId` ASC),
    ADD CONSTRAINT `fkProviderIngredientId`
        FOREIGN KEY (`intIngredientId`)
        REFERENCES `Ingredient` (`intIngredientId`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

