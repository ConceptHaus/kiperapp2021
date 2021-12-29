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

USE `kip3r_web`;

/*Table structure for table `cat_prov_eu` */

DROP TABLE IF EXISTS `cat_prov_eu`;

CREATE TABLE `cat_prov_eu` (
  `idprovEU` int(5) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Estatus` binary(1) DEFAULT NULL,
  `idPais` int(3) DEFAULT 2,
  PRIMARY KEY (`idprovEU`),
  KEY `FK_idPais` (`idPais`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `cat_prov_eu` */

insert  into `cat_prov_eu`(`idprovEU`,`nombre`,`Estatus`,`idPais`) values 
(1,'Alabama',NULL,2),
(2,'Alaska',NULL,2),
(3,'Arizona',NULL,2),
(4,'Arkansas',NULL,2),
(5,'California',NULL,2),
(6,'Carolina del Norte',NULL,2),
(7,'Carolina del Sur',NULL,2),
(8,'Colorado',NULL,2),
(9,'Connecticut',NULL,2),
(10,'Dakota del Norte',NULL,2),
(11,'Dakota del Sur',NULL,2),
(12,'Delaware',NULL,2),
(13,'Florida',NULL,2),
(14,'Georgia',NULL,2),
(15,'Hawai',NULL,2),
(16,'Idaho',NULL,2),
(17,'Illinois',NULL,2),
(18,'Indiana',NULL,2),
(19,'Iowa',NULL,2),
(20,'Kansas',NULL,2),
(21,'Kentucky',NULL,2),
(22,'Luisiana',NULL,2),
(23,'Maine',NULL,2),
(24,'Maryland',NULL,2),
(25,'Massachusetts',NULL,2),
(26,'Michigan',NULL,2),
(27,'Minnesota',NULL,2),
(28,'Misisipi',NULL,2),
(29,'Misuri',NULL,2),
(30,'Montana',NULL,2),
(31,'Nebraska',NULL,2),
(32,'Nevada',NULL,2),
(33,'Nueva Jersey',NULL,2),
(34,'Nueva York',NULL,2),
(35,'Nuevo Hampshire',NULL,2),
(36,'Nuevo Mexico',NULL,2),
(37,'Ohio',NULL,2),
(38,'Oklahoma',NULL,2),
(39,'Oregon',NULL,2),
(40,'Pensilvania',NULL,2),
(41,'Rhode Island',NULL,2),
(42,'Tennessee',NULL,2),
(43,'Texas',NULL,2),
(44,'Utah',NULL,2),
(45,'Vermont',NULL,2),
(46,'Virginia',NULL,2),
(47,'Virginia Occidental',NULL,2),
(48,'Washington',NULL,2),
(49,'Wisconsin',NULL,2),
(50,'Wyoming',NULL,2),
(51,NULL,NULL,2);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
