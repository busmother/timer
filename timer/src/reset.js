import React, { Component } from 'react'

class Reset extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return(
            <button onClick={this.props.onClickReset} classname="reset">
                Reset the timer
            </button>
        )
    }
}

export default Reset