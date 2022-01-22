import React, { useEffect } from "react";
import './AppDemo.scss';
import { adddemoservices } from "./AppDemoServices";
import { ClickAwayListener } from '@material-ui/core';
import { AppDemoChildFunctionComponent } from "./AppDemoChildComponent";

export default function AppDemoFunctionComponent() {

    const [open, setOpen] = React.useState(false);

    useEffect(()=>{
        let msg = adddemoservices.getwelcome() + "function component";
        console.log("Welcome Message",msg);
    },[])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {
                open ?
                    <ClickAwayListener onClickAway={() => handleClose()}>
                        <AppDemoChildFunctionComponent/>
                    </ClickAwayListener>
                    : null
            }
            <div id="zxc" style={{width:"200px",border: "1px solid red"}} onClick={() => handleClickOpen()}>
                Hello
            </div>
        </>
    );
}
