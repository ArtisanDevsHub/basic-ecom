const signupRoute = require("./userRoutes");
const categoryRoute = require("./categoryRoutes")


module.exports = (app) => {
  app.use("/users", signupRoute);
  app.use("/category", categoryRoute)

};
