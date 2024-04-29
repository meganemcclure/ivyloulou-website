import React, { useState, useEffect, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import axios from 'axios';

interface EmailFormData {
  user_name: string;
  user_email: string;
  message: string;
}

function EmailForm () {
  const form = useRef<HTMLFormElement>(null);
//   const [publicKey, setPublicKey] = useState('');

//   useEffect(() => {
//     const fetchPublicKey = async () => {
//       try {
//         const response = await axios.get('/api/github-secret');
//         setPublicKey(response.data.PUBLIC_EMAIL_KEY);
//         console.log(`Fetched public key: ${publicKey}`)
//       } catch (error) {
//         console.error('Error fetching GitHub secret:', error);
//       }
//     };

//     fetchPublicKey();
//   }, []);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      const formData = new FormData(form.current);
      const emailData: EmailFormData = {
        user_name: formData.get('user_name') as string,
        user_email: formData.get('user_email') as string,
        message: formData.get('message') as string,
      };

      emailjs
        .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
          publicKey: 'YOUR_PUBLIC_KEY',
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