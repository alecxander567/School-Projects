-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 28, 2025 at 03:44 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbonlineorders`
--

-- --------------------------------------------------------

--
-- Table structure for table `tblcustomers`
--

CREATE TABLE `tblcustomers` (
  `CustomerID` int(11) NOT NULL,
  `customerName` varchar(50) NOT NULL,
  `Address` varchar(100) NOT NULL,
  `Phone_No` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblcustomers`
--

INSERT INTO `tblcustomers` (`CustomerID`, `customerName`, `Address`, `Phone_No`) VALUES
(21, 'John Doe', 'toril', '09347823291'),
(22, 'Stephen Mark', 'Matina, Shrine, Davao City', '09654578594'),
(23, 'Danny Moe', 'Matina, Davao City', '09472547815'),
(24, 'Justine Jay', 'Bankerohan, Davao City', '09774452678'),
(25, 'Rose Mary', 'Daliao, Toril, Davao City', '09567842647'),
(26, 'Bob Joy', 'Nabunturan, Davao City', '09784184578'),
(27, 'Xandra Marcos', 'Marapangi, Toril, Davao City', '09784563578'),
(28, 'Kevin Tan', 'Bato, Toril, Davao City', '09561457862'),
(29, 'Jay Mark', 'Eden, Toril, Davao City', '09235786544'),
(30, 'Johnson Lee', 'Catalunan Grande, Davao City', '09561148789'),
(31, 'Garry Owen', 'Tugbok, Davao City', '09554871356'),
(32, 'David Luke', 'Descuatan, Toril, Davao City', '09874511234'),
(33, 'Jake Enrile', 'Baliok, Toril Davao City', '09785124578'),
(34, 'Stephen Allen', 'Astorga, Sta Cruz, Davao Del Sur', '09784512645'),
(35, 'Karen Mae', 'Sampaguita, St. Bansalan, Digos City', '09874562387'),
(36, 'Barry Alonzo', 'Lubogan, Toril, Davao City', '09874156576'),
(37, 'Reymark Dave', 'Lubogan, Toril, Davao City', '09567825478'),
(38, 'John Herbert', 'Alambre, Toril Davao City', '09551547826'),
(39, 'Honey Jane', 'Saypon, Toril, Davao City', '09652147836'),
(40, 'Dan Mark', 'Upper Piedad, Toril Davao City', '09874523254');

-- --------------------------------------------------------

--
-- Table structure for table `tblorders`
--

