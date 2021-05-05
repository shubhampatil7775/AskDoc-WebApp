import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import './Box.css'

export default function Box() {

    const { currentUser, logout } = useAuth()
    const history = useHistory()

  return (
    <div className="quoraBox">
      <div className="quoraBox__info">
        <Avatar
        />
         <h5>{currentUser.email}</h5>
      </div>
      <div className="quoraBox__quora">
        <p>What is your question or link?</p>
      </div>
    </div>
  );
}
