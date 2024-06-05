-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Giu 05, 2024 alle 20:36
-- Versione del server: 10.4.32-MariaDB
-- Versione PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mysite`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `indirizzi`
--

CREATE TABLE `indirizzi` (
  `id_utente` int(11) NOT NULL,
  `indirizzo` varchar(255) DEFAULT NULL,
  `citta` varchar(100) DEFAULT NULL,
  `stato` varchar(100) DEFAULT NULL,
  `cap` int(10) DEFAULT NULL,
  `tel` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dump dei dati per la tabella `indirizzi`
--

INSERT INTO `indirizzi` (`id_utente`, `indirizzo`, `citta`, `stato`, `cap`, `tel`) VALUES
(3, 'via delle bubbe', 'caltacity', 'IT', 95040, NULL),
(5, 'Via sus 99', 'Citybro', 'IT', 74120, NULL),
(6, 'Via fuffa 99', 'citylife', 'IT', 54000, NULL);

-- --------------------------------------------------------

--
-- Struttura della tabella `ordini`
--

CREATE TABLE `ordini` (
  `id` int(11) NOT NULL,
  `id_acquirente` int(11) DEFAULT NULL,
  `id_taglia` int(11) DEFAULT NULL,
  `id_transazione` varchar(255) DEFAULT NULL,
  `orario_acquisto` datetime DEFAULT NULL,
  `importo` int(11) DEFAULT NULL,
  `email_acquirente` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dump dei dati per la tabella `ordini`
--

INSERT INTO `ordini` (`id`, `id_acquirente`, `id_taglia`, `id_transazione`, `orario_acquisto`, `importo`, `email_acquirente`) VALUES
(14, 5, 9, 'cs_test_a1V0cOKWZYNl7uZHPGi4nzOP9gdPHrKOERYdjMoP7h6e1LkCIwoYY05X4i', '2024-06-04 17:22:16', 140, ' pippo@mail.com '),
(15, 5, 16, 'cs_test_a1Y9Cvy3FwOdjZGUfAZ46PsuTXKH4cGVH1CSjF2tJcj9xFjtNdyh1AJzqe', '2024-06-04 17:26:57', 125, ' pippo@mail.com '),
(16, 6, 9, 'cs_test_a1ctzhW92ecw35LhLjfD1DSwh7yATticz7bZc53xobqFzN4RBJbMTVR8CQ', '2024-06-04 21:52:19', 140, ' paperinoleo@leo.com '),
(17, 5, 3, 'cs_test_a11V8FXzeKcHLOh3C8LLV3mlUf7uI3uypXtsbUvxWl09ofEeVUTIL5ZLxh', '2024-06-04 22:04:24', 119, ' pippo@mail.com '),
(18, 5, 9, 'cs_test_a1oSFvQoxD6sfMiNxy0t774wEUT56NKbLjqAZjJbEA1wDZsCrxIHQ3uHDk', '2024-06-04 22:36:24', 140, ' pippo@mail.com '),
(19, 5, 3, 'cs_test_a1wLcA9qyuaiF4w05PfWiV8GXlCLChZcoVlrz03vWSnuHm8QTCGHuR7CJR', '2024-06-04 22:44:55', 120, ' pippo@mail.com '),
(21, 5, 13, 'cs_test_a1roi9A5iA4OuQKqJvWGUc7Gn9mXIk7XmdhuCtQ5GIIAgQLWcR7xMhrbpn', '2024-06-04 22:57:10', 140, ' pippo@mail.com '),
(22, 6, 16, 'cs_test_a1E3rJzT2hLxTfunjJdzMIgchMKpnq3PI1rzKqzboMcFUKynzjt5c29QqH', '2024-06-04 22:59:10', 120, ' paperinoleo@leo.com '),
(23, 3, 8, 'cs_test_a1qeJHUJJ4RzK4GsyM71C6OeI6Vf5MyBgG9FbAAwRKgwq2XFzQElRFlG0H', '2024-06-05 18:21:39', 139, ' cicciopasticcio@mail.com '),
(24, 3, 10, 'cs_test_a16D25qYlydMZiCbtSsTypwgn1yTpwBY7ynVPEseKcVJW2I04N8TH5QviZ', '2024-06-05 18:25:43', 119, ' cicciopasticcio@mail.com '),
(25, 5, 14, 'cs_test_a1nh9bxG8HyOUwQ1nxxoS3zUcFGlHz4PYRm7CRZNvhbaY8ZaXfznCv8FfA', '2024-06-05 18:52:02', 120, ' pippo@mail.com '),
(26, 6, 8, 'cs_test_a1Bc84oesu3drd0kRRgv7JavRpRMe0qL6V2UESNTf6L54lz27RPyCFAirE', '2024-06-05 18:55:39', 120, ' paperinoleo@leo.com ');

-- --------------------------------------------------------

--
-- Struttura della tabella `scarpe`
--

CREATE TABLE `scarpe` (
  `id` int(11) NOT NULL,
  `sku` varchar(20) DEFAULT NULL,
  `nome_minuscolo` varchar(99) NOT NULL,
  `img_link` varchar(999) NOT NULL,
  `descrizione` varchar(99) NOT NULL,
  `accessori` varchar(99) DEFAULT NULL,
  `minprice` int(11) NOT NULL,
  `data_inserimento` datetime DEFAULT NULL,
  `num_vendite` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dump dei dati per la tabella `scarpe`
--

INSERT INTO `scarpe` (`id`, `sku`, `nome_minuscolo`, `img_link`, `descrizione`, `accessori`, `minprice`, `data_inserimento`, `num_vendite`) VALUES
(1, 'DD1391-100', 'nike dunk low panda', 'img/panda dunk.png', 'Nike Dunk Low \"Panda\"', 'Only black laces', 119, '2024-05-21 11:08:57', 12),
(2, 'DR5415-103', 'air jordan 4 sb pine green', 'img/Jordan 4 pine.png', 'Air Jordan 4 SB \"Pine Green\"', 'Only white laces', 0, '2024-05-21 11:49:26', 0),
(3, '	DM7866-162', 'jordan 1 low travis scott reverse mocha', 'img/travis scott.png', 'Jordan 1 Low x Travis Scott \"Reverse Mocha\"', '4 set of extralaces', 0, '2024-05-21 11:50:17', 0),
(4, 'HQ6448', 'yeezy slide onyx', 'img/slide onyx.png', 'Yeezy Slide \"Onyx\"', 'None', 0, '2024-05-21 11:50:41', 0);

-- --------------------------------------------------------

--
-- Struttura della tabella `taglie_scarpe`
--

CREATE TABLE `taglie_scarpe` (
  `id` int(11) NOT NULL,
  `scarpa_id` int(11) NOT NULL,
  `taglia` decimal(4,1) NOT NULL,
  `quantita` int(11) NOT NULL,
  `prezzo_minore` int(11) NOT NULL,
  `user_prezzo_minore` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dump dei dati per la tabella `taglie_scarpe`
--

INSERT INTO `taglie_scarpe` (`id`, `scarpa_id`, `taglia`, `quantita`, `prezzo_minore`, `user_prezzo_minore`) VALUES
(1, 1, 38.5, 0, 0, 0),
(2, 1, 39.0, 0, 0, 0),
(3, 1, 40.0, 0, 0, 0),
(4, 1, 40.5, 2, 119, 6),
(5, 1, 41.0, 0, 0, 0),
(6, 1, 42.0, 0, 0, 0),
(7, 1, 42.5, 0, 0, 0),
(8, 1, 43.0, 0, 0, 0),
(9, 1, 44.0, 0, 0, 0),
(10, 1, 44.5, 0, 0, 0),
(11, 1, 45.0, 0, 0, 0),
(12, 1, 46.0, 0, 0, 0),
(13, 1, 47.0, 0, 0, 0),
(14, 1, 47.5, 0, 0, 0),
(15, 1, 48.5, 0, 0, 0),
(16, 1, 49.5, 0, 0, 0);

-- --------------------------------------------------------

--
-- Struttura della tabella `utenti`
--

CREATE TABLE `utenti` (
  `id_utente` int(11) NOT NULL,
  `nome` varchar(99) NOT NULL,
  `cognome` varchar(99) NOT NULL,
  `email` varchar(99) NOT NULL,
  `password` varchar(999) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dump dei dati per la tabella `utenti`
--

INSERT INTO `utenti` (`id_utente`, `nome`, `cognome`, `email`, `password`) VALUES
(3, 'Ciccio', 'Pasticcio', 'cicciopasticcio@mail.com', '$2y$10$5H8FEoi1z5rHv/0VMEfPWObwgsHiG4HE5IV7aRXsd0d4Z5kei6c0G'),
(5, 'Pippo', 'Baudo', 'pippo@mail.com', '$2y$10$w/VsM/MqRkETj1FeU4kwzu/LApQYBX//pseDEaA1RL1s3Ba.qZs8O'),
(6, 'Leo', 'Cicciobello', 'paperinoleo@leo.com', '$2y$10$rfiHl9RLUFPEuDDmPqGLYOWuASAgHevDA1eBMrh7SFo6KDqCAloRS');

-- --------------------------------------------------------

--
-- Struttura della tabella `vendite_concluse`
--

CREATE TABLE `vendite_concluse` (
  `id_vendita` int(11) NOT NULL,
  `id_utente` int(11) DEFAULT NULL,
  `id_taglia` int(11) DEFAULT NULL,
  `prezzo` int(11) DEFAULT NULL,
  `guadagno` int(11) DEFAULT NULL,
  `time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dump dei dati per la tabella `vendite_concluse`
