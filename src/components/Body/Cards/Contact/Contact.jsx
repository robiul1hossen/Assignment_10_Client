import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_r61mnnk", "template_ewo6e2v", form.current, "FJfBe1BtkCfMRGz18").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div div className="w-100">
      <h2 className="fs-2  text-center my-5">Contact With Us</h2>

      <div className="d-flex w-100 gap-10  my-5" id="contact">
        <p className="w-50 w-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.0099430603505!2d91.84471337502903!3d22.616103879460763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad2adab0bda18d%3A0x828047889d8a8b4d!2sAzadi%20Bazar%20Road!5e0!3m2!1sen!2sbd!4v1688308845988!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </p>
        <div className="hero w-50 w-100">
          <div className="hero-content w-100">
            <div className="card w-100 shadow-2xl ">
              <form ref={form} onSubmit={sendEmail} className="card-body w-100">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="from_name"
                    placeholder="Name"
                    className="input input-bordered w-100"
                  />
                </div>
                <div className="form-control my-3">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="from_email"
                    placeholder="email"
                    className="input input-bordered w-100"
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    className="textarea textarea-bordered w-100"
                    placeholder="Type Your Message"
                  ></textarea>
                </div>
                <div className="form-control mt-3">
                  <input className="btn btn-outline" type="submit" value="Send" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
