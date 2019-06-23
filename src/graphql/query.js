const { GraphQLObjectType, GraphQLList } = require("graphql");
const { BookType } = require("./types");
const Books = require("../../data/books");

const BookQueryType = new GraphQLObjectType({
	name: "BookQueryType",
	description: "Select Query for Books",
	fields: {
		books: {
			type: new GraphQLList(BookType),
			resolve: () => {
				return Books;
			}
		}
	}
});

module.exports = BookQueryType;
