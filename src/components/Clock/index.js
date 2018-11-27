import React, { Component } from 'react';

class Clock extends Component {
    constructor() {
        super()
        this.state = {
            time: '00:00:00'
        }
    }
    componentDidMount() {
        setInterval(this.startTime, 500)
    }
    startTime = () => {
        let today = new Date();
        let hour = today.getHours();
        let minute = today.getMinutes();
        let second = today.getSeconds();
        minute = this.checkTime(minute);
        second = this.checkTime(second);
        this.setState({ time: hour + ":" + minute + ":" + second });
        // let t = setTimeout(startTime, 500);
    }
    checkTime = (i) => {
        if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
        return i;
    }
    render() {
        return (
            <div>
                {this.state.time}
            </div>
        )
    }
}

export default Clock