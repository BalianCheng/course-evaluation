import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
class LoginComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            username: ''
        }
    }

    render() {
        return (
            <div id="login-container">
                <div className="input-container user">
                    <i className="icon-user"></i>
                    <input type="text"
                           placeholder="请输入学号"
                           onChange={this.changeHandle.bind(this)}
                           value={this.state.username}
                    />
                </div>
                <div className="input-container password">
                    <i className="icon-key"></i>
                    <input type="password" placeholder="输入密码"/>
                </div>
                <button className="btn-login" onClick={this.clickHandle.bind(this)}>登录</button>
            </div>
        )
    }

    changeHandle(e) {
        this.setState({
            username: e.target.value
        })
    }
    clickHandle(){
        const username = this.state.username
        const loginHandle = this.props.loginHandle
        loginHandle(username);
    }
}

export default LoginComponent