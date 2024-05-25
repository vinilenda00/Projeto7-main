create database fecapbd;
use fecapbd;

CREATE TABLE usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    email VARCHAR(255),
    senha VARCHAR(255),
    cpf VARCHAR(11),
    endereco VARCHAR(255),
    telefone VARCHAR(15),
    data_nascimento DATE,
    curso VARCHAR(255),
    materia VARCHAR(255),
    professor BOOLEAN
);

CREATE TABLE eventos (
    id_evento INT AUTO_INCREMENT PRIMARY KEY,
    data DATE,
    local VARCHAR(255),
    horario TIME,
    nome VARCHAR(255),
    descricao TEXT,
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

CREATE TABLE convites (
    id_convites INT AUTO_INCREMENT PRIMARY KEY,
    statusCheckin VARCHAR(50),
    statusChekout VARCHAR(50),
    local VARCHAR(255),
    data DATE,
    formato VARCHAR(50),
    qrcode VARCHAR(255),
    tema VARCHAR(255),
    id_usuario INT,
    id_evento INT,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
    FOREIGN KEY (id_evento) REFERENCES eventos(id_evento)
);