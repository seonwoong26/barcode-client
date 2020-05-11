// import React from 'react';
// import {post} from 'axios';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import DialogContent from '@material-ui/core/DialogContent';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Table from '@material-ui/core/Table';
// import TableHead from '@material-ui/core/TableHead';
// import TableBody from '@material-ui/core/TableBody';
// import TableRow from '@material-ui/core/TableRow';
// import TableCell from '@material-ui/core/TableCell';
// import CircularProgress from '@material-ui/core/circularProgress';

// const styles = theme => ({
//     hidden: {
//         display: 'none'
//     },

//     table: {
//         minWidth: 700
//     },

//     paper: {
//         marginLeft:18,
//         marginRight: 18
//     },
// });

// class CustomerAdd extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state= {
//             file: null,
//             code: '',
//             name: '',
//             price: '',
//             qty: '',
//             fileName:'',
//             open: false

//         }
//     }

//     handleFormSubmit = (e) => {
//         e.preventDefault()
//         this.addCustomer()
//             .then((response) => {
//                 console.log(response.data);
//                 this.props.stateRefresh();
//             })
//         this.setState({
//                 file: null,
//                 name: '',
//                 code: '',
//                 price: '',
//                 qty:'',
//                 fileName:'',
//                 open: false
//             })
        
//     }


//     handleFileChange = (e) =>{
//         this.setState({
//             file: e.target.files[0],
//             fileName: e.target.value
//         })
//     }

//     handleValueChange = (e) =>{
//         let nextState = {};
//         nextState[e.target.name] = e.target.value;
//         this.setState(nextState);
//     }

//     addCustomer = () => {
//         // const url = 'http://localhost:5000/api/customers';
//         const url = 'http://ec2-3-20-232-219.us-east-2.compute.amazonaws.com:5000/api/customers';
//         const formData = new FormData();
//         formData.append('image', this.state.file);
//         formData.append('code', this.state.code);
//         formData.append('name', this.state.name);
//         formData.append('price', this.state.price);
//         formData.append('count', this.state.qty); 
//         const config = {
//             headers: {
//                 'content-type': 'multipart/form-data'
//             }
//         }
//         return post(url, formData, config);

//     }

//     handleClickOpen = () => {
//         this.setState({
//             open: true
//         });
//     }

//     handleClose= () => {
//         this.setState({
//             file: null,
//             code: '',
//             name: '',
//             price: '',
//             qty: '',
//             fileName:'',
//             open: false
//         })
//     }

//     render() {
//         const { classes } = this.props;
//         return (   
//             <div>
// <Paper>
//         <Table className={classes.table}>
//           <TableHead>
//           </TableHead>
//           <TableBody>
//                     <DialogTitle>상품 추가</DialogTitle>
//                     <DialogContent>
//                     <br/>
//                     <TextField label="품번" input type="text" name="code" value={this.state.code} onChange={this.handleValueChange}/><br/>
//                     <TextField label="품명" input type="text" name="name" value={this.state.name} onChange={this.handleValueChange}/><br/>
//                     <TextField label="가격" input type="text" name="price" value={this.state.price} onChange={this.handleValueChange}/><br/>
//                     <TextField label="수량" input type="text" name="qty" value={this.state.qty} onChange={this.handleValueChange}/><br/>
//                     </DialogContent>
//                     <DialogActions>
//                         <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>추가</Button>
//                         <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
//                         </DialogActions>
//             <TableRow>
//             <TableCell colSpan="9" align="center">
//               <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
//             </TableCell>
//           </TableRow>
//           </TableBody>
//         </Table>
//        </Paper>
//             </div>
          
            
//         )
//     }
// }
// export default withStyles(styles)(CustomerAdd);