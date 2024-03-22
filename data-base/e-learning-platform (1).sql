-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 22 mars 2024 à 16:19
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `e-learning-platform`
--

-- --------------------------------------------------------

--
-- Structure de la table `announcements`
--

CREATE TABLE `announcements` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `announcement` varchar(255) NOT NULL,
  `sector_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `announcements`
--

INSERT INTO `announcements` (`id`, `announcement`, `sector_id`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'TP 1 in langage C ', 1, 6, NULL, NULL),
(2, 'TP 2 in C', 2, 6, NULL, NULL),
(3, 'TP 1 in files ', 1, 3, NULL, NULL),
(4, 'TP 1 in PHP', 1, 4, NULL, NULL),
(5, 'TP1 in laravel', 1, 4, NULL, NULL),
(6, 'TP1 in network', 2, 5, NULL, NULL),
(7, 'TP2 in network', 1, 5, NULL, NULL),
(8, 'TP1 in managemant', 3, 3, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `choices`
--

CREATE TABLE `choices` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `text` varchar(255) NOT NULL,
  `tr_fl` tinyint(1) NOT NULL,
  `question_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `choices`
--

INSERT INTO `choices` (`id`, `text`, `tr_fl`, `question_id`, `created_at`, `updated_at`) VALUES
(7, '2 octet', 0, 4, NULL, NULL),
(8, 'dépend du compilateur', 1, 4, NULL, NULL),
(9, 'langage orienté objet', 1, 5, NULL, NULL),
(10, 'langage procédural ', 0, 5, NULL, NULL),
(41, 'langage de balisage', 1, 22, '2024-03-19 23:59:22', '2024-03-19 23:59:22'),
(42, 'langage procédural', 0, 22, '2024-03-19 23:59:22', '2024-03-19 23:59:22'),
(43, 'framwork PHP', 1, 23, '2024-03-19 23:59:22', '2024-03-19 23:59:22'),
(44, 'framwork JS', 0, 23, '2024-03-19 23:59:22', '2024-03-19 23:59:22'),
(45, 'langage orienté objet', 0, 24, '2024-03-19 23:59:22', '2024-03-19 23:59:22'),
(46, 'langage de style', 1, 24, '2024-03-19 23:59:22', '2024-03-19 23:59:22');

-- --------------------------------------------------------

--
-- Structure de la table `departements`
--

CREATE TABLE `departements` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `departements`
--

