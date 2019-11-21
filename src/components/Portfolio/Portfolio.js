import React, {Component} from 'react';
import './Portfolio.css'
import PortfolioItem from "../PortfolioItem/PortfolioItem";

class Portfolio extends Component {
    render() {
        return (
            <ul className={'Portfolio'}>
                {this.props.portfolio.map((portfolioEl) => {
                    for(let k = 0; k <= this.props.allElements.length; k++){
                        if(portfolioEl.technology.indexOf(this.props.selectElements[k]) !== -1){
                            let pointsSelected = 0;

                            for(let y = 0; y < this.props.selectElements.length; y++){
                                if(portfolioEl.technology.indexOf(this.props.selectElements[y]) !== -1){
                                    pointsSelected++
                                }
                            }

                            if(pointsSelected === this.props.selectElements.length ||
                                this.props.selectElements.length === this.props.allElements.length){
                                return (
                                    <PortfolioItem
                                        key={portfolioEl.id}
                                        portfolioItem={portfolioEl}
                                    />
                                )
                            }
                        }
                    }
                    return (null)
                })}
            </ul>
        );
    }
}

export default Portfolio;