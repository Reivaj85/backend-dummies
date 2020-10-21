const { createContainer, asClass, asValue, asFunction } = require("awilix");

// Config
const config = require("../config");
const server = require(".");
// Services
const { HomeService } = require("../services");

// Controllers
const { HomeController } = require("../controllers");

// Routes
const { HomeRoutes } = require("../routes/index.routes");
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
        HomeService: asClass(HomeService).singleton()
    })
    .register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton()
    })
    .register({
        HomeRoutes: asFunction(HomeRoutes).singleton()
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