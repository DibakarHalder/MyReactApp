import React, { Component } from 'react';
import * as actions from './actions'
import { connect } from 'react-redux';
import Clock from '../Clock'

class Counter extends Component {
    render() {
        return (
            <div>

                <Clock />
                <h1>My React-Redux Counter App</h1>
                <button onClick={this.props.onIncrementAsync}>
                    asyn inc 1sec
                 </button>
                <button onClick={this.props.onIncrement}>
                    Increment
                </button>
                {' '}
                <button onClick={this.props.onDecrement}>
                    Decrement
                </button>
                <hr />
                <div>
                    Clicked: {this.props.count} times
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    count: state.counter.count
})

export default connect(mapStateToProps, actions)(Counter);