import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    message: '', 
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Zavier',
        from_email: form.email,
        to_email: import.meta.env.VITE_EMAIL,
        message: form.message,
      },
      import.meta.env.VITE_EMAIL_PUBLIC_KEY)
      .then(() => {
          setIsLoading(false);
          // TODO: success message
          // TODO: hide alert
          setForm({
            name: '',
            email: '',
            message: '',
          })
        })
        .catch((err) => {
          setIsLoading(false);
          console.log('Error submitting form', err);
        })
  };

  const handleChange = (e) => {
    setForm({...form, 
      [e.target.name]: e.target.value
    });
  };

  const handleFocus = () => {

  };

  const handleBlur = () => {

  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Contact Me</h1>
        <form
          className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}
        >
          <label className='text-black-500 font-semibold'>
            Name:
          </label>
          <input 
            type='text'
            name='name'
            className='input'
            placeholder='John'
            required
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}  />
          
          <label className='text-black-500 font-semibold'>
            Email:
          </label>
          <input 
            type='text'
            name='email'
            className='input'
            placeholder='john.doe@email.com'
            required
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}  />

          <label className='text-black-500 font-semibold'>
            Message:
          </label>
          <textarea 
            type='text'
            name='message'
            rows={4}
            className='input'
            placeholder='Write something...'
            required
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}  />

          <button
            type='submit'
            className='btn'
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}  
          >
            {isLoading ? 'Sending...' : 'Submit'}
          </button>

        </form>
      </div>
    </section>
  )
}

export default Contact;