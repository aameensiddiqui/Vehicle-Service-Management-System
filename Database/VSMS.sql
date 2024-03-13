-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: vsms
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `area`
--

DROP TABLE IF EXISTS `area`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `area` (
  `areaid` int NOT NULL AUTO_INCREMENT,
  `areaname` varchar(45) NOT NULL,
  `pincode` int NOT NULL,
  `cityid` int NOT NULL,
  PRIMARY KEY (`areaid`),
  KEY `cityid_idx` (`cityid`),
  CONSTRAINT `cityid` FOREIGN KEY (`cityid`) REFERENCES `city` (`cityid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `area`
--

LOCK TABLES `area` WRITE;
/*!40000 ALTER TABLE `area` DISABLE KEYS */;
INSERT INTO `area` VALUES (1,'Shivajinagar',411005,1),(2,'Kothrud',411038,1),(3,'Karvenagar',411052,1),(4,'Baner',411045,1),(5,'Hadapsar',411013,1),(6,'Kharadi',411014,1),(7,'Wagholi',412207,1),(8,'Sinhgad',411041,1),(9,'Kondhwa',411048,1),(10,'Katraj',411037,1),(11,'Bandra',400050,2),(12,'Thane',400004,2);
/*!40000 ALTER TABLE `area` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brands` (
  `brandid` int NOT NULL AUTO_INCREMENT,
  `bname` varchar(45) NOT NULL,
  PRIMARY KEY (`brandid`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Maruti Suzuki'),(2,'Hyundai'),(3,'Kia'),(4,'Honda'),(5,'Tata'),(6,'Mahindra'),(7,'MG Motors'),(8,'Toyota'),(9,'Ford'),(10,'Renault');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `city` (
  `cityid` int NOT NULL AUTO_INCREMENT,
  `cityname` varchar(45) NOT NULL,
  PRIMARY KEY (`cityid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (1,'Pune'),(2,'Mumbai'),(7,'Nasik');
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `customerid` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `birthdate` datetime NOT NULL,
  `emailid` varchar(45) NOT NULL,
  `lane` varchar(100) DEFAULT NULL,
  `contactno` varchar(45) DEFAULT NULL,
  `areaid` int NOT NULL,
  `loginid` int NOT NULL,
  PRIMARY KEY (`customerid`),
  KEY `aid_idx` (`areaid`),
  KEY `lid_idx` (`loginid`),
  CONSTRAINT `aid` FOREIGN KEY (`areaid`) REFERENCES `area` (`areaid`),
  CONSTRAINT `lid` FOREIGN KEY (`loginid`) REFERENCES `login` (`loginid`)
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (7,'Amin','Siddiqui','1999-04-01 05:30:00','amin@gmail.com','Sadashiv Peth','7878776612',1,66),(38,'Shreyash','Jaygaonkar','2001-07-10 05:30:00','sj@gmail.com','Kasba Peth Pune','9854731625',1,99),(42,'Ashutosh','Kedari','2000-10-10 05:30:00','ak@gmail.com','knp','9874458897',3,97),(84,'Saurabh','Solanke','2000-03-07 05:30:00','saurabh@gmail.com','Kasba Peth Pune','777007411',1,67),(85,'Pranav','Nerkar','2001-01-10 05:30:00','pn@gmail.com','Shivaji Nagar','9874512563',2,105),(86,'Supriya','Wasre','2000-01-01 05:30:00','sup@gmail.com','C2 205 Corona Housing Society, Kondhwa','9856487515',9,108),(87,'Ritesh','Patil','1998-04-02 05:30:00','ritz@gmail.com','Near Katraj Dairy','7845126598',10,109),(88,'Mahesh','Bharti','2000-02-10 05:30:00','mahi@gmail.com','Sadesatra Nali Hadapsar Pune','9966587458',5,110),(89,'Raj','Verma','2000-03-05 05:30:00','raj@gmail.com','Khadi Machine Chowk, Kondhwa (BK)','7844785611',9,113),(90,'Nikhil','Ahuja','2000-10-10 05:30:00','niks@gmail.com','Khadi Machine Chowk, Kondhwa (BK)','7845784578',9,115);
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `facilities`
--

DROP TABLE IF EXISTS `facilities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `facilities` (
  `facilityid` int NOT NULL AUTO_INCREMENT,
  `facilityname` varchar(45) NOT NULL,
  PRIMARY KEY (`facilityid`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facilities`
--

LOCK TABLES `facilities` WRITE;
/*!40000 ALTER TABLE `facilities` DISABLE KEYS */;
INSERT INTO `facilities` VALUES (1,'Engine Oi lCheck'),(2,'Coolant Check'),(3,'Battery Check'),(4,'Brake Fluid Check'),(5,'Lights Check'),(6,'Clutch Fluid Check'),(7,'Transmission Fluid Check'),(8,'Steering Check'),(9,'Wind Screen Washer'),(10,'Tyre Treads'),(11,'Horn Check'),(12,'Wheel Alignment'),(13,'Shocks Struts'),(14,'Differential Check'),(15,'Spark Plug'),(16,'Air Bag Check'),(17,'Engine Lubrication'),(18,'Exhaust Check'),(19,'Beering Check'),(20,'Transmission Belt Check'),(21,'Washing'),(22,'Internal Cleaing'),(23,'Plastic Parts Waxing');
/*!40000 ALTER TABLE `facilities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoices`
--

DROP TABLE IF EXISTS `invoices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `invoices` (
  `invoiceid` int NOT NULL AUTO_INCREMENT,
  `status` tinyint(1) NOT NULL,
  `servicerequestid` int NOT NULL,
  `transactionid` int NOT NULL,
  PRIMARY KEY (`invoiceid`),
  KEY `trid_idx` (`transactionid`),
  KEY `sreqstid_idx` (`servicerequestid`),
  CONSTRAINT `sreqstid` FOREIGN KEY (`servicerequestid`) REFERENCES `servicerequests` (`servicerequestid`),
  CONSTRAINT `trid` FOREIGN KEY (`transactionid`) REFERENCES `transactions` (`transactionid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoices`
--

LOCK TABLES `invoices` WRITE;
/*!40000 ALTER TABLE `invoices` DISABLE KEYS */;
/*!40000 ALTER TABLE `invoices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `loginid` int NOT NULL AUTO_INCREMENT,
  `userid` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `answer` varchar(45) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `roleid` int NOT NULL,
  `questionid` int NOT NULL,
  PRIMARY KEY (`loginid`),
  UNIQUE KEY `userid_UNIQUE` (`userid`),
  KEY `rid_idx` (`roleid`),
  KEY `qid_idx` (`questionid`),
  CONSTRAINT `qid` FOREIGN KEY (`questionid`) REFERENCES `securityquestions` (`questionid`),
  CONSTRAINT `rid` FOREIGN KEY (`roleid`) REFERENCES `roles` (`roleid`)
) ENGINE=InnoDB AUTO_INCREMENT=118 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (56,'Admin','Admin@123','batman',1,3,6),(57,'Tata Pune','T@123','batman',1,2,6),(58,'hondag','H@123','batman',1,2,6),(66,'Amin','A@123','sachin',1,1,6),(67,'Saurabh','S@123','batman',1,1,6),(76,'mahipune','M@123','batman',1,2,6),(79,'mgpune','M@123','Pune',1,2,2),(80,'hypune','H@123','f1',1,2,5),(85,'hondapune','H@123','basketball',1,2,5),(88,'tpune','T@123','batman',0,2,6),(97,'Ashu','A@123','answer',1,1,6),(99,'Shreya','S@123','cricket',1,1,5),(101,'garvehonda','S@123','121',0,2,1),(102,'Ecco2K','Pass@123','Stockholm',1,1,1),(103,'yunglean','Pass@123','a',1,1,1),(104,'userid','User@123','batman',1,1,1),(105,'pnerkar','Pass@123','a',1,1,4),(106,'HPune','Hp@123','Pune',1,2,2),(108,'Sups','Supriya@123','',1,1,6),(109,'ritz','Ritesh@123','Kolhapur',1,1,2),(110,'mahesh','Mahi@123','solapur',1,1,2),(111,'kiapune','Kia@1234','batman',0,2,1),(112,'renaultkatraj','Renault@123','f1',1,2,1),(113,'raj','Rajverma@123','batman',1,1,6),(114,'toyotapune','Toyota@123','f1',1,2,1),(115,'niks','Niks@123','batman',1,1,6);
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `packagedetails`
--

DROP TABLE IF EXISTS `packagedetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `packagedetails` (
  `packagedetailsid` int NOT NULL AUTO_INCREMENT,
  `packagename` varchar(45) NOT NULL,
  `cost` decimal(9,2) NOT NULL,
  `servicecenterid` int NOT NULL,
  PRIMARY KEY (`packagedetailsid`),
  KEY `sid_idx` (`servicecenterid`),
  CONSTRAINT `sid` FOREIGN KEY (`servicecenterid`) REFERENCES `servicecenters` (`servicecenterid`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `packagedetails`
--

LOCK TABLES `packagedetails` WRITE;
/*!40000 ALTER TABLE `packagedetails` DISABLE KEYS */;
INSERT INTO `packagedetails` VALUES (1,'Basic',1890.00,8),(2,'Silver',2500.00,8),(3,'Gold',3450.00,8),(4,'wash and wax',1000.00,15),(9,'Basic servicing',1500.00,22),(10,'MG-Basics',2000.00,12),(11,'MG-Premium',4500.00,12),(17,'Mahindra-Basics',1000.00,10),(18,'Renault-Basic',1500.00,24),(19,'Toyota-Basics',1500.00,25);
/*!40000 ALTER TABLE `packagedetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `packages`
--

DROP TABLE IF EXISTS `packages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `packages` (
  `packageid` int NOT NULL AUTO_INCREMENT,
  `facilityid` int NOT NULL,
  PRIMARY KEY (`packageid`,`facilityid`),
  KEY `fid_idx` (`facilityid`),
  CONSTRAINT `fid` FOREIGN KEY (`facilityid`) REFERENCES `facilities` (`facilityid`),
  CONSTRAINT `pid` FOREIGN KEY (`packageid`) REFERENCES `packagedetails` (`packagedetailsid`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `packages`
--

LOCK TABLES `packages` WRITE;
/*!40000 ALTER TABLE `packages` DISABLE KEYS */;
INSERT INTO `packages` VALUES (2,1),(3,1),(9,1),(10,1),(11,1),(17,1),(18,1),(19,1),(2,2),(3,2),(11,2),(17,2),(18,2),(19,2),(2,3),(3,3),(9,3),(11,3),(17,3),(18,3),(19,3),(3,4),(9,4),(11,4),(3,5),(11,5),(3,6),(3,7),(9,10),(11,12),(11,13),(11,14),(10,15),(11,15),(9,16),(10,16),(10,17),(10,18),(2,20),(1,21),(2,21),(3,21),(1,22),(2,22),(3,22),(1,23),(2,23),(3,23);
/*!40000 ALTER TABLE `packages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ratings`
--

DROP TABLE IF EXISTS `ratings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ratings` (
  `ratingid` int NOT NULL AUTO_INCREMENT,
  `rating` int DEFAULT NULL,
  `comment` varchar(45) DEFAULT NULL,
  `customerid` int DEFAULT NULL,
  `servicecenterid` int DEFAULT NULL,
  PRIMARY KEY (`ratingid`),
  KEY `servcid_idx` (`servicecenterid`),
  KEY `custid_idx` (`customerid`),
  CONSTRAINT `custid` FOREIGN KEY (`customerid`) REFERENCES `customers` (`customerid`),
  CONSTRAINT `servcid` FOREIGN KEY (`servicecenterid`) REFERENCES `servicecenters` (`servicecenterid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ratings`
--

LOCK TABLES `ratings` WRITE;
/*!40000 ALTER TABLE `ratings` DISABLE KEYS */;
INSERT INTO `ratings` VALUES (1,5,'0',84,21),(2,5,'Great service...!',89,24),(3,5,'Great Service...!',90,25);
/*!40000 ALTER TABLE `ratings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `roleid` int NOT NULL AUTO_INCREMENT,
  `rolename` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`roleid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Customer'),(2,'Service Center'),(3,'Admin');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `securityquestions`
--

DROP TABLE IF EXISTS `securityquestions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `securityquestions` (
  `questionid` int NOT NULL AUTO_INCREMENT,
  `questiontext` varchar(45) NOT NULL,
  PRIMARY KEY (`questionid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `securityquestions`
--

LOCK TABLES `securityquestions` WRITE;
/*!40000 ALTER TABLE `securityquestions` DISABLE KEYS */;
INSERT INTO `securityquestions` VALUES (1,'What was your favorite food as a child?'),(2,'In what city were you born?'),(3,'What is the name of your favorite pet?'),(4,'What was the make of your first car?'),(5,'What is your favorite sport?'),(6,'Who was your childhood hero?');
/*!40000 ALTER TABLE `securityquestions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicecenters`
--

DROP TABLE IF EXISTS `servicecenters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicecenters` (
  `servicecenterid` int NOT NULL AUTO_INCREMENT,
  `scname` varchar(45) NOT NULL,
  `emailid` varchar(45) NOT NULL,
  `contactno` varchar(45) NOT NULL,
  `lane` varchar(45) NOT NULL,
  `brandid` int NOT NULL,
  `bookinglimit` int NOT NULL,
  `areaid` int NOT NULL,
  `loginid` int NOT NULL,
  PRIMARY KEY (`servicecenterid`),
  KEY `bid_idx` (`brandid`),
  KEY `aid_idx` (`areaid`),
  KEY `lid_idx` (`loginid`),
  CONSTRAINT `arid` FOREIGN KEY (`areaid`) REFERENCES `area` (`areaid`),
  CONSTRAINT `bid` FOREIGN KEY (`brandid`) REFERENCES `brands` (`brandid`),
  CONSTRAINT `loid` FOREIGN KEY (`loginid`) REFERENCES `login` (`loginid`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicecenters`
--

LOCK TABLES `servicecenters` WRITE;
/*!40000 ALTER TABLE `servicecenters` DISABLE KEYS */;
INSERT INTO `servicecenters` VALUES (8,'Tata Pune','tatapune@gmail.com','1234567890','near Kothrud Depto',5,25,2,57),(9,'Garve Honda ','garve@honda','7770070411','Shivaji Nagar',4,25,1,58),(10,'Pune Mahindra','mahindra@gmail.com','94568791235','Shivaji Nagar',6,30,1,76),(12,'MG Pune','mgpune@mgmotors.com','9632587410','Near Katraj Zoo',7,40,10,79),(13,'Hyundai Pune','hyp@gmail.com','7856491234','Shivaji Nagar',2,15,1,80),(15,'Honda Showroom','honda@gmail.com','9898989898','near navle bridge',4,20,8,85),(17,'Toyota Pune','toyotapune@gmail.com','9548623515','near Khadi Machine Chowk, Kondhwa',8,10,9,88),(21,'Pune Mahindra','email@gmail.com','7898456512','dadda',1,51,4,101),(22,'hondaPune','Hp@gmail.com','9856231478','Seasons Mall',4,10,5,106),(23,'Kia Motors Pune','kiapune@gmail.com','7745124578','JM Road',3,10,1,111),(24,'Renault Motors Katraj','renaultkatraj@gmail.com','7845105692','Near Katraj Dairy',10,10,10,112),(25,'Toyota Pune','punet@gmail.com','9845784562','Near Katraj Dairy',8,10,10,114);
/*!40000 ALTER TABLE `servicecenters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `serviceprogress`
--

DROP TABLE IF EXISTS `serviceprogress`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `serviceprogress` (
  `serviceprogressid` int NOT NULL AUTO_INCREMENT,
  `checkin` datetime DEFAULT NULL,
  `stageone` datetime DEFAULT NULL,
  `stagetwo` datetime DEFAULT NULL,
  `checkout` datetime DEFAULT NULL,
  `delivered` tinyint(1) DEFAULT NULL,
  `servicerequestid` int NOT NULL,
  PRIMARY KEY (`serviceprogressid`),
  KEY `srqid_idx` (`servicerequestid`),
  CONSTRAINT `srqid` FOREIGN KEY (`servicerequestid`) REFERENCES `servicerequests` (`servicerequestid`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `serviceprogress`
--

LOCK TABLES `serviceprogress` WRITE;
/*!40000 ALTER TABLE `serviceprogress` DISABLE KEYS */;
INSERT INTO `serviceprogress` VALUES (48,'2024-02-23 19:42:50','2024-02-23 20:57:09','2024-02-23 20:57:11','2024-02-23 19:43:43',1,111),(49,'2024-02-23 20:26:46','2024-02-23 20:26:51','2024-02-23 20:26:55','2024-02-23 20:33:21',1,109),(50,'2024-02-23 20:45:06',NULL,NULL,NULL,0,109),(51,'2024-02-23 20:45:23',NULL,NULL,NULL,0,109),(52,'2024-02-23 20:48:02',NULL,NULL,NULL,0,109),(53,'2024-02-23 20:52:47',NULL,NULL,NULL,0,109),(54,'2024-02-23 20:56:48','2024-02-23 20:57:09','2024-02-23 20:57:11',NULL,0,111),(55,'2024-02-23 20:57:06','2024-02-23 20:57:09','2024-02-23 20:57:11',NULL,0,111),(56,'2024-02-23 20:57:22','2024-02-23 20:57:24','2024-02-23 20:57:27','2024-02-23 20:57:36',1,112),(57,'2024-02-23 21:06:42','2024-02-23 21:06:45','2024-02-23 21:06:49','2024-02-23 21:06:55',1,115),(58,'2024-02-24 08:25:06','2024-02-24 08:25:08','2024-02-24 08:25:11','2024-02-24 08:25:18',1,116),(59,'2024-02-24 09:34:37','2024-02-24 09:34:40','2024-02-24 09:34:42','2024-02-24 09:34:51',1,117);
/*!40000 ALTER TABLE `serviceprogress` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicerequests`
--

DROP TABLE IF EXISTS `servicerequests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicerequests` (
  `servicerequestid` int NOT NULL AUTO_INCREMENT,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `bookingdate` date NOT NULL,
  `pickuptime` time DEFAULT NULL,
  `servicdate` date NOT NULL,
  `vehicleid` int NOT NULL,
  `servicecenterid` int NOT NULL,
  `packageid` int NOT NULL,
  PRIMARY KEY (`servicerequestid`),
  UNIQUE KEY `servd_vehid_pkg_unique` (`servicdate`,`vehicleid`,`packageid`),
  KEY `vid_idx` (`vehicleid`),
  KEY `sccid_idx` (`servicecenterid`),
  KEY `pkid_idx` (`packageid`),
  CONSTRAINT `pkid` FOREIGN KEY (`packageid`) REFERENCES `packagedetails` (`packagedetailsid`),
  CONSTRAINT `sccid` FOREIGN KEY (`servicecenterid`) REFERENCES `servicecenters` (`servicecenterid`),
  CONSTRAINT `vid` FOREIGN KEY (`vehicleid`) REFERENCES `vehicles` (`vehicleid`)
) ENGINE=InnoDB AUTO_INCREMENT=118 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicerequests`
--

LOCK TABLES `servicerequests` WRITE;
/*!40000 ALTER TABLE `servicerequests` DISABLE KEYS */;
INSERT INTO `servicerequests` VALUES (109,1,'2024-02-23','13:08:00','2024-02-23',33,8,1),(111,1,'2024-02-23','19:49:00','2024-02-23',34,12,11),(112,1,'2024-02-23','20:57:00','2024-02-23',34,12,10),(115,1,'2024-02-23','21:08:00','2024-02-23',41,10,17),(116,1,'2024-02-24','08:26:00','2024-02-24',42,24,18),(117,1,'2024-02-24','09:38:00','2024-02-24',43,25,19);
/*!40000 ALTER TABLE `servicerequests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transactions` (
  `transactionid` int NOT NULL AUTO_INCREMENT,
  `amount` decimal(9,2) NOT NULL,
  `date` datetime NOT NULL,
  `paymentmode` varchar(45) NOT NULL,
  `serviceprogressid` int NOT NULL,
  PRIMARY KEY (`transactionid`),
  KEY `serviceprogressid_idx` (`serviceprogressid`),
  CONSTRAINT `serviceprogressid` FOREIGN KEY (`serviceprogressid`) REFERENCES `serviceprogress` (`serviceprogressid`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
INSERT INTO `transactions` VALUES (19,4500.00,'2024-02-23 19:43:43','Cash',48),(20,1890.00,'2024-02-23 20:27:03','UPI',49),(21,1890.00,'2024-02-23 20:27:12','UPI',49),(22,1890.00,'2024-02-23 20:27:18','Cash',49),(23,1890.00,'2024-02-23 20:33:21','UPI',49),(24,2000.00,'2024-02-23 20:57:36','UPI',56),(25,1000.00,'2024-02-23 21:06:55','UPI',57),(26,1500.00,'2024-02-24 08:25:18','UPI',58),(27,1500.00,'2024-02-24 09:34:51','Cash',59);
/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicles`
--

DROP TABLE IF EXISTS `vehicles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicles` (
  `vehicleid` int NOT NULL AUTO_INCREMENT,
  `vehiclenumber` varchar(45) NOT NULL,
  `model` varchar(45) NOT NULL,
  `fueltype` varchar(45) NOT NULL,
  `registrationyear` int NOT NULL,
  `brandid` int NOT NULL,
  `customerid` int NOT NULL,
  PRIMARY KEY (`vehicleid`),
  UNIQUE KEY `vehiclenumber_UNIQUE` (`vehiclenumber`),
  KEY `brid_idx` (`brandid`),
  KEY `cuid_idx` (`customerid`),
  CONSTRAINT `brid` FOREIGN KEY (`brandid`) REFERENCES `brands` (`brandid`),
  CONSTRAINT `cuid` FOREIGN KEY (`customerid`) REFERENCES `customers` (`customerid`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicles`
--

LOCK TABLES `vehicles` WRITE;
/*!40000 ALTER TABLE `vehicles` DISABLE KEYS */;
INSERT INTO `vehicles` VALUES (32,'MH12RG6769','Punch','Petrol',2020,5,84),(33,'MH12RG6968','Tigor','Petrol',2021,5,84),(34,'MH12RG670','Hector','Diesel',2022,7,84),(35,'MH11AS7777','Nexon','Petrol',2024,5,7),(36,'MH11AS6666','Brezza','Petrol',2023,1,38),(37,'MH12Ak0101','Creta','Petrol',2021,2,42),(38,'MH12RG7877','Duster','Diesel',2019,10,84),(39,'MH12RG7845','Mustang','Petrol',2015,9,84),(40,'MH12RG6977','Hornet','Petrol',2020,4,42),(41,'MH24RG4545','Scorpio','Petrol',2020,6,84),(42,'MH14RP4595','Duster','Petrol',2020,10,89),(43,'MH12RG6960','ABC','Petrol',2020,8,90);
/*!40000 ALTER TABLE `vehicles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-24 10:39:02
