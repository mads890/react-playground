import React from 'react';

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8,
    };
    state = {
        chamber: null,
        spinningTheChamber: false,
        action: 'Nothing is happening'
    };
    chamberSelect = () => {
        let newChamber = Math.ceil(Math.random() * 8);
        this.setState ({ chamber: newChamber, spinningTheChamber: false })
        if (newChamber === this.props.bulletInChamber) {
            this.setState({ action: 'BANG!' })
        }
        if (newChamber !== this.props.bulletInChamber) {
            this.setState({ action: 'you\'re safe!' })
        }
    }
    triggerFunct = () => {
        this.setState({ spinningTheChamber: true, action: 'Spinning the chamber and pulling the trigger...' });
        setTimeout(this.chamberSelect, 2000);

    }
    render() {
        return (
            <div>
                <p>{this.state.action}</p>
                <button onClick={this.triggerFunct}>
                    Pull the trigger
                </button>
            </div>
        )
    }
}

export default RouletteGun;