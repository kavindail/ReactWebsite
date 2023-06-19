import './Contact.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
<script src="https://kit.fontawesome.com/a289aa24c0.js" crossorigin="anonymous"></script>
    const form = useRef();
    const [message, setMessage] = useState(""); // Set initial state to an empty string
    const [isError, setIsError] = useState(false); // Set initial state to false

    const sendEmail = (e) => {
        e.preventDefault();

        const { user_name, user_email, message } = e.target.elements;

        if (user_name.value === '' || user_email.value === '' || message.value === '') {
            setMessage("All fields must be filled!");
            setIsError(true); // This is an error
            return;
        }

        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(user_email.value)) {
            setMessage("Invalid email address!");
            setIsError(true); // This is an error
            return;
        }
        
        emailjs.sendForm('service_iaknq5w', 'template_ovwrwyw', form.current, 'qMJgnXNkxoV8TS63l')
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
                form.current.reset(); // Reset the form after sending
                setMessage("Your email has been sent!"); // Set the message to a confirmation message
                setIsError(false); // This is not an error
            }, (error) => {
                console.log(error.text);
                setMessage("Your email request has failed!"); // Set the message to a confirmation message
                setIsError(true); // This is an error
            });
    };

    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <br></br><br></br>
            <div className="contact-wrapper">
                <div className="form-container">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="user_name" placeholder="Name"/>
                        <input type="email" name="user_email" placeholder="Email"/>
                        <textarea id="message" name="message" placeholder="Message"/>
                        <input type="submit" value="Send" />
                    </form>
                    <p className={isError ? "confirmation error" : "confirmation"}>{message}</p>
                </div>
                <div class="direct-contact-container">
<div id = "left-align">
<ul class="contact-list">
  <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">Vancouver, BC</span></i></li>
  <br></br>
  <li class="list-item"><i class="fa fa-graduation-cap fa-2x"><span class="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">BCIT</a></span></i></li>
  <br></br>
  <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">kdailbusinessmail@gmail.com</a></span></i></li>
  
</ul>

<br></br>
<ul class="social-media-list">
  <li><a href="#" target="_blank" class="contact-icon">
    <i class="fa fa-github" aria-hidden="true"></i></a>
  </li>
  <li><a href="#" target="_blank" class="contact-icon">
    <i class="fa fa-codepen" aria-hidden="true"></i></a>
  </li>
  <li><a href="#" target="_blank" class="contact-icon">
    <i class="fa fa-twitter" aria-hidden="true"></i></a>
  </li>
  <li><a href="#" target="_blank" class="contact-icon">
    <i class="fa fa-instagram" aria-hidden="true"></i></a>
  </li>       
</ul>
</div>

</div>
        </div>
        </div>
    );
    
};

export default Contact;
