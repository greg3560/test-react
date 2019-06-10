import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import BallSpinner from '../icon/BallSpinner';
import {withStyles} from '@material-ui/styles';
import { connect } from 'react-redux';
import fetchShops from '../api/fetchShops';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(10),
        overflowX: 'auto'
    },
    table: {
        minWidth: 650,
    },
    spinner: {
        display: 'block',
        width: '100%',
        textAlign: 'center'
    },
    logo: {
        width: '40px',
        height: '40px'
    }
});

class SimpleTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: false,
            errorMessage: 'This app does not answer, please check your connection'
        };
    }

    componentDidMount() {
        fetchShops.then((shops) => {
            const action = { type: "REFRESH_SHOPS", value: shops };
            this.props.dispatch(action);
        });
    }


    render() {

        const {classes} = this.props;
        return (
            <Paper className={classes.root}>

                {this.props.shops.length > 0 ? (

                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Logo</TableCell>
                                <TableCell align="center">Nom</TableCell>
                                <TableCell align="center">Adresse</TableCell>
                                <TableCell align="center">Montant Maximum</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.shops.map(shop => (
                            <TableRow key={shop.name}>
                                <TableCell component="th" scope="row">
                                    <img className={classes.logo} alt={'logo'} src={shop.logo} />
                                </TableCell>
                                <TableCell align="center">{shop.name}</TableCell>
                                <TableCell align="center">{shop.address}</TableCell>
                                <TableCell align="center">{shop.maxoffer}</TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                ) : (
                    <div className={classes.spinner}>
                        <BallSpinner/>
                    </div>
                )}


            </Paper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        shops: state.shops
    }
};

export default connect(mapStateToProps)(withStyles(styles)(SimpleTable));