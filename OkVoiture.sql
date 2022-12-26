-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: servicewebbd
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `cars`
--

DROP TABLE IF EXISTS `cars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cars` (
  `id` int NOT NULL AUTO_INCREMENT,
  `namecar` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  `matricule` varchar(100) NOT NULL,
  `color` varchar(100) NOT NULL,
  `forcecar` varchar(100) NOT NULL,
  `price` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cars`
--

LOCK TABLES `cars` WRITE;
/*!40000 ALTER TABLE `cars` DISABLE KEYS */;
INSERT INTO `cars` VALUES (1,'Tesla','2022','A957832','black','120','50'),(3,'BWM','2021','BM48930','RED','200','65'),(4,'AUDI','2021-R8','AU12903','WHITE','250','85'),(5,'Ferarri','2023','FR49380','RED','300','100'),(6,'Mini Copper','200','MN389280','GREY','50','30'),(9,'Mercedes','2020','MR12903','BLUE','200','30'),(8,'Mercedes AMG','2022','MN38323','BLUE','300','145');
/*!40000 ALTER TABLE `cars` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `louer_car`
--

DROP TABLE IF EXISTS `louer_car`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `louer_car` (
  `id_louercar` bigint NOT NULL AUTO_INCREMENT,
  `prenom_loueur` varchar(255) DEFAULT NULL,
  `designation_voiture` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `photo_voiture` varchar(255) DEFAULT NULL,
  `prix` varchar(255) DEFAULT NULL,
  `ville` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_louercar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `louer_car`
--

LOCK TABLES `louer_car` WRITE;
/*!40000 ALTER TABLE `louer_car` DISABLE KEYS */;
/*!40000 ALTER TABLE `louer_car` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reserv`
--

DROP TABLE IF EXISTS `reserv`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reserv` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `prenom` varchar(80) NOT NULL,
  `mail` varchar(100) NOT NULL,
  `tl` varchar(80) NOT NULL,
  `nombre` varchar(80) NOT NULL,
  `adress` varchar(100) NOT NULL,
  `age` varchar(80) NOT NULL,
  `jours` varchar(11) NOT NULL,
  `date` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reserv`
--

LOCK TABLES `reserv` WRITE;
/*!40000 ALTER TABLE `reserv` DISABLE KEYS */;
INSERT INTO `reserv` VALUES (1,'anas','talhaoui','talhaouianas1@gmail.com','650929801','2','nador-maroc','22','20','2022-12-23'),(2,'martin','martin','hello@manon.com','632432432','4','benTaieb','22','20','2022-12-23'),(3,'chaki','ahmed','ahmed@gmail.com','643243244','4','benTaieb','22','20','2022-12-24');
/*!40000 ALTER TABLE `reserv` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservation`
--

DROP TABLE IF EXISTS `reservation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservation` (
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `tl` varchar(11) NOT NULL,
  `fromAdd` varchar(100) NOT NULL,
  `age` varchar(11) NOT NULL,
  `nbPerson` varchar(11) NOT NULL,
  `code` varchar(20) NOT NULL,
  `nbJours` int NOT NULL,
  `dateDebut` date NOT NULL,
  `write` varchar(100) NOT NULL,
  `id` int NOT NULL,
  `from_add` varchar(255) DEFAULT NULL,
  `nb_person` int DEFAULT NULL,
  `date_debut` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservation`
--

LOCK TABLES `reservation` WRITE;
/*!40000 ALTER TABLE `reservation` DISABLE KEYS */;
INSERT INTO `reservation` VALUES ('talhaoui','anas','talhaouianas1@gmail.com','650929801','Oujda – Maroc ','22','4','2',20,'2022-12-23','ok',0,NULL,NULL,NULL),('martin','martin','hello@manao.com','679934204','ahfir-maroc','22','2','1',30,'2022-12-23','bon',1,NULL,NULL,NULL);
/*!40000 ALTER TABLE `reservation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `gmail` varchar(100) NOT NULL,
  `password` varchar(80) NOT NULL,
  `reservation` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (3,'anas','talhaouianas1@gmail.com','anas1122',0),(9,'Martin','hello@manao.com','martin123',0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `voiture`
--

DROP TABLE IF EXISTS `voiture`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `voiture` (
  `id` int NOT NULL AUTO_INCREMENT,
  `numMatrice` varchar(100) NOT NULL,
  `couleur` varchar(100) NOT NULL,
  `categorie` varchar(100) NOT NULL,
  `dateAssurance` date NOT NULL,
  `dateVisite` date NOT NULL,
  `prixLocation` double NOT NULL,
  `etat` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `voiture`
--

LOCK TABLES `voiture` WRITE;
/*!40000 ALTER TABLE `voiture` DISABLE KEYS */;
INSERT INTO `voiture` VALUES (1,'13456/b/27','Rouge','MERCEDES','2022-12-08','2022-12-03',1500,0);
/*!40000 ALTER TABLE `voiture` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-25 20:55:20
