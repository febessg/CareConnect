# CareConnect

O CareConnect é uma API de gerenciamento de clínicas médicas, onde é possível cadastrar pacientes, médicos, enfermeiros e atendimentos realizados, além de listar, encontrar, atualizar e deletar os dados cadastrados. Para realizar estas operações no sistema, é necessário realizar login, para isso o usuário, que deve ser um médico ou enfermeiro cadastrado, deverá informar o CPF e senha do sistema. Dessa forma, é possível manter a segurança dos dados cadastrados no sistema.

## Como utilizar:

1. Faça um clone desse repositório na sua máquina
    ```sh
    git clone https://github.com/febessg/CareConnect.git
    ```
    
2. Instale as dependências:
    ```sh
    npm install
    ```
3. Inicie o servidor
    ```sh
    npm start
    ```
Após realizar essa sequência de passos, a aplicação estará pronta para ser utilizada!

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
| Bcrypt | Biblioteca utilizada para criptografar senhas de usuários |
| Jsonwebtoken | Biblioteca utilizada para autenticação e geração de tokens JWT |
| Dotenv | Biblioteca utilizada para carregar variáveis de ambiente a partir de um arquivo .env |

### Dependências de desenvolvimento

| Plugin | Uso |
|--------|-----|
| Nodemon | Ferramenta utilizada para monitoramento de alterações no código e reinício automático do servidor |

## Técnicas e padrões

O projeto foi organizado em uma estrutura de pastas, permitindo assim uma visualização e acesso facilitados, para a realização de possíveis correções ou melhorias.

| Pasta | Uso |
|-------|--------|
| Controllers | Onde estão armazenados os arquivos .js responsáveis por gerenciar as requisições HTTP e retornar as respostas adequadas. |
| Database | Onde está localizado o arquivo responsável pela conexão com o banco de dados. |
| Middlewares | Pasta que contém as funções de validação do projeto. |
| Models | Contém os modelos utilizados para definir a estrutura dos dados que serão armazenados e consultados no banco de dados. |
| Routes | Contém as rotas da API, que fazem o mapeamente das URLs e métodos HTTP para os respectivos controllers. |

## Endpoints disponíveis

### Login:

### POST /api/login
Este endpoint é utilizado para realizar o login no sistema, sendo preciso enviar um objeto JSON pelo corpo da requisição com o cpf do usuário e a senha do sistema.

Exemplo de requisição:
```json
{
	"cpf": "12325644566",
	"password": "careconnect2023"
}
```

Exemplo de resposta:
```json
{
	"name": "Pedro Ermel",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgxODQ2NDg3LCJleHAiOjE2ODE4NTAwODd9.MoZgOoODoPTdriSSr5P88mTeXrSU3ioPjGlaLXMYTzY"
}
```

### Pacientes:

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
Este endpoint retorna uma lista com todos os pacientes cadastrados na clínica. Através dele, também é possível utilizar query params, passando através da URL, para filtrar os pacientes por meio do status de atendimento, com o endpoint `/api/pacientes?status=ATENDIDO`

