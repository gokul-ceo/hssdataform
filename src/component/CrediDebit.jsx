import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
function CreditDebit(props){
    return <>
        <div className='container-sm text-center my-5  display-data'>
       <div className='row gap-4'>
       <div className='col h-auto border rounded border-success'>
         <h2 className='fs-6'style={props.style1}>Credit</h2>
         <span>+{props.C}</span>
       </div>
       <div className='col h-auto border  rounded border-danger'>
       <h2 className='fs-6' style={props.style2}>Debit</h2>
       <span>-{props.D}</span>
       </div>
        </div>
        <div className='row'>
        <div className='col'>
          <div className='container-sm border bg-warning  rounded border-warning my-2'>
            <h1 className='fs-6 my-auto'>Total: <span>{props.T}</span></h1>
          </div>
        </div>

        </div>
       </div>
    </>
}
export default CreditDebit;