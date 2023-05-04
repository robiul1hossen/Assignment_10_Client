import React from "react";
import { Button, Container } from "react-bootstrap";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const blogs = () => {
  return (
    <Container>
      <div className="App">
        <div ref={ref}>
          <h2>This is blog component</h2>
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
