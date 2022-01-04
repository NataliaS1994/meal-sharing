CREATE DATABASE  IF NOT EXISTS `meal-sharing`;
USE `meal-sharing`;
--
-- Table structure for table `reservations`
--

DROP TABLE IF EXISTS `reservations`;
CREATE TABLE `reservations` (
  `id` int NOT NULL,
  `number_of_guests` int DEFAULT NULL,
  `meal_id` int DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `contact_phonenumber` varchar(255) DEFAULT NULL,
  `contact_name` varchar(20) DEFAULT NULL,
  `contact_email` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ;
) ENGINE=InnoDB AUTO_INCREMENT=6;

--
-- Dumping data for table `reservations`
--

LOCK TABLES `reservations` WRITE;
/*!40000 ALTER TABLE `meals` DISABLE KEYS */;
INSERT INTO `reservations` VALUES (1, 2, 2, '2021-10-09',32-34-54-56,'natalia','natalia@gmail.com'),(2, 3, 1, '2021-10-23',32-34-54-56,'omar','omar@gmail.com'),(3, 2, 5, '2021-10-01',32-34-54-56,'cloe','cloe@gmail.com'),(4, 3, 3, '2021-10-25',32-34-54-56,'avatar','avatar@gmail.com'),(5, 2, 2, '2021-10-12',32-34-54-56,'joe','joe@gmail.com')
/*!40000 ALTER TABLE `meals` ENABLE KEYS */;
UNLOCK TABLES;
