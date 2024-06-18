import React,{useState}  from 'react'

function Hom2(props) {
    const handleClick =()=>{
        console.log("button clicked uppercase");
        let newtext = text.toUpperCase()   ;
        settext(newtext);
        }
    const handleChange =(event)=>{
        console.log("button clicked");
        settext(event.target.value);
    }
    const handloChange=()=>{
        let newText = text.toLocaleLowerCase();
        settext(newText);
    }
    const[text, settext]= useState('enter the text')
  return (
   <>
   <div className="container">
<div class="mb-3">
  <label for="exampleFormControlTextarea1"  class="form-label">{props.text}</label>
  <textarea className="form-control" value= {text } onChange={handleChange} id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button className="btn btn-primary" onClick={handleClick}>
    Convert to uper case
</button>
<button className="btn btn-primary mx-3" onClick={handloChange}>
    Convert to lower case
</button>
   </div>
   <div className="container">
    <h2>
        your text summary
    </h2>
    <p> {text.split(" ").length} word and {text.length}charactecr</p>
    <p>{0.008* text.split(" ").length}Mint</p>
    <h3>preveiw
    </h3>
    <p>{text}</p>
   </div>
   </>
  );
}

export default Hom2
