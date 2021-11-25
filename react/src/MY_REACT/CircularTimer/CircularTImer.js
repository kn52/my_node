import React, { useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./CircularTimer.scss";

function CircularTimer () {

    const renderTime = ({ remainingTime }) => {

       if (remainingTime === 0) {
            return <div className="timer">Too lale...</div>;
        }

        return (
            <div className="timer">
                <div className="value">{parseInt(remainingTime/60) + ":"+ remainingTime%60}</div>
            </div>
        );
    };

    useEffect(()=>{
        // localStorage.getItem("password") === null && window.location.replace("/"); 
    })
    
    return (
        <>
            <CountdownCircleTimer
                isPlaying
                duration={300}
                initialRemainingTime={300}
                colors={[["#33b5e5",0.99],["#A30000"]]}
                onComplete={() => [false, 1000]}>
                {renderTime}
            </CountdownCircleTimer>
        </>
    )
}

export default CircularTimer;