import React, { useRef } from 'react';
import './App.css';
import emailjs from 'emailjs-com';

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pqfrenb', 'template_mx70uqd', form.current, 'IhFdw1udD2PdLLGnS')
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
        <p>SKYHOOK is a dynamic web development company dedicated to creating innovative and high-quality web solutions. Our team specializes in developing custom web projects tailored to meet the unique needs of each client. From creating responsive websites to integrating complex features, we ensure that every project we undertake is executed with precision and excellence. At SKYHOOK, we combine technical expertise with creative design to deliver exceptional digital experiences. Our commitment to client satisfaction and ongoing support makes us a trusted partner in your web development journey. Explore our portfolio to see how we can transform your ideas into reality.</p>
        <div className="photos">
          <div className="photo-container">
            <div className="photo" style={{ backgroundImage: `url('/media/siva.jpg')` }}></div>
            <div className="photo-info">
              <h3>Sivaramakrishnan Dhanabal</h3>
              <a href="https://github.com/srk-sivaramakrishnan" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/sivaramakrishnan-d" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
          <div className="photo-container">
            <div className="photo" style={{ backgroundImage: `url('/media/shapna.jpg')` }}></div>
            <div className="photo-info">
              <h3>Shapna Gangadharan</h3>
              <a href="https://github.com/shapna0327" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/shapna-gangadharan-b852801b1" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
      <div id="projects" className="section projects">
        <h2>Our Projects</h2>
        <div className="project">
          <h3>Employee Management System</h3>
          <p>Duration: 11/2024 – 12/2024</p>
          <p>Developed using React JS, Node JS, Express JS, and MySQL for both Front-end and Back-end.</p>
        </div>
        <div className="project">
          <h3>Graphical Password Authentication System</h3>
          <p>Duration: 10/2023 - 12/2023</p>
          <p>A project developed to authenticate passwords using graphical passwords and cryptography to improve security.</p>
        </div>
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
      <footer className="footer">
        <p>&copy; 2024 SKYHOOK. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
