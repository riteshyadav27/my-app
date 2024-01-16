import React, { useState } from 'react'


export default function Textform(props) {
    const Uppercase = () => {
        let n = text.toUpperCase();
        setText(n);
        // console.log("clickonbutton")
    }
    const Lowercase = () => {
        let n = text.toLowerCase();
        setText(n);
        // console.log("clickonbutton")
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
        // console.log("handleonchnge")
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className="mb-3 my-3">
                <h3>{props.text}</h3>
                <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" type="submit" onClick={Uppercase}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" type="submit" onClick={Lowercase}>Convert to Lowercase</button>

            <div className='container my-3'>
                <h5>Text Summary</h5>
                <p>
                    No of words = {text.split(" ").length}
                    <br></br>
                    No of Characters = {text.length}
                </p>
                <h5>Time to Read</h5>
                <p> 
                    It will take {text.split(" ").length * 0.01} min to read.                    
                </p>

                <h5>Preview</h5>
                <p>
                    {text}
                </p>
            </div>
        </>
    )
}
