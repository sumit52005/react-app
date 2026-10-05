//import { type MouseEvent } from "react";
interface Props{
    items : string[];
    heading: string
    onSelectitem: (item:string )=> void;
}
import {useState} from 'react';
function ListGroup({items,heading,onSelectitem}:Props){
    
    //Hook 
    const [selectedIndex,setSelectedIndex]=useState(-1);

     

    //const handleClick=(event:MouseEvent) => console.log(event);
    return( <>

    <h1>{heading}</h1>
    
    {items.length === 0 ?<p>No items found</p>:null}
  
    <ul className="list-group">
        {items.map((item,index) => 
        <li key={index}
            className={selectedIndex===index ? 'list-group-item active' : 'list-group-item'}
            onClick={()=>{setSelectedIndex(index);
            onSelectitem(item)
            }}> 
            {item}
        </li>)}
    </ul>
    </>
    );
}
export default ListGroup;