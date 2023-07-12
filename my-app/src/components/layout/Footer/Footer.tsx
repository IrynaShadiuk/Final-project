import React, { useState } from 'react';
import './footer.scss';

interface OrderForm {
  name: string;
  email: string;
  message: string;
}

const Footer: React.FC = () => {
  const [orderForm, setOrderForm] = useState<OrderForm>({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setOrderForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Ваша логіка обробки форми тут
    console.log('Order submitted:', orderForm);
    setOrderForm({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <footer>
      <div className="footer-top">
        <h2>MAKE AN ORDER</h2>
        <p>For orders or any other questions drop a message here.</p>
        <form className="order-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Enter your name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={orderForm.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Enter your email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={orderForm.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Enter your message</label>
            <textarea
              id="message"
              name="message"
              value={orderForm.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <button className="submit-btn" type="submit">SEND</button>
        </form>
      </div>
      <div className="footer-bottom">
        <p>Bohemian © 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
