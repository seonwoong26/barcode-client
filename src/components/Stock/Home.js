import React, {Component } from 'react';
import './Stock.css';
import { withStyles } from '@material-ui/core/styles';
// import CircularProgress from '@material-ui/core/circularProgress';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { fade } from '@material-ui/core/styles/colorManipulator';
import Typography from '@material-ui/core/Typography';


  

const styles = theme => ({
  root: {
    width: '100%',
    marginTop : theme.spacing.unit *3,
    overflowX: "auto"
  },

    table: {
    minWidth: 1080

  },
  menu: {
    marginTop: 15,
    marginBottom: 15,
    display: 'flex',
    justifyContent: 'center'
  },
  paper: {
    marginLeft:18,
    marginRight: 18
  },
  progress: {
   margin: theme.spacing.unit * 2 
  },
  grow: {
    flexGrow:1,
  },
  tableHead: {
    fontSize: '1.0rem'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
 
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  }
});


class Home extends Component {


  constructor(props){
    super(props);
    this.state = {
    customers: "",
    completed: 0,
    searchKeyword: ''
  }
}

handleClickOpen = () => {
  this.setState({
      open: true
  });
}

  stateRefresh = () => {
    this.setState({
      customers: '',
      completed: 0,
      serchKeyword: ''
    });

    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
  }

  componentDidMount() {
    // this.timer = setInterval(this.progress, 20 );
    // this.callApi()
    // .then(res => this.setState({customers: res}))
    // .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1});

  }

  handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  render() {
    
    const { classes } = this.props;

    return (
      <div className={classes.root}>
       <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            출고 관리 시스템에 오신 것을 환영합니다
          </Typography>
        </Toolbar>
      </AppBar>
       </div>
    );
  }

}

export default withStyles(styles)(Home);