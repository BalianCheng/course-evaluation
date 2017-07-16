import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router'

import './style.less'
class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        const data = this.props.data
        return (
            <div className="class-container clear-fix">
                <Link to={'/detail/' + data.id}>
                    <h1>{data.title}</h1>
                    <div className="content">
                        <div><span>教师：</span>{data.teacher}</div>
                        <div><span>编号：</span>{data.number}</div>
                        <div><span>容量：</span>{data.member}</div>
                        <div><span>学分：</span>{data.credit}</div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Item