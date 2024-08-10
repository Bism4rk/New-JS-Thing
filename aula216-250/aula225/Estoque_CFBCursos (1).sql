CREATE TABLE `pessoa` (
  `n_pessoa_pessoa` int PRIMARY KEY AUTO_INCREMENT,
  `s_nome_pessoa` varchar(255),
  `n_tipopessoa_tipopessoa` int,
  `n_fornecedor_fornecedor` int,
  `s_foto_pessoa` text,
  `s_status_pessoa` char
);

CREATE TABLE `telefone` (
  `n_telefone_telefone` int PRIMARY KEY AUTO_INCREMENT,
  `n_pessoa_pessoa` int,
  `s_numero_telefone` varchar(255)
);

CREATE TABLE `tipopessoa` (
  `n_tipopessoa_tipopessoa` int PRIMARY KEY AUTO_INCREMENT,
  `s_desc_tipousario` varchar(255),
  `n_nivel_tipopessoa` int
);

CREATE TABLE `fornecedor` (
  `n_fornecedor_fornecedor` int PRIMARY KEY AUTO_INCREMENT,
  `s_desc_fornecedor` varchar(255),
  `c_status_fornecedor` char
);

ALTER TABLE `pessoa` ADD FOREIGN KEY (`n_tipopessoa_tipopessoa`) REFERENCES `tipopessoa` (`n_tipopessoa_tipopessoa`);

ALTER TABLE `pessoa` ADD FOREIGN KEY (`n_fornecedor_fornecedor`) REFERENCES `fornecedor` (`n_fornecedor_fornecedor`);

ALTER TABLE `telefone` ADD FOREIGN KEY (`n_pessoa_pessoa`) REFERENCES `pessoa` (`n_pessoa_pessoa`);
