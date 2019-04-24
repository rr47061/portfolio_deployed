import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './components/test'
//import  Main from './website/Main'
import {BrowserRouter} from "react-router-dom";
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
//import IntegrationReactSelect from './website/autoinputmd'
// import App from './App';
 //import Test from './components/test';
import App from "./App";
import IntegrationDownshift from './website/autosuggest';
 import * as serviceWorker from './serviceWorker';
//
//  import Diagnosis from './components/Diagnosis'
// import Symptoms from "./website/Symptoms";
// import { Container } from 'react-bootstrap';
// import ProductList from './website/apicall';
// import InputResult from "./website/inputresult";
// import Keyvalue from "./website/keyvalue";
// import InputResultMd from "./website/autoinputmdresult";
// import Booklist from "./topbook/booklist";
// var num1 = 10;
// var num2 = 5;
//
//
// function  updateNum() {
//
//     var sum = num1 + num2;
//     return sum;
// }
// var styleVar = {
//     backgroundColor: 'red',
//     color: 'blue',
//     fontSize: 25,
//     width: 100
// };
//
// var tagexample = (
//     <div>
// <h2>hello world</h2>
// <h2> this is rohit </h2>
//     </div>
// );
// var element = <input style={styleVar} className="nameinput"/>
  //  ReactDOM.render(<h1>{updateNum()}</h1>, document.getElementById('root'));

//ReactDOM.render(<h1>{tagexample}</h1>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//setInterval(updateNum,1000)

// serviceWorker.unregister();

/*
var product = { name: "apple", quantity: -25};
// eslint-disable-next-line
if(product.quantity < 0)
{
    var element = <h1> product out of stock  </h1>
}
else
{
    var element = <h2>The product qunatity is  {product.quantity}</h2>
}

ReactDOM.render(element,document.getElementById("root"));
*/
// passing value to a function
// function HelloWorld(props)
// {
//     return <h1> Best of lUck Mohit {props.message} </h1>
// }
//ReactDOM.render(<HelloWorld message = "From Laddu"/>,document.getElementById("root"));

//function inside function
/*
function ShoppingApp(){
    return (
        <div>
            <div>
                <h1>My Shopping List</h1>
                <h2>Total Number of Items: 9</h2>
            </div>
            <div>
                <h3>Food</h3>
                <ol>
                    <li>Apple</li>
                    <li>Bread</li>
                    <li>Cheese</li>
                </ol>
            </div>

            <div>
                <h3>Clothes</h3>
                <ol>
                    <li>Shirt</li>
                    <li>Pants</li>
                    <li>Hat</li>
                </ol>
            </div>

            <div>
                <h3>Supplies</h3>
                <ol>
                    <li>Pen</li>
                    <li>Paper</li>
                    <li>Glue</li>
                </ol>
            </div>


        </div>
    )
}

ReactDOM.render(
    <ShoppingApp/>,
    document.getElementById("root")
);
*/
/*
function ShoppingTitle(props)
{
    return (
        <div>
        <h2>"Rohit Ranjan" {props.title}</h2>
        <h2> "Total number of items : " {props.number}</h2>
        </div>
    )
}
function ListItem(props)
{
   return <li>{props.item}</li>
   // return <li>{props.item}</li>

}
function ShoppingList(props)
{
    return (
        <div>
            <h3> {props.header}</h3>
            <ol>
            <ListItem item = {props.items[0]}/>
            <ListItem item = {props.items[1]}/>
            <ListItem item = {props.items[2]}/>
            </ol>

        </div>
    )

}
function ShoppingAp(props)
{
    return (
        <div>
            <ShoppingTitle title = "My Shopping List" numItems = "9"/>
            <ShoppingList header = "Food" items = {[ "Apple","Bread","Cheese"]}/>
            <ShoppingList header = "Clothes" items = {[ "Shirt","Pants","Hat"]}/>
            <ShoppingList header = "Supplies" items = {[ "Pen","Paper","Glue"]}/>
        </div>
    )
}
ReactDOM.render(
    <App/>,
    document.getElementById("root")
)
*/
// function ShoppingTitle(props){
//     return (
//         <div>
//             <h1>{props.title}</h1>
//             <h2>Total Number of Items: {props.numItems}</h2>
//         </div>
//
//     )
// }
// function ListItem(props){
//     return <li>{props.item}</li>
// }
//
// function ShoppingList(props){
//     return (
//         <div>
//             <h3>{props.header}</h3>
//             <ol>
//                 <ListItem item = {props.items[0]}/>
//                 <ListItem item = {props.items[1]}/>
//                 <ListItem item = {props.items[2]}/>
//             </ol>
//         </div>
//     )
// }
//
//
// function ShoppingApp(props){
//
//     return (
//         <div>
//             <ShoppingTitle title = "My Shopping List" numItems = "9"/>
//             <ShoppingList header = "Food" items = {[ "Apple","Bread","Cheese"]}/>
//             <ShoppingList header = "Clothes" items = {[ "Shirt","Pants","Hat"]}/>
//             <ShoppingList header = "Supplies" items = {[ "Pen","Paper","Glue"]}/>
//         </div>
//     )
// }

