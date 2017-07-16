import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
import {Link} from 'react-router'
import './style.less'

class Category extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0
        }
    }

    render() {
        var autoRun = {
            auto: 4000, /*必须是auto来指定轮播间隔*/
            callback: (index) => {
                this.setState({
                    index: index
                })
            }
        }
        return (
            <div id="home-category">
                <ReactSwipe className="carousel" swipeOptions={autoRun}>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <Link to="/search/mazhe">
                                <li className="float-left">马哲学院</li>
                            </Link>
                            <Link to="/search/jingguan">
                                <li className="float-left">经管学院</li>
                            </Link>
                            <Link to="/search/faxue">
                                <li className="float-left">法学院</li>
                            </Link>
                            <Link to="/search/shehui">
                                <li className="float-left">社会学院</li>
                            </Link>
                            <Link to="/search/jiaoyu">
                                <li className="float-left">教育学院</li>
                            </Link>
                            <Link to="/search/xinji">
                                <li className="float-left">信技学院</li>
                            </Link>
                            <Link to="/search/tiyu">
                                <li className="float-left">体育学院</li>
                            </Link>
                            <Link to="/search/wenxue">
                                <li className="float-left">文学院</li>
                            </Link>
                            <Link to="/search/xinchuan">
                                <li className="float-left">新传学院</li>
                            </Link>
                            <Link to="/search/waiyu">
                                <li className="float-left">外语学院</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <Link to="/search/lishi">
                                <li className="float-left">历史学院</li>
                            </Link>
                            <Link to="/search/shutong">
                                <li className="float-left">数统学院</li>
                            </Link>
                            <Link to="/search/wuli">
                                <li className="float-left">物理学院</li>
                            </Link>
                            <Link to="/search/huaxue">
                                <li className="float-left">化学学院</li>
                            </Link>
                            <Link to="/search/shengke">
                                <li className="float-left">生科学院</li>
                            </Link>
                            <Link to="/search/chenghuan">
                                <li className="float-left">城环学院</li>
                            </Link>
                            <Link to="/search/xinli">
                                <li className="float-left">心理学院</li>
                            </Link>
                            <Link to="/search/jike">
                                <li className="float-left">计科学院</li>
                            </Link>
                            <Link to="/search/xinguan">
                                <li className="float-left">信管学院</li>
                            </Link>
                            <Link to="/search/all">
                                <li className="float-left all">查看全部</li>
                            </Link>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="index-container">
                    <ul>
                        <li className={(this.state.index === 0|| this.state.index-2===0)? "selected" : ""}></li>
                        <li className={(this.state.index === 1||this.state.index-2===1) ? "selected" : ""}></li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default Category