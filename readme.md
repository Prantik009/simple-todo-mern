# 📝 Simple Todo App

A minimalistic Todo application built using **React.js** (Frontend) and **Node.js + Express** (Backend) with MongoDB for data storage. Users can add, view, mark as complete and delete tasks seamlessly.

---

## 🚀 Features

- ✅ Add new tasks
- 📋 View all todos
- ❌ Delete completed or unwanted todos
- 🔄 Fully synced with MongoDB database
- 📡 Fetch tasks from the backend using REST API

---

## 🧱 Tech Stack

| Tech        | Description                   |
|-------------|-------------------------------|
| React.js    | Frontend UI                   |
| Node.js     | Backend runtime               |
| Express.js  | API framework                 |
| MongoDB     | NoSQL database (Mongoose ORM) |
| Axios       | HTTP requests from frontend   |
| Toastify    | Notifications (optional)      |

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Prantik009/simple-todo-mern.git
cd todo-app
```

### 2. Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file in `backend/` and add:
```
MONGO_URI=your_mongodb_uri
PORT=5002
```

Start the backend server:
```bash
npm start
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

---

## 🌐 API Endpoints

| Method | Endpoint           | Description       |
|--------|--------------------|-------------------|
| GET    | `/api/todos`       | Fetch all todos   |
| POST   | `/api/todos`       | Create new todo   |
| POST   | `/api/todos/:id`   | Update a todo     |
| DELETE | `/api/todos/:id`   | Delete a todo     |

---

## 🎯 Sample Todos to Try

- Finish reading *Atomic Habits*
- Push code to GitHub
- Drink 2L of water
- Fix login form validation
- Walk for 30 minutes

---

## 📸 Preview 
![Desktop View](/frontend/public/desktop.png)
![Mobile View](/frontend/public/mobile.png)
![Mark Todo Complete View](/frontend/public/complete.png)

---

## 📬 Contact

Built with ❤️ by Prantik Biswas  
📧 Email: biswasritam5.13@gmail.com 
🌐 LinkedIn: https://www.linkedin.com/in/prantik-biswas-a74ab4347/

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).