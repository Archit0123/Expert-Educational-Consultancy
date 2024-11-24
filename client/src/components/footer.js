import React from 'react';
import { Link } from 'react-router-dom';
import { 
    TextField, 
    Button, 
    Grid, 
    Box, 
    Typography, 
    makeStyles, 
    Paper, 
    Container 
} from '@material-ui/core';
import { Instagram, Facebook, Mail, Phone, Telegram, Business } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    text: {
        color: "white",
        fontFamily: "Nunito Sans",
        fontWeight: "600",
    },
    paper: {
        color: "white",
        backgroundColor: '#343538',
        padding: "20px",
        marginTop: "20px",
        boxShadow: "2px 2px 1px 1px #fea905, 1px 1px 1px 0px #ECDE65, 1px 1px 5px 0px #ECDE65",
        [theme.breakpoints.down('xs')]: {
            padding: '10px',
        },
    },
    icons: {
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: "20px",
    },
    textField: {
        backgroundColor: "#8C8C8C",
        borderRadius: "30px",
        color: "white",
        width: "20em",
    },
    textFieldArea: {
        padding: "20px",
        [theme.breakpoints.down('xs')]: {
            padding: "0px",
            marginTop: "10px",
            height: "50px",
        },
    },
    submitBtn: {
        backgroundColor: "#fea907",
        borderRadius: "20px",
        width: "7em",
        height: "3.7em",
        position: "relative",
        right: "50px",
        [theme.breakpoints.down('sm')]: {
            right: "0px",
            bottom: "55px",
            left: "200px",
        },
        "&:hover, &:focus": {
            color: "orange",
            background: "black",
        },
    },
    icon: {
        color: "orange",
    },
    termsBtn: {
        backgroundColor: 'white',
        color: 'black',
        padding: '5px 10px',
        borderRadius: '5px',
        border: '1px solid black',
        '&:hover': {
            backgroundColor: 'black',
            color: 'white',
        },
    },
    refundBtn: {
        backgroundColor: 'white',
        color: 'black',
        padding: '5px 10px',
        borderRadius: '5px',
        border: '1px solid black',
        '&:hover': {
            backgroundColor: 'black',
            color: 'white',
        },
    },
}));

const Footer = () => {
    const classes = useStyles();
    
    return (
        <Box style={{ backgroundColor: '#27282B', padding: '20px' }}>
            <Grid container justify="space-around">
                {/* Reach Us Section */}
                <Grid item xs={12} md={5}>
                    <Paper elevation={6} className={classes.paper}>
                        <Typography className={classes.text} variant="h5">Reach Us</Typography>
                        <Typography className={classes.text} variant="body2">Contact our Support team</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Button size="small" style={{ backgroundColor: "#444548", color: "white" }}>
                                    <Mail />
                                    <a 
                                        href="mailto: info@expertedu.com" 
                                        style={{ textDecoration: "none", color: "inherit" }}
                                    >
                                        info@expertedu.com
                                    </a>
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button size="small" style={{ backgroundColor: "#444548", color: "white" }}>
                                    <Business />
                                    <a 
                                        href="https://goo.gl/maps/GmhC671p6ZArtr2B8" 
                                        style={{ textDecoration: "none", color: "inherit" }}
                                    >
                                        104, Aditya Complex 2, D-Block, Central Market, Prashant Vihar, Delhi-110085
                                    </a>
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button size="small" style={{ backgroundColor: "#444548", color: "white" }}>
                                    <Phone />
                                    <a 
                                        href="tel:9313555010" 
                                        style={{ textDecoration: "none", color: "inherit" }}
                                    >
                                        9313555010
                                    </a>
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                {/* Newsletter Subscription Section */}
                <Grid item xs={12} md={6}>
                    <Paper elevation={6} className={classes.paper}>
                        <Typography className={classes.text} variant="h5">Subscribe to our Newsletter</Typography>
                        <Typography className={classes.text} variant="body2">Get Daily Updates</Typography>
                        <Container className={classes.textFieldArea}>
                            <TextField 
                                className={classes.textField} 
                                id="filled-standard" 
                                label="Enter your email" 
                                variant="filled" 
                            />
                            <Button size="large" className={classes.submitBtn}>Submit</Button>
                            <Link to="/TermsAndConditions">
                                <Button size="large" className={classes.termsBtn}>Terms And Conditions</Button>
                            </Link>
                            <Link to="/RefundPolicies">
                                <Button size="large" className={classes.refundBtn}>Refund Policies</Button>
                            </Link>
                        </Container>
                    </Paper>
                </Grid>
            </Grid>

            {/* Social Media Section */}
            <Paper elevation={6} className={classes.paper}>
                <Typography>Contact us via our Socials</Typography>
                <Box className={classes.icons}>
                    <a target="_blank" href="https://www.instagram.com/experteducationalconsultancy/?hl=en">
                        <Instagram className={classes.icon} />
                    </a>
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100067182972359&mibextid=ZbWKwL">
                        <Facebook className={classes.icon} />
                    </a>
                    <a target="_blank" href="https://t.me/ExpertNEETUG">
                        <Telegram className={classes.icon} />
                    </a>
                </Box>
            </Paper>
        </Box>
    );
};

export default Footer;
