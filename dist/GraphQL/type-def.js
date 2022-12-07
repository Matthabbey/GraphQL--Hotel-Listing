"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const typeDefs = (0, apollo_server_1.gql) `

type Listing{
    id: ID!,
    title: String,
    image: String,
    address: String,
    prcie: Int,
    numsOfBeds: Int,
    numsOfBaths: Int,
    rating: Int
}
input UpdateListingInput{
    id: ID!
    title: String,
    image: String,
    address: String,
    prcie: Int,
    numsOfBeds: Int,
    numsOfBaths: Int,
    rating: Int
}
input CreateListingInput{
    title: String!,
    image: String!,
    address: String!,
    prcie: Int!,
    numsOfBeds: Int!,
    numsOfBaths: Int!,
    rating: Int!
}
type Message{
    message: String
}

type Query{
    allListing: [Listing]!,
    singleListing(id:ID!): Listing
}

type Mutation{
    createListing(input:CreateListingInput): Listing,
    updateListing(input:UpdateListingInput): Listing,
    deleteListing(id:ID!): Message!


}

`;
exports.default = typeDefs;
