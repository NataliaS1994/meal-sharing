CREATE DATABASE  IF NOT EXISTS `meal-sharing`;
USE `meal-sharing`;
--
-- Table structure for table `meals`
--

DROP TABLE IF EXISTS `meals`;
create table `meals`(
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text NULL DEFAULT NULL,
  `location` varchar(20) NOT NULL,
  `when` DATETIME NOT NULL,
  `max_reservations` int(10) NULL DEFAULT NULL,
  `price` decimal(10)  NOT NULL,
  `created_date` date,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6;

--
-- Dumping data for table `meals`
--

LOCK TABLES `meals` WRITE;
/*!40000 ALTER TABLE `meals` DISABLE KEYS */;
INSERT INTO `meals` VALUES (1,'spring rools','green veggies','frederiksberg','2021-10-05 00:00:00', 4, 70,'2021-10-03'),(4,'protein shake','milk, banana, spinach','norrebro','2021-10-08 00:00:00', 8, 50,'2021-10-04'),(5,'chicken salad', 'apple,quinoa and fresh chicken','lyngby','2021-10-10 15:00:00', 6, 70,'2021-10-08');
/*!40000 ALTER TABLE `meals` ENABLE KEYS */;
UNLOCK TABLES;
