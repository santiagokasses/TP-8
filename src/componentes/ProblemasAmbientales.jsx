import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import './List.css';
import React, { useEffect, useRef,useState } from 'react';

function ProblemasAmbientales() {

    const [textPosition, setTextPosition] = useState({ x: 0, y: 0 });

    const generateRandomPosition = () => {
      const maxX = window.innerWidth - 200; // Máxima posición X considerando el ancho del texto
      const maxY = window.innerHeight - 50; // Máxima posición Y considerando la altura del texto
  
      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;
  
      setTextPosition({ x: randomX, y: randomY });
    };
  
    return (
      <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
        <button onClick={generateRandomPosition}>Generar Texto Aleatorio</button>
        <div
          style={{
            position: 'absolute',
            left: textPosition.x + 'px',
            top: textPosition.y + 'px',
            backgroundColor: 'lightblue',
            padding: '10px',
            border: '1px solid black',
          }}
        >
          Texto en Posición Aleatoria
        </div>
      </div>
    );


    /*const textRef = useRef(null);

    useEffect(() => {
      const backgroundImage = new Image();
      backgroundImage.src = 'https://i.pinimg.com/564x/d6/d6/0a/d6d60a11f7f10eba6276763f54342f3b.jpg'; // Cambia a la ruta de tu imagen de fondo
      
      backgroundImage.onload = function() {
        const canvas = document.createElement('canvas');
        canvas.width = backgroundImage.width;
        canvas.height = backgroundImage.height;
  
        const context = canvas.getContext('2d');
        context.drawImage(backgroundImage, 0, 0, backgroundImage.width, backgroundImage.height);
  
        const textPositionX = textRef.current.offsetLeft;
        const textPositionY = textRef.current.offsetTop;
        
        const pixel = context.getImageData(textPositionX, textPositionY, 1, 1).data;
  
        const backgroundColor = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
  
        textRef.current.style.backgroundColor = backgroundColor; // Cambia el color de fondo del texto
      };
    }, []);
  
    return (
      <div
        ref={textRef}
        style={{
          fontSize: '24px',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        Texto en Color Automático
      </div>
    );*/
}

export default ProblemasAmbientales;


