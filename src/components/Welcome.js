import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import "./Login.css"
import {Helmet} from 'react-helmet';

export default function Welcome() {
  
  return (
    <div class="playcards" style={{ maxWidth: "400px" }}>
          <Helmet>
         <style>{'body { background-color: #E8EBF8  }'}</style>
    </Helmet>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Welcome to AskDoc</h2>
          <Link to="/login" className="btn btn-primary w-100 mt-3">
            You are a User??
          </Link>
          <Link to="/logindoc" className="btn btn-primary w-100 mt-3">
            Are you a Doc??
          </Link>
        </Card.Body>
      </Card>
    </div>
  )
}
