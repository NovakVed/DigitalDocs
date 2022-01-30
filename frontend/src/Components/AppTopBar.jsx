import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import FilterDramaIcon from '@material-ui/icons/FilterDrama';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {grey} from "@material-ui/core/colors";
import Cookies from "universal-cookie";

const styles = theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        flexGrow: 1,
        color: '#000',
        backgroundColor: '#fff',
    },
    button: {
        color: '#000',
        backgroundColor: grey[300],
        textTransform: 'none',
    },
});

class AppTopBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const cookies = new Cookies();
        cookies.remove('access_token', {path: '/'});
        cookies.remove('refresh_token', {path: '/'});
        window.location.href = '../login'
    }

    render() {
        const {classes} = this.props;

        return (
            <AppBar position="sticky" className={classes.appBar}>
                <Toolbar>
                    <FilterDramaIcon className={classes.icon}/>
                    <Typography variant="h6" color="inherit" className={classes.title}>
                        DigitalDocs
                    </Typography>
                    <Button className={classes.button} onClick={this.handleClick}>
                        Odjavi se
                    </Button>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles, {withTheme: true})(AppTopBar);