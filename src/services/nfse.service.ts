import axios from "axios";
import { NFSe } from "../schemas/nfse.schema";

export enum Ambiente {
  Homologacao = "https://api-nfse-homologacao.prefeituramoderna.com.br/ws/services",
  Producao = "https://api-nfse-nomedomunicipio-uf.prefeituramoderna.com.br/ws/services",
}

export async function emitirNFSe(ambiente: Ambiente, securityKey: string, dadosNfse: NFSe) {
  const url = `${ambiente}/gerar`;

  try {
    // Fazendo a requisição para emitir a NFS-e
    const response = await axios.post(url, dadosNfse, {
      headers: {
        Authorization: securityKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    return response.data;
  } catch (error: any) {
    // Logando a resposta completa para entender o erro
    if (error.response) {
      console.error("Erro da API do Provedor:", error.response.data);
      console.error("Status da resposta:", error.response.status);
      console.error("Headers da resposta:", error.response.headers);

      // Retorna detalhes completos sobre o erro da API
      throw new Error(
        `Erro ao emitir NFS-e. Código: ${error.response.status}, Mensagem: ${
          error.response.data?.message || "Erro desconhecido"
        }`
      );
    } else {
      // Caso não seja uma resposta da API (erro de rede ou timeout)
      console.error("Erro de rede ou de comunicação com a API:", error.message);
      throw new Error("Erro de comunicação com a API do provedor.");
    }
  }
}