// ReactDOM.render(
//     <ShoppingApp/>,
//     document.getElementById("root")
// )


// function Heading(props)
// {
//     return <h2> welcome to React Transportation </h2>
// }
// function NextHead()
// {
//     return   "The Best Place to buy Vehicle Online ";
// }
//
// function ChooseOption()
// {
//     return(
//         <div>
//         <h3> Choose Option</h3>
//         New Only  <input type="checkbox" id="coding" name="interest" value="coding" checked="true"/>
//         <br/>
//         Select Type <select>
//             <option value="All">All</option>
//             <option value="Cars">Cars</option>
//             <option value="Trucks">Trucks</option>
//             <option value="Convertibles">Convertibles</option>
//         </select>
//         </div>
//     )
// }
// function VehicleType(props)
// {
//     return <h3>{props.vehicletype}</h3>
// }
// function CarHeading(props)
// {
//     return <h4 style={{marginLeft: 15}}> Year Model Price Buy <br/></h4>
// }
// function BuyNow ()
// {
//     return  <button>Buy Now</button>
// }
//
// function DataFun(props)
// {
//     return (
//         <p>
//             <h3> {props.vehicletype} </h3>
//             <CarHeading/>
//         {props.year }, {props.model} , {props.price }
//             <BuyNow/> <br/>
//         </p>
//     )
// }
// function AllComponents(props)
// {
//     return (
//         <div style={{marginLeft: 15}} id={5} >
//             <Heading/>
//             <NextHead/>
//             <ChooseOption/>
//             <VehicleType vehicletype={"Cars"}/>
//             <div >
//             <DataFun  year={"2001"}  model={"A"}  price={"200400"}/>
//             <DataFun  year={"2001"}  model={"A"}  price={"200400"}/>
//             <DataFun  year={"2001"}  model={"A"}  price={"200400"}/>
//             </div>
//             <VehicleType vehicletype={"Cars"}/>
//             <DataFun  year={"2001"}  model={"A"}  price={"200400"}/>
//             <DataFun  year={"2001"}  model={"A"}  price={"200400"}/>
//             <DataFun  year={"2001"}  model={"A"}  price={"200400"}/>
//
//
//
//         </div>
//     )
// }
//
//
ReactDOM.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>,
    document.getElementById("root")
);

// ReactDOM.render(
//         <Symptoms/>, document.getElementById("root")
// );

// ReactDOM.render(
//     <Keyvalue/>, document.getElementById("root")
// );
// ReactDOM.render(
//     <InputResult/>, document.getElementById("root")
// );
// ReactDOM.render(
//     <IntegrationDownshift/>, document.getElementById("root")
// );
//

// child class is called
// ReactDOM.render(
//     <InputResultMd/>, document.getElementById("root")
// );
// ReactDOM.render(
//     <App/>, document.getElementById("root")
// );



//ServiceWorker();
// ReactDOM.render(<Container>
//  <h1 style={{textAlign:'center'}}>React Tutorial</h1>
//  <ProductList />
// </Container> , document.getElementById("root"));

// class Index extends Component
// {
//  // method to check even or odd
//  Check() {
//   let  num = 5;
//
//   // remove the below comment to take input using prompt
//   //var num = prompt("enter number","number");
//
//
// // check whether num is odd or even
//   return (num % 2 === 0 ? "even" : "odd");
//
//  }
//
//  render() // used to render the components inside this
//  {
//   return(   // return after rendering
//       <div> Given Number is :   {this.Check()} </div>
//   );
//  }
// }
//
//
// // calling the render method of Index.jsx in the index.html file of React
// ReactDOM.render(
//     <Index/>, document.getElementById("root")
// );
// ReactDOM.render(
//     <Booklist/>, document.getElementById("root")
//  );