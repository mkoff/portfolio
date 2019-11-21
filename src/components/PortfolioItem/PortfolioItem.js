import React, {Component} from 'react';
import './PortfolioItem.css'

class PortfolioItem extends Component {
    render() {
        const classesPortfolioItem = [],
            portfolioItem =  this.props.portfolioItem;
        return (
            portfolioItem ?
                <a href={portfolioItem.link} target={'_blank'}>
                    <li className={'PortfolioItem'}>
                        <img src={portfolioItem.img} alt={portfolioItem.name}/>
                        <ul>
                            {portfolioItem.technology.map((technology, index) => {
                                return (
                                        <li
                                            key={index}
                                            className={classesPortfolioItem.join(' ')}
                                        >
                                        {technology}
                                        </li>
                                )
                            })}
                        </ul>
            </li></a> : null
        );
    }
}

export default PortfolioItem;