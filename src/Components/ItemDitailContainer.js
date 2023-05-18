import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import NavBar from "./NavBar";
import { Card, Button, Row, Col } from "react-bootstrap";
import Products from './Products.json';



const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const product = Products.find((product) => product.id === parseInt(id));
        setItem(product);
    }, [id]);
    return (

        <div>
            <NavBar />
            {item ? ( /*aqui estoy usando un operador ternario para evitar que cuando el json no este cargado figure un espacio en blanco    */
                <div className="d-flex justify-content-around align-items-center my-4">
                    <Row xs={1} sm={2} md={2} lg={3} xxl={4} className="g-5 mx-2">
                        <Col key={item.id}>
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant='top' src={item.img} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text className='card-description'>{item.description}</Card.Text>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <Button variant="primary">{item.price}</Button>
                                        <Link to={`/item/${item.id}`}>
                                            <Button variant="secondary">Ir al detalle</Button>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </div>
            ) : (
                <p>Cargando detalles del producto...</p>
            )}
        </div>

    );
};

export default ItemDetailContainer;
