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

  if(text !== "")
  props.showAlert("Text is converted to Uppercase !!!");

  }




// method to convert a given text into lower case
 const convert_to_lo = ()=>{
       
  let newText = text.toLowerCase();
  setText(newText);

  if(text !== "")
  props.showAlert("Text is converted to LowerCase !!!");

  }




// method to convert a given text into capitalized case
 const convert_to_ca = ()=>{
       
  let stringArray = text.split(/\s+/g);

  stringArray =  stringArray.map((string)=>{
     return  string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  });

  let newText = stringArray.join(" ");

  setText(newText);

  if(text !== "")
  props.showAlert("Text is converted to Capitalized Case !!!");

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
       
    if(text !== "")
    props.showAlert("Text is converted to Sentenced Case!!!");

    }

 


  // method to clear text in textarea
    const clearText = ()=>{
       
     let newText = '';

     setText(newText);
     
     if(text !== "")
     props.showAlert("Text is cleared now !!!");

    }




  // method to handle remove extra spaces in textarea
    const removeExtraSpaces = () =>{
      
     let replacedText = text.replace(/\s+/g," "); // replace() does not modify the original string. Instead, it returns a new string with the specified replacements.

     setText(replacedText);

     if(text !== "")
     props.showAlert("Extra Spaces are removed now!!!");

    }




    // method to handle copy text from textarea field
    const copyText = () =>{
      
      let textarea = document.querySelector("textarea");
      textarea.focus(); // assist select()
      textarea.select(); // select the current text of textarea field
      navigator.clipboard.writeText(text); // It will write the current text of textarea field to clipboard :)

      if(text !== "")
      props.showAlert("Text is copied successfully into the clipboard!!!");
      

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
    <div className=" container mb-3" style={{color : props.mode === 'dark' ?'white': 'black'}}>
      
   <h1 className="mt-3" >{props.heading}</h1>

  <textarea className="form-control " id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="13" 
    style={{backgroundColor : props.mode === 'light' ? 'white' : 'grey' , color : props.mode === 'light' ? 'black' : 'white'}}></textarea>  

  <button type="button" className="btn btn-primary mt-3" onClick={convert_to_up}>Upper Case</button>
  <button type="button" className="btn btn-primary ms-3 mt-3" onClick={convert_to_lo}>Lower Case</button>
  <button type="button" className="btn btn-primary ms-3 mt-3" onClick={convert_to_ca}>Capitalized Case</button>
  <button type="button" className="btn btn-primary ms-3 mt-3" onClick={convert_to_se}>Sentence Case</button>
  <button type="button" className="btn btn-primary ms-3 mt-3" onClick={copyText}>Copy text</button>
  <button type="button" className="btn btn-primary ms-3 mt-3" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
  <button type="button" className="btn btn-primary ms-3 mt-3" onClick={clearText}>Clear text</button>
  </div>

  <div className="container my-3">
   <h3 className={`text-${props.mode === 'light' ? 'secondary' : 'white'}`}>Your Text Summary</h3>
   <p className={`text-${props.mode === 'light' ? 'secondary' : 'white'}`}> {text.split(/\w+/g).length-1} words , {text.match(/[^\s]/g) == null ? 0 : text.match(/[^\s]/g).length} characters , {text.match(/\d/g) == null ? 0 : text.match(/\d/g).length} digits and {text.match(/[0-9]+/g)!=null ? text.match(/[0-9]+/g).length : 0} numbers </p>

  </div>

  </>


  )
}
