import React from 'react';
import { Icon } from 'semantic-ui-react';
import ContactForm from '../Components/ContactForm';
import Portfolio from '../files/Portfolio.pdf';

export default function ContactMe() {
  return (
    <>
      <h1 className="text-center">Hi its contact me</h1>
      <div>
        <a href={Portfolio} target="_blank" rel="noopener noreferrer">
          <Icon name="download" className="mx-5" />
          Resume
        </a>
      </div>
      <ContactForm />
      <a
        href="https://github.com/RKBGK"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="github" size="huge" className="mx-5" />
      </a>
      <a
        href="https://www.linkedin.com/in/ruby-kaur/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="linkedin" size="huge" className="mx-5" />
      </a>
    </>
  );
}
