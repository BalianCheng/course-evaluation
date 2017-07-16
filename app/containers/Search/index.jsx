import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchHeader from '../../components/SearchHeader'
import List from './subpage/List'
class Search extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <SearchHeader keyword={this.props.params.keyword}/>
                <List keyword={this.props.params.keyword} category={this.props.params.category}/>
            </div>
        )
    }
/*    componentDidMount(){
        const params=this.props.params
        console.log(params.category+','+params.keyword)
    }*/
}

export default Search