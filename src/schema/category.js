import { gql } from 'apollo-server-express';

export default gql`

    type Category {
        name: String!
        id: ID!
    }

  extend type Query {
    category: [Category!]
  }

  extend type Mutation {
    addCategory(
        name: String!
      ): [Category!]
  }

`;
