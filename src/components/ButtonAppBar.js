import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '../icon/RefreshIcon';
import { connect } from 'react-redux';
import {withStyles} from '@material-ui/styles';
import fetchShops from "../api/fetchShops";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textAlign: 'center'
    },
});

class ButtonAppBar extends Component {

    constructor(props) {
        super(props);
        this.handleRefreshClick = this.handleRefreshClick.bind(this);
    }

    handleRefreshClick() {
        fetchShops.then((shops) => {
            const action = { type: "REFRESH_SHOPS", value: shops };
            this.props.dispatch(action);
        });
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" onClick={this.handleRefreshClick}>
                            <RefreshIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            List of Stores
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        shops: state.shops
    }
};

export default connect(mapStateToProps)(withStyles(styles)(ButtonAppBar));