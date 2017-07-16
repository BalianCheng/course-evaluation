import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ListComponent from '../../../components/CommentList'
import LoadMore from '../../../components/LoadMore'
import {getCommentData,postComment} from '../../../fetch/detail/detai'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'
import './style.less'
class Comment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0,
            commentState: 2
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.data.length ?
                        <ListComponent data={this.state.data} commentState={this.state.commentState} id={this.props.id}
                                       loginCheck={this.loginCheck.bind(this)} submitComment={this.submitComment.bind(this)}
                        /> :
                        <div className="loading" style={{background: '#fff', color: '#bbbbbb', margin: '5px'}}>
                            Loading</div>

                }
                {
                    this.state.hasMore ?
                        <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/> :
                        ''
                }
            </div>
        )
    }

    componentDidMount() {
        this.loadFirstPageData()
    }

    loadFirstPageData() {
        const id = this.props.id
        const result = getCommentData(id, 0)
        this.resultHandle(result)
    }

    loadMoreData() {
        this.setState({
            isLoadingMore: true
        })
        const id = this.props.id
        const page = this.state.page
        const result = getCommentData(id, page)
        this.resultHandle(result)
        this.setState({
            page: page + 1,
            isLoadingMore: false
        })
    }

    resultHandle(result) {
        result.then((res) => {
            return res.json()
        }).then(json => {
            const hasMore = json.hasMore
            const data = json.data
            const commentState = json.commentState
            this.setState({
                hasMore: hasMore,
                data: this.state.data.concat(data),
                commentState: commentState
            })
        }).catch(ex => {
            if (__DEV__) {
                console.error('详情页获取用户评论数据出错, ', ex.message)
            }
        })
    }

    loginCheck() {
        const id = this.props.id
        const userinfo = this.props.userinfo
        if (!userinfo.username) {
            hashHistory.push('/Login/' + encodeURIComponent('/detail/' + id))
            return false
        }
        return true
    }
    submitComment(id , value, star, callback) {
        const result = postComment(id=this.props.userinfo.username, value, star)
        result.then(res => {
            return res.json()
        }).then(json => {
            if (json.errno === 0) {
                callback()
            }
        })
    }
}


function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comment)
