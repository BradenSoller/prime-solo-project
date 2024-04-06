import { useState, useEffect, Fragment } from "react"
import { useDispatch, useSelector } from "react-redux"
import './ScheduleForm.css';
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function ScheduleForm({ appointment }) {

    const history = useHistory()

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    useEffect(() => {
        getServices()

    }, []);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [zip, setZip] = useState('');
    const [description, setDescription] = useState('');
    const [budget, setBudget] = useState('');

    const user = useSelector((store) => store.user);

    const [service, setService] = useState('');
    console.log('service', service);

    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const getServices = () => {
        dispatch({ type: "SAGA/GET_SERVICES" });
    };

    const newAppointment = (event) => {
        event.preventDefault();

        dispatch({
            type: "SAGA/POST_APPOINTMENT", payload: {
                first_name: firstName,
                last_name: lastName,
                email: email,
                phone_number: phoneNumber,
                address: address,
                zip: zip,
                description: description,
                budget: budget,
                service_id: service
            }
        });
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhoneNumber('')
        setAddress('')
        setZip('')
        setDescription('')
        setBudget('')

        setService('')

        history.push('/appointments')

    };

    const FillOutFormData = () => {
        setFirstName('Bethany')
        setLastName('Stevens')
        setEmail('BethanyStevens@gmail.com')
        setPhoneNumber('952-300-5247')
        setAddress('186 harlson Drive')
        setZip('Burnsville')
        setDescription('how long does this process take ?')
        setBudget('$1,000')

        setService('Deck Staining')
    }

    return (

        <div>
        { user.id ? < div >
    
             <div className="scheduleHeading">
            <h2 onClick={FillOutFormData}>Schedule</h2>
            </div>
            <form onSubmit={handleClickOpen}>
            <Fragment>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                            {"  Are you sure you wanna submit ?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                  your appointment will be looked at as soon as possible.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>close</Button>
                        <Button onClick={newAppointment} autoFocus>
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
                </Fragment>
                
                <TextField
                    className="input"
                    id="outlined-controlled"
                    label="First Name"
                    type="text"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                />
                <br />
                <br />
                <TextField
                    className="input"
                    id="outlined-controlled"
                    label="Last Name"
                    type="text"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                />
                <br />
                <br />
                <TextField
                    className="input"
                    id="outlined-controlled"
                    label="Email"
                    type="text"
                    value={email}

                    onChange={(event) => setEmail(event.target.value)}
                />
                <br />
                <br />
                <TextField
                    className="input"
                    id="outlined-controlled"
                    label="Phone Number"
                    type="text"
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                />
                <br />
                <br />
                <TextField
                    className="input"
                    id="outlined-controlled"
                    label="Address"
                    type="text"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                />
                <br />
                <br />
                <TextField
                    className="input"
                    id="outlined-controlled"
                    label="Zip"
                    type="text"
                    value={zip}
                    onChange={(event) => setZip(event.target.value)}
                />
                <br />
                <br />
                <select className="servicesForm" value={service} required onChange={(e) => setService(e.target.value)}>
                    <option value={0}>select</option>
                    <option value={1}>Rock Removal</option>
                    <option value={2}>Deck Staining</option>
                    <option value={3}>Weeding</option>
                    <option value={4}>Tree/Bush Triming </option>
                    <option value={5}>Brush/Junk Removal</option>
                    <option value={6}>Mulching</option>
    
                </select>
                <br />
                <br />
                <TextField
                    className="input"
                    id="outlined-controlled"
                    label="Description"
                    type="text"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <br />
                <br />
                <TextField
                    className="input"
                    id="outlined-controlled"
                    label="Budget"
                    type="text"
                    value={budget}

                    onChange={(event) => setBudget(event.target.value)}
                />
                <br />
                <br />
                <Button variant="contained" color="warning" type="onSubmit">submit</Button>

            </form>
            

            </div> : <div> <h1>Log In !</h1> </div> }
            
    </div>
    )





}