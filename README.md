https://dillinger.io/

# Nome do software

## Contexto: 
Essa api resolve problemas de gerencimento de clínicas médicas, tornando possível adicionar, atualizar... pacientes.... DESCREVER O PROBLEMA QUE O SOFTWARE RESOLVE

## Técnicas e padrões utilizados:
Como o projeto foi organizado em uma estrutura de pastas para melhor visualização e acesso(pastas...)

|Pasta | Uso |

## Tecnologias utilizadas: 
O projeto foi desenvolvido utilizando a linguagem javascript com base Node.js framework, utilizando as seguintes dependências externas:

## Dependências externas (TABELA)

|Plugin | Uso |
- Express
- Sequelize - interação com o banco de dados
- Yup
- Dotenv
- pg, pghstore - permite a comunicação com o postgres

## Dependências de desenvolvimento (TABELA)

## Endpoints - Rotas da aplicação:

GET/api/pacientes/:id

Retorna as informações de um paciente específico.

Parâmetros:
- id(obrigatório): id do paciente desejado

Exemplo de resposta:

'''json
{
	"identifier": 1,
	"name": "Fernanda",
	"sex": "FEMININO",
	"date_of_birth": "1997-12-05",
	"cpf": "12345678912",
	"phone_number": "(48) 999203206",
	"emergency_contact": "(48) 996733731",
	"allergies": "mosquito",
	"specific_care": "blablabla",
	"covenant": "unimed",
	"service_status": "ATENDIDO",
	"total_attendances": 0,
	"createdAt": "2023-04-12T00:06:56.098Z",
	"updatedAt": "2023-04-12T00:06:56.098Z"
}
'''

## Instalação - como executar o projeto:
'''sh
Clonar o repositório [link do repositório]
npm install
npm start
'''

## Possíveis melhorias: 
o projeto é um mvp, podendo ser realizadas melhorias futuramente, como:
 - blablabla
 - blablabla
 - blablabla

