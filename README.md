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
Desenvolver uma aplicação web sobre um gerenciamento de `tarefas` e de `usuarios`, na qual os usuários poderão criar, votar e acompanhar os resultados. Nós utilizaremos tecnologias modernas e práticas de mercado, garantindo segurança, escalabilidade e uma experiência de usuário fluida por meio do React, Next, Node.js, MongoDB, e JWT, criando uma aplicação completa e funcional que pode ser utilizada no mundo real.

**Por Que Este Projeto?**
A nossa empresa, dedicada a inovar no campo da interação digital, está em processo de criação de uma plataforma de enquetes interativas chamada `Votefy`. Esse projeto visa proporcionar uma experiência envolvente e dinâmica para os usuários, permitindo que eles participem e criem enquetes de maneira intuitiva e interativa. Com o objetivo de transformar a forma como as pessoas coletam e analisam opiniões, estamos desenvolvendo uma solução tecnológica avançada que ofereça uma interface amigável e funcionalidades robustas. 
<br><br><br><br><br>
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=440&size=22&pause=1000&color=38F77CFF&center=false&vCenter=false&repeat=false&width=435&lines=Escopo" alt="Typing SVG" /></a>

A plataforma de enquetes será desenvolvida utilizando `Node.js` para o backend e `React e Next.js` para o frontend, com `MongoDB` como banco de dados e `JWT` para autenticação. A solução visa proporcionar uma experiência de usuário intuitiva, com recursos para criação, visualização, atualização e exclusão de enquetes.
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
