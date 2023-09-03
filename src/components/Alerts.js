import React from 'react'

 function Alerts(props) {
 return props.alert &&  (   // if props.alert is NULL then this component will return NULL 
    <div className="alert alert-success my-0" role="alert">
    <strong>Success!!</strong> {props.alert}
  </div>
  )
}

export default Alerts