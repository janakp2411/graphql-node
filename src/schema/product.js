import { gql } from 'apollo-server-express';

export default gql`
    type Tages {
        name: String
    }

    type Image {
        url: String
    }

    type Product {
        id: ID!
        name: String!
        price: String!
        description: String!
        category: String!
    }

    extend type Query {
        getProductById(id: ID!): Product!
        getAllProducts: [Product!]
        getproductsBycategory(
            category: String!
        ): [Product!]
    }

    extend type Mutation {
        addProduct(      
            name: String!
            price: String!
            description: String!
            category: String!
        ): Product!
        updateProduct(
            id: ID!
            name: String!
            price: String!
            description: String!
            category: String!
        ): Product!
        deleteProduct(id: ID!): Boolean!
    }

    
`;
