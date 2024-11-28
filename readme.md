<p align="center">
    <img src="https://prefeituramoderna.com.br/assets/images/logo-icon-dark.png" align="center" width="10%">
</p>
<p align="center"><h1 align="center">NFSe Itapema </h1></p>
<p align="center">
	<em><code>❯ Provedor: (Prefeitura Moderna)</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/languages/top/lucasdias1707/nfse-itapema-prefeituramoderna?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/lucasdias1707/nfse-itapema-prefeituramoderna?style=flat&color=0080ff" alt="repo-language-count">
</p>
<p align="center">Built with the tools and technologies:</p>
<p align="center">
	<img src="https://img.shields.io/badge/Fastify-000000.svg?style=flat&logo=Fastify&logoColor=white" alt="Fastify">
	<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" alt="npm">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/Zod-3E67B1.svg?style=flat&logo=Zod&logoColor=white" alt="Zod">
	<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">
	<img src="https://img.shields.io/badge/-Swagger-%23Clojure?style=flat&logo=swagger&logoColor=black" alt="Swagger">
</p>
<br>

## Overview

This project is an API that manages the issuance of NFSe for the Prefeitura Moderna provider in the city of Itapema. Currently, the API only supports the issuance of NFSe, but the cancellation and consultation features will be implemented soon.

---

## Project Structure

```sh
src/
├── routes/
│   └── nfse.route.ts   # Define the API routes
├── services/
│   └── nfse.service.ts # Request logic for issuing NFS-e
├── schemas/
│   └── nfse.schema.ts  # Define the Zod schema for validation
├── server.ts           # Main Fastify configuration
tsconfig.json           # TypeScript settings
package.json            # Project information and dependencies
```

### Project Index

<details open>
	<summary>
    <b>NFSE-ITAPEMA-PREFEITURAMODERNA/src/ </b>
    </summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/lucasdias1707/nfse-itapema-prefeituramoderna/blob/master/src/server.ts'>server.ts</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lucasdias1707/nfse-itapema-prefeituramoderna/blob/master/src/swagger.json'>swagger.json</a></b></td>
			</tr>
			</table>
			<details>
				<summary><b>schemas</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/lucasdias1707/nfse-itapema-prefeituramoderna/blob/master/src/schemas/nfse.schema.ts'>nfse.schema.ts</a></b></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>routes</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/lucasdias1707/nfse-itapema-prefeituramoderna/blob/master/src/routes/nfse.route.ts'>nfse.route.ts</a></b></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>services</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/lucasdias1707/nfse-itapema-prefeituramoderna/blob/master/src/services/nfse.service.ts'>nfse.service.ts</a></b></td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
</details>

---

## Getting Started

### Prerequisites for Running the Project

Follow these steps to set up and run the project:

#### Install Node.js (version 16.x or later)

- The project requires **Node.js** as the runtime environment.
- Download it from the [official Node.js website](https://nodejs.org/).
- To check if Node.js is installed, run:
  ```bash
  node -v
  ```

### Initilization

Install nfse-itapema-prefeituramoderna using one of the following methods:

**Build from source:**

1. Clone the nfse-itapema-prefeituramoderna repository:

```sh
git clone https://github.com/lucasdias1707/nfse-itapema-prefeituramoderna
```

2. Navigate to the project directory:

```sh
cd nfse-itapema-prefeituramoderna
```

3. Install the project dependencies:

**Using `npm`**

```ts
npm install
```

### Run the Project

To start the development server, run:

```javascript
npm run dev
```

Access the URL below to check the documentation in Swagger.

```
localhost:3000/docs
```

To build, run:

```typescript
npm run build
```

---

## Project Roadmap

- [x] **`Task 1: NFSe Issuance`**: Implemented the NFSe issuance functionality, enabling the creation and submission of electronic service invoices for the Prefeitura Moderna system.
- [ ] **`Task 2: NFSe Cancellation`**: Develop the functionality for canceling issued NFSe, allowing users to void invoices when necessary.
- [ ] **`Task 3: NFSe Fetch`**: Implement the ability to fetch NFSe data, enabling users to retrieve and view details of previously issued invoices.

<details>
    <summary>Json Example Issuance (Task 1)</summary>
    
  ```json
  {
    "ambiente": "homologacao",
    "securityKey": "{TOKEN}",
    "dadosNfse": {
      "DadosNota": {
        "MunicipioPrestacao": "4210803",
        "NaturezaOperacao": 2,
        "IssRetido": "N",
        "Observacoes": "Serviço prestado conforme contrato.",
        "Atividade": {
          "Codigo": 100585,
          "CodigoCnae": "3821100",
          "CodigoLc116": "0709"
        },
        "Prestador": {
          "InscricaoMunicipal": "670"
        },
        "Tomador": {
          "TipoPessoa": "F",
          "NrDocumento": "85755442096",
          "RazaoSocial": "Cliente teste",
          "Endereco": {
            "Logradouro": "rua 123",
            "Numero": "123",
            "Bairro": "meia praia",
            "Municipio": "6102000",
            "Cep": "88220000"
          }
        },
        "Rps": {
          "Numero": "5584",
          "Serie": "1",
          "Tipo": 1,
          "DataEmissao": "2024-11-27"
        },
        "Servicos": [
          {
            "Unidade": "un",
            "Quantidade": 1.0,
            "Descricao": "diaria",
            "ValorUnitario": 10.00
          }
        ],
        "Valores": {
          "ValorServicos": 10.00,
          "ValorDeducoes": 0.00,
          "ValorOutrasDeducoes": 0.00,
          "ValorPis": 0.00,
          "ValorCofins": 0.00,
          "ValorInss": 0.00,
          "ValorIr": 0.00,
          "ValorCsll": 0.00,
          "OutrasRetencoes": 0.00,
          "DescontoIncondicionado": 0.00,
          "DescontoCondicionado": 0.00,
          "BaseCalculo": 10.00,
          "Aliquota": 3.0000,
          "ValorIss": 0.30
        }
      }
    }
  }
  ```

</details>
