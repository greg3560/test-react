import React, {Component} from "react";
import {Provider} from 'react-redux';
import Store from './Store/configureStore';
import axios from 'axios';
import {withStyles} from '@material-ui/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from "../muiTheme";
import Shop from './components/Shop';
import ButtonAppBar from './components/ButtonAppBar';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import BackToTop from './components/BackToTop';

const styles = {
    root: {
        // background: 'red'
    },
};

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Provider store={Store}>
                    <MuiThemeProvider theme={theme}>
                        <ButtonAppBar />
                        <Shop/>
                        <BackToTop />
                    </MuiThemeProvider>
                </Provider>
            </div>
        );
    }
}

export default withStyles(styles)(App);
