import React from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import "../DropDown/DropDownProfile.css"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



export function DropDownProfile() {
let history = useHistory()

    const handleHomeSchedule = () => {
        history.push('/appointments')
    }
    
    return (
        <div className="Dropdown">
        <ul>
            <li><LogOutButton/></li>
            <li onClick={handleHomeSchedule}>MyAppointments</li>
            </ul>
        </div>
)

    







}