Exemplo de resposta:
```json
[
	{
    	"identifier": 1,
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
    },
	{
		"identifier": 2,
		"name": "Fernando José Gonçalves",
		"sex": "MASCULINO",
		"date_of_birth": "1968-12-09",
		"cpf": "89593506921",
		"phone_number": "(48) 991231315",
		"emergency_contact": "(48) 999203206",
		"allergies": null,
		"specific_care": "Hepatite C",
		"health_insurance": "cidesc",
		"service_status": "NAO_ATENDIDO",
		"total_attendances": 1,
		"createdAt": "2023-04-15T19:21:51.766Z",
		"updatedAt": "2023-04-17T14:44:28.543Z"
	},
	{
		"identifier": 3,
		"name": "Dandhara Kizzy Bess Gonçalves",
		"sex": "FEMININO",
		"date_of_birth": "2002-03-26",
		"cpf": "19123563212",
		"phone_number": "(48) 998003265",
		"emergency_contact": "(48) 991565903",
		"allergies": "diclofenaco",
		"specific_care": null,
		"health_insurance": "UNIMED",
		"service_status": "NAO_ATENDIDO",
		"total_attendances": 4,
		"createdAt": "2023-04-15T18:34:41.667Z",
		"updatedAt": "2023-04-17T15:09:38.987Z"
	}
]
```
Exemplo de resposta com filtro:
```json
[
    {
		"identifier": 2,
		"name": "Fernando José Gonçalves",
		"sex": "MASCULINO",
		"date_of_birth": "1968-12-09",
		"cpf": "89593506921",
		"phone_number": "(48) 991231315",
		"emergency_contact": "(48) 999203206",
		"allergies": null,
		"specific_care": "Hepatite C",
		"health_insurance": "cidesc",
		"service_status": "NAO_ATENDIDO",
		"total_attendances": 1,
		"createdAt": "2023-04-15T19:21:51.766Z",
		"updatedAt": "2023-04-17T14:44:28.543Z"
	},
	{
		"identifier": 3,
		"name": "Dandhara Kizzy Bess Gonçalves",
		"sex": "FEMININO",
		"date_of_birth": "2002-03-26",
		"cpf": "19123563212",
		"phone_number": "(48) 998003265",
		"emergency_contact": "(48) 991565903",
		"allergies": "diclofenaco",
		"specific_care": null,
		"health_insurance": "UNIMED",
		"service_status": "NAO_ATENDIDO",
		"total_attendances": 4,
		"createdAt": "2023-04-15T18:34:41.667Z",
		"updatedAt": "2023-04-17T15:09:38.987Z"
	}
]
```

### GET /api/pacientes/{identifier}
Este endpoint retorna um paciente específico de acordo com o id(identifier) fornecido através da URL.

Exemplo de resposta:
```json
{
		"identifier": 2,
		"name": "Fernando José Gonçalves",
		"sex": "MASCULINO",
		"date_of_birth": "1968-12-09",
		"cpf": "89593506921",
		"phone_number": "(48) 991231315",
		"emergency_contact": "(48) 999203206",
		"allergies": null,
		"specific_care": "Hepatite C",
		"health_insurance": "cidesc",
		"service_status": "NAO_ATENDIDO",
		"total_attendances": 1,
		"createdAt": "2023-04-15T19:21:51.766Z",
		"updatedAt": "2023-04-17T14:44:28.543Z"
	}
```

### DELETE /api/pacientes/{identifier}
Este endpoint deleta um paciente específico do sistema, de acordo com o id(identifier) fornecido através da URL. Não é necessário enviar nada no corpo da requisição e não retorna nada no corpo da resposta.

### Médicos:

### POST /api/medicos
Este endpoint cadastra um médico no sistema, sendo preciso enviar um objeto JSON com os dados do mesmo.

Exemplo de requisição:
```json
{
	"name": "Carlos Alberto",
	"sex": "MASCULINO",
	"date_of_birth": "1956-03-24",
	"cpf": "21335648944",
	"phone_number": "(48) 984126321",
	"educational_institution": "UFSC",
	"crm_uf": "78654/SC",
	"clinical_specialization": "CLINICO_GERAL",
	"status": "ATIVO"
}
```
Exemplo de resposta:
```json
{
	"identificador": 6,
	"data": {
		"name": "Rita Maria",
		"sex": "FEMININO",
		"date_of_birth": "1980-10-09",
		"cpf": "02154897632",
		"phone_number": "(48) 991256489",
		"educational_institution": "USP",
		"crm_uf": "89762/SP",
		"clinical_specialization": "PSIQUIATRIA",
		"status": "ATIVO"
	},
	"atendimentos": 0
}
```
### PUT /api/medicos/{identifier}
Este endpoint atualiza os dados de um médico específico, de acordo com o id(identifier) informado na URL. É preciso enviar um objeto JSON com o dado que deverá ser atualizado.

