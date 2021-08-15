import React, { Component } from 'react'

class Reset extends Component {

    render() {
        return(
            <button onClick={this.props.onClickReset} classname="reset">
                Reset the timer
            </button>
        )
    }
}

export default Reset