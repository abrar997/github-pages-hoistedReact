import React from 'react'
import img1 from './imagenotfound/img.png' 
import {Link} from 'react-router-dom'

const error_page={  textAlign: "center",
  marginTop:"200px",
  textTransform: "capitalize"} 
    const Undefined = () => {


    return (
      <div style={error_page}>
        <div className="container">
          <div className="row">
            <h1>
              seems like you have lost your way. let's bring you back
              <br />
              <Link to="/Home">Home</Link>
            </h1>
            <img src={img1} style={{ width: "30%", margin: "auto" }} />
          </div>
        </div>
      </div>
    );
}

export default Undefined;
