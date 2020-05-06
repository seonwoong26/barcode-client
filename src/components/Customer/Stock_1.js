import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CustomerDelete from './CustomerDelete';

class Stock_1 extends React.Component {
    render() {
        return(
        <TableRow>
            <TableCell>{this.props.id}</TableCell>
            {/* <TableCell><img src={this.props.image} alt="profile"/></TableCell> */}
            <TableCell>{this.props.code}</TableCell>
            <TableCell>{this.props.name}</TableCell>
            <TableCell>{this.props.price}</TableCell>
            <TableCell>{this.props.count}</TableCell>
            <TableCell>{this.props.unit}</TableCell>
            <TableCell>{this.props.date_in}</TableCell>
            <TableCell>{this.props.code_in}</TableCell>

            <TableCell><CustomerDelete stateRefresh={this.props.stateRefresh} id={this.props.id}/></TableCell>
        </TableRow>
        )
    }
}

export default Stock_1;