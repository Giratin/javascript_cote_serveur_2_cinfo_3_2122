// function showDummyMessage(req, res) {
//     res.json({ message : "called from controller"  })
// }

// module.exports = {
//     showData: showDummyMessage
// }
// module.exports.showData = showDummyMessage;

const fs = require("fs");
const { Book } = require("../models/book.model");

module.exports = {
    getAllBooks: function (req, res) {
        fs.readFile("list.json", function (error, buffer) {
            const data = JSON.parse(buffer)["books"];
            let books = [];
            for (let i = 0; i < data.length; i++) {
                let livreJSON = data[i];
                let book = new Book(
                    livreJSON.id,
                    livreJSON.title,
                    livreJSON.publishedDate.date,
                    livreJSON.pageCount,
                    livreJSON.thumbnailUrl,
                    livreJSON.shortDescription,
                    livreJSON.authors,
                    livreJSON.categories
                );
                books.push(book);
            }
            res.render("list", { livres: books });
        });
    },
    getOneById: function (req, res) {
        // /getOne/:id
        const { id } = req.params; // const id = req.params.id
        const books = JSON.parse(fs.readFileSync("list.json")).books;

        const book = books.find(function (el) {
            return el.id == id;
        });

        let livre = new Book(
            book.id,
            book.title,
            book.publishedDate.date,
            book.pageCount,
            book.thumbnailUrl,
            book.shortDescription,
            book.authors.join(", "),
            book.categories.join(", ")
        );

        res.render("detail", { livre : livre });

    }
}