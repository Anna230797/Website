import React from 'react'
import './new.css'
import { Link } from "react-router-dom";


function New ({Text}){
    return(
        <div className='new'>
            <p><Link to="info">{Text} </Link></p>
        </div>
    )
}
export default New