Exemplo de requisição:
```json
{
	"phone_number": "(11) 991256489"
}
```
Exemplo de resposta:
```json
{
	"identifier": 6,
	"name": "Rita Maria",
	"sex": "FEMININO",
	"date_of_birth": "1980-10-09",
	"cpf": "02154897632",
	"phone_number": "(11) 991256489",
	"educational_institution": "USP",
	"crm_uf": "89762/SP",
	"clinical_specialization": "PSIQUIATRIA",
	"status": "ATIVO",
	"total_attendances": 0,
	"createdAt": "2023-04-18T00:05:28.946Z",
	"updatedAt": "2023-04-18T00:08:30.307Z"
}
```
### PUT /api/medicos/{identifier}/status
Este endpoint atualiza o estado de um médico específico no sistema, de acordo com o id(identifier) enviado na URL. É preciso enviar um objeto JSON com o status atualizado.

Exemplo de requisição:
```json
{
	"status": "INATIVO"
}
```
Exemplo de resposta:
```json
{
	"identifier": 6,
	"name": "Rita Maria",
	"sex": "FEMININO",
	"date_of_birth": "1980-10-09",
	"cpf": "02154897632",
	"phone_number": "(11) 991256489",
	"educational_institution": "USP",
	"crm_uf": "89762/SP",
	"clinical_specialization": "PSIQUIATRIA",
	"status": "INATIVO",
	"total_attendances": 0,
	"createdAt": "2023-04-18T00:05:28.946Z",
	"updatedAt": "2023-04-18T00:10:42.036Z"
}
```

### GET /api/medicos
Este endpoint retorna uma lista com todos os médicos cadastrados na clínica. Através dele, também é possível utilizar query params, passando através da URL, para filtrar os médicos por meio do estado no sistema, com o endpoint `/api/medicos?status=ATIVO`

Exemplo de resposta:
```json
[
	{
		"identifier": 3,
		"name": "John Doe",
		"sex": "MASCULINO",
		"date_of_birth": "1987-07-12",
		"cpf": "12435648944",
		"phone_number": "(48) 984126321",
		"educational_institution": "UFSC",
		"crm_uf": "89654/SC",
		"clinical_specialization": "DERMATOLOGIA",
		"status": "ATIVO",
		"total_attendances": 4,
		"createdAt": "2023-04-16T19:43:20.704Z",
		"updatedAt": "2023-04-17T15:09:38.981Z"
	},
	{
		"identifier": 1,
		"name": "Pedro Ermel",
		"sex": "MASCULINO",
		"date_of_birth": "1995-06-21",
		"cpf": "12325648965",
		"phone_number": "(48) 986546321",
		"educational_institution": "UNISUL TUBARÃO",
		"crm_uf": "83748718/SC",
		"clinical_specialization": "CLINICO_GERAL",
		"status": "ATIVO",
		"total_attendances": 2,
		"createdAt": "2023-04-15T19:45:22.251Z",
		"updatedAt": "2023-04-17T15:10:11.594Z"
	},
	{
		"identifier": 6,
		"name": "Rita Maria",
		"sex": "FEMININO",
		"date_of_birth": "1980-10-09",
		"cpf": "02154897632",
		"phone_number": "(11) 991256489",
		"educational_institution": "USP",
		"crm_uf": "89762/SP",
		"clinical_specialization": "PSIQUIATRIA",
		"status": "INATIVO",
		"total_attendances": 0,
		"createdAt": "2023-04-18T00:05:28.946Z",
		"updatedAt": "2023-04-18T00:10:42.036Z"
	}
]
```

