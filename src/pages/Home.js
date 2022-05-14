import React from "react"
import { Link,useParams } from "react-router-dom";
import Background from "./components/Background";
import './home.css'

const Home=()=>{
    let { id } = useParams();
    return <React.Fragment>
        
        <Background>

            <div className="home">
                <br/>
                <br/>
                <br/>
            {id==="student" && 
            <div className="cont">
            <h1>Upcoming Quiz</h1>
            <hr style={{width:"100%"}}/>
            {[1,2,3].map((v)=>{

                return    <div className="listtile">
                <div style={{display:"flex", flexDirection:"column" ,paddingLeft:"22px"}}>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                     <div style={{flexGrow:"1"}}>  <h3 style={{margin:0}}>Quiz {v}</h3>
                    <span style={{fontSize:"10px",marginTop:"2px"}}>Today , 8:00pm</span></div>
                   <Link style={{textDecoration:"none"}}to={"/quiz/student"}><button style={{marginRight:"20px"}}>Attempt</button></Link>
                    </div>
                    <br/>
                    <span style={{fontSize:"15px",marginTop:"2px",marginBottom:"2px"}}>The quiz contains 5 questions . Time alloted is 10 min please submit your resonses on time  </span>
                    
                </div>
         </div>

})}
   <h1>Completed Quiz</h1>
            <hr style={{width:"100%"}}/>

            {[1,2,3,4,5].map((v)=>{

                return    <div key={v} className="listtile">
                <div style={{display:"flex", flexDirection:"column" ,paddingLeft:"22px"}}>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                     <div style={{flexGrow:"1"}}>  <h3 style={{margin:0}}>Quiz {v}</h3>
                    <span style={{fontSize:"10px",marginTop:"2px"}}>Today , 8:00pm</span></div>
                    <div style={{marginRight:"20px",cursor:"default"}} >Completed</div>
                    </div>
                </div>
         </div>

})}
         

            </div>
}
{id==="teacher" &&  <div className="cont">
            <h1>Posted Quiz</h1>
            <hr style={{width:"100%"}}/>
            <div style={{display:"flex",alignItems:"center",justifyContent:"flex-start",width:"100%",marginBottom:"10px"}}>
            <button style={{}}>Create New Quiz</button>
            </div>
                             

            {[1,2,3].map((v)=>{

                return    <div key={v} className="listtile">
                <div style={{display:"flex", flexDirection:"column" ,paddingLeft:"22px"}}>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                     <div style={{flexGrow:"1"}}>  <h3 style={{margin:0}}>DSA Quiz 1</h3>
                    <span style={{fontSize:"10px",marginTop:"2px"}}>Today , 8:00pm</span></div>
                    <div className="scd" style={{marginRight:"20px",cursor:"default"}} >Scheduled</div>                    </div>
                    <br/>
                    <span style={{fontSize:"15px",marginTop:"2px",marginBottom:"2px"}}>The quiz contains 20 questions . Time alloted is 20 min The quiz contains 20 questions  </span>
                    
                </div>
         </div>

})}
   <h1>Evaluations</h1>
            <hr style={{width:"100%"}}/>
            <div className="listtile">
                <div style={{display:"flex", flexDirection:"column" ,paddingLeft:"22px"}}>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                     <div style={{flexGrow:"1"}}>  <h3 style={{margin:0}}>DSA Quiz 1</h3>
                    <span style={{fontSize:"10px",marginTop:"2px"}}>Today , 8:00pm</span></div>
                    <div style={{marginRight:"20px",cursor:"default"}} >Pending</div>
                    <button style={{marginRight:"20px"}}>Evaluate</button>
                    </div>
                </div>
         </div>
         <div className="listtile">
                <div style={{display:"flex", flexDirection:"column" ,paddingLeft:"22px"}}>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                     <div style={{flexGrow:"1"}}>  <h3 style={{margin:0}}>DSA Quiz 1</h3>
                    <span style={{fontSize:"10px",marginTop:"2px"}}>Today , 8:00pm</span></div>
                    <div style={{marginRight:"20px",cursor:"default"}} >Pending</div>
                    <button style={{marginRight:"20px"}}>Evaluate</button>
                    </div>
                </div>
         </div>
            {[1,2,3].map((v)=>{

                return    <div key={v} className="listtile">
                <div style={{display:"flex", flexDirection:"column" ,paddingLeft:"22px"}}>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                     <div style={{flexGrow:"1"}}>  <h3 style={{margin:0}}>DSA Quiz 1</h3>
                    <span style={{fontSize:"10px",marginTop:"2px"}}>Today , 8:00pm</span></div>
                    <div style={{marginRight:"20px",cursor:"default"}} >Completed</div>
                    </div>
                </div>
         </div>

})}
         

            </div>}




            </div>
        </Background>
    </React.Fragment>
   
}
export default Home;