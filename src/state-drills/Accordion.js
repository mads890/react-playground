import React, { component } from 'react';

class Accordion extends React.Component {
    static defaultProps = {
        sections: []
    };

    state = {
        clickedSectionIndex: null
    }

    handleSectionClick = (index) => {
        this.setState({ clickedSectionIndex: index })
    }

    renderSection = (section, index, clickedSectionIndex) => {
        return(
            <li className='accordion_item' key={index}>
                <button
                    type='button'
                    onClick={this.handleSectionClick(index)}
                >
                    {section.title}
                </button>
                {(clickedSectionIndex === index && <p>{section.content}</p>)}
            </li>
        )
    }

    render() {
        const { currentSectionIndex } = this.state
        const { sections } = this.props
        return (
            <ul className='accordion'>
                {sections.map((section, index) =>
                    this.renderSection(section, index, currentSectionIndex)
                )}
            </ul>
        )
    }
}

export default Accordion;