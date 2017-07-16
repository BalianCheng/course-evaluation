import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getInfoData} from '../../../fetch/detail/detai'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {hashHistory} from 'react-router'

import * as storeActionsFromFile from '../../../actions/store'
import DetailInfo from '../../../components/DetailInfo'
class Info extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            info: false,
            isStore: false
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.info ?
                        <DetailInfo data={this.state.info} isStore={this.state.isStore}
                                    storeHandle={this.storeHandle.bind(this)}/>
                        : ''
                }
            </div>
        )
    }

    componentDidMount() {
        let id = this.props.id
        let result = getInfoData(id)
        this.resultHandle(result)
        this.checkStoreState()
    }

    checkStoreState() {
        const id = this.props.id
        const store = this.props.store
        store.some(item => {
            if (item.id === id) {
                this.setState({
                    isStore: true
                })
                return true
            }
        })
    }

    storeHandle() {
        const loginFlag = this.loginCheck()
        if (!loginFlag) {
            return
        }
        let id = this.props.id
        const storeActions = this.props.storeActions
        if (this.state.isStore) {
            storeActions.rm({id: id})
        } else {
            storeActions.add({id: id})
        }
        this.setState({
            isStore: !this.state.isStore
        })
    }

    resultHandle(result) {
        result.then((res) => {
            return res.json()
        }).then((json) => {
            this.setState({
                info: json
            })
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
}


function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
        store: state.store
    }
}

function mapDispatchToProps(dispatch) {
    return {
        storeActions: bindActionCreators(storeActionsFromFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Info)

