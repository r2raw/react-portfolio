import React, { useEffect, useState } from "react";
import Input from "../../UI/Input";
import { motion } from "framer-motion";
function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  
  useEffect(() => {
    if (success) {
        console.log('susss')
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
  }, [success]);

//   useEffect(() => {
//     if (error !=='') {
//       setTimeout(() => {
//         setError("");
//       }, 3000);
//     }
//   }, [ error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const formData = new FormData(e.target);

    formData.append("access_key", "01f47201-12b4-4ec1-85d9-8095f3fb13b0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      if (res.success) {
        console.log('asa')
        setSuccess(true);
      }
      setSubmitting(false);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <motion.form
    variants={{
        hidden: {x: -200, opacity: 0,},
        visible: {x: 0, opacity: 1, rotate: [30, -30,  10, -10, 0]}
    }}
    initial='hidden'
    whileInView='visible'
    exit='hidden'
     onSubmit={handleSubmit}>
      {success && (
        <div className="flex flex-col justify-center items-center py-4 mb-4 bg-green-400 text-neutral-900">
          Message sent successfully!
        </div>
      )}
      {error && error !== "" && (
        <div className="flex flex-col justify-center items-center py-4 bg-red-600 mb-4 text-neutral-900">
          {error}
        </div>
      )}
      <h1 className="text-4xl mb-4">Let's talk!</h1>
      <p className="text-xl mb-10">
        If you have any questions, feel free to write.
      </p>
      <div className="flex flex-col justify-between gap-8">
        <Input name="name" type="text" required>
          Name
        </Input>
        <Input name="email" type="email" required>
          E-mail Address
        </Input>
        <Input name="message" textArea required>
          Message
        </Input>
      </div>
      <motion.button
      whileHover={{scale: [ 1.12,1], color: 'white'}}
      exit={{scale: 1}}
      transition={{duration: 0.1, stiffness: 100,}}
      
        className="bg-sky-600 text-neutral-800 w-full py-4 text-xl font-bold rounded-md mt-4"
        disabled={submitting}
      >
        {submitting ? "Submitting" : "Submit"}
      </motion.button>
    </motion.form>
  );
}

export default ContactForm;
