import NavBar from "./NavBar";
import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const dataBase = getFirestore();
        const cartCollectionRef = collection(dataBase, "carts");
        const cartSnapshot = await getDocs(cartCollectionRef);
        const cartsData = cartSnapshot.docs.map((doc) => doc.data());
        setCartItems(cartsData); // Actualiza la asignación de cartItems aquí
      } catch (error) {
        console.error("Error al obtener los productos del carrito:", error);
      }
    };

    fetchCartItems();
  }, []);


  const handleDeleteItem = async (productId) => {
    try {
      const dataBase = getFirestore();
      const cartDocRef = doc(dataBase, "carts", productId);
      await deleteDoc(cartDocRef);
      const updatedCartItems = cartItems.filter((item) => item.id !== productId);
      setCartItems(updatedCartItems);
      console.log("Producto eliminado del carrito:", productId);
    } catch (error) {
      console.error("Error al eliminar el producto del carrito:", error);
    }
  };


  return (
    <div>
      <NavBar />

      <div className="d-flex justify-content-around align-items-center my-4">
        <Row xs={1} sm={1} md={2} lg={3} xxl={3} className="g-5 mx-2">
          {cartItems.map((product) => (
            <Col key={product.id}>
              <Card style={{ width: "20rem" }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text className="card-description">
                    {product.description}
                  </Card.Text>
                  <div className="d-flex align-items-center justify-content-between">
                    <Button variant="primary">${product.price}</Button>
                    <Link to={`/item/${product.id}`}>
                      <Button variant="secondary">detalle</Button>
                    </Link>
                    <Button
                      variant="danger"
                      onClick={() => handleDeleteItem(product.id)}
                    >
                      Eliminar
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Cart;
