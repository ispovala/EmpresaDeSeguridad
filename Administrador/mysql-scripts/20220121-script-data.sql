USE `seguridadseproamerica`;
--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'pbkdf2_sha256$260000$DSQRniFIfQ9pYKHe84ghEP$iX+Gqm2LtTlKGPlKwK/mLo+KgNM+O2qhXHWGa8/I5bk=','2021-12-27 20:04:19.024180',1,'admin','','','admin@seproamerica.com',1,1,'2021-12-08 22:44:25.072319','',NULL,NULL,0,0);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `calibre_arma`
--

LOCK TABLES `calibre_arma` WRITE;
/*!40000 ALTER TABLE `calibre_arma` DISABLE KEYS */;
INSERT INTO `calibre_arma` VALUES (1,'9x19mm'),(2,'9mm');
/*!40000 ALTER TABLE `calibre_arma` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `color`
--

LOCK TABLES `color` WRITE;
/*!40000 ALTER TABLE `color` DISABLE KEYS */;
INSERT INTO `color` VALUES (1,'Negro'),(2,'Blanco'),(3,'Rojo'),(4,'Azul'),(5,'Gris'),(6,'Naranja'),(7,'Amarillo');
/*!40000 ALTER TABLE `color` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `marca`
--

LOCK TABLES `marca` WRITE;
/*!40000 ALTER TABLE `marca` DISABLE KEYS */;
INSERT INTO `marca` VALUES (1,'Chevrolet',4),(2,'KIA',4),(3,'Geo-Lock',2),(4,'Jointech',2),(5,'Apple',3),(6,'Xiaomi',3),(7,'USTech',1),(8,'QInvention',1),(9,'Glock',1);
/*!40000 ALTER TABLE `marca` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `modelo`
--

LOCK TABLES `modelo` WRITE;
/*!40000 ALTER TABLE `modelo` DISABLE KEYS */;
INSERT INTO `modelo` VALUES (1,'Spark GT',1),(2,'Sail',1),(3,'Rio',2),(4,'Niro',2),(5,'iPhone X',5),(6,'iPhone 8',5),(7,'Redmi Note 9 Pro',6),(8,'Poco F3',6);
/*!40000 ALTER TABLE `modelo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `operadora_celular`
--

LOCK TABLES `operadora_celular` WRITE;
/*!40000 ALTER TABLE `operadora_celular` DISABLE KEYS */;
INSERT INTO `operadora_celular` VALUES (1,'Claro'),(2,'Movistar'),(3,'CNT');
/*!40000 ALTER TABLE `operadora_celular` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tipo`
--

LOCK TABLES `tipo` WRITE;
/*!40000 ALTER TABLE `tipo` DISABLE KEYS */;
INSERT INTO `tipo` VALUES (1,'H14',2),(2,'HB-A1Q',2),(3,'Compacto',4),(4,'Furgoneta',4),(5,'Inteligentes',3),(6,'De Red de Telefonía Analógica',3),(7,'Pistola',1),(8,'Escopeta',1),(9,'G17 Gen5 MOS',1);
/*!40000 ALTER TABLE `tipo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `arma`
--

LOCK TABLES `arma` WRITE;
/*!40000 ALTER TABLE `arma` DISABLE KEYS */;
INSERT INTO `arma` VALUES (1,'2021-12-27',NULL,0,'2021-12-27','Sin observaciones.','',1,1,NULL,9,NULL,9),(2,'2021-12-27',NULL,0,'2021-12-27','Con accesorios extras.','',2,5,NULL,7,NULL,7),(3,'2021-12-27',NULL,1,'2021-12-27','Perdida parcial.','',1,5,NULL,8,NULL,7),(4,'2022-01-20',NULL,1,'2022-01-20','Pérdida parcial por defecto.','',1,2,NULL,7,NULL,8);
/*!40000 ALTER TABLE `arma` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `candado_satelital`
--

LOCK TABLES `candado_satelital` WRITE;
/*!40000 ALTER TABLE `candado_satelital` DISABLE KEYS */;
INSERT INTO `candado_satelital` VALUES (1,4,2,3,NULL,'2021-12-20',NULL,0,NULL,'2021-12-20','Sin observaciones.',''),(2,3,2,3,NULL,'2021-12-20',NULL,1,NULL,'2021-12-20','Extraviado.',''),(3,3,2,1,NULL,'2021-12-22',NULL,1,NULL,'2021-12-22','Sin observaciones.',''),(4,3,1,5,NULL,'2021-12-22',NULL,0,NULL,'2021-12-22','Sin observaciones',''),(5,3,1,2,NULL,'2021-12-22',NULL,1,NULL,'2021-12-22','Sin observaciones',''),(6,4,2,1,NULL,'2022-01-20',NULL,1,NULL,'2022-01-20','Pérdida total.','');
/*!40000 ALTER TABLE `candado_satelital` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `celular`
--

LOCK TABLES `celular` WRITE;
/*!40000 ALTER TABLE `celular` DISABLE KEYS */;
INSERT INTO `celular` VALUES (1,'2021-12-27',NULL,0,'2021-12-27','0985989911','Sin observaciones.','',4,NULL,5,6,NULL,1),(2,'2021-12-27',NULL,0,'2021-12-27','0987854152','Sin observaciones.','',2,NULL,6,8,NULL,2),(3,'2021-12-27',NULL,0,'2021-12-27','0996568456','Sin observaciones.','',1,NULL,5,5,NULL,3),(4,'2021-12-27',NULL,0,'2021-12-27','0984516231','Sin observaciones.','',5,NULL,6,7,NULL,2),(5,'2021-12-27',NULL,1,'2021-12-27','0984516551','Accidente con perdida parcial. No se usará más por defectos mayores.','',2,NULL,6,7,NULL,1),(6,'2022-01-20',NULL,1,'2022-01-20','0984588231','Devolución por defecto.','',2,NULL,5,6,NULL,1);
/*!40000 ALTER TABLE `celular` ENABLE KEYS */;
UNLOCK TABLES;

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
