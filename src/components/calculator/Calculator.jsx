import React, { useEffect, useRef, useState } from 'react'
import './Calculator.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faXmark } from '@fortawesome/free-solid-svg-icons'
let Calculator=()=>{
    let [state,setState]=useState('')
    let toggle=useRef()
    let calRef=useRef()
    let [show,setShow]=useState(false)
   
    let showValue = (e) => {
      const value = e.target.value;

      if (value === '%') {
          setState((prevState) => {
              let match = prevState.match(/(\d+(\.\d+)?)([+\-*/])(\d+(\.\d+)?)$/);

              if (match) {
                  let lhs = parseFloat(match[1]);
                  let operator = match[3];
                  let rhs = parseFloat
                  let percentageValue = lhs * (rhs / 100);

                
                  return prevState.replace(match[0], `${lhs}${operator}${percentageValue}`);
              }

              return prevState;
          });
      } else {
          setState(state + value);
      }
  };

  let equalfun = () => {
      try {
          // Use eval to calculate the expression only if it's not empty
          setState(state !== '' ? String(eval(state)) : '');
      } catch (error) {
          // Handle any evaluation errors
          setState('Error');
      }
  };

  let deletefun = () => {
      setState(state.slice(0, -1));
  };
      let togglefun=()=>{
        toggle.current.classList.toggle('active')
        calRef.current.classList.toggle('active-cal')
        setShow(!show)
        console.log('show')
      }
     
    


    return (
        <>
          <div className="calculator" ref={calRef}>
           
            <div className="cal-box">
               <div className="developer">
               <p className='d-name'>Developer-bisworanjan</p>
               <div className="toggle-div " ref={toggle} onClick={togglefun} >
               
                <div className="toggle">
                  <p>{show?'Dark':'Light'}</p>
                </div>
               </div>
               </div>
                <div className="display">
                    <input type="button" value={state} />
                </div>
                <div className="input-1 d-flex">
                <input type="button" value={'%'} onClick={showValue} />
                <input type="button" value={'.'} onClick={showValue} />
                <input type="button" value={'C'} onClick={()=>setState('')}/>
                <div onClick={deletefun} className='delete'>
                <FontAwesomeIcon icon={faDeleteLeft}
                className='del-icon'
                />
                </div>
               
                </div>
                <div className="input-1">
                <input type="button" value={1} onClick={showValue} />
                <input type="button" value={2} onClick={showValue}  />
                <input type="button" value={3} onClick={showValue} />
               
                    <button className='xmark'  onClick={() => showValue({ target: { value: '*' } })} >

                    <FontAwesomeIcon icon={faXmark}/>

                    </button>
                    {/* <b className='xmark' >
                </b> */}
               
                </div>
                <div className="input-1">
                <input type="button" value={'4'} onClick={showValue} name='one'/>
                <input type="button" value={'5'} onClick={showValue} name='two' />
                <input type="button" value={'6'} onClick={showValue} name='three'/>
                <input type="button" value={'-'} onClick={showValue} name='three'/>
                </div>
                <div className="input-1">
                <input type="button" value={'7'} onClick={showValue} name='one'/>
                <input type="button" value={'8'} onClick={showValue} name='two' />
                <input type="button" value={'9'} onClick={showValue} name='three'/>
                <input type="button" value={'+'} onClick={showValue} name='three'/>
                </div>
                <div className="input-1">
               <input type="button" value={'/'} onClick={showValue} />
                <input type="button" value={'0'} onClick={showValue} />
                <input type="button" value={'='} onClick={equalfun} className='equal-b ' />
               </div>
            </div>

            {/* <b onClick={showValue}>
                <FontAwesomeIcon icon={faDivide}/>
                </b> */}
             
          </div>
        </>
    )
}
export default Calculator