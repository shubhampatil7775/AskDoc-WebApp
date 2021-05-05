import React , { useState }from 'react'
import Modal from "react-modal";

import 'firebase/firestore';
import "./Database.css"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Feed from './Feed';
import Navbars from './Navbars'

Modal.setAppElement("#root");
function Database() {

    return (
        <div>
       
      
         <Navbars/>
         <div >
                   <a href="/tweet"> <img class="newphoto" src="https://rizing.com/wp-content/uploads/2020/03/20102_Rizing-Covid-19_Help_1024x285px_2.jpg"/></a>
         </div>
         
         <Feed/>
     </div>
    );
}

export default Database
