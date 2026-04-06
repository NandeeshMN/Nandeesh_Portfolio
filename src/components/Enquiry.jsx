import React, { useState } from 'react';
import SectionTitle from './SectionTitle';

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    course: '',
    message: '',
    authorize: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.mobile || !formData.course || !formData.authorize) {
      alert('Please fill out all required fields and authorize to proceed.');
      return;
    }
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        mobile: '',
        course: '',
        message: '',
        authorize: false
      });
    }, 3000);
  };

  return (
    <section id="enquiry" className="w-full">
      {/* Top Banner */}
      <div className="bg-white py-6 text-center shadow-sm relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          <span className="text-blue-500">Enroll Now!</span> <span className="text-gray-900">For MBA & MCA</span>
        </h2>
      </div>

      {/* Form Section */}
      <div className="bg-[#1a3c5a] py-16 px-6 relative overflow-hidden">
        {/* Abstract background pattern/lines (optional) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M-100 200 Q 300 100 800 400 T 1500 200" fill="none" stroke="white" strokeWidth="2" />
            <path d="M-100 500 Q 400 300 900 600 T 1600 400" fill="none" stroke="white" strokeWidth="1" />
          </svg>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Form Container */}
            <div className="w-full max-w-xl mx-auto lg:mx-0">
              {submitted ? (
                <div className="bg-green-500/20 text-green-100 p-6 rounded-xl border border-green-500/30 text-center">
                  <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
                  <p>Your enquiry has been submitted. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border-0 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border-0 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="number"
                      name="mobile"
                      placeholder="Mobile No"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border-0 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow"
                      required
                    />
                    <div className="relative">
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border-0 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow appearance-none"
                        required
                      >
                        <option value="" disabled className="text-gray-400">Select Course</option>
                        <option value="MBA">MBA</option>
                        <option value="MCA">MCA</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                      </div>
                    </div>
                  </div>

                  <textarea
                    name="message"
                    placeholder="Message Short & Sweet Please"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 rounded-md border-0 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow resize-none"
                  ></textarea>

                  <div className="flex items-start gap-3 mt-4 mb-6">
                    <input
                      type="checkbox"
                      id="authorize"
                      name="authorize"
                      checked={formData.authorize}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 text-blue-600 bg-white rounded border-gray-300 focus:ring-blue-500 cursor-pointer"
                      required
                    />
                    <label htmlFor="authorize" className="text-xs text-blue-50 leading-tight">
                      * I hereby authorize Chetan Business School & its representatives to call, sms, e-mail or whatsapp regarding their courses, terms & conditions.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="px-8 py-2.5 bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-500/50 text-white font-medium rounded-md transition-colors duration-200"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>

            {/* Right Side Image Space */}
            <div className="hidden lg:flex justify-center items-end h-full">
              {/* If an image of the pointing student is provided later, it can go here. */}
              {/* For now, leaving it empty or with a placeholder that blends well, but the user didn't mention adding a new image aside from matching layout. */}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Enquiry;
