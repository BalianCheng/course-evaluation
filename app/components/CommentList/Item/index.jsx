import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Star from '../../Star'
import './style.less'
class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        let data = this.props.data
        return (
            <div className="comment-item">
                <h3>
                    <i className="icon-user"></i>
                    &nbsp;
                    {data.userid}
                </h3>
                <div className="star-container">
                    <Star star={data.star}/>
                </div>
                <p>{data.comment}</p>
            </div>
        )
    }
}

export default Item