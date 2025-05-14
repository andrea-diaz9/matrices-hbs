CREATE DATABASE calculadoraMatrices

create table operaciones (
idOp int PRIMARY KEY IDENTITY(1,1),
ordenA nvarchar(max) NOT NULL,
matrizA nvarchar(max) NOT NULL,
ordenB nvarchar(max) NOT NULL,
matrizB nvarchar(max) NOT NULL,
tipoOp nvarchar(30) NOT NULL,
ordenR nvarchar(max) NOT NULL,
resultado nvarchar(max) NOT NULL,
fechaOp datetime default getdate() NOT NULL,
)

select * from operaciones