import React from "react";
import { Button, Container } from "react-bootstrap";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const blogs = () => {
  return (
    <Container className="w-50">
      <div className="App">
        <div ref={ref}>
          <div>
            <h4>1. The differences between uncontrolled and controlled components.</h4>
            <p>
              uncontrolled components are managed by external libraries or frameworks and cannot be fully
              customized, while controlled components are developed in-house and can be fully customized and
              controlled by the developer.
            </p>
          </div>
          <div>
            <h4>2. How to validate React props using PropTypes</h4>
            <p>
              React provides a utility library called PropTypes that allows you to define the type and shape
              of props that a component should receive. This can help you catch errors early on by checking if
              the props passed to a component match the expected type and structure.
            </p>
          </div>
          <div>
            <h4>3. The difference between nodejs and express js.</h4>
            <p>
              Node.js is a server-side JavaScript runtime environment that provides a platform for building
              scalable, networked applications, while Express.js is a web application framework built on top
              of Node.js that provides a set of high-level features and utilities for building web
              applications and APIs.
            </p>
          </div>
          <div>
            <h4>4.What is a custom hook, and why will you create a custom hook?</h4>
            <p>
              A custom hook is a function in React that allows you to reuse stateful logic across multiple
              components. Custom hooks allow you to encapsulate complex logic and reuse it across different
              components without having to repeat the code. Custom hooks are created using the use prefix and
              follow the same rules as React's built-in hooks. They can call other hooks or use other
              functions, and they can also return data, just like regular functions.
            </p>
          </div>
        </div>
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <Button className="my-4" onClick={toPdf}>
              Download Pdf
            </Button>
          )}
        </Pdf>
      </div>
    </Container>
  );
};

export default blogs;
