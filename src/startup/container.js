const { createContainer, asClass, asValue, asFunction } = require("awilix");

// Config
const config = require("../config");
const server = require(".");
// Services
const { HomeService, UserService, BookService, CommentService, AuthService } = require("../services");

// Controllers
const { HomeController, UserController, BookController, CommentController, AuthController } = require("../controllers");

// Routes
const { HomeRoutes, UserRoutes, BookRoutes, CommentRoutes, AuthRoutes } = require("../routes/index.routes");
const Router = require("../routes");

// Models
const { User, Book, Comment } = require("../models");

// Repositories
const { UserRepository, BookRepository, CommentRepository} = require("../repositories");

const container = createContainer();

container
    .register({
        server: asClass(server).singleton(),
        router: asFunction(Router).singleton(),
        config: asValue(config)
    })
    .register({
        HomeService: asClass(HomeService).singleton(),
        UserService: asClass(UserService).singleton(),
        BookService: asClass(BookService).singleton(),
        CommentService: asClass(CommentService).singleton(),
        AuthService: asClass(AuthService).singleton()
    })
    .register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton(),
        UserController: asClass(UserController.bind(UserController)).singleton(),
        BookController: asClass(BookController.bind(BookController)).singleton(),
        CommentController: asClass(CommentController.bind(CommentController)).singleton(),
        AuthController: asClass(AuthController.bind(AuthController)).singleton()
    })
    .register({
        HomeRoutes: asFunction(HomeRoutes).singleton(),
        UserRoutes: asFunction(UserRoutes).singleton(),
        BookRoutes: asFunction(BookRoutes).singleton(),
        CommentRoutes: asFunction(CommentRoutes).singleton(),
        AuthRoutes: asFunction(AuthRoutes).singleton()
    })
    .register({
        User: asValue(User),
        Book: asValue(Book),
        Comment: asValue(Comment)
    })
    .register({
        UserRepository: asClass(UserRepository).singleton(),
        BookRepository: asClass(BookRepository).singleton(),
        CommentRepository: asClass(CommentRepository).singleton()
    });

module.exports = container;