import React from "react";
import CreditDebit from "../component/CrediDebit";
import { useState } from "react";
import '../component/App.css'
import Alert from "./Alert";
import axios from "axios";
import Selecttype from "../component/Selecttype";
import Navbar from '../component/header'
const url = 'https://arcane-journey-42241.herokuapp.com/';
// const testurl = 'http://localhost:4000/'
var dataArray = [];
var today = new Date()


function Form(){
var dd = today.getDate();
      var mm = today.getMonth() + 1;

      var yyyy = today.getFullYear();
      if (dd < 10) {
          dd = '0' + dd;
      }
      if (mm < 10) {
          mm = '0' + mm;
      }
      var TodayDate = dd + '/' + mm + '/' + yyyy;
 var nowtime = new Date().toLocaleTimeString();
const[creDit,setcredit]=useState(Number(0));
const[deBit,setdebit]=useState(Number(0));
const[total,settotal]=useState(Number(0));
const[select,setselect] = useState('credit');
function handlechange(e){
  e.preventDefault()
  const status = e.target.value
  setselect(status)

 }


 async function senddetails(senditem){
    axios.post(url,(details))
    .then(function(res){
      console.log('sent details: ',details);
      console.log(res);
      console.log('response has sent!!..');
      
      
      
    })
    // axios.post('http://localhost:4000/',(moredetails))
    // .then(function(res){
    //   console.log("posted details : ",moredetails);
    //   console.log('sent!!');
    // })
}

const[details,setdetails] = useState({title:'',amount:'',type:'',Date:'',time:''});
const[moredetails,setmoredetails] = useState({date:TodayDate,credit:creDit,debit:deBit})
const[sumbited,setsumbited] = useState(false)
function handlesumbit(event){
  
    event.preventDefault()
    console.log("details:  ",details);
    senddetails(details)
    handlechange(event);
    dataArray.push(details)
    
    console.log("dataArray : ",dataArray);
    setdetails({title:'',amount:''});
    setselect('');
   
   
    var totalcredit = []
    var totaldebit = []

    axios.get('https://arcane-journey-42241.herokuapp.com/data')
    .then(res =>{
      var arr = res.data;
      console.log("value of arr: ",arr);
      for(var i in arr){
        if (arr[i].type==='credit'){
        totalcredit.push((arr[i].amount))
        }else if (arr[i].type==='debit'){
          totaldebit.push((arr[i].amount))
        }
        
      } 
      console.log('lenght of totalcredit: ',totalcredit.length);
      var currentcredit = 0
       totalcredit.forEach(element => {
           currentcredit+=element
      });
      var currentdebit = 0
      totaldebit.forEach(element =>{
        currentdebit+=element
      })
      setmoredetails({date:TodayDate,credit:creDit,debit:deBit})
      setdebit(currentdebit)
      setcredit(currentcredit)
      settotal(currentcredit - currentdebit)
    })
   }
   
   const style = {
    display1:{
      color: !select && 'green',
      opacity: select && '0.2',
      fontWeight:'bolder'
    },
    display2:{
      color: select && 'red',
      opacity: !select && '0.5',
      fontWeight:'bolder'
    },
    cmcolor1:{
      color:'green'
    },
    cmcolor2:{
      color:'red'
    },
    cbtn:{
      opacity: select==='debit'&& '0.6'
    },
    dbtn:{
      opacity:select==='credit'&&'0.6'
    },
    wrng:{
      color:'red'
    }

   }
 
   
  const onclick = ()=>{setsumbited(true);
    setTimeout(() => {
      setsumbited(false)
    }, 3000);};
  return <>
  <Navbar/>
  <div className='container-lg  '>
    
   <div className='container-lg p-2 shadow-lg  my-3 bg-body rounded' >
   <div className="contianer-sm text-center mx-auto" >
       <span className="fs-5 text-dark font-monospace ">Expense Tracker</span>
       </div>
       <Selecttype style1 = {style.cbtn} style2={style.dbtn} function = {handlechange} />
       <form className='' onSubmit={handlesumbit}>
       <div className='mb-3'>
       <label className='form-label fw-semibold '>Title</label>
       <input type='text' onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }} onChange={(e)=> setdetails({...details, title: e.target.value,type:select,Date:TodayDate,time:nowtime})} value = {details.title} name='title' className='form-control' id='titleentry' placeholder='enter title' required></input>
       </div>
       <div className='mb-3'>
       <label  className='form-label fw-semibold'>Amount</label>
       <input type='number'onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }} onChange={(e)=>setdetails({...details, amount:e.target.value,type:select,Date:TodayDate,time:nowtime})} value={details.amount} name='amount' className='form-control' id='amountentry' placeholder='enter amount' required></input>
       </div>
       <button type='submit' onClick={onclick} className={select==='credit'?'btn btn-success':'btn btn-danger' }  disabled={select===''?true:false} hidden={select===''&&'hidden'}>{select==='credit'?'Update credit':'Update debit'}</button>
       <CreditDebit style1 = {style.cmcolor1} style = {style.cmcolor2} C={creDit} D={deBit} T={total} />

       </form>
   </div>
   {sumbited? <Alert/> : null}
   
     
  </div>
  </>
 
}
export default Form;