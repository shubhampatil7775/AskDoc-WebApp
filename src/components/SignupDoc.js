import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Container } from "react-bootstrap"
import firebase from "firebase";
import {Helmet} from 'react-helmet';
import "./SignupDoc.css"

export default function SignupDoc() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const username=useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const { currentUser, logout } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  function setfield(){
   console.log('hello')
  }

  if(currentUser)
  {
    firebase.auth().currentUser.sendEmailVerification().then(function() {
      console.log("send")
    }).catch(function(error) {
      console.log(error)
    });
    
  }

  if(currentUser)
  {
    var names=document.getElementById("names");
    var qual=document.getElementById("qual");
    var exp=document.getElementById("exp");
    var city=document.getElementById("city");
   
    var tot=names.value+" *"+qual.value+" *"+exp.value+" *"+city.value;
    console.log(tot)
    firebase.auth().currentUser.updateProfile({
      displayName: tot
      }).then(function () {
        console.log("Updated");
      }, function (error) {
        console.log("Error happened");
      });
  }
 

  return (
    
    <>
       <Helmet>
         <style>{'body { background-color: #E8EBF8  }'}</style>
    </Helmet>
    <div class="playcards" style={{ maxWidth: "400px" }}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up Doc</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
          <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" id="names" required />
            </Form.Group>

            <Form.Group >
              <Form.Label>Qualification In</Form.Label>
              <Form.Control type="text" id="qual" required />
            </Form.Group>

            <Form.Group >
              <Form.Label>Experience</Form.Label>
              <Form.Control type="text" id="exp" required />
            </Form.Group>

            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control type="text" id="city" required />
            </Form.Group>

            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
            </Form.Group>
            <Form.Group >
                <Form.Label>Degree Link:</Form.Label>
                <Form.Control type="url" required/>
                </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      </div>
    </>
   
  )
}
