import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../components/Header'
import './style.less'
class NotFound extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                <Header title="找不到页面"/>
                <h1 className="not-found">404 not found page</h1>
            </div>
        )
    }
}
export default NotFound