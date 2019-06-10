import React, {Component} from "react";
import {Provider} from 'react-redux';
import Store from './Store/configureStore';
import axios from 'axios';
import {withStyles} from '@material-ui/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from "../muiTheme";
import Shop from './components/Shop';
import ButtonAppBar from './components/ButtonAppBar';

const styles = {
    root: {
        background: 'red'
    },
};

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            persons: []
        };
    }

    componentDidMount() {
        axios.get(process.env.API_URL)
            .then(res => {
                console.log('response', res.data.results);
                const persons = res.data.results;
                this.setState({persons});
            });

    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Provider store={Store}>
                    <MuiThemeProvider theme={theme}>
                        <ButtonAppBar />
                        <Shop/>
                    </MuiThemeProvider>
                </Provider>
            </div>
        );
    }
}

export default withStyles(styles)(App);
