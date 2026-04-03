import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const PageNotFound = ({ mode }) => {
  const navigate = useNavigate();

  // Dynamic style for the text
  const textStyle = {
    color: mode === 'dark' ? 'white' : 'black'
  };

  return (
    <div className="container text-center my-5 py-5" style={textStyle}>
      {/* Changed text-secondary to a custom color or light gray for dark mode visibility */}
      <h1 className={`display-1 fw-bold ${mode === 'dark' ? 'text-info' : 'text-secondary'}`}>
        404
      </h1>
      <h2 className="mb-4">Oops! Page Not Found</h2>
      <p className="lead mb-5">
        The page you are looking for might have been removed, had its name changed, 
        or is temporarily unavailable.
      </p>
      <Button 
        label="Back to Home" 
        btnType={mode === 'dark' ? 'outline-info' : 'primary'} 
        onClick={() => navigate('/')} 
      />
    </div>
  );
};

export default PageNotFound;