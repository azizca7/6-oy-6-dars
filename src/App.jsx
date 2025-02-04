import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import AddPost from "./components/AddPost";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/Loader";
const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Postlar yuklanmadi!");
        setLoading(false);
      });
  }, []);

 const handleDeletePost = (id) => {
   axios
     .delete(`${API_URL}/${id}`)
     .then(() => {
       setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
       toast.success("Post o'chirildi");
     })
     .catch(() => toast.error("ERROR: Post o'chirilmadi!"));
 };


  const handleAddPost = (newPost) => {
    axios
      .post(API_URL, newPost)
      .then((response) => {
        setPosts([response.data, ...posts]);
        toast.success("Post qo'shildi!");
      })
      .catch(() => toast.error("ERROR: Post qo'shilmadi!"));
  };

  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            loading ? (
              <Loader />
            ) : (
              <PostList posts={posts} deletePost={handleDeletePost} />
            )
          }
        />
        <Route path="/add" element={<AddPost onPostAdded={handleAddPost} />} />
      </Routes>
    </Router>
  );
};

export default App;