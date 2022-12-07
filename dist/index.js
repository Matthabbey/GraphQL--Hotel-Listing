"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const apollo_server_1 = require("apollo-server");
const type_def_1 = __importDefault(require("./GraphQL/type-def"));
const GraphQL_1 = __importDefault(require("./GraphQL"));
const app = new apollo_server_1.ApolloServer({
    typeDefs: type_def_1.default,
    resolvers: GraphQL_1.default
});
// const app = express()
// app.use(logger("dev"))
mongoose_1.default.connect(process.env.DATABASE_URL, () => {
    console.log("MongoDB connected succesfully");
});
const port = 4000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
