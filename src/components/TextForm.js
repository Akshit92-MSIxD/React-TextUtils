import React , {useState} from 'react'

export default function TextForm(props) {
  
  // Example of hooks where text is a variable and setText is a method used to change the value of text :)
  const [text,setText] = useState("Write a text here");

  //  text = "Changed text";// wrong way to change the value of text
  //  setText("Changed text"); // correct way to change the value of text

 const convert_to_up = ()=>{
       
  console.log("convert_to_up() is clicked!!!");
  setText("You have clicked on convert_to_up() invoking button");
  }

  return (
    <div className=" container mb-3">
   <h1 className="mt-3">{props.heading}</h1>
  <textarea className="form-control " id="exampleFormControlTextarea1" value={text}  rows="13"></textarea>
  <button type="button" className="btn btn-primary mt-3" onClick={convert_to_up}>Covert to UpperCase</button>
  </div>
  )
}
