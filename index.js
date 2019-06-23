const express = require("express");
const graphQLHttp = require("express-graphql");
const BooksSchema = require("./src/graphql/schema");
const PORT = 8000;
const app = express();

app.use(
	"/",
	graphQLHttp({
		schema: BooksSchema,
		graphiql: true
	})
);

app.listen(PORT, () => {
	console.log("working on PORT : ", PORT);
});
