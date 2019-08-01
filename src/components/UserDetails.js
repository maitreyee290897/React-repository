import React from 'react';
import axios from 'axios';

export default class UserDetails extends React.Component {

    constructor() {
        super();
      
        console.log("hiiiiiiiiiiiiiiiiiiiiiiiii")
        this.state = {
            phones: []
        }
        //this.selectedProduct = this.selectedProduct.bind(this)
    }



    render() {
        const { id } = this.props.match.params;
        console.log(`id is ${id}`)
        console.log(`this . props`)
        console.log(this.props)
        return (
            <div>
                <h1> user details </h1>
           </div>
            
            )
    }
}