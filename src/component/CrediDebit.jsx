import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
function CreditDebit(props){
    return <>
        <div className='container-sm text-center my-5  display-data'>
       <div className='row gap-4'>
       <div className='col h-auto border rounded border-success'>
         <span className='fs-6'style={props.style1}>Credit</span>
         <span>+{props.C}</span>
       </div>
       <div className='col h-auto border  rounded border-danger'>
       <span className='fs-6' style={props.style2}>Debit</span>
       <span>-{props.D}</span>
       </div>
        </div>
        <div className='row'>
        <div className='col'>
          <div className='container-sm border bg-warning  rounded border-warning my-2'>
            <span className='fs-6 my-auto'>Total: <span>{props.T}</span></span>
          </div>
        </div>

        </div>
       </div>
    </>
}
export default CreditDebit;