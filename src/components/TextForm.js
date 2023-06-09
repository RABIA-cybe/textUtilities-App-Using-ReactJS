import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("UpperCase was clicked");

        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }

    const handleLoClick = () => {
        console.log("LowerCase was clicked");

        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

     const handleClearClick = () => {

        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }    

       const handleRemoveVowelsClick = () => {

    const noVowels = text.replace(/[aeiou]/gi, '');
        setText(noVowels);
        props.showAlert("Vowels removed", "success");
    } 

    const handleCopyClick = () => {

        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to Clipboard", "success");
          
        } 

    const [text, setText] = useState("");
    return (
        <>
        
        <div className='container' style={{ color: props.mode==='dark'?'white':'rgba(23,27,31,1)'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode 
                    === 'dark'?'rgba(23,27,31,1)':'white', color: props.mode==='dark'?'white':'rgba(23,27,31,1)'}} id="myBox" rows="10"></textarea>
            </div>
            <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled = {text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button disabled = {text.length === 0} className="btn btn-danger mx-1 my-1" onClick={handleRemoveVowelsClick}>Remove Vowels</button>
            <button disabled = {text.length === 0} className="btn btn-info mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled = {text.length === 0} className="btn btn-warning mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
        </div>

        <div className="container my-3" style={{ color: props.mode==='dark'?'white':'rgba(23,27,31,1)'}}>
            <h1>Your Text Summary</h1>
       
            <p> {text.split(/\s+/).filter( (element)=>{ return element.length !== 0} ).length } words, {text.split("").filter( (str)=>{return /\S/.test(str); } ).length} characters.  </p>
            <p>{0.008 * text.split(" ").filter( (element)=>{ return element.length !== 0} ).length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter some text in above textbox to preview it here'}</p>
        </div>
        </>
    )
}
