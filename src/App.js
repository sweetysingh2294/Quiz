import React, { Suspense } from 'react';


import {
	BrowserRouter as Router,
	Routes,
	Route,
  } from "react-router-dom";
  import loading from './assets/loading.gif';
const Home=React.lazy(()=> import('./pages/Home'));
const Scorebord=React.lazy(()=> import("./pages/Scoreboard"));
const Profile=React.lazy(()=> import("./pages/Profile"));
const Quiz=React.lazy(()=> import("./pages/Quiz"));
const Login=React.lazy(()=> import("./pages/Login"));

export default function App() {
	return( 
		<Suspense fallback={<div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}}><img width="10%" src={loading}></img></div>}>


	<Router>
	<Routes>
	  <Route path='/' element={<Login/>} />
	  <Route path='/home/:id' element={<Home/>} />
	  <Route path='/scoreboard/:id' element={<Scoreboard/>} />
	  <Route path='/profile/:id' element={<Profile/>} />
	  <Route path='/quiz/:id' element={<Quiz/>} />
	</Routes>
  </Router>
  </Suspense>
  );

}
