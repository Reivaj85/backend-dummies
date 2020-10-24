const { Router } = require("express");

module.exports = function ({ CommentController }){
    const router = Router();

    router.get("/:commentId", CommentController.get);
    router.get("/book/:bookId", CommentController.getCommentsByBook);
    router.post("/:bookId", CommentController.create);
    router.patch("/:commentId", CommentController.update);
    router.delete("/:commentId", CommentController.delete);

    return router;
};