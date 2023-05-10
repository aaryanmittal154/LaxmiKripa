import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mvonlvpz"); // Replace 'your-form-id' with your Formspree form ID

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (state.succeeded) {
      alert("Thank You for Contacting! We will contact you soon.");
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    }
  }, [state.succeeded]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-indigo-500 mb-2">
          Name (required)
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-indigo-300 rounded-md focus:outline-none focus:shadow-outline"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-indigo-500 mb-2">
          Phone Number (required)
        </label>
        <input
          type="number"
          id="phone"
          required
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-indigo-300 rounded-md focus:outline-none focus:shadow-outline"
        />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-indigo-500 mb-2">
          Email (optional)
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-indigo-300 rounded-md focus:outline-none focus:shadow-outline"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-indigo-500 mb-2">
          Message (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-indigo-300 rounded-md focus:outline-none focus:shadow-outline"
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 border border-transparent shadow-sm text-sm font-large rounded-md text-white bg-gradient-to-br from-indigo-700 to-indigo-400 hover:from-blue-400 hover:to-purple-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        disabled={state.submitting}
      >
        {state.submitting ? <span>Submitting...</span> : <span>Submit</span>}
      </button>
    </form>
  );
}

export default ContactForm;
