import React, { useRef } from 'react';
import './App.css';
import emailjs from 'emailjs-com';

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send the message, please try again.');
      });
  };

  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div id="home" className="section home">
        <h1>Welcome to SKYHOOK</h1>
      </div>
      <div id="about" className="section about">
        <h2>About Us</h2>
        <div className="photos">
          <div className="photo" style={{ backgroundImage: `url('path_to_image1.jpg')` }}></div>
          <div className="photo" style={{ backgroundImage: `url('path_to_image2.jpg')` }}></div>
        </div>
      </div>
      <div id="projects" className="section projects">
        <h2>Our Projects</h2>
        {/* Add project details here */}
      </div>
      <div id="contact" className="section contact">
        <h2>Contact Us</h2>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="name" required />
          <label>Email</label>
          <input type="email" name="email" required />
          <label>Message</label>
          <textarea name="message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default App;
