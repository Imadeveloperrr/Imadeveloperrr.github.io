import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Layout from './components/common/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Post from './pages/Post';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:slug" element={<Post />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
