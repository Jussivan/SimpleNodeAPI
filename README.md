# SimpleNodeAPI

Plataforma para facilitar a organização e o gerenciamento de podcasts, desenvolvida com Node.js e TypeScript utilizando apenas módulos nativos do Node.js.

## Funcionalidades

- Upload, catalogação e distribuição de episódios de podcasts
- Criação de feeds
- Gestão de subscrições
- Análise de audiência
- API HTTP simples e extensível

## Instalação

```bash
git clone https://github.com/Jussivan/SimpleNodeAPI.git
cd SimpleNodeAPI
npm install
```

## Uso

### Desenvolvimento

```bash
npm run dev
```

### Produção

```bash
npm run build
npm start
```

O servidor será iniciado na porta 3000 por padrão.

## Estrutura de Pastas

```
src/
  index.ts                # Servidor principal
  routes/                 # Rotas HTTP (podcasts, feeds, subscrições, analytics)
  services/               # Lógica de negócio para cada módulo
```

## Exemplos de Endpoints

- `GET /podcasts` — Lista todos os podcasts
- `POST /podcasts` — Cria um novo podcast
- `GET /feeds` — Lista feeds de podcasts
- `POST /subscriptions` — Realiza subscrição em um podcast
- `GET /analytics` — Estatísticas de audiência

## Requisitos

- Node.js >= 18
- npm

## Licença

ISC