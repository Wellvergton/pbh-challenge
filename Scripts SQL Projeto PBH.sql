create table estabelecimento (
	estabelecimento_id bigint primary key generated always as identity,
	nome varchar(200) not null,
	endereco varchar(150) not null,
	telefone varchar(11)
);

create table profissional (
	profissional_id bigint primary key generated always as identity,
	nome varchar(100) not null,
	endereco varchar(150) not null,
	tel_celular varchar(11),
	tel_residencial varchar(10),
	funcao varchar(50) not null,
	estabelecimento_id bigint references estabelecimento(estabelecimento_id)
);
