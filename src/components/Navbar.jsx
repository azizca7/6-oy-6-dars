import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <Link to="/" className="text-lg font-bold">
        Home
      </Link>
      <Link to="/add" className="bg-blue-500 px-4 py-2 rounded">
        Add Post
      </Link>
    </nav>
  );
};

export default Navbar;
