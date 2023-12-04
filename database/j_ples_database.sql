-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 03, 2023 at 11:51 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `j_ples_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `id` bigint UNSIGNED NOT NULL,
  `question_id` bigint UNSIGNED NOT NULL,
  `answer` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_correct` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`id`, `question_id`, `answer`, `is_correct`, `created_at`, `updated_at`) VALUES
(1, 3, 'jawaban 1', 1, NULL, NULL),
(2, 4, 'jawaban 2 editeds', 1, NULL, '2023-11-30 15:46:39'),
(4, 6, 'jawaban 26', 1, NULL, NULL),
(5, 7, 'jawaban 267', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `babs`
--

CREATE TABLE `babs` (
  `id` bigint UNSIGNED NOT NULL,
  `subject_id` bigint UNSIGNED NOT NULL,
  `judul` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `pertanyaan` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `form_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `babs`
--

INSERT INTO `babs` (`id`, `subject_id`, `judul`, `created_at`, `updated_at`, `pertanyaan`, `form_id`) VALUES
(1, 2, 'edited bab tes editor sql', '2023-11-30 10:14:59', '2023-11-30 12:45:40', 'contoh editor sql', ''),
(2, 1, 'edited bab tes editor sql', '2023-11-30 10:39:11', '2023-11-30 12:47:08', '&emsp; **Basis Data** atau **Database** merupakan media utama yang harus tersedia untuk membangun sebuah basis data sehingga langkah paling awal adalah membuat basis data. Basis data difungsikan untuk menyimpan tabel beserta data di dalam tabel, untuk membuat basis data digunakan perintah sebagai berikut:\n~~~SQL:Membuat_Basis_Data\nCREATE DATABASE Nama_Basis_Data;\n~~~\nTerdapat beberapa aturan dalam pemberian nama pada basis data seperti, menggunakan nama yang deskriptif dan merepresentasikan isi dari basis data, nama basis data bersifat unik dan berbeda dengan nama basis data lainnya, menggunakan huruf kapital untuk memisahkan setiap kata. Berikut adalah pemberian nama pada basis data sesuai dengan aturan, sebagai berikut:\n ~~~SQL:Contoh\nCREATE DATABASE SMA_Negeri_1_Sumberrejo;\nQuery OK, 1 row affected (0.125 sec)\n~~~\nContoh di atas menampilkan perintah yang diberikan berhasil dieksekusi dengan ditampilkan pesan setelah baris perintah yang memuat informasi keberhasilan perintah, jumlah baris yang terpengaruh, dan waktu eksekusi perintah.\n~~~SQL:Contoh\nCREATE DATABASE SMA Negeri 1 Sumberrejo;\nERROR: Could not create database \'SMA Negeri 1 Sumberrejo\'. \nDatabase names cannot contain spaces.\n~~~\nContoh di atas menampilkan perintah yang diberikan gagal dieksekusi dengan ditampilkan pesan setelah baris perintah yang memuat informasi penyebab kegagalan dalam mengeksekusi perintah yang diberikan, dalam contoh tersebut gagal mengeksekusi perintah membuat basis data yang disebabkan nama basis data yang diberikan mengandung karakter spasi.', ''),
(4, 2, 'bab3', '2023-11-30 10:39:20', '2023-11-30 10:39:20', '', ''),
(5, 1, 'bab2', '2023-11-30 10:39:26', '2023-11-30 10:39:26', '', ''),
(6, 1, 'bab2 java code', '2023-11-30 12:44:51', '2023-11-30 12:44:51', 'contoh code editore java code', ''),
(9, 1, 'bab2 java code dengan form', '2023-12-02 17:12:04', '2023-12-02 17:12:04', 'contoh code editore java code dengan fid', 'fid656b6564ad414');

-- --------------------------------------------------------

--
-- Table structure for table `babs_answers`
--

CREATE TABLE `babs_answers` (
  `id` bigint UNSIGNED NOT NULL,
  `attempt_id` bigint UNSIGNED NOT NULL,
  `question_id` bigint UNSIGNED NOT NULL,
  `typed_answer` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `babs_answers`
--

INSERT INTO `babs_answers` (`id`, `attempt_id`, `question_id`, `typed_answer`, `created_at`, `updated_at`) VALUES
(1, 2, 3, 'salah satu', NULL, NULL),
(2, 2, 4, 'jawaban 2 editeds', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `babs_attempt`
--

CREATE TABLE `babs_attempt` (
  `id` bigint UNSIGNED NOT NULL,
  `bab_id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `status` int NOT NULL DEFAULT '0',
  `marks` float DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `babs_attempt`
--

INSERT INTO `babs_attempt` (`id`, `bab_id`, `user_id`, `status`, `marks`, `created_at`, `updated_at`) VALUES
(1, 2, 3, 0, NULL, NULL, NULL),
(2, 2, 3, 0, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_11_29_221521_add_details_to_users_table', 1),
(6, '2023_11_29_223629_create_subjects_table', 1),
(7, '2023_11_30_102704_create_permission_tables', 1),
(8, '2023_11_30_161242_create_babs_table', 2),
(9, '2023_11_30_190115_create_questions_table', 3),
(10, '2023_11_30_190317_create_answers_table', 4),
(11, '2023_11_30_194108_add_isi_to_babs_table', 5),
(12, '2023_12_02_165600_create_qna_babs_table', 6),
(13, '2023_12_02_235324_add_form_to_babs_table', 7),
(14, '2023_12_03_011533_create_babs_attempt_table', 8),
(15, '2023_12_03_012111_create_babs_answers_table', 9),
(16, '2023_12_03_022125_create_babs_answers_table', 10),
(17, '2023_12_03_151747_create_perans_table', 11);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `model_has_permissions`
--

INSERT INTO `model_has_permissions` (`permission_id`, `model_type`, `model_id`) VALUES
(1, 'App\\Models\\User', 1),
(2, 'App\\Models\\User', 1),
(3, 'App\\Models\\User', 1),
(4, 'App\\Models\\User', 1),
(5, 'App\\Models\\User', 1),
(2, 'App\\Models\\User', 2),
(3, 'App\\Models\\User', 2);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `model_has_roles`
--

INSERT INTO `model_has_roles` (`role_id`, `model_type`, `model_id`) VALUES
(1, 'App\\Models\\User', 1),
(2, 'App\\Models\\User', 2),
(2, 'App\\Models\\User', 3),
(2, 'App\\Models\\User', 4);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `perans`
--

CREATE TABLE `perans` (
  `id` bigint UNSIGNED NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `perans`
--

INSERT INTO `perans` (`id`, `description`, `created_at`, `updated_at`) VALUES
(1, 'admin', NULL, NULL),
(2, 'user', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'user.list', 'web', '2023-11-30 04:47:04', '2023-11-30 04:47:04'),
(2, 'user.view', 'web', '2023-11-30 04:47:04', '2023-11-30 04:47:04'),
(3, 'user.create', 'web', '2023-11-30 04:47:05', '2023-11-30 04:47:05'),
(4, 'user.update', 'web', '2023-11-30 04:47:05', '2023-11-30 04:47:05'),
(5, 'user.delete', 'web', '2023-11-30 04:47:05', '2023-11-30 04:47:05');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 3, 'Token', '4c31b0529cebeac5f451cd7ad12d080f10330686dbe0851c8d171701b5c9d7a3', '[\"*\"]', NULL, NULL, '2023-11-30 04:49:52', '2023-11-30 04:49:52'),
(2, 'App\\Models\\User', 3, 'Token', 'f99e398a20ed01d634d318837cd86df2b88feb381f2eb2da3fc73da5327129f3', '[\"*\"]', NULL, NULL, '2023-11-30 04:51:26', '2023-11-30 04:51:26'),
(3, 'App\\Models\\User', 4, 'Token', '92e356461880ca4ba33c1dbcb68e8f60aa36d452d0bd21f29fee920689558e4f', '[\"*\"]', NULL, NULL, '2023-11-30 04:55:40', '2023-11-30 04:55:40'),
(4, 'App\\Models\\User', 3, 'Token', '4b81c0009ae97f8946ac511b2234a86a147b8eabff8f2ea5abb9c26be4b753c5', '[\"*\"]', NULL, NULL, '2023-11-30 04:55:51', '2023-11-30 04:55:51'),
(6, 'App\\Models\\User', 3, 'Token', '1bd781521bc25252c3661e34d2f877cb34137424671420f3662a4a51085320a4', '[\"*\"]', NULL, NULL, '2023-11-30 04:56:37', '2023-11-30 04:56:37'),
(10, 'App\\Models\\User', 9, 'auth_token', '27d0c3eef5c47b0febf101184da88252188fcc93b74d81fa169ae62117938cbb', '[\"*\"]', NULL, NULL, '2023-12-02 05:10:00', '2023-12-02 05:10:00'),
(11, 'App\\Models\\User', 9, 'auth_token', '4abfe1ccbe7b3b373baf0a1cdf2399f40872bf8ffb598cce81d24b6e8b4b9aa9', '[\"*\"]', '2023-12-02 05:20:07', NULL, '2023-12-02 05:16:30', '2023-12-02 05:20:07'),
(48, 'App\\Models\\User', 2, 'auth_token', '715f5b09db3a758600510c7d663b8b70c4d58e2e21ebbf1c68be08ba9b3978b5', '[\"*\"]', NULL, NULL, '2023-12-03 10:12:26', '2023-12-03 10:12:26'),
(52, 'App\\Models\\User', 2, 'auth_token', 'ac949d48c9d1a7c91f7dabb3dd256372ace5f529493667248bb080171753668b', '[\"*\"]', NULL, NULL, '2023-12-03 10:26:32', '2023-12-03 10:26:32'),
(55, 'App\\Models\\User', 2, 'auth_token', '7af1f49e76a764a5f40ed111ce37d4bb3de534f795df245e5b1ef1aee6f13df7', '[\"*\"]', NULL, NULL, '2023-12-03 10:32:14', '2023-12-03 10:32:14'),
(57, 'App\\Models\\User', 2, 'auth_token', 'da2dd239c799a4655188ef74b05f8999294c2b6379262858af9c9d427760e364', '[\"*\"]', NULL, NULL, '2023-12-03 10:39:46', '2023-12-03 10:39:46'),
(58, 'App\\Models\\User', 1, 'auth_token', '913146aaee01142fa4978b8226b772119d26fcfa8fd45f6199f41c573e9c6fd5', '[\"*\"]', NULL, NULL, '2023-12-03 10:48:43', '2023-12-03 10:48:43'),
(59, 'App\\Models\\User', 2, 'auth_token', '918e2cc6875d722d3aa63212165529efb0b118174a2645d897b3d17870eae909', '[\"*\"]', NULL, NULL, '2023-12-03 10:49:50', '2023-12-03 10:49:50'),
(60, 'App\\Models\\User', 1, 'auth_token', 'cce73b24cf74f0ec869045ec0a63e309ebf0e40f910da9aa7a0ca64124fe9bef', '[\"*\"]', NULL, NULL, '2023-12-03 10:50:48', '2023-12-03 10:50:48'),
(61, 'App\\Models\\User', 1, 'auth_token', 'c2d6b3d55bad7e3451468465cdece8645d39f1c5cb5763fdaf9dabbe1ddca451', '[\"*\"]', NULL, NULL, '2023-12-03 10:51:48', '2023-12-03 10:51:48'),
(62, 'App\\Models\\User', 1, 'auth_token', 'df525a0f04b1cc513183e4bf6f99b825e184b60fc1b6d9e9781901751632c1e3', '[\"*\"]', NULL, NULL, '2023-12-03 10:51:56', '2023-12-03 10:51:56'),
(63, 'App\\Models\\User', 2, 'auth_token', '9dd0ebbfa06c2728cadd37bb044d99af11961bdd3828eda50c64cfcfaa11d3e2', '[\"*\"]', NULL, NULL, '2023-12-03 10:52:51', '2023-12-03 10:52:51'),
(64, 'App\\Models\\User', 1, 'auth_token', '02286fc1e0e9e7264e8943f3315a4e7f48068c4701eff12dc0e6d6019b05ef7b', '[\"*\"]', NULL, NULL, '2023-12-03 10:54:00', '2023-12-03 10:54:00'),
(65, 'App\\Models\\User', 2, 'auth_token', '49301272f23ccbf871df198e5d02d3949c3b9e8007b400ecc7edf53e078c13ab', '[\"*\"]', NULL, NULL, '2023-12-03 10:54:50', '2023-12-03 10:54:50'),
(66, 'App\\Models\\User', 2, 'auth_token', 'eb2374421897ece5223219526da8d547f8a6446d3c8593d749b3f5a30d6d31a5', '[\"*\"]', NULL, NULL, '2023-12-03 10:55:57', '2023-12-03 10:55:57'),
(67, 'App\\Models\\User', 1, 'auth_token', '3822a6e1ecf5639d02aefa4b7cb1846fabda49d0d66f62881bd47c2d9d55c835', '[\"*\"]', NULL, NULL, '2023-12-03 10:56:30', '2023-12-03 10:56:30'),
(68, 'App\\Models\\User', 2, 'auth_token', 'ee9bc817a842c70597e4ea8e6a7f85aef31320898f0d66c9279fd038daa7cb89', '[\"*\"]', NULL, NULL, '2023-12-03 10:57:14', '2023-12-03 10:57:14'),
(69, 'App\\Models\\User', 1, 'auth_token', 'd49680c33f5461fdeb4ad0c5a1838c3eb8ce61340f235711eee4ef0134645809', '[\"*\"]', NULL, NULL, '2023-12-03 10:59:50', '2023-12-03 10:59:50'),
(70, 'App\\Models\\User', 1, 'auth_token', 'dd094c178f8559ff1baf75bdf358499c0eed1012321b98fca1c69d4fb6819a21', '[\"*\"]', NULL, NULL, '2023-12-03 11:01:27', '2023-12-03 11:01:27'),
(71, 'App\\Models\\User', 1, 'auth_token', '3734e7b375f08d47f3a72835a3f8569c410400123e9c0d2c4c6e9a1059aceffd', '[\"*\"]', NULL, NULL, '2023-12-03 11:01:39', '2023-12-03 11:01:39'),
(72, 'App\\Models\\User', 2, 'auth_token', '5acc3bd51a8a2683091c22e8701c400e75cbcf9fef91d9716f31c634148d510f', '[\"*\"]', NULL, NULL, '2023-12-03 11:01:58', '2023-12-03 11:01:58'),
(73, 'App\\Models\\User', 1, 'auth_token', '5bdb0aaefebb3a8ab2bed59e27b363e2c3b94fdf929ce26ca77680aa273ee047', '[\"*\"]', NULL, NULL, '2023-12-03 11:02:51', '2023-12-03 11:02:51'),
(74, 'App\\Models\\User', 2, 'auth_token', '637bbb3d6dba36b0273e7f79c106591401e55a8ae49c40899f102c13cd11fee3', '[\"*\"]', NULL, NULL, '2023-12-03 11:06:14', '2023-12-03 11:06:14'),
(75, 'App\\Models\\User', 1, 'auth_token', '935e9737218aa63bf77abcde4036eff1a9716ae0aa98fdb1194a09471d81bc36', '[\"*\"]', NULL, NULL, '2023-12-03 11:09:08', '2023-12-03 11:09:08'),
(76, 'App\\Models\\User', 1, 'auth_token', 'dffb5aea742c80625d3e8aa182f0fb4a379e61e42bd24bea983f116769dbd566', '[\"*\"]', NULL, NULL, '2023-12-03 11:09:11', '2023-12-03 11:09:11'),
(77, 'App\\Models\\User', 2, 'auth_token', '9664afb6dad06458e16170ed4af0ae6c4dcdd64a256a4197b395feded5c11db9', '[\"*\"]', NULL, NULL, '2023-12-03 11:10:18', '2023-12-03 11:10:18');

-- --------------------------------------------------------

--
-- Table structure for table `qna_babs`
--

CREATE TABLE `qna_babs` (
  `id` bigint UNSIGNED NOT NULL,
  `bab_id` bigint UNSIGNED NOT NULL,
  `question_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `qna_babs`
--

INSERT INTO `qna_babs` (`id`, `bab_id`, `question_id`, `created_at`, `updated_at`) VALUES
(1, 2, 3, NULL, NULL),
(2, 2, 4, NULL, NULL),
(3, 4, 3, NULL, NULL),
(4, 4, 4, NULL, NULL),
(5, 4, 7, NULL, NULL),
(6, 1, 3, NULL, NULL),
(8, 1, 7, NULL, NULL),
(9, 6, 3, NULL, NULL),
(10, 6, 4, NULL, NULL),
(11, 6, 6, NULL, NULL),
(12, 6, 7, NULL, NULL),
(13, 5, 3, NULL, NULL),
(14, 5, 4, NULL, NULL),
(15, 5, 7, NULL, NULL),
(17, 9, 3, NULL, NULL),
(18, 9, 4, NULL, NULL),
(19, 9, 7, NULL, NULL),
(20, 9, 6, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` bigint UNSIGNED NOT NULL,
  `question` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `question`, `created_at`, `updated_at`) VALUES
(3, 'pertanyaan 1', NULL, NULL),
(4, 'pertanyaan 2 edited', NULL, '2023-11-30 15:47:12'),
(6, 'pertanyaan 26', NULL, NULL),
(7, 'pertanyaan 7', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'web', '2023-11-30 04:47:05', '2023-11-30 04:47:05'),
(2, 'user', 'web', '2023-11-30 04:47:06', '2023-11-30 04:47:06');

-- --------------------------------------------------------

--
-- Table structure for table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint UNSIGNED NOT NULL,
  `role_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_has_permissions`
--

INSERT INTO `role_has_permissions` (`permission_id`, `role_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(2, 2),
(3, 2);

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `id` bigint UNSIGNED NOT NULL,
  `subject` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`id`, `subject`, `created_at`, `updated_at`) VALUES
(1, 'test subject', '2023-11-30 06:10:32', '2023-11-30 06:10:32'),
(2, 'tes subject update 2', '2023-11-30 07:09:10', '2023-11-30 07:52:06');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `role_asa` tinyint NOT NULL DEFAULT '0' COMMENT '0=user,1=admin',
  `role_id` bigint UNSIGNED NOT NULL,
  `peran_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `role_asa`, `role_id`, `peran_id`) VALUES
(1, 'Admin', 'admin@gmail.com', NULL, '$2y$12$gPPP5cnMLUChqs1tC1OfouahgxZLT/YXz4XbG6/QlEsA4oTQJQ1FG', NULL, '2023-11-30 04:47:06', '2023-11-30 04:47:06', 1, 1, 1),
(2, 'User', 'user@gmail.com', NULL, '$2y$12$mLgrCw8fV1Eyc8.B.tv9ReSJPJVilOoAyc67jvBRvP3aWMqMhfaKa', NULL, '2023-11-30 04:47:06', '2023-11-30 04:47:06', 0, 0, 0),
(3, 'user7', 'user7@gmail.com', NULL, '$2y$12$yZ3ElSA7MfaL3WRkoWkd6OgvkVT6nX1hikZ.JUX8KGTBS814HhKrW', NULL, '2023-11-30 04:49:52', '2023-11-30 04:49:52', 0, 0, 0),
(9, 'admin2607', 'admin2607@gmail.com', NULL, '$2y$12$C8jHavKq8tgUvEvSCcaiauqBEsZe10Yy5Im/45O4kE.oFsg0EzW8C', NULL, '2023-12-02 05:10:00', '2023-12-02 05:10:00', 1, 1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `answers_question_id_foreign` (`question_id`);

--
-- Indexes for table `babs`
--
ALTER TABLE `babs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `babs_subject_id_foreign` (`subject_id`);

--
-- Indexes for table `babs_answers`
--
ALTER TABLE `babs_answers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `babs_answers_attempt_id_foreign` (`attempt_id`),
  ADD KEY `babs_answers_question_id_foreign` (`question_id`);

--
-- Indexes for table `babs_attempt`
--
ALTER TABLE `babs_attempt`
  ADD PRIMARY KEY (`id`),
  ADD KEY `babs_attempt_bab_id_foreign` (`bab_id`),
  ADD KEY `babs_attempt_user_id_foreign` (`user_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `perans`
--
ALTER TABLE `perans`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `qna_babs`
--
ALTER TABLE `qna_babs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `qna_babs_bab_id_foreign` (`bab_id`),
  ADD KEY `qna_babs_question_id_foreign` (`question_id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `answers`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `babs`
--
ALTER TABLE `babs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `babs_answers`
--
ALTER TABLE `babs_answers`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `babs_attempt`
--
ALTER TABLE `babs_attempt`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `perans`
--
ALTER TABLE `perans`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT for table `qna_babs`
--
ALTER TABLE `qna_babs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `answers`
--
ALTER TABLE `answers`
  ADD CONSTRAINT `answers_question_id_foreign` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `babs`
--
ALTER TABLE `babs`
  ADD CONSTRAINT `babs_subject_id_foreign` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `babs_answers`
--
ALTER TABLE `babs_answers`
  ADD CONSTRAINT `babs_answers_attempt_id_foreign` FOREIGN KEY (`attempt_id`) REFERENCES `babs_attempt` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `babs_answers_question_id_foreign` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `babs_attempt`
--
ALTER TABLE `babs_attempt`
  ADD CONSTRAINT `babs_attempt_bab_id_foreign` FOREIGN KEY (`bab_id`) REFERENCES `babs` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `babs_attempt_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `qna_babs`
--
ALTER TABLE `qna_babs`
  ADD CONSTRAINT `qna_babs_bab_id_foreign` FOREIGN KEY (`bab_id`) REFERENCES `babs` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `qna_babs_question_id_foreign` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
