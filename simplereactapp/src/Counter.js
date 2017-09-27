import React from 'react';
import './Counter.css';
var someVariable =3;
var changeFuction = function () {
    this.setState()
    someVariable = someVariable+1;
    console.log(someVariable);
}

var someFunction = () => {
    return someVariable;
}


var Counter = () => {
    return(
        <div className='Counter'>
        <button onClick={changeFuction()}>Add</button>
        <div> {someFunction()} </div>
        </div>
    )
}

export default Counter;