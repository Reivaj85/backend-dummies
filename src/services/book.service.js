const BaseService = require("./base.service");
const { BadRequest, NotFound } = require("../helpers/index")

let _bookRepository = null;

class BookService extends BaseService {
    constructor({BookRepository}) {
        super(BookRepository);
        _bookRepository = BookRepository;
    }

    async getUserBooks(author){
        if(!author){
            throw new BadRequest("iduser must be sent");
        }
        return await _bookRepository.getUserBooks(author);
    }

    async upvoteBook(bookId){
        if(!bookId){
            throw new BadRequest("bookId must be sent");
        }
        const book = await _bookRepository.get(bookId);
        if(!book){
            throw new NotFound(bookId + " not found");
        }
        book.upvotes.push(true);
        return await _bookRepository.update(bookId, { upvotes: book.upvotes });
    }
    async downvoteBook(bookId){
        if(!bookId){
            throw new BadRequest("bookId must be sent");
        }
        const book = await _bookRepository.get(bookId);
        if(!book){
            throw new NotFound(bookId + " not found");
        }
        book.downvotes.push(true);
        return await _bookRepository.update(bookId, { downvotes: book.downvotes });
    }
}

module.exports = BookService;