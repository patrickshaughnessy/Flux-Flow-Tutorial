import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
  GraphQLBoolean
} from 'graphql';

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
  }), 

  mutation: new GraphQLObjectType({
  })
});

export default schema;
