-- MySQL dump 10.13  Distrib 5.7.21, for Linux (x86_64)
--
-- Host: localhost    Database: caraway
-- ------------------------------------------------------
-- Server version	5.7.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `account` (
  `accountID` varchar(25) DEFAULT NULL,
  `password` varchar(25) DEFAULT NULL,
  `type` varchar(25) DEFAULT NULL,
  `bonusHours` int(11) DEFAULT NULL,
  `bonusComment` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `historic` decimal(7,2) DEFAULT NULL,
  `phone2` varchar(255) DEFAULT NULL,
  `email2` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES ('admin001','brown','admin',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('family001','brown','family',0,'N/A','780-123-5478','first@gmail.com',25.00,'587-987-3214','2nd@gmail.com'),('teacher001','brown','teacher',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('board001','brown','board',NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cancelations`
--

DROP TABLE IF EXISTS `cancelations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cancelations` (
  `family_ID` varchar(255) DEFAULT NULL,
  `facilitator` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `room` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cancelations`
--

LOCK TABLES `cancelations` WRITE;
/*!40000 ALTER TABLE `cancelations` DISABLE KEYS */;
/*!40000 ALTER TABLE `cancelations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `donations`
--

DROP TABLE IF EXISTS `donations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `donations` (
  `donating_ID` varchar(255) DEFAULT NULL,
  `receiving_ID` varchar(255) DEFAULT NULL,
  `hours` float(7,1) DEFAULT NULL,
  `date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donations`
--

LOCK TABLES `donations` WRITE;
/*!40000 ALTER TABLE `donations` DISABLE KEYS */;
/*!40000 ALTER TABLE `donations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `earned_hours`
--

DROP TABLE IF EXISTS `earned_hours`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `earned_hours` (
  `family_ID` varchar(255) DEFAULT NULL,
  `room` varchar(255) DEFAULT NULL,
  `hours` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `earned_hours`
--

LOCK TABLES `earned_hours` WRITE;
/*!40000 ALTER TABLE `earned_hours` DISABLE KEYS */;
/*!40000 ALTER TABLE `earned_hours` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `facilitator`
--

DROP TABLE IF EXISTS `facilitator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `facilitator` (
  `familyID` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facilitator`
--

LOCK TABLES `facilitator` WRITE;
/*!40000 ALTER TABLE `facilitator` DISABLE KEYS */;
INSERT INTO `facilitator` VALUES ('family001','Fred Flinstone'),('family001','Babe Ruth');
/*!40000 ALTER TABLE `facilitator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fieldtrip`
--

DROP TABLE IF EXISTS `fieldtrip`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fieldtrip` (
  `date` date DEFAULT NULL,
  `credit` int(11) DEFAULT NULL,
  `room` varchar(255) DEFAULT NULL,
  `facilitator_number` int(11) DEFAULT NULL,
  `message` varchar(500) DEFAULT NULL,
  `fieldtripID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`fieldtripID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fieldtrip`
--

LOCK TABLES `fieldtrip` WRITE;
/*!40000 ALTER TABLE `fieldtrip` DISABLE KEYS */;
INSERT INTO `fieldtrip` VALUES ('2018-04-10',480,'red',3,'For fun',3),('2018-04-02',600,'mauve',7,'For fun',4);
/*!40000 ALTER TABLE `fieldtrip` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fieldtrip_reservations`
--

DROP TABLE IF EXISTS `fieldtrip_reservations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fieldtrip_reservations` (
  `fieldtrip_ID` varchar(255) DEFAULT NULL,
  `family_ID` varchar(255) DEFAULT NULL,
  `facilitator` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `credit` int(11) DEFAULT NULL,
  `room` varchar(255) DEFAULT NULL,
  `reservation_ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`reservation_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fieldtrip_reservations`
--

LOCK TABLES `fieldtrip_reservations` WRITE;
/*!40000 ALTER TABLE `fieldtrip_reservations` DISABLE KEYS */;
INSERT INTO `fieldtrip_reservations` VALUES ('4','family001','Babe Ruth','2018-04-02',600,'mauve',2),('3','family001','Babe Ruth','2018-04-10',480,'mauve',3);
/*!40000 ALTER TABLE `fieldtrip_reservations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `holidays`
--

DROP TABLE IF EXISTS `holidays`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `holidays` (
  `family_ID` varchar(255) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `room` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `holidays`
--

LOCK TABLES `holidays` WRITE;
/*!40000 ALTER TABLE `holidays` DISABLE KEYS */;
/*!40000 ALTER TABLE `holidays` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `late`
--

DROP TABLE IF EXISTS `late`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `late` (
  `family_ID` varchar(255) DEFAULT NULL,
  `facilitator` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `hours` float(7,1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `late`
--

LOCK TABLES `late` WRITE;
/*!40000 ALTER TABLE `late` DISABLE KEYS */;
/*!40000 ALTER TABLE `late` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leaveTable`
--

DROP TABLE IF EXISTS `leaveTable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `leaveTable` (
  `family_ID` varchar(255) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `approved` bit(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leaveTable`
--

LOCK TABLES `leaveTable` WRITE;
/*!40000 ALTER TABLE `leaveTable` DISABLE KEYS */;
/*!40000 ALTER TABLE `leaveTable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservations`
--

DROP TABLE IF EXISTS `reservations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reservations` (
  `family_ID` varchar(255) DEFAULT NULL,
  `facilitator` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `room` varchar(255) DEFAULT NULL,
  `reservation_ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`reservation_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservations`
--

LOCK TABLES `reservations` WRITE;
/*!40000 ALTER TABLE `reservations` DISABLE KEYS */;
INSERT INTO `reservations` VALUES ('family001','Fred Flinstone','2018-04-11','08:45:00','12:00:00','red',12),('family001','Fred Flinstone','2018-04-13','12:50:00','15:45:00','red',13),('family001','Babe Ruth','2018-04-03','12:50:00','15:45:00','red',14),('family001','Babe Ruth','2018-04-03','12:50:00','15:45:00','mauve',15),('family001','Babe Ruth','2018-04-09','08:45:00','12:00:00','red',16);
/*!40000 ALTER TABLE `reservations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room`
--

DROP TABLE IF EXISTS `room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `room` (
  `roomID` varchar(255) DEFAULT NULL,
  `roomName` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room`
--

LOCK TABLES `room` WRITE;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
INSERT INTO `room` VALUES (NULL,'red'),(NULL,'mauve');
/*!40000 ALTER TABLE `room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `settings`
--

DROP TABLE IF EXISTS `settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `settings` (
  `block1_start` time DEFAULT NULL,
  `block1_end` time DEFAULT NULL,
  `block2_start` time DEFAULT NULL,
  `block2_end` time DEFAULT NULL,
  `block3_start` time DEFAULT NULL,
  `block3_end` time DEFAULT NULL,
  `year_start` date DEFAULT NULL,
  `weekly_requirements` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `settings`
--

LOCK TABLES `settings` WRITE;
/*!40000 ALTER TABLE `settings` DISABLE KEYS */;
INSERT INTO `settings` VALUES ('08:45:00','12:00:00','11:50:00','13:00:00','12:50:00','15:45:00','2018-09-05',150);
/*!40000 ALTER TABLE `settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `student` (
  `familyID` varchar(255) DEFAULT NULL,
  `room` varchar(255) DEFAULT NULL,
  `grade` varchar(15) DEFAULT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES ('family001','red','8','Joe','DiMaggio');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-04-09 14:18:58
