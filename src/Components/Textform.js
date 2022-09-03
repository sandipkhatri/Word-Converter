import React, {useState} from 'react'

export default function Textform(props) {
  
  const handleUpClick = ()=> {  
    // console.log("button click" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to Uppercase ! ", "success");
    
  }
  
  const handleLoClick = ()=> {  
    // console.log("button click" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to Lowercase ! ", "success");
    
  }
  
  const handleClearClick =()=>{
    let newText ='';
    setText(newText);
    props.showAlert("Text Cleared ! ", "success");
    
  }
  
  const handleCopy =()=> {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied ! ", "success");
  }
  
  const handleOnChange = (event) => {
    // console.log("hey change hogaya")
    setText(event.target.value)

  }

  

  
  const [text, setText] = useState('Enter text here');
  
  
    return (
        <>
        <div className='Container' style={{color: props.mode === 'light'? 'black' : 'white'}}> 
            <h1>{props.heading}</h1>
            <div className="form-group">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light'? 'white' : 'grey', color:props.mode === 'light'? 'black' : 'white'}} id="myBox" rows="10"></textarea>
        </div>
            <br/>
            <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-success mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-success mx-3" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-success mx-3" onClick={handleCopy}>Copy to Clipboard</button>
        </div>

        <div className='Container my-3' style={{color: props.mode === 'light'? 'black' : 'white'}}>
            <h1>Your Text Summary</h1>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes Readtime</p>

        
        </div>
        </>
  )
}
