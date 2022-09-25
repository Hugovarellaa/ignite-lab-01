## Aula 01 

Nessa primeira aula vamos criar a base dos micro-serviços back-end e a estrutura front-end do nosso projeto. Vamos também fazer o setup do processo de autenticação usando o Auth0, a estrutura da base de dados com Prisma e os fundamentos da nossa API com GraphQL.

Ferramentas: NestJS, Docker, Prisma, Auth0, GraphQL.

## Aula 02

Nessa aula vamos construir toda estrutura GraphQL e funcionalidades back-end da nossa aplicação. Vamos criar os resolvers, queries, models e inputs do GraphQL para as funcionalidades do serviço de compras e sala de aula.

Ferramenta: GraphQL.

## Aula 03

Nessa aula vamos integrar nossos serviços com apache kafka e entender como o Apollo Federation poderá nos ajudar a lidar com vários schemas diferentes no GraphQL.

Ferramenta: Apache Kafka e Apollo Federation.

Purchase -> Kafka (Banco de dados)

Classroom <- Kafka (Banco de dados)

Serviço 1 <- Kafka (Banco de dados)
Serviço 2 <- Kafka (Banco de dados)
Serviço 3 <- Kafka (Banco de dados)

Publish / Subscribe


## Aula 04

Nessa aula vamos integrar nosso front-end com nossos serviços back-end utilizando Apollo Client e GraphQL CodeGen. Vamos aprender como realizar requisições GraphQL tanto pelo client-side quanto pelo server-side e também como realizar autenticação das requisições construindo um proxy de requisições HTTP dentro do Next.js.

