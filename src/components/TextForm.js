import React, { useState } from 'react'

function TextForm(props) {
    const handleChange = (event) => {
        setText(event.target.value);
        console.log("on change")
    }
    const changeUP = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const changeLP = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const clear = () => {
        setText("");
    }
    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);

    }
    const handleSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handlePaste = async () => {

        try {
            const clipboardText = await navigator.clipboard.readText();
            setText(clipboardText);
        }
        catch (err) {
            console.error("Failed to read clipboard contents: ", err);
        }
    }
    const [text, setText] = useState("");

    return (
        <>
            <div className='container my-3'>
                <h2>{props.title}</h2>
                <textarea name="nothing" id="myBox" cols="5" rows="6" value={text} onChange={handleChange} className='form-control' />
            </div>
            <div className="container">
                <button className="btn btn-primary mx-2" onClick={changeUP}>upperCase</button>
                <button className="btn btn-primary mx-2" onClick={changeLP}>loweCase</button>
                <button className="btn btn-primary mx-2" onClick={clear}>clearText</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>copyText</button>
                <button className="btn btn-primary mx-2" onClick={handleSpaces}>removeExtraSpaces</button>
                <button className="btn btn-primary mx-2" onClick={handlePaste}>pasteText</button>
            </div>
            <div className="container my-3 ">
                <h2>Your text summary</h2>
                <p> {text.split(" ").length} : words   &nbsp;&nbsp;&nbsp; {text.length} : characters </p>
                <p>{0.02 * text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

export default TextForm;
