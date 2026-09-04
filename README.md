# 🐾 API PetShop

Projeto individual desenvolvido com o objetivo de criar uma **API REST para Pet Shop**, integrada a um front-end em **React + JSX**.

A aplicação permite cadastrar e visualizar pets, utilizando **Spring Boot**, **JDBC**, **MySQL**, **React** e **Axios**.

---

## Tecnologias utilizadas

### Back-end

* Java
* Spring Boot
* JDBC
* MySQL

### Front-end

* React
* JSX
* Axios
* CSS Modules

---

## Funcionalidades

O sistema possui as seguintes funcionalidades:

* Cadastro de pets;
* Visualização dos pets cadastrados;
* Integração entre front-end e back-end;
* Persistência dos dados no MySQL;
* Validação dos campos de cadastro.

---

## Dados do Pet

Cada pet possui os seguintes dados:

* Nome
* Espécie
* Raça
* Sexo
* Idade
* Peso
* Nome do tutor

---

## Estrutura do projeto

```text
projeto_individual_semestre3/
│
├── Back-end/
│   ├── src/
│   ├── pom.xml
│   └── ...
│
├── Front-end/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── script.sql
│
└── README.md
```

---

# Banco de dados

O projeto utiliza MySQL.

Primeiro, execute o arquivo `script.sql` para criar o banco e a tabela necessária.

```sql
CREATE DATABASE petshop;

USE petshop;

CREATE TABLE pet (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    especie VARCHAR(50),
    raca VARCHAR(50),
    sexo VARCHAR(20),
    idade INT,
    peso DECIMAL(5,2),
    nome_tutor VARCHAR(100)
);
```

---

# Configuração do Back-end

No arquivo:

```text
src/main/resources/application.properties
```

Configure a conexão com o MySQL:

```properties
spring.application.name=petshop
spring.datasource.url=jdbc:mysql://localhost:3306/petshop
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.username=root
spring.datasource.password=SUA_SENHA
```

Altere:

```properties
spring.datasource.username=root
spring.datasource.password=SUA_SENHA
```

de acordo com o usuário e senha do seu MySQL.

---

# Endpoints da API

A API possui dois endpoints principais.

## GET /pets

Responsável por listar todos os pets cadastrados.

### Requisição

```http
GET http://localhost:8080/pets
```

### Exemplo de resposta

```json
[
  {
    "id": 1,
    "nome": "Fox",
    "especie": "Cachorro",
    "raca": "Vira-Lata",
    "sexo": "Macho",
    "idade": 9,
    "peso": 30.0,
    "nomeTutor": "Pedro"
  }
]
```

---

## POST /pets

Responsável por cadastrar um novo pet.

### Requisição

```http
POST http://localhost:8080/pets
```

### Exemplo do Body

```json
{
  "nome": "Fox",
  "especie": "Cachorro",
  "raca": "Vira-Lata",
  "sexo": "Macho",
  "idade": 9,
  "peso": 30.0,
  "nomeTutor": "Pedro"
}
```

### Exemplo de resposta

```json
{
"nome": "Fox", 
"especie": "Cachorro", 
"raca": "Vira-Lata", 
"sexo": "Macho", 
"idade": 9, 
"peso": 30.0, 
"nomeTutor": "Pedro"
}
```

---

# Como executar o projeto

## 1. Banco de dados

Inicie o MySQL.

Depois execute:

```sql
CREATE DATABASE petshop;

USE petshop;
```

Em seguida, execute o restante do arquivo `script.sql` para criar a tabela.

---

## 2. Executar o Back-end

Configure corretamente o `application.properties`.

Depois execute a aplicação Spring Boot.

O back-end ficará disponível em:

```text
http://localhost:8080
```

Para testar, acesse:

```text
http://localhost:8080/pets
```

---

## 3. Executar o Front-end

Abra o terminal dentro da pasta `Front-end`.

Instale as dependências:

```bash
npm install
```

Depois execute:

```bash
npm run dev
```

O front-end ficará disponível normalmente em:

```text
http://localhost:5173
```

---

# Integração entre Front-end e Back-end

O front-end utiliza **Axios** para consumir a API.

O GET é utilizado para buscar os pets:

```javascript
axios.get("http://localhost:8080/pets")
```

O POST é utilizado para cadastrar um pet:

```javascript
axios.post("http://localhost:8080/pets", novoPet)
```

---

# Validação de cadastro

Antes de realizar o cadastro, o front-end verifica se os campos foram preenchidos.

Também são realizadas validações para:

* Não permitir idade negativa;
* Não permitir peso igual ou menor que zero;
* Não permitir campos vazios.

Caso o cadastro seja realizado corretamente, o sistema exibe:

```text
Pet cadastrado com sucesso!
```

---

# CORS

Como o front-end e o back-end utilizam portas diferentes, o controller permite requisições vindas do React.

Exemplo:

```java
@CrossOrigin(origins = "http://localhost:5173")
```

Front-end:

```text
http://localhost:5173
```

Back-end:

```text
http://localhost:8080
```

---

# Resumo dos endpoints

| Método | Endpoint | Função               |
| ------ | -------- | -------------------- |
| GET    | `/pets`  | Lista todos os pets  |
| POST   | `/pets`  | Cadastra um novo pet |

---

# Resultado

Ao executar o projeto, o usuário poderá:

1. Acessar o front-end;
2. Preencher os dados de um pet;
3. Cadastrar o pet;
4. Salvar os dados no MySQL;
5. Acessar a área de visualização;
6. Clicar em **Listar Pets**;
7. Visualizar os pets cadastrados no banco.
