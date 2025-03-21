# 🚀 Pokédex API

Bem-vindo à Pokédex API! Este é um serviço Node.js desenvolvido com Nest.js que consome a [PokéAPI](https://pokeapi.co/) para fornecer informações sobre Pokémon de forma simplificada.

---

## 📋 Requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (v18 ou superior)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/) (opcional)

---

## 🛠️ Como Executar o Projeto

### 1. Clone o Repositório

Se você ainda não clonou o repositório, execute o seguinte comando:

```bash
git clone https://github.com/seu-usuario/pokedex-api.git
cd pokedex-api
```

### 2. Instale as Dependências
Instale as dependências do projeto usando npm ou Yarn:

```bash
npm install
```

ou

```bash
yarn install
```

### 3. Configure as Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto e adicione a URL da PokéAPI:

```env
POKEAPI_URL=https://pokeapi.co/api/v2
```

### 4. Execute o Servidor
Inicie o servidor em modo de desenvolvimento:

```bash
npm run start:dev
```

ou

```bash
yarn start:dev
```

O servidor estará disponível em: http://localhost:3000.

---
## 📚 Documentação da API
### A API está documentada usando o Swagger. Após iniciar o servidor, acesse:

http://localhost:3000/api

Endpoints Disponíveis
GET /pokemon/:name

Retorna os dados de um Pokémon específico.

Exemplo: GET /pokemon/pikachu

---
# 📄 Licença
### Este projeto está licenciado sob a licença MIT. Veja o arquivo [MIT License](https://github.com/ArthurGDamasceno/pokedex-api-nestjs/tree/main?tab=MIT-1-ov-file) para mais detalhes.

Feito com esmero e dedicação por Arthur Damasceno
