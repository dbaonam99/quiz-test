import prisma from '../lib/prisma';

export const resolvers = {
  Query: {
    questions: async () => {
      const questions = prisma.question.findMany({
        include: {
          answers: true,
        },
      });

      questions
        .then((res) => {
          console.log('then', res);
        })
        .catch((err) => console.log('catch', err));

      return questions;
    },
  },
};
