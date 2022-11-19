-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 19-11-2022 a las 16:31:15
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
  `cuit` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `empresa`
--

INSERT INTO `empresa` (`id`, `empresa`, `siglas`, `img`, `cuit`) VALUES
(1, 'Andesmar', 'AND', 'andesmar.png', '1544-45555-47'),
(2, 'Iselin', 'ISL', 'iselin.png', '20-4457-88'),
(3, 'Autotransportes San Juan', 'SJV', 'autsanjuan.png', '20-379955-74');

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
  `servicios_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `plataformas`
--

INSERT INTO `plataformas` (`id`, `plataforma`, `servicios_id`) VALUES
(1, 'Sin Plataforma', 4),
(2, '1', 1),
(3, '2', 2),
(4, '3', 3);

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
  `plataformas_id` int(11) DEFAULT NULL,
  `estado_id` int(11) NOT NULL,
  `fecha_salida` date DEFAULT NULL,
  `hora_salida` time DEFAULT NULL,
  `destino` varchar(45) DEFAULT NULL,
  `tipo_tv_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `registro_administrativo`
--

INSERT INTO `registro_administrativo` (`id`, `fecha_ingreso`, `hora_ingreso`, `interno`, `empresa_id`, `servicios_id`, `usuarios_id`, `plataformas_id`, `estado_id`, `fecha_salida`, `hora_salida`, `destino`, `tipo_tv_id`) VALUES
(1, '2022-11-19', '08:00:00', 12, 1, 1, 2, 1, 1, '2022-11-19', '08:00:00', 'Bolivia', 1),
(2, '2022-11-19', '09:00:00', 15, 2, 1, 2, 1, 1, '2022-11-19', '09:00:00', 'San Luis', 2);

--
-- Disparadores `registro_administrativo`
--
DELIMITER $$
CREATE TRIGGER `registro_administrativo_INSERT` AFTER INSERT ON `registro_administrativo` FOR EACH ROW INSERT INTO registro_administrativo_log (
fecha_ingreso, hora_ingreso, interno, empresa_id, servicios_id,usuarios_id, plataformas_id, estado_id, fecha_salida, hora_salida, id_registro, updated_at, operacion_id 
) VALUES (NEW.fecha_ingreso, NEW.hora_ingreso, NEW.interno, NEW.empresa_id, NEW.servicios_id, NEW.usuarios_id, 
NEW.plataformas_id, NEW.estado_id, NEW.fecha_salida, NEW.hora_salida, NEW.id, CURRENT_TIMESTAMP(),1)
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `registro_administrativo_UPDATE` AFTER UPDATE ON `registro_administrativo` FOR EACH ROW INSERT INTO registro_administrativo_log (
fecha_ingreso, hora_ingreso, interno, empresa_id, servicios_id,usuarios_id, plataformas_id, estado_id, fecha_salida, hora_salida, id_registro, updated_at, operacion_id 
) VALUES (NEW.fecha_ingreso, NEW.hora_ingreso, NEW.interno, NEW.empresa_id, NEW.servicios_id, NEW.usuarios_id, 
NEW.plataformas_id, NEW.estado_id, NEW.fecha_salida, NEW.hora_salida, NEW.id, CURRENT_TIMESTAMP(),2)
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `registro_administrativo_delete` AFTER DELETE ON `registro_administrativo` FOR EACH ROW INSERT INTO registro_administrativo_log (
fecha_ingreso, hora_ingreso, interno, empresa_id, servicios_id,usuarios_id, plataformas_id, estado_id, fecha_salida, hora_salida, id_registro, updated_at, operacion_id 
) VALUES (OLD.fecha_ingreso, OLD.hora_ingreso, OLD.interno, OLD.empresa_id, OLD.servicios_id, OLD.usuarios_id, 
OLD.plataformas_id, OLD.estado_id, OLD.fecha_salida, OLD.hora_salida, OLD.id, CURRENT_TIMESTAMP(),3)
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
  `id_registro` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
(2, 'Partidas');

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
(2, 'Facundo Roberto', 'Garcia', 'frgarcia', '$2a$10$8ivSHxnhJEZaRMph8Rp6P.9RddvtY554TQRGiCkjz1UeU/j6AIUrK', 4, 1),
(3, 'Ana ', 'Gaitan', 'agaitan', '$2a$10$izJxVa21OkaAJER0xbQUXuJ5vS5hrxipLesEzs48380RgVOTSb0Ey', 5, 1);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `registro_administrativo`
--
ALTER TABLE `registro_administrativo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tipo_tv`
--
ALTER TABLE `tipo_tv`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
