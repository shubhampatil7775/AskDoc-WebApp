import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"

import Database from "./Database"
import Post from "./Post"
import Feed from "./Feed"
import Tweet from "./Tweet"
import Answers from "./Answers"
import Coronavirus from "../components/Diseases/Coronavirus"
import LoginDoc from "./LoginDoc"
import Welcome from "./Welcome"
import SignupDoc from "./SignupDoc"
import Abdomen from "./Diseases/Abdomen"
import Fever from "./Diseases/Fever"
import Eyes from "./Diseases/Eyes"
import Gynic from "./Diseases/Gynic"
import Heart from "./Diseases/Heart"
import Kidney from "./Diseases/Kidney"
import Muscle from "./Diseases/Muscle"
import Others from "./Diseases/Others"
import Vaccination from "./Diseases/Vaccination"
import Weight from "./Diseases/Weight"

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100"  >
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Database} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
             
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/data" component={Database} />
              <Route path="/post" component={Feed} />
              <Route path="/tweet" component={Tweet} />
              <Route path="/ans" component={Answers} />
              <Route path="/logindoc" component={LoginDoc} />
              <Route path="/welcome" component={Welcome} />
              <Route path="/signupdoc" component={SignupDoc} />

              <Route path="/covid" component={Coronavirus} />
              <Route path="/abdomen" component={Abdomen} />
              <Route path="/eyes" component={Eyes} />
              <Route path="/fever" component={Fever} />
              <Route path="/gynic" component={Gynic} />
              <Route path="/heart" component={Heart} />
              <Route path="/kidney" component={Kidney} />
              <Route path="/muscle" component={Muscle} />
              <Route path="/others" component={Others} />
              <Route path="/vaccination" component={Vaccination} />
              <Route path="/weight" component={Weight} />

            </Switch>
          </AuthProvider>
        </Router>
      </div>


      
    </Container>
  )
}

export default App
