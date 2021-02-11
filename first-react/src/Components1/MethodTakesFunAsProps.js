import React from 'react'

function MethodTakesFunAsProps(props) {

    return (
      <div>
        <button onClick={() => props.MethodAsProps(props.input1)}>click</button>
      </div>
    );
}

export default MethodTakesFunAsProps
