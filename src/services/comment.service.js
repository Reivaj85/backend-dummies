const BaseService = require("./base.service");
const { BadRequest, NotFound } = require("../helpers/index");
let _bookRepository = null;
let _commentRepository = null;

class CommentService extends BaseService {
    constructor({ CommentRepository, BookRepository }) {
        super(BookRepository);
        _bookRepository = BookRepository;
        _commentRepository = CommentRepository;
    }

    async getBookComments(bookId){
        if(!bookId){
            throw new BadRequest("bookId must be sent");
        }
        const book = await _bookRepository.get(bookId);
        if(!book){
            throw new NotFound(bookId + " : Not Exists.");
        }
        const { comments } = book;
        return comments;
    }

    async createComment(comment, bookId){
        if(!bookId){
            throw new BadRequest("bookId must be sent");
        }
        const book = await _bookRepository.get(bookId);
        if(!book){
            throw new NotFound(bookId + " : Not Exists.");
        }
        const createComment = _commentRepository.create(comment);
        book.comments.push(createComment);

        return await _bookRepository.update(bookId, { comments: book.comments });
    }
}

module.exports = CommentService;