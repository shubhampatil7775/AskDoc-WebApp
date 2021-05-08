import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import './Post.css'
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import { useDispatch, useSelector } from "react-redux";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

import Modal from "react-modal";
import db from "../firebase";
import { selectQuestionId, setQuestionInfo } from "../features/questionSlice";
import firebase from "firebase";
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { selectUser } from "../features/userSlice";

import FontAwesome from 'react-fontawesome'



function Post({ Id, question, imageUrl, timestamp, users,category }) {
  
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
  
    const dispatch = useDispatch();
  const [IsmodalOpen, setIsModalOpen] = useState("");
  const questionId = useSelector(selectQuestionId);
  const [answer, setAnswer] = useState("");
  const [getAnswers, setGetAnswers] = useState([]);
  var tempuse=""
  var temp=""
  var again=-1
  useEffect(() => {
    if (questionId) {
      db.collection("questions")
        .doc(questionId)
        .collection("answer")
        .orderBy("likes", "desc")
        .onSnapshot((snapshot) =>
          setGetAnswers(
            snapshot.docs.map((doc) => ({ id: doc.id, answers: doc.data() }))
          )
          
        );

       

       
    }
  }, [questionId]);

 console.log(currentUser)

 function setLike(idsk){
  db.collection("questions")
  .doc(questionId).collection("answer").doc(idsk)
  .get()
  .then(function(doc) {
    if (doc.exists) {
      loops(idsk,doc.data().likes);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch(function(error) {
    console.log("Error getting document:", error);
  });
 
 }

 function loops(ids,lik){
  db.collection("questions").doc(questionId).collection("answer").doc(ids).update({
    likes:lik+1
  })
 }



 
 function setDisLike(idsk){
  db.collection("questions")
  .doc(questionId).collection("answer").doc(idsk)
  .get()
  .then(function(doc) {
    if (doc.exists) {
      Disloops(idsk,doc.data().dislikes);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch(function(error) {
    console.log("Error getting document:", error);
  });
  console.log(idsk)
 }

 function Disloops(ids,lik){
  db.collection("questions").doc(questionId).collection("answer").doc(ids).update({
    dislikes:lik+1
  })
 }

  const handleAnswer = (e) => {
    e.preventDefault();

    if (questionId) {
      temp=db.collection("questions").doc(questionId).collection("answer").add({
        email:currentUser.email,
        uid:currentUser.uid,
        answer: answer,
        questionId: questionId,
        likes:0,
        dislikes:0,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
  
    console.log(temp);
    setAnswer("");
    setIsModalOpen(false);
  };


  return (
    <div
      className="post"
      className="post"
      onClick={() =>
        dispatch(
          setQuestionInfo({
            questionId: Id,
            questionName: question,
          })
        )
      }
    >
        <div >
    
       
    <div class="card">
      <div class="postda">
        <div class="card-header">
        <div className="post__info ">
        <Avatar/>
        <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
        <div class="moveright">
          {currentUser.displayName=="Doc"?
        <button class="btn btn-primary"
            onClick={() => setIsModalOpen(true)} >
            Answer
          </button>:<p>"</p>}
          </div>
      </div>
      </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">  <p>{question}</p> </h5>
        </div>
        <div class="catpos"><b>{category}</b></div>
      </div>

</div>
      
      
      <div className="post__body">
        <div className="post__question">
          
        
          <Modal
            isOpen={IsmodalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            shouldCloseOnOverlayClick={false}
            style={{
              overlay: {
                width: 680,
                height: 550,
                backgroundColor: "rgba(0,0,0,0.8)",
                zIndex: "1000",
                top: "50%",
                left: "50%",
                marginTop: "-250px",
                marginLeft: "-350px",
              },
            }}
          >
            <div className="modal__question">
              <h1>{question}</h1>
              <p>
                asked by{" "}
                <span className="name">
                  {currentUser.displayName}
                </span>{" "}
                {""}
                on{" "}
                <span className="name">
                  {new Date(timestamp?.toDate()).toLocaleString()}
                </span>
              </p>
            </div>
            <div className="modal__answer">
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter Your Answer"
                type="text"
              />
            </div>
            <div className="modal__button">
              <button className="cancle" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button type="sumbit" onClick={handleAnswer} className="add">
                Add Answer
              </button>
            </div>
          </Modal>
        </div>
        <div >
       
          {getAnswers.map(({ id, answers }) => (
            <p  key={id} style={{ position: "relative", paddingBottom: "5px" }}>
              {Id === answers.questionId ? (
               <div className="post__answer">
                  <div class="card ">
                    
                <span >
                <div class="postdaa">
                <div class="card-header">
                  <div class="post__info">
                  <Avatar/>
                      {answers.email}{" "}
                      <small> {new Date(answers.timestamp?.toDate()).toLocaleString()}</small>
                      
                 </div>
                 </div>
                 </div>
                    <br/>
                  {answers.answer}
                  <br />
                  
                  
              <div class="row">
              <div class="col-sm-12 text-center">
              
              <button id="btnSearch" class="btn btn-primary  "  onClick={()=>setLike(id)} ><p class="inbutton">{answers.likes}</p><ThumbUpIcon></ThumbUpIcon></button>
                  
              <button id="btnClear" class="btn btn-danger "   onClick={()=>setDisLike(id)} ><p class="inbutton">{answers.dislikes}</p><ThumbDownIcon/></button>
                  
              </div>
          </div>
                  
                </span>
                
                </div>
                    </div>
              ) : (
                ""
              )}
            </p>
          ))}
        </div>
       

        <img src={imageUrl} alt="" />
      </div>
      <div className="post__footer">
        <div className="post__footerAction">
      
          <ArrowDownwardOutlinedIcon />
        
        </div>

        
        <div className="post__footerLeft">
        
        </div>
      </div>
    </div>
  );
}

export default Post;
