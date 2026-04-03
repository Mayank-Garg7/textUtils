import React from 'react';

function About({ mode }) {
  // Derived styles based on global mode prop
  const myStyle = {
    color: mode === 'dark' ? 'white' : 'black',
    backgroundColor: mode === 'dark' ? 'rgb(36 74 104)' : 'white',
    transition: 'all 0.3s ease'
  };

  const accordionBtnStyle = {
    color: mode === 'dark' ? '#0dcaf0' : '#0d6efd',
    backgroundColor: mode === 'dark' ? '#042743' : '#e7f1ff',
  };

  return (
    <div className="container p-3 rounded" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button 
              className="accordion-button" 
              type="button" 
              style={accordionBtnStyle} 
              data-bs-toggle="collapse" 
              data-bs-target="#collapseOne"
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              ForgeText gives you a way to analyze your text quickly and efficiently. Be it word count, character count, or reading time.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button 
              className="accordion-button collapsed" 
              type="button" 
              style={accordionBtnStyle} 
              data-bs-toggle="collapse" 
              data-bs-target="#collapseTwo"
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              ForgeText is a free character counter tool that provides instant character count & word count statistics for a given text. ForgeText reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button 
              className="accordion-button collapsed" 
              type="button" 
              style={accordionBtnStyle} 
              data-bs-toggle="collapse" 
              data-bs-target="#collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in Facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;