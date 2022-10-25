-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 25-10-2022 a las 22:54:08
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
  `cuilt` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `empresa`
--

INSERT INTO `empresa` (`id`, `empresa`, `siglas`, `img`, `cuilt`) VALUES
(1, 'Andesmar', 'AND', NULL, '1544-45555-47'),
(2, 'Iselin', 'ISL', NULL, '20-4457-88'),
(3, 'San juan viajes', 'SJV', NULL, '20-379955-74');

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
(2, 'Fuera de plataforma'),
(3, 'Servicio sin plataforma');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plataformas`
--

CREATE TABLE `plataformas` (
  `id` int(11) NOT NULL,
  `plataforma` varchar(45) DEFAULT NULL,
  `servicios_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `plataformas`
--

INSERT INTO `plataformas` (`id`, `plataforma`, `servicios_id`) VALUES
(1, '0', 4),
(2, '1', 1),
(3, '2', 2),
(4, '3', 3);

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
  `plataformas_id` int(11) NOT NULL,
  `estado_id` int(11) NOT NULL,
  `fecha_salida` date DEFAULT NULL,
  `hora_salida` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `registro_administrativo`
--

INSERT INTO `registro_administrativo` (`id`, `fecha_ingreso`, `hora_ingreso`, `interno`, `empresa_id`, `servicios_id`, `usuarios_id`, `plataformas_id`, `estado_id`, `fecha_salida`, `hora_salida`) VALUES
(1, '2022-10-25', '19:45:00', 120, 1, 1, 2, 2, 1, NULL, NULL),
(2, '2022-10-25', '19:50:00', 0, 3, 4, 2, 1, 3, NULL, NULL),
(3, '0022-10-25', '19:49:00', 1522, 3, 2, 2, 3, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `rol` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `rol`) VALUES
(1, 'Administración'),
(2, 'Recursos Humanos'),
(3, 'Contabilidad'),
(4, 'Operador de Seguridad'),
(5, 'Informes');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicios`
--

CREATE TABLE `servicios` (
  `id` int(11) NOT NULL,
  `siglas` varchar(45) NOT NULL,
  `tipo_servicio` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `servicios`
--

INSERT INTO `servicios` (`id`, `siglas`, `tipo_servicio`) VALUES
(1, 'SMD', 'Servicio de media distancia'),
(2, 'SLD', 'Servicio de larga distancia'),
(3, 'SLC', 'Servicio de corta distancia'),
(4, 'SE', 'Servicio externo');

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
(2, 'Franco Gaston ', 'Garcia', 'fggarcia', '$2a$10$TE85n3qBtmUh4rx8K8oV.eeYM6jy3cXp2tMJ.Pz2f0OMQ0jU.PuRu', 4, 1);

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
-- Indices de la tabla `plataformas`
--
ALTER TABLE `plataformas`
  ADD PRIMARY KEY (`id`,`servicios_id`),
  ADD KEY `fk_plataformas_servicios1_idx` (`servicios_id`);

--
-- Indices de la tabla `registro_administrativo`
--
ALTER TABLE `registro_administrativo`
  ADD PRIMARY KEY (`id`,`empresa_id`,`servicios_id`,`usuarios_id`,`plataformas_id`,`estado_id`),
  ADD KEY `fk_registro_administrativo_empresa1_idx` (`empresa_id`),
  ADD KEY `fk_registro_administrativo_servicios1_idx` (`servicios_id`),
  ADD KEY `fk_registro_administrativo_usuarios1_idx` (`usuarios_id`),
  ADD KEY `fk_registro_administrativo_plataformas1_idx` (`plataformas_id`),
  ADD KEY `fk_registro_administrativo_estado1_idx` (`estado_id`);

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
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`,`roles_id`),
  ADD KEY `fk_usuarios_roles_idx` (`roles_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `empresa`
--
ALTER TABLE `empresa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `estado`
--
ALTER TABLE `estado`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `plataformas`
--
ALTER TABLE `plataformas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `registro_administrativo`
--
ALTER TABLE `registro_administrativo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `servicios`
--
ALTER TABLE `servicios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
  ADD CONSTRAINT `fk_registro_administrativo_plataformas1` FOREIGN KEY (`plataformas_id`) REFERENCES `plataformas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_registro_administrativo_servicios1` FOREIGN KEY (`servicios_id`) REFERENCES `servicios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_registro_administrativo_usuarios1` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `fk_usuarios_roles` FOREIGN KEY (`roles_id`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
