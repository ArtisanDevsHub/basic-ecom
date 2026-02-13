
const errorHandler = (err, req, res, next) => {
  console.error("Error:", err.stack || err);

  res.status(res.statusCode !== 200 ? res.statusCode : 500).json({
    message: err.message || "Server Error",
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

// ✅ Export it correctly as a single function
module.exports = errorHandler;