import React, {Component} from "react";
import {Provider} from 'react-redux';
import Store from './Store/configureStore';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from "../muiTheme";
import Shop from './components/Shop';
import ButtonAppBar from './components/ButtonAppBar';
import BackToTop from './components/BackToTop';


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
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

export default App;
