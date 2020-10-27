CREATE DATABASE TECHCYCLE;

USE TECHCYCLE;

CREATE TABLE Usuario(
	idUsuario INT IDENTITY PRIMARY KEY NOT NULL,
	loginUsuario VARCHAR(100) NOT NULL,
	senha VARCHAR(100) NOT NULL,
	nome VARCHAR(100) NOT NULL,
	email VARCHAR (100) NOT NULL,
	foto VARCHAR(100),
	departamento VARCHAR(100),
	tipoUsuario VARCHAR(15)
);
-- 1
INSERT INTO Usuario(loginUsuario, senha, nome, email, foto, departamento, tipoUsuario) VALUES('Julius','1234', 'Julius', 'julius@gmail.com', 'julius.jpg', 'Tecnologia','Funcionário');
--2
INSERT INTO Usuario(loginUsuario, senha, nome, email, foto, departamento, tipoUsuario) VALUES('admin','admin', 'Administrador', 'admin@admin.com', 'testefoto.jpg', 'Tecnologia','Administrador');
--3
INSERT INTO Usuario(loginUsuario, senha, nome, email, foto, departamento, tipoUsuario) VALUES('kainan','1234', 'Kainan Barros', 'kainan@gmail.com', 'C://Desktop/fotos/usuarios/loginuserid', 'RH','Funcionário');

select * from usuario

CREATE TABLE Marca(
	idMarca INT IDENTITY PRIMARY KEY NOT NULL,
	nomeMarca VARCHAR(50)
);

INSERT INTO Marca(nomeMarca) VALUES('Apple');

INSERT INTO Marca(nomeMarca) VALUES('Dell');

CREATE TABLE Categoria(
	idCategoria INT IDENTITY PRIMARY KEY NOT NULL,
	nomeCategoria VARCHAR(20)
);

INSERT INTO Categoria(nomeCategoria) VALUES('Computador')
INSERT INTO Categoria(nomeCategoria) VALUES('Notebook')

CREATE TABLE Produto(
	idProduto INT IDENTITY PRIMARY KEY NOT NULL,
	nomeProduto VARCHAR(100),
	modelo VARCHAR(100),
	memoria int,
	processador varchar(20),
	descricao TEXT,
	codIdentificacao VARCHAR (100),
	dataLancamento DATE,
	idMarca INT FOREIGN KEY REFERENCES Marca(idMarca),
	idCategoria INT FOREIGN KEY REFERENCES Categoria(idCategoria)
);
--1
INSERT INTO Produto(nomeProduto, modelo, memoria, processador, descricao, codidentificacao,dataLancamento, idMarca, idCategoria) VALUES('Dell Aspiron 574', '009820', 4, 'Intel', 'Computador com poucos detalhes', 'A001', '2018-01-10', 2, 1);
--2
INSERT INTO Produto(nomeProduto, modelo,memoria, processador, descricao, codidentificacao,dataLancamento, idMarca, idCategoria) VALUES('Macbook Pro', '008790', 6, 'AMD', 'Notebook Novo', 'A002', '2019-01-10', 1, 2);
--3
INSERT INTO Produto(nomeProduto, modelo,memoria, processador, descricao, codidentificacao,dataLancamento, idMarca, idCategoria) VALUES('Macbook Dev Pro', '876435', 16, 'Intel', 'Notebook sem detalhes', 'A003', '2017-10-28', 1, 2);
--4
INSERT INTO Produto(nomeProduto, modelo, memoria, processador, descricao, codidentificacao,dataLancamento, idMarca, idCategoria) VALUES('Dell Pro Gamers', '807904', 8, 'AMD', 'Computador sem detalhes', 'A004', '2018-09-10', 2, 1);

SELECT * FROM Produto;

CREATE TABLE Avaliacao(
	idAvaliacao INT IDENTITY PRIMARY KEY NOT NULL,
	descricaoAvaliacao TEXT,
	tipoAvaliacao VARCHAR(15)
);

--1 
INSERT INTO Avaliacao(descricaoAvaliacao, tipoAvaliacao) VALUES('Aparelho com poucos sinais de uso, como pequenos arranhões.', 'Excelente');
--2
INSERT INTO Avaliacao(descricaoAvaliacao, tipoAvaliacao) VALUES('Aparelho com alguns sinais de uso, porém mais leves. Podem ser arranhões, riscos e/ou amassados.', 'Muito Bom');
--3
INSERT INTO Avaliacao(descricaoAvaliacao, tipoAvaliacao) VALUES('Aparelho com diversos sinais de uso mais nítidos, como arranhões, riscos e amassados.', 'Bom');

SELECT * FROM Comentario;

CREATE TABLE Anuncio(
	idAnuncio INT IDENTITY PRIMARY KEY NOT NULL,
	foto VARCHAR(100),
	preco DECIMAL(5,2),
	dataExpiracao DATE,
	idAvaliacao INT FOREIGN KEY REFERENCES Avaliacao(idAvaliacao),
	idProduto INT FOREIGN KEY REFERENCES Produto(idProduto)
);

--1
INSERT INTO Anuncio(Foto, Preco, dataExpiracao, idAvaliacao, idProduto) VALUES('C://Desktop/FotosMaquinas/fotoidproduto01', 100.00, '2019-12-20', 1, 1);
--2
INSERT INTO Anuncio(Foto, Preco, dataExpiracao, idAvaliacao, idProduto) VALUES('C://Desktop/FotosMaquinas/fotoidproduto02', 50.00, '2019-12-20', 2, 2);
--3
INSERT INTO Anuncio(Foto, Preco, dataExpiracao, idAvaliacao, idProduto) VALUES('C://Desktop/FotosMaquinas/fotoidproduto03', 120.00, '2019-12-20', 1, 3);
--4
INSERT INTO Anuncio(Foto, Preco, dataExpiracao, idAvaliacao, idProduto) VALUES('C://Desktop/FotosMaquinas/fotoidproduto04', 99.90, '2019-12-20', 3, 4);


CREATE TABLE Comentario(
	idComentario INT IDENTITY PRIMARY KEY NOT NULL,
	comentario TEXT,
	idAnuncio INT FOREIGN KEY REFERENCES Anuncio(idAnuncio),
	idUsuario INT FOREIGN KEY REFERENCES Usuario(idUsuario)
);


CREATE TABLE Interesse(
	idInteresse INT IDENTITY PRIMARY KEY NOT NULL,
	idUsuario INT FOREIGN KEY REFERENCES Usuario(idUsuario),
	idAnuncio INT FOREIGN KEY REFERENCES Anuncio(idAnuncio),
	aprovado VARCHAR(5)
);
--1
INSERT INTO Interesse(idUsuario, idAnuncio, aprovado) VALUES(1, 1, 'Não');
--2
INSERT INTO Interesse(idUsuario, idAnuncio, aprovado) VALUES(3, 2, 'Sim');
--3
INSERT INTO Interesse(idUsuario, idAnuncio, aprovado) VALUES(2, 3, 'Não');
--4
INSERT INTO Interesse(idUsuario, idAnuncio, aprovado) VALUES(1, 4, 'Sim');


select * from Usuario