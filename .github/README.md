# Projeto IF

Sistema desenvolvido pela **Turma 3A** da disciplina **Projeto de Sistemas Computacionais**, do curso de **Análise e Desenvolvimento de Sistemas**, do **Instituto Federal Sul-Rio-Grandense (IFSul)** — *Campus Sapucaia do Sul*, sob orientação do professor **Rodrigo Remor Oliveira**.

O projeto tem como objetivo aplicar, de forma prática, os conhecimentos adquiridos ao longo do curso, integrando tecnologias modernas de **frontend**, **backend** e **banco de dados**, seguindo boas práticas de desenvolvimento de software.

---

## Objetivo do Projeto

Desenvolver um sistema completo que envolva:
- Arquitetura cliente-servidor
- Integração entre frontend e backend
- Persistência de dados em banco relacional
- Uso de tecnologias amplamente utilizadas no mercado
- Aplicação de padrões arquiteturais e boas práticas de desenvolvimento

---

## Arquitetura do Sistema

O sistema backend foi desenvolvido seguindo uma **arquitetura em camadas**, visando organização, manutenibilidade e separação de responsabilidades.

### Camadas

- **controller**  
  Responsável por expor os endpoints REST da aplicação.

- **service**  
  Contém as regras de negócio do sistema  
  *(ex.: `NewsServiceImpl`)*.

- **repository**  
  Camada de acesso a dados, utilizando interfaces do Spring Data JPA e modelos de domínio.

- **dto (Data Transfer Object)**  
  Objetos utilizados para transporte de dados entre a API e o domínio, evitando exposição direta das entidades.

- **test**  
  Contém os testes unitários organizados por serviço ou funcionalidade.

---

## Padrões e Boas Práticas Utilizadas

- Uso de **DTOs** para entrada e saída de dados
- **Validações com Bean Validation**, incluindo:
  - Título obrigatório
  - Resumo com limite de caracteres
  - Conteúdo obrigatório
  - Data válida
- **Tratamento centralizado de erros**, incluindo:
  - Erros de validação
  - Exceções de negócio
- Organização do desenvolvimento utilizando **Git Flow**

---

## Tecnologias Utilizadas

### Frontend
- **React**
- **TypeScript**
- HTML5
- CSS3

### Backend
- **Java 17+**
- **Spring Boot**
  - Spring Web
  - Spring Data JPA
- **Hibernate**
- **Lombok**

### Banco de Dados
- **PostgreSQL 15**

### Build e Ferramentas
- **Gradle**

### Testes
- **JUnit 5**
- **Mockito**

### Validação
- **Jakarta Bean Validation (JSR 380/381)**

---

## Banco de Dados

- Tipo: **PostgreSQL 15**
- Persistência realizada com:
  - **Spring Data JPA**
  - **Hibernate** como ORM

---

## Testes

Os testes unitários foram desenvolvidos utilizando **JUnit 5** e **Mockito**, cobrindo cenários de sucesso e falha.

Exemplo:
- `NewsServiceImplTest` valida:
  - Título vazio
  - Resumo acima do limite permitido
  - Conteúdo nulo
  - Data inválida

---

## Orientação

Projeto desenvolvido sob orientação do professor:

**Rodrigo Remor Oliveira**

---

## Autores

Projeto desenvolvido pelos alunos da **Turma 3A** no semestre **2025/2**
Curso de **Análise e Desenvolvimento de Sistemas**  
**IFSul – Campus Sapucaia do Sul**

---

## Licença

Este projeto possui caráter **acadêmico**, sendo desenvolvido exclusivamente para fins educacionais.
