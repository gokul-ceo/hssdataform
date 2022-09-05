import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Selecttype(props){
    return <>
        <div className='toggler-div mx-auto my-2 gap-3 container-sm text-center'>
       <div className='row'>
       <div className='col'>
       <button type='button' style={props.style1} className='btn  btn-success ms-2 w-3 btn-lg' onClick={props.function} value='credit' >        Credit      </button>
       </div>
       <div className='col'>
       <button type='button' style={props.style2} className='btn  btn-danger btn-lg' onClick={props.function} value='debit' >      Debit    </button>
       </div>
       </div>
       </div>
    </>
}

export default Selecttype;