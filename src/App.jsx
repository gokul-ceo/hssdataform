import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes} from 'react-router-dom';
import Tabledisplay from './component/Table'
import Form from './component/form';

export function App(){
  return (
      <div>
       <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/table' element={<Tabledisplay/>}/>
       </Routes>
      </div>
  )
}