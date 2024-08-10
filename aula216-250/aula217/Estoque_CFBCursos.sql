CREATE TABLE `usuario` (
  `n_usuario_usuario` int PRIMARY KEY AUTO_INCREMENT,
  `s_nome_usuario` varchar(255),
  `n_tipousuario_tipousuario` int,
  `n_fornecedor_fornecedor` int,
  `s_foto_usuario` text,
  `s_status_usuario` char
);

CREATE TABLE `telefone` (
  `n_telefone_telefone` int PRIMARY KEY AUTO_INCREMENT,
  `n_usuario_usuario` int,
  `s_numero_telefone` varchar(255)
);

CREATE TABLE `tipousuario` (
  `n_tipousuario_tipousuario` int PRIMARY KEY AUTO_INCREMENT,
  `s_desc_tipousario` varchar(255),
  `n_nivel_tipousuario` int
);

CREATE TABLE `fornecedor` (
  `n_fornecedor_fornecedor` int PRIMARY KEY AUTO_INCREMENT,
  `s_desc_fornecedor` varchar(255),
  `c_status_fornecedor` char
);

ALTER TABLE `usuario` ADD FOREIGN KEY (`n_tipousuario_tipousuario`) REFERENCES `tipousuario` (`n_tipousuario_tipousuario`);

ALTER TABLE `usuario` ADD FOREIGN KEY (`n_fornecedor_fornecedor`) REFERENCES `fornecedor` (`n_fornecedor_fornecedor`);

ALTER TABLE `telefone` ADD FOREIGN KEY (`n_usuario_usuario`) REFERENCES `usuario` (`n_usuario_usuario`);
