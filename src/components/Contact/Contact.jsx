import React from 'react'
import "./contact.css"
import Footer from '../Footer/Footer'
import LandingImg from '../LandingImg/LandingImg'
const Contact = () => {
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

   // You can pass formData as a fetch body directly:
   // fetch('/some-api', { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <>
      <LandingImg heading="Contact-us" intro="Contact-details uploading soon" />
      <div className='contact'>
        <div className="contact-intro">
          <h1>Contact Us</h1>
        </div>
        <div className="form-container">
          <form method= 'post' className='form' onSubmit={handleSubmit}>
            <label >Name:</label>
               <input name='name' />
            <label>Email:</label>
               <input type="email" name='email' />
            <label>Subject:</label>
               <input name='subject' />
            <label>Message:</label>
              <textarea name='message' />
            <button type='submit' className='btn'>submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact