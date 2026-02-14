const signupRoute = require("./userRoutes");
const loginRoute = require("./userRoutes");
const categoryRoute = require("./categoryRoutes");
const errorHandler = require("../middleware/errorMiddleware");

module.exports = (app) => {
  app.use("/users", signupRoute);
  app.use("/users", loginRoute);
  app.use("/category", categoryRoute);
  app.use("/errorHandler", errorHandler);
};
