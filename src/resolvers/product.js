export default {
    Query: {
      allProducts: async (parent, arg, { models }) => {
        return await models.Product.find();
      },
      productsBycategory: async (parent, {category}, { models }) => {
        return await models.Product.find({category});
      }
    },
    Mutation: {
      addProduct: async (parent, args, { models }) => {
        return await models.Product.create({...args});
      }
    }
};
  