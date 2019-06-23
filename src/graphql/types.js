const {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLString,
	GraphQLNonNull
} = require("graphql");

const BookType = new GraphQLObjectType({
	name: "BookType",
	description: "Book Object",
	fields: {
		id: { type: GraphQLString },
		name: { type: GraphQLString },
		author: { type: GraphQLString }
	}
});

const BookCreateType = new GraphQLInputObjectType({
	name: "BookCreateType",
	description: "Add a book to the list",
	type: BookType,
	fields: {
		name: { type: new GraphQLNonNull(GraphQLString) },
		author: { type: new GraphQLNonNull(GraphQLString) }
	}
});

const BookUpdateType = new GraphQLInputObjectType({
	name: "BookUpdateType",
	description: "Update existing book with id",
	type: BookType,
	fields: {
		id: { type: new GraphQLNonNull(GraphQLString) },
		name: { type: new GraphQLNonNull(GraphQLString) },
		author: { type: new GraphQLNonNull(GraphQLString) }
	}
});

const BookDeleteType = new GraphQLInputObjectType({
	name: "BookDeleteType",
	description: "Delete existing book with id",
	type: BookType,
	fields: {
		id: { type: new GraphQLNonNull(GraphQLString) }
	}
});

module.exports = { BookType, BookCreateType, BookUpdateType, BookDeleteType };
