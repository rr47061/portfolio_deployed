// import React, { Component } from 'react';
// import './testStyle.css';
// import TodoForm from './TodoForm.jsx'
// //import Main from './main'
// import RegisterBox from './register'
// import LoginBox from './login'
// import NavBar from './navigationBar'
//
//
//
// /*
// class Test extends Component
// {
//     constructor(props)
//     {
//         super(props);
//         this.state = {value: 0 };
//         //binding is necessary to make `this` point to the correct object
//         this.clickHandler = this.clickHandler.bind(this);
//     }
//     clickHandler()
//     {
//
//         this.setState((prevState,props) => {return {value: prevState.value + 1 }})
//     }
//
//     render() { return <button onClick={this.clickHandler}> click me  {this.state.value} </button>}
//
//    // render() { return <div> {this.state.value}</div>}
// }
// */
// class Details extends React.Component{
//     render(){
//         return <h1>{this.props.details}</h1>
//     }
// }
// class Button extends React.Component{
//     render(){
//         return (
//             <button style = {{color: this.props.active? 'red': 'blue'}} onClick={() => {this.props.clickHandler(this.props.id,this.props.name)}}>
//                 {this.props.name}
//             </button>
//         )
//     }
// }
// //class App extends React.Component{
//     // constructor(props){
//     //     super(props)
//     //     this.state = {activeArray:[0,0,0,0], details:""}
//     //     this.clickHandler = this.clickHandler.bind(this)
//     // }
//     // clickHandler(id,details){
//     //     var arr = [0,0,0,0]
//     //     arr[id] = 1
//     //     this.setState({activeArray:arr,details:details})
//     //     console.log(id,details)
//     // }
//
//
// //     render(){
// //         return (
// //             <div>
// //                 {/*<Button id = {0} active = {this.state.activeArray[0]} clickHandler = {this.clickHandler} name="bob"/>*/}
// //                 {/*<Button id = {1} active = {this.state.activeArray[1]} clickHandler = {this.clickHandler} name="joe"/>*/}
// //                 {/*<Button id = {2} active = {this.state.activeArray[2]} clickHandler = {this.clickHandler} name="tree"/>*/}
// //                 {/*<Button id = {3} active = {this.state.activeArray[3]} clickHandler = {this.clickHandler} name="four"/>*/}
// //                 {/*<Details details = {this.state.details}/>*/}
// //                 <Circle/>
// //             </div>
// //
// //
// //         )
// //     }
// // }
//
// // function Circle(props){
// //     var styleCircle = {
// //         backgroundColor:"pink",
// //         border: "1px solid black",
// //         borderRadius: "100%",
// //         paddingTop: "98%"
// //     }
// //     return (
// //         <div style = {styleCircle}></div>
// //     )
// // }
// //
// // function Cell(props) {
// //     var styleCell = {
// //         backgroundColor: "yellow",
// //         border: "1px solid black",
// //         height: "50px",
// //         width: "50px",
// //     }
// //     return (
// //         <div style={styleCell}> <Circle/> </div>
// //     )
// // }
// // function Row(props)
// // {
// //     var styleRow = {
// //         display: "flex"
// //     }
// //     var cells = [];
// //     for(let i = 0 ;i < 7; i++)
// //     {
// //         cells.push(<Cell/>)
// //     }
// //     return (
// //         <div style={ styleRow}> {cells} </div>
// //     )
// // }
// // function Board(props)
// // {
// //     var row = [];
// //     for(let i=6 ; i >=0 ; i--)
// //     {
// //         row.push(<Row/>)
// //     }
// //     return (
// //         <div> {row} </div>
// //
// //     )
// // }
// //
// // class Game extends  Component
// // {
// //     constructor(props)
// //     {
// //         super(props);
// //         this.handleClick = this.handleClick.bind(this); // binding
// //         var cells = [];
// //         for(let i = 0 ; i< 6 ; i++)
// //         {
// //             cells.push(new Array(7).fill(0))
// //         }
// //         this.state = {player : false , winner : 0, cells : cells }
// //     }
// //
// //     handleClick()
// //     {
// //         console.log("clicked");
// //     }
// //     render()
// //     {
// //         return <div>
// //                 <h1>Black Turn</h1>
// //                 <Board/>
// //                 <button> Restart </button>
// //             </div>
// //
// //     }
// // }
// //
// // function ArrayCheck(props)
// // {
// //     var elements = [];
// //     var array = [1,2,3,4,5];
// //
// //     for(let i = 0; i < array.length; i++)
// //             {
// //                 elements.push(<li>{array[i]}<li/>)
// //             }
// //
// //             render()
// //             {
// //                return  <div>
// //                     <ol>{elements}</ol>
// //                 </div>
// //
// //
// //             }
// // }
// //
// // export default ArrayCheck;
//
//
// class Todo extends Component // parent class
// {
//     constructor(props)
//     {
//         super(props);
//         this.changeStatus = this.changeStatus.bind(this); // binding this
//         this.updateTask = this.updateTask.bind(this); // method for updating
//         this.addTask = this.addTask.bind(this); // method for adding task
//
//         // this.state = { names:['rohit','mohit','soni'] }
//         //this.state = { name: 'ranjan'};
//         this.state = {
//             tasks: [
//                     {
//                      name: "buy milk",
//                     completed: false
//                     },
//                      {
//                     name: "buy mobile",
//                     completed: false
//                     }
//                     ],
//             currentTask: '' // adding one more state
//         }
//     }
//  // newValue is an EVENT
//     updateTask(newValue) // modify the state
//     {
//         this.setState(
//             {
//                 currentTask : newValue.target.value
//             }
//         )
//     }
//
//     addTask(evt) // receives event
//     {
//         evt.preventDefault(); // do  not reload
//         let tasks= this.state.tasks;
//         let currentTask = this.state.currentTask;
//         tasks.push({name:currentTask , completed: false }) // adding to the array
//
//         this.setState({tasks:tasks,currentTask: ''})
//     }
//
//     changeStatus(index) // function for changing the parent property
//     {
//         console.log(this.state.tasks[index]);
//         var newtasks = this.state.tasks;
//         var singletask = newtasks[index];
//         singletask.completed = ! singletask.completed;
//         this.setState({tasks : newtasks})
//
//
//     }
//     render()
//     {
//       return (
//           <ul >
//               {
//                   this.state.tasks.map((tasks, index) => {
//                       return <TodoItem key={tasks.name} clickHandler ={this.changeStatus} index={index} details={tasks}/>
//                   })
//               }
//               {/*// passing current state and updateTask function to TodoForm*/}
//               <TodoForm currentTask = {this.state.currentTask} updateTask={this.updateTask} addTask={this.addTask}/>
//           </ul>
//       )
//     }
// }
//
// // child class cannot set parent property
//
// // class TodoItem extends Component // child class
// // {
// //     render() {
// //         return(
// //            <li  onClick={() => {this.props.clickHandler(this.props.index);}} // clickHandler(index) for parents
// //                className={this.props.details.completed ? 'completed' : ''}>
// //           {this.props.details.name}
// //            </li>
// //     )
// //     }
// // }
//
// const TodoItem = (props)=> { // stateless functional call
//
//     return(
//            <li  onClick={() => {props.clickHandler(props.index);}} // clickHandler(index) for parents
//                className={props.details.completed ? 'completed' : 'notcom'}>
//           {props.details.name}
//            </li>
//     )
// }
//
//
//
// export default Main;