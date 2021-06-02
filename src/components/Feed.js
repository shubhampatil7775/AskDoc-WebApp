import React, { useEffect, useState } from "react";
import Box from './Box'
import Post from "./Post";
import db from "../firebase";
import './Feed.css'
import {Helmet} from 'react-helmet';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("questions")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            questions: doc.data(),
          }))
        )
      );
      
  }, []);

  return (
    <div className="feed" style={{marginTop:-150}}>
      <Helmet>
         <style>{'body { background-color: #E8EBF8  }'}</style>
    </Helmet>
      <Box />
      {posts.map(({ id, questions }) => (
        <Post
          key={id}
          Id={id}
          question={questions.question}
          imageUrl={questions.imageUrl}
          timestamp={questions.timestamp}
          users={questions.email}
          category={questions.category}
          likes={questions.likes}
          dislikes={questions.dislikes}
        />
      ))
      }
    </div>
  );
}

export default Feed;
