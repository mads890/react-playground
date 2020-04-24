import React from 'react';

class HelloWorld extends React.Component {
    state = {
        who: 'World'
    }
    handleClicksWorld = () => {
        const newWho = 'World'
        this.setState({
            who: newWho
        })
    }
    handleClicksFriend = () => {
        const newWho = 'Friend'
        this.setState({
            who: newWho
        })
    }
    handleClicksReact = () => {
        const newWho = 'React'
        this.setState({
            who: newWho
        })
    }
    render() {
        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button onClick={this.handleClicksWorld}>
                    World
                </button>
                <button onClick={this.handleClicksFriend}>
                    Friend
                </button>
                <button onClick={this.handleClicksReact}>
                    React
                </button>
            </div>
        )
    }
}

export default HelloWorld;