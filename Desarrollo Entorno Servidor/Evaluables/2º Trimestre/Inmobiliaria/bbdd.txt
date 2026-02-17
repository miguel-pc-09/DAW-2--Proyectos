-- Base de datos de la práctica
CREATE DATABASE IF NOT EXISTS inmobiliaria;
USE inmobiliaria;

-- Tabla usuarios
CREATE TABLE IF NOT EXISTS usuario (
  usuario_id INT(5) NOT NULL AUTO_INCREMENT,
  nombres VARCHAR(35) NOT NULL,
  correo VARCHAR(100) NOT NULL,
  clave VARCHAR(80) NOT NULL,
  tipo_usuario VARCHAR(20) NOT NULL,
  PRIMARY KEY (usuario_id)
);

-- Tabla pisos
CREATE TABLE IF NOT EXISTS pisos (
  Codigo_piso INT NOT NULL,
  calle VARCHAR(40) NOT NULL,
  numero INT NOT NULL,
  piso INT NOT NULL,
  puerta VARCHAR(5) NOT NULL,
  cp INT NOT NULL,
  metros INT NOT NULL,
  zona VARCHAR(15),
  precio FLOAT NOT NULL,
  imagen VARCHAR(100) NOT NULL,
  usuario_id INT(5),
  PRIMARY KEY (Codigo_piso),
  FOREIGN KEY (usuario_id) REFERENCES usuario(usuario_id)
);

-- Tabla comprados (mínimo)
CREATE TABLE IF NOT EXISTS comprados (
  usuario_comprador INT(5),
  Codigo_piso INT,
  Precio_final FLOAT NOT NULL,
  FOREIGN KEY (usuario_comprador) REFERENCES usuario(usuario_id),
  FOREIGN KEY (Codigo_piso) REFERENCES pisos(Codigo_piso)
);
