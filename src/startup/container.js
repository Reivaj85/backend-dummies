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
    });

module.exports = container;