/*
SQLyog Community v13.1.7 (64 bit)
MySQL - 10.4.21-MariaDB : Database - kip3r_web
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`kip3r_web` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;




/*Table structure for table `cat_prov_mx` */

DROP TABLE IF EXISTS `cat_prov_mx`;

CREATE TABLE `cat_prov_mx` (
  `idprovmx` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL,
  `idPais` int(11) NOT NULL DEFAULT 1,
  PRIMARY KEY (`idprovmx`),
  KEY `FK_idPais` (`idPais`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `cat_prov_mx` */

insert  into `cat_prov_mx`(`idprovmx`,`nombre`,`status`,`idPais`) values 
(1,'Baja California',1,1),
(2,'Aguascalientes',1,1),
(3,'Baja California Sur',1,1),
(4,'Campeche',1,1),
(5,'Ciudad de Mèxico',1,1),
(6,'Coahuila de Zaragoza',1,1),
(7,'Colima',1,1),
(8,'Chiapas',1,1),
(9,'Chihuahua',1,1),
(10,'Durango',1,1),
(11,'Estado de Mèxico',1,1),
(12,'Guanajuato',1,1),
(13,'Guerrero',1,1),
(14,'Hidalgo',1,1),
(15,'Jalisco',1,1),
(16,'Michoacàn de Ocampo',1,1),
(17,'Morelos',1,1),
(18,'Nayarit',1,1),
(19,'Nuevo Leòn',1,1),
(20,'Oaxaca',1,1),
(21,'Puebla',1,1),
(22,'Querètaro',1,1),
(23,'Quintana Roo',1,1),
(24,'San Luis Potosi',1,1),
(25,'Sinaloa',1,1),
(26,'Sonora',1,1),
(27,'Tabasco',1,1),
(28,'Tamaulipas',1,1),
(29,'Tlaxcala',1,1),
(30,'Veracruz de Ignacio de la Llave',1,1),
(31,'Yucatàn',1,1),
(32,'Zacatecas',1,1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
