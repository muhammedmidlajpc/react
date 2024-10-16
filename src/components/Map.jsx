import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Map() {
  // const { id, name } = useParams();
  const [posts, setPost] = useState([]);
  useEffect(() => {
    //   fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then((res) => {
    //       return res.json();
    //     })
    //     .then((data) => {
    //       setPost(data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(posts);

  return (
    <div style={{ maxHeight: "100vh", overflow: "auto" }}>
      {posts.slice(0, 6).map((post) => {
        return (
          <div key={post.id}>
            <h1 style={{ color: "red" }}>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Map;
