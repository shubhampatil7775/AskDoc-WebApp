import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import firebase from "firebase";
import {Helmet} from 'react-helmet';

export default function LoginDoc() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const { currentUser, logout } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
      
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }
console.log(currentUser)
/*if(currentUser)
{
    firebase.auth().currentUser.updateProfile({
      emailVerified: "Doc"
      }).then(function () {
        console.log("Updated");
      }, function (error) {
        console.log("Error happened");
      });
      
}
*/


  return (
    <>
          <Helmet>
         <style>{'body { background-color: #E8EBF8  }'}</style>
    </Helmet>
    <div class="playcards" style={{ maxWidth: "400px" }}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In Doc</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
          </Form>
          
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signupdoc">Sign Up</Link>
      </div>
      <div className="w-100 text-center mt-2">
            <Link to="/welcome">Welcome Page</Link>
          </div>
          </div>
    </>
  )
}
