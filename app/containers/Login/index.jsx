import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {hashHistory} from 'react-router'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'
import LoginComponent from '../../components/LoginComponent'
import Header from '../../components/Header'

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            checking: true
        }
    }

    render() {
        return (
            <div>
                <Header title="登录"/>
                {
                    this.state.checking ?
                        <div>登录中</div> :
                        <LoginComponent loginHandle={this.loginHandle.bind(this)}/>
                }
            </div>
        )
    }

    componentDidMount() {
        this.checkLogin()
    }

    checkLogin() {
        const userinfo = this.props.userinfo
        if (userinfo.username) {
            this.goUserPage()
        } else {
            this.setState({
                checking: false
            })
        }
    }

    goUserPage() {
        hashHistory.push('/User')
    }

    loginHandle(username) {
        const action = this.props.userInfoActions
        let userinfo = this.props.userinfo
        userinfo.username = username
        action.update(userinfo)
        const params = this.props.params
        const router = params.router
        if (router) {
            hashHistory.push(router)
        } else {
            this.goUserPage()
        }
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)