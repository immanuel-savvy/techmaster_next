"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import Body_text from "../components/body_text";
import Loadindicator from "../components/loadindicator";
import Preview_image from "../components/preview_image";
import { email_regex } from "../libs/functions";
import { post_request } from "../libs/services";
import { Atag, Ptag } from "./student_loan_calculator";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      fullname: "",
      email: "",
    };
  }

  submit = async () => {
    let { fullname, message, email } = this.state;
    this.setState({ loading: true });

    let res = await post_request("new_message", { fullname, email, message });

    this.setState({
      alert:
        res && res.sent
          ? "Thanks for reaching out to us, you will receive feedback from us soon via email"
          : "Cannot post your message at this time, try again.",
    });
    this.reset_state();
  };

  reset_state = () =>
    this.setState({ email: "", fullname: "", loading: false, message: "" });

  render() {
    let { fullname, message, email, alert, loading } = this.state;
    let { data } = this.props;

    let {
      title,
      sub_text,
      body_image,
      body_image_hash,
      body_text,
      image,
      image_hash,
      tool,
    } = data;

    return (
      <section className="section">
        <div className="top">
          <div className="text">
            <h3>{title}</h3>

            <ReactMarkdown components={{ p: Ptag, a: Atag }}>
              {sub_text}
            </ReactMarkdown>
          </div>
          <div>
            <Preview_image
              image={image || `${tool}.png`}
              image_hash={image_hash}
              class_name="img"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="content" style={{ marginTop: 40 }}>
          <form action="">
            <label for="port number">Fullname:</label>
            <input
              type="text"
              name=""
              value={fullname}
              placeholder=""
              id=""
              onChange={({ target }) =>
                this.setState({ fullname: target.value, alert: "" })
              }
            />

            <label for="port number">Email:</label>
            <input
              type="email"
              value={email}
              placeholder=""
              id=""
              onChange={({ target }) =>
                this.setState({ email: target.value, alert: "" })
              }
            />

            <label for="port number">Message:</label>
            <textarea
              name=""
              value={message}
              rows="7"
              placeholder="Type your message here..."
              style={{
                width: "100%",
                marginBottom: 20,
                padding: 14,
                borderRadius: 10,
              }}
              id=""
              onChange={({ target }) =>
                this.setState({ message: target.value, alert: "" })
              }
            ></textarea>

            {alert ? (
              <div className="alert alert-info" role="alert">
                {alert}
              </div>
            ) : null}

            <span className="fl">
              {loading ? (
                <Loadindicator no_text />
              ) : (
                <button
                  onClick={
                    email_regex.test(email) &&
                    message.trim() &&
                    fullname.trim() &&
                    this.submit
                  }
                >
                  Submit
                </button>
              )}
              <a href="#" className="cancel" onClick={this.clear}>
                Clear <i className="material-icons-outlined">close</i>
              </a>
            </span>
          </form>

          <Body_text
            title={title}
            tool={tool}
            body_text={body_text}
            image={body_image}
            image_hash={body_image_hash}
          />
        </div>
      </section>
    );
  }
}

export default Contact;
