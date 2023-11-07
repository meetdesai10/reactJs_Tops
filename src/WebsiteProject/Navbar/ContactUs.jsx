import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();
  let [data, setData] = useState({
    name: "",
    email: "",
    messege: "",
    mobile: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eyjwsap",
        "template_fejnhim",
        form.current,
        "bljxQ1SCtlbvaPEOi"
      )
      .then(
        (result) => {
          alert("Messege sent");
        },
        (error) => {
          alert("Messege sent");
          alert("Something Went Wrong");
        }
      );
    setData({
      name: "",
      email: "",
      messege: "",
      mobile: "",
    });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input
        type="text"
        name="user_name"
        value={data.name}
        onChange={(e) => setData({ name: e.target.value })}
      />
      <label>Email</label>
      <input
        type="email"
        name="user_email"
        value={data.email}
        onChange={(e) => setData({ email: e.target.value })}
      />
      <label htmlFor="">Mobile No:</label>
      <input
        name="user_mobile"
        value={data.mobile}
        onChange={(e) => setData({ mobile: e.target.value })}
      />
      <label>Message</label>
      <textarea name="message" value={data.messege} />
      <input
        type="submit"
        value="Send"
        onChange={(e) => setData({ messege: e.target.value })}
      />
    </form>
  );
};
