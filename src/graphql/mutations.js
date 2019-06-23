const uuidv4 = require("uuid/v4");
const { GraphQLNonNull, GraphQLObjectType } = require("graphql");
const _ = require("lodash");

const {
	BookType,
	BookCreateType,
	BookUpdateType,
	BookDeleteType
} = require("./types.js");

const Books = require("../../data/books.js");

const BookMutationType = new GraphQLObjectType({
	name: "BookMutationType",
	description: "Add, Update & Delete Query for Books",
	fields: {
		createBook: {
			type: BookType,
			args: {
				input: { type: new GraphQLNonNull(BookCreateType) }
			},
			resolve: (source, { input }, context, field) => {
				let book = [];
				book.id = uuidv4();
				book.name = input.name;
				book.author = input.author;
				Books.push(book);
				return book;
			}
		},
		updateBook: {
			type: BookType,
			args: {
				input: { type: new GraphQLNonNull(BookUpdateType) }
			},
			resolve: (source, { input }) => {
				let book = [];
				book.id = input.id;
				book.name = input.name;
				book.author = input.author;

				let findId = Books.findIndex(b => b.id == input.id);
				let update = Books.splice(findId, 1, book);

				return book;
			}
		},
		deleteBook: {
			type: BookType,
			args: {
				input: { type: new GraphQLNonNull(BookDeleteType) }
			},
			resolve: (source, { input }) => {
				let deleteBook = _.remove(Books, book => book.id == input.id);
				return input;
			}
		}
	}
});

module.exports = BookMutationType;
