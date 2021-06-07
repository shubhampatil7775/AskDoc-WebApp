import React , { useState }from 'react'
import Modal from "react-modal";
import { ExpandMore, Link } from "@material-ui/icons";
import firebase from "firebase"
import db, { auth } from "../firebase";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import { useAuth } from "../contexts/AuthContext"
import {  useHistory } from "react-router-dom"
import 'firebase/firestore';
import "./Database.css"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./Navbar.css"

import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";

import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import { Avatar, Button, Input } from "@material-ui/core";
import Feed from './Feed';
import { Navbar } from 'react-bootstrap';

Modal.setAppElement("#root");
function Navbars() {

    
    const { currentUser, logout } = useAuth()
    const history = useHistory()
    console.log(currentUser);
    const [error, setError] = useState("")
    
  async function handleLogout() {
    
    setError("")
    try {
      await logout()
      history.push("/login")
      window.location.reload(false);
    } catch {
        setError("Failed to log out")
    }
  }
  
 

    const [IsmodalOpen, setIsModalOpen] = useState("");
  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [cat, setCat] = useState("");
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
        category:cat,
        likes:0,
        dislikes:0,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }

    setInput("");
    setInputUrl("");
  };



    return (
        <div class="navbar">
       
        <nav class="navbar navbar-expand fixed-top bold-nav">
           <a class="navbar-brand" href="/"><img class="try"
           src="https://askdoc.zohosites.com/5f5dad04-askdoc-comboblueblack-web_06v03f000000000000001.png"
           alt=""
         /></a>
           
           
           <div class="collapse navbar-collapse" id="navbarSupportedContent">
             <ul class="navbar-nav mr-auto">
               
               <li class="nav-item active">
               <a class="nav-link iconbar text-light" href="/">Home</a>
               </li>
               
               <li class="nav-item">
                 <a class="nav-link text-light" href="/ans">Answers</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link text-light" href="/tweet">Covid Help</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link text-light" href="/ind">About Us</a>
               </li>
               
             </ul>
              
               <button  class="btn btn-outline-info my-2 my-sm-0 text-light" onClick={() => setIsModalOpen(true)}>
               Add Question
             </button>
             
        <Modal
          isOpen={IsmodalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          shouldCloseOnOverlayClick={false}
          style={{
            overlay: {
              width: 700,
              height: 550,
              backgroundColor: "#A2D9F3",
              borderRadius: "25px",
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
          </div>
          <div className="modal__info">
            <Avatar/>
            <p>{currentUser.email}</p>
          </div>
          <div className="modal__Field">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Enter your question"
            />
            <br/>
            <p>Select Category</p>
             <button class="dropbut"
              value={cat}
              onClick={(e) => setCat(e.target.value)}
              
            >
            <select >
            <option>General</option>
            <option>Covid</option>
            <option>Covid Vaccination</option>
            <option>Fever,Cough</option>
            <option>Heart</option>
            <option>Abdomen</option>
            <option>Weight</option>
            <option>Eyes,ear,nose</option>
            <option>Muscle Pain</option>
            <option>Gynic</option>
            <option>Kidney</option>
            <option>Other</option>
            
            </select>
            </button>
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

             <div class="avatar">
            <Avatar  onClick={handleLogout}>
            <Button variant="link">
             Log Out
            </Button>
        </Avatar>
        
               </div>
              
           </div>
         </nav>
         
        
     </div>
    );
}

export default Navbars
