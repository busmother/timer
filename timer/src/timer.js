import React, { Component } from 'react'

class Timer extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return(
            <h1>
                {this.props.time}
            </h1>
        )
    }
}

export default Timer