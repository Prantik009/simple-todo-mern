import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Trash2, Plus } from "lucide-react";

const App = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const backendAPI = "http://localhost:5002/api/todos";
  const fetchTodos = async () => {
    try {
      const res = await axios.get(backendAPI);
      console.log();

      setTodos(res.data);
    } catch (error) {
      console.log("error in get todos", error);
    }
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    try {
      await axios.post(backendAPI, { todo: text });
      setText("");
      fetchTodos();
      toast.success("Todo Added successfuly");
    } catch (error) {
      console.log("error in adding todo", error);
      toast.error("Todo not Added", error.response.data.message);
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`${backendAPI}/${id}`);
    fetchTodos();
  };

  const toggleComplete = async (id) => {
    try {
      await axios.post(`${backendAPI}/${id}`);
      fetchTodos();
    } catch (error) {
      console.error("Toggle failed: ", error);
      toast.error("Failed to Update todo");
    }
  };

  const formatTime = (time) => {
    return new Date(time).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  const formatDate = (date) => {
    const date_given = new Date(date);
    const date_now = new Date();

    const isToday =
      date_given.getDay() === date_now.getDay() &&
      date_given.getMonth() === date_now.getMonth() &&
      date_given.getFullYear() === date_now.getFullYear();

    const yesterday = new Date();
    yesterday.setDate(date_now.getDate() - 1);

    const isYesterday =
      date_given.getDay() === yesterday.getDay() &&
      date_given.getMonth() === yesterday.getMonth() &&
      date_given.getFullYear() === yesterday.getFullYear();

    if (isToday) return "Today";
    if (isYesterday) return "Yesterday";

    return date_given.toLocaleDateString("en-GB");
  };
  return (
    <div className=" min-h-screen bg-gray-800 text-gray-100">
      <div className="flex flex-col w-full items-center justify-center space-y-10 py-10 px-6">
        <h1 className=" text-2xl sm:text-4xl text-center font-bold bg-gradient-to-br from-fuchsia-500 to-indigo-500 via-purple-500 bg-clip-text text-transparent">
          Let’s Get Productive!
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full flex items-center justify-center "
        >
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a todo..."
            className="bg-gray-700 px-8 py-4 sm:py-6 outline-none text-gray-50 rounded-full sm:w-[40%]"
          />
          <button
            type="submit"
            className="ml-6 rounded-full bg-pink-400 text-xl cursor-pointer font-extrabold flex items-center justify-center"
          >
            <Plus className="size-10 p-2" />
          </button>
        </form>

        {todos &&
          todos.map((todo) => (
            <div
              className="flex gap-6 items-center bg-gray-700 rounded-2xl px-5 py-7 backdrop-blur-2xl justify-between w-full sm:w-[60%] relative"
              key={todo._id}
            >
              <div className="flex max-w-[70%] items-center gap-3">
                <input
                  type="checkbox"
                  checked={todo.isComplete}
                  onChange={() => toggleComplete(todo._id)}
                  className="md:size-4 rounded-full"
                />
                <p
                  className={`text-base md:text-2xl ${
                    todo.isComplete
                      ? "line-through text-gray-400"
                      : "text-gray-200"
                  }`}
                >
                  {todo.todo}
                </p>
              </div>
              <button
                onClick={() => handleDelete(todo._id)}
                className="rounded-full size-8 md:size-13 bg-yellow-600 cursor-pointer flex items-center justify-center"
              >
                <Trash2 className=" size-8 md:size-10 p-2" />
              </button>

              <p className="absolute left-5 mb-1 bottom-0 text-sm text-amber-500">
                {formatDate(todo.createdAt)} - {formatTime(todo.createdAt)}
              </p>
            </div>
          ))}

        <p className="fixed w-full bottom-4 left-1/2 transform -translate-x-1/2 text-center font-semibold text-base sm:text-xl">
          Made with 💌 By Prantik Biswas
        </p>
      </div>
    </div>
  );
};

export default App;
