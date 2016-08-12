import React, {Component, PropTypes} from 'react';

class Item extends Component {
    constructor(props, context){
        super(props,context);
    }
    checkChange(){
        this.props.onChange(this.props.item, this.props.index);
    }
    render() {
        const {item, index} = this.props;
        let self = this;
        return (
            <tr>
                <td>
                    <input type="checkbox" onChange = {self.checkChange.bind(self)} />
                </td>
                <td>
                    <div>
                        {item.content}
                    </div>
                </td>
                <td>
                    <div>
                        {item.date}
                    </div>
                </td>
            </tr>
        );
    }
}

Item.PropTypes = {
    item: PropTypes.object,
    index: PropTypes.int
}

export default Item;