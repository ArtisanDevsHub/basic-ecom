const signupRoute = require("./userRoutes");

module.exports = (app) => {
  app.use("/users", signupRoute);
};
