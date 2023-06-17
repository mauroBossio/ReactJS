import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getFirestore, getDocs, collection } from "firebase/firestore";


function Catalogo() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const collectionRef = collection(db, 'items');
        getDocs(collectionRef)    
        .then((res) => {
            setData( () => 
            res.docs.map((doc) => ({id: doc.id, ...doc.data()})));
        })

        .catch((err) => {
            console.log(err)});
    }, [] );




  return (
        <div className="d-flex justify-content-around align-items-center my-4">
            <Row xs={1} sm={1} md={2} lg={3} xxl={3} className="g-5 mx-2">
                {data.map((item) => (
                    <Col key={item.id}>
                        <Card style={{ width: "20rem" }}>
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text className="card-description">
                                    {item.description}
                                </Card.Text>
                                <div className="d-flex align-items-center justify-content-between">
                                    <Button variant="primary">${item.price}</Button>
                                    <Link to={`/item/${item.id}`}>
                                        <Button variant="secondary" >Ir al detalle</Button>
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
