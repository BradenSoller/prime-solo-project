import { useState, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import './ScheduleForm.css';




export default function ScheduleForm({ appointment }) {
    
   
   
 
    
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

    };


    
    return (
        <div>
            
        <form onSubmit={newAppointment}>
            <input
                type="text"
                value={firstName}
                placeholder="FirstName"
                onChange={(event) => setFirstName(event.target.value)} 
            />
            <input
                type="text"
                value={lastName}
                placeholder="LastName"
                onChange={(event) => setLastName(event.target.value)}
            />
            <input
                type="text"
                value={email}
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
            />
            <input
                type="text"
                value={phoneNumber}
                placeholder="Phone #"
                onChange={(event) => setPhoneNumber(event.target.value)}
            />
            <input
                type="text"
                value={address}
                placeholder="address"
                onChange={(event) => setAddress(event.target.value)}
            />
            <input
                type="text"
                value={zip}
                placeholder="Zip"
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
                
            <input
                type="text"
                value={description}
                placeholder="description"
                onChange={(event) => setDescription(event.target.value)}
            />
            <input
                type="text"
                value={budget}
                placeholder="Budget"
                onChange={(event) => setBudget(event.target.value)}
            />
            <button>submit</button>
           
            </form>
        </div>
    )

    

    

}