Exemplo de resposta com filtro:
```json
[
	{
		"identifier": 3,
		"name": "John Doe",
		"sex": "MASCULINO",
		"date_of_birth": "1987-07-12",
		"cpf": "12435648944",
		"phone_number": "(48) 984126321",
		"educational_institution": "UFSC",
		"crm_uf": "89654/SC",
		"clinical_specialization": "DERMATOLOGIA",
		"status": "ATIVO",
		"total_attendances": 4,
		"createdAt": "2023-04-16T19:43:20.704Z",
		"updatedAt": "2023-04-17T15:09:38.981Z"
	},
	{
		"identifier": 1,
		"name": "Pedro Ermel",
		"sex": "MASCULINO",
		"date_of_birth": "1995-06-21",
		"cpf": "12325648965",
		"phone_number": "(48) 986546321",
		"educational_institution": "UNISUL TUBARÃO",
		"crm_uf": "83748718/SC",
		"clinical_specialization": "CLINICO_GERAL",
		"status": "ATIVO",
		"total_attendances": 2,
		"createdAt": "2023-04-15T19:45:22.251Z",
		"updatedAt": "2023-04-17T15:10:11.594Z"
	}
]
```
### GET /api/medicos/{identifier}
Este endpoint retorna um médico específico de acordo com o id(identifier) fornecido através da URL.

Exemplo de resposta:
```json
{
	"identifier": 1,
	"name": "Pedro Ermel",
	"sex": "MASCULINO",
	"date_of_birth": "1995-06-21",
	"cpf": "12325648965",
	"phone_number": "(48) 986546321",
	"educational_institution": "UNISUL TUBARÃO",
	"crm_uf": "83748718/SC",
	"clinical_specialization": "CLINICO_GERAL",
	"status": "ATIVO",
	"total_attendances": 2,
	"createdAt": "2023-04-15T19:45:22.251Z",
	"updatedAt": "2023-04-17T15:10:11.594Z"
}
```
### DELETE /api/medicos/{identifier}
Este endpoint deleta um médico específico do sistema, de acordo com o id(identifier) fornecido através da URL. Não é necessário enviar nada no corpo da requisição e não retorna nada no corpo da resposta.

### Enfermeiros:

### POST /api/enfermeiros
Este endpoint cadastra um novo enfermeiro no sistema, sendo preciso enviar um objeto JSON com os dados do mesmo.

Exemplo de requisição:
```json
{
	"name": "Claudio Aguiar",
	"sex": "MASCULINO",
	"date_of_birth": "1970-06-29",
	"cpf": "98635648989",
	"phone_number": "(48) 999654589",
	"educational_institution": "UFMG",
	"coren_uf": "88956/MG"
}
```

Exemplo de resposta:
```json
{
	"identifier": 2,
	"name": "Claudio Aguiar",
	"sex": "MASCULINO",
	"date_of_birth": "1970-06-29",
	"cpf": "98635648989",
	"phone_number": "(48) 999654589",
	"educational_institution": "UFMG",
	"coren_uf": "88956/MG",
	"updatedAt": "2023-04-16T21:07:05.409Z",
	"createdAt": "2023-04-16T21:07:05.409Z"
}
```

### PUT /api/enfermeiros/{identifier}
Este endpoint atualiza os dados de um enfermeiro específico, de acordo com o id(identifier) informado na URL. É preciso enviar um objeto JSON com o dado que deverá ser atualizado.

Exemplo de requisição:
```json
{
	"phone_number": "(32) 999654589"
}
```
Exemplo de resposta:
```json
{
	"identifier": 1,
	"name": "César de Oliveira",
	"sex": "MASCULINO",
	"date_of_birth": "1984-05-16",
	"cpf": "98635648944",
	"phone_number": "(32) 999654589",
	"educational_institution": "PUC",
	"coren_uf": "89765/RJ",
	"createdAt": "2023-04-16T21:04:58.903Z",
	"updatedAt": "2023-04-18T15:07:09.043Z"
}
```

### GET /api/enfermeiros
Este endpoint retorna uma lista com todos os enfermeiros cadastrados na clínica.

