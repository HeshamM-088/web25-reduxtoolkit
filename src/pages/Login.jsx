import React, { useState } from "react";
import { Form, ButtonToolbar, Button } from "rsuite";

const Login = () => {
  const [userName, setUserName] = useState("");
  return (
    <div className="flex flex-col justify-center items-center gap-[2em]">
      <h1>Login Page</h1>

      <Form layout="horizontal">
        <Form.Group controlId="name-6">
          <Form.ControlLabel>Username</Form.ControlLabel>
          <Form.Control name="name" />
        </Form.Group>

        <Form.Group controlId="email-6">
          <Form.ControlLabel>Email</Form.ControlLabel>
          <Form.Control name="email" type="email" />
        </Form.Group>

        <Form.Group>
          <ButtonToolbar>
            <Button appearance="primary">Submit</Button>
            <Button appearance="default">Cancel</Button>
          </ButtonToolbar>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Login;
