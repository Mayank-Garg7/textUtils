import React from 'react';
import Button from '../components/Button';

const Contact = ({ mode }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (This is a demo)");
  };

  // Dynamic styles for the form card
  const cardStyle = {
    backgroundColor: mode === 'dark' ? '#13466e' : 'white',
    color: mode === 'dark' ? 'white' : 'black',
    border: mode === 'dark' ? '1px solid #0dcaf0' : '1px solid #dee2e6'
  };

  const inputStyle = {
    backgroundColor: mode === 'dark' ? '#042743' : 'white',
    color: mode === 'dark' ? 'white' : 'black',
    borderColor: mode === 'dark' ? '#13466e' : '#ced4da'
  };

  return (
    <div className="container my-5" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
      <div className="row justify-content-center">
        <div className="col-md-6 p-4 shadow-sm rounded" style={cardStyle}>
          <h2 className="text-center mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" style={inputStyle} className="form-control" id="name" placeholder="Mayank Garg" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" style={inputStyle} className="form-control" id="email" placeholder="name@example.com" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">How can we help?</label>
              <textarea style={inputStyle} className="form-control" id="message" rows="4" placeholder="Your message..."></textarea>
            </div>
            <div className="d-grid">
              <Button label="Send Message" btnType={mode === 'dark' ? 'info' : 'primary'} onClick={() => {}} />
            </div>
          </form>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className={mode === 'dark' ? 'text-light' : 'text-muted'}>
          Feel free to reach out for any ForgeText queries!
        </p>
      </div>
    </div>
  );
};

export default Contact;