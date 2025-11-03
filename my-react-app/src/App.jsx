import { Routes, Route } from "react-router-dom";
import TasksPage from "./pages/TasksPage";
import PostsPage from "./pages/PostsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TasksPage />} />
      <Route path="/posts" element={<PostsPage />} />
    </Routes>
  );
}

export default App;