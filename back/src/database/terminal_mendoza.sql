-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 12-01-2023 a las 18:45:26
-- Versión del servidor: 5.7.34
-- Versión de PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `terminal_mendoza`
--
CREATE DATABASE IF NOT EXISTS `terminal_mendoza` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `terminal_mendoza`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresa`
--

CREATE TABLE `empresa` (
  `id` int(11) NOT NULL,
  `empresa` varchar(45) NOT NULL,
  `siglas` varchar(45) NOT NULL,
  `img` varchar(100) DEFAULT NULL,
  `cuit` varchar(100) NOT NULL,
  `borrado` tinyint(2) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `empresa`
--

INSERT INTO `empresa` (`id`, `empresa`, `siglas`, `img`, `cuit`, `borrado`) VALUES
(1, 'Andesmar', 'AND', 'andesmar.png', '1544-45555-47', 0),
(2, 'Iselin', 'ISL', 'iselin.png', '20-4457-88', 0),
(3, 'Autotransportes San Juan', 'SJV', 'autsanjuan.png', '20-379955-74', 0),
(4, 'Cata', 'CAT', NULL, '0', 0),
(5, 'Central Argentino', 'CCA', NULL, '0', 0),
(6, 'Flechabus', 'DER', NULL, '0', 0),
(7, 'El Rápido', 'ERI', NULL, '0', 0),
(8, 'Buses Lep', 'LEP', NULL, '0', 0),
(9, 'La Unión', 'LUN', NULL, '0', 0),
(10, 'Chevallier', 'NCH', NULL, '0', 0),
(11, 'Rutamar', 'RTM', NULL, '0', 0),
(12, 'San Juan Mar del Plata', 'SJM', NULL, '0', 0),
(13, 'Del Sur y Media Agua', 'SMA', NULL, '0', 0),
(14, 'Sendas', 'SND', NULL, '0', 0),
(15, 'Tramat', 'TRA', NULL, '0', 0),
(16, 'Vallecito', 'VLL', NULL, '0', 0),
(17, 'Viento Sur', 'VTS', NULL, '0', 0),
(18, 'SOL Y VALLE', 'SYV', NULL, '0', 0),
(19, '20 DE JUNIO', '20J', '20dejunio_88c96fe543.jpg', '0', 0),
(20, 'Ahumada', 'AHU', 'ahumada_1bfb06b4e4.jpg', '0', 0),
(21, 'Chiar', 'CHI', NULL, '0', 0),
(22, 'Coitram', 'COI', NULL, '0', 0),
(23, 'El Quirquincho', 'QQC', NULL, '0', 0),
(24, 'General Artigas', 'EGA', NULL, '0', 0),
(25, 'Fenix', 'FEN', NULL, '0', 0),
(26, 'Nevada', 'NEV', NULL, '0', 0),
(27, 'Ohigins', 'OHI', NULL, '0', 0),
(28, 'Radiomóvil', 'RAD', NULL, '0', 0),
(29, 'Tas Choapa', 'TCH', NULL, '0', 0),
(30, 'Turbus', 'TBU', NULL, '0', 0),
(31, 'Ormeño', 'ORM', NULL, '0', 0),
(32, 'Buttini', 'BUT', NULL, '0', 0),
(33, 'Bartolomé Mitre', 'GBM', NULL, '0', 0),
(34, 'Cacique', 'CCQ', NULL, '0', 0),
(35, 'Dicetour', 'DIC', NULL, '0', 0),
(36, 'El Triunfo', 'TRI', NULL, '0', 0),
(37, 'Maipú', 'MAI', NULL, '0', 0),
(38, 'Nueva Generación', 'NGE', NULL, '0', 0),
(39, 'Prestaciones', 'PTC', NULL, '0', 0),
(40, 'Remis', 'REM', NULL, '0', 0),
(41, 'Andesmar Cargas', 'CAE', NULL, '0', 0),
(42, 'Cata Cargas', 'CCE', NULL, '0', 0),
(43, 'Servicio externo', 'SE', NULL, '0', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado`
--

