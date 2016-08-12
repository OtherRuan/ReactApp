import React, {Component, PropTypes} from 'react';
import _ from 'lodash';
import Item from './Item';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class List extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        let _data = this.props.list || [];
        let self = this;
        let _list = [];
        if (_data) {
            let body = _data.map((item, index) => {
                return (
                    <Item item={item} index={index} onChange={self.props.onChange} />
                )
            });
            _list.push(
                <table>
                    <tbody>
                        {body}
                    </tbody>
                </table>);
        }
        return (
            <div>
                {_list}
            </div>
        );
    }
}

List.PropTypes = {}

const mapStateToProps = (state)=>{
    return {

    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onChange: (item, index)=>{
            dispatch(actions.checkItem(item, index));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);