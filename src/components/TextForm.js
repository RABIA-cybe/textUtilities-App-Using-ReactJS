import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("UpperCase was clicked");

        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        console.log("LowerCase was clicked");

        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
        </div>

        <div className="container my-3">
            <h1>Your Text Summary</h1>
            <p> {text.split(" ").length} words, {text.length} characters.  </p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
