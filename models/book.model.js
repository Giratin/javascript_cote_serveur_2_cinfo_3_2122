
const Book = function (
    id, title, date, nbre, image, description, authors, categories
)  {
    this.id = id;
    this.title= title;
    this.publishDate = date;
    this.pageCount = nbre;
    this.image = image;
    this.description = description;
    this.authors = authors;
    this.categories = categories;
}

module.exports.Book = Book;