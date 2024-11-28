import { z } from "zod";

export const NFSeSchema = z.object({
  DadosNota: z.object({
    MunicipioPrestacao: z.number(),
    NaturezaOperacao: z.number(),
    IssRetido: z.enum(["S", "N"]),
    Observacoes: z.string().optional(),
    Atividade: z.object({
      Codigo: z.number(),
      CodigoCnae: z.string(),
      CodigoLc116: z.number().optional(),
    }),
    Prestador: z.object({
      InscricaoMunicipal: z.string(),
    }),
    Tomador: z.object({
      TipoPessoa: z.enum(["F", "J", "E"]),
      NrDocumento: z.string(),
      RazaoSocial: z.string(),
      Endereco: z.object({
        Logradouro: z.string(),
        Numero: z.string().optional(),
        Complemento: z.string().optional(),
        Bairro: z.string().optional(),
        Municipio: z.number(),
        Cep: z.string().optional(),
      }),
      Contato: z
        .object({
          Telefone: z.string().optional(),
          Email: z.string().optional(),
        })
        .optional(),
      InscricaoEstadual: z.string().optional(),
      InscricaoMunicipal: z.string().optional(),
    }),
    Rps: z.object({
      Numero: z.number(),
      Serie: z.string(),
      Tipo: z.number(),
      DataEmissao: z.string(), // YYYY-MM-DD
    }),
    Servicos: z.array(
      z.object({
        Unidade: z.string(),
        Quantidade: z.number(),
        Descricao: z.string(),
        ValorUnitario: z.number(),
      })
    ),
    Valores: z.object({
      ValorServicos: z.number(),
      ValorDeducoes: z.number().optional(),
      ValorOutrasDeducoes: z.number().optional(),
      ValorPis: z.number().optional(),
      ValorCofins: z.number().optional(),
      ValorInss: z.number().optional(),
      ValorIr: z.number().optional(),
      ValorCsll: z.number().optional(),
      OutrasRetencoes: z.number().optional(),
      DescontoIncondicionado: z.number().optional(),
      DescontoCondicionado: z.number().optional(),
      BaseCalculo: z.number(),
      Aliquota: z.number(),
      ValorIss: z.number(),
      ValorCredito: z.number().optional(),
    }),
  }),
});

export type NFSe = z.infer<typeof NFSeSchema>;
