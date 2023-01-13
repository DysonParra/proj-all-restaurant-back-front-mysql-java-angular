DROP DATABASE IF EXISTS restaurant;
CREATE DATABASE IF NOT EXISTS restaurant;
USE restaurant;

CREATE TABLE IF NOT EXISTS `chef` (
    `chef_id`                           BIGINT              NOT NULL,
    `chef_name`                         VARCHAR(45)             NULL DEFAULT NULL,
    `salary`                            FLOAT                   NULL DEFAULT NULL,
    PRIMARY KEY (
        `chef_id` ASC
    )
);

CREATE TABLE IF NOT EXISTS `meal` (
    `meal_id`                           BIGINT              NOT NULL,
    `name`                              VARCHAR(45)             NULL DEFAULT NULL,
    `price`                             FLOAT                   NULL DEFAULT NULL,
    `chef_id`                           BIGINT                  NULL DEFAULT NULL,
    PRIMARY KEY (
        `meal_id` ASC
    )
);

CREATE TABLE IF NOT EXISTS `order` (
    `order_id`                          BIGINT              NOT NULL,
    `customer_id`                       BIGINT                  NULL DEFAULT NULL,
    `meal_id`                           BIGINT                  NULL DEFAULT NULL,
    PRIMARY KEY (
        `order_id` ASC
    )
);

CREATE TABLE IF NOT EXISTS `supplier` (
    `supplier_id`                       BIGINT              NOT NULL,
    `supplier_city`                     VARCHAR(45)             NULL DEFAULT NULL,
    `supplier_name`                     TEXT(100)               NULL DEFAULT NULL,
    `phone`                             INT(12)                 NULL DEFAULT NULL,
    `chef_id`                           BIGINT                  NULL DEFAULT NULL,
    PRIMARY KEY (
        `supplier_id` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Waiter` (
    `waiter_id`                         BIGINT              NOT NULL,
    `waiter_name`                       VARCHAR(45)             NULL DEFAULT NULL,
    `salary`                            FLOAT                   NULL DEFAULT NULL,
    `phone`                             INT(12)                 NULL DEFAULT NULL,
    PRIMARY KEY (
        `waiter_id` ASC
    )
);

CREATE TABLE IF NOT EXISTS `customer` (
    `customer_id`                       BIGINT              NOT NULL,
    `customer_name`                     VARCHAR(45)             NULL DEFAULT NULL,
    `address`                           VARCHAR(45)             NULL DEFAULT NULL,
    `phone`                             INT(12)                 NULL DEFAULT NULL,
    `waiter_id`                         BIGINT                  NULL DEFAULT NULL,
    PRIMARY KEY (
        `customer_id` ASC
    )
);

CREATE TABLE IF NOT EXISTS `ingredient` (
    `ingredient_id`                     BIGINT              NOT NULL,
    `ingredient_name`                   VARCHAR(45)             NULL DEFAULT NULL,
    `description`                       VARCHAR(45)             NULL DEFAULT NULL,
    `meal_id`                           BIGINT                  NULL DEFAULT NULL,
    PRIMARY KEY (
        `ingredient_id` ASC
    )
);

CREATE TABLE IF NOT EXISTS `provider` (
    `provider_id`                       BIGINT              NOT NULL,
    `supplier_id`                       BIGINT                  NULL DEFAULT NULL,
    `ingredient_id`                     BIGINT                  NULL DEFAULT NULL,
    PRIMARY KEY (
        `provider_id` ASC
    )
);

-- ---------------------------- --
-- --------FOREIGN KEYS-------- --
-- ---------------------------- --

ALTER TABLE `meal`
    ADD INDEX `fk_meal_chef_id_idx` (`chef_id` ASC),
    ADD CONSTRAINT `fk_meal_chef_id`
        FOREIGN KEY (`chef_id`)
        REFERENCES `chef` (`chef_id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `supplier`
    ADD INDEX `fk_supplier_chef_id_idx` (`chef_id` ASC),
    ADD CONSTRAINT `fk_supplier_chef_id`
        FOREIGN KEY (`chef_id`)
        REFERENCES `chef` (`chef_id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `customer`
    ADD INDEX `fk_customer_waiter_id_idx` (`waiter_id` ASC),
    ADD CONSTRAINT `fk_customer_waiter_id`
        FOREIGN KEY (`waiter_id`)
        REFERENCES `waiter` (`waiter_id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `ingredient`
    ADD INDEX `fk_ingredient_meal_id_idx` (`meal_id` ASC),
    ADD CONSTRAINT `fk_ingredient_meal_id`
        FOREIGN KEY (`meal_id`)
        REFERENCES `meal` (`meal_id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `order`
    ADD INDEX `fk_order_customer_id_idx` (`customer_id` ASC),
    ADD CONSTRAINT `fk_order_customer_id`
        FOREIGN KEY (`customer_id`)
        REFERENCES `customer` (`customer_id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD INDEX `fk_order_meal_id_idx` (`meal_id` ASC),
    ADD CONSTRAINT `fk_order_meal_id`
        FOREIGN KEY (`meal_id`)
        REFERENCES `meal` (`meal_id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `provider`
    ADD INDEX `fk_provider_supplier_id_idx` (`supplier_id` ASC),
    ADD CONSTRAINT `fk_provider_supplier_id`
        FOREIGN KEY (`supplier_id`)
        REFERENCES `supplier` (`supplier_id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD INDEX `fk_provider_ingredient_id_idx` (`ingredient_id` ASC),
    ADD CONSTRAINT `fk_provider_ingredient_id`
        FOREIGN KEY (`ingredient_id`)
        REFERENCES `ingredient` (`ingredient_id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