INSERT INTO `departements` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'marketing', NULL, NULL),
(2, 'Management', NULL, NULL),
(3, 'Math-Info', NULL, NULL),
(4, 'Chimestry', NULL, NULL),
(5, 'Physics', NULL, NULL),
(6, 'Electricity', NULL, NULL),
(7, 'Energy', NULL, NULL),
(8, 'développement', NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `documents`
--

CREATE TABLE `documents` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `file` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `sector_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `documents`
--

INSERT INTO `documents` (`id`, `title`, `description`, `file`, `user_id`, `created_at`, `updated_at`, `sector_id`) VALUES
(1, 'algorithme cours', 'un cours complet sur l\'algorithme', 'path 1', 3, NULL, NULL, 1),
(2, 'Modèle TCP/IP', 'un cours complet sur modèle TCP/IP', 'path 2', 5, NULL, NULL, 2),
(3, 'tp 1 C', 'un tp sur le langage de programmation C', 'path 3', 3, NULL, NULL, 2),
(4, 'gestion des fichiers', 'un cours sur la gestion des fichiers pour le langage C', 'path 4', 3, NULL, NULL, 1),
(5, 'les pointeurs', 'un cours sur les pointeurs dans le langage c', 'path 5', 6, NULL, NULL, 1),
(9, 'transmission numérique', 'un cours sur les transmissions numérique dans le réseau informatique un cours sur les transmissions numérique dans le réseau informatique un cours sur les transmissions numérique dans le réseau informatique', 'courses/hshMMKae69568xCblmup6xwSmSd1FMrxJgNAwV3L.bin', 5, '2024-02-12 09:30:53', '2024-02-12 09:30:53', 1),
(11, 'tp 1 js', 'tp1 js tp1 js tp1 js tp1 js tp1 js tp1 js tp1 js tp1 js tp1 js tp1 js tp1 js tp1 js tp1 js tp1 js tp1 js tp1 js', 'courses/i89OTKagpkfeR7hz2dOoLoLwdQMmvV1kiKHltyno.pdf', 4, '2024-02-21 09:05:10', '2024-02-21 09:05:10', 1),
(12, 'diagramme de paqutage', 'description 1', 'courses/2QdpCopN0VDPqYs9l0YZdHngQ4XXOeQ5lAyCYsJL.jpg', 23, '2024-03-12 13:49:51', '2024-03-12 13:49:51', 2);

-- --------------------------------------------------------

--
-- Structure de la table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2024_01_31_121927_create_roles_table', 1),
(2, '2024_01_31_123714_create_departements_table', 2),
(3, '2024_01_31_125443_create_sectors_table', 3),
(6, '2014_10_12_000000_create_users_table', 4),
(7, '2019_12_14_000001_create_personal_access_tokens_table', 5),
(8, '2024_01_31_145953_create_documents_table', 5),
(9, '2024_01_31_150540_create_notices_table', 6),
(10, '2024_01_31_150705_create_qcms_table', 7),
(11, '2024_01_31_150821_create_questions_table', 8),
(12, '2024_01_31_151008_create_choices_table', 9),
(13, '2024_01_31_151149_create_notes_table', 10),
(14, '2024_02_01_204453_create_sectors_users_table', 11),
(15, '2024_02_03_114054_add_departement_id_users_table', 12),
(16, '2024_02_08_101859_add_sector_id_to_documents', 13),
(17, '2024_02_14_104545_add_first_name_last_name_to_users', 14),
(18, '2024_02_14_144455_create_announcements_table', 15),
(19, '2024_02_19_105705_add_sector_id_to_qcm_table', 16),
(20, '2024_03_14_104623_create_tasks_table', 17),
(21, '2024_03_15_223929_create_submissions_table', 18),
(22, '2024_03_18_113829_update_submissions_table', 19),
(23, '2024_03_19_233129_add_note_to_questions_table', 20),
(24, '2024_03_22_112818_add_constraint_unique_to_notes_table', 21);

-- --------------------------------------------------------

--
-- Structure de la table `notes`
--

CREATE TABLE `notes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `note` double NOT NULL,
  `qcm_id` bigint(20) UNSIGNED DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `notes`
--

INSERT INTO `notes` (`id`, `note`, `qcm_id`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 8, 13, 26, NULL, NULL),
(3, 9, 13, 27, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(41, 'App\\Models\\User', 26, 'h.bourras', 'ea9e316fb9a4bf074dd1f2bac36d73e83d8cab5dbdd0e1ea370066944775e93f', '[\"*\"]', '2024-03-22 10:09:50', NULL, '2024-03-21 15:03:40', '2024-03-22 10:09:50');

-- --------------------------------------------------------

--
-- Structure de la table `qcms`
--

CREATE TABLE `qcms` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `sector_id` bigint(20) UNSIGNED NOT NULL,
  `noteTotale` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `qcms`
--

INSERT INTO `qcms` (`id`, `title`, `user_id`, `created_at`, `updated_at`, `sector_id`, `noteTotale`) VALUES
(2, 'QCM 1 C++', 6, NULL, NULL, 1, 5),
(13, 'web 1', 4, NULL, NULL, 1, 0),
(14, 'web 2 ', 4, NULL, NULL, 2, 0),
(15, 'QCM 1 web', 4, '2024-03-19 23:59:22', '2024-03-20 00:04:29', 1, 28);

-- --------------------------------------------------------

--
-- Structure de la table `questions`
--

CREATE TABLE `questions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `text` varchar(255) NOT NULL,
  `qcm_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `note` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `questions`
--

INSERT INTO `questions` (`id`, `text`, `qcm_id`, `created_at`, `updated_at`, `note`) VALUES
(4, 'Quelle est la taille d\'un int\' ?', 2, NULL, NULL, 2),
(5, 'c\'est quoi C++', 2, NULL, NULL, 3),
(22, 'c\'est quoi langage html ?', 15, '2024-03-19 23:59:22', '2024-03-20 00:04:29', 2),
(23, 'c\'est quoi laravel ??', 15, '2024-03-19 23:59:22', '2024-03-20 00:04:29', 20),
(24, 'c\'est quoi CSS ?', 15, '2024-03-19 23:59:22', '2024-03-20 00:04:29', 6);

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `roles`
--

INSERT INTO `roles` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'director', NULL, NULL),
(2, 'professor', NULL, NULL),
(3, 'student', NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `sectors`
--

CREATE TABLE `sectors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `departement_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `sectors`
--

INSERT INTO `sectors` (`id`, `name`, `departement_id`, `created_at`, `updated_at`) VALUES
(1, 'GI', 3, NULL, NULL),
(2, 'IDSD', 3, NULL, NULL),
(3, 'TM', 2, NULL, NULL),
(4, 'Electrical Systems Engineering', 6, NULL, NULL),
(5, 'Building Electricity', 6, NULL, NULL),
(6, 'renewable energy', 7, NULL, NULL),
(7, 'Operational Marketing', 1, NULL, NULL),
(8, 'Digital Marketing', 1, NULL, NULL),
(9, 'Theoretical Physics', 5, NULL, NULL),
(10, 'Experimental Physics', 5, NULL, NULL),
(11, 'ISIL', 3, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `sectors_users`
--

CREATE TABLE `sectors_users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sectors_id` bigint(20) UNSIGNED NOT NULL,
  `users_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `sectors_users`
--

INSERT INTO `sectors_users` (`id`, `sectors_id`, `users_id`, `created_at`, `updated_at`) VALUES
(1, 2, 3, NULL, '2024-02-12 16:56:46'),
(3, 1, 3, NULL, '2024-02-12 16:56:46'),
(4, 1, 5, NULL, NULL),
(5, 1, 4, NULL, NULL),
(6, 1, 6, NULL, NULL),
(52, 11, 5, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `submissions`
--

CREATE TABLE `submissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `task_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `file` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `submissions`
--

INSERT INTO `submissions` (`id`, `task_id`, `user_id`, `file`, `created_at`, `updated_at`) VALUES
(1, 9, 26, 'path 1', NULL, NULL),
(2, 4, 26, 'path 2', NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `tasks`
--

CREATE TABLE `tasks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `taskName` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `sector_id` bigint(20) UNSIGNED NOT NULL,
  `description` varchar(255) NOT NULL,
  `deadline` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `tasks`
--

INSERT INTO `tasks` (`id`, `taskName`, `user_id`, `sector_id`, `description`, `deadline`, `created_at`, `updated_at`) VALUES
(1, 'task 1', 23, 1, 'premier task pour la filière', '2024-03-30 10:57:58', NULL, NULL),
(4, 'task 2', 23, 2, 'dexième task', '2024-03-27 11:19:56', NULL, NULL),
(8, 'task 4', 5, 11, 'quatrième task', '2024-03-20 18:04:50', NULL, NULL),
(9, 'task 3', 3, 1, 'troisième task', '2024-03-27 10:59:30', NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `bio` varchar(255) DEFAULT NULL,
  `role_id` bigint(20) UNSIGNED DEFAULT NULL,
  `sector_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `departement_id` bigint(20) UNSIGNED DEFAULT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `bio`, `role_id`, `sector_id`, `created_at`, `updated_at`, `departement_id`, `firstName`, `lastName`) VALUES
(3, 'F.karami', 'fahd@gmail.com', 'fahd@gmail.com', NULL, 2, NULL, NULL, '2024-02-12 16:56:46', 3, 'fahd', 'karami'),
(4, 's.gounane', 'said@gmail.com', '9999', NULL, 2, NULL, NULL, NULL, 8, 'said', 'gounane'),
(5, 'l.ziad', 'lamia@gmail.com', '0000', NULL, 2, NULL, NULL, NULL, 3, 'lamia', 'ziad'),
(6, 'n.chouhad', 'nadia@gmail.com', '0000', NULL, 2, NULL, NULL, NULL, 3, 'nadia', 'chouhad'),
(22, 'f.ldirector', 'director@gmail.com', '$2y$12$WugcBKHU3who3TEupXdyQ.L/UfbEVqjbduWXOpbBDwpSirv.kZQli', NULL, 1, NULL, '2024-03-09 21:09:31', '2024-03-09 21:09:31', NULL, 'Fdirector', 'Ldirector'),
(23, 'y.bourfia', 'youssef@gmail.com', '$2y$12$RlpKN9A8QgXSXLbDkrLqK.6rv3WMhdCZ40PZ.N4ZL5H3zQF3fivwO', NULL, 2, NULL, '2024-03-12 13:48:11', '2024-03-12 13:48:11', 3, 'youssef', 'bourfia'),
(26, 'h.bourras', 'bourrashamza2004@gmail.com', '$2y$12$8rrqqp03ddjyfYs20Qkctellp18DDqBlCHhBGXuQ0s/E6geVu511O', NULL, 3, 1, '2024-03-14 14:28:32', '2024-03-14 14:45:47', NULL, 'hamza', 'bourras'),
(27, 'm.slaoui', 'mohamed@gmail.com', '$2y$12$WlpqJ6erwikYwk.VwpCGxOODHtV1UG5zZD7GZY7Wvrfq4uMh9Jema', NULL, 3, 1, '2024-03-21 15:02:57', '2024-03-21 15:02:57', NULL, 'mohamed', 'slaoui');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `announcements`
--
ALTER TABLE `announcements`
  ADD PRIMARY KEY (`id`),
  ADD KEY `announcements_sector_id_foreign` (`sector_id`),
  ADD KEY `announcements_user_id_foreign` (`user_id`);

--
-- Index pour la table `choices`
--
ALTER TABLE `choices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `choices_question_id_foreign` (`question_id`);

--
-- Index pour la table `departements`
--
ALTER TABLE `departements`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`id`),
  ADD KEY `documents_user_id_foreign` (`user_id`),
  ADD KEY `documents_sector_id_foreign` (`sector_id`);

--
-- Index pour la table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `notes_qcm_id_user_id_unique` (`qcm_id`,`user_id`),
  ADD KEY `notes_user_id_foreign` (`user_id`);

--
-- Index pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Index pour la table `qcms`
--
ALTER TABLE `qcms`
  ADD PRIMARY KEY (`id`),
  ADD KEY `qcms_user_id_foreign` (`user_id`),
  ADD KEY `qcms_sector_id_foreign` (`sector_id`);

--
-- Index pour la table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `questions_qcm_id_foreign` (`qcm_id`);

--
-- Index pour la table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `sectors`
--
ALTER TABLE `sectors`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sectors_departement_id_foreign` (`departement_id`);

--
-- Index pour la table `sectors_users`
--
ALTER TABLE `sectors_users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sectors_users_sectors_id_foreign` (`sectors_id`),
  ADD KEY `sectors_users_users_id_foreign` (`users_id`);

--
-- Index pour la table `submissions`
--
ALTER TABLE `submissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `submissions_task_id_user_id_unique` (`task_id`,`user_id`),
  ADD KEY `submissions_user_id_foreign` (`user_id`);

--
-- Index pour la table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tasks_user_id_foreign` (`user_id`),
  ADD KEY `tasks_sector_id_foreign` (`sector_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_role_id_foreign` (`role_id`),
  ADD KEY `users_sector_id_foreign` (`sector_id`),
  ADD KEY `users_departement_id_foreign` (`departement_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `announcements`
--
ALTER TABLE `announcements`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `choices`
--
ALTER TABLE `choices`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT pour la table `departements`
--
ALTER TABLE `departements`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `documents`
--
ALTER TABLE `documents`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT pour la table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT pour la table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT pour la table `qcms`
--
ALTER TABLE `qcms`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT pour la table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT pour la table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `sectors`
--
ALTER TABLE `sectors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `sectors_users`
--
ALTER TABLE `sectors_users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT pour la table `submissions`
--
ALTER TABLE `submissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `announcements`
--
ALTER TABLE `announcements`
  ADD CONSTRAINT `announcements_sector_id_foreign` FOREIGN KEY (`sector_id`) REFERENCES `sectors` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `announcements_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `choices`
--
ALTER TABLE `choices`
  ADD CONSTRAINT `choices_question_id_foreign` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `documents`
--
ALTER TABLE `documents`
  ADD CONSTRAINT `documents_sector_id_foreign` FOREIGN KEY (`sector_id`) REFERENCES `sectors` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `documents_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `notes`
--
ALTER TABLE `notes`
  ADD CONSTRAINT `notes_qcm_id_foreign` FOREIGN KEY (`qcm_id`) REFERENCES `qcms` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `notes_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `qcms`
--
ALTER TABLE `qcms`
  ADD CONSTRAINT `qcms_sector_id_foreign` FOREIGN KEY (`sector_id`) REFERENCES `sectors` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `qcms_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `questions_qcm_id_foreign` FOREIGN KEY (`qcm_id`) REFERENCES `qcms` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `sectors`
--
ALTER TABLE `sectors`
  ADD CONSTRAINT `sectors_departement_id_foreign` FOREIGN KEY (`departement_id`) REFERENCES `departements` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `sectors_users`
--
ALTER TABLE `sectors_users`
  ADD CONSTRAINT `sectors_users_sectors_id_foreign` FOREIGN KEY (`sectors_id`) REFERENCES `sectors` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `sectors_users_users_id_foreign` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `submissions`
--
ALTER TABLE `submissions`
  ADD CONSTRAINT `submissions_task_id_foreign` FOREIGN KEY (`task_id`) REFERENCES `tasks` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `submissions_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_sector_id_foreign` FOREIGN KEY (`sector_id`) REFERENCES `sectors` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `tasks_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_departement_id_foreign` FOREIGN KEY (`departement_id`) REFERENCES `departements` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `users_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `users_sector_id_foreign` FOREIGN KEY (`sector_id`) REFERENCES `sectors` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
