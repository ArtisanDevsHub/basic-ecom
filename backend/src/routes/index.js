const userRoute = require("./userRoutes");
const categoryRoute = require("./categoryRoutes")


module.exports = (app) => {
  app.use("/users", userRoute);
  app.use("/category", categoryRoute)
};
