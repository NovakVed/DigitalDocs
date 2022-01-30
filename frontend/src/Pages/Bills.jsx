import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {withStyles} from "@material-ui/core/styles";
import AppTopBar from "../Components/AppTopBar";
import BillCards from "../Components/BillCard";
import {LinearProgress} from "@material-ui/core";
import Footer from "../Components/Footer";
import Cookies from "universal-cookie";
import UtilityClass from "../Classes/UtilityClass";

const styles = theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
});

class Bills extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            billsData: null
        }
    }

    async componentDidMount() {
        const cookies = new Cookies();
        let json = await UtilityClass.fetchBills(cookies.get('access_token'));
        this.setState({billsData: json})
    }

    render() {
        const {classes} = this.props;

        if (!this.state.billsData) {
            return (
                <React.Fragment>
                    <CssBaseline/>
                    <AppTopBar/>
                    <div className={classes.heroContent}>
                        <Container maxWidth="sm">
                            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                                Popis računa
                            </Typography>
                        </Container>
                    </div>
                    <LinearProgress/>
                </React.Fragment>
            );
        }

        return (
            <React.Fragment>
                <CssBaseline/>
                <AppTopBar/>
                <main>
                    {/* Hero unit */}
                    <div className={classes.heroContent}>
                        <Container maxWidth="sm">
                            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                                Popis računa
                            </Typography>
                        </Container>
                    </div>
                    <Container className={classes.cardGrid} maxWidth="md">
                        {/* End hero unit */}
                        <Grid container spacing={4}>
                            {this.state.billsData.map((card, index) => (
                                <Grid item key={index} xs={12} sm={6} md={4}>
                                    <BillCards bill={card}/>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </main>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Bills);