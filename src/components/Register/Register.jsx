import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser, handleGoogle, handleGithub, profilePhoto } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [disable, setDisable] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const accept = form.accept.checked;

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        profilePhoto(result.user, name, photo);
        setError("");
        form.reset();
        setSuccess("user has created successfully");
      })
      .catch((error) => {
        setError(error);
        setSuccess("");
      });
  };

  return (
    <Container className="w-25 my-5 mx-auto">
      <h4>Please Register</h4>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" required placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" required placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" required placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Photo URL </Form.Label>
          <Form.Control type="text" name="photo" required placeholder="Photo URL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            name="accept"
            label={
              <>
                Accept <Link to="/terms">Our Terms And Conditions</Link>
              </>
            }
          />
        </Form.Group>
        <p>{error.message}</p>
        <p>{success}</p>
        <Button variant="primary" type="submit">
          Register
        </Button>
        <br />
        <Form.Text className="text-muted">
          Already Have an Account? Please <Link to="/login">Login</Link>
        </Form.Text>
      </Form>
      <div className="mt-4">
        <Button className="me-3" onClick={handleGoogle}>
          Login with Google
        </Button>
        <Button onClick={handleGithub}>Login with Github</Button>
      </div>
    </Container>
  );
};

export default Register;
