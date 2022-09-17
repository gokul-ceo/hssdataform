// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { Route, Routes} from 'react-router-dom';
// // import Tabledisplay from './component/Table'
// import Form from './component/form';

// export function App(){
//   return (
//        <Routes>
//         <Route path='/' element={<Form/>}/>
//         {/* <Route path='/table' element={<Tabledisplay/>}/> */}
//        </Routes>
      
//   )
// }
import React from "react";
import {Billingkeyboard} from "./tescomponent/Billingkeyboard";
import Header from "./tescomponent/Header";
function App(){ 
    return <>
    <Header/>
  
    <Billingkeyboard/>
    </>
}

export default App;