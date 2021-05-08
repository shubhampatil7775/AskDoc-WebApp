import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import '../components/css/Box.css'
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import Modal from "react-modal";
import {Button, Input } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import firebase from "firebase"
import db, { auth } from "../firebase";


Modal.setAppElement("#root");
export default function Box() {

    const { currentUser, logout } = useAuth()
    const history = useHistory()

    
    const [IsmodalOpen, setIsModalOpen] = useState("");
  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const questionName = input;

  const handleQuestion = (e) => {
    e.preventDefault();
    setIsModalOpen(false);

    if (questionName) {
      db.collection("questions").add({
        email:currentUser.email,
        uid:currentUser.uid,
        question: input,
        imageUrl: inputUrl,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }

    setInput("");
    setInputUrl("");
  };


  return (
    <div className="quoraBox">
      <div className="quoraBox__info">
        <div class="avatars">
        <Avatar />
        </div>
         <h5 class="userbold">{currentUser.email}</h5>
      </div>
      <div className="quoraBox__quora">
      <button  class="btn text-dark" onClick={() => setIsModalOpen(true)}>
               <p class="quorabutton">What is your Question or Link?</p>
             </button>
        <Modal
          isOpen={IsmodalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          shouldCloseOnOverlayClick={false}
          style={{
            overlay: {
              width: 700,
              height: 600,
              backgroundColor: "rgba(0,0,0,0.8)",
              zIndex: "1000",
              top: "50%",
              left: "50%",
              marginTop: "-250px",
              marginLeft: "-350px",
            },
          }}
        >
          <div className="modal__title">
            <h5>Add Question</h5>
            <h5>Share Link</h5>
          </div>
          <div className="modal__info">
            <Avatar
              className="avatar"
              
            />
            <p>{currentUser.email} asked</p>
            <div className="modal__scope">
              <PeopleAltOutlinedIcon />
              <p>Public</p>
              <ExpandMore />
            </div>
          </div>
          <div className="modal__Field">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start your question with 'What', 'How', 'Why', etc. "
            />
            <div className="modal__fieldLink">
              <Link />
              <input
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                type="text"
                placeholder="Optional: inclue a link that gives context"
              ></input>
            </div>
          </div>
          <div className="modal__buttons">
            <button className="cancle" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
            <button type="sumbit" onClick={handleQuestion} className="add">
              Add Question
            </button>
          </div>
        </Modal>

      </div>
    </div>
  );
}
