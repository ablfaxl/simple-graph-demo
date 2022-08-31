import '@lib/global'
import runServer from '@lib/server/run-server'
import buildSchema from 'graphql/schema/buildSchema'
import resolvers from 'graphql/resolvers'
import path from 'path'
import { existsSync, mkdirSync } from 'fs'

const dbDir = path.join(process.cwd(), '/src/db')

if (!existsSync(dbDir)) {
  mkdirSync(dbDir)
}

const typeDefs = buildSchema()

print('********************************')
print(typeDefs)
print('********************************')

runServer({ typeDefs, resolvers, port: 4000 })