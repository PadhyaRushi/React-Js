import React, { useState } from 'react';

function StateIncreDecre(props) {
    const[number,setNumDec]=useState(0)
    const onclkDec=()=>{
        console.log("called");
        setNumDec(number-1);
        
    }
    const onclkInc=()=>{
        console.log("called");
        setNumDec(number+1);
    }
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col d-flex gap-3">
                        <button className='btn btn-danger' onClick={onclkDec}><h1>-</h1></button>
                        <h1>{number}</h1>
                        <button className='btn btn-success' onClick={onclkInc}><h1>+</h1></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StateIncreDecre;