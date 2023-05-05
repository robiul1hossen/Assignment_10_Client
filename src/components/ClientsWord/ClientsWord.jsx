import React from "react";
import { Carousel } from "react-bootstrap";

const ClientsWord = () => {
  return (
    <div
      style={{
        marginTop: "100px",
        marginBottom: "200px",
        backgroundColor: "#e0e1e1",
        padding: "25px",
        borderRadius: "10px",
      }}
    >
      <div className="my-5">
        <p>
          <small className=" text-center d-block">Clients words</small>
        </p>
        <h2 className="text-center  mt-3 mb-3">What our clients say</h2>
        <p className="text-center   mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br /> ut
          labore et dolore magna aliqua.
        </p>
      </div>
      <Carousel>
        <Carousel.Item>
          <div className="d-lg-flex gap-4">
            <p style={{ fontSize: "24px", lineHeight: "1.5", color: "#111" }}>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.”
              <p className="fs-2 mt-4">David Adam</p>
            </p>
            <img
              className="d-block w-lg-50 w-75"
              src=" https://i.ibb.co/10QWDs5/download.png"
              alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-lg-flex gap-4">
            <p style={{ fontSize: "24px", lineHeight: "1.5", color: "#111" }}>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt sapien sit amet nibh
              consequat, a consequat arcu venenatis. Vivamus eget libero ut ipsum aliquam laoreet. Nullam vel
              nisi ut augue feugiat rhoncus. ”<p className="fs-2 mt-4">Sohn Smith</p>
            </p>
            <img
              className="d-block w-lg-50 w-75"
              src=" https://i.ibb.co/THxHgRj/choose.png"
              alt="Second slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-lg-flex gap-4">
            <p style={{ fontSize: "24px", lineHeight: "1.5", color: "#111" }}>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin pharetra felis
              nec rhoncus. Nam et varius magna, sit amet scelerisque mi. In sit amet eros vel risus porttitor
              convallis. Curabitur in massa in magna posuere viverra. Sed convallis justo eu ”
              <p className="fs-2 mt-4">Christopher Nolan</p>
            </p>
            <img
              className="d-block w-lg-50 w-75"
              src=" https://i.ibb.co/whkZ5Pb/image6.png"
              alt="Third slide"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ClientsWord;
