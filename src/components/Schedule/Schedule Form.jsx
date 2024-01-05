import { useState, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import './ScheduleForm.css';
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function ScheduleForm({ appointment }) {
    
   const history = useHistory()
   
 
    
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
   
    const [service, setService] = useState('');
    console.log('service', service);

    const dispatch = useDispatch();

  
    
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


    
    return (
        <div>
          
        <form onSubmit={newAppointment}>
                <TextField
                    className="input"
                    id="outlined-controlled"
                    label="First Name"
                type="text"
                value={firstName}
               
                onChange={(event) => setFirstName(event.target.value)} 
            />
                <TextField
                    className="input"
                    id="outlined-controlled"
                    label="Last Name"
                type="text"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
            />
                <TextField
                    className="input"
                    id="outlined-controlled"
                    label="Email"
                type="text"
                value={email}
               
                onChange={(event) => setEmail(event.target.value)}
            />
                <TextField
                    className="input"
                    id="outlined-controlled"
                    label="Phone Number"
                type="text"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
            />
                <TextField
                    className="input"
                    id="outlined-controlled"
                    label="Address"
                type="text"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
            />
                <TextField
                    className="input"
                    id="outlined-controlled"
                    label="Zip"
                type="text"
                value={zip}
                onChange={(event) => setZip(event.target.value)}
                />
                
                <select value={service} onChange={(e) => setService(e.target.value)}>
                    <option value={0}>select</option>
                    <option value={1}>Rock Removal</option>
                    <option value={2}>Deck Staining</option>
                    <option value={3}>Weeding</option>
                    <option value={4}>Tree Triming </option>
                    <option value={5}>Bursh/Junk Removal</option>
                    <option value={6}>Deck Staining</option>





                </select>
                
                <TextField
                    className="input"
                    id="outlined-controlled"
                    label="Description"
                type="text"
                value={description}
          
                onChange={(event) => setDescription(event.target.value)}
            />
                <TextField
                    className="input"
                    id="outlined-controlled"
                    label="Budget"
                type="text"
                value={budget}
           
                onChange={(event) => setBudget(event.target.value)}
            />
            <Button variant="contained" color="warning" type="onSubmit">submit</Button>
           
            </form>
        </div>
    )

    

    

}