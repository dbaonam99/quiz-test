import prisma from '../lib/prisma';

export const resolvers = {
  Query: {
    questions: async () => {
      return prisma.question.findMany({
        include: {
          answers: true,
        },
      });
    },
  },
};
