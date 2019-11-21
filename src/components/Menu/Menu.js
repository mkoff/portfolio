import React, {Component} from 'react';
import './Menu.css'
import MenuButton from "./MenuButton/MenuButton";

class Menu extends Component {
    render() {
        return (
            <div className={'Menu'}>
                <ul>
                    {this.props.allElements.map((tech, index) => {
                        return (
                            <MenuButton
                                key={index}
                                tech={tech}
                                sortSites={this.props.sortSites}
                                />
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default Menu;