import React from "react"
import Background from "./components/Background";
import './home.css'
import { Link, useParams } from "react-router-dom";
const Profile=()=>{
    let { id } = useParams();
    return <React.Fragment>
        
        <Background>
            <div className="home">
                <br/>
                <br/>
                <br/>
            
            <div className="cont">
     
            <div style={{display:"flex",alignItem:"center",justifyContent:"flex-start",width:"100%"}}>
                 <div className="ppic">
                     <img width="90%"style={{borderRadius:"100%"}}src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"/>
                 </div>

                 <div style={{display:"flex",flexGrow:"1",flexDirection:"column",width:"80%",justifyContent:"center",alignItems:"center",}}>
                     <div style={{display:"flex",flexDirection:"column"}}>
                     <div style={{fontSize:"29px"}}className="infotile">
                             {id==="student"?"Sweety Singh":"Alok Kumar"} 
                          </div>

                          <div style={{fontSize:"15px"}}className="infotile">
                          {id==="student"?" CSE 2nd Year":"Asst Prof CSE "} 
                             
                          </div>
                     </div>
                 </div>
            </div>
         
            <hr style={{width:"100%"}}/>
              <div className="listtile">
                <div style={{display:"flex", flexDirection:"column" ,paddingLeft:"22px"}}>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                     <div style={{flexGrow:"1"}}>  <h3 style={{margin:0}}> {id==="student"?" Quiz Completed":"Quiz Posted"} </h3></div>
                    <div className="score" style={{marginRight:"20px",cursor:"default"}} >20</div>
                    </div>
                </div>
         </div>
         <div className="listtile">
                <div style={{display:"flex", flexDirection:"column" ,paddingLeft:"22px"}}>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                     <div style={{flexGrow:"1"}}>  <h3 style={{margin:0}}>{id==="student"?" Quiz Completed":"Quiz Evauated"}</h3></div>
                    <div className="score" style={{marginRight:"20px",cursor:"default"}} >10</div>
                    </div>
                </div>
         </div>
         <div className="listtile logout">
                <div style={{display:"flex", flexDirection:"column" ,paddingLeft:"22px"}}>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <Link style={{textDecoration:"none"}} to="/"> <div >  <h3 style={{marginRight:"10px"}}>Logout</h3></div></Link>
           
                    </div>
                </div>
         </div>

            </div>
            
            
            </div>
        </Background>
    </React.Fragment>
   
}
export default Profile;