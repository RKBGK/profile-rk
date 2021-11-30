import React from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';

const ContactStyle = styled.div`
  .card-title {
    max-height: 50px;
    color: black;
    font-size: 25px;
    margin-left: 15px;
    align-items: center;
  }
`;
export default function ContactForm() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_emqs4bs',
        'template_b0dw6k8',
        e.target,
        'user_VKlQBD3AKIqIGsx33rcs6',
      )
      .then(
        (result) => {
          console.warn(result.text);
        },
        (error) => {
          console.warn(error.text);
        },
      );
    e.target.reset();
  };
  return (
    <div>
      <ContactStyle>
        <h5 className="card-title">Leave me a message!</h5>
        <div className="container">
          <form onSubmit={sendEmail}>
            <div className="row pt-5 mx-auto">
              <div className="col-8 form-group mx-auto">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="text"
                  className="form-control"
                  name="comment"
                  placeholder="Comment"
                  required
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <textarea
                  className="form-control"
                  id=""
                  cols="30"
                  row="8"
                  name="message"
                  placeholder="Your message"
                />
              </div>
              <div className="col-8 pt-3 mx-auto">
                <input
                  type="submit"
                  className="btn btn-info"
                  value="Send Message"
                />
              </div>
            </div>
          </form>
        </div>
      </ContactStyle>
    </div>
  );
}
