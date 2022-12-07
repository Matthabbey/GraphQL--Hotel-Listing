
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import { ApolloServer } from 'apollo-server'
import typeDefs from './GraphQL/type-def';
import resolvers from './GraphQL'

const app = new ApolloServer({
    typeDefs,
    resolvers
})
// const app = express()
// app.use(logger("dev"))


mongoose.connect(process.env.DATABASE_URL!, ()=>{
    console.log("MongoDB connected succesfully")
})










const port = 4000

app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`)
})
