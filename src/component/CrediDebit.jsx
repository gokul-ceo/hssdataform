import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
function CreditDebit(props){
    return <>
        <div className='container-sm text-center my-5  display-data'>
       <div className='row gap-4'>
       <div className='col h-auto border rounded border-success'>
         <span className='fs-1'style={props.style1}>Credit</span>
         <h3 className="fs-1">+{props.C}</h3>
       </div>
       <div className='col h-auto border  rounded border-danger'>
       <span className='fs-1' style={props.style2}>Debit</span>
       <h3 className="fs-1">-{props.D}</h3>
       </div>
        </div>
        <div className='row'>
        <div className='col'>
          <div className='container-sm border bg-warning  rounded border-warning my-2'>
            <span className='fs-1 my-auto'>Total: <span>{props.T}</span></span>
          </div>
        </div>

        </div>
       </div>
    </>
}
export default CreditDebit;