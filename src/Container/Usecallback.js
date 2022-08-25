import React, { useCallback, useState } from 'react';
import ListItem from './ListItem';

function Usecallback(props) {
    const [dark,setDark]=useState(false)
    const [number,setnumber]=useState(0)

    const theme ={
        backgroundColor:dark ? '#000':'#fff',
        color:dark ? '#fff':'#000',
        height: '100vh',
    }
    const getItem=useCallback((i)=>{
        return[i+number,i+number+1,i+number+2]
    },[number])
    console.log(number);
    return (
        <div style={theme}>
            <input type="number" placeholder='Enter your name' onChange={(e)=> setnumber(parseInt(e.target.value))}/>
            <button onClick={(e)=>setDark(!dark)}>change theme</button>
            <ListItem getItem={getItem}/>
        </div>
    );
}

export default Usecallback;