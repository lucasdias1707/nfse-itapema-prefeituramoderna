import { fastifyCors } from "@fastify/cors";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import { nfseRoutes } from "./routes/nfse.route";
import { resolve } from "path";
import { writeFile } from "node:fs/promises";
import { ZodTypeProvider } from "fastify-type-provider-zod"; // Corrigido para importar ZodTypeProvider
import Fastify from "fastify";

const server = Fastify().withTypeProvider<ZodTypeProvider>(); // Configura o provedor Zod

async function main(): Promise<void> {
  await server.register(fastifyCors);
  await server.register(fastifySwagger, {
    openapi: {
      info: {
        title: "API de Emissão de NFS-e",
        version: "1.0.0",
      },
    },
  });
  await server.register(fastifySwaggerUi, { routePrefix: "/docs" });

  await server.register(nfseRoutes);

  try {
    server.listen({ port: 3000 });
    console.log("HTTP server running!");
  } catch (err) {
    console.error("Erro ao iniciar o servidor:", err);
    process.exit(1);
  }
}

server.ready().then(() => {
  const spec = server.swagger();

  writeFile(
    resolve(__dirname, "swagger.json"),
    JSON.stringify(spec, null, 2),
    "utf8"
  );
});

main();
