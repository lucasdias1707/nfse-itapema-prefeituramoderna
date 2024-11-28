import { FastifyInstance } from "fastify";
import { z } from "zod";
import { NFSeSchema, NFSe } from "../schemas/nfse.schema"; 
import { zodToJsonSchema } from "zod-to-json-schema"; 
import { emitirNFSe, Ambiente } from "../services/nfse.service";

// Esquema para o corpo da requisição
const RequestBodySchema = z.object({
  ambiente: z.enum(["homologacao", "producao"]),
  securityKey: z.string(),
  dadosNfse: NFSeSchema, 
});

type RequestBody = z.infer<typeof RequestBodySchema>;

export async function nfseRoutes(fastify: FastifyInstance) {
  fastify.post(
    "/emitir-nfse",
    {
      schema: {
        body: zodToJsonSchema(RequestBodySchema),
        response: {
          200: { type: "object", properties: { success: { type: "boolean" }, data: { type: "object" } } },
          500: { type: "object", properties: { success: { type: "boolean" }, message: { type: "string" } } },
        },
      },
    },
    async (request, reply) => {
      const { ambiente, securityKey, dadosNfse } = request.body as RequestBody;

      const env = ambiente === "homologacao" ? Ambiente.Homologacao : Ambiente.Producao;

      try {
        const data = await emitirNFSe(env, securityKey, dadosNfse); 
        reply.send({ success: true, data });
      } catch (error) {
        // Adiciona um log completo para diagnosticar o erro
        console.error("Erro completo:", error); // Log completo do erro

        // Verifica se o erro contém uma resposta da API externa
        if (error.response) {
          // Erro proveniente da API do provedor
          console.error("Detalhes do erro da API do provedor:", error.response.data); 
          reply.code(error.response.status).send({
            success: false,
            message: `Erro da API do provedor: ${error.response.data.message || "Erro desconhecido"}`,
            details: error.response.data,
          });
        } else if (error instanceof z.ZodError) {
          // Erro de validação de dados (do lado do cliente)
          console.error("Erro de validação no cliente:", error.errors);
          reply.code(400).send({
            success: false,
            message: "Erro de validação de dados",
            details: error.errors,
          });
        } else {
          // Outros erros genéricos
          console.error("Erro desconhecido:", error);
          reply.code(500).send({
            success: false,
            message: "Erro desconhecido",
            details: error.message || "Erro inesperado",
          });
        }
      }
    }
  );
}
