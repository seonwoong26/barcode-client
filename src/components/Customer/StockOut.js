import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import StockInDelete from './CustomerDelete';

class StockOut extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                {/* <TableCell><img src={this.props.image} alt="profile"/></TableCell> */}
                <TableCell>{this.props.code}</TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.qty}</TableCell>
                <TableCell>{this.props.date_out}</TableCell>


                <TableCell><StockInDelete stateRefresh={this.props.stateRefresh} id={this.props.id} /></TableCell>
            </TableRow>
        )
    }
}

export default StockOut;