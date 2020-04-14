export default {
  Query: {
    getAllCategory: async (parent, args, { models }) => {
      return await models.Category.find();
    }
  },
  Mutation: {
    addCategory: async (parent, {name}, { models }) => {
      const category = await models.Category.create({
       name
      });
      return await models.Category.find();
    },
    updateCategory: async (parent, arg, { models }) => {
      return await models.Category.findByIdAndUpdate(arg.id, {...arg}, { new: true });
    },
    deleteCategory: async (parent, { id }, { models }) => {
      const category = await models.Category.findById(id);
      if (category) {
        await category.remove();
        return true;
      } else {
        return false;
      }
    },
  }
};
