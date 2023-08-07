import React, { Fragment, useState, useEffect } from "react"
import { Button, InputGroup, Form, Image } from 'react-bootstrap'
import './Reciclar.css'

function Reciclar() {
    const [item, setItem] = useState([{
        item: 'nombre',
        reciclable: "true",
        imagen: 'https://previews.123rf.com/images/jannoon028/jannoon0281209/jannoon028120900014/15058422-hoja-de-papel-p%C3%A1gina-de-papel-con-curl-ilustraci%C3%B3n-vectorial.jpg',
    },
    {
        item: 'nombre',
        reciclable: "false",
        imagen: 'https://estaticos-cdn.prensaiberica.es/clip/590866de-13ee-43ef-8144-548a3ad894f1_16-9-aspect-ratio_default_0.jpg',
    },])
    const [itemActual, setItemActual] = useState(0)

    const handleChange = (e) => {
        e.preventDefault()
        console.log(e.target)
        console.log(item[1].reciclable)
        if (item[1].reciclable === e.target.value) {
            alert('Correcto')
        }
        else {
            alert('Incorrecto')
        }
    }

    return (
        <>
            <div className="banderita" ></div>
            <form className="image-container" >
                <Image alt='' src={item[1].imagen} />
                <div className="button-container" >
                    <Button variant="success" onClick={handleChange} value={true} >Reciclable</Button>
                    <Button variant="danger" onClick={handleChange} value={false} >No reciclable</Button>
                </div>
            </form>
        </>
    )
}

export default Reciclar