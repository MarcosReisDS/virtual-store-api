USE virtual_store;

CREATE TABLE `users` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`profile` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`name` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`surname` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`mail` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`password` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
;

CREATE TABLE `addresses` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`user_id` INT(10) NULL DEFAULT NULL,
	`zipcode` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`name` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`number` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	PRIMARY KEY (`id`) USING BTREE,
	INDEX `user_id` (`user_id`) USING BTREE,
	CONSTRAINT `addresses_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE NO ACTION ON DELETE NO ACTION
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
;

CREATE TABLE `wallets` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`user_id` INT(10) NULL DEFAULT NULL,
	`number` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`name` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`security` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`date` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	PRIMARY KEY (`id`) USING BTREE,
	INDEX `user_id` (`user_id`) USING BTREE,
	CONSTRAINT `wallets_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE NO ACTION ON DELETE NO ACTION
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
;

CREATE TABLE `cart` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`user_id` INT(10) NULL DEFAULT NULL,
	`image` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`name` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`price` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`quantity` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`type` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`size` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`color` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	PRIMARY KEY (`id`) USING BTREE,
	INDEX `user_id` (`user_id`) USING BTREE,
	CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE NO ACTION ON DELETE NO ACTION
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
;

CREATE TABLE `products` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`image` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`name` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`description` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`price` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`quantity` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`type` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
;

CREATE TABLE `sizes` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`product_id` INT(10) NULL DEFAULT NULL,
	`size` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	PRIMARY KEY (`id`) USING BTREE,
	INDEX `product_id` (`product_id`) USING BTREE,
	CONSTRAINT `sizes_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON UPDATE NO ACTION ON DELETE NO ACTION
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
;

CREATE TABLE `colors` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`product_id` INT(10) NULL DEFAULT NULL,
	`name` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`value` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	PRIMARY KEY (`id`) USING BTREE,
	INDEX `product_id` (`product_id`) USING BTREE,
	CONSTRAINT `colors_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON UPDATE NO ACTION ON DELETE NO ACTION
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
;