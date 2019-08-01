import React from 'react';
import Card from './Card';
import axios from 'axios';

export default class Main extends React.Component {
   // titleMessage= "iphonwX"
    constructor() {
        super();
       // this.state = {
       //     phones: [
       //         {
       //             name: 'IPhone',
       //             desc: 'Latest Iphone model from Apple'
       //         },
       //         {
       //             name: 'One Plus 6',
       //             desc: 'Flagship phone from OnePlus'
       //         },
       //         {
       //             name: 'Samsung S10',
       //             desc: 'Hight performance..'
       //         }
       //     ]
        // }
        console.log("hiiiiiiiiiiiiiiiiiiiiiiiii")
        this.state = {
           phones: []
       }
        this.selectedProduct = this.selectedProduct.bind(this)
    }

    


    selectedProduct({ title, body }) {

        const filteredList = this.state.phones.filter(phone => phone.id !== title)

        this.setState({
            phones: filteredList
        })
        //this.setState({phones:[data]})
    }

    componentDidMount() {
        console.log(`component is mounted on the DOM`)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const data = res.data;
                console.log(data);
                this.setState({ phones: data })
            })

    }

    
   
    render() {
        return (
            <div className="left">
                {
                    this.state.phones.map((phone, index) => <Card key={index} title={phone.id} body={phone.username} selected={this.selectedProduct} />)
                }
                { //<Card title={titleMessage} />}
                    //<Card title="Samsung s10" body="Brand new Design"></Card> 
                    //<Card/>
                }
            </div>
        );
    }
}

