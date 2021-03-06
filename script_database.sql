Create Database Gestion_Demanda
USE [Gestion_Demanda]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 10/23/2021 2:50:53 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CandidatosEvaluados]    Script Date: 10/23/2021 2:50:53 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CandidatosEvaluados](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Cedula] [nvarchar](max) NOT NULL,
	[Nombre] [nvarchar](max) NOT NULL,
	[FechaNacimiento] [datetime2](7) NOT NULL,
	[TrabajoActual] [nvarchar](max) NULL,
	[ExpectativaSalarial] [float] NOT NULL,
	[Observaciones] [nvarchar](max) NULL,
	[Apellido] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_CandidatosEvaluados] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[CandidatosEvaluados] ADD  DEFAULT (N'') FOR [Apellido]
GO
