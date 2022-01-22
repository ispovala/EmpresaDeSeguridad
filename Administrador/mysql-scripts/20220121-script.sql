CREATE DATABASE  IF NOT EXISTS `seguridadseproamerica` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `seguridadseproamerica`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: seguridadseproamerica
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `arma`
--

DROP TABLE IF EXISTS `arma`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `arma` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_date` date DEFAULT NULL,
  `deleted_date` date DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL,
  `modified_date` date NOT NULL,
  `observaciones` longtext NOT NULL,
  `ruta_foto` varchar(255) NOT NULL,
  `calibre_id` bigint DEFAULT NULL,
  `color_id` bigint DEFAULT NULL,
  `created_by_id` bigint DEFAULT NULL,
  `marca_id` bigint DEFAULT NULL,
  `modified_by_id` bigint DEFAULT NULL,
  `tipo_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `arma_calibre_id_5ae6562f_fk_calibre_arma_id` (`calibre_id`),
  KEY `arma_color_id_47a185d6_fk_color_id` (`color_id`),
  KEY `arma_created_by_id_b2f5c7dd_fk_usuario_id` (`created_by_id`),
  KEY `arma_marca_id_2e75f3bc_fk_marca_id` (`marca_id`),
  KEY `arma_modified_by_id_9df1b333_fk_usuario_id` (`modified_by_id`),
  KEY `arma_tipo_id_62439c7a_fk_tipo_id` (`tipo_id`),
  CONSTRAINT `arma_calibre_id_5ae6562f_fk_calibre_arma_id` FOREIGN KEY (`calibre_id`) REFERENCES `calibre_arma` (`id`),
  CONSTRAINT `arma_color_id_47a185d6_fk_color_id` FOREIGN KEY (`color_id`) REFERENCES `color` (`id`),
  CONSTRAINT `arma_created_by_id_b2f5c7dd_fk_usuario_id` FOREIGN KEY (`created_by_id`) REFERENCES `usuario` (`id`),
  CONSTRAINT `arma_marca_id_2e75f3bc_fk_marca_id` FOREIGN KEY (`marca_id`) REFERENCES `marca` (`id`),
  CONSTRAINT `arma_modified_by_id_9df1b333_fk_usuario_id` FOREIGN KEY (`modified_by_id`) REFERENCES `usuario` (`id`),
  CONSTRAINT `arma_tipo_id_62439c7a_fk_tipo_id` FOREIGN KEY (`tipo_id`) REFERENCES `tipo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `arma`
--

LOCK TABLES `arma` WRITE;
/*!40000 ALTER TABLE `arma` DISABLE KEYS */;
INSERT INTO `arma` VALUES (1,'2021-12-27',NULL,0,'2021-12-27','Sin observaciones.','',1,1,NULL,9,NULL,9),(2,'2021-12-27',NULL,0,'2021-12-27','Con accesorios extras.','',2,5,NULL,7,NULL,7),(3,'2021-12-27',NULL,1,'2021-12-27','Perdida parcial.','',1,5,NULL,8,NULL,7),(4,'2022-01-20',NULL,1,'2022-01-20','Pérdida parcial por defecto.','',1,2,NULL,7,NULL,8);
/*!40000 ALTER TABLE `arma` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add content type',4,'add_contenttype'),(14,'Can change content type',4,'change_contenttype'),(15,'Can delete content type',4,'delete_contenttype'),(16,'Can view content type',4,'view_contenttype'),(17,'Can add session',5,'add_session'),(18,'Can change session',5,'change_session'),(19,'Can delete session',5,'delete_session'),(20,'Can view session',5,'view_session'),(21,'Can add cargo',6,'add_cargo'),(22,'Can change cargo',6,'change_cargo'),(23,'Can delete cargo',6,'delete_cargo'),(24,'Can view cargo',6,'view_cargo'),(25,'Can add persona',7,'add_persona'),(26,'Can change persona',7,'change_persona'),(27,'Can delete persona',7,'delete_persona'),(28,'Can view persona',7,'view_persona'),(29,'Can add rol',8,'add_rol'),(30,'Can change rol',8,'change_rol'),(31,'Can delete rol',8,'delete_rol'),(32,'Can view rol',8,'view_rol'),(33,'Can add tarjeta',9,'add_tarjeta'),(34,'Can change tarjeta',9,'change_tarjeta'),(35,'Can delete tarjeta',9,'delete_tarjeta'),(36,'Can view tarjeta',9,'view_tarjeta'),(37,'Can add usuario',10,'add_usuario'),(38,'Can change usuario',10,'change_usuario'),(39,'Can delete usuario',10,'delete_usuario'),(40,'Can view usuario',10,'view_usuario'),(41,'Can add candado satelital',11,'add_candadosatelital'),(42,'Can change candado satelital',11,'change_candadosatelital'),(43,'Can delete candado satelital',11,'delete_candadosatelital'),(44,'Can view candado satelital',11,'view_candadosatelital'),(45,'Can add vehiculo',12,'add_vehiculo'),(46,'Can change vehiculo',12,'change_vehiculo'),(47,'Can delete vehiculo',12,'delete_vehiculo'),(48,'Can view vehiculo',12,'view_vehiculo'),(49,'Can add color',13,'add_color'),(50,'Can change color',13,'change_color'),(51,'Can delete color',13,'delete_color'),(52,'Can view color',13,'view_color'),(53,'Can add marca vehiculo',14,'add_marcavehiculo'),(54,'Can change marca vehiculo',14,'change_marcavehiculo'),(55,'Can delete marca vehiculo',14,'delete_marcavehiculo'),(56,'Can view marca vehiculo',14,'view_marcavehiculo'),(57,'Can add tipo vehiculo',15,'add_tipovehiculo'),(58,'Can change tipo vehiculo',15,'change_tipovehiculo'),(59,'Can delete tipo vehiculo',15,'delete_tipovehiculo'),(60,'Can view tipo vehiculo',15,'view_tipovehiculo'),(61,'Can add marca candado satelital',16,'add_marcacandadosatelital'),(62,'Can change marca candado satelital',16,'change_marcacandadosatelital'),(63,'Can delete marca candado satelital',16,'delete_marcacandadosatelital'),(64,'Can view marca candado satelital',16,'view_marcacandadosatelital'),(65,'Can add tipo candado satelital',17,'add_tipocandadosatelital'),(66,'Can change tipo candado satelital',17,'change_tipocandadosatelital'),(67,'Can delete tipo candado satelital',17,'delete_tipocandadosatelital'),(68,'Can view tipo candado satelital',17,'view_tipocandadosatelital'),(69,'Can add marca',18,'add_marca'),(70,'Can change marca',18,'change_marca'),(71,'Can delete marca',18,'delete_marca'),(72,'Can view marca',18,'view_marca'),(73,'Can add tipo',19,'add_tipo'),(74,'Can change tipo',19,'change_tipo'),(75,'Can delete tipo',19,'delete_tipo'),(76,'Can view tipo',19,'view_tipo'),(77,'Can add calibre arma',20,'add_calibrearma'),(78,'Can change calibre arma',20,'change_calibrearma'),(79,'Can delete calibre arma',20,'delete_calibrearma'),(80,'Can view calibre arma',20,'view_calibrearma'),(81,'Can add arma',21,'add_arma'),(82,'Can change arma',21,'change_arma'),(83,'Can delete arma',21,'delete_arma'),(84,'Can view arma',21,'view_arma'),(85,'Can add modelo celular',22,'add_modelocelular'),(86,'Can change modelo celular',22,'change_modelocelular'),(87,'Can delete modelo celular',22,'delete_modelocelular'),(88,'Can view modelo celular',22,'view_modelocelular'),(89,'Can add celular',23,'add_celular'),(90,'Can change celular',23,'change_celular'),(91,'Can delete celular',23,'delete_celular'),(92,'Can view celular',23,'view_celular'),(93,'Can add operadora celular',24,'add_operadoracelular'),(94,'Can change operadora celular',24,'change_operadoracelular'),(95,'Can delete operadora celular',24,'delete_operadoracelular'),(96,'Can view operadora celular',24,'view_operadoracelular'),(97,'Can add modelo',25,'add_modelo'),(98,'Can change modelo',25,'change_modelo'),(99,'Can delete modelo',25,'delete_modelo'),(100,'Can view modelo',25,'view_modelo');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `calibre_arma`
--

DROP TABLE IF EXISTS `calibre_arma`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `calibre_arma` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `calibre_arma`
--

LOCK TABLES `calibre_arma` WRITE;
/*!40000 ALTER TABLE `calibre_arma` DISABLE KEYS */;
INSERT INTO `calibre_arma` VALUES (1,'9x19mm'),(2,'9mm');
/*!40000 ALTER TABLE `calibre_arma` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `candado_satelital`
--

DROP TABLE IF EXISTS `candado_satelital`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `candado_satelital` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `marca_id` bigint DEFAULT NULL,
  `tipo_id` bigint DEFAULT NULL,
  `color_id` bigint DEFAULT NULL,
  `created_by_id` bigint DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `deleted_date` date DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL,
  `modified_by_id` bigint DEFAULT NULL,
  `modified_date` date NOT NULL,
  `observaciones` longtext NOT NULL DEFAULT (_utf8mb3''),
  `ruta_foto` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `candado_satelital_created_by_id_66858514_fk_usuario_id` (`created_by_id`),
  KEY `candado_satelital_modified_by_id_2ef152c5_fk_usuario_id` (`modified_by_id`),
  KEY `candado_satelital_color_id_d4b35458` (`color_id`),
  KEY `candado_satelital_marca_id_6b160ee7` (`marca_id`),
  KEY `candado_satelital_tipo_id_38d23991` (`tipo_id`),
  CONSTRAINT `candado_satelital_color_id_d4b35458_fk_color_id` FOREIGN KEY (`color_id`) REFERENCES `color` (`id`),
  CONSTRAINT `candado_satelital_created_by_id_66858514_fk_usuario_id` FOREIGN KEY (`created_by_id`) REFERENCES `usuario` (`id`),
  CONSTRAINT `candado_satelital_marca_id_6b160ee7_fk_marca_id` FOREIGN KEY (`marca_id`) REFERENCES `marca` (`id`),
  CONSTRAINT `candado_satelital_modified_by_id_2ef152c5_fk_usuario_id` FOREIGN KEY (`modified_by_id`) REFERENCES `usuario` (`id`),
  CONSTRAINT `candado_satelital_tipo_id_38d23991_fk_tipo_id` FOREIGN KEY (`tipo_id`) REFERENCES `tipo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `candado_satelital`
