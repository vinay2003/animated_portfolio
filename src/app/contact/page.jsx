"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [validationError, setValidationError] = useState("");
  const text = "Say Hello";
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    setValidationError("");

    const email = form.current.user_email.value;
    const message = form.current.user_message.value;

    // Validation for empty fields
    if (!email || !message) {
      setValidationError("Please fill in all fields.");
      return;
    }

    // Send email using EmailJS
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("Message sent successfully!", response.status, response.text);
          setSuccess(true);
          form.current.reset();
        },
        (err) => {
          console.log("Failed to send message.", err);
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>

        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <textarea
            rows={6}
            name="user_message"
            placeholder="Your message"
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
          />
          <input
            name="user_email"
            type="email"
            placeholder="Your email address"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
            Send
          </button>

          {/* Validation Error */}
          {validationError && (
            <span className="text-red-600 font-semibold">
              {validationError}
            </span>
          )}

          {/* Success Message */}
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}

          {/* Error Message */}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
