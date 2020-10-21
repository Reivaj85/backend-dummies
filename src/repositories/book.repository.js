const BaseRepository = require("./base.repository");
let _book = null;

class BookRepository extends BaseRepository {
    constructor({ Book }) {
        super(Book);
        _book = Book;
    }

    async getUserBooks(author) {
        return await _book.find({ author });
    }
}

module.exports = BookRepository;