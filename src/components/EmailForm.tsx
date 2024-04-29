import { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
// import 'dotenv/config';

function EmailForm () {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(`process.env: ${JSON.stringify(process.env)}`)

    if (form.current) {
      emailjs
        .sendForm(process.env.SERVICE_ID || '', process.env.TEMPLATE_ID || '', form.current, {
          publicKey: process.env.EMAIL_KEY || '',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  };

  return (
    <div className='contentSection'>
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    </div>
  );
};

export default EmailForm;