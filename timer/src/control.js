import React, { Component } from 'react'

class Control extends Component {

    constructor(props) {
        super(props);
    };

    onClickHandler = () => {
        if(this.props.paused){
            this.props.start();
        }else{
            this.props.stop();
        }
    }

    render() {
        return(
            <button className = {this.props.paused?"paused":""}
                onClick={this.onClickHandler}>
                {this.props.paused?"play":"pause"}
            </button>
        )
    }
}

export default Control