CREATE TABLE `tblorders` (
  `OrderID` int(11) NOT NULL,
  `OrderName` varchar(100) NOT NULL,
  `cusOrderKey` int(11) NOT NULL,
  `Quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblorders`
--

INSERT INTO `tblorders` (`OrderID`, `OrderName`, `cusOrderKey`, `Quantity`) VALUES
(26, 'Burger', 21, 5),
(27, 'Fries', 22, 2),
(28, 'ChickenJoy', 23, 8),
(29, 'Sundaee', 24, 2),
(30, 'Softdrinks', 25, 2),
(31, 'chicken & fries', 26, 2),
(32, 'Fries & Sundae', 27, 3),
(33, 'Chowfan', 27, 3),
(34, 'Zinger Combo', 27, 6),
(35, 'Lumpiang Toge', 28, 4),
(36, 'Sisig Rice Bowl', 29, 8),
(37, 'Hita Paa ', 29, 4),
(38, 'Mashed Potato', 30, 3),
(39, 'Sweet and Sour', 31, 6),
(40, 'Chicken Nuggets', 32, 5),
(41, 'Sundae', 33, 4),
(42, 'Halo-Halo', 34, 5),
(43, 'Pizza', 35, 6),
(44, 'Peach Mango Pie', 36, 3),
(45, 'Palabok', 38, 4);

-- --------------------------------------------------------

--
-- Table structure for table `tblpayment`
--

CREATE TABLE `tblpayment` (
  `paymentID` int(11) NOT NULL,
  `payment` varchar(50) NOT NULL,
  `totalPrice` int(11) NOT NULL,
  `Date` date NOT NULL,
  `OrderForeignKey` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblpayment`
--

INSERT INTO `tblpayment` (`paymentID`, `payment`, `totalPrice`, `Date`, `OrderForeignKey`) VALUES
(1, 'Gcash', 160, '2025-05-27', 26),
(2, 'Paymaya', 378, '2025-05-27', 27),
(3, 'Gcash', 237, '2025-05-27', 28),
(4, 'Paymaya', 146, '2025-05-27', 29),
(5, 'Paymaya', 483, '2025-05-27', 30),
(6, 'Gcash', 435, '2025-05-27', 31),
(7, 'Gcash', 356, '2025-05-27', 32),
(8, 'Paymaya', 463, '2025-05-27', 33),
(9, 'Gcash', 287, '2025-05-27', 34),
(10, 'Paymaya', 167, '2025-05-27', 35),
(11, 'Paymaya', 395, '2025-05-27', 36),
(12, 'Gcash', 167, '2025-05-27', 37),
(13, 'Gcash', 287, '2025-05-27', 38),
(14, 'CoD', 297, '2025-05-27', 39),
(15, 'CoD', 119, '2025-05-27', 40),
(16, 'Gcash', 355, '2025-05-27', 41),
(17, 'Paymaya', 323, '2025-05-27', 42),
(18, 'Gcash', 348, '2025-05-27', 43),
(19, 'CoD', 221, '2025-05-27', 44),
(20, 'Gcash', 431, '2025-05-27', 45);

-- --------------------------------------------------------

--
-- Table structure for table `tblrestaurant`
--

CREATE TABLE `tblrestaurant` (
  `restaurantID` int(11) NOT NULL,
  `restaurantName` varchar(100) NOT NULL,
  `Address` varchar(100) NOT NULL,
  `Contact_No` varchar(50) NOT NULL,
  `PaymentForeignKey` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblrestaurant`
--

INSERT INTO `tblrestaurant` (`restaurantID`, `restaurantName`, `Address`, `Contact_No`, `PaymentForeignKey`) VALUES
(2, 'McDonalds', 'Toril, Davao City', '8888-6236', 2),
(11, 'Jollibee', 'Toril, Davao City', '8-7000', 1),
(12, 'Chowking', 'Toril, Davao City', '88-87-88-88', 3),
(13, 'Mang Inasal', 'Toril, Davao City', '7-33-33', 4),
(14, 'KFC', 'Toril, Davao City', '9-88-88', 5),
(15, 'Jollibee', 'Toril, Davao City', '8-7000', 6),
(16, 'McDonalds', 'Toril, Davao City', '8888-6236', 7),
(17, 'Chowking', 'Toril, Davao City', '88-87-88-88', 8),
(18, 'Mang Inasal', 'Toril, Davao City', '7-33-33', 9),
(19, 'Chowking', 'Toril, Davao City', '88-87-88-88', 10),
(20, 'Jollibee', 'Toril, Davao City', '8-7000', 11),
(21, 'McDonalds', 'Toril, Davao City', '8888-6236', 12),
(22, 'KFC', 'Toril, Davao City', '9-88-88', 13),
(23, 'Mang Inasal ', 'Toril, Davao City', '7-33-33', 14),
(24, 'Taguno restaurant', 'Astorga, Sta. Cruz, Davao Del Sur', '02329323', 15),
(25, 'Jollibee', 'Toril, Davao City', '8-7000', 16),
(26, 'McDonalds', 'Toril, Davao City', '8888-6236', 17),
(27, 'KFC', 'Toril, Davao City', '9-88-88', 18),
(28, 'KFC', 'Toril, Davao City', '9-88-88', 19),
(29, 'Jollibee', 'Toril, Davao City', '8-7000', 20);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tblcustomers`
--
ALTER TABLE `tblcustomers`
  ADD PRIMARY KEY (`CustomerID`);

--
-- Indexes for table `tblorders`
--
ALTER TABLE `tblorders`
  ADD PRIMARY KEY (`OrderID`),
  ADD KEY `cusOrderKey` (`cusOrderKey`);

--
-- Indexes for table `tblpayment`
--
ALTER TABLE `tblpayment`
  ADD PRIMARY KEY (`paymentID`),
  ADD KEY `OrderForeignKey` (`OrderForeignKey`);

--
-- Indexes for table `tblrestaurant`
--
ALTER TABLE `tblrestaurant`
  ADD PRIMARY KEY (`restaurantID`),
  ADD KEY `PaymentForeignKey` (`PaymentForeignKey`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tblcustomers`
--
ALTER TABLE `tblcustomers`
  MODIFY `CustomerID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `tblorders`
--
ALTER TABLE `tblorders`
  MODIFY `OrderID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `tblpayment`
--
ALTER TABLE `tblpayment`
  MODIFY `paymentID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `tblrestaurant`
--
ALTER TABLE `tblrestaurant`
  MODIFY `restaurantID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tblorders`
--
ALTER TABLE `tblorders`
  ADD CONSTRAINT `cusOrderKey` FOREIGN KEY (`cusOrderKey`) REFERENCES `tblcustomers` (`CustomerID`);

--
-- Constraints for table `tblpayment`
--
ALTER TABLE `tblpayment`
  ADD CONSTRAINT `OrderForeignKey` FOREIGN KEY (`OrderForeignKey`) REFERENCES `tblorders` (`OrderID`);

--
-- Constraints for table `tblrestaurant`
--
ALTER TABLE `tblrestaurant`
  ADD CONSTRAINT `PaymentForeignKey` FOREIGN KEY (`PaymentForeignKey`) REFERENCES `tblpayment` (`paymentID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
