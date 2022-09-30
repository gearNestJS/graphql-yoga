import { makeExecutableSchema } from '@graphql-tools/schema';

const typeDefinitions = /* GraphQL */ `
  type Query {
    person: Person!
  }

  type Person {
    name: String!
    gender: String!
    age: Int!
  }
`;

type Person = {
  name: string;
  gender: string;
  age: number;
};

const person: Person = {
  name: 'Joe Moe',
  gender: 'male',
  age: 20,
};

const resolvers = {
  Query: {
    person: () => person,
  },
};

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions],
});
