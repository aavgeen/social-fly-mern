import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Grid, TextField, FormControl, IconButton, Input, InputAdornment, InputLabel, Button } from '@material-ui/core';
import { AccountCircle, Visibility, VisibilityOff, Face } from '@material-ui/icons';

function TabContainer(props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', padding: '40px', border: '2px',WebkitBoxShadow: "0px 5px 10px #9E9E9E",
    MozBoxShadow: "0px 5px 10px #9E9E9E",
    boxShadow: "0px 5px 10px #9E9E9E"}}>
      {props.children}
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
const styles = theme => ({
    root: {
        marginTop: '50px',
        marginBottom: 'auto', 
        flexGrow: 1,
        width: '30%',
        backgroundColor: theme.palette.background.paper,
        marginLeft:'35%',
        marginRight: '35%',
        [theme.breakpoints.down('sm')]: {
            width: '80%',
            marginLeft: '10%',
            marginRight: '10%'
          },
    },
    topbar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px'  
    },
    tabindividual: {
        // margin: '0px',
        // width: '50%'
    },
    margin: {
        margin: theme.spacing.unit,
    },
    textField: {
        flexBasis: 200,
    },
    button: {
        width: '40%',
        marginLeft: '30%',
        marginRight: '30%',
        marginTop: '10%'
    },
  });
  class SignUpIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: 0,
            password: '',
            email: '',
            username: '',
            showPassword: false,
        };
    }
    handleChange = () => {
        if (this.state.value == 0) {
            this.setState({value: 1})
        }
        else if (this.state.value == 1) {
            this.setState({value: 0})
        }
    };
    handleChangetext = (type, event) => {
        event.preventDefault();
        if ( type === 'loginemail')
            this.setState({email: event.target.value})
        else if ( type === 'loginpass')
            this.setState({password: event.target.value})
        else if (type === 'loginname')
            this.setState({username: event.target.value})
    }
    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !this.state.showPassword }));
    };
    render() {
      const { classes } = this.props;
      return (
        <div className={classes.root}>
          <AppBar position="static" color="secondary" className={classes.topbar}>
            <Tabs
              value={this.state.value}
              onChange={() => this.handleChange()}
              indicatorColor="primary"
              textColor="primary"
              scrollable = {false}
              scrollButtons="auto"
              centered
              fullWidth     //Not Working as expected.
            >
              <Tab label="Log In" className={classes.tabindividual}/>
              <Tab label="Sign Up" className={classes.tabindividual}/>
            </Tabs>
          </AppBar>
          {this.state.value === 1 && 
            <TabContainer>
                <div>
                    <FormControl className={classNames(classes.margin, classes.textField)}>
                        <InputLabel htmlFor="adornment-username">Username</InputLabel>
                        <Input
                            id="adornment-username"
                            type={'text'}
                            value={this.state.username}
                            onChange={(event) => this.handleChangetext('loginname', event)}
                            fullWidth
                            endAdornment={
                            <InputAdornment position="end">
                                    <Face />
                            </InputAdornment>
                            }
                        />
                    </FormControl>
                    <br></br>
                    <br></br>
                    <FormControl className={classNames(classes.margin, classes.textField)}>
                        <InputLabel htmlFor="adornment-useremail">User email</InputLabel>
                        <Input
                            id="adornment-useremail"
                            type={'text'}
                            value={this.state.email}
                            onChange={(event) => this.handleChangetext('loginemail', event)}
                            fullWidth
                            endAdornment={
                            <InputAdornment position="end">
                                    <AccountCircle />
                            </InputAdornment>
                            }
                        />
                    </FormControl>
                    <br></br>
                    <br></br>
                    <FormControl className={classNames(classes.margin, classes.textField)}>
                        <InputLabel htmlFor="adornment-password">Password</InputLabel>
                        <Input
                            id="adornment-password"
                            type={this.state.showPassword ? 'text' : 'password'}
                            value={this.state.password}
                            onChange={(event) => this.handleChangetext('loginpass', event)}
                            fullWidth
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="Toggle password visibility"
                                onClick={() => this.handleClickShowPassword()}
                                >
                                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                        />
                    </FormControl>
                    <br></br>
                    <br></br>
                    <Button variant="raised" size="medium" color="secondary" className={classes.button}>
                        Sign Up
                    </Button>
                </div>
            </TabContainer>
          }
          {this.state.value === 0 &&
            <TabContainer>
                <div>
                    <FormControl className={classNames(classes.margin, classes.textField)}>
                        <InputLabel htmlFor="adornment-useremail">User email</InputLabel>
                        <Input
                            id="adornment-useremail"
                            type={'text'}
                            value={this.state.email}
                            onChange={(event) => this.handleChangetext('loginemail', event)}
                            fullWidth
                            endAdornment={
                            <InputAdornment position="end">
                                    <AccountCircle />
                            </InputAdornment>
                            }
                        />
                    </FormControl>
                    <br></br>
                    <br></br>
                    <FormControl className={classNames(classes.margin, classes.textField)}>
                        <InputLabel htmlFor="adornment-password">Password</InputLabel>
                        <Input
                            id="adornment-password"
                            type={this.state.showPassword ? 'text' : 'password'}
                            value={this.state.password}
                            onChange={(event) => this.handleChangetext('loginpass', event)}
                            fullWidth
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="Toggle password visibility"
                                onClick={() => this.handleClickShowPassword()}
                                >
                                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                        />
                    </FormControl>
                    <br></br>
                    <br></br>
                    <Button variant="raised" size="medium" color="primary" className={classes.button}>
                        Login
                    </Button>
                </div>
            </TabContainer>}
        </div>
      );
    }
  }
  
  SignUpIn.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(SignUpIn);  