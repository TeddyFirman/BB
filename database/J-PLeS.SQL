-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: j_ples_database
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
-- Table structure for table `answers`
--

DROP TABLE IF EXISTS `answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `answers` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `question_id` bigint unsigned NOT NULL,
  `answer` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_correct` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `answers_question_id_foreign` (`question_id`),
  CONSTRAINT `answers_question_id_foreign` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answers`
--

LOCK TABLES `answers` WRITE;
/*!40000 ALTER TABLE `answers` DISABLE KEYS */;
INSERT INTO `answers` VALUES (9,10,'System',1,NULL,NULL),(10,1,'System',1,NULL,'2023-12-28 19:52:33'),(11,2,'//',1,NULL,NULL);
/*!40000 ALTER TABLE `answers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `babs`
--

DROP TABLE IF EXISTS `babs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `babs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `subject_id` bigint unsigned NOT NULL,
  `judul` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `pertanyaan` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `form_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `babs_subject_id_foreign` (`subject_id`),
  CONSTRAINT `babs_subject_id_foreign` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `babs`
--

LOCK TABLES `babs` WRITE;
/*!40000 ALTER TABLE `babs` DISABLE KEYS */;
INSERT INTO `babs` VALUES (1,1,'Java Syntax 1','2023-12-28 17:47:07','2023-12-28 17:47:07','~~~Java showLineNumbers\npublic class MyClass {\n  public static void main(String[] args) {\n    [....].out.println(\"Hello World\");\n  }\n}\n~~~','fid658db49bd6a6c'),(2,1,'Java Syntax 2','2023-12-28 17:50:23','2023-12-28 17:50:23','~~~Java showLineNumbers\n[....] a single-line comment\n~~~','fid658db55fe2cc2'),(3,2,'Java Variables 1','2023-12-28 18:01:18','2023-12-28 19:06:06','~~~Java showLineNumbers\nString [....] = \"Volvo\";\n~~~','fid658db7ee021c9');
/*!40000 ALTER TABLE `babs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `babs_answers`
--

DROP TABLE IF EXISTS `babs_answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `babs_answers` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `attempt_id` bigint unsigned NOT NULL,
  `question_id` bigint unsigned NOT NULL,
  `typed_answer` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `babs_answers_attempt_id_foreign` (`attempt_id`),
  KEY `babs_answers_question_id_foreign` (`question_id`),
  CONSTRAINT `babs_answers_attempt_id_foreign` FOREIGN KEY (`attempt_id`) REFERENCES `babs_attempt` (`id`) ON DELETE CASCADE,
  CONSTRAINT `babs_answers_question_id_foreign` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `babs_answers`
--

LOCK TABLES `babs_answers` WRITE;
/*!40000 ALTER TABLE `babs_answers` DISABLE KEYS */;
/*!40000 ALTER TABLE `babs_answers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `babs_attempt`
--

DROP TABLE IF EXISTS `babs_attempt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `babs_attempt` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `bab_id` bigint unsigned NOT NULL,
  `user_id` bigint unsigned NOT NULL,
  `status` int NOT NULL DEFAULT '0',
  `marks` float DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `babs_attempt_bab_id_foreign` (`bab_id`),
  KEY `babs_attempt_user_id_foreign` (`user_id`),
  CONSTRAINT `babs_attempt_bab_id_foreign` FOREIGN KEY (`bab_id`) REFERENCES `babs` (`id`) ON DELETE CASCADE,
  CONSTRAINT `babs_attempt_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `babs_attempt`
--

