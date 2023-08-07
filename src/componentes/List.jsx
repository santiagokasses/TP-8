import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './List.css';

function List() {
    return (
        <ListGroup>
            <ListGroup.Item><Link to={"/Reciclar"}>Reciclar</Link></ListGroup.Item>
            <ListGroup.Item><Link to={"/ProblemasAmbientales"}>Problemas ambientales</Link></ListGroup.Item>
            <ListGroup.Item><Link to={"/CalentamientoGlobal"}>Calentamiento global</Link></ListGroup.Item>
        </ListGroup>
    );
}

export default List;