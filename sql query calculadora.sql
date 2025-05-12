CREATE DATABASE calculadoraMatrices

create table operaciones (
idOp int PRIMARY KEY IDENTITY(1,1),
fechaOp datetime2 default getdate(),
tipoOp nvarchar(30) NOT NULL,
matrizA nvarchar(max) NOT NULL,
matrizB nvarchar(max) NOT NULL,
resultado nvarchar(max) NOT NULL
)