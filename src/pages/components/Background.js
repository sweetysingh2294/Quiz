import React from 'react';
import back from '../../assets/back.jpg'
import Navbar from './Navbar';
import '../../index.css';
const Background =(props)=>{
   return(
       <div>
                  <Navbar/>
    
   <div className='back' style={{backgroundImage:`url(${back})` , display: 'flex',
   justifycontent:' center',
   backgroundRepeat:"repeat-y",
   alignItems: 'center',
   minHight: '100vh'}}>

       {props.children}
      
   </div>  
   
    </div>);
}
export default Background;