"use client";  // Marking this component as a Client Component

import { useState } from "react";
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    whatsapp: "",
    projectName: "",
    language: "",
    description: "",
  });

  // State to handle loading and success/error messages
  const [statusMessage, setStatusMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation (you can extend this based on your needs)
    if (!formData.username || !formData.email || !formData.description) {
      setStatusMessage("Please fill in all required fields.");
      return;
    }

    setIsLoading(true);
    setStatusMessage(null);

    try {
      const response = await fetch("https://email-nny1.onrender.com/api/email-send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage("Message sent successfully!");
        setFormData({
          username: "",
          email: "",
          phone: "",
          whatsapp: "",
          projectName: "",
          language: "",
          description: "",
        });
      } else {
        setStatusMessage("Failed to send message.");
      }
    } catch (error) {
      setStatusMessage("Error sending message.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need a Custom Software Solution?
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our team of experts will get back to you within 24 hours to
                discuss your project.
              </p>

              {/* Display status message */}
              {statusMessage && (
                <div
                  className={`mb-4 text-center ${
                    statusMessage.includes("success") ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {statusMessage}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  {/* Input fields */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="username"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full rounded-sm border border-[#FF8C00] bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-[#FF8C00] dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-[#FF8C00] dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full rounded-sm border border-[#FF8C00] bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-[#FF8C00] dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-[#FF8C00] dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="phone"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Phone
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone"
                        className="w-full rounded-sm border border-[#FF8C00] bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-[#FF8C00] dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-[#FF8C00] dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="whatsapp"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your WhatsApp
                      </label>
                      <input
                        type="text"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="Enter your WhatsApp"
                        className="w-full rounded-sm border border-[#FF8C00] bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-[#FF8C00] dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-[#FF8C00] dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="projectName"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Project Name
                      </label>
                      <input
                        type="text"
                        name="projectName"
                        value={formData.projectName}
                        onChange={handleChange}
                        placeholder="Enter your project name"
                        className="w-full rounded-sm border border-[#FF8C00] bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-[#FF8C00] dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-[#FF8C00] dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="language"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Programming Language
                      </label>
                      <select
                        name="language"
                        value={formData.language}
                        onChange={handleChange}
                        className="w-full rounded-sm border border-[#FF8C00] bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-[#FF8C00] dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-[#FF8C00] dark:focus:shadow-none"
                      >
                        <option value="">Select a language</option>
                        <option value="C#">C#</option>
                        <option value="Java">Java</option>
                        <option value="HTML">HTML</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="Python">Python</option>
                        <option value="PHP">PHP</option>
                        <option value=".NET">.NET</option>
                        <option value="TypeScript">TypeScript</option>
                        <option value="Flutter">Flutter</option>
                        <option value="Swift">Swift</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="description"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Project Description
                      </label>
                      <textarea
                        name="description"
                        rows={5}
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Describe your project"
                        className="w-full resize-none rounded-sm border border-[#FF8C00] bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-[#FF8C00] dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-[#FF8C00] dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="rounded-sm bg-[#FF8C00] px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-[#FF8C00]/90 dark:shadow-submit-dark"
                      disabled={isLoading}
                    >
                      {isLoading ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
