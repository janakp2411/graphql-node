import { gql } from 'apollo-server-express';

export default gql`
    type Tages {
        name: String
    }

    type Image {
        url: String
    }

    type Product {
        name: String!
        price: String!
        tags: [Tages]
        description: String!
        category: String!
        images: [Image]
    }

    extend type Query {
        products: [Product!]
    }

    extend type Query {
        productsBycategory(
            category: String!
        ): [Product!]
    }

    extend type Query {
        allProducts: [Product!]
    }

    extend type Mutation {
        addProduct(      
            name: String!
            price: String!
            description: String!
            category: String!
        ): Product!
    }
`;
