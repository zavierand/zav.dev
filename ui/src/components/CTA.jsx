import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>
            Interested in my work and experience?
            <br className='sm:block hidden' />
            Reach out to me!
        </p>
        <Link 
            to='/contact'
            className='btn' 
        >
            Contact
        </Link>
    </section>
  )
}

export default CTA