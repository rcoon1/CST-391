import React, { useState } from 'react';
import Post from './Post';
import AddPost from './AddPost';

function App() {
  const [postList, setPostList] = useState([
    {
      postNumber: 0,
      text: "A short psychic broke out of jail, she was a small medium at large.",
    },
    {
      postNumber: 1,
      text: "The worst thing about prison was the dementors.",
    },
    {
      postNumber: 2,
      text: "I’m not superstitious but I am a little stitious.",
    },
  ]);
  const handleDeletePost = (id) => {
    let updatedPostList = postList.filter(post => post.postNumber !== id);

    setPostList(updatedPostList);
  }

  const [postId, setPostId] = useState(3);

  const handleAddPost = (newText) => {
    let newPost = {
      postNumber: postId,
      text: newText
    };
    setPostList(postList => [...postList, newPost]);
    setPostId(postId+1);
  }

  const posts = postList.map((post) => (
    <Post key={post.postNumber} text={post.text} id={post.postNumber} onDelete={handleDeletePost}/>
  ));

  return (
    <div>
      {posts}
      <AddPost onAdd={handleAddPost} />
    </div>);
};

export default App;