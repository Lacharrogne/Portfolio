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
          alert('message envoyer avec succès');
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
            <form action='#' ref={form} onSubmit={sendEmail}>
                <div>
                    <input type='text' placeholder='Nom' name='to_name' required />
                    <input type='email' placeholder='Email' name='from_name' required />
                </div>
                <div> 
                    <textarea name='message' type='text' placeholder='Message' required></textarea> 
                </div> 
                <input type='submit' value='Envoyer' id='input-submit' /> 
            </form>
        </div>
    );
};

export default Form;