--

LOCK TABLES `candado_satelital` WRITE;
/*!40000 ALTER TABLE `candado_satelital` DISABLE KEYS */;
INSERT INTO `candado_satelital` VALUES (1,4,2,3,NULL,'2021-12-20',NULL,0,NULL,'2021-12-20','Sin observaciones.',''),(2,3,2,3,NULL,'2021-12-20',NULL,1,NULL,'2021-12-20','Extraviado.',''),(3,3,2,1,NULL,'2021-12-22',NULL,1,NULL,'2021-12-22','Sin observaciones.',''),(4,3,1,5,NULL,'2021-12-22',NULL,0,NULL,'2021-12-22','Sin observaciones',''),(5,3,1,2,NULL,'2021-12-22',NULL,1,NULL,'2021-12-22','Sin observaciones',''),(6,4,2,1,NULL,'2022-01-20',NULL,1,NULL,'2022-01-20','Pérdida total.','');
/*!40000 ALTER TABLE `candado_satelital` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cargo`
--

DROP TABLE IF EXISTS `cargo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cargo` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `estado` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cargo`
--

LOCK TABLES `cargo` WRITE;
/*!40000 ALTER TABLE `cargo` DISABLE KEYS */;
/*!40000 ALTER TABLE `cargo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `celular`
--

DROP TABLE IF EXISTS `celular`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `celular` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_date` date DEFAULT NULL,
  `deleted_date` date DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL,
  `modified_date` date NOT NULL,
  `numero_contacto` varchar(10) NOT NULL,
  `observaciones` longtext NOT NULL,
  `ruta_foto` varchar(255) NOT NULL,
  `color_id` bigint DEFAULT NULL,
  `created_by_id` bigint DEFAULT NULL,
  `marca_id` bigint DEFAULT NULL,
  `modelo_id` bigint DEFAULT NULL,
  `modified_by_id` bigint DEFAULT NULL,
  `operadora_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `celular_color_id_fe15e299_fk_color_id` (`color_id`),
  KEY `celular_created_by_id_2c526c6c_fk_usuario_id` (`created_by_id`),
  KEY `celular_marca_id_12331004_fk_marca_id` (`marca_id`),
  KEY `celular_modified_by_id_3b1a3f60_fk_usuario_id` (`modified_by_id`),
  KEY `celular_operadora_id_478d4599_fk_operadora_celular_id` (`operadora_id`),
  KEY `celular_modelo_id_6f3eeda7_fk_modelo_id` (`modelo_id`),
  CONSTRAINT `celular_color_id_fe15e299_fk_color_id` FOREIGN KEY (`color_id`) REFERENCES `color` (`id`),
  CONSTRAINT `celular_created_by_id_2c526c6c_fk_usuario_id` FOREIGN KEY (`created_by_id`) REFERENCES `usuario` (`id`),
  CONSTRAINT `celular_marca_id_12331004_fk_marca_id` FOREIGN KEY (`marca_id`) REFERENCES `marca` (`id`),
  CONSTRAINT `celular_modelo_id_6f3eeda7_fk_modelo_id` FOREIGN KEY (`modelo_id`) REFERENCES `modelo` (`id`),
  CONSTRAINT `celular_modified_by_id_3b1a3f60_fk_usuario_id` FOREIGN KEY (`modified_by_id`) REFERENCES `usuario` (`id`),
  CONSTRAINT `celular_operadora_id_478d4599_fk_operadora_celular_id` FOREIGN KEY (`operadora_id`) REFERENCES `operadora_celular` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `celular`
--

LOCK TABLES `celular` WRITE;
/*!40000 ALTER TABLE `celular` DISABLE KEYS */;
INSERT INTO `celular` VALUES (1,'2021-12-27',NULL,0,'2021-12-27','0985989911','Sin observaciones.','',4,NULL,5,6,NULL,1),(2,'2021-12-27',NULL,0,'2021-12-27','0987854152','Sin observaciones.','',2,NULL,6,8,NULL,2),(3,'2021-12-27',NULL,0,'2021-12-27','0996568456','Sin observaciones.','',1,NULL,5,5,NULL,3),(4,'2021-12-27',NULL,0,'2021-12-27','0984516231','Sin observaciones.','',5,NULL,6,7,NULL,2),(5,'2021-12-27',NULL,1,'2021-12-27','0984516551','Accidente con perdida parcial. No se usará más por defectos mayores.','',2,NULL,6,7,NULL,1),(6,'2022-01-20',NULL,1,'2022-01-20','0984588231','Devolución por defecto.','',2,NULL,5,6,NULL,1);
/*!40000 ALTER TABLE `celular` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `color`
--

DROP TABLE IF EXISTS `color`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `color` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `color`
--

LOCK TABLES `color` WRITE;
/*!40000 ALTER TABLE `color` DISABLE KEYS */;
INSERT INTO `color` VALUES (1,'Negro'),(2,'Blanco'),(3,'Rojo'),(4,'Azul'),(5,'Gris'),(6,'Naranja'),(7,'Amarillo');
/*!40000 ALTER TABLE `color` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_usuario_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_usuario_id` FOREIGN KEY (`user_id`) REFERENCES `usuario` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2021-12-08 22:45:37.846060','1','Color object (1)',1,'[{\"added\": {}}]',13,1),(2,'2021-12-08 22:45:39.990389','2','Color object (2)',1,'[{\"added\": {}}]',13,1),(3,'2021-12-08 22:45:42.182094','3','Color object (3)',1,'[{\"added\": {}}]',13,1),(4,'2021-12-08 22:45:44.758907','4','Color object (4)',1,'[{\"added\": {}}]',13,1),(5,'2021-12-08 22:45:49.078540','5','Color object (5)',1,'[{\"added\": {}}]',13,1),(6,'2021-12-08 22:45:56.209149','1','MarcaVehiculo object (1)',1,'[{\"added\": {}}]',14,1),(7,'2021-12-08 22:47:30.594121','2','MarcaVehiculo object (2)',1,'[{\"added\": {}}]',14,1),(8,'2021-12-08 22:47:34.257513','3','MarcaVehiculo object (3)',1,'[{\"added\": {}}]',14,1),(9,'2021-12-08 22:47:37.517424','4','MarcaVehiculo object (4)',1,'[{\"added\": {}}]',14,1),(10,'2021-12-08 22:47:42.596976','5','MarcaVehiculo object (5)',1,'[{\"added\": {}}]',14,1),(11,'2021-12-08 22:47:45.595488','6','MarcaVehiculo object (6)',1,'[{\"added\": {}}]',14,1),(12,'2021-12-08 22:47:48.342434','7','MarcaVehiculo object (7)',1,'[{\"added\": {}}]',14,1),(13,'2021-12-08 22:47:51.734856','8','MarcaVehiculo object (8)',1,'[{\"added\": {}}]',14,1),(14,'2021-12-08 22:47:54.721140','9','MarcaVehiculo object (9)',1,'[{\"added\": {}}]',14,1),(15,'2021-12-08 22:48:01.374235','10','MarcaVehiculo object (10)',1,'[{\"added\": {}}]',14,1),(16,'2021-12-08 22:50:35.392180','1','TipoVehiculo object (1)',1,'[{\"added\": {}}]',15,1),(17,'2021-12-08 22:50:41.664121','2','TipoVehiculo object (2)',1,'[{\"added\": {}}]',15,1),(18,'2021-12-08 22:50:45.653396','3','TipoVehiculo object (3)',1,'[{\"added\": {}}]',15,1),(19,'2021-12-08 22:50:52.235647','4','TipoVehiculo object (4)',1,'[{\"added\": {}}]',15,1),(20,'2021-12-08 22:50:59.635208','5','TipoVehiculo object (5)',1,'[{\"added\": {}}]',15,1),(21,'2021-12-08 22:51:04.731324','6','TipoVehiculo object (6)',1,'[{\"added\": {}}]',15,1),(22,'2021-12-08 22:51:18.264503','7','TipoVehiculo object (7)',1,'[{\"added\": {}}]',15,1),(23,'2021-12-08 22:51:22.124236','8','TipoVehiculo object (8)',1,'[{\"added\": {}}]',15,1),(24,'2021-12-09 04:33:24.607457','1','TipoVehiculo object (1)',2,'[{\"changed\": {\"fields\": [\"Nombre\"]}}]',15,1),(25,'2021-12-09 04:33:28.751776','2','TipoVehiculo object (2)',2,'[{\"changed\": {\"fields\": [\"Nombre\"]}}]',15,1),(26,'2021-12-09 04:33:43.599084','6','TipoVehiculo object (6)',2,'[{\"changed\": {\"fields\": [\"Nombre\"]}}]',15,1),(27,'2021-12-09 04:33:48.172965','7','TipoVehiculo object (7)',2,'[{\"changed\": {\"fields\": [\"Nombre\"]}}]',15,1),(28,'2021-12-12 03:21:46.499840','1','MarcaCandadoSatelital object (1)',1,'[{\"added\": {}}]',16,1),(29,'2021-12-12 03:24:02.063205','1','MarcaCandadoSatelital object (1)',2,'[{\"changed\": {\"fields\": [\"Nombre\"]}}]',16,1),(30,'2021-12-12 03:32:18.998919','1','TipoCandadoSatelital object (1)',1,'[{\"added\": {}}]',17,1),(31,'2021-12-12 03:35:49.719375','6','Color object (6)',1,'[{\"added\": {}}]',13,1),(32,'2021-12-12 03:36:09.722086','7','Color object (7)',1,'[{\"added\": {}}]',13,1),(33,'2021-12-16 22:56:45.557221','1','Marca object (1)',1,'[{\"added\": {}}]',18,1),(34,'2021-12-16 22:58:35.215228','2','Marca object (2)',1,'[{\"added\": {}}]',18,1),(35,'2021-12-16 23:00:41.523118','3','Marca object (3)',1,'[{\"added\": {}}]',18,1),(36,'2021-12-16 23:04:18.915912','4','Marca object (4)',1,'[{\"added\": {}}]',18,1),(37,'2021-12-16 23:04:48.339769','5','Marca object (5)',1,'[{\"added\": {}}]',18,1),(38,'2021-12-16 23:05:08.163298','6','Marca object (6)',1,'[{\"added\": {}}]',18,1),(39,'2021-12-16 23:21:31.573046','1','Spark GT, Marca: Chevrolet',1,'[{\"added\": {}}]',25,1),(40,'2021-12-16 23:21:38.483691','2','Sail, Marca: Chevrolet',1,'[{\"added\": {}}]',25,1),(41,'2021-12-16 23:22:36.077633','3','Rio, Marca: KIA',1,'[{\"added\": {}}]',25,1),(42,'2021-12-16 23:23:05.104875','4','Niro, Marca: KIA',1,'[{\"added\": {}}]',25,1),(43,'2021-12-16 23:23:55.512186','5','iPhone X, Marca: Apple',1,'[{\"added\": {}}]',25,1),(44,'2021-12-16 23:24:22.833337','6','iPhone 8, Marca: Apple',1,'[{\"added\": {}}]',25,1),(45,'2021-12-16 23:27:57.801221','7','Redmi Note 9 Pro, Marca: Xiaomi',1,'[{\"added\": {}}]',25,1),(46,'2021-12-16 23:28:41.624811','8','Poco F3, Marca: Xiaomi',1,'[{\"added\": {}}]',25,1),(47,'2021-12-17 01:05:25.929277','1','H14',1,'[{\"added\": {}}]',19,1),(48,'2021-12-17 01:06:13.152343','2','HB-A1Q',1,'[{\"added\": {}}]',19,1),(49,'2021-12-17 01:07:03.358034','3','Compacto',1,'[{\"added\": {}}]',19,1),(50,'2021-12-17 01:07:18.060719','4','Furgoneta',1,'[{\"added\": {}}]',19,1),(51,'2021-12-17 01:09:28.506025','5','Inteligentes',1,'[{\"added\": {}}]',19,1),(52,'2021-12-17 01:10:07.355670','6','De Red de Telefonía Analógica',1,'[{\"added\": {}}]',19,1),(53,'2021-12-17 01:16:52.946378','1','Claro',1,'[{\"added\": {}}]',24,1),(54,'2021-12-17 01:16:57.578269','2','Movistar',1,'[{\"added\": {}}]',24,1),(55,'2021-12-17 01:17:00.916019','3','CNT',1,'[{\"added\": {}}]',24,1),(56,'2021-12-27 16:38:05.101551','7','Arma: USTech',1,'[{\"added\": {}}]',18,1),(57,'2021-12-27 16:40:51.052232','8','Arma: QInvention',1,'[{\"added\": {}}]',18,1),(58,'2021-12-27 16:41:59.612621','7','Arma: Pistola',1,'[{\"added\": {}}]',19,1),(59,'2021-12-27 16:42:08.952895','8','Arma: Escopeta',1,'[{\"added\": {}}]',19,1),(60,'2021-12-27 16:43:19.634211','1','9x19mm',1,'[{\"added\": {}}]',20,1),(61,'2021-12-27 16:43:25.146514','2','9mm',1,'[{\"added\": {}}]',20,1),(62,'2021-12-27 16:44:26.513527','9','Arma: Glock',1,'[{\"added\": {}}]',18,1),(63,'2021-12-27 16:44:46.331811','9','Arma: G17 Gen5 MOS',1,'[{\"added\": {}}]',19,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'contenttypes','contenttype'),(21,'seguridad','arma'),(20,'seguridad','calibrearma'),(11,'seguridad','candadosatelital'),(6,'seguridad','cargo'),(23,'seguridad','celular'),(13,'seguridad','color'),(18,'seguridad','marca'),(16,'seguridad','marcacandadosatelital'),(14,'seguridad','marcavehiculo'),(25,'seguridad','modelo'),(22,'seguridad','modelocelular'),(24,'seguridad','operadoracelular'),(7,'seguridad','persona'),(8,'seguridad','rol'),(9,'seguridad','tarjeta'),(19,'seguridad','tipo'),(17,'seguridad','tipocandadosatelital'),(15,'seguridad','tipovehiculo'),(10,'seguridad','usuario'),(12,'seguridad','vehiculo'),(5,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2021-12-08 22:04:31.370300'),(2,'contenttypes','0002_remove_content_type_name','2021-12-08 22:04:31.470033'),(3,'auth','0001_initial','2021-12-08 22:04:31.899897'),(4,'auth','0002_alter_permission_name_max_length','2021-12-08 22:04:31.968088'),(5,'auth','0003_alter_user_email_max_length','2021-12-08 22:04:31.976063'),(6,'auth','0004_alter_user_username_opts','2021-12-08 22:04:31.984059'),(7,'auth','0005_alter_user_last_login_null','2021-12-08 22:04:31.992789'),(8,'auth','0006_require_contenttypes_0002','2021-12-08 22:04:31.997812'),(9,'auth','0007_alter_validators_add_error_messages','2021-12-08 22:04:32.005812'),(10,'auth','0008_alter_user_username_max_length','2021-12-08 22:04:32.013814'),(11,'auth','0009_alter_user_last_name_max_length','2021-12-08 22:04:32.021492'),(12,'auth','0010_alter_group_name_max_length','2021-12-08 22:04:32.041150'),(13,'auth','0011_update_proxy_permissions','2021-12-08 22:04:32.049123'),(14,'auth','0012_alter_user_first_name_max_length','2021-12-08 22:04:32.057415'),(15,'seguridad','0001_initial','2021-12-08 22:04:33.409184'),(16,'admin','0001_initial','2021-12-08 22:04:33.611165'),(17,'admin','0002_logentry_remove_auto_add','2021-12-08 22:04:33.625177'),(18,'admin','0003_logentry_add_action_flag_choices','2021-12-08 22:04:33.642177'),(19,'seguridad','0002_alter_rol_options','2021-12-08 22:04:33.653191'),(20,'seguridad','0003_candadosatelital_vehiculo','2021-12-08 22:04:33.721347'),(21,'seguridad','0004_alter_candadosatelital_options','2021-12-08 22:04:33.728361'),(22,'seguridad','0005_alter_vehiculo_year','2021-12-08 22:04:33.856721'),(23,'seguridad','0006_auto_20211128_1235','2021-12-08 22:04:34.550396'),(24,'seguridad','0007_auto_20211208_1703','2021-12-08 22:04:36.368460'),(25,'sessions','0001_initial','2021-12-08 22:04:36.427093'),(26,'seguridad','0008_auto_20211211_2214','2021-12-12 03:15:45.467433'),(27,'seguridad','0009_auto_20211214_1628','2021-12-14 21:30:28.041622'),(28,'seguridad','0010_arma_calibrearma_celular_modelocelular_operadoracelular','2021-12-14 21:55:20.880144'),(29,'seguridad','0011_auto_20211215_1413','2021-12-15 19:13:43.302057');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marca`
--

DROP TABLE IF EXISTS `marca`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marca` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `recurso` smallint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `marca_chk_1` CHECK ((`recurso` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marca`
--

LOCK TABLES `marca` WRITE;
/*!40000 ALTER TABLE `marca` DISABLE KEYS */;
INSERT INTO `marca` VALUES (1,'Chevrolet',4),(2,'KIA',4),(3,'Geo-Lock',2),(4,'Jointech',2),(5,'Apple',3),(6,'Xiaomi',3),(7,'USTech',1),(8,'QInvention',1),(9,'Glock',1);
/*!40000 ALTER TABLE `marca` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modelo`
--

DROP TABLE IF EXISTS `modelo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `modelo` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `marca_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `modelo_marca_id_8f25fca6_fk_marca_id` (`marca_id`),
  CONSTRAINT `modelo_marca_id_8f25fca6_fk_marca_id` FOREIGN KEY (`marca_id`) REFERENCES `marca` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modelo`
--

LOCK TABLES `modelo` WRITE;
/*!40000 ALTER TABLE `modelo` DISABLE KEYS */;
INSERT INTO `modelo` VALUES (1,'Spark GT',1),(2,'Sail',1),(3,'Rio',2),(4,'Niro',2),(5,'iPhone X',5),(6,'iPhone 8',5),(7,'Redmi Note 9 Pro',6),(8,'Poco F3',6);
/*!40000 ALTER TABLE `modelo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `operadora_celular`
--

DROP TABLE IF EXISTS `operadora_celular`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `operadora_celular` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `operadora_celular`
--

LOCK TABLES `operadora_celular` WRITE;
/*!40000 ALTER TABLE `operadora_celular` DISABLE KEYS */;
INSERT INTO `operadora_celular` VALUES (1,'Claro'),(2,'Movistar'),(3,'CNT');
/*!40000 ALTER TABLE `operadora_celular` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `persona`
--

DROP TABLE IF EXISTS `persona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `persona` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombres` varchar(255) NOT NULL,
  `apellidos` varchar(255) NOT NULL,
  `cedula` varchar(10) NOT NULL,
  `celular` varchar(255) NOT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `direccion` varchar(255) NOT NULL,
  `estado` varchar(255) NOT NULL,
  `fecha_creacion` datetime(6) DEFAULT NULL,
  `fecha_modificacion` datetime(6) DEFAULT NULL,
  `userid` int DEFAULT NULL,
  `profesion` varchar(255) NOT NULL,
  `cargo_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `persona_cargo_id_1f857bd9_fk_cargo_id` (`cargo_id`),
  CONSTRAINT `persona_cargo_id_1f857bd9_fk_cargo_id` FOREIGN KEY (`cargo_id`) REFERENCES `cargo` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `persona`
--

LOCK TABLES `persona` WRITE;
/*!40000 ALTER TABLE `persona` DISABLE KEYS */;
/*!40000 ALTER TABLE `persona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rol` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `estado` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjeta`
--

DROP TABLE IF EXISTS `tarjeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tarjeta` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombres_propietario` varchar(255) NOT NULL,
  `apellidos_propietario` varchar(255) NOT NULL,
  `fecha_vencimiento` datetime(6) DEFAULT NULL,
  `personaid_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tarjeta_personaid_id_33f592e7_fk_persona_id` (`personaid_id`),
  CONSTRAINT `tarjeta_personaid_id_33f592e7_fk_persona_id` FOREIGN KEY (`personaid_id`) REFERENCES `persona` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjeta`
--

LOCK TABLES `tarjeta` WRITE;
/*!40000 ALTER TABLE `tarjeta` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarjeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo`
--

DROP TABLE IF EXISTS `tipo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `recurso` smallint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `tipo_chk_1` CHECK ((`recurso` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo`
--

LOCK TABLES `tipo` WRITE;
/*!40000 ALTER TABLE `tipo` DISABLE KEYS */;
INSERT INTO `tipo` VALUES (1,'H14',2),(2,'HB-A1Q',2),(3,'Compacto',4),(4,'Furgoneta',4),(5,'Inteligentes',3),(6,'De Red de Telefonía Analógica',3),(7,'Pistola',1),(8,'Escopeta',1),(9,'G17 Gen5 MOS',1);
/*!40000 ALTER TABLE `tipo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  `cedula` varchar(10) NOT NULL,
  `persona_id` bigint DEFAULT NULL,
  `rol_id` bigint DEFAULT NULL,
  `armamento` tinyint(1) NOT NULL,
  `conduccion` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  KEY `usuario_persona_id_04a148c5_fk_persona_id` (`persona_id`),
  KEY `usuario_rol_id_ac58b608_fk_rol_id` (`rol_id`),
  CONSTRAINT `usuario_persona_id_04a148c5_fk_persona_id` FOREIGN KEY (`persona_id`) REFERENCES `persona` (`id`),
  CONSTRAINT `usuario_rol_id_ac58b608_fk_rol_id` FOREIGN KEY (`rol_id`) REFERENCES `rol` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'pbkdf2_sha256$260000$DSQRniFIfQ9pYKHe84ghEP$iX+Gqm2LtTlKGPlKwK/mLo+KgNM+O2qhXHWGa8/I5bk=','2021-12-27 20:04:19.024180',1,'admin','','','admin@seproamerica.com',1,1,'2021-12-08 22:44:25.072319','',NULL,NULL,0,0);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario_groups`
--

DROP TABLE IF EXISTS `usuario_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `usuario_id` bigint NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `usuario_groups_usuario_id_group_id_2e3cd638_uniq` (`usuario_id`,`group_id`),
  KEY `usuario_groups_group_id_c67c8651_fk_auth_group_id` (`group_id`),
  CONSTRAINT `usuario_groups_group_id_c67c8651_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `usuario_groups_usuario_id_161fc80c_fk_usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_groups`
--

LOCK TABLES `usuario_groups` WRITE;
/*!40000 ALTER TABLE `usuario_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario_user_permissions`
--

DROP TABLE IF EXISTS `usuario_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `usuario_id` bigint NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `usuario_user_permissions_usuario_id_permission_id_3db58b8c_uniq` (`usuario_id`,`permission_id`),
  KEY `usuario_user_permiss_permission_id_a8893ce7_fk_auth_perm` (`permission_id`),
  CONSTRAINT `usuario_user_permiss_permission_id_a8893ce7_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `usuario_user_permissions_usuario_id_693d9c50_fk_usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_user_permissions`
--

LOCK TABLES `usuario_user_permissions` WRITE;
/*!40000 ALTER TABLE `usuario_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehiculo`
--

DROP TABLE IF EXISTS `vehiculo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehiculo` (
  `placa` varchar(255) NOT NULL,
  `motor` varchar(255) NOT NULL,
  `marca_id` bigint DEFAULT NULL,
  `tipo_id` bigint DEFAULT NULL,
  `color_id` bigint DEFAULT NULL,
  `year` smallint unsigned NOT NULL,
  `created_by_id` bigint DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `deleted_date` date DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL,
  `modified_by_id` bigint DEFAULT NULL,
  `modified_date` date NOT NULL,
  `observaciones` longtext NOT NULL DEFAULT (_utf8mb3''),
  `ruta_foto` varchar(255) NOT NULL,
  `modelo_id` bigint DEFAULT NULL,
  PRIMARY KEY (`placa`),
  KEY `vehiculo_created_by_id_72897cbe_fk_usuario_id` (`created_by_id`),
  KEY `vehiculo_modified_by_id_695b71c0_fk_usuario_id` (`modified_by_id`),
  KEY `vehiculo_color_id_55fe6299` (`color_id`),
  KEY `vehiculo_marca_id_4c86da34` (`marca_id`),
  KEY `vehiculo_tipo_id_d29fa88b` (`tipo_id`),
  KEY `vehiculo_modelo_id_6b626d92_fk_modelo_id` (`modelo_id`),
  CONSTRAINT `vehiculo_color_id_55fe6299_fk_color_id` FOREIGN KEY (`color_id`) REFERENCES `color` (`id`),
  CONSTRAINT `vehiculo_created_by_id_72897cbe_fk_usuario_id` FOREIGN KEY (`created_by_id`) REFERENCES `usuario` (`id`),
  CONSTRAINT `vehiculo_marca_id_4c86da34_fk_marca_id` FOREIGN KEY (`marca_id`) REFERENCES `marca` (`id`),
  CONSTRAINT `vehiculo_modelo_id_6b626d92_fk_modelo_id` FOREIGN KEY (`modelo_id`) REFERENCES `modelo` (`id`),
  CONSTRAINT `vehiculo_modified_by_id_695b71c0_fk_usuario_id` FOREIGN KEY (`modified_by_id`) REFERENCES `usuario` (`id`),
  CONSTRAINT `vehiculo_tipo_id_d29fa88b_fk_tipo_id` FOREIGN KEY (`tipo_id`) REFERENCES `tipo` (`id`),
  CONSTRAINT `vehiculo_year_83de7ca1_check` CHECK ((`year` >= 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehiculo`
--

LOCK TABLES `vehiculo` WRITE;
/*!40000 ALTER TABLE `vehiculo` DISABLE KEYS */;
INSERT INTO `vehiculo` VALUES ('AAG-9115','3.0L turbo Diésel',1,3,3,2002,NULL,'2022-01-21',NULL,0,NULL,'2022-01-21','Sin observaciones.','',NULL),('AXA-4899','3.0L turbo Diésel',2,3,2,2014,NULL,'2022-01-20',NULL,1,NULL,'2022-01-20','Sin resolución del defecto.','',NULL),('AXS-4888','3.5L turbo Diésel',1,4,1,2011,NULL,'2021-12-22',NULL,0,NULL,'2021-12-22','Sin observaciones.','',NULL),('AXS-4895','3.0L turbo Diésel',2,3,1,2010,NULL,'2021-12-22',NULL,0,NULL,'2021-12-22','Sin observaciones.','',NULL),('GCS-7384','1.0/1.2 Extra/Eco-país 83hp',2,3,5,2011,NULL,'2021-12-22',NULL,0,NULL,'2021-12-22','Sin observaciones','',NULL),('GES-1593','3.0L Diésel',2,3,4,2012,NULL,'2021-12-22',NULL,1,NULL,'2021-12-22','Accidente con perdida total','',NULL),('GVS-4895','4.0L turbo Diésel',1,4,5,2013,NULL,'2021-12-22',NULL,0,NULL,'2021-12-22','Sin observaciones.','',NULL),('GXG-4444','3.0L turbo Diésel',1,4,1,2010,NULL,'2022-01-20',NULL,0,NULL,'2022-01-20','Sin observaciones.','',NULL);
/*!40000 ALTER TABLE `vehiculo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-21 14:14:02
