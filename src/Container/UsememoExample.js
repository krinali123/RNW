import React, { useMemo, useState } from 'react';

function UsememoExample(props) {
    const [number, setnumber] = useState(0)
    const [counter, setCounter] = useState(0)



    const findfactorial = (n) => {
        console.log("findfactorial");
        if (n > 1) {
            return n * findfactorial(n - 1)
        } else {
            return 1
        }
    }


    // const result = findfactorial(number)
    const result =useMemo((e)=>{
       return findfactorial(number)
    },[number])
    return (
        <div>
            <input type="text" placeholder='enter value' onChange={(e) => setnumber(e.target.value)} />
            <button onClick={(e) => setCounter(counter + 1)}>click</button>
            <p>counter value:{counter}</p>
            <p>facttorial value:{result}</p>
        </div>
    );
}

export default UsememoExample;