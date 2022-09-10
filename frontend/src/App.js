import logo from './logo.svg';
import './App.css';
import { Route, Routes } from '../node_modules/react-router-dom/index';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PostListPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/@:username" element={<PostListPage />} />
      <Route path="/@:username/:postId" element={<PostListPage />} />
    </Routes>
  );
}

export default App;
