import React, {Component} from "react";
import {withStyles} from '@material-ui/styles';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import ArrowUp from '../icon/ArrowUp';

const styles = {
    root: {
        background: '#C4C4C4',
        width: '40px',
        height: '50px',
        borderRadius: '8px',
        position: 'fixed',
        bottom: '10px',
        right: '10px',
        cursor: 'pointer',
        transition: 'opacity 1s'
    },
    visible: {
        opacity: 0.5
    },
    invisible: {
        opacity: 0
    },
    arrow: {
        width: 0,
        position: 'absolute',
        left: 'calc(50% - 12px)',
        top: 'calc(46% - 12px)'
    }
};

class BackToTop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };
    }
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', () => {
            window.onscroll = (ev) => {

                if (window.pageYOffset > 0) {
                    this.setState({visible: true})
                } else {
                    this.setState({visible: false})
                }
            };
        });
    }
    scrollToTop() {
        scroll.scrollToTop();
    };
    render() {
        const {classes} = this.props;
        return (
            <div className={this.state.visible ? classes.visible + ' ' + classes.root : classes.invisible + ' ' + classes.root} onClick={this.scrollToTop}>
                <div className={classes.arrow}>
                    <ArrowUp />
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(BackToTop);
