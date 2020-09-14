import React from 'react';

class Event extends React.Component{


    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {foo: 'Click me'};
                        }


     handleClick(){
        this.setState(
            {
                foo: 'bar'
            });
        console.log('Click');
            }


    render(){
        return(
            <button onClick={this.handleClick}>
                 {this.state.foo}
                 </button>
        );
            }
}


export default Event;