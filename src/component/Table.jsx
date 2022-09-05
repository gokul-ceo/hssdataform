import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'
import  { useEffect, useState } from "react";
// import Navbar from "./header";
let My_list =[];
function Tabledisplay(){
  const[loading,setloading] = useState(false);
  const[data,setdata]=useState(My_list)
   function fetchData(){
    setloading(true)
    axios.get('https://arcane-journey-42241.herokuapp.com/data')
    .then(res =>{
      My_list = res.data
      setdata(My_list)
      setloading(false)
    })
  }
 useEffect(()=>{
    fetchData()
  },[]);
  // var today = new Date()
  // var dd = today.getDate();
  //     var mm = today.getMonth() + 1;

  //     var yyyy = today.getFullYear();
  //     if (dd < 10) {
  //         dd = '0' + dd;
  //     }
  //     if (mm < 10) {
  //         mm = '0' + mm;
  //     }
  //     var TodayDate = dd + '/' + mm + '/' + yyyy;

  return <>
     {loading? (
     <div className="text-center my-5">
     <div className="spinner-border" role="status">
       <span className="visually-hidden">Loading...</span>
     </div>
   </div>):
   ( 
    <div>
    {(() =>{
      if (My_list.length==='0'){
        return (<div className="container-sm bg-primary"><h4>No data available</h4></div>)
      }else{
        return (<div className="container p-2 bg-light my-5" id="display-table">
        <table className="table table-sm my-2" id="table">
      <thead className=" table-light">
      <tr>
        <th scope="col" className="fs-5 my-2">S.NO</th>
        <th scope="col" className="fs-5 my-2">Date</th>
        <th scope="col" className="fs-5 my-2">Time</th>
        <th scope="col" className="fs-5 my-2">Title</th>
        <th scope="col" className="fs-5 my-2">Type</th>
        <th scope="col" className="fs-5 my-2">Amount</th>
      </tr>
    </thead>
    <tbody>
       {data?.map((item,i)=> (
        <tr key={i}>
        <td className="fs-5">{i+1}</td>
        <td className="fs-5">{item.Date}</td>
        <td className="fs-5">{item.time}</td>
        <td className="fs-5">{item.title}</td>
        <td className="fs-5">{item.type}</td>
        <td className="fs-5">{item.amount}</td>
      </tr>
       ))}
    </tbody>
    </table>
  </div>)
      }

    }

    )()}

     </div>
   )
  
     }

  <button onClick={fetchData}>Refresh</button>
  </>
    
  }

  // return <h1>Iam table display1</h1>
    // var totalcredit = []
  //   const[data,setdata]=useState()
  //   axios.get('http://localhost:4000/data')
  //   .then(res =>{
  //     // console.log(res.data);
  //      setdata(res.data)
  //     // console.log(arr);
  //     })
  //      return <React.Fragment>
  //     <table class="table">
  //   <thead>
  //   <tr>
  //     <th scope="col">First</th>
  //     <th scope="col">Last</th>
  //     <th scope="col">Handle</th>
  //   </tr>
  // </thead>
  // <tbody>
  //    {data?.map((item)=> (
  //     <tr>
  //     <td>{item.title}</td>
  //     <td>{item.type}</td>
  //     <td>{item.amount}</td>
  //   </tr>
  //    ))}
  // </tbody>
  // </table>
  // </React.Fragment>
    
//     return <>
  //     <table class="table">
  //   <thead>
  //   <tr>
  //     <th scope="col">#</th>
  //     <th scope="col">First</th>
  //     <th scope="col">Last</th>
  //     <th scope="col">Handle</th>
  //   </tr>
  // </thead>
  // <tbody>
    
     
//   </tbody>
// </table>
//     </>
      
 

export default Tabledisplay;