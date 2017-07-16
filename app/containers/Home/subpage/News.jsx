// homeNews
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getNewsData} from '../../../fetch/home/home'
import HomeNews from '../../../components/HomeNews'
import './style.less'

class News extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }

    render() {
        return (
            <div>
                <h2 className="title">华大新闻</h2>
                {
                    this.state.data.length ?
                        <HomeNews data={this.state.data}/> :
                        <div className="loading">Loading...</div>
                }
            </div>
        )
    }
    componentDidMount() {
        const result = getNewsData()
        result.then((res) => {
            return res.json()
        }).then((json) => {
            const data = json
            if (data.length) {
                this.setState({
                    data: data
                })
            }
        })
    }
}

export default News