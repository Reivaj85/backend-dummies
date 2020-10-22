let _commentService = null;
class CommentController {
    constructor({ CommentService }) {
        _commentService = CommentService;
    }

    async get(req, res) {
        const { commentId } = req.params;
        const comment = await _commentService.get(commentId);
        return res.send(comment);
    }

    async getCommentsByBook(req, res) {
        const { bookId } = req.params;
        const commentsByBook = await _commentService.getBookComments(bookId);
        return res.send(commentsByBook);
    }

    async create(req, res) {
        const { body } = req;
        const { bookId } = req.params;
        const comment = await _commentService.createComment(body, bookId);
        return res.status(201).send(comment);
    }

    async update(req, res){
        const { body } = req;
        const { commentId } = req.params;
        const updateComment = await _commentService.update(commentId, body);
        return res.send(updateComment);
    }

    async delete(req, res){
        const { commentId } = req.params;
        const commentDelete = await _commentService.delete(commentId);
        return res.send(commentDelete);
    }
}

module.exports = CommentController;