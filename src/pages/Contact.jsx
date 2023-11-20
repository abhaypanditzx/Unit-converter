import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
function Contact() {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_bwcqhct",
        "template_hm57jd7",
        {
          from_name: form.name,
          to_name: "Abhay Pandit",
          from_email: form.email,
          to_email: "abhaypanditzx@gmail.com",
          message: form.message,
        },
        "_BIJwQC-zWAckeu1J"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent successfully");
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="min-h-screen sm:h-screen min-w-screen flex justify-center items-center bg-gray-100">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col sm:w-[50rem] max-xs:w-[300px]  bg-[#ffffff] shadow-md shadow-gray-200 rounded-md p-4 sm:h-fit space-y-6"
      >
        <h1 className=" sm:text-3xl m-auto font-rubik  full">
          Contact
        </h1>
        <div className="flex flex-col space-y-2">
          <label className="text-gray-800">Name</label>
          <input
            onChange={handleChange}
            value={form.name}
            type="text"
            name="name"
            placeholder="what's your good name?"
            className="sm:w-[90%] max-xs:h-[35px] sm:h-[50px] outline-none placeholder:px-4 rounded-md bg-gray-100 "
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-gray-800">Email</label>
          <input
            onChange={handleChange}
            type="email"
            value={form.email}
            name="email"
            placeholder="what's your web address?"
            className="sm:w-[90%] max-xs:h-[35px] sm:h-[50px] outline-none placeholder:px-4 rounded-md bg-gray-100"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-gray-800">Message</label>
          <textarea
            placeholder="write your message here..."
            onChange={handleChange}
            value={form.message}
            name="message"
            className="sm:w-[90%] max-xs:h-[50px] sm:h-[70px] outline-none placeholder:py-6 placeholder:px-4 rounded-md bg-gray-100"
          />
        </div>
        <input
          type="submit"
          value={`${loading ? "sending..." : "send"}`}
          className="bg-[#E53C38] sm:w-[150px] p-2 text-white rounded-xl m-auto max-xs:w-[100px]  sm:text-xl max-xs:text-base"
        />
      </form>
    </div>
  );
}

export default Contact;
