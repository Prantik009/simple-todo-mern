import Todo from "../model/todo_model.js";

export const getTodos = async (req, res) => {
  const todos = await Todo.find().sort({ createdAt: -1 });
  res.json(todos);
};

export const setTodos = async (req, res) => {
  const { todo } = req.body;

  if (!todo) return;
  const newTodo = new Todo({
    todo,
  });

  if (newTodo) {
    const msg = await newTodo.save();
    res.status(201).json({ message: "Todo added successfuly" });
  } else {
    console.log("Error in todoController");
    res.status(400).json({ message: "Can't add todo." });
  }
};

export const deleteTodos = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Todo Deleted Successfuly" });
  } catch (error) {
    console.log("Error is delete message: ", error);
    res.status(500).json({ message: "Todo not deleted" });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) res.status(404).json({ message: "Todo not found"})

    todo.isComplete = !todo.isComplete;
    const updated = await todo.save();
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Error in Update Todo" });
  }
};
