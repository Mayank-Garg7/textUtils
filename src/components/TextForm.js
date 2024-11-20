import React, { useState } from 'react'

function TextForm(props) {
    const handleChange = (event) => {
        setText(event.target.value);
        console.log("on change")
     }
     const changeUP = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
     }
     const changeLP = () =>{
        let newText = text.toLowerCase();
        setText(newText);
     }
     const clear =()=>{
        setText("");
     }
    const[text, setText] = useState("kuch to likho re");

    return (
        <>
            <div className='container my-3'>
                <h2>{props.title}</h2>
                <textarea name="nothing" id="ok " cols="5" rows="6" value={text} onChange={handleChange} className='form-control' />
            </div>
            <button className="btn btn-primary mx-2" onClick={changeUP}>toUppercase</button>
            <button className="btn btn-primary mx-2" onClick={changeLP}>toLowecase</button>
            <button className="btn btn-primary mx-2" onClick={clear}>Clear</button>
            <div className="container my-3 ">
                <h2>Your text summary</h2>
                <p> {text.split(" ").length} : words   &nbsp;&nbsp;&nbsp; {text.length} : characters </p>
            </div>
        </>
    )
}

export default TextForm;
