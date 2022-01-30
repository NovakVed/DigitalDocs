import React from "react";
import {withStyles} from "@material-ui/core/styles";
import {LinearProgress, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppTopBar from "../Components/AppTopBar";
import Footer from "../Components/Footer";
import Cookies from "universal-cookie";
import Card from "@material-ui/core/Card";
import {blue, green, red} from "@material-ui/core/colors";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import {
    AttachMoneyOutlined,
    CalendarTodayOutlined,
    LocationOnOutlined,
    StorefrontOutlined,
    PaymentOutlined
} from "@material-ui/icons";
import UtilityClass from "../Classes/UtilityClass";

const styles = theme => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    card: {
        margin: 50,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '0%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    green: {
        backgroundColor: green[500],
    },
    red: {
        backgroundColor: red[500],
    },
    black: {
        backgroundColor: '#000',
    },
    blue: {
        backgroundColor: blue[500],
    },
});

class BillDetails extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            billsData: null,
            bill: {
                image: '',
                billID: '',
                billTotal: null,
                locationOfSellingPlace: '',
                sellerName: '',
                storeName: '',
                timestamp: '',
            }
        }
    }

    async componentDidMount() {
        const cookies = new Cookies();
        let json = await UtilityClass.fetchBills(cookies.get('access_token'))
        this.setState({billsData: json})
        this.getBill()
    }

    getBill() {
        this.setState({bill: this.state.billsData.find(item => item.billID === this.props.match.params.billID)})
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
                                Detaljni pregled računa
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
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Detaljni pregled računa
                        </Typography>
                    </Container>
                </div>
                <Container>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            component='img'
                            src={`data:image/jpeg;base64, ${this.state.bill.image}`}
                            alt={`bill_image_${this.state.bill.billID}`}/>

                        <CardContent className={classes.cardContent}>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar className={classes.black}>
                                        <PaymentOutlined/>
                                    </Avatar>
                                </ListItemIcon>
                                <ListItemText>
                                    <strong>Broj Računa: </strong> {this.state.bill.billID}
                                </ListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <Avatar className={classes.black}>
                                        <StorefrontOutlined/>
                                    </Avatar>
                                </ListItemIcon>
                                <ListItemText>
                                    <strong>Trgovački lanac: </strong> {this.state.bill.sellerName}
                                </ListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <Avatar className={classes.red}>
                                        <StorefrontOutlined/>
                                    </Avatar>
                                </ListItemIcon>
                                <ListItemText>
                                    <strong>Trgovina: </strong> {this.state.bill.storeName}
                                </ListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <Avatar className={classes.red}>
                                        <LocationOnOutlined/>
                                    </Avatar>
                                </ListItemIcon>
                                <ListItemText>
                                    <strong>Lokacija: </strong> {this.state.bill.locationOfSellingPlace}
                                </ListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <Avatar className={classes.green}>
                                        <AttachMoneyOutlined/>
                                    </Avatar>
                                </ListItemIcon>
                                <ListItemText>
                                    <strong>Iznos: </strong> {UtilityClass.currencyFormatter(this.state.bill.billTotal)}
                                </ListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <Avatar className={classes.blue}>
                                        <CalendarTodayOutlined/>
                                    </Avatar>
                                </ListItemIcon>
                                <ListItemText>
                                    <strong>Datum: </strong> {UtilityClass.cleanDate(this.state.bill.timestamp)}
                                </ListItemText>
                            </ListItem>
                        </CardContent>
                    </Card>
                </Container>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default withStyles(styles, {withTheme: true})(BillDetails);