import React, { useState } from 'react';
import Button from './Button';

function TextForm({ title = "Enter Text" }) {
  const [text, setText] = useState("");

  const handleChange = (event) => setText(event.target.value);
  const changeUP = () => setText(text.toUpperCase());
  const changeLP = () => setText(text.toLowerCase());
  const clear = () => setText("");
  
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    // Note: In React, avoid document.getElementById if possible. 
    // navigator.clipboard.writeText(text) is cleaner!
  };

  const handleSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handlePaste = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setText(text + clipboardText); // Appends pasted text
    } catch (err) {
      console.error("Failed to read clipboard:", err);
    }
  };

  // Logic to handle word count correctly even with extra spaces/newlines
  const wordCount = text.split(/\s+/).filter((element) => element.length !== 0).length;

  return (
    <>
      <div className='container my-3'>
        <h2>{title}</h2>
        <textarea 
          id="myBox" 
          rows="8" 
          value={text} 
          onChange={handleChange} 
          className='form-control' 
          placeholder="Start typing..."
        />
      </div>

      <div className="container">
        <Button label="Convert to Uppercase" onClick={changeUP} />
        <Button label="Convert to Lowercase" onClick={changeLP} />
        <Button label="Clear Text" onClick={clear} btnType="danger" />
        <Button label="Copy Text" onClick={handleCopy} btnType="success" />
        <Button label="Remove Extra Spaces" onClick={handleSpaces} btnType="warning" />
        <Button label="Paste from Clipboard" onClick={handlePaste} btnType="info" />
      </div>

      <div className="container my-3">
        <h3>Your text summary</h3>
        <div className="alert alert-info">
          <strong>{wordCount}</strong> words and <strong>{text.length}</strong> characters
          <br />
          <small>{(0.008 * wordCount).toFixed(2)} Minutes read</small>
        </div>
        
        <h3>Preview</h3>
        <p className="border rounded p-2 bg-light">
          {text.length > 0 ? text : "Nothing to preview!"}
        </p>
      </div>
    </>
  );
}

export default TextForm;