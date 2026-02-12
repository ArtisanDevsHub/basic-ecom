const signupRoute = require("./userRoutes");
const categoryRoute = require("./categoryRoutes")
const { errorHandler } = require('../middleware/errorMiddleware');

module.exports = (app) => {
  app.use("/users", signupRoute);
  app.use("/category", categoryRoute)
  app.use('/errorHandler', errorHandler)
};
