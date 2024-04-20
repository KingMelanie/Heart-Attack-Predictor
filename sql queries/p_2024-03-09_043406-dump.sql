-- MySQL dump 10.13  Distrib 8.3.0, for macos14.2 (arm64)
--
-- Host: 127.0.0.1    Database: p
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dataform`
--

DROP TABLE IF EXISTS `dataform`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dataform` (
  `id` int NOT NULL AUTO_INCREMENT,
  `age` varchar(5) NOT NULL,
  `sex` varchar(5) NOT NULL,
  `trestbps` varchar(5) NOT NULL,
  `chol` varchar(5) NOT NULL,
  `fbs` varchar(5) NOT NULL,
  `thalach` varchar(5) NOT NULL,
  `exang` varchar(5) NOT NULL,
  `oldpeak` varchar(5) NOT NULL,
  `slope` varchar(5) NOT NULL,
  `ca` varchar(5) NOT NULL,
  `thal` varchar(5) NOT NULL,
  `restecg` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_id` int NOT NULL,
  KEY `id` (`id`),
  KEY `dataform_user` (`user_id`),
  CONSTRAINT `dataform_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `chk_chol` CHECK (((`chol` <= 50) and (`chol` <= 400))),
  CONSTRAINT `chk_thalach` CHECK (((`thalch` <= 60) and (`thalch` <= 200))),
  CONSTRAINT `chk_trestbps` CHECK (((`trestbps` < 80) and (`trestbps` < 200)))
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dataform`
--

/*!40000 ALTER TABLE `dataform` DISABLE KEYS */;
INSERT INTO `dataform` VALUES (4,'23','0','70','100','0','80','0','2','2','2','6','0',10),(5,'23','0','70','100','0','80','0','2','2','2','6','0',10),(6,'21','1','70','120','0','80','0','1','1','2','7','0',10),(7,'21','1','70','120','0','80','0','1','1','2','7','0',10),(8,'21','1','70','120','0','80','0','1','1','2','7','0',10),(9,'21','1','70','120','0','80','0','1','1','2','7','0',10);
/*!40000 ALTER TABLE `dataform` ENABLE KEYS */;

--
-- Table structure for table `prediction`
--

DROP TABLE IF EXISTS `prediction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prediction` (
  `id` int NOT NULL,
  `num` varchar(5) DEFAULT NULL,
  KEY `id` (`id`),
  CONSTRAINT `prediction_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`id`),
  CONSTRAINT `prediction_ibfk_2` FOREIGN KEY (`id`) REFERENCES `dataform` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prediction`
--

/*!40000 ALTER TABLE `prediction` DISABLE KEYS */;
/*!40000 ALTER TABLE `prediction` ENABLE KEYS */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `email_address` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(200) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (9,'\'Melanie Meby Olisah\'','\'molisah7894@student.sfbu.edu\'','\'great\'','0000-00-00 00:00:00'),(10,'\'Melanie Meby Olisah\'','\'molisah7894@student.sfbu.edu\'','\'great\'','0000-00-00 00:00:00'),(11,'\'Melanie Meby Olisah\'','\'molisah7894@student.sfbu.edu\'','\'great\'','0000-00-00 00:00:00'),(12,'\'Ada Madueke\'','\'kvngmelanie@gmail.com\'','\'238976\'','0000-00-00 00:00:00'),(13,'Amadu Bello','amadu@kings.com','password',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

--
-- Dumping routines for database 'p'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-09  4:34:27
