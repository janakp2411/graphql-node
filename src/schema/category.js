import { gql } from 'apollo-server-express';

export default gql`
  type Category {
      name: String!
      id: ID!
  }

  extend type Query {
    getAllCategory: [Category!]
  }

  extend type Mutation {
    addCategory(name: String!): [Category!]
    updateCategory(
      id: ID!
      name: String!
      ) : Category!

    deleteCategory(id: ID!) : Boolean!
  }
`;
