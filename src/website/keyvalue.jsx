import React, { Component } from 'react';

// const abc= () =>  {
//     const obj = { foo: 'bar', baz: 42 };
//     console.log(Object.entries(obj));
// };
function sayHello()
{
    const obj = [{ foo: 'bar'},{ baz: 42 }];
    console.log(Object.entries(obj));
    console.log(Object.values(obj));
  //  console.log('hello' + name);
}

//abc('rohit');
// class Keyvalue extends Component {
//     render() {
//         return (
//             <div>
//           <abc/>
//         </div>
//         );
//     }
// }
export default sayHello;