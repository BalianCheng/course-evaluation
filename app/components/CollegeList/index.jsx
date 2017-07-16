import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
class CollegeList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className="college-list-container">
                <h3>学院列表</h3>
                <ul className="clear-fix">
                    <li>
                        <span onClick={this.clickHandle.bind(this, '马哲学院')}>马哲学院</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '经管学院')}>经管学院</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '法学院')}>法学院</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '社会学院')}>社会学院</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '教育学院')}>教育学院</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '信技学院')}>信技学院</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '体育学院')}>体育学院</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '文学院')}>文学院</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '新传学院')}>新传学院</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '外语学院')}>外语学院</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '历史学院')}>历史学院</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '数统学院')}>数统学院</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '物理学院')}>物理学院</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '化学学院')}>化学学院</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '生科学院')}>生科学院</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '城环学院')}>城环学院</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '心理学院')}>心理学院</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '计科学院')}>计科学院</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '信管学院')}>信管学院</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '国交学院')}>国交学院</span>
                    </li>
                </ul>
            </div>
        )
    }

    clickHandle(newCollege) {
        let changeFn = this.props.changeFn
        changeFn(newCollege)
    }
}


export default CollegeList