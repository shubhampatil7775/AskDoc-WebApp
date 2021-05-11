import React , { useState }from 'react'
import Modal from "react-modal";

import 'firebase/firestore';
import "./Database.css"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import poster from '../images/poster.jpg'

import Feed from './Feed';
import Navbars from './Navbars'
import Sidebar from './Sidebar'

Modal.setAppElement("#root");
function Database() {

    return (
        <div  className="main_page">
         <Navbars/>
         <div >
                   <a href="/tweet"> <img class="newphoto" src={poster}/></a>
         </div >
         <div  className="content">
         <Sidebar/>
         <Feed/>
         </div>
     </div>
    );
}

export default Database
