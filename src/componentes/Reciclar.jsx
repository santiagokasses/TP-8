import React, { useState, useEffect } from "react"
import { Button, Image } from 'react-bootstrap'
import './Reciclar.css'

function Reciclar() {
    const [item, setItem] = useState([{
        item: 'Hoja de papel',
        reciclable: "true",
        imagen: 'https://previews.123rf.com/images/jannoon028/jannoon0281209/jannoon028120900014/15058422-hoja-de-papel-p%C3%A1gina-de-papel-con-curl-ilustraci%C3%B3n-vectorial.jpg',
    },
    {
        item: 'Hamburguesa',
        reciclable: "false",
        imagen: 'https://estaticos-cdn.prensaiberica.es/clip/590866de-13ee-43ef-8144-548a3ad894f1_16-9-aspect-ratio_default_0.jpg',
    },
    {
        item: 'Camila',
        reciclable: "true",
        imagen: 'https://previews.123rf.com/images/jirkaejc/jirkaejc2207/jirkaejc220700006/188308079-lata-arrugada-vac%C3%ADa-aislada-en-un-fondo-blanco.jpg',
    },])
    const [itemActual, setItemActual] = useState(0)

    useEffect(() => {
        setItemActual(Math.floor(Math.random() * item.length))
    }, [])

    const handleChange = (e) => {
        e.preventDefault()
        if (item[itemActual].reciclable === e.target.value) {
            if (item.length === 1) {
                document.getElementById('root').innerHTML = '<h1>¡Ganaste!</h1>'
            }
            else {
                alert('Correcto')
                item.splice(itemActual, 1)
                setItemActual(Math.floor(Math.random() * item.length))
            }
        }
        else {
            alert('Incorrecto')
        }
    }

    return (
        <form className="image-container" >
            <h1>¿Es reciclable?</h1>
            <h2>{item[itemActual].item}</h2>
            <Image alt='' src={item[itemActual].imagen} />
            <div className="button-container" >
                <Button variant="success" onClick={handleChange} value={true} >Reciclable</Button>
                <Button variant="danger" onClick={handleChange} value={false} >No reciclable</Button>
            </div>
        </form>
    )
}

export default Reciclar