import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'
import Userinfo from '../../components/Userinfo'

class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const userinfo = this.props.userinfo
        return (
            <div>
                <Header title="用户主页" backRouter="/"/>
                <Userinfo username={userinfo.username} collegeName={userinfo.collegeName}/>
            </div>
        )
    }

    componentDidMount() {
        if (!this.props.userinfo.username) {
            hashHistory.push('/Login')
        }
    }
}
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)