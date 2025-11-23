import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Post from './pages/Post';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:slug" element={<Post />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;

