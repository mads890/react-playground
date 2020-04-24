import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            countdown: 'tick', 
            count: 0 
        };
    };
    timer = () => {
        const newCount = this.state.count + 1;
        this.setState({ count: newCount });
        if (newCount >= 8) {
            this.setState({ countdown: 'BOOM!' });
        }
        else if (newCount % 2 === 0) {
            this.setState({ countdown: 'tick' });
        }
        else {
            this.setState({ countdown: 'tock' });
        }
    }
    componentDidMount() {
        this.interval = setInterval(
            this.timer, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
        return (
            <div>
                <p>{this.state.countdown}</p>
            </div>
        )
    }
}

export default Bomb;