import { useState, useEffect } from "react";

type Response = {
  id: number,
  title: string,
};

const ApiRequest: React.FC = () => {
  const [posts, setPosts] = useState<Response[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ApiRequest;
