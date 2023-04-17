# CareConnect

O CareConnect é uma API de gerenciamento de clínicas médicas, onde é possível cadastrar pacientes, médicos, enfermeiros e atendimentos realizados, além de listar, encontrar, atualizar e deletar os dados cadastrados.

## Tecnologias

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- **Linguagem de programação**: JavaScript
- **Framework**: Node.js
- **Banco de dados**: PostgreSQL
- **Controle de versão**: Git

### Dependências externas

Também foram utilizadas as seguintes dependências na construção da API:

| Plugin | Uso |
|--------|-----|
| Express | Framework web utilizado para criar as rotas e endpoints da API |
| Sequelize | ORM para bancos de dados relacionais, que permite trabalhar com bancos como o PostgreSQL
|pg e pg-hstore | Bibliotecas utilizadas para realizar a conexão e operações com o banco de dados PostgreSQL
| Yup | Biblioteca utilizada para a validação dos dados enviados na API |

### Dependências de desenvolvimento

| Plugin | Uso |
|--------|-----|
| Nodemon | Ferramenta utilizada para monitoramento de alterações no código e reinício automático do servidor |

## Técnicas e padrões

O projeto foi organizado em uma estrutura de pastas, permitindo assim uma visualização e acesso facilitados, para a realização de possíveis correções ou melhorias.

| Pasta | Uso |
|-------|--------|
| Controllers | |
| Database | |
| Middlewares | |
| Models | |
| Routes | |

## Endpoints disponíveis

### POST /api/pacientes
Este endpoint cadastra um novo paciente no sistema, sendo preciso enviar um objeto JSON com os dados do paciente.

Exemplo de requisição:
```json
{
	"name": "Ricardo Alves",
	"sex": "MASCULINO",
	"date_of_birth": "1962-08-24",
	"cpf": "09823655213",
	"phone_number": "(48) 999256898",
	"emergency_contact": "(48) 984562586",
	"allergies": "dipirona",
	"specific_care": "Diabetes tipo II",
	"health_insurance": "UNIMED",
	"service_status": "NAO_ATENDIDO"
}
```
Exemplo de resposta:
```json
{
	"total_attendances": 0,
	"identifier": 9,
	"name": "Ricardo Alves",
	"sex": "MASCULINO",
	"date_of_birth": "1962-08-24",
	"cpf": "09823655213",
	"phone_number": "(48) 999256898",
	"emergency_contact": "(48) 984562586",
	"allergies": "Dipirona",
	"specific_care": "Diabetes tipo II",
	"health_insurance": "UNIMED",
	"service_status": "NAO_ATENDIDO",
	"updatedAt": "2023-04-17T22:31:00.743Z",
	"createdAt": "2023-04-17T22:31:00.743Z"
}
```

### PUT /api/pacientes/{identifier}
Este endpoint atualiza os dados de um paciente específico, de acordo com o id(identifier) informado na URL. É preciso enviar um objeto JSON com o dado que deverá ser atualizado.

Exemplo de requisição:
```json
{
	"health_insurance": "SIDESC"
}
```
Exemplo de resposta:
```json
{
	"identifier": 9,
	"name": "Ricardo Alves",
	"sex": "MASCULINO",
	"date_of_birth": "1962-08-24",
	"cpf": "09823655213",
	"phone_number": "(48) 999256898",
	"emergency_contact": "(48) 984562586",
	"allergies": "dipirona",
	"specific_care": "Diabetes tipo II",
	"health_insurance": "SIDESC",
	"service_status": "NAO_ATENDIDO",
	"total_attendances": 0,
	"createdAt": "2023-04-17T22:31:00.743Z",
	"updatedAt": "2023-04-17T22:41:48.558Z"
}
```

### PUT /api/pacientes/{identifier}/status
Este endpoint atualiza o status de atendimento de um paciente específico, de acordo com o id(identifier) enviado na URL. É preciso enviar um objeto JSON com o status atualizado.

Exemplo de requisição:
```json
{
	"service_status": "ATENDIDO"
}
```
Exemplo de resposta:
```json
{
	"identifier": 9,
	"name": "Ricardo Alves",
	"sex": "MASCULINO",
	"date_of_birth": "1962-08-24",
	"cpf": "09823655213",
	"phone_number": "(48) 999256898",
	"emergency_contact": "(48) 984562586",
	"allergies": "dipirona",
	"specific_care": "Diabetes tipo II",
	"health_insurance": "SIDESC",
	"service_status": "ATENDIDO",
	"total_attendances": 0,
	"createdAt": "2023-04-17T22:31:00.743Z",
	"updatedAt": "2023-04-17T22:47:19.497Z"
}
```

### GET /api/pacientes
Este endpoint retorna uma lista com todos os pacientes cadastrados na clínica. Através dele, também é possível utilizar query params, passando através da URL, para filtrar os pacientes por meio do status de atendimento, com o endpoint `/api/pacientes?service_status=ATENDIDO`

## Instalação

1. Faça um clone desse repositório na sua máquina
    ```sh
    git clone https://github.com/febessg/CareConnect.git
    ```
    
2. Instale as bibliotecas necessárias:
    ```sh
    npm install
    ```
3. Execute a API
    ```sh
    npm start
    ```

## Possíveis melhorias: 
o projeto é um mvp, podendo ser realizadas melhorias futuramente, como:
 - blablabla
 - blablabla
 - blablabla

