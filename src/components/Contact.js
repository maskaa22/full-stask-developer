import './style.css';
import './style@media.css';
import { useState, useEffect } from "react";

function Contact() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [text, setText] = useState('');
  const [blockButton, setBlockButton] = useState('blockButton');
  const [formValid, setFormValid] = useState(true);

  useEffect(() => {
    if (email !== '' || name !== '' || phone !== '' || text !== '') {
      setBlockButton('notBlockButton');
      setFormValid(false);
    }
  }, [email, name, text, phone]);

  return (
    <div className='contact' id='contact'>
      <div className='container'>
        <h2 >Contact me</h2>
        <div className='flex-center'><hr /></div>
        <p className='about-p margin-top'>If you have any questions, you can always write to me, but it's better to just call, because communication brings people together.</p>
        <div className='flex-between margin-top'>
          <input className='input' placeholder='Your name:' type='text' value={name} onChange={e => setName(e.target.value)} />
          <input className='input' placeholder='Email:' type='email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            value={email} onChange={e => setEmail(e.target.value)} />
          <input className='input' placeholder='Phone:' type='number' value={phone} onChange={e => setPhone(e.target.value)} />
        </div>
        <input className='input input-message margin-top' placeholder='Your message:' type='text' value={text} onChange={e => setText(e.target.value)} />
        <div className='flex-center'><button disabled={formValid} className={`button-send ${blockButton}`}>Send</button></div>
      </div>
    </div>
  );
}

export default Contact;
