import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Item from './Item'
import Star from '../Star'
import './style.less'

class CommentList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            commentState: 2,
            stars: {}
        }
    }

    render() {
        let data = this.props.data
        return (
            <div className="comment-list">
                <div className="comment-container">
                    <h1>课程评价</h1>
                    {
                        this.state.commentState === 0 ?
                            <button className="comment" onClick={this.showComment.bind(this)}>评价</button> :
                            this.state.commentState === 1 ?
                                "" :
                                <button className="comment used">已评价</button>
                    }
                </div>
                {
                    // “评价中”才会显示输入框
                    this.state.commentState === 1
                        ? <div className="comment-text-container">
                        <textarea style={{width: '100%', height: '80px'}} className="comment-text"
                                  ref="commentText"></textarea>
                        <div style={{paddingTop: '10px', paddingBottom: '10px'}}>
                            <Star star="0" clickCallback={this.starClickCallback.bind(this)}/>
                        </div>
                        <button className="submit" onClick={this.submitComment.bind(this)}>提交</button>
                        &nbsp;
                        <button className="submit cancel" onClick={this.hideComment.bind(this)}>取消</button>
                    </div>
                        : ''
                }
                {data.map((item, index) => {
                    return <Item key={index} data={item}/>
                })}
            </div>
        )
    }

    componentDidMount() {
        this.setState({
            commentState: this.props.commentState
        })
    }

    showComment() {
        this.props.loginCheck()
        this.setState({
            commentState: 1
        })
    }


    submitComment() {
        const submitComment = this.props.submitComment
        let id
        const stars = this.state.stars
        const star = stars[id] || '0'
        const commentText = this.refs.commentText
        const value = commentText.value.trim()
        if (!value) {
            return
        }
        submitComment(id, value, star, this.commentOk.bind(this))
    }

    commentOk() {
        this.setState({
            commentState: 2
        })
    }

    hideComment() {
        this.setState({
            commentState: 0
        })
    }

    starClickCallback(star){
        let stars = this.state.stars
        const id = this.props.id
        stars[id] = star

        this.setState({
            stars: stars
        })
    }
}

export default CommentList