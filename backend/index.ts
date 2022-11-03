import "reflect-metadata"
import { UserResolver } from './src/resolvers/UserResolver';
import path from "path"
import { ApolloServer } from "apollo-server"
import { buildSchema } from "type-graphql"

// TODO: construindo schema do GraphQL
async function main() {
  const schema = await buildSchema({
    resolvers: [UserResolver], //São as rotas da aplicação
    emitSchemaFile: path.resolve(__dirname, "schema.gql")
  })

  const server = new ApolloServer({
    schema
  })

  const { url } = await server.listen()

  console.log(`Server is running at ${url}`)
}

main()