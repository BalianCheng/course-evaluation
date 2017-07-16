import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
class CurrentCollege extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="current-college">
                <h2>{this.props.collegeName}</h2>
            </div>
        )
    }
}

export default CurrentCollege