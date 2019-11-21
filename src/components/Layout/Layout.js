import React, {Component} from 'react';
import './Layout.css'
import Portfolio from "../Portfolio/Portfolio";
import Menu from "../Menu/Menu";

class Layout extends Component {
    state = {
        selectElements: ['React', 'HTML', 'CSS', 'javaScript', 'Wordpress', 'MODX', 'Backend', 'Design', 'OpenCart'],
        allElements: ['React', 'HTML', 'CSS', 'javaScript', 'Wordpress', 'MODX', 'Backend', 'Design', 'OpenCart'],
        toggleFirstSelect: true,
        portfolio: [
            {
                img: 'images/1.png',
                link: 'http://wownail.com/',
                technology: ['HTML','CSS','javaScript','MODX','Backend'],
                id: 1
            },
            {
                img: 'images/2.png',
                link: 'http://lion-market.ru/',
                technology: ['HTML','CSS','Wordpress','Design','Backend'],
                id: 2
            },
            {
                img: 'images/3.png',
                link: 'http://mkofanov.com/works/Leadbit_Finance_land',
                technology: ['HTML','CSS'],
                id: 3
            },
            {
                img: 'images/4.png',
                link: 'http://www.skilluprussia.ru/',
                technology: ['HTML','CSS','OpenCart'],
                id: 4
            },
            {
                img: 'images/5.png',
                link: 'https://datspush.com/',
                technology: ['HTML','CSS','javaScript'],
                id: 5
            },
            {
                img: 'images/6.png',
                link: 'http://mkofanov.com/works/site_Bigglesale',
                technology: ['HTML','CSS'],
                id: 6
            },
            {
                img: 'images/7.png',
                link: 'http://mkofanov.com/works/sherif',
                technology: ['HTML','CSS'],
                id: 7
            },
            {
                img: 'images/8.png',
                link: 'http://project-script.com/installation-api-leadbit/',
                technology: ['HTML','CSS','Backend','javaScript'],
                id: 8
            },
            {
                img: 'images/9.png',
                link: 'http://mkofanov.com/',
                technology: ['HTML','CSS','React','javaScript'],
                id: 9
            },
        ]
    }

    sortSites = (technology) => {
        if(this.state.toggleFirstSelect){
            this.setState( {
                toggleFirstSelect: false,
                selectElements: [technology]
            })
        }else{
            this.state.selectElements.indexOf(technology) === -1 ?
                this.state.selectElements.push(technology) :
                this.state.selectElements.splice(this.state.selectElements.indexOf(technology), 1)
            if(this.state.selectElements.length < 1){
                this.setState( {
                    selectElements: this.state.allElements,
                    toggleFirstSelect: true
                })
            }else{
                this.setState( {
                    toggleFirstSelect: false
                })
            }
        }
    }

    render() {
        return (
            <div className={'Layout'}>
                <Menu
                    selectElements={this.state.selectElements}
                    allElements={this.state.allElements}
                    portfolio={this.state.portfolio}
                    sortSites={this.sortSites}
                />
                <Portfolio
                    selectElements={this.state.selectElements}
                    allElements={this.state.allElements}
                    portfolio={this.state.portfolio}
                />
                <footer style={{'padding': '10px'}}>mkofanov.com ~ m.kofanov@gmail.com| Portfolio from public projects | by React</footer>
            </div>
        );
    }
}

export default Layout;