--

INSERT INTO `vendite_concluse` (`id_vendita`, `id_utente`, `id_taglia`, `prezzo`, `guadagno`, `time`) VALUES
(22, 5, 16, 105, 85, '2024-06-04 17:26:57'),
(23, 3, 9, 120, 100, '2024-06-04 21:52:19'),
(24, 3, 3, 99, 79, '2024-06-04 22:04:24'),
(25, 5, 9, 120, 100, '2024-06-04 22:36:24'),
(26, 3, 3, 100, 80, '2024-06-04 22:44:55'),
(28, 3, 13, 120, 100, '2024-06-04 22:57:10'),
(29, 5, 16, 100, 80, '2024-06-04 22:59:10'),
(30, 3, 8, 119, 99, '2024-06-05 18:21:39'),
(31, 3, 10, 99, 79, '2024-06-05 18:25:43'),
(32, 3, 14, 100, 80, '2024-06-05 18:52:02'),
(33, 5, 8, 100, 80, '2024-06-05 18:55:39');

-- --------------------------------------------------------

--
-- Struttura della tabella `vendite_in_corso`
--

CREATE TABLE `vendite_in_corso` (
  `id_vendita` int(11) NOT NULL,
  `id_utente` int(11) DEFAULT NULL,
  `id_taglia` int(11) DEFAULT NULL,
  `prezzo` int(11) DEFAULT NULL,
  `data_pubblicazione` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dump dei dati per la tabella `vendite_in_corso`
--

INSERT INTO `vendite_in_corso` (`id_vendita`, `id_utente`, `id_taglia`, `prezzo`, `data_pubblicazione`) VALUES
(51, 6, 4, 119, '2024-06-05 19:07:51');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `indirizzi`
--
ALTER TABLE `indirizzi`
  ADD PRIMARY KEY (`id_utente`);

--
-- Indici per le tabelle `ordini`
--
ALTER TABLE `ordini`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `scarpe`
--
ALTER TABLE `scarpe`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `taglie_scarpe`
--
ALTER TABLE `taglie_scarpe`
  ADD PRIMARY KEY (`id`),
  ADD KEY `scarpa_id` (`scarpa_id`);

--
-- Indici per le tabelle `utenti`
--
ALTER TABLE `utenti`
  ADD PRIMARY KEY (`id_utente`);

--
-- Indici per le tabelle `vendite_concluse`
--
ALTER TABLE `vendite_concluse`
  ADD PRIMARY KEY (`id_vendita`),
  ADD KEY `id_utente` (`id_utente`),
  ADD KEY `id_taglia` (`id_taglia`);

--
-- Indici per le tabelle `vendite_in_corso`
--
ALTER TABLE `vendite_in_corso`
  ADD PRIMARY KEY (`id_vendita`),
  ADD KEY `id_utente` (`id_utente`),
  ADD KEY `id_taglia` (`id_taglia`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `ordini`
--
ALTER TABLE `ordini`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT per la tabella `scarpe`
--
ALTER TABLE `scarpe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT per la tabella `taglie_scarpe`
--
ALTER TABLE `taglie_scarpe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT per la tabella `utenti`
--
ALTER TABLE `utenti`
  MODIFY `id_utente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT per la tabella `vendite_concluse`
--
ALTER TABLE `vendite_concluse`
  MODIFY `id_vendita` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT per la tabella `vendite_in_corso`
--
ALTER TABLE `vendite_in_corso`
  MODIFY `id_vendita` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `indirizzi`
--
ALTER TABLE `indirizzi`
  ADD CONSTRAINT `indirizzi_ibfk_1` FOREIGN KEY (`id_utente`) REFERENCES `utenti` (`id_utente`);

--
-- Limiti per la tabella `taglie_scarpe`
--
ALTER TABLE `taglie_scarpe`
  ADD CONSTRAINT `taglie_scarpe_ibfk_1` FOREIGN KEY (`scarpa_id`) REFERENCES `scarpe` (`id`);

--
-- Limiti per la tabella `vendite_concluse`
--
ALTER TABLE `vendite_concluse`
  ADD CONSTRAINT `vendite_concluse_ibfk_1` FOREIGN KEY (`id_utente`) REFERENCES `utenti` (`id_utente`),
  ADD CONSTRAINT `vendite_concluse_ibfk_2` FOREIGN KEY (`id_taglia`) REFERENCES `taglie_scarpe` (`id`);

--
-- Limiti per la tabella `vendite_in_corso`
--
ALTER TABLE `vendite_in_corso`
  ADD CONSTRAINT `vendite_in_corso_ibfk_1` FOREIGN KEY (`id_utente`) REFERENCES `utenti` (`id_utente`),
  ADD CONSTRAINT `vendite_in_corso_ibfk_2` FOREIGN KEY (`id_taglia`) REFERENCES `taglie_scarpe` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
