import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {LinearProgress} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";

import Cookies from 'universal-cookie';
import Copyright from "../../Components/Copyright";
import UtilityClass from "../../Classes/UtilityClass";

const styles = theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            varEmail: '',
            varPassword: '',
            loading: false,
        }

        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    };

    handleChangeEmail(event) {
        this.setState({varEmail: event.target.value})
    }

    handleChangePassword(event) {
        this.setState({varPassword: event.target.value})
    }

    async handleSubmit(event) {
        event.preventDefault()

        const cookies = new Cookies();

        this.setState({loading: true});
        setTimeout(() => this.setState({loading: false}), 3000); //3 seconds

        const userToken = await UtilityClass.fetchUserToken(this.state.varEmail, this.state.varPassword)
        cookies.set('access_token', userToken.access_token, {path: '/', expires: new Date(Date.now() + 3600000)});
        cookies.set('refresh_token', userToken.refresh_token, {path: '/', expires: new Date(Date.now() + 3600000)});


        if (userToken.access_token) {
            window.location.href = './bills'
        } else {
            alert("Email or password are wrong")
        }
    }

    render() {
        const {classes} = this.props;

        return (
            <React.Fragment>
                {this.state.loading && <LinearProgress/>}
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form className={classes.form} onSubmit={this.handleSubmit}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={this.state.varEmail}
                                onChange={this.handleChangeEmail}/>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={this.state.varPassword}
                                onChange={this.handleChangePassword}/>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary"/>}
                                label="Remember me"/>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}>
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                    <Box mt={8}>
                        <Copyright/>
                    </Box>
                </Container>
            </React.Fragment>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Login);