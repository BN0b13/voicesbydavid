import {useState} from 'react';

import Button from '../reusable/button/button.component';
import Snackbar from '../reusable/snackbar/snackbar.component';

import Client from '../../tools/client';

import { api } from '../../config';

import {
  ButtonContainer,
    ContactFormContainer,
    ContactFormInput,
    ContactFormTextArea
} from './contact-form.styles';

const client = new Client();

const ContactForm = () => {
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ message, setMessage ] = useState('');

  const [ showMsg, setShowMsg ] = useState(false);
  const [ msgType, setMsgType ] = useState('error');
  const [ msgContent, setMsgContent ] = useState('Please complete all fields to update password');
  const [ showBtn, setShowBtn ] = useState(true);

  const handlePhoneChange = (data) => {
    const reg = /^\d+$/;
    if(data === '' || (reg.test(data) && data.length <= 10)) {
        setPhone(data);
    } else {
        return
    }
  }

  const submitMessage = async () => {
    if(firstName === '' ||
      lastName === '' ||
      phone === '' ||
      email === '') {
        setMsgType('error');
        setMsgContent('Please complete all fields to submit your message.')
        setShowMsg(true);
        return
    }

    try {
      const data = {
        firstName,
        lastName,
        phone,
        email,
        message
      };

      await client.postMessage(data);

      setShowBtn(false);
      setMsgType('success');
      setMsgContent('Thank you for your message! I will get back to you as soon as I can.')
      setShowMsg(true);

    } catch (err) {
      setMsgType('error');
      setMsgContent('Something went wrong. Please try again.');
      setShowMsg(true);
    }
  }

  return (
    <ContactFormContainer>
      <ContactFormInput type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='First Name' />
      <ContactFormInput type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Last Name' />
      <ContactFormInput type='text' value={phone} onChange={(e) => handlePhoneChange(e.target.value)} placeholder='Phone' />
      <ContactFormInput type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
      <ContactFormTextArea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message' />
      {showMsg &&
          <Snackbar msg={msgContent} type={msgType} show={setShowMsg} />
      }
      {showBtn &&
        <ButtonContainer>
          <Button onClick={() => submitMessage()}>Submit</Button>
        </ButtonContainer>
      }
    </ContactFormContainer>
  )
}

export default ContactForm;