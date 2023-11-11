export const typeDefs = `

  type Question {
    id: ID
    question: String  
    hint: String
    answers: [Answer]
  }

  type Answer {
    id: ID
    answer: String
    isCorrect: Boolean
  }

  type Query {
    questions: [Question]!
  }
`;