CREATE TABLE `estado` (
  `id` int(11) NOT NULL,
  `tipo` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `estado`
--

INSERT INTO `estado` (`id`, `tipo`) VALUES
(1, 'En plataforma'),
(2, 'Ingresando'),
(3, 'Servicio sin plataforma'),
(4, 'Fuera de plataforma');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `operacion`
--

CREATE TABLE `operacion` (
  `id` int(11) NOT NULL,
  `tipo_operacion` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `operacion`
--

INSERT INTO `operacion` (`id`, `tipo_operacion`) VALUES
(1, 'Creado'),
(2, 'Modificado'),
(3, 'Eliminado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plataformas`
--

CREATE TABLE `plataformas` (
  `id` int(11) NOT NULL,
  `plataforma` varchar(45) DEFAULT NULL,
  `servicios_id` int(11) NOT NULL DEFAULT '5',
  `borrado` tinyint(2) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `plataformas`
--

INSERT INTO `plataformas` (`id`, `plataforma`, `servicios_id`, `borrado`) VALUES
(1, 'Sin Plataforma', 5, 0),
(2, '1', 5, 0),
(3, '2', 5, 0),
(4, '3', 5, 0),
(5, '4', 5, 0),
(6, '5', 5, 0),
(7, '6', 5, 0),
(8, '7', 5, 0),
(9, '8', 5, 0),
(10, '9', 5, 0),
(11, '10', 5, 0),
(12, '11', 5, 0),
(13, '12', 5, 0),
(14, '13', 5, 0),
(15, '14', 5, 0),
(16, '15', 5, 0),
(17, '16', 5, 0),
(18, '17', 5, 0),
(19, '18', 5, 0),
(20, '19', 5, 0),
(21, '20', 5, 0),
(22, '21', 5, 0),
(23, '21', 5, 0),
(24, '23', 5, 0),
(25, '24', 5, 0),
(26, '25', 5, 0),
(27, '26', 5, 0),
(28, '27', 5, 0),
(29, '28', 5, 0),
(30, '29', 5, 0),
(31, '30', 5, 0),
(32, '31', 5, 0),
(33, '32', 5, 0),
(34, '33', 5, 0),
(35, '34', 5, 0),
(36, '35', 5, 0),
(37, '36', 5, 0),
(38, '37', 5, 0),
(39, '38', 5, 0),
(40, '39', 5, 0),
(41, '40', 5, 0),
(42, '41', 5, 0),
(43, '42', 5, 0),
(44, '43', 5, 0),
(45, '44', 5, 0),
(46, '45', 5, 0),
(47, '46', 5, 0),
(48, '47', 5, 0),
(49, '48', 5, 0),
(50, '49', 5, 0),
(51, '50', 5, 0),
(52, '51', 5, 0),
(53, '52', 5, 0),
(54, '53', 5, 0),
(55, '54', 5, 0),
(56, '55', 5, 0),
(57, '56', 5, 0),
(58, '57', 5, 0),
(59, '58', 5, 0),
(60, '59', 5, 0),
(61, '60', 5, 0),
(62, '61', 5, 0),
(63, '62', 5, 0),
(64, '63', 5, 0),
(65, '64', 5, 0),
(66, '65', 5, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prueba`
--

CREATE TABLE `prueba` (
  `idprueba` int(11) NOT NULL,
  `insert` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro_administrativo`
--

CREATE TABLE `registro_administrativo` (
  `id` int(11) NOT NULL,
  `fecha_ingreso` date NOT NULL,
  `hora_ingreso` time NOT NULL,
  `interno` int(255) DEFAULT NULL,
  `empresa_id` int(11) NOT NULL,
  `servicios_id` int(11) NOT NULL,
  `usuarios_id` int(11) NOT NULL,
  `plataformas_id` int(11) DEFAULT '1',
  `estado_id` int(11) NOT NULL,
  `fecha_salida` date DEFAULT NULL,
  `hora_salida` time DEFAULT NULL,
  `destino` varchar(45) DEFAULT NULL,
  `tipo_tv_id` int(11) DEFAULT '3',
  `interurbano` varchar(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Disparadores `registro_administrativo`
--
DELIMITER $$
CREATE TRIGGER `registro_administrativo_INSERT` AFTER INSERT ON `registro_administrativo` FOR EACH ROW INSERT INTO registro_administrativo_log (
fecha_ingreso, hora_ingreso, interno, empresa_id, servicios_id,usuarios_id, plataformas_id, estado_id, fecha_salida, hora_salida, id_registro, updated_at, operacion_id, interurbano 
) VALUES (NEW.fecha_ingreso, NEW.hora_ingreso, NEW.interno, NEW.empresa_id, NEW.servicios_id, NEW.usuarios_id, 
NEW.plataformas_id, NEW.estado_id, NEW.fecha_salida, NEW.hora_salida, NEW.id, CURRENT_TIMESTAMP(),1, NEW.interurbano)
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `registro_administrativo_UPDATE` AFTER UPDATE ON `registro_administrativo` FOR EACH ROW INSERT INTO registro_administrativo_log (
fecha_ingreso, hora_ingreso, interno, empresa_id, servicios_id,usuarios_id, plataformas_id, estado_id, fecha_salida, hora_salida, id_registro, updated_at, operacion_id, interurbano 
) VALUES (NEW.fecha_ingreso, NEW.hora_ingreso, NEW.interno, NEW.empresa_id, NEW.servicios_id, NEW.usuarios_id, 
NEW.plataformas_id, NEW.estado_id, NEW.fecha_salida, NEW.hora_salida, NEW.id, CURRENT_TIMESTAMP(),2, NEW.interurbano)
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `registro_administrativo_delete` AFTER DELETE ON `registro_administrativo` FOR EACH ROW INSERT INTO registro_administrativo_log (
fecha_ingreso, hora_ingreso, interno, empresa_id, servicios_id,usuarios_id, plataformas_id, estado_id, fecha_salida, hora_salida, id_registro, updated_at, operacion_id, interurbano 
) VALUES (OLD.fecha_ingreso, OLD.hora_ingreso, OLD.interno, OLD.empresa_id, OLD.servicios_id, OLD.usuarios_id, 
OLD.plataformas_id, OLD.estado_id, OLD.fecha_salida, OLD.hora_salida, OLD.id, CURRENT_TIMESTAMP(),3,interurbano)
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro_administrativo_log`
--

CREATE TABLE `registro_administrativo_log` (
  `id` int(11) NOT NULL,
  `fecha_ingreso` date NOT NULL,
  `hora_ingreso` time NOT NULL,
  `interno` int(255) NOT NULL,
  `empresa_id` int(11) NOT NULL,
  `servicios_id` int(11) NOT NULL,
  `usuarios_id` int(11) NOT NULL,
  `plataformas_id` int(11) DEFAULT NULL,
  `estado_id` int(11) NOT NULL,
  `fecha_salida` date DEFAULT NULL,
  `hora_salida` time DEFAULT NULL,
  `destino` varchar(45) DEFAULT NULL,
  `updated_at` datetime NOT NULL,
  `operacion_id` int(11) NOT NULL,
  `id_registro` int(11) DEFAULT NULL,
  `interurbano` varchar(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `rol` varchar(45) NOT NULL,
  `borrado` tinyint(2) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `rol`, `borrado`) VALUES
(1, 'Administración', 0),
(2, 'Recursos Humanos', 0),
(3, 'Supervisor', 0),
(4, 'Operador de Seguridad', 0),
(5, 'Informes', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicios`
--

CREATE TABLE `servicios` (
  `id` int(11) NOT NULL,
  `siglas` varchar(45) NOT NULL,
  `tipo_servicio` varchar(45) NOT NULL,
  `borrado` tinyint(2) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `servicios`
--

INSERT INTO `servicios` (`id`, `siglas`, `tipo_servicio`, `borrado`) VALUES
(1, 'SMD', 'Servicio de media distancia', 0),
(2, 'SLD', 'Servicio de larga distancia', 0),
(3, 'SLC', 'Servicio de corta distancia', 0),
(4, 'SE', 'Servicio externo', 0),
(5, 'SA', 'Sin asignar', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_tv`
--

CREATE TABLE `tipo_tv` (
  `id` int(11) NOT NULL,
  `tipo` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tipo_tv`
--

INSERT INTO `tipo_tv` (`id`, `tipo`) VALUES
(1, 'Arribos'),
(2, 'Partidas'),
(3, 'Sin asignar');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `usuario` varchar(45) NOT NULL,
  `password` varchar(200) NOT NULL,
  `roles_id` int(11) NOT NULL,
  `estado_password` tinyint(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `usuario`, `password`, `roles_id`, `estado_password`) VALUES
(1, 'Clara', 'Dardanelli', 'cdardanelli', '$2a$10$masn/IRSjpofNznTU0cnU.11UATeHdVUCLCTdrE/MyJCbuLpIgO.u', 2, 1),
(2, 'Facundo ', 'Garcia', 'frgarcia', '$2a$10$8ivSHxnhJEZaRMph8Rp6P.9RddvtY554TQRGiCkjz1UeU/j6AIUrK', 4, 1),
(3, 'Ana ', 'Gaitan', 'agaitan', '$2a$10$izJxVa21OkaAJER0xbQUXuJ5vS5hrxipLesEzs48380RgVOTSb0Ey', 5, 1),
(4, 'Federico', 'Carcanga', 'fcarcanga', '$2a$10$i9QLcyTXnzemYf/4ujZ4w.6zlR3Aa5NZFdXmzndBzIjhsNGr1P0Oe', 2, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_log`
--

CREATE TABLE `usuarios_log` (
  `id` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `tipo_de_estado` varchar(45) DEFAULT NULL,
  `usuario_log` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_eliminado`
--

CREATE TABLE `usuario_eliminado` (
  `id` int(11) NOT NULL,
  `motivo` varchar(100) NOT NULL,
  `usuario_eliminado` varchar(100) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `empresa`
--
ALTER TABLE `empresa`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `estado`
--
ALTER TABLE `estado`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `operacion`
--
ALTER TABLE `operacion`
  ADD PRIMARY KEY (`id`,`tipo_operacion`);

--
-- Indices de la tabla `plataformas`
--
ALTER TABLE `plataformas`
  ADD PRIMARY KEY (`id`,`servicios_id`),
  ADD KEY `fk_plataformas_servicios1_idx` (`servicios_id`);

--
-- Indices de la tabla `prueba`
--
ALTER TABLE `prueba`
  ADD PRIMARY KEY (`idprueba`);

--
-- Indices de la tabla `registro_administrativo`
--
ALTER TABLE `registro_administrativo`
  ADD PRIMARY KEY (`id`,`empresa_id`,`servicios_id`,`usuarios_id`,`estado_id`),
  ADD KEY `fk_registro_administrativo_empresa1_idx` (`empresa_id`),
  ADD KEY `fk_registro_administrativo_servicios1_idx` (`servicios_id`),
  ADD KEY `fk_registro_administrativo_estado1_idx` (`estado_id`),
  ADD KEY `fk_registro_administrativo_tipo_tv1_idx` (`tipo_tv_id`);

--
-- Indices de la tabla `registro_administrativo_log`
--
ALTER TABLE `registro_administrativo_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_registro_administrativo_empresa1_idx` (`empresa_id`),
  ADD KEY `fk_registro_administrativo_estado1_idx` (`estado_id`),
  ADD KEY `fk_registro_administrativo_servicios1_idx` (`servicios_id`),
  ADD KEY `fk_registro_administrativo_plataformas1_idx` (`plataformas_id`),
  ADD KEY `fk_registro_administrativo_log_operacion1_idx` (`operacion_id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `servicios`
--
ALTER TABLE `servicios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipo_tv`
--
ALTER TABLE `tipo_tv`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`,`roles_id`);

--
-- Indices de la tabla `usuarios_log`
--
ALTER TABLE `usuarios_log`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario_eliminado`
--
ALTER TABLE `usuario_eliminado`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `empresa`
--
ALTER TABLE `empresa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT de la tabla `estado`
--
ALTER TABLE `estado`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `operacion`
--
ALTER TABLE `operacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `plataformas`
--
ALTER TABLE `plataformas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT de la tabla `registro_administrativo`
--
ALTER TABLE `registro_administrativo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `registro_administrativo_log`
--
ALTER TABLE `registro_administrativo_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `servicios`
--
ALTER TABLE `servicios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `tipo_tv`
--
ALTER TABLE `tipo_tv`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuarios_log`
--
ALTER TABLE `usuarios_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario_eliminado`
--
ALTER TABLE `usuario_eliminado`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `plataformas`
--
ALTER TABLE `plataformas`
  ADD CONSTRAINT `fk_plataformas_servicios1` FOREIGN KEY (`servicios_id`) REFERENCES `servicios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `registro_administrativo`
--
ALTER TABLE `registro_administrativo`
  ADD CONSTRAINT `fk_registro_administrativo_empresa1` FOREIGN KEY (`empresa_id`) REFERENCES `empresa` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_registro_administrativo_estado1` FOREIGN KEY (`estado_id`) REFERENCES `estado` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_registro_administrativo_servicios1` FOREIGN KEY (`servicios_id`) REFERENCES `servicios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_registro_administrativo_tipo_tv1` FOREIGN KEY (`tipo_tv_id`) REFERENCES `tipo_tv` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `registro_administrativo_log`
--
ALTER TABLE `registro_administrativo_log`
  ADD CONSTRAINT `fk_registro_administrativo_log_empresa1` FOREIGN KEY (`empresa_id`) REFERENCES `empresa` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_registro_administrativo_log_estado1` FOREIGN KEY (`estado_id`) REFERENCES `estado` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_registro_administrativo_log_operacion1` FOREIGN KEY (`operacion_id`) REFERENCES `operacion` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_registro_administrativo_log_plataformas1` FOREIGN KEY (`plataformas_id`) REFERENCES `plataformas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_registro_administrativo_log_servicios1` FOREIGN KEY (`servicios_id`) REFERENCES `servicios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
