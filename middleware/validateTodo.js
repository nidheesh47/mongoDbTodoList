const validateTodo = (req, res, next) => {
  const { title, description } = req.body;
  if (!title) {
    return res.status(400).json({ message: "title is required" });
  }
  if (!description) {
    return res.status(400).json({ message: "description is required" });
  }
  next();
};
module.exports = validateTodo;
