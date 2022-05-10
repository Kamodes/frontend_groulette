import { useState } from "react";

let count = 0;

/*
function Count() {
  let count = 0;
  function randnum(){
    const randnum = Math.floor( Math.random() * 10 );
    count = randnum
    return (
      <div>
        <h2>カウント：{ count }</h2>
      </div>
    )
  }
  //setInterval(randnum, 1000)
}
*/

function Count() {

  //const [count, setCount] = useState(0);

  var randnum = Math.floor( Math.random() * 10 );
  
  return (
      <div>
          <h1>Counter</h1>
          <h2>カウント: { randnum }</h2>
      </div>
);
}

setInterval(Count, 1000)


export default Count;