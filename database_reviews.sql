CREATE DATABASE  IF NOT EXISTS `meal-sharing`;
USE `meal-sharing`;
--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
CCREATE TABLE `reviews` (
  `id` int DEFAULT NULL,
  `title` varchar(20) DEFAULT NULL,
  `description` text,
  `meal_id` int DEFAULT NULL,
  `stars` int DEFAULT NULL,
  `created_date` date DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `meals` DISABLE KEYS */;
INSERT INTO `reeviews` VALUES (2,'wonderful','delicious food',2,5,'2021-11-11'),(3,'tastes amazing','tastes amazing',3,4,'2021-11-10'),(4,'great experience','nice surprise',2,4,'2021-11-11'),(5,'dissapointed','the food was tasting weird',1,3,'2021-11-10')
/*!40000 ALTER TABLE `meals` ENABLE KEYS */;
UNLOCK TABLES;
