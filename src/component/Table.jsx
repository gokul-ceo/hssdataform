import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'
import  { useEffect, useState } from "react";
import Navbar from "./header";
let My_list =[];
function Tabledisplay(){
  const[data,setdata]=useState(My_list)
  function fetchData(){

    axios.get('https://arcane-journey-42241.herokuapp.com/data')
    .then(res =>{
      My_list = res.data
      setdata(My_list)
    })
  }
 useEffect(()=>{
    fetchData()
  },[]);
  var today = new Date()
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

  return <>
     <Navbar/>
     <a href="/">click me!</a>
     {/* <div className="container-md overflow-auto p-2">
      <div className="contianer-sm d-inline border-bottom border-5 border-info">
      <span className="fs-5 fw-bold text-info">Displaying of {TodayDate}</span>
      </div>
      <table className="table table-sm my-4">
    <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Title</th>
      <th scope="col">Type</th>
      <th scope="col">Amount</th>
    </tr>
  </thead>
  <tbody>
     {data?.map((item)=> (
      <tr>
      <td>{item.Date}</td>
      <td>{item.title}</td>
      <td>{item.type}</td>
      <td>{item.amount}</td>
    </tr>
     ))}
  </tbody>
  </table>
</div> */}
<div id="display-table">
<table className="table table-sm my-4">
    <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Title</th>
      <th scope="col">Type</th>
      <th scope="col">Amount</th>
    </tr>
  </thead>
  <tbody>
     {data?.map((item)=> (
      <tr>
      <td>{item.Date}</td>
      <td>{item.title}</td>
      <td>{item.type}</td>
      <td>{item.amount}</td>
    </tr>
     ))}
  </tbody>
  </table>

</div>

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