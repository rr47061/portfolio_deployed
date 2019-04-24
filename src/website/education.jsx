import React,{Component} from "react";
import {Cell, Grid} from "react-mdl";


class Education extends Component{

    render()
    {
        return (
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear}-{this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h2 style={{marginTop:"0px"}}>{this.props.schoolName}</h2>
                        <p>{this.props.description}</p>

                </Cell>

        </Grid>
        );
    }
}
export default Education