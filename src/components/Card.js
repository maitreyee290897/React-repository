import React,{Component} from 'react';

export default class Card extends Component {

    constructor() {
        super();
 
    }

  
   // details() {
   //     console.log(this);
   //     console.log('Came inside the click event handler');
   // }

    render(){
        return  (
            <div className="card" style={{width: 18 +'rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.body}</p>
                    <a className="btn btn-primary" onClick={() => this.props.selected(this.props)}>Details</a>
                    {
                        //<a href="#" className="btn btn-primary">Go somewhere</a>
                    }
                </div>
                </div>
        );
    }
}
