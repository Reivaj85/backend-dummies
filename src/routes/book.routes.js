const { Router } = require("express");

module.exports = function ({ BookController }){
    const router = Router();

    router.get("", BookController.getAll);
    router.get("/:bookId", BookController.get);
    router.get("/:userId/all", BookController.getUserBooks);

    router.post("", BookController.create);
    router.patch("/:bookId", BookController.update);
    router.patch("/:bookId", BookController.delete);

    router.post("/:bookId/upvote", BookController.upvoteBook);
    router.post("/:bookId/downvote", BookController.downvoteBook);

    return router;
}