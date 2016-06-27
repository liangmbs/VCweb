-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema eventapp
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `eventapp` ;

-- -----------------------------------------------------
-- Schema eventapp
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `eventapp` DEFAULT CHARACTER SET utf8 ;
USE `eventapp` ;

-- -----------------------------------------------------
-- Table `eventapp`.`User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `eventapp`.`User` ;

CREATE TABLE IF NOT EXISTS `eventapp`.`User` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(50) NULL,
  `user_email` VARCHAR(55) NULL,
  `last_name` VARCHAR(45) NULL,
  `first_name` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `verified` TINYINT(1) NULL DEFAULT 0,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `user_id_UNIQUE` (`user_id` ASC),
  UNIQUE INDEX `user_email_UNIQUE` (`user_email` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `eventapp`.`Organization`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `eventapp`.`Organization` ;

CREATE TABLE IF NOT EXISTS `eventapp`.`Organization` (
  `organization_id` INT NOT NULL AUTO_INCREMENT,
  `organization_name` VARCHAR(45) NULL,
  `organization_email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `verified` TINYINT(1) NULL DEFAULT 0,
  PRIMARY KEY (`organization_id`),
  UNIQUE INDEX `organization_id_UNIQUE` (`organization_id` ASC),
  UNIQUE INDEX `organization_email_UNIQUE` (`organization_email` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `eventapp`.`Division`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `eventapp`.`Division` ;

CREATE TABLE IF NOT EXISTS `eventapp`.`Division` (
  `division_id` INT NOT NULL AUTO_INCREMENT,
  `division_name` VARCHAR(45) NULL,
  `division_email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `verified` TINYINT(1) NULL DEFAULT 0,
  `Organization_organization_id` INT NOT NULL,
  PRIMARY KEY (`division_id`),
  UNIQUE INDEX `organization_id_UNIQUE` (`division_id` ASC),
  UNIQUE INDEX `organization_email_UNIQUE` (`division_email` ASC),
  INDEX `fk_Division_Organization_idx` (`Organization_organization_id` ASC),
  CONSTRAINT `fk_Division_Organization`
    FOREIGN KEY (`Organization_organization_id`)
    REFERENCES `eventapp`.`Organization` (`organization_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `eventapp`.`UserHasOrganization`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `eventapp`.`UserHasOrganization` ;

CREATE TABLE IF NOT EXISTS `eventapp`.`UserHasOrganization` (
  `User_user_id` INT NOT NULL,
  `Organization_organization_id` INT NOT NULL,
  PRIMARY KEY (`User_user_id`, `Organization_organization_id`),
  INDEX `fk_User_has_Organization_Organization1_idx` (`Organization_organization_id` ASC),
  INDEX `fk_User_has_Organization_User1_idx` (`User_user_id` ASC),
  CONSTRAINT `fk_User_has_Organization_User1`
    FOREIGN KEY (`User_user_id`)
    REFERENCES `eventapp`.`User` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_User_has_Organization_Organization1`
    FOREIGN KEY (`Organization_organization_id`)
    REFERENCES `eventapp`.`Organization` (`organization_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `eventapp`.`UserManageDivision`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `eventapp`.`UserManageDivision` ;

CREATE TABLE IF NOT EXISTS `eventapp`.`UserManageDivision` (
  `User_user_id` INT NOT NULL,
  `Division_division_id` INT NOT NULL,
  PRIMARY KEY (`User_user_id`, `Division_division_id`),
  INDEX `fk_User_has_Division_Division1_idx` (`Division_division_id` ASC),
  INDEX `fk_User_has_Division_User1_idx` (`User_user_id` ASC),
  CONSTRAINT `fk_User_has_Division_User1`
    FOREIGN KEY (`User_user_id`)
    REFERENCES `eventapp`.`User` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_User_has_Division_Division1`
    FOREIGN KEY (`Division_division_id`)
    REFERENCES `eventapp`.`Division` (`division_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
