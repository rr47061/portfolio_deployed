import React, { Component } from 'react';
import IntegrationReactSelect from './autoinputmd'
// data will be passed here


class InputResultMd extends Component {

    state= {
        fields: {}
    };
    onSubmit = (fields) => {
        console.log(fields);
        this.setState({fields: fields});

    };
getfun = async (e)=> {
    e.preventDefault();
    const data = await e.json();
    console.log(data);
};
//
// check=() => {
//     //const vari = JSON.parse(this.state.fields);
//     console.log("vari = ",this.state.fields.single.value);
// }

    render()
    {
        // const vari = JSON.parse(this.state.fields);
        // console.log("vari = ",vari.single.value);
        // const vari1 = Object.values(vari)[0];
        // //console.log("vari1 = ",vari[0]);
        // console.log("vari1 = ",vari1);
        //
        // // console.log("vari2 = ",vari.value);

        // console.log("obj-Entries = ",Object.entries(this.state.fields));
        // console.log("obj-value = ",Object.values(this.state.fields));
        // console.log("obj-property = ",Object.getOwnPropertyNames(this.state.fields));
        // const vari = Object.entries(this.state.fields);
        // console.log("vari-property = ",Object.getOwnPropertyNames(vari));
        // console.log("vari-value = ",Object.values(vari)[0]);
        // const vari1 = Object.values(vari);
        // console.log(vari1);
        //Object.entries(vari).forEach(([key, value]) => console.log(`${key}: ${value}`)); // "foo: bar", "baz: 42"
       // console.log("vari = ",vari);

        // console.log("here", this.state.fields);
        // const example = this.state.fields.map(item => item);
        // console.log(example);
        return (
            <div >
                <IntegrationReactSelect onSubmit = {this.onSubmit}/>
                {/*display data in json format*/}
                {this.props.value}
                <h3>{  JSON.stringify(this.state.fields)}</h3>



                {/*<h3>{Object.values(this.state.fields.single.value}</h3>*/}
                {/*display value of each property*/}


                {/*<h3>hello label = {this.state.fields.label}</h3>*/}
                {/*<h3>{this.state.fields.value}</h3>*/}



            </div>
        );
    }
}
export default InputResultMd