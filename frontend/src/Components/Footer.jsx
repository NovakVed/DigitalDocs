import React from "react";
import Typography from "@material-ui/core/Typography";
import {withStyles} from "@material-ui/core/styles";
import Copyright from "./Copyright";

const styles = theme => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        // padding: theme.spacing(6),
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
    },
});

class Footer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        const {classes} = this.props;

        return (
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Ovaj projekt se ostvario u suradnji s FOI &hearts; SedamIT
                </Typography>
                <Copyright/>
            </footer>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Footer);