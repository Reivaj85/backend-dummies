let _bookService = null;

class BookController {
    constructor({BookService}) {
        _bookService = BookService;
    }

    async get(req, res){
        const { bookId } = req.params;
        const book = await _bookService.get(bookId);
        return res.send(book);
    }

    async getAll(req, res){
        const books = await _bookService.getAll();
        return res.send(books);
    }

    async getUserBooks(req, res){
        const { userId } = req.params;
        const books = await _bookService.getUserBooks(userId);
        return res.send(books);
    }

    async upvoteBook(req, res){
        const { bookId } = req.params;
        const book = await _bookService.upvoteBook(bookId);
        return res.send(book);
    }

    async downvoteBook(req, res){
        const { bookId } = req.params;
        const book = await _bookService.downvoteBook(bookId);
        return res.send(book);
    }

    async create(req, res){
        const { body } = req;
        const book = await _bookService.create(body);
        return res.status(201).send(book);
    }

    async update(req, res){
        const { body } = req;
        const { bookId } = req.params;

        const bookUpdate = await _bookService.update(bookId, body);
        return res.send(bookUpdate);
    }

    async delete(req, res){
        const { bookId } = req.params;
        const deleteBook = await _bookService.delete(bookId);
        return res.save(deleteBook);
    }
}

module.exports = BookController;