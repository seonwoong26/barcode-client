import React from 'react';
import { post } from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    hidden: {
        display: 'none'
    }
});

class StockInAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            code: '',
            name: '',
            qty: '',
            date_in: '',
            open: false

        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addStockIn()
            .then((response) => {
                console.log(response.data);
                this.props.stateRefresh();
            })
        this.setState({
            code: '',
            name: '',
            qty: '',
            date_in: '',
            open: false
        })

    }


    // handleFileChange = (e) => {
    //     this.setState({
    //         file: e.target.files[0],
    //         fileName: e.target.value
    //     })
    // }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addStockIn = () => {
        const url = 'http://ec2-3-20-232-219.us-east-2.compute.amazonaws.com:5000/api/stock_in';
        const formData = new FormData();
        formData.append('code', this.state.code);
        formData.append('name', this.state.name);
        formData.append('qty', this.state.qty);
        formData.append('date_in', this.state.date_in);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config);

    }

    handleClickOpen = () => {
        this.setState({
            open: true
        });
    }

    handleClose = () => {
        this.setState({
            code: '',
            name: '',
            qty: '',
            date_in: '',
            open: false
        })
    }

    render() {
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                    상품 추가하기
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>상품 추가</DialogTitle>
                    <DialogContent>
                        <TextField label="품번" input type="text" name="code" value={this.state.code} onChange={this.handleValueChange} /><br />
                        <TextField label="품명" input type="text" name="name" value={this.state.name} onChange={this.handleValueChange} /><br />
                        <TextField label="수량" input type="text" name="qty" value={this.state.qty} onChange={this.handleValueChange} /><br />
                        <TextField label="입고일" input type="text" name="date_in" value={this.state.date_in} onChange={this.handleValueChange} /><br />
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>추가</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </div>


        )
    }
}
export default withStyles(styles)(StockInAdd);