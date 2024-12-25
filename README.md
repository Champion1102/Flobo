# Flobo - Kanban Project Management App 🎯

Flobo is a feature-rich, full-stack Kanban project management app built with the latest web technologies. It provides a seamless experience for organizing and managing your projects with support for draggable boards, tasks, notes, dark/light mode, and much more.

## 🚀 Live Demo

Frontend hosted on Vercel: [Flobo](https://flobo-xi.vercel.app/)

Backend hosted on Render : [Flobo](https://flobo.onrender.com/)

## ✨ Features

- **📂 Draggable Boards**: Create and organize boards using React Beautiful DnD.
- **🗂️ Sections & Tasks**: Add sections to boards and manage tasks within each section. Each task has a notepad feature for detailed notes.
- **⭐ Favorites**: Mark your most-used boards as favorites for quick access.
- **🔒 Authentication**: Secure login and signup using JWT and bcrypt.
- **🌗 Dark/Light Mode**: Switch between dark and light themes for a personalized experience.
- **⚡ State Management**: State management for users and boards using Redux.
- **💾 Real-Time Updates**: All changes are stored in real-time using MongoDB.

## 🛠️ Tech Stack

### Frontend
- **⚛️ ReactJS**: Component-based architecture for building the UI.
- **🎨 Material-UI**: Modern and responsive UI components.
- **🖱️ React Beautiful DnD**: Drag-and-drop functionality for boards and tasks.

### Backend
- **🌐 Node.js**: Backend runtime environment.
- **🚀 Express.js**: Web framework for building the RESTful API.
- **🗃️ MongoDB**: NoSQL database for real-time data storage.

### Authentication
- **🔑 JWT (JSON Web Token)**: Secure authentication and session management.
- **🛡️ bcrypt**: Password hashing for enhanced security.

### Hosting
- **⚡ Frontend**: Hosted on Vercel.
- **☁️ Backend**: Hosted on Render.

## ⚙️ Installation

### Prerequisites
Make sure you have the following installed on your system:
- Node.js
- MongoDB
- npm or yarn

### Steps to Run Locally

1. **📥 Clone the repository:**
   ```bash
   git clone https://github.com/Champion1102/Flobo.git
   cd Flobo
   ```

2. **📦 Install dependencies for the frontend:**
   ```bash
   cd client
   npm install
   ```

3. **📦 Install dependencies for the backend:**
   ```bash
   cd ../server
   npm install
   ```

4. **🛠️ Configure environment variables:**
   - Create a `.env` file in the `server` directory.
   - Add the following variables:
     ```env
     MONGO_URL=<your_mongodb_connection_string>
     JWT_SECRET=<your_jwt_secret>
     PORT=5000
     PASSWORD_SECRET_KEY=YourPassKey
     TOKEN_SECRET_KEY=YourSecretTokenKey
     ```

5. **▶️ Start the backend server:**
   ```bash
   cd server
   npm start
   ```

6. **▶️ Start the frontend server:**
   ```bash
   cd client
   npm start
   ```

7. **🌐 Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## 📖 Usage

- **🔐 Authentication**: Signup or login to access your Kanban boards.
- **🛠️ Create Boards**: Add new boards and organize your projects.
- **🗂️ Add Sections & Tasks**: Use sections to categorize tasks and a notepad within each task for additional details.
- **⭐ Favorite Boards**: Mark boards as favorites for quick access.
- **🌗 Theme Switching**: Toggle between dark and light mode from the settings.
- **🖱️ Drag-and-Drop**: Rearrange boards and tasks effortlessly.

## 📁 Project Structure

```
Flobo/
├── client/        # Frontend ReactJS application
│   ├── public/
│   ├── src/
│       ├── api/
│       ├── assets/
│       ├── components/
│       ├── css/
│       ├── pages/
│       ├── redux/
│       ├── utils/
│       ├── App.jsx
│       └── index.jsx
│   └── package.json
├── server/        # Backend Node.js application
│   ├── bin/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│       └── v1/
│           ├── controllers/
│           ├── handlers/
│           ├── models/
│           ├── routes/
│           ├── .env
│           └── app.js
│   └── package.json
└── README.md
```

## 🤝 Contributing

Contributions are welcome! To contribute:
1. **🍴 Fork the repository.**
2. **🌿 Create a new branch** for your feature or bug fix.
3. **💾 Commit your changes and open a pull request.**

## 📜 License

This project is licensed under the [MIT License](LICENSE).

## 💬 Feedback

If you have any feedback or suggestions, feel free to open an issue in the repository or contact me directly.

## 🔗 Links

- **GitHub Repository**: [Flobo Repo](https://github.com/Champion1102/Flobo)
- **Live App**: [Flobo](https://flobo-xi.vercel.app/)


