import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getListData} from '../../../fetch/home/home'
import ListComponent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'
import './style.less'

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0
        }
    }

    render() {
        return (
            <div>
                <h2 className="title">课程推荐</h2>
                {
                    this.state.data.length ?
                        <ListComponent data={this.state.data}/> :
                        <div className="loading">Loading</div>
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
        const college = this.props.collegeName
        const result = getListData(college, 0)
        this.resultHandle(result)
    }

    loadMoreData() {
        this.setState({
            isLoadingMore: true
        })
        const college = this.props.collegeName
        const page = this.state.page
        const result = getListData(college, page)
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
            this.setState({
                hasMore: hasMore,
                data: this.state.data.concat(data)
            })
        })
    }
}


export default List