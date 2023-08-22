import React , {useState} from 'react'   // useState is a hook that help us to create a state variable without creating a class component :)



export default function TextForm(props) {

  // State belongs to a component!!!
  
  // Example of hooks where text is a state variable (React watch krti hai ise!!!) and setText is a method used to change the value of text :)
  const [text,setText] = useState("Write a text here");  

  //  text = "Changed text";// wrong way to change the value of text
  //  setText("Changed text"); // correct way to change the value of text

 const convert_to_up = ()=>{
       
  console.log("convert_to_up() is clicked!!!");
  let newText = text.toUpperCase();
  setText(newText);
  }


  const handleOnChange=(e)=>
  {
    console.log("On change");
    setText(e.target.value);
  }

// Imp : React does not have the behaviour of default 'onChange' event. The 'onChange' which we see in react has the behaviour of default 'onInput' event.
//  So to answer your question there is no difference in both of them in react. :)

  return (
    <div className=" container mb-3">
   <h1 className="mt-3">{props.heading}</h1>
  <textarea className="form-control " id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="13"></textarea>  
  <button type="button" className="btn btn-primary mt-3" onClick={convert_to_up}>Covert to UpperCase</button>
  </div>
  )
}
