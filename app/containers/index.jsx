import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LocalStore from '../util/localStore'
import {CITYNAME, COLLEGE, UNIVERSITY} from '../config/localStoreKey'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userInfoActionsFormOtherFile from '../actions/userinfo'

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.initDone ? this.props.children : <div>Loading...</div>
                }
            </div>
        )
    }

    componentDidMount() {
        let cityName = LocalStore.getItem('CITYNAME')
        if (cityName == null) {
            cityName = '武汉'
        }
        let universityName = LocalStore.getItem('UNIVERSITY')
        if (universityName == null) {
            universityName = '华中师范大学'
        }
        let collegeName = LocalStore.getItem('COLLEGE')
        if (collegeName == null) {
            collegeName = '信管学院'
        }
        this.props.userInfoActions.update({
            cityName:cityName,
            universityName:universityName,
            collegeName:collegeName
        })
        this.setState(
            {
                initDone: true
            }
        )
    }
}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFormOtherFile, dispatch),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

