export default {
  Query: {
    getAllProducts: async (parent, arg, { models }) => {
      return await models.Product.find();
    },
    getProductsBycategory: async (parent, {category}, { models }) => {
      return await models.Product.find({category});
    },
    getProductById: async (parent, {id}, { models }) => {
      return await models.Product.findById(id);
    }
  },
  Mutation: {
    addProduct: async (parent, args, { models }) => {
      return await models.Product.create({...args});
    },
    updateProduct: async (parent, arg, { models }) => {
      return await models.Product.findByIdAndUpdate(arg.id, {...arg}, { new: true });
    },
    deleteProduct: async (parent, { id }, { models }) => {
      const product = await models.Product.findById(id);
      if (product) {
        await product.remove();
        return true;
      } else {
        return false;
      }
    },
  }
};