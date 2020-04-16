import { gql } from 'apollo-server-express';

export default gql`
    type Tages {
        name: String
    }

    type Image {
        url: String
    }

    type Product {
        name: String
        id: ID
        price: String
        category: String
        imgUrl: String
    }

    extend type Query {
        getProductById(id: ID!): Product!
        getAllProducts: [Product!]
        getProductsBycategory(category: String!): [Product]
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
