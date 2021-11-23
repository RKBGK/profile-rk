import React from 'react';
import ContactForm from '../Components/ContactForm';
import Portfolio from '../files/Portfolio.pdf';

export default function ContactMe() {
  return (
    <>
      <h1 className="text-center">Hi its contact me</h1>
      <a href={Portfolio} target="_blank" rel="noopener noreferrer">
        Resume{' '}
      </a>
      <ContactForm />
    </>
  );
}
