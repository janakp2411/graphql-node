export default {
  Query: {
    category: async (parent, args, { models }) => {
      return await models.Category.find();
    }
  },
  Mutation: {
    addCategory: async (parent, {name}, { models }) => {
      const category = await models.Category.create({
       name
      });
      return await models.Category.find();
    }
  }
};
