CREATE TABLE `selecoesback`.`tbl_selecao` ( `id` INT(11) NOT NULL , `nomeSelecao` VARCHAR(50) NOT NULL , `qtdTitulos` INT(10) NOT NULL , `informacoes` VARCHAR(200) NOT NULL )
SELECT * FROM `tbl_selecao`
INSERT INTO `tbl_selecao` (`id`, `nomeSelecao`, `qtdTitulos`, `informacoes`) VALUES ('1', 'Brasil', '5 Títulos Mundiais', 'Única Seleção Penta Campeã');
INSERT INTO `tbl_selecao` (`id`, `nomeSelecao`, `qtdTitulos`, `informacoes`) VALUES ('2', 'Alemanha', '4 Títulos Mundiais', 'Seleção Tetra-Campeã');
INSERT INTO `tbl_selecao` (`id`, `nomeSelecao`, `qtdTitulos`, `informacoes`) VALUES ('3', 'Itália', '4 Títulos Mundiais', 'Seleção Tetra-Campeã');
SELECT * FROM `tbl_selecao`