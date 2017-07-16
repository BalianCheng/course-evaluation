import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userInfoActionsFormOtherFile from '../../actions/userinfo'
import Header from '../../components/Header'
import CurrentCollege from '../../components/CurrentCollege'
import CollegeList from '../../components/CollegeList'
import LocalStore from '../../util/localStore'
import {hashHistory} from 'react-router'
class College extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                <Header title="选择学院"/>
                <CurrentCollege collegeName={this.props.userinfo.collegeName}/>
                <CollegeList changeFn={this.changeCollege.bind(this)}/>
            </div>
        )
    }

    changeCollege(newCollege) {
        if (newCollege == null) {
            return
        }
        const userinfo = this.props.userinfo
        userinfo.collegeName = newCollege
        this.props.userInfoActions.update(userinfo)
        LocalStore.setItem('COLLEGE', newCollege)
        hashHistory.push('/')
    }
}
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}
function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFormOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(College)