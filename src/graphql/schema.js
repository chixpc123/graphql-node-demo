const { GraphQLSchema } = require("graphql");
const BookQueryType = require("./query");
const BookMutationType = require("./mutations");

const BooksSchema = new GraphQLSchema({
	query: BookQueryType,
	mutation: BookMutationType
});

module.exports = BooksSchema;
