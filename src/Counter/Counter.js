import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementcounter, incrementcounter } from '../Redux/Action/Counter.Action';

function Counter(props) {
    const dispach=useDispatch();
    const Counter =useSelector(state=> state.counter)

  const handleincrement=()=>{
    dispach(incrementcounter())
  }
  const handledecrement=()=>{
    dispach(decrementcounter())
  }
    return (
        <div>
            <button onClick={()=>handleincrement()}>+</button>
            <p>{Counter.counter}</p>
            <button onClick={()=>handledecrement()}>-</button>
        </div>
    );
}

export default Counter;