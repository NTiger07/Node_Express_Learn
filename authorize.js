function authorize(req, res, next) {
  const { user } = req.query;
  if (user === "John") {
    req.user = [{ name: "John", id: 3 }];
    next();
  } else {
    res.status(401).send("<h1>Unauthorized</h1>");
  }
  next();
}

module.exports = authorize;
