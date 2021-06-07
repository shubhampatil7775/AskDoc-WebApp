import React, { useEffect, useState } from "react";
import Box from './../Box'
import Post from "./../Post";
import db from "../../firebase";
import './../Feed.css'
import { useAuth } from "../../contexts/AuthContext"
import Navbars from './../Navbars'
import '../../components/css/Answers.css'
import {Helmet} from 'react-helmet';

function Kidney() {
  const [posts, setPosts] = useState([]);
  const { currentUser, logout } = useAuth()
 

  useEffect(() => {
    db.collection("questions").where("category", "==", "Kidney")
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
        <Helmet>
         <style>{'body { background-color: #E8EBF8  }'}</style>
    </Helmet>
      <Navbars/>
      <h1 class="yourans">Kidney</h1>
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

export default Kidney;