Exemplo de resposta:
```json
[
	{
		"identifier": 1,
		"name": "César de Oliveira",
		"sex": "MASCULINO",
		"date_of_birth": "1984-05-16",
		"cpf": "98635648944",
		"phone_number": "(32) 999654589",
		"educational_institution": "PUC",
		"coren_uf": "89765/RJ",
		"createdAt": "2023-04-16T21:04:58.903Z",
		"updatedAt": "2023-04-18T15:07:09.043Z"
	},
	{
		"identifier": 2,
		"name": "Amanda da Silva",
		"sex": "FEMININO",
		"date_of_birth": "1994-02-23",
		"cpf": "56423102598",
		"phone_number": "(48) 991652345",
		"educational_institution": "UFSC",
		"coren_uf": "87945/SC",
		"createdAt": "2023-04-18T15:12:14.520Z",
		"updatedAt": "2023-04-18T15:12:14.520Z"
	}
]
```

### GET /api/enfermeiros/{identifier}
Este endpoint retorna um enfermeiro específico de acordo com o id(identifier) fornecido através da URL.

Exemplo de resposta:
```json
{
	"identifier": 2,
	"name": "Amanda da Silva",
	"sex": "FEMININO",
	"date_of_birth": "1994-02-23",
	"cpf": "56423102598",
	"phone_number": "(48) 991652345",
	"educational_institution": "UFSC",
	"coren_uf": "87945/SC",
	"createdAt": "2023-04-18T15:12:14.520Z",
	"updatedAt": "2023-04-18T15:12:14.520Z"
}
```

### DELETE /api/enfermeiros/{identifier}
Este endpoint deleta um enfermeiro específico do sistema, de acordo com o id(identifier) fornecido através da URL. Não é necessário enviar nada no corpo da requisição e não retorna nada no corpo da resposta.

### POST /api/atendimentos
Este endpoint cadastra um novo atendimento no sistema, sendo preciso enviar um objeto JSON com o identificador do médico e do paciente.

Exemplo de requisição:
```json
{
	"doctor_id": 1,
	"patient_id": 4
}
```

Exemplo de resposta:
```json
{
	"atendimento": {
		"identifier": 10,
		"doctor_id": 1,
		"patient_id": 4,
		"updatedAt": "2023-04-17T15:10:11.579Z",
		"createdAt": "2023-04-17T15:10:11.579Z"
	},
	"medico": {
		"identifier": 1,
		"name": "Pedro Ermel",
		"sex": "MASCULINO",
		"date_of_birth": "1995-06-21",
		"cpf": "12325648965",
		"phone_number": "(48) 986546321",
		"educational_institution": "UNISUL TUBARÃO",
		"crm_uf": "83748718/SC",
		"clinical_specialization": "CLINICO_GERAL",
		"status": "ATIVO",
		"total_attendances": 2,
		"createdAt": "2023-04-15T19:45:22.251Z",
		"updatedAt": "2023-04-17T15:10:11.594Z"
	},
	"paciente": {
		"identifier": 4,
		"name": "Fernanda",
		"sex": "FEMININO",
		"date_of_birth": "1997-12-05",
		"cpf": "12345678912",
		"phone_number": "(48) 999203206",
		"emergency_contact": "(48) 996733731",
		"allergies": "mosquito",
		"specific_care": "blablabla",
		"health_insurance": "UNIMED",
		"service_status": "ATENDIDO",
		"total_attendances": 1,
		"createdAt": "2023-04-15T17:58:48.191Z",
		"updatedAt": "2023-04-17T15:10:11.600Z"
	}
}
```

## Possíveis melhorias: 
Este projeto é um MVP (Produto Viável Mínimo), portanto podem vir a ser realizadas melhorias futuramente, dentre elas:

 - Melhoria da rota de atendimento para que possa haver o registro da evolução médica, onde, além de fornecer os identificadores do médico e do paciente, possam ser registradas as informações a respeito do atendimento;
 - Criação de rota para requisição de exames, onde seja informando o identificador do médico solicitante e do paciente a quem será solicitado, além do exame em questão.

A implementação das melhorias citadas proporcionará um sistema de gerencimento mais completo, facilitando assim o controle dos atendimentos, possibilitando consultas rápidas a respeito dos mesmos e simplificando a requisição de exames, de forma que tudo fique registrado em um sistema seguro e acessível.

