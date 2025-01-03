import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useState } from 'react';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


export default function DropDownProfile() {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

      const history = useHistory()

    const handleToggle = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAppointment = () => {
        history.push('/appointments')
    }



    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }


    

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <Stack direction="row" spacing={2}>
            <Paper>
                <MenuList>
                  
                    <MenuItem onClick={handleAppointment}>My Appoinments</MenuItem>
                    <MenuItem><LogOutButton/></MenuItem>
                </MenuList>
            </Paper>
            <div>
                <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                            }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList
                                        autoFocusItem={open}
                                        id="composition-menu"
                                        aria-labelledby="composition-button"
                                        onKeyDown={handleListKeyDown}
                                    >
                                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                                        <MenuItem onClick={handleClose}>My account</MenuItem>
                                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </Stack>
    );
}

    







