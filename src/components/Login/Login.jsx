import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { loginUser, handleGoogle, handleGithub, profilePhoto } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
        setError("");
      })
      .catch((error) => setError(error.message));
    profilePhoto();
  };

  const googleLogin = () => {
    handleGoogle()
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const githubLogin = () => {
    handleGithub()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container className="w-25 my-5 mx-auto">
      <h4>Please Login</h4>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" required placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" required placeholder="Password" />
        </Form.Group>
        <p>{error}</p>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
        <Form.Text className="text-muted">
          Don't Have an Account? Please <Link to="/register">Register</Link>
        </Form.Text>
      </Form>
      <div className="mt-4">
        <Button className="me-3" onClick={googleLogin}>
          Login with Google
        </Button>
        <Button onClick={githubLogin}>Login with Github</Button>
      </div>
    </Container>
  );
};

export default Login;
