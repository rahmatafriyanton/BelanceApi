-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 29, 2022 at 03:49 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `belance`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_detail_journey`
--

CREATE TABLE `tb_detail_journey` (
  `detail_journey_id` int(11) NOT NULL,
  `journey_id` int(11) NOT NULL,
  `nama_detail_journey` varchar(100) NOT NULL,
  `current_status` enum('0','1','2') NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_detail_journey`
--

INSERT INTO `tb_detail_journey` (`detail_journey_id`, `journey_id`, `nama_detail_journey`, `current_status`) VALUES
(4, 1, 'Learn UIKit', '0'),
(8, 1, 'Learn UIKit', '2'),
(9, 1, 'Learn UIKit', '2'),
(10, 1, 'Learn UIKit', '2');

-- --------------------------------------------------------

--
-- Table structure for table `tb_journey`
--

CREATE TABLE `tb_journey` (
  `journey_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `nama_journey` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_journey`
--

INSERT INTO `tb_journey` (`journey_id`, `user_id`, `nama_journey`) VALUES
(1, 1, 'Be iOS Developer'),
(49, 1, 'Be UI/UX Designer');

-- --------------------------------------------------------

--
-- Table structure for table `tb_schedule`
--

CREATE TABLE `tb_schedule` (
  `schedule_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `schedule_type` enum('studying','working') NOT NULL,
  `time` varchar(20) NOT NULL,
  `is_active` varchar(10) NOT NULL DEFAULT 'true'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_schedule`
--

INSERT INTO `tb_schedule` (`schedule_id`, `user_id`, `schedule_type`, `time`, `is_active`) VALUES
(7, 1, 'studying', '13:00:00', 'true'),
(8, 1, 'working', '15:30:00', 'true'),
(9, 1, 'studying', '20:00:00', 'false'),
(12, 1, 'studying', '09:00:00', 'true');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_detail_journey`
--
ALTER TABLE `tb_detail_journey`
  ADD PRIMARY KEY (`detail_journey_id`),
  ADD KEY `journey_id` (`journey_id`);

--
-- Indexes for table `tb_journey`
--
ALTER TABLE `tb_journey`
  ADD PRIMARY KEY (`journey_id`);

--
-- Indexes for table `tb_schedule`
--
ALTER TABLE `tb_schedule`
  ADD PRIMARY KEY (`schedule_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_detail_journey`
--
ALTER TABLE `tb_detail_journey`
  MODIFY `detail_journey_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tb_journey`
--
ALTER TABLE `tb_journey`
  MODIFY `journey_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `tb_schedule`
--
ALTER TABLE `tb_schedule`
  MODIFY `schedule_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tb_detail_journey`
--
ALTER TABLE `tb_detail_journey`
  ADD CONSTRAINT `tb_detail_journey_ibfk_1` FOREIGN KEY (`journey_id`) REFERENCES `tb_journey` (`journey_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
