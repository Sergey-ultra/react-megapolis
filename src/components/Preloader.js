import React from "react";
import preloader from '../images/1_9EBHIOzhE1XfMYoKz1JcsQ.gif'

export const Preloader = (props) => {
    return <div style={{backgroung: 'white', display:'flex',alignItems:'center'}}>
        <img src={preloader} style={{alignSelf:'center'}}/>
    </div>

}