import React, { useEffect, useState } from "react";
import Box from './Box'
import Post from "./Post";
import db from "../firebase";
import './Feed.css'
import { useAuth } from "../contexts/AuthContext"

function Answers() {
  const [posts, setPosts] = useState([]);
  const { currentUser, logout } = useAuth()
 

  useEffect(() => {
    db.collection("questions").where("email", "==", currentUser.email)
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
    <div className="feed">
      <Box />
      {posts.map(({ id, questions }) => (
        <Post
          key={id}
          Id={id}
          question={questions.question}
          imageUrl={questions.imageUrl}
          timestamp={questions.timestamp}
          users={questions.email}
        />
      ))
      }
    </div>
  );
}

export default Answers;
