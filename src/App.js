import React, { useEffect, useState } from "react";
import PostDetail from "./PostDetail";

function App() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([])
  const [postId, setPostId] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then((response) => response.json())
      .then(setPosts)
      .catch((error) => {
        console.log(error)
      });
  }, []);

useEffect(() => {
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
.then((response) => response.json())
.then((data) => setComments(data))
//.then(setComments)
.catch((error) => {
  console.log(error)
})
console.log(postId)
}, [postId])

return (
  <div>
{posts.map((post) => (
  <list>
    
<label>Title: {post.title} </label>
<label onClick = {() => setPostId(post.id)}>Body: {post.body} </label>
  </list>

))}
</div>
)
 
}

export default App;