import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Star from '../Star'
import './style.less'
class DetailInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        let data = this.props.data
        return (
            <div id="detail-info-container">
                <div className="info-container clear-fix">
                    <h1>{data.title}</h1>
                    {
                        this.props.isStore ?
                            <div className="followed follow float-right" onClick={this.storeClickHandle.bind(this)}>
                                已关注</div> :
                            <div className="unfollowed follow float-right" onClick={this.storeClickHandle.bind(this)}>
                                关注</div>
                    }
                    <div className="star-container">
                        <Star star={data.star}/>
                    </div>
                    <div className="info-one">
                        <span>授课教师：{data.teacher}</span>
                        <span>课程编号：{data.number}</span>
                    </div>
                    <div className="info-two">
                        <span>学分：{data.credit}</span>
                        <span>课程容量{data.member}</span>
                        <span>开课学院：{data.college}</span>
                    </div>
                </div>
                <p dangerouslySetInnerHTML={{__html: data.desc}}></p>
            </div>
        )
    }

    storeClickHandle() {
        this.props.storeHandle()
    }
}

export default DetailInfo