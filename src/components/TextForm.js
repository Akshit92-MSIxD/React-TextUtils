import React , {useState} from 'react'   // useState is a hook that help us to create a state variable without creating a class component :)



export default function TextForm(props) {

  // State belongs to a component!!!
  
  // Example of hooks where text is a state variable (React watch krti hai ise!!!) and setText is a method used to change the value of text :)
  const [text,setText] = useState("Write a text here");  

  //  text = "Changed text";// wrong way to change the value of text
  //  setText("Changed text"); // correct way to change the value of text



// method to convert a given text into upper case
 const convert_to_up = ()=>{
       
  let newText = text.toUpperCase();
  setText(newText);
  }



// method to convert a given text into lower case
 const convert_to_lo = ()=>{
       
  let newText = text.toLowerCase();
  setText(newText);
  }



// method to convert a given text into capitalized case
 const convert_to_ca = ()=>{
       
  let stringArray = text.split(/\s+/g);

  stringArray =  stringArray.map((string)=>{
     return  string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  });

  let newText = stringArray.join(" ");

  setText(newText);

  }



// method to convert a given text into sentenced case
  const convert_to_se = ()=>{
    
    let stringArray = text.split(/\s+/g);

    stringArray = stringArray.map((string,index)=>{
        if(index === 0)
        {
            return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        }
        else
        {
          return string.toLowerCase();
        }
    })

    let newText = stringArray.join(" ");

    setText(newText);

    }

 

  // method to clear text from textarea
    const clearText = ()=>{
       
     let newText = '';

     setText(newText);


    }

  

  // method to handle readonly in textform
  const handleOnChange=(e)=>
  {
       setText(e.target.value);
  }

// Imp : React does not have the behaviour of default 'onChange' event. The 'onChange' which we see in react has the behaviour of default 'onInput' event.
//  So to answer your question there is no difference in both of them in react. :)

  return (
    <>
    <div className=" container mb-3">
   <h1 className="mt-3">{props.heading}</h1>
  <textarea className="form-control " id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="13"></textarea>  
  <button type="button" className="btn btn-primary mt-3" onClick={convert_to_up}>Upper Case</button>
  <button type="button" className="btn btn-primary ms-3 mt-3" onClick={convert_to_lo}>Lower Case</button>
  <button type="button" className="btn btn-primary ms-3 mt-3" onClick={convert_to_ca}>Capitalized Case</button>
  <button type="button" className="btn btn-primary ms-3 mt-3" onClick={convert_to_se}>Sentence Case</button>
  <button type="button" className="btn btn-primary ms-3 mt-3" onClick={clearText}>Clear text</button>
  </div>

  <div className="container my-3">
   <h3 className="text-secondary">Your Text Summary</h3>
   <p className="text-secondary"> {text.split(/[a-zA-Z]+/g).length-1} words , {text.trim().length} characters and {text.match(/[0-9]+/g)!=null ? text.match(/[0-9]+/g).length : 0} numbers </p>

  </div>

  </>


  )
}
