const userRoute = require("./userRoutes");

module.exports = (app) => {
  app.use("/users", userRoute);
};
