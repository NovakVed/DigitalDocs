import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import {withStyles} from "@material-ui/core/styles"
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core"
import {AttachMoneyOutlined, CalendarTodayOutlined, LocationOnOutlined, StorefrontOutlined} from "@material-ui/icons"
import {blue, green, grey, red} from "@material-ui/core/colors"
import Avatar from "@material-ui/core/Avatar"
import {Link} from "react-router-dom"
import UtilityClass from "../Classes/UtilityClass"


const styles = theme => ({
    card: {
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
    button: {
        flex: 1,
        color: '#000',
        backgroundColor: grey[300],
        textTransform: 'none',
    }
});

class BillCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
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

        this.state.bill = this.props.bill
    }

    render() {
        const {classes} = this.props;

        return (
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
                <CardActions>
                    <Button size="medium"
                            color="primary"
                            className={classes.button}
                            component={Link}
                            to={`/bills/${this.state.bill.billID}`}>
                        Otvori
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles, {withTheme: true})(BillCard);