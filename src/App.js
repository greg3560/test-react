import React, {Component} from "react";
import {Provider} from 'react-redux';
import Store from './Store/configureStore';
import axios from 'axios';
import {withStyles} from '@material-ui/styles';
import BallSpinner from './icon/BallSpinner';

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
                    <h1>Hello world!</h1>
                    {this.state.persons.length > 0 ? (
                        <ul>{this.state.persons.map(person => <li>{person.name}</li>)}</ul>
                    ) : (
                        <BallSpinner/>
                    )}
                </Provider>
            </div>
        );
    }
}

export default withStyles(styles)(App);
