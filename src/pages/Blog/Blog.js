import { useEffect, useState } from "react";
import Post from "./Post";

const BLOG_DATA = [{ author: "A", date_posted: "xxxx", content: "a" }];

export default function Blog() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    setBlogData(BLOG_DATA);
  }, []);

  const renderBlogs = () => {
    return blogData.map((blog, key) => {
      return <Post key={key} data={blog}></Post>;
    });
  };

  return (
    <div>
      Blog
      {blogData ? renderBlogs() : ""}
    </div>
  );
}
