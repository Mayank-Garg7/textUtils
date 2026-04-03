import React from 'react';

// Destructuring props for clean code
function Button({ label, onClick, btnType = "primary" }) {
  return (
    <button 
      className={`btn btn-${btnType} mx-1 my-1`} 
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;