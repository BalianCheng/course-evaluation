import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {hashHistory} from 'react-router'

import './style.less'

class HomeNews extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div id="home-news">
                <div className="news-container clear-fix">
                    {
                        this.props.data.map((item, index) => {
                            return <div className="news-item float-left" key={index}>
                                <a href={item.link} target="_blank">
                                    <img src={item.img} alt={item.title}/>
                                    {item.title}
                                </a>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default HomeNews