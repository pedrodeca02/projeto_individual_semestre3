CREATE TABLE IF NOT EXISTS pet (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    especie VARCHAR(50),
    raca VARCHAR(50),
    sexo VARCHAR(20),
    idade INT,
    peso DECIMAL(5,2),
    nome_tutor VARCHAR(100)
);