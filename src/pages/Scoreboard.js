import React from "react"
import Background from "./components/Background";
import { useParams } from "react-router-dom";
import './home.css'

const Scorebord=()=>{
    let { id } = useParams();

    return <React.Fragment>
        
        <Background>
            <div className="home">
            
            
            <div className="cont">

   <h1>Scorebord</h1>
            <hr style={{width:"100%"}}/>
            {[1,2,3].map((v)=>{

                return    <div key={v} className="listtile">
                <div style={{display:"flex", flexDirection:"column" ,paddingLeft:"22px"}}>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                     <div style={{flexGrow:"1"}}>  <h3 style={{margin:0}}>DSA Quiz 1</h3>
                    <span style={{fontSize:"10px",marginTop:"2px"}}>Today , 8:00pm</span></div>
                    <div className="score" style={{marginRight:"20px",cursor:"default"}} >{id==="teacher" && <span>Average Score :-</span>} 8/10</div>
                    </div>
                </div>
         </div>

})}
         

            </div>
            
            </div>
        </Background>
    </React.Fragment>
   
}
export default Scorebord;