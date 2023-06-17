import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from "./NavBar";
import { Card, Button, Row, Col, Form } from "react-bootstrap";
import { getFirestore, getDocs, doc, collection, setDoc, getDoc, updateDoc } from "firebase/firestore";
import uuid4 from "uuid4";
import Cart from './cart';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = async () => {


        try {
            const dataBase = getFirestore();
            const cartCollectionRef = collection(dataBase, "carts");
            const cantidadDocumentos = quantity; // Establece la cantidad de documentos a crear basada en quantity

            for (let i = 0; i < cantidadDocumentos; i++) {
                const cartItem = {
                    id: uuid4(), // Campo id inicialmente vacío
                    title: item.title,
                    quantity: quantity,
                    description: item.description,
                    image: item.image,
                    price: item.price,
                    size: item.size,
                    category: item.category
                };

                const itemList = collection(dataBase, "items");
                getDocs(itemList).then((res) => {
                    res.docs.map(x => {
                        let data = x.data();
                        if (data.title == cartItem.title) {
                            const docRef = doc(dataBase, 'items', x.id); // Obtén una referencia al documento actual
                            if (data.stock - quantity >= 0) {
                                const updatedData = { ...data, stock: data.stock - quantity }; // Actualiza solo el campo 'stock' en los datos
                                updateDoc(docRef, updatedData)
                                    .then(() => {
                                        console.log("productos guardados en Firebase.");
                                    });
                                const cartRef = doc(cartCollectionRef, cartItem.id); // Utiliza `cart${i + 1}` como nombre personalizado para el ID del documento

                                setDoc(cartRef, cartItem);
                                
                            }
                            else { console.log("No hay suficiente stock") }
                        }
                    });
                });


            }
        } catch (error) {
            console.error("Error al guardar los carritos en Firebase:", error);
        }
    };


    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        setQuantity(newQuantity);
    };

    useEffect(() => {
        console.log("El valor de quantity es:", quantity);
    }, [quantity]);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const dataBase = getFirestore();
                const productRef = doc(dataBase, 'items', id);
                const snapshot = await getDoc(productRef);
                if (snapshot.exists()) {
                    setItem(snapshot.data());
                } else {
                    console.log("No se encontró el producto.");
                }
            } catch (error) {
                console.error('Error al obtener el producto:', error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!item) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <NavBar />
            <div className="d-flex justify-content-around align-items-center my-4">
                <Row xs={1} sm={2} md={2} lg={3} xxl={4} className="g-5 mx-2">
                    <Col key={item.id}>
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant='top' src={item.image} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text className='card-description'>{item.description}</Card.Text>
                                <div className="d-flex align-items-center justify-content-between">
                                    <Button variant="primary">${item.price}</Button>
                                    <Form.Control type="number" value={quantity} onChange={handleQuantityChange} min={1} />
                                    <Button variant="success" onClick={handleAddToCart} > Agregar </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ItemDetailContainer;
