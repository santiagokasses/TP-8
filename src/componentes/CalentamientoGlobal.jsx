import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ProgressBar from "@ramonak/react-progress-bar";
import Button from 'react-bootstrap/Button';
import './List.css';

function CalentamientoGlobal() {
    const [completed, setCompleted] = useState(50);

    useEffect(() => {
        const interval = setInterval(() => {
            if (completed < 100) {
                setCompleted(prevCompleted => prevCompleted + 1);
            }
        }, 200);

        return () => clearInterval(interval);
    }, [completed]);

    const handleClick = (e) => {
        setCompleted(completed - 1)
    }

    return (
        <>
        <div>
            <h1>Salvar al mundo</h1>
            <ProgressBar completed={completed} bgColor="grey" animateOnRender={true} />
        </div>
            <Button onClick={handleClick} >AAAAAAAAAAAA</Button>
        </>
    );
}

export default CalentamientoGlobal;
