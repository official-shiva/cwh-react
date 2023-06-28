import React, { useState } from 'react'

const TextForm = (props) => {
    const [text, setText] = useState("");

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    // upper case
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", 'success');
    }

    // lower case
    const handleLowerCase = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", 'success');
    }

    // left trim
    const handleLeftTrim = () => {
        let newText = text.trimStart();
        setText(newText);
        props.showAlert("Left hand side spaces are removed.", 'success');
    }

    //right trim
    const handleRightTrim = () => {
        let newText = text.trimEnd();
        setText(newText);
        props.showAlert("Right hand side spaces are removed.", 'success');
    }

    //clear text trim
    const handleClear = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Texts are cleared.", 'success');
    }

    // handle copy
    const handleCopy = () => {
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipbloard,", "success");
    }

    // remove extra spaces
    const handleSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        console.log(newText.join(" "));
    }

    return (
        <>
            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : "black" }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="mybox" rows="8" placeholder='Enter your texts here!!'
                        value={text}
                        onChange={handleOnChange}
                        style={{ background: props.mode === 'dark' ? '#13466e' : "white", color: props.mode === 'dark' ? 'white' : "black" }}
                    />
                </div>
                <div className='d-flex gap-3'>
                    <button disabled={text.length === 0} className="btn btn-primary" onClick={handleUpperCase}>Set To Uppercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary" onClick={handleLowerCase}>Set To Lowercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary" onClick={handleLeftTrim}>Left Trim</button>
                    <button disabled={text.length === 0} className="btn btn-primary" onClick={handleRightTrim}>Right Trim</button>
                    <button disabled={text.length === 0} className="btn btn-primary" onClick={handleCopy}>Copy</button>
                    <button disabled={text.length === 0} className="btn btn-primary" onClick={handleSpace}>Remove Extra Spaces</button>
                    <button disabled={text.length === 0} className="btn btn-primary" onClick={handleClear}>Clear Texts</button>
                </div>
            </div>

            <div className="container  py-3" style={{ color: props.mode === 'dark' ? 'white' : "black" }}>
                <h2>Your Text Summary</h2>
                <p><b>Words: </b>{text.split(" ").filter((element) => { return element.length !== 0 }).length} <b className='px-2'>Characters:</b>{text.length}</p>
                <p><b>Reading Time: </b>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} w/m</p>
            </div>

            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : "black" }}>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!!"}</p>
            </div>
        </>
    )
}

export default TextForm;