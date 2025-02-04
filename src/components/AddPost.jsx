import { useRef } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const AddPost = ({ onPostAdded }) => {
  const titleRef = useRef();
  const bodyRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title: titleRef.current.value,
      body: bodyRef.current.value,
    };

    axios
      .post(API_URL, newPost)
      .then((response) => {
        onPostAdded(response.data);
        titleRef.current.value = "";
        bodyRef.current.value = "";
      })
      .catch((error) => {
        console.error("POST qo'shishda xatolik:", error);
      });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Add Post</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input ref={titleRef} className="border p-2 my-2" placeholder="Title" />
        <textarea
          ref={bodyRef}
          className="border p-2 my-2"
          placeholder="Body"
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPost;
