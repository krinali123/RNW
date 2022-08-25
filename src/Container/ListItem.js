import React, { useEffect, useState } from 'react';

function ListItem({getItem}) {
    const [item,setItem]=useState([0])
    useEffect(( )=>{
        setItem(getItem(5))
    },[getItem])
    return (
        <div>
            {
                item.map((i)=>{
                    
                console.log(i)
                    return (
                        <p>{i}</p>
                    )
                })
            }
        </div>
    );
}

export default ListItem;