SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

DROP SCHEMA IF EXISTS `noticias` ;
CREATE SCHEMA IF NOT EXISTS `noticias` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `noticias` ;

-- -----------------------------------------------------
-- Table `noticias`.`noticia`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `noticias`.`noticia` (
  `id_noticia` INT NOT NULL AUTO_INCREMENT ,
  `titulo_noticia` VARCHAR(100) NOT NULL ,
  `texto_noticia` TEXT NOT NULL ,
  `data_noticia` TIMESTAMP NOT NULL DEFAULT current_timestamp ,
  PRIMARY KEY (`id_noticia`) )
ENGINE = InnoDB;

USE `noticias` ;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
