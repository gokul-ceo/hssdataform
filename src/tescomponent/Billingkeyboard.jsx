import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Billingdisplay from "./Billingdisplay";
import BillitemDisplay from "./BillItemDisplay";
const style={
    keyboard:{
    
    }
}
let itemno = [];


export function Billingkeyboard(){
    const[count,setcount] = useState()
    function clickevent(event){
        itemno.push(event.target.value)
        console.log('clicked Item: ',itemno);
        
    }
    function handleenter(e){
        setcount(count+1);
        if(itemno.length==='0'){
            
        }
        setItemno(itemno.join('')); 
        console.log('itemno before pop: ',itemno);
        console.log('Itemno before pop: ',Itemno);
        while(itemno.length>0){
            itemno.pop()
        }
        console.log('itemno after pop: ',itemno);
        console.log('Itemno after pop: ',Itemno);
    }
    function handlecancel(){
        itemno =[];
        setItemno()
    }
    const[Itemno,setItemno] = useState()  
    return <>
    <BillitemDisplay/>
    <Billingdisplay value={Itemno} />
    <div style={style.keyboard} className="container-sm billingkeyboard text-center fs-1">
    <div className="row m-0 p-0 my-2  ">
            <div className="col">
                <button onClick={clickevent} value='7' type= 'button' className='btn btn-outline-primary'>7</button>
            </div>
            <div className="col">
                <button onClick={clickevent} value='8' type= 'button' className='btn btn-outline-primary'>8</button>
            </div>
            <div className="col">
                <button onClick={clickevent}type= 'button' value='9'  className='btn btn-outline-primary'>9</button>
            </div>
            <div className="col">
                <button onClick={clickevent} type= 'button'  style={{'width':'4.4rem'}} className='btn btn-warning'>Menu</button>
            </div>
         </div>
         <div className="row m-0 p-0 my-2">
            <div className="col ">
                <button   onClick={clickevent}  type= 'button' value='4' className='btn btn-outline-primary'>4</button>
            </div>
            <div className="col">
                <button  onClick={clickevent} type= 'button' value='5' className='btn btn-outline-primary'>5</button>
            </div>
            <div className="col">
                <button  onClick={clickevent} type= 'button' value='6' className='btn btn-outline-primary'>6</button>
            </div>
            <div className="col">
                <button onClick={handlecancel}  type= 'button'  className='btn btn-danger'>Cancel</button>
            </div>
         </div>
         <div className="row m-0 p-0my-2 ">
            <div className="col">
                <button  onClick={clickevent} type= 'button' value='1' className='btn btn-outline-primary'>1</button>
            </div>
            <div className="col">
                <button onClick={clickevent}  type= 'button' value='2' className='btn btn-outline-primary'>2</button>
            </div>
            <div className="col">
                <button onClick={clickevent}  type= 'button' value='3' className='btn btn-outline-primary'>3</button>
            </div>
            <div className="col">
                <button type= 'button' onClick={clickevent} style={{'width':'4.4rem'}}  className='btn btn-primary'> Print </button>
            </div>
         </div>
         <div className="row m-0 p-0 my-2">
            <div className="col">
                <button  onClick={clickevent} type= 'button' value='0' className='btn btn-outline-primary'>0</button>
            </div>
            <div className="col">
                <button  type= 'button' value='00' className='btn btn-outline-primary'>00</button>
            </div>
            <div className="col">
                <button   type= 'button' value='.' className='btn btn-outline-primary'>.</button>
            </div>
            <div className="col">
                <button  onClick={handleenter}  type='button'style={{'width':'4.4rem'}} className='btn btn-success'>Enter</button>
            </div>
         </div>
         
    </div>
    </>
}
