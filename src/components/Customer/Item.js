import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import ItemDelete from './ItemDelete';

class Item extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                {/* <TableCell><img src={this.props.image} alt="profile" /></TableCell> */}
                <TableCell>{this.props.code}</TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.price}</TableCell>
                <TableCell>{this.props.qty}</TableCell>
                <TableCell>{this.props.date}</TableCell>
                <TableCell><ItemDelete stateRefresh={this.props.stateRefresh} id={this.props.id} /></TableCell>
            </TableRow>
        )
    }
}

export default Item;