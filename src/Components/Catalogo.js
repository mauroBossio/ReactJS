import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import Products from "./Products.json";
import { Link } from "react-router-dom";

function Catalogo() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(Products);
    }, []);

    return (
        <div className="d-flex justify-content-around align-items-center my-4">
            <Row xs={1} sm={2} md={2} lg={3} xxl={4} className="g-5 mx-2">
                {data.map((item) => (
                    <Col key={item.id}>
                        <Card style={{ width: "20rem" }}>
                            <Card.Img variant="top" src={item.img} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text className="card-description">
                                    {item.description}
                                </Card.Text>
                                <div className="d-flex align-items-center justify-content-between">
                                    <Button variant="primary">{item.price}</Button>
                                    <Link to={`/item/${item.id}`}>
                                        <Button variant="secondary">Ir al detalle</Button>
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Catalogo;
