import React , {useState} from 'react'


export default function About() {

  const[text,setText] = useState("Enable Dark Mode");
  const[bClass,setbClass] = useState("btn btn-dark my-2");

  const[myStyle,setmyStyle] = useState({
    color : 'black',
    backgroundColor : 'white',
    transition : 'color 0.5s ease , background-color 0.5s ease'
 })

  const handleMode = ()=>{

    if(myStyle.color === "black")
    {
          setmyStyle({
            color : 'white',
            backgroundColor : 'black',
            transition : 'color 0.5s ease , background-color 0.5s ease'
          })

          setText("Disable Dark Mode");
          setbClass("btn btn-light my-2");
    }
    else{

        setmyStyle({
          color : 'black',
          backgroundColor : 'white',
          transition : 'color 0.5s ease , background-color 0.5s ease'
        })
        setText("Enable Dark Mode");
        setbClass("btn btn-dark my-2");
    }



  }

  return (
    <div className='container' style={myStyle}>
      <h1 className="my-3">About us</h1>
<div className="accordion" id="accordionPanelsStayOpenExample" style={myStyle}>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" style={myStyle}>
      <button className="accordion-button" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" style={myStyle}>
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" style={myStyle}>
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>

    <div className="container">
      
      <button className={bClass} onClick={handleMode}>{text}</button>

    </div>
    </div>
  )
}
