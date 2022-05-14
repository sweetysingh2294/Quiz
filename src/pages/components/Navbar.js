import React from "react";
import '../../index.css';
import quiz from '../../assets/quiz.png'
import { Link,useParams } from "react-router-dom";
const Navbar=()=>{
  let { id="none" } = useParams();

  console.log(id)
 
    return(
        <React.Fragment>
            <div className="navbar">
              <img className="logo"  src={quiz} ></img>
              <p className="apptitle" >
                  Quiz App
              </p>
              <div className="menu" >
                <Link className="menuitem" style={{textDecoration:"none",}} to={id=="none"?"/":`/home/${id}`}>Home</Link>
                <Link style={{textDecoration:"none"}} to={id=="none"?"/":`/scoreboard/${id}`}>Scorebord</Link>
                <Link style={{textDecoration:"none"}} to={id=="none"?"/":`/profile/${id}`}>Profile</Link>
              </div>
            </div>
            
        </React.Fragment>
    )
}
export default Navbar;