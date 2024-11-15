<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=440&size=22&pause=1000&color=38F77CFF&center=false&vCenter=false&repeat=false&width=435&lines=Contexto da Avaliação" alt="Typing SVG" /></a>
### Contexto Inicial
**Indústria do Ramo Alimentício:**
Uma indústria, do ramo alimentício, gerencia tarefas de seus setores utilizando o **kanban**. Não foi realizado um mapeamento do fluxo de cada setor, apenas é feito o controle das tarefas em modelo
simplificado como o **to do list**, onde as etapas são divididas em: a fazer, fazendo e pronto.
O kanban foi utilizado por compartilhar as informações de forma visual, aumentando a transparência e permitindo que toda equipe do setor fique ciente das tarefas. Porém, a necessidade da empresa é aumentar a visibilidade das tarefas e integrar as informações entre todos os setores.


<br>
<br>
<br>
<p align="center">
   <img src="/src/logo/logo.png" alt="logo" width=250px>
</p>

<p align="center">
   <img src="https://img.shields.io/badge/API-FEITA-blue?style=for-the-badge" alt="backend" />
  <img src="https://img.shields.io/badge/Documentação-FEITA-blue?style=for-the-badge" alt="documentação" />
  <img src="https://img.shields.io/badge/Frontend-FEITO-blue?style=for-the-badge" alt="site" />
</p>
<hr>
<br>
<br><br><br>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=440&size=22&pause=1000&color=38F77CFF&center=false&vCenter=false&repeat=false&width=435&lines=Gerenciamento de Tarefas" alt="Typing SVG" /></a>

## Apresentação do Projeto: Desenvolvimento de Gerenciamento de Tarefas com Node.js e Next

### Visão Geral do Projeto
**Objetivo:**
Desenvolver uma aplicação web sobre um gerenciamento de `tarefas` e de `usuarios`, na qual o administrador poderá cadastrar usuários e tarefas, correlacionando ambos. Além disso, ele poderá fazer o gerenciamento das tarefas (CRUD)
<br><br><br><br><br>
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=440&size=22&pause=1000&color=38F77CFF&center=false&vCenter=false&repeat=false&width=435&lines=Escopo" alt="Typing SVG" /></a>

O gerenciador de tarefas será desenvolvido utilizando `Node.js` para o backend e `React e Next.js` para o frontend, com `Postgres` como banco de dados.
<br><br><br><br><br>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=440&size=22&pause=1000&color=38F77CFF&center=false&vCenter=false&repeat=false&width=435&lines=Diagrama de Classe" alt="Typing SVG" /></a>

```mermaid
classDiagram
    class Usuario {
        +Integer id
        +String nome
        +String email
        +List~Tarefa~ tarefas
        +cadastrarTarefa(descricao: String, setor: String, prioridade: String): Tarefa
    }

    class Tarefa {
        +Integer id
        +String descricao
        +String setor
        +String prioridade
        +Date dataCadastro
        +String status = "a fazer"
        +gerenciarStatus(status: String)
        +gerenciarPrioridade(prioridade: String)
    }

    Usuario "1" -- "0..*" Tarefa : cadastra

    class Kanban {
        +List~Tarefa~ aFazer
        +List~Tarefa~ fazendo
        +List~Tarefa~ pronto
        +exibirTarefasPorStatus(status: String): List~Tarefa~
    }

    Tarefa --> Kanban : é exibida em


```
<br><br><br><br><br>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=440&size=22&pause=1000&color=38F77CFF&center=false&vCenter=false&repeat=false&width=435&lines=Diagrama de Uso" alt="Typing SVG" /></a>
```mermaid
flowchart TD
    A[Usuário] --> B[Cadastrar Tarefa]
    A --> C[Atualizar Tarefa]
    A --> D[Excluir Tarefa]
    A --> E[Visualizar Tarefas por Status]
    A --> F[Alterar Status da Tarefa]
    A --> G[Alterar Prioridade da Tarefa]

    B -- inclui --> E
    C -- inclui --> E
    F -- parte de --> C
    G -- parte de --> C


```

<br><br><br><br><br>
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=440&size=22&pause=1000&color=38F77CFF&center=false&vCenter=false&repeat=false&width=435&lines=Script do Banco" alt="Typing SVG" /></a>

```script
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id    Int    @id @default(autoincrement())
  nome  String
  email String @unique
  tasks Task[]
}

model Task {
  id          Int      @id @default(autoincrement())
  descricao   String
  setor       String
  prioridade  String
  dataCadastro DateTime @default(now())
  status      String   @default("a fazer")
  userId      Int
  user        User     @relation(fields: [userId], references: [id])
}
```
