import React, { useEffect, useState } from 'react';
import { Grow, Box, Grid, makeStyles, CssBaseline, Container, Paper, Typography, Divider } from '@material-ui/core';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { RadioGroup, FormControlLabel, Radio } from '@mui/material';
import CalendarIcon from '../images/icons/calendar-line-icon.svg';

import axios from '../api/axios';

const REGISTERATION_URL = '/api/v1/register';

const useStyles = makeStyles(() => ({
    form: {
        width: "100%",
        padding: '20px',
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        background: "white",
    }
}));

const Register = ({ navbar, setNavbar }) => {
    const classes = useStyles();

    useEffect(() => {
        setNavbar(true);
    }, [])

    const [image, setImage] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [course, setCourse] = useState("");
    const [city, setCity] = useState("");
    const [gender, setGender] = useState("female");
    const [dob, setDob] = useState("2000-05-01");
    // const [score, setScore] = useState(100);
    // const [airRank, setAirRank] = useState(1000);
    // const [categoryRank, setCategoryRank] = useState(1000);
    const [neet, setNeet] = useState({
        score: 100,
        airRank: 1000,
        categoryRank: 1000
    });
    // const [domicile, setdomicile] = useState("");
    // const [passedTenth, setpassedTenth] = useState("");
    // const [passedEleventh, setpassedEleventh] = useState("");
    // const [passedTwelfth, setpassedTwelfth] = useState("");
    const [state, setState] = useState({
        domicile: "",
        passedTenth: "",
        passedEleventh: "",
        passedTwelfth: ""
    });
    const [isPwd, setPwd] = useState(false);
    // const [fatherOccupation, setfatherOccupation] = useState("");
    // const [motherOccupation, setmotherOccupation] = useState("");
    const [occParent, setoccParent] = useState({ fatherOccupation: "", motherOccupation: "" });
    const [quota, setQuota] = useState("General");
    const [feeBudget, setFeeBudget] = useState(null);
    const [phoneNo, setPhoneNo] = useState("");
    const [category, setCategory] = useState("central");

    const [failiure, setFailiure] = useState(false);
    const [failiureMessage, setFailiureMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [responseRecieved, setResponseRecieved] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResponseRecieved(true);
        setSuccess(false);
        setFailiure(false);
        if (!name || !email || !password || !course || !gender || !dob || !category || !state || !isPwd || !occParent) {
            setResponseRecieved(false);
            return alert("One or more fields missing");
        }
        try {
            const response = await axios.post(REGISTERATION_URL,
                JSON.stringify({ name, email, password, course, city, image, gender, dob, neet, state, isPwd, occParent, quota, feeBudget,category }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            )
            // console.log(JSON.stringify(response));
            // const accessToken = response.accessToken
            setResponseRecieved(false);
            setSuccess(true);
        } catch (error) {
            console.log(error);
            // console.log(error.response.data.msg);
            setFailiureMessage(error.response.data.msg);
            // alert(error.response.data.msg);
            setFailiure(true);
            setResponseRecieved(false);
        }
        console.log(name, email, password, course);

    }

    return (
        <Box
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            style={{ margin: '100px 50px' }}
        >
            {failiure ? (
                <Grow in timeout={500}>
                    <Stack sx={{ width: '100%' }}>
                        <Alert
                            severity="error"
                            action={
                                <Button href="/" color="inherit" size="small">
                                    Home
                                </Button>
                            }
                        >
                            {failiureMessage}
                        </Alert>
                    </Stack>
                </Grow>
            ) : (<></>)
            }
            {success ? (
                <Grow in timeout={500}>
                    <Stack sx={{ width: '100%' }}>
                        <Alert
                            action={
                                <Button href="/" color="inherit" size="small">
                                    Home
                                </Button>
                            }
                        >
                            Registeration Successful. Our team will soon reach out to you. Click on the button to go back to home page
                        </Alert>
                    </Stack>
                </Grow>
            ) : (<></>)
            }
            <Typography style={{ margin: '20px' }} variant="h3" align="center">
                Register
            </Typography>
            <Paper elevation={3} style={{ padding: '5px 0px 5px 0px' }}>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <Grid container spacing={0} sx={{ width: "100%" }}>
                        <Grid item sm={12} md={6}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant="h6" style={{ margin: '20px' }}>Choose a Profile Picture</Typography>
                                <img alt="Upload a Photo" style={{ width: '125px', height: '125px', borderRadius: '50%', objectFit: 'cover' }} src={image} />
                            </div>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <div style={{ margin: '20px 0px 0px 10px', display: 'flex', flexDirection: 'column' }}>
                                <input
                                    hidden
                                    id="avatar"
                                    type="file"
                                    accepts="image/*"
                                    name="myImage"
                                    onChange={(event) => {
                                        setImage(URL.createObjectURL(event.target.files[0]));

                                    }}
                                />
                                <label for="avatar">UPLOAD PHOTO</label>
                                <Button
                                    variant="contained"
                                    onClick={() => { setImage(null) }}
                                    sx={{
                                        fontFamily: "Nunito Sans",
                                        fontWeight: "600",
                                        background: "white",
                                        color: "black",
                                        borderRadius: "10px",
                                        transition: "all 0.5s ease",
                                        border: "2px solid orange",
                                        width: '150px',
                                        "&:hover,&:focus": {
                                            boxShadow: "0px 0px 6px 2.5px #fea905 ,1px 1px 1px 0px #ECDE65,1px 1px 1px 0px #ECDE65",
                                            color: "#fea905",
                                            background: "linear-gradient(to right bottom,black,#0411af)"
                                        }
                                    }}
                                > Remove Photo </Button>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <div style={{ background: 'rgba(102,173,255,0.4)', margin: '20px', padding: '10px', borderRadius: '20px' }}>
                                <Typography variant="h4" style={{ margin: '30px 10px 10px 10px' }}>Personal Details</Typography>
                                <TextField value={name} onChange={(e) => setName(e.target.value)} style={{ margin: '15px' }} id="outlined-basic" label="Name" variant="outlined" />
                                <TextField value={email} onChange={(e) => setEmail(e.target.value)} style={{ margin: '15px' }} id="outlined-basic" label="Email" variant="outlined" />
                                <TextField type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ margin: '15px', marginBottom: '20px' }} id="outlined-basic" label="Password" variant="outlined" />
                                <TextField value={city} onChange={(e) => setCity(e.target.value)} style={{ margin: '15px' }} id="outlined-basic" label="City" variant="outlined" />
                                <TextField value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} style={{ margin: '15px' }} id="outlined-basic" label="Phone Number" variant="outlined" />
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography style={{ margin: '15px 115px 15px 15px' }}>Select your Gender</Typography>
                                    <RadioGroup
                                        aria-labelledby="gender-radio-buttons-group-label"
                                        defaultValue={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                        name="gender-radio-buttons-group"
                                    >
                                        <div>
                                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        </div>
                                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                                    </RadioGroup>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography style={{ margin: '15px 40px 15px 15px' }}>Select your DOB : </Typography>
                                    <input style={{ background: 'transparent', border: '0px', borderTop: '2px', color: 'orange', fontWeight: "600" }} type="date" label="DOB" value={dob} onChange={(e) => setDob(e.target.value)} id="dob" />
                                    <img width="15px" style={{ position: 'relative', right: '15px', bottom: '2px' }} src={CalendarIcon} />
                                </div>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <div style={{ background: 'rgba(102,173,255,0.4)', margin: '20px', padding: '10px', borderRadius: '20px' }}>
                                <Typography variant="h4" style={{ margin: '30px 10px 10px 10px' }}>NEET Details</Typography>
                                <TextField
                                    select
                                    variant={course ? "filled" : "standard"}
                                    helperText="Enter the course you are interested in"
                                    style={{ margin: '15px' }}
                                    label="Course"
                                    value={course}
                                    onChange={(e) => setCourse(e.target.value)}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="MBBS">MBBS</MenuItem>
                                    <MenuItem value="BAMS">BAMS</MenuItem>
                                    <MenuItem value="BHMS">BHMS</MenuItem>
                                    <MenuItem value="BDS">BDS</MenuItem>
                                    <MenuItem value="MD/MS">MD/MDS</MenuItem>
                                    <MenuItem value="DNB">DNB</MenuItem>
                                    <MenuItem value="FCPS/CPS">FCPS/CPS</MenuItem>
                                </TextField>
                                <TextField type="number" value={neet.score} onChange={(e) => setNeet({ ...neet, score: e.target.value })} style={{ margin: '15px' }} id="outlined-basic" label="Score" variant="outlined" />
                                <TextField type="number" value={neet.airRank} onChange={(e) => setNeet({ ...neet, airRank: e.target.value })} style={{ margin: '15px' }} id="outlined-basic" label="AIR Rank" variant="outlined" />
                                <TextField type="number" value={neet.categoryRank} onChange={(e) => setNeet({ ...neet, categoryRank: e.target.value })} style={{ margin: '15px' }} id="outlined-basic" label="Category Rank" variant="outlined" />
                                <TextField
                                    select
                                    variant={state.domicile ? "filled" : "standard"}
                                    helperText="Enter the state you are domicile in"
                                    style={{ margin: '15px 60px 15px 15px' }}
                                    label="Domicile State"
                                    value={state.domicile}
                                    onChange={(e) => setState({ ...state, domicile: e.target.value })}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
                                    <MenuItem value="Arunachal Pradesh">Arunachal Pradesh</MenuItem>
                                    <MenuItem value="Assam">Assam</MenuItem>
                                    <MenuItem value="Bihar">Bihar</MenuItem>
                                    <MenuItem value="Chhatisgarh">Chattisgarh</MenuItem>
                                    <MenuItem value="Goa">Goa</MenuItem>
                                    <MenuItem value="Gujarat">Gujarat</MenuItem>
                                    <MenuItem value="Haryana">Haryana</MenuItem>
                                    <MenuItem value="Himachal Pradesh">Himachal Pradesh</MenuItem>
                                    <MenuItem value="Jharkand">Jharkand</MenuItem>
                                    <MenuItem value="Karnatka">Karnatka</MenuItem>
                                    <MenuItem value="Kerala">Kerala</MenuItem>
                                    <MenuItem value="Madhya Pradesh">Madhya Pradesh</MenuItem>
                                    <MenuItem value="Maharashtra">Maharashtra</MenuItem>
                                    <MenuItem value="Manipur">Manipur</MenuItem>
                                    <MenuItem value="Meghalya">Meghalya</MenuItem>
                                    <MenuItem value="Mizoram">Mizoram</MenuItem>
                                    <MenuItem value="Nagaland">Nagaland</MenuItem>
                                    <MenuItem value="Odisha">Odisha</MenuItem>
                                    <MenuItem value="Punjab">Punjab</MenuItem>
                                    <MenuItem value="Rajasthan">Rajasthan</MenuItem>
                                    <MenuItem value="Sikkim">Sikkim</MenuItem>
                                    <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
                                    <MenuItem value="Telangana">Telangana</MenuItem>
                                    <MenuItem value="Tripura">Tripura</MenuItem>
                                    <MenuItem value="Uttarakhand">Uttarakhand</MenuItem>
                                    <MenuItem value="Uttar Pradesh">Uttar Pradesh</MenuItem>
                                    <MenuItem value="West Bengal">West Bengal</MenuItem>
                                </TextField>
                                <TextField
                                    select
                                    variant={state.passedTenth ? "filled" : "standard"}
                                    helperText="Enter the state you passed your 10th from"
                                    style={{ margin: '15px' }}
                                    label="Tenth State"
                                    value={state.passedTenth}
                                    onChange={(e) => setState({ ...state, passedTenth: e.target.value })}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
                                    <MenuItem value="Arunachal Pradesh">Arunachal Pradesh</MenuItem>
                                    <MenuItem value="Assam">Assam</MenuItem>
                                    <MenuItem value="Bihar">Bihar</MenuItem>
                                    <MenuItem value="Chhatisgarh">Chattisgarh</MenuItem>
                                    <MenuItem value="Goa">Goa</MenuItem>
                                    <MenuItem value="Gujarat">Gujarat</MenuItem>
                                    <MenuItem value="Haryana">Haryana</MenuItem>
                                    <MenuItem value="Himachal Pradesh">Himachal Pradesh</MenuItem>
                                    <MenuItem value="Jharkand">Jharkand</MenuItem>
                                    <MenuItem value="Karnatka">Karnatka</MenuItem>
                                    <MenuItem value="Kerala">Kerala</MenuItem>
                                    <MenuItem value="Madhya Pradesh">Madhya Pradesh</MenuItem>
                                    <MenuItem value="Maharashtra">Maharashtra</MenuItem>
                                    <MenuItem value="Manipur">Manipur</MenuItem>
                                    <MenuItem value="Meghalya">Meghalya</MenuItem>
                                    <MenuItem value="Mizoram">Mizoram</MenuItem>
                                    <MenuItem value="Nagaland">Nagaland</MenuItem>
                                    <MenuItem value="Odisha">Odisha</MenuItem>
                                    <MenuItem value="Punjab">Punjab</MenuItem>
                                    <MenuItem value="Rajasthan">Rajasthan</MenuItem>
                                    <MenuItem value="Sikkim">Sikkim</MenuItem>
                                    <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
                                    <MenuItem value="Telangana">Telangana</MenuItem>
                                    <MenuItem value="Tripura">Tripura</MenuItem>
                                    <MenuItem value="Uttarakhand">Uttarakhand</MenuItem>
                                    <MenuItem value="Uttar Pradesh">Uttar Pradesh</MenuItem>
                                    <MenuItem value="West Bengal">West Bengal</MenuItem>
                                </TextField>
                                <TextField
                                    select
                                    variant={state.passedEleventh ? "filled" : "standard"}
                                    helperText="Enter the state you passed your 11th from"
                                    style={{ margin: '15px' }}
                                    label="Eleventh State"
                                    value={state.passedEleventh}
                                    onChange={(e) => setState({ ...state, passedEleventh: e.target.value })}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
                                    <MenuItem value="Arunachal Pradesh">Arunachal Pradesh</MenuItem>
                                    <MenuItem value="Assam">Assam</MenuItem>
                                    <MenuItem value="Bihar">Bihar</MenuItem>
                                    <MenuItem value="Chhatisgarh">Chattisgarh</MenuItem>
                                    <MenuItem value="Goa">Goa</MenuItem>
                                    <MenuItem value="Gujarat">Gujarat</MenuItem>
                                    <MenuItem value="Haryana">Haryana</MenuItem>
                                    <MenuItem value="Himachal Pradesh">Himachal Pradesh</MenuItem>
                                    <MenuItem value="Jharkand">Jharkand</MenuItem>
                                    <MenuItem value="Karnatka">Karnatka</MenuItem>
                                    <MenuItem value="Kerala">Kerala</MenuItem>
                                    <MenuItem value="Madhya Pradesh">Madhya Pradesh</MenuItem>
                                    <MenuItem value="Maharashtra">Maharashtra</MenuItem>
                                    <MenuItem value="Manipur">Manipur</MenuItem>
                                    <MenuItem value="Meghalya">Meghalya</MenuItem>
                                    <MenuItem value="Mizoram">Mizoram</MenuItem>
                                    <MenuItem value="Nagaland">Nagaland</MenuItem>
                                    <MenuItem value="Odisha">Odisha</MenuItem>
                                    <MenuItem value="Punjab">Punjab</MenuItem>
                                    <MenuItem value="Rajasthan">Rajasthan</MenuItem>
                                    <MenuItem value="Sikkim">Sikkim</MenuItem>
                                    <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
                                    <MenuItem value="Telangana">Telangana</MenuItem>
                                    <MenuItem value="Tripura">Tripura</MenuItem>
                                    <MenuItem value="Uttarakhand">Uttarakhand</MenuItem>
                                    <MenuItem value="Uttar Pradesh">Uttar Pradesh</MenuItem>
                                    <MenuItem value="West Bengal">West Bengal</MenuItem>
                                </TextField>
                                <TextField
                                    select
                                    variant={state.passedTwelfth ? "filled" : "standard"}
                                    helperText="Enter the state you passed your 12th from"
                                    style={{ margin: '15px' }}
                                    label="Twelfth State"
                                    value={state.passedTwelfth}
                                    onChange={(e) => setState({ ...state, passedTwelfth: e.target.value })}
                                >
                                    <MenuItem value={null}>
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
                                    <MenuItem value="Arunachal Pradesh">Arunachal Pradesh</MenuItem>
                                    <MenuItem value="Assam">Assam</MenuItem>
                                    <MenuItem value="Bihar">Bihar</MenuItem>
                                    <MenuItem value="Chhatisgarh">Chattisgarh</MenuItem>
                                    <MenuItem value="Goa">Goa</MenuItem>
                                    <MenuItem value="Gujarat">Gujarat</MenuItem>
                                    <MenuItem value="Haryana">Haryana</MenuItem>
                                    <MenuItem value="Himachal Pradesh">Himachal Pradesh</MenuItem>
                                    <MenuItem value="Jharkand">Jharkand</MenuItem>
                                    <MenuItem value="Karnatka">Karnatka</MenuItem>
                                    <MenuItem value="Kerala">Kerala</MenuItem>
                                    <MenuItem value="Madhya Pradesh">Madhya Pradesh</MenuItem>
                                    <MenuItem value="Maharashtra">Maharashtra</MenuItem>
                                    <MenuItem value="Manipur">Manipur</MenuItem>
                                    <MenuItem value="Meghalya">Meghalya</MenuItem>
                                    <MenuItem value="Mizoram">Mizoram</MenuItem>
                                    <MenuItem value="Nagaland">Nagaland</MenuItem>
                                    <MenuItem value="Odisha">Odisha</MenuItem>
                                    <MenuItem value="Punjab">Punjab</MenuItem>
                                    <MenuItem value="Rajasthan">Rajasthan</MenuItem>
                                    <MenuItem value="Sikkim">Sikkim</MenuItem>
                                    <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
                                    <MenuItem value="Telangana">Telangana</MenuItem>
                                    <MenuItem value="Tripura">Tripura</MenuItem>
                                    <MenuItem value="Uttarakhand">Uttarakhand</MenuItem>
                                    <MenuItem value="Uttar Pradesh">Uttar Pradesh</MenuItem>
                                    <MenuItem value="West Bengal">West Bengal</MenuItem>
                                </TextField>
                            </div>
                        </Grid>
                        <Grid item md={12}>
                            <div style={{ background: 'rgba(102,173,255,0.4)', margin: '20px', padding: '10px', borderRadius: '20px' }}>
                                <Typography variant="h4" style={{ margin: '15px' }}>Other Info</Typography>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography style={{ margin: '20px' }}>Are you a person with disablilties ? </Typography>
                                    <RadioGroup
                                        aria-labelledby="pwd-radio-buttons-group-label"
                                        defaultValue={isPwd}
                                        onChange={(e) => setPwd(e.target.value)}
                                        name="pwd-radio-buttons-group"
                                    >
                                        <div>
                                            <FormControlLabel value={false} control={<Radio />} label="No" />
                                            <FormControlLabel value={true} control={<Radio />} label="Yes" />
                                        </div>
                                    </RadioGroup>
                                </div>
                                <TextField
                                    select
                                    variant={quota ? "filled" : "standard"}
                                    helperText="Select Quota"
                                    style={{ margin: '15px' }}
                                    label="Quota"
                                    value={quota}
                                    onChange={(e) => setQuota(e.target.value)}
                                >
                                    <MenuItem value="General">General</MenuItem>
                                    <MenuItem value="SC">SC</MenuItem>
                                    <MenuItem value="ST">ST</MenuItem>
                                    <MenuItem value="OBC">OBC</MenuItem>
                                </TextField>
                                <TextField type="number" style={{ margin: '15px' }} value={feeBudget} onChange={(e) => setFeeBudget(e.target.value)} id="outlined-basic" label="Annual Fee Budget (INR)" variant="outlined" />
                                <TextField
                                    select
                                    variant={category ? "filled" : "standard"}
                                    helperText="Select Category"
                                    style={{ margin: '15px' }}
                                    label="Category"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <MenuItem value="central">Central</MenuItem>
                                    <MenuItem value="state">State</MenuItem>
                                </TextField>
                                <div style={{ margin: '15px' }}>
                                    <Typography variant="h6">Parent's occParent</Typography>
                                    <TextField
                                        select
                                        variant={occParent.motherOccupation ? "filled" : "standard"}
                                        helperText="Enter Mother's occParent"
                                        value={occParent.motherOccupation}
                                        onChange={(e) => setoccParent({ ...occParent, motherOccupation: e.target.value })}
                                        style={{ margin: '15px', width: '200px' }}
                                        id="outlined-basic"
                                        label="Mother's occParent"
                                    >
                                        <MenuItem value="ESI">ESI</MenuItem>
                                        <MenuItem value="Defence">Defence</MenuItem>
                                        <MenuItem value="Paramilitary">Paramilitary</MenuItem>
                                        <MenuItem value="Judiciary">Judiciaary</MenuItem>
                                        <MenuItem value="other">Other</MenuItem>

                                    </TextField>
                                    <TextField
                                        select
                                        helperText="Enter Father's occParent"
                                        value={occParent.fatherOccupation}
                                        variant={occParent.fatherOccupation ? "filled" : "standard"}
                                        onChange={(e) => setoccParent({ ...occParent, fatherOccupation: e.target.value })}
                                        style={{ margin: '15px', width: '200px' }}
                                        id="outlined-basic"
                                        label="Father's occParent"
                                    >
                                        <MenuItem value="ESI">ESI</MenuItem>
                                        <MenuItem value="Defence">Defence</MenuItem>
                                        <MenuItem value="Paramilitary">Paramilitary</MenuItem>
                                        <MenuItem value="Judiciary">Judiciaary</MenuItem>
                                        <MenuItem value="other">Other</MenuItem>
                                    </TextField>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    {responseRecieved ?
                        <Button color="primary" style={{ margin: '5px' }} variant="contained"><CircularProgress style={{ color: "white" }} /></Button>
                        :
                        <Button type="submit" color="primary" style={{ margin: '5px' }} variant="contained">Sign UP</Button>
                    }
                </form>
            </Paper>
        </Box >
    )
}

export default Register;