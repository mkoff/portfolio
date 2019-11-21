import React, {Component} from 'react';
import './MenuButton.css'

class MenuButton extends Component {
    state = {
        MenuButtonClasses: ['MenuButton'],
        statButton: false
    }
    render() {
        return (
            <button
                onClick={() => {
                    this.setState(prevState => {
                        return {
                            MenuButtonClasses: prevState.MenuButtonClasses.indexOf('MenuButtonActive') !== 1 ?
                                prevState.MenuButtonClasses.concat('MenuButtonActive') :
                                prevState.MenuButtonClasses =
                                    prevState.MenuButtonClasses.splice(
                                        this.state.MenuButtonClasses.indexOf('MenuButtonActive') - 1, 1),
                            statButton: !this.state.statButton

                        }
                    })
                    this.props.sortSites(this.props.tech)
                }}
                className={this.state.MenuButtonClasses.join(' ')}
            >
                {this.props.tech}
            </button>
        );
    }
}

export default MenuButton;