import React from 'react';
export const  PropLearn =(props)=> {
    return(
        <div>
            <h1>
                Welcome {props.name}!!
            </h1>
            <p>
                {props.children }
            </p>
        </div>
    )
}