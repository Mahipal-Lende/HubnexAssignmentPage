import ContactForm from '@/components/mycomponent/form/FormComponent';
import Header from '@/components/mycomponent/Header/Header';
import React from 'react'

const ContactUsPage:React.FC = () => {
  return (
    <div>
      <Header></Header>
      <ContactForm></ContactForm>
    </div>
  )
}

export default ContactUsPage;
