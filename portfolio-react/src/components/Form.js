import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Form = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_44r1cbi",
        "template_fiadokq",
        form.current,
        "pKNpdtjuT8t1NjC7S"
      )
      .then(
        (result) => {
          alert('message sent successfully...');
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

    return (
        <div id='container-form'> 
            <h1>Contact</h1>
            <form ref={form} onSubmit={sendEmail}>
                <div>
                    <input type='text' placeholder='Name' name='user_name' />
                    <input type='email' placeholder='Email address' name='user_email' />
                </div>
                <div> 
                    <textarea name='message' type='text' placeholder='Message'></textarea> 
                </div> 
                <input type='submit' value='Submit' id='input-submit' /> 
            </form>
        </div>
    );
};

export default Form;