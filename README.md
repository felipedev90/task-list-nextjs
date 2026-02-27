# NextTasks - Lista de Tarefas com Next.js 15

Aplicação de listagem e adição de tarefas construída com Next.js 15 (App Router + TypeScript), com foco em **testes unitários** usando Jest e React Testing Library.

## Sobre o Projeto

Este projeto foi desenvolvido como exercício prático para aprender testes unitários no ecossistema React/Next.js. A aplicação é simples por design, o objetivo principal é demonstrar boas práticas de teste, organização de código e a arquitetura Server/Client Components do Next.js 15.

## Tecnologias

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Jest
- React Testing Library

## Estrutura do Projeto

```
src/
├── app/
│   └── page.tsx              # Server Component - busca e exibe tarefas
├── components/
│   ├── NovaTarefa.tsx        # Client Component - formulário de adição
│   └── TaskList.tsx          # Client Component - gerencia estado da lista
├── hooks/
│   └── useContadorDeTarefas.ts   # Hook personalizado - contagem de tarefas
└── __tests__/
    ├── useContadorDeTarefas.test.ts   # Teste do hook
    ├── NovaTarefa.test.tsx            # Teste do formulário
    └── page.test.tsx                  # Teste da página principal
```

## Arquitetura

O projeto segue o padrão recomendado pelo Next.js 15 de separação entre Server e Client Components:

**Server Component (`page.tsx`)** → Busca os dados iniciais de forma assíncrona com `Promise.resolve()` e repassa para o Client Component. Não possui estado nem interatividade.

**Client Component (`TaskList.tsx`)** → Recebe as tarefas iniciais via props, gerencia o estado da lista com `useState` e orquestra os demais componentes.

**Client Component (`NovaTarefa.tsx`)** → Formulário controlado com validação de input vazio. Comunica com o componente pai via callback `onAdicionar`.

**Hook (`useContadorDeTarefas`)** → Lógica isolada e reutilizável que recebe um array de tarefas e retorna o total.

## Testes

O projeto possui 7 testes unitários cobrindo os fluxos principais:

**Hook `useContadorDeTarefas`:**

- Retorna o total correto para uma lista com tarefas
- Retorna 0 para uma lista vazia

**Componente `NovaTarefa`:**

- Renderiza o input e o botão corretamente
- Chama `onAdicionar` com o texto ao submeter o formulário
- Não chama `onAdicionar` quando o input está vazio

**Página principal:**

- Renderiza o título e todas as tarefas iniciais

### Rodando os testes

```bash
npm test
```

## Como rodar o projeto

```bash
# Clonar o repositório
git clone https://github.com/felipedev90/task-list-nextjs.git

# Entrar na pasta
cd task-list-nextjs

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Rodar os testes
npm test
```

O projeto estará disponível em `http://localhost:3000`.

## O que aprendi

- Configuração do Jest com Next.js 15 e TypeScript
- Testes de hooks com `renderHook`
- Testes de componentes com `render` e `screen`
- Simulação de interações do usuário com `userEvent`
- Uso de mocks com `jest.fn()`
- Testes de Server Components assíncronos
- Padrão de Server Component buscando dados e delegando interatividade para Client Components

## Autor

**Felipe Augusto** — Estudante de ADS, buscando primeira vaga como Dev Frontend Júnior.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/felipesilva90)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/felipedev90)
