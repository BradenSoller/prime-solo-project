import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"



export default function ScheduleForm() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [zip, setZip] = useState('');
    const [description, setDescription] = useState('');
    const [budget, setBudget] = useState('');

    const dispatch = useDispatch();

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
                budget: budget
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

    };
    return (
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
    )

    

    

}