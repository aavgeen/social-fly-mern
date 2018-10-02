import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const styles = theme => ({
    root: {
      width: '100%',
      backgroundColor: grey['200']
    },
    grow: {
      flexGrow: 1,
    },
    center: {
        padding: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
class About extends Component {
  render() {
    const {classes}  = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="display3" gutterBottom className={classes.center}>About Me</Typography>
      </div>
    )
  }
}

About.propTypes = {
    prop: PropTypes
}

export default withStyles(styles)(About);