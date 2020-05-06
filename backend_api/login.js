import  React , { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dbRoute = 'mongodb://<myvu>:<Mtm151782>';




  function Submit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <form onSubmit={Submit}>
        <FormGroup controlId="email" bsStyle="primary" bsSize="large">
          <FormLabel>Email</FormLabel>
          <FormControl
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsStyle="primary" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="small" type="submit">
          Login
        </Button>
        <Button block bsSize="small" type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
}