LOCK TABLES `babs_attempt` WRITE;
/*!40000 ALTER TABLE `babs_attempt` DISABLE KEYS */;
/*!40000 ALTER TABLE `babs_attempt` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_reset_tokens_table',1),(3,'2019_08_19_000000_create_failed_jobs_table',1),(4,'2019_12_14_000001_create_personal_access_tokens_table',1),(5,'2023_11_29_221521_add_details_to_users_table',1),(6,'2023_11_29_223629_create_subjects_table',1),(7,'2023_11_30_102704_create_permission_tables',1),(8,'2023_11_30_161242_create_babs_table',2),(9,'2023_11_30_190115_create_questions_table',3),(10,'2023_11_30_190317_create_answers_table',4),(11,'2023_11_30_194108_add_isi_to_babs_table',5),(12,'2023_12_02_165600_create_qna_babs_table',6),(13,'2023_12_02_235324_add_form_to_babs_table',7),(14,'2023_12_03_011533_create_babs_attempt_table',8),(15,'2023_12_03_012111_create_babs_answers_table',9),(16,'2023_12_03_022125_create_babs_answers_table',10),(17,'2023_12_03_151747_create_perans_table',11),(18,'2023_12_13_055409_create_permission_tables',12);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `model_has_permissions`
--

DROP TABLE IF EXISTS `model_has_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `model_has_permissions` (
  `permission_id` bigint unsigned NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`),
  CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `model_has_permissions`
--

LOCK TABLES `model_has_permissions` WRITE;
/*!40000 ALTER TABLE `model_has_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `model_has_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `model_has_roles`
--

DROP TABLE IF EXISTS `model_has_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `model_has_roles` (
  `role_id` bigint unsigned NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`),
  CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `model_has_roles`
--

LOCK TABLES `model_has_roles` WRITE;
/*!40000 ALTER TABLE `model_has_roles` DISABLE KEYS */;
INSERT INTO `model_has_roles` VALUES (1,'App\\Models\\User',2),(2,'App\\Models\\User',2),(3,'App\\Models\\User',5),(2,'App\\Models\\User',9),(1,'App\\Models\\User',10);
/*!40000 ALTER TABLE `model_has_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_tokens`
--

LOCK TABLES `password_reset_tokens` WRITE;
/*!40000 ALTER TABLE `password_reset_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `perans`
--

DROP TABLE IF EXISTS `perans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `perans` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perans`
--

LOCK TABLES `perans` WRITE;
/*!40000 ALTER TABLE `perans` DISABLE KEYS */;
INSERT INTO `perans` VALUES (1,'admin',NULL,NULL),(2,'user',NULL,NULL);
/*!40000 ALTER TABLE `perans` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permissions`
--

DROP TABLE IF EXISTS `permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permissions` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permissions`
--

LOCK TABLES `permissions` WRITE;
/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=141 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
INSERT INTO `personal_access_tokens` VALUES (1,'App\\Models\\User',10,'auth_token','2a8bdafc58e48020e58e540eb344107c0925de101a9fdebf6e0a02161e345699','[\"*\"]','2023-12-12 15:03:11',NULL,'2023-12-12 13:54:34','2023-12-12 15:03:11'),(2,'App\\Models\\User',10,'auth_token','ee95c57e3d816784f95451f1e097c28910c7ccd79bcaf153f604bf7f24bb13a4','[\"*\"]','2023-12-12 15:05:17',NULL,'2023-12-12 15:03:25','2023-12-12 15:05:17'),(3,'App\\Models\\User',10,'auth_token','2271694b3471ef7dd2188e4c42781a7eda8c66e0794aa0795398ab44afb3e58f','[\"*\"]',NULL,NULL,'2023-12-12 16:00:02','2023-12-12 16:00:02'),(4,'App\\Models\\User',10,'auth_token','267f991a073b679af6b429ca8c57623fdc7939904f8c8c89f5b0506f901dc4cf','[\"*\"]',NULL,NULL,'2023-12-12 16:08:03','2023-12-12 16:08:03'),(5,'App\\Models\\User',10,'auth_token','8095d1773cbb42b0fefab25a4a0d0b48938fce2a4cc8cdb2c252fbc4dfa8e3f4','[\"*\"]',NULL,NULL,'2023-12-12 16:09:08','2023-12-12 16:09:08'),(6,'App\\Models\\User',10,'auth_token','5229b7f48fa07afa8c2a212feaf8052b3f9aa221940d92f3c9f86452b7034f48','[\"*\"]','2023-12-12 16:21:25',NULL,'2023-12-12 16:17:44','2023-12-12 16:21:25'),(7,'App\\Models\\User',10,'auth_token','11cdd292ef67c140d5f181736ff7afb860b8071c62fd8c113f07e70c0e99c284','[\"*\"]',NULL,NULL,'2023-12-12 16:29:47','2023-12-12 16:29:47'),(8,'App\\Models\\User',10,'auth_token','b2ac29a6eb8173165414040c8387f09537d0029b106f60ed8fea079a951fdd4e','[\"*\"]','2023-12-12 16:36:07',NULL,'2023-12-12 16:32:25','2023-12-12 16:36:07'),(9,'App\\Models\\User',1,'auth_token','15e86cd3d38fa333c3e0b44dab7dcf4cbb2ecc63c2eeb018d0fc6ee000af8fec','[\"*\"]',NULL,NULL,'2023-12-12 23:04:39','2023-12-12 23:04:39'),(10,'App\\Models\\User',1,'auth_token','ef22a4b2138418b76d0b5307b9deeaf1737b60e6c46db8d1b08617de87e263db','[\"*\"]',NULL,NULL,'2023-12-12 23:05:14','2023-12-12 23:05:14'),(11,'App\\Models\\User',1,'auth_token','094c09df303efbe6e3b9fb138a608ee09f18990c8c8208feb6f0b7078bce308f','[\"*\"]','2023-12-12 23:44:36',NULL,'2023-12-12 23:05:27','2023-12-12 23:44:36'),(12,'App\\Models\\User',1,'auth_token','3c86dd0b93ded41efc45c895d048ed5148c8a6abb9955f832a2355abe20a2e5d','[\"*\"]',NULL,NULL,'2023-12-12 23:45:14','2023-12-12 23:45:14'),(13,'App\\Models\\User',1,'auth_token','a7f751c2e8c1b9a6f69d8be729feff1d4bde6d6e55c46986301c1a29d7384002','[\"*\"]',NULL,NULL,'2023-12-13 02:51:14','2023-12-13 02:51:14'),(14,'App\\Models\\User',2,'auth_token','08c4148f4860536aa37aeadffaccfe0c377e0c7ec821a2a0b5504a0b510203d5','[\"*\"]',NULL,NULL,'2023-12-13 02:59:43','2023-12-13 02:59:43'),(15,'App\\Models\\User',2,'auth_token','cbc699b856fa3e76730f547d0292688c85a8c4bc809edf3c5070634f3973b788','[\"*\"]',NULL,NULL,'2023-12-13 02:59:59','2023-12-13 02:59:59'),(16,'App\\Models\\User',1,'auth_token','b8dccbb1a6762e7992150150103ff08adb7e130ecf7c7c7afbbd8bbc103aeb56','[\"*\"]',NULL,NULL,'2023-12-13 22:42:41','2023-12-13 22:42:41'),(17,'App\\Models\\User',3,'auth_token','5d0b741cfe81d2bcddb8dd46be23daabb7ecc211b20abc91a7017311e1a4fe90','[\"*\"]',NULL,NULL,'2023-12-13 22:44:48','2023-12-13 22:44:48'),(18,'App\\Models\\User',3,'auth_token','3f39eeabb5cc0fc4f494f756bf0453bca69e03a03c771dba19ffa4675f16cd36','[\"*\"]',NULL,NULL,'2023-12-13 22:45:27','2023-12-13 22:45:27'),(19,'App\\Models\\User',4,'auth_token','e466ddae309f53aefb733e409165a7610c0335b4f1c53b3838f7213124ec9f37','[\"*\"]',NULL,NULL,'2023-12-13 22:47:03','2023-12-13 22:47:03'),(20,'App\\Models\\User',4,'auth_token','fc65321687d2ec0267a2eea7d7d2132225f9949fc35ce188fcb360b9454b89d7','[\"*\"]',NULL,NULL,'2023-12-13 22:47:26','2023-12-13 22:47:26'),(21,'App\\Models\\User',4,'auth_token','618eff50ac12d9a3417a6cbcfb9cd2869bd3e555087f3273ef6b41f402e45ef0','[\"*\"]',NULL,NULL,'2023-12-13 22:52:09','2023-12-13 22:52:09'),(22,'App\\Models\\User',5,'auth_token','fd401e9edd9628d56444d40b3388c45741e9363c5551f6c22f70e3f6fcefabee','[\"*\"]',NULL,NULL,'2023-12-13 22:52:56','2023-12-13 22:52:56'),(23,'App\\Models\\User',5,'auth_token','9d1ed724e915a4a5dd0dc8879075307135df0a0d39de14d9b52dbdda51fde56f','[\"*\"]',NULL,NULL,'2023-12-13 22:53:06','2023-12-13 22:53:06'),(24,'App\\Models\\User',5,'auth_token','56317b19a0e1d3a825320db0e2dc221d0d89228ad86fecdb427db1a5a06f7a64','[\"*\"]',NULL,NULL,'2023-12-13 23:05:52','2023-12-13 23:05:52'),(25,'App\\Models\\User',5,'auth_token','aa95c1b724005ac57c5b9a71050a1c60d47fcf89dfc26507d8f979b0a18c5b14','[\"*\"]',NULL,NULL,'2023-12-13 23:06:01','2023-12-13 23:06:01'),(26,'App\\Models\\User',5,'auth_token','0f51c285e50a9eb8049c8998f325a1ff71cc379821360269e7c5d2174eed4433','[\"*\"]',NULL,NULL,'2023-12-13 23:07:34','2023-12-13 23:07:34'),(27,'App\\Models\\User',5,'auth_token','ed8a9cb8dcbea568416336c6dfbf39e13d9b6a9cc356b5aaa525df7abe7e2c6d','[\"*\"]',NULL,NULL,'2023-12-13 23:11:31','2023-12-13 23:11:31'),(28,'App\\Models\\User',5,'auth_token','c8a9d29cb642715fafba2df4316b0178380a67263e2cc386ad58bdec76441d24','[\"*\"]',NULL,NULL,'2023-12-13 23:12:47','2023-12-13 23:12:47'),(29,'App\\Models\\User',9,'auth_token','ffd6f736176c77a50e65f0f6fd703e2bcd48ba4986540373dfea8d46ccc03128','[\"*\"]',NULL,NULL,'2023-12-13 23:17:33','2023-12-13 23:17:33'),(30,'App\\Models\\User',9,'auth_token','7af2e0ea95efb0e34ca7e86799ae8f54cc8a25762ef7a5b23cd240c422d10239','[\"*\"]',NULL,NULL,'2023-12-13 23:17:54','2023-12-13 23:17:54'),(31,'App\\Models\\User',9,'auth_token','18355c0e68bc9a7bf993d7818e9361430cab81f78d6befff6677be2e39c0e011','[\"*\"]',NULL,NULL,'2023-12-13 23:18:23','2023-12-13 23:18:23'),(32,'App\\Models\\User',9,'auth_token','eaeb496fc1e809fff852df965e27bb7ca9361a5ebe7417eab7bc7f3179c234b3','[\"*\"]',NULL,NULL,'2023-12-13 23:18:29','2023-12-13 23:18:29'),(33,'App\\Models\\User',9,'auth_token','062465573220140c8f327f21914b6e61a48e84588710b9b142ccf57620937673','[\"*\"]',NULL,NULL,'2023-12-13 23:24:52','2023-12-13 23:24:52'),(34,'App\\Models\\User',9,'auth_token','d47d622dbae3b6d2eaf56b073b23e79f0c482c68c32b82ba1a352cc23c4cb874','[\"*\"]',NULL,NULL,'2023-12-13 23:25:52','2023-12-13 23:25:52'),(35,'App\\Models\\User',10,'auth_token','e3f34518fdd3ba0421c9f5b43002196402d3cbeb855f0027a4992c79c7fbb357','[\"*\"]',NULL,NULL,'2023-12-13 23:27:05','2023-12-13 23:27:05'),(36,'App\\Models\\User',10,'auth_token','68e6b3b93163177d2a8b494195ac26aeb1cb2a67cd01c2a563747b7549860d20','[\"*\"]',NULL,NULL,'2023-12-13 23:27:23','2023-12-13 23:27:23'),(37,'App\\Models\\User',11,'auth_token','2f8b7530454ac11291fe5beb3a8f56529cbfa5d3b1055e50f74b908405912bf4','[\"*\"]',NULL,NULL,'2023-12-13 23:27:55','2023-12-13 23:27:55'),(38,'App\\Models\\User',11,'auth_token','ea776859881409b8c13439e7e150432d00ac8e8cf7e20f0a07b9ff1561e25c31','[\"*\"]',NULL,NULL,'2023-12-13 23:28:33','2023-12-13 23:28:33'),(39,'App\\Models\\User',11,'auth_token','44fc76d2d15ba72e5999fece6a526079cb3d0c4467ded2c0cfa303ce5f356cac','[\"*\"]',NULL,NULL,'2023-12-13 23:28:52','2023-12-13 23:28:52'),(40,'App\\Models\\User',1,'auth_token','88b336c78c2345c7b25b0eac2d2ffc61769ddc0fd2f66b0114a693f7d44453d3','[\"*\"]',NULL,NULL,'2023-12-13 23:44:49','2023-12-13 23:44:49'),(41,'App\\Models\\User',1,'auth_token','4012038c2a91fb980186bef58e1c7ee85db485ec1d87254c2b7a824e2bbfeac5','[\"*\"]',NULL,NULL,'2023-12-13 23:45:03','2023-12-13 23:45:03'),(42,'App\\Models\\User',1,'auth_token','d4647ad1817f42224c4fac7d4429e58ec24c9b9042620233cd364a84636e2449','[\"*\"]',NULL,NULL,'2023-12-13 23:47:29','2023-12-13 23:47:29'),(43,'App\\Models\\User',1,'auth_token','a85a0efbed81028e17c168ab5267c28fc4042440927e00a4c0292b33f5fc0bcb','[\"*\"]',NULL,NULL,'2023-12-13 23:48:55','2023-12-13 23:48:55'),(44,'App\\Models\\User',1,'auth_token','fe6284d6d086d2eb519c569b5df97ff554463243dfea40bcd30a6013d0f359a9','[\"*\"]',NULL,NULL,'2023-12-13 23:49:52','2023-12-13 23:49:52'),(45,'App\\Models\\User',1,'auth_token','f9bda94d231dcf22a03f1e606ef70a76ece5c241e4288f002a6e0d077fb13ddd','[\"*\"]',NULL,NULL,'2023-12-13 23:51:32','2023-12-13 23:51:32'),(46,'App\\Models\\User',1,'auth_token','bf1bd839a6c17c2726f703ee0e89f832161bb59d5d0c130120e50132f2d04ced','[\"*\"]',NULL,NULL,'2023-12-13 23:52:17','2023-12-13 23:52:17'),(47,'App\\Models\\User',1,'auth_token','cced59974b579bd31d5cfd486b652c4f348e5635878e5d7857dbf1a46ea36389','[\"*\"]',NULL,NULL,'2023-12-13 23:53:31','2023-12-13 23:53:31'),(48,'App\\Models\\User',2,'auth_token','a7d034af2764d525215d1fffbae9964dd8ab6ead7d72086eeab32c34f2404b5e','[\"*\"]',NULL,NULL,'2023-12-13 23:55:01','2023-12-13 23:55:01'),(49,'App\\Models\\User',2,'auth_token','abdbcc8568ce4d5dad4ee2a58b728fd57803e59ba7f147c0adfc5e1b1e7be322','[\"*\"]',NULL,NULL,'2023-12-13 23:55:11','2023-12-13 23:55:11'),(50,'App\\Models\\User',2,'auth_token','7b0da0052d4c53c0e6399b3d64e1cd8d5ef3895a3ca9fded2193762b2cc73c92','[\"*\"]',NULL,NULL,'2023-12-13 23:56:20','2023-12-13 23:56:20'),(51,'App\\Models\\User',1,'auth_token','158131dc2f00d5c39b8a7cb67736ce3aa0a88604e4557fff2997f431a95edd0e','[\"*\"]',NULL,NULL,'2023-12-13 23:59:38','2023-12-13 23:59:38'),(52,'App\\Models\\User',1,'auth_token','7d06187cf972856830cf164f05f421ec3e350f5d2afad79025b29f06a89d1822','[\"*\"]',NULL,NULL,'2023-12-14 00:00:08','2023-12-14 00:00:08'),(53,'App\\Models\\User',1,'auth_token','efe2d3920e161b0e42a32fbbc5c2f40155032221f8d09c9f5f6abf0328605856','[\"*\"]',NULL,NULL,'2023-12-14 00:00:35','2023-12-14 00:00:35'),(54,'App\\Models\\User',2,'auth_token','94443828a7a1b99d3358f64b8d707f743e4e4d2f5564220fd476e3981ca2d784','[\"*\"]',NULL,NULL,'2023-12-14 00:01:18','2023-12-14 00:01:18'),(55,'App\\Models\\User',2,'auth_token','9dd754db66660450cebf1a10ca57feb8cd2995bd0f504982a742087dc9e98d2f','[\"*\"]',NULL,NULL,'2023-12-14 00:01:47','2023-12-14 00:01:47'),(56,'App\\Models\\User',2,'auth_token','8ad505de9c0e427d2d6a2dd7970d0a384e7057b358cb6b113d0a985557f107f4','[\"*\"]',NULL,NULL,'2023-12-14 00:02:30','2023-12-14 00:02:30'),(57,'App\\Models\\User',2,'auth_token','ca52fc4aa39ec2308b3db82a07bb615c18796f5ecc4eef25b97e6ca42d73e3db','[\"*\"]',NULL,NULL,'2023-12-14 00:02:55','2023-12-14 00:02:55'),(58,'App\\Models\\User',2,'auth_token','15f5994d90859194723ea110472bb703cf7f4e7d8e7509fb88fd01758c8d25c1','[\"*\"]',NULL,NULL,'2023-12-14 00:03:09','2023-12-14 00:03:09'),(59,'App\\Models\\User',2,'auth_token','a4db097bbfc42f0cbe1ed72c2c7e377411c42d34de6c4f04cfa8e9700e2a28cb','[\"*\"]','2023-12-14 00:03:44',NULL,'2023-12-14 00:03:32','2023-12-14 00:03:44'),(60,'App\\Models\\User',1,'auth_token','f2ce6d5032cb2bae7251d17f741a0a67bdf9c47f40c4a2585ffdcb5f002b8ee6','[\"*\"]','2023-12-14 00:04:08',NULL,'2023-12-14 00:03:55','2023-12-14 00:04:08'),(61,'App\\Models\\User',1,'auth_token','625f304a2e22f11c0e88eef92a999565afde1d47da0b9a7d6a79284d315b8f36','[\"*\"]',NULL,NULL,'2023-12-14 00:09:06','2023-12-14 00:09:06'),(62,'App\\Models\\User',1,'auth_token','26ea9418454536a90ecfcba254dac202a59761bc1071e204cc03f310686bdd41','[\"*\"]',NULL,NULL,'2023-12-14 00:09:25','2023-12-14 00:09:25'),(63,'App\\Models\\User',3,'auth_token','4a487c71148414f4b33eb623eb617d699cb7820619e1e56b8442d79a37db7a0f','[\"*\"]',NULL,NULL,'2023-12-14 00:10:39','2023-12-14 00:10:39'),(64,'App\\Models\\User',3,'auth_token','ad34c54e964c5b6a37845fa23d74ac0dbc5996b9a4623ba132505d103c35760b','[\"*\"]',NULL,NULL,'2023-12-14 00:10:46','2023-12-14 00:10:46'),(65,'App\\Models\\User',2,'auth_token','f053cf69bf7a136f97738080fc716ce3d41b3ff30a8e829a1c24af5345c8f495','[\"*\"]',NULL,NULL,'2023-12-14 00:12:02','2023-12-14 00:12:02'),(66,'App\\Models\\User',2,'auth_token','860bf7ca6f5d2f65f56d6f08851a49211c42d9d286f67093ed3e621c0bfad26e','[\"*\"]',NULL,NULL,'2023-12-14 00:13:34','2023-12-14 00:13:34'),(67,'App\\Models\\User',3,'auth_token','d6d6249b8672962a10c996944efb19436064b1cd6782f5d9170962944d417971','[\"*\"]',NULL,NULL,'2023-12-14 00:13:43','2023-12-14 00:13:43'),(68,'App\\Models\\User',3,'auth_token','ec5924cf87a965df070d49878617a3d02d19a25822f52463b6b38f4433859016','[\"*\"]',NULL,NULL,'2023-12-14 00:43:04','2023-12-14 00:43:04'),(69,'App\\Models\\User',2,'auth_token','2c6ce4477f3aec1561d85d342b6a9c1aef3484d06d1c0ff2e6a719b38e965713','[\"*\"]',NULL,NULL,'2023-12-14 00:43:12','2023-12-14 00:43:12'),(70,'App\\Models\\User',2,'auth_token','c07fb50175627355876605a7d3be9567f5f2818553a1c6c2d887ab27ae912f82','[\"*\"]',NULL,NULL,'2023-12-14 01:28:02','2023-12-14 01:28:02'),(71,'App\\Models\\User',2,'auth_token','ad4eb73ffda31d1f5ef4d596d70c15465bf6f6a7f76a8807ffce80f3663cccce','[\"*\"]',NULL,NULL,'2023-12-14 01:34:20','2023-12-14 01:34:20'),(72,'App\\Models\\User',2,'auth_token','34988e0ab435b34b4c4f70b50139721e1d2860d0dcc425509160bcd1ec6f7703','[\"*\"]',NULL,NULL,'2023-12-14 01:36:29','2023-12-14 01:36:29'),(73,'App\\Models\\User',2,'auth_token','ca425b3c0b92c03f60c718567d37d144be9bd800e39af4c052be6fd1ad8de287','[\"*\"]',NULL,NULL,'2023-12-14 01:37:59','2023-12-14 01:37:59'),(74,'App\\Models\\User',2,'auth_token','41aff57a7e17353bf28e312a1d28dedd183133bc85d0012f422f69b7497d9b54','[\"*\"]',NULL,NULL,'2023-12-14 01:45:21','2023-12-14 01:45:21'),(75,'App\\Models\\User',2,'auth_token','02e4f18fad5fa47bd31d0d1009db2d81681aa8748e4518cf6f3537297050935a','[\"*\"]',NULL,NULL,'2023-12-14 01:45:53','2023-12-14 01:45:53'),(76,'App\\Models\\User',2,'auth_token','5e8c1038204ba2da9897da41b2ef3b35e41bb14de529d53281ae74cfa6f3b8b7','[\"*\"]',NULL,NULL,'2023-12-14 01:46:15','2023-12-14 01:46:15'),(77,'App\\Models\\User',2,'auth_token','33727625f4945cc1db21f2b1e382bdb69efb24a272fbd2ac670fd34eba516bfd','[\"*\"]',NULL,NULL,'2023-12-14 01:49:29','2023-12-14 01:49:29'),(78,'App\\Models\\User',2,'auth_token','bdb1ceda884523175561950570caa64e5da45154d42595a9557d7998d4014000','[\"*\"]',NULL,NULL,'2023-12-14 01:49:56','2023-12-14 01:49:56'),(79,'App\\Models\\User',2,'auth_token','87d08457ac9c5877237533b15371580eb9c7f194951757ac7e6f8f4dc31b1c90','[\"*\"]',NULL,NULL,'2023-12-14 01:50:34','2023-12-14 01:50:34'),(80,'App\\Models\\User',2,'auth_token','734defad1d82994fef86d8befc3b3132c3468219e683c6716e20384ee78bed35','[\"*\"]',NULL,NULL,'2023-12-14 01:51:11','2023-12-14 01:51:11'),(81,'App\\Models\\User',2,'auth_token','31af500feb23ff2bf8a388b3299be154069d0550201153b5409655d1662022cc','[\"*\"]',NULL,NULL,'2023-12-14 01:52:47','2023-12-14 01:52:47'),(82,'App\\Models\\User',2,'auth_token','0f4ab8ac617ba1604916e2950eea18388f599bc94efdf527db3c55c0d6fc6f73','[\"*\"]',NULL,NULL,'2023-12-14 02:01:32','2023-12-14 02:01:32'),(83,'App\\Models\\User',2,'auth_token','4e6372332f73a516fe0c78494d8368357431d735db6f7c2ce52c740bae792e5d','[\"*\"]',NULL,NULL,'2023-12-14 02:25:55','2023-12-14 02:25:55'),(84,'App\\Models\\User',2,'auth_token','c2432955549157829caf21467ae8611a47ca5017348599f2216f8225551dd7df','[\"*\"]',NULL,NULL,'2023-12-14 02:26:34','2023-12-14 02:26:34'),(85,'App\\Models\\User',3,'auth_token','806f1cd21d15107ce75d0fb6e6a209baf1d2d1100ed28b2e06b4b7a2acece075','[\"*\"]','2023-12-14 02:27:52',NULL,'2023-12-14 02:26:43','2023-12-14 02:27:52'),(86,'App\\Models\\User',2,'auth_token','2737514686e88a4bb84de1852e8f4c066a0adbacbddfe0549d3561baa769c16d','[\"*\"]',NULL,NULL,'2023-12-14 03:07:01','2023-12-14 03:07:01'),(87,'App\\Models\\User',2,'auth_token','e0f23e56e39c63e4c847a048ed54c95d30e698e69a5e4c62c7caa5c751f542d7','[\"*\"]',NULL,NULL,'2023-12-14 04:19:19','2023-12-14 04:19:19'),(88,'App\\Models\\User',2,'auth_token','a2cdf7530e15794356988901f817ac6a113ed026002e419bf751ae8ebd62dfaa','[\"*\"]',NULL,NULL,'2023-12-14 06:45:59','2023-12-14 06:45:59'),(89,'App\\Models\\User',2,'auth_token','48f11216aff05e9d22da4d5fae379ebddbb5df23cd8981f26d492082953ba7c9','[\"*\"]',NULL,NULL,'2023-12-14 06:55:47','2023-12-14 06:55:47'),(90,'App\\Models\\User',2,'auth_token','34a57888680d7e64d796114454ac79f3cf742d451baf74d11a6367e343fc1dad','[\"*\"]',NULL,NULL,'2023-12-14 06:57:33','2023-12-14 06:57:33'),(91,'App\\Models\\User',2,'auth_token','37ba90b14108c498e7889a9648c276031b0e8ec9f18714ff007b8994db18ef4b','[\"*\"]',NULL,NULL,'2023-12-14 06:59:04','2023-12-14 06:59:04'),(92,'App\\Models\\User',2,'auth_token','ee2dd02a3e256d77d23ae29b80528bd9ec265a17e3a955722cf21ab9eef53e0c','[\"*\"]',NULL,NULL,'2023-12-14 06:59:35','2023-12-14 06:59:35'),(93,'App\\Models\\User',2,'auth_token','a98157188db86df2bab61cbc3032a3a1cd26a77ede6bfcc9fc1eea7ccb7c1a94','[\"*\"]',NULL,NULL,'2023-12-14 07:00:26','2023-12-14 07:00:26'),(94,'App\\Models\\User',2,'auth_token','f8526b2f4de884855f147019c8d330999e3baac73ab299e514aecfe42d41befb','[\"*\"]',NULL,NULL,'2023-12-14 07:01:16','2023-12-14 07:01:16'),(95,'App\\Models\\User',2,'auth_token','165a9f534ed9d6ddd52c3959b7a76112d3cf4c507fb53a72a53f00c69422273e','[\"*\"]',NULL,NULL,'2023-12-14 07:02:48','2023-12-14 07:02:48'),(96,'App\\Models\\User',2,'auth_token','cba6df75576e52766f85b241c3f9389171699fdad6d0a7dcb3785fa5dc2b424a','[\"*\"]',NULL,NULL,'2023-12-14 07:06:40','2023-12-14 07:06:40'),(97,'App\\Models\\User',2,'auth_token','a968269dac013be6b21985ab84eec368ea675edff23b6201cc4a76fbc6b2e9b0','[\"*\"]',NULL,NULL,'2023-12-14 07:07:10','2023-12-14 07:07:10'),(98,'App\\Models\\User',2,'auth_token','7a56c733eb553e7d8a55e5e99418cfa06c74beffd0b926b0b023e2858df2c04b','[\"*\"]',NULL,NULL,'2023-12-14 07:16:21','2023-12-14 07:16:21'),(99,'App\\Models\\User',2,'auth_token','924dbd9dd08d838fac5bfecede4dd2ce820dc009a3054818ff5a30ebbbfa7b5e','[\"*\"]',NULL,NULL,'2023-12-14 07:17:15','2023-12-14 07:17:15'),(100,'App\\Models\\User',2,'auth_token','59fa9309c2e56d1728a5f4adfe4da279e9c14def98be799991a1212ca1283b38','[\"*\"]',NULL,NULL,'2023-12-14 07:32:55','2023-12-14 07:32:55'),(101,'App\\Models\\User',2,'auth_token','eaa59ce02c0863076a01c03e0f56f94c927ebd30247917fc388e90487af045ea','[\"*\"]',NULL,NULL,'2023-12-14 07:38:07','2023-12-14 07:38:07'),(102,'App\\Models\\User',2,'auth_token','fda5ef2377a0b47d793fc03b9cdca1155a2512b2b806e660bde984d7703f9f67','[\"*\"]',NULL,NULL,'2023-12-14 22:13:42','2023-12-14 22:13:42'),(103,'App\\Models\\User',2,'auth_token','40dde79059e83ed0f96340a623b92fcadd13a34167e9d8b5e56c538e5fa1f498','[\"*\"]',NULL,NULL,'2023-12-14 22:16:35','2023-12-14 22:16:35'),(104,'App\\Models\\User',2,'auth_token','14feedf5877f322bd546e8d84b5854142045c05783135704ee35fd277b0f0ec8','[\"*\"]',NULL,NULL,'2023-12-14 22:17:25','2023-12-14 22:17:25'),(105,'App\\Models\\User',3,'auth_token','bf7f66fc7164444aa329bc086e77f7324452512e25001d2f81b746e08fc06d5d','[\"*\"]',NULL,NULL,'2023-12-14 22:19:12','2023-12-14 22:19:12'),(106,'App\\Models\\User',2,'auth_token','ca0b514af8b21bd24899b7a26d3cd8defb49915422cdb9916d67ffbebb5f85c5','[\"*\"]',NULL,NULL,'2023-12-14 22:19:31','2023-12-14 22:19:31'),(107,'App\\Models\\User',2,'auth_token','6d7ade6e133c6d96b44c5ede39da07f1c46a8f726c19fc91e533620b3268cfec','[\"*\"]',NULL,NULL,'2023-12-15 06:30:33','2023-12-15 06:30:33'),(108,'App\\Models\\User',2,'auth_token','4a501d091337cf5fa64741f3268138661be24408ab9dae471cd6cff84540a128','[\"*\"]',NULL,NULL,'2023-12-15 06:31:47','2023-12-15 06:31:47'),(109,'App\\Models\\User',2,'auth_token','589b0becb41e23acae43518580aa12c7e93fc4d770fae5dfcc38f897483f9cb4','[\"*\"]',NULL,NULL,'2023-12-25 12:53:40','2023-12-25 12:53:40'),(110,'App\\Models\\User',2,'auth_token','2556b4472339c589897f792e4cea13828090ac29883ecbfcac0866f6928211e0','[\"*\"]',NULL,NULL,'2023-12-25 22:07:14','2023-12-25 22:07:14'),(111,'App\\Models\\User',2,'auth_token','0b45166aec9d1151c72fbc8c28981a0fafe744e10e2af20a0ed624cdc6a11936','[\"*\"]',NULL,NULL,'2023-12-26 01:22:38','2023-12-26 01:22:38'),(112,'App\\Models\\User',2,'auth_token','7c2a3db111fe0a7868299f2fffa8bb0bf35b24b5fabb35fa07d4191994176a4d','[\"*\"]',NULL,NULL,'2023-12-26 01:32:51','2023-12-26 01:32:51'),(113,'App\\Models\\User',3,'auth_token','7e2eb3ef540dcb2ef2d0db719b579cbf290e636ea8cc67a59e11a98dbb120f67','[\"*\"]',NULL,NULL,'2023-12-26 07:40:31','2023-12-26 07:40:31'),(114,'App\\Models\\User',4,'auth_token','219d608da4a341188af05d14ffded1ff065bfda004f98d6b8417dd011936e95e','[\"*\"]',NULL,NULL,'2023-12-26 08:00:22','2023-12-26 08:00:22'),(115,'App\\Models\\User',5,'auth_token','9bd4efe5f5e2148acbe95ef5f7379949dc5c8c2a13a28c5329c3ce6043a69a1d','[\"*\"]',NULL,NULL,'2023-12-26 08:14:12','2023-12-26 08:14:12'),(116,'App\\Models\\User',5,'auth_token','751348f05232b1f2894f0c516c2ebafad3d4e54fe5f0b0b2c8bc53f4c3941cca','[\"*\"]',NULL,NULL,'2023-12-26 08:14:28','2023-12-26 08:14:28'),(117,'App\\Models\\User',5,'auth_token','c3feb91ac8a75fab6a6c6c402fce6612984ee8201c0e12526bb7bb781cb110c1','[\"*\"]',NULL,NULL,'2023-12-26 10:10:39','2023-12-26 10:10:39'),(118,'App\\Models\\User',5,'auth_token','e3578e14de27b6b2b51db1e7fc3ef0aa13689099c209a097de489ca8c1067235','[\"*\"]',NULL,NULL,'2023-12-26 10:15:49','2023-12-26 10:15:49'),(119,'App\\Models\\User',5,'auth_token','47da5ad671ae7c03158265f6eb4357062062127044eaf002d0872a92d1df8aab','[\"*\"]',NULL,NULL,'2023-12-26 10:17:59','2023-12-26 10:17:59'),(120,'App\\Models\\User',5,'auth_token','b696ae3ee6f87e4aa78d8752ad074cb7e2b1c5200be7efabf6393a0f509bfb00','[\"*\"]',NULL,NULL,'2023-12-26 10:42:50','2023-12-26 10:42:50'),(121,'App\\Models\\User',2,'auth_token','a9a19223ba3f6fa7a9e8af9b00c9c86c588cc955fdb8feec6008adfd7ab7efeb','[\"*\"]',NULL,NULL,'2023-12-26 12:59:08','2023-12-26 12:59:08'),(122,'App\\Models\\User',2,'auth_token','7072e124e511311868ac04403e5f23f3be39b7489a4b70e235a84794ae55ca14','[\"*\"]',NULL,NULL,'2023-12-26 15:23:13','2023-12-26 15:23:13'),(123,'App\\Models\\User',2,'auth_token','e27d916d4c15af1fc5e0877b42d5f91fd8ca9174f1c67895edc6e832235ebe3b','[\"*\"]',NULL,NULL,'2023-12-26 15:23:51','2023-12-26 15:23:51'),(124,'App\\Models\\User',2,'auth_token','c708b00336cdaebff46fd653b5f3b33b13da4f3d2e13fce68152e3e98eb5fb8b','[\"*\"]',NULL,NULL,'2023-12-26 22:26:38','2023-12-26 22:26:38'),(125,'App\\Models\\User',2,'auth_token','e887b8844132f570c3675fa1a079b91dbb55eb08bb886728bea0b808baa81c1f','[\"*\"]',NULL,NULL,'2023-12-27 02:39:48','2023-12-27 02:39:48'),(126,'App\\Models\\User',2,'auth_token','b2d3ae81d6a0ba06413a4e13e39d28d52f5d097c2d8060e11c5ef3d67b1e03f4','[\"*\"]',NULL,NULL,'2023-12-27 11:26:34','2023-12-27 11:26:34'),(127,'App\\Models\\User',2,'auth_token','e072b7017fd5baa4e372e9c90cd12e798061ed8b5f0b308b43bd2133eff62794','[\"*\"]',NULL,NULL,'2023-12-27 12:56:02','2023-12-27 12:56:02'),(128,'App\\Models\\User',2,'auth_token','7eb0679ac3ef73c4d7496918a8cb9e547792654522365094617932b97a4d91a4','[\"*\"]',NULL,NULL,'2023-12-27 23:07:46','2023-12-27 23:07:46'),(129,'App\\Models\\User',5,'auth_token','0099d1735718a3ad0a5636348bbdaf22cedf5ed010630c63be94d9f7df9878b1','[\"*\"]',NULL,NULL,'2023-12-28 02:36:39','2023-12-28 02:36:39'),(130,'App\\Models\\User',5,'auth_token','8d055c37d2a8f872c657821a0b19ae9539332782f5386d51e6d58ecc2a58bcd0','[\"*\"]',NULL,NULL,'2023-12-28 02:44:31','2023-12-28 02:44:31'),(131,'App\\Models\\User',5,'auth_token','d6f8f36433246f6ee699d983c7969bda6ce0ba3ed21b85c8f98e05d563a8ee13','[\"*\"]',NULL,NULL,'2023-12-28 02:46:30','2023-12-28 02:46:30'),(132,'App\\Models\\User',5,'auth_token','4b7ec273128fb06154a6ded735a589fde9a367c0366af6832e2cb23cc88c842a','[\"*\"]',NULL,NULL,'2023-12-28 02:47:58','2023-12-28 02:47:58'),(133,'App\\Models\\User',5,'auth_token','f5d787bdcf6a63a49465ea100ec5f30253c4e97c930123bc513b377a0aa745af','[\"*\"]','2023-12-28 15:20:48',NULL,'2023-12-28 13:04:05','2023-12-28 15:20:48'),(134,'App\\Models\\User',5,'auth_token','4d8350baefd33165ec995b6eac2fdbe1d209aaf7094ab2b776b409b326fd6703','[\"*\"]',NULL,NULL,'2023-12-28 15:23:18','2023-12-28 15:23:18'),(135,'App\\Models\\User',5,'auth_token','77805a3c9c206d259e9a8ad861ac3b5f63c0908689ffaa17ae8f5f0d8b7a31fa','[\"*\"]','2023-12-28 15:45:42',NULL,'2023-12-28 15:27:21','2023-12-28 15:45:42'),(136,'App\\Models\\User',2,'auth_token','6d10a9f1edfaa8f35d3f98858e4079e2af6f66cf85ffe2a2110fd63bb5cef60f','[\"*\"]',NULL,NULL,'2023-12-28 16:03:05','2023-12-28 16:03:05'),(137,'App\\Models\\User',2,'auth_token','66a8ff8e79ef5b6220fede0a16d80f6efe07925d58fa9969fd40f4fa231f57e4','[\"*\"]',NULL,NULL,'2023-12-28 16:32:26','2023-12-28 16:32:26'),(138,'App\\Models\\User',5,'auth_token','ea11f22d7a4e5d08916eaff66b95d030a46c2d05218b0be4b4ce8b34ff271a59','[\"*\"]',NULL,NULL,'2023-12-28 20:27:57','2023-12-28 20:27:57'),(139,'App\\Models\\User',2,'auth_token','1e6a81d7cbff3e3d2f93c99de18f46dc849cd9c0ec5a13794332c28ba2cd7ce9','[\"*\"]',NULL,NULL,'2023-12-28 20:31:24','2023-12-28 20:31:24'),(140,'App\\Models\\User',5,'auth_token','656e7d3585ed83c64c7b26859bc2c82ba538f059c6d0d89b6b087a9c3f250a43','[\"*\"]',NULL,NULL,'2023-12-28 20:33:26','2023-12-28 20:33:26');
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qna_babs`
--

DROP TABLE IF EXISTS `qna_babs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `qna_babs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `bab_id` bigint unsigned NOT NULL,
  `question_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `qna_babs_bab_id_foreign` (`bab_id`),
  KEY `qna_babs_question_id_foreign` (`question_id`),
  CONSTRAINT `qna_babs_bab_id_foreign` FOREIGN KEY (`bab_id`) REFERENCES `babs` (`id`) ON DELETE CASCADE,
  CONSTRAINT `qna_babs_question_id_foreign` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qna_babs`
--

LOCK TABLES `qna_babs` WRITE;
/*!40000 ALTER TABLE `qna_babs` DISABLE KEYS */;
INSERT INTO `qna_babs` VALUES (4,1,1,NULL,NULL),(5,2,2,NULL,NULL);
/*!40000 ALTER TABLE `qna_babs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questions` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `question` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (1,'Isi Kotak Kosong Pada Baris Ketiga Potongan Kode Di Atas Adalah...?',NULL,NULL),(2,'Sintaks Yang Digunakan Untuk Mengisi Kotak Kosong Di Atas Adalah...?',NULL,NULL);
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_has_permissions`
--

DROP TABLE IF EXISTS `role_has_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role_has_permissions` (
  `permission_id` bigint unsigned NOT NULL,
  `role_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`role_id`),
  KEY `role_has_permissions_role_id_foreign` (`role_id`),
  CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_has_permissions`
--

LOCK TABLES `role_has_permissions` WRITE;
/*!40000 ALTER TABLE `role_has_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `role_has_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin','api','2023-12-12 23:00:56','2023-12-12 23:00:56'),(2,'user','api','2023-12-12 23:00:56','2023-12-12 23:00:56'),(3,'user','web','2023-12-26 07:57:21','2023-12-26 07:57:21'),(4,'admin','web','2023-12-26 07:57:21','2023-12-26 07:57:21');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subjects`
--

DROP TABLE IF EXISTS `subjects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subjects` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `subject` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subjects`
--

LOCK TABLES `subjects` WRITE;
/*!40000 ALTER TABLE `subjects` DISABLE KEYS */;
INSERT INTO `subjects` VALUES (1,'Java Syntax','2023-12-28 17:41:28','2023-12-28 17:42:35'),(2,'Java Variables','2023-12-28 17:41:52','2023-12-28 17:41:52');
/*!40000 ALTER TABLE `subjects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `role_id` bigint unsigned NOT NULL DEFAULT '2',
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  KEY `users_role_id_foreign` (`role_id`),
  CONSTRAINT `users_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'Admin','admin@gmail.com',NULL,'$2y$12$a3IF2HQ/G5pLuJgeihcpS.grbVtnLtWK6CFXoeW76qINB4Cz0WJWy',NULL,'2023-12-13 23:55:01','2023-12-13 23:55:01',1),(5,'User','user@gmail.com',NULL,'$2y$12$4JwKZP3il0xrxZJ85LuyweLVBUZ54SN9Cz3Bo.6KZu77Cm1/QKkGu',NULL,'2023-12-26 08:14:12','2023-12-26 08:14:12',2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'j_ples_database'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-29  3:43:25
