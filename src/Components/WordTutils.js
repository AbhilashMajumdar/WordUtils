import React, {useState} from 'react';
import "./App.css";

const WordTutils = (props) => {
    const [text, setText] = useState("Enter your text");

    const handlerOnChange = (event) =>{
        setText(event.target.value);
    }

    const ChangeInput = () =>{
        setText("");
    }

    const ToUpperCase = (event) =>{
        setText(text.toUpperCase());
    }

    const ToLowerCase = (event) =>{
        setText(text.toLowerCase());
    }

    const ResetScreen = () =>{
        setText(" ");
    }

    const WordCount = () =>{
        setText(text.split(' ').length + " Words");
    }

    const CharacterCount = () =>{
        setText(text.length+ " Characters");
    }

    return (
        <>
            <h1>{props.title}</h1> {/*heading as a props */}
            <form>
                <div className="mb-3">
                    <textarea className="form-control mt-3" id="text" rows="8" value={text} onChange={handlerOnChange} onClick={ChangeInput}></textarea>
                </div>
            </form>
            <button className="btn btn-primary button" onClick={ToUpperCase}>{props.button1}</button>

            <button className="btn btn-danger button" onClick={ToLowerCase}>{props.button2}</button>

            <button className="btn btn-warning button" onClick={WordCount}>{props.button3}</button>

            <button className="btn btn-success button" onClick={CharacterCount}>{props.button4}</button>

            <button className="btn btn-secondary button" onClick={ResetScreen}>{props.button5}</button>

        </>
    )
}

export default WordTutils
