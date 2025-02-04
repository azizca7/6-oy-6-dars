const PostList = ({ posts, deletePost }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Posts</h2>
      {posts.length === 0 ? (
        <p>Post topilmadi!</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="border p-4 my-2">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p>{post.body}</p>
            <button
              onClick={() => deletePost(post.id)}
              className="bg-red-500 text-white px-4 py-2 mt-2"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default PostList;
