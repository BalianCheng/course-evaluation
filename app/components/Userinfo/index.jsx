import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
class Userinfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className="userinfo-container">
                <p>
                    <i className="icon-user"></i>
                    &nbsp;
                    <span>{this.props.username}</span>
                </p>
                <p>
                    <span>姓名：王大锤</span>
                </p>
                <p>
                    <span>学院：{this.props.collegeName}</span>
                </p>
            </div>
        )
    }
}

export